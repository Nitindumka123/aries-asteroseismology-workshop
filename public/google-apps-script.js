/**
 * ARIES International Workshop 2027 - Test Google Apps Script backend
 *
 * Deploy this script in the organizer's Google Apps Script project and bind it
 * to the test spreadsheet with these exact headers:
 * Registration ID | Timestamp | Event ID | Event Name | Applicant Type | Full Name | Email | Phone | Institution | Designation | City | State | Country | Research Interest | Passport Number | Date of Birth | Address | Passport Issue Date | Passport Issue Place | Passport Expiry Date | Custom Responses | Consent
 */

var DEFAULT_EVENT_ID = "ASTER-2027";
var DEFAULT_EVENT_NAME = "Synergistic Investigation of Stellar Clusters and Asteroseismology using High-resolution Spectroscopy and Space Photometry";

// Test-only configuration. Copy the ID between /d/ and /edit in the test
// spreadsheet URL into this constant before deploying the Apps Script.
var TEST_SPREADSHEET_ID = "1aOnSlPZAYN0nPZWatSLp5WfsyhGLD4GbnGUvEUn9-ng";
// Leave blank to use the first tab in the explicitly configured spreadsheet.
var TEST_SHEET_NAME = "";

var REQUIRED_HEADERS = [
  "Registration ID",
  "Timestamp",
  "Event ID",
  "Event Name",
  "Applicant Type",
  "Full Name",
  "Email",
  "Phone",
  "Institution",
  "Designation",
  "City",
  "State",
  "Country",
  "Research Interest",
  "Passport Number",
  "Date of Birth",
  "Address",
  "Passport Issue Date",
  "Passport Issue Place",
  "Passport Expiry Date",
  "Custom Responses",
  "Consent"
];

function doPost(e) {
  var lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000);
    var data = parseRequestData(e);
    var sheet = getTestSheet();
    var headers = ensureRequiredHeaders(sheet);
    var regId = createRegistrationId();
    var timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");

    var normalised = normaliseSubmission(data);

    var requiredError = validateRequiredFields(normalised);
    if (requiredError) {
      return response({ status: "error", message: requiredError });
    }

    if (normalised.applicantType === "FOREIGN NATIONAL") {
      var foreignError = validateForeignFields(normalised);
      if (foreignError) {
        return response({ status: "error", message: foreignError });
      }
    } else {
      normalised.passportNumber = "";
      normalised.surname = "";
      normalised.givenName = "";
      normalised.nationality = "";
      normalised.gender = "";
      normalised.dob = "";
      normalised.placeOfBirth = "";
      normalised.passportIssueDate = "";
      normalised.passportIssuePlace = "";
      normalised.passportExpiryDate = "";
    }

    var emailColumn = findHeaderIndex(headers, ["Email"]);
    if (emailColumn === -1) {
      return response({ status: "error", message: "Email column header not found in the sheet" });
    }

    if (isDuplicateEmail(sheet, emailColumn, normalised.email)) {
      return response({ status: "error", message: "Duplicate registration detected" });
    }

    normalised.customResponses = buildCustomResponses(normalised);

    var row = buildRow(headers, normalised, regId, timestamp);
    var previousLastRow = sheet.getLastRow();
    sheet.appendRow(row);
    var rowNumber = sheet.getLastRow();

    try {
      MailApp.sendEmail({
        to: "dumkanitin0@gmail.com",
        subject: "New ARIES Registration - " + (normalised.eventName || DEFAULT_EVENT_NAME),
        body:
          "A new delegate registration has been submitted successfully.\n\n" +
          "Registration ID: " + regId + "\n" +
          "Name: " + normalised.fullName + "\n" +
          "Email: " + normalised.email + "\n" +
          "Applicant Type: " + normalised.applicantType + "\n" +
          "Country: " + normalised.country + "\n\n" +
          "Please sign in to your Google Sheet to review the details."
      });
    } catch (mailErr) {
      console.error("MailApp Error: " + mailErr.toString());
    }

    return response({
      status: "success",
      regId: regId,
      rowNumber: rowNumber,
      previousLastRow: previousLastRow,
      message: "Registration recorded successfully"
    });
  } catch (err) {
    return response({ status: "error", message: err.toString() });
  } finally {
    try {
      lock.releaseLock();
    } catch (lockErr) {
      // The lock may not have been acquired if validation failed early.
    }
  }
}

function parseRequestData(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return {};
  }

  var raw = e.postData.contents;

  try {
    return JSON.parse(raw);
  } catch (jsonErr) {
    // Fall back to URL-encoded form submissions if the browser sends text/plain
  }

  var result = {};
  var pairs = raw.split("&");
  for (var i = 0; i < pairs.length; i++) {
    if (!pairs[i]) {
      continue;
    }
    var parts = pairs[i].split("=");
    var key = decodeURIComponent((parts[0] || "").replace(/\+/g, " "));
    var value = decodeURIComponent((parts.slice(1).join("=") || "").replace(/\+/g, " "));
    result[key] = value;
  }

  return result;
}

function normaliseSubmission(data) {
  return {
    eventId: data.eventId || DEFAULT_EVENT_ID,
    eventName: data.eventName || DEFAULT_EVENT_NAME,
    applicantType: data.applicantType || "",
    fullName: data.fullName || "",
    email: data.email || "",
    phone: data.phone || "",
    institution: data.institution || data.affiliation || "",
    designation: data.designation || "",
    city: data.city || "",
    state: data.state || "",
    country: data.country || "",
    researchInterest: data.researchInterest || data.researchArea || "",
    passportNumber: data.passportNumber || "",
    surname: data.surname || "",
    givenName: data.givenName || "",
    nationality: data.nationality || "",
    gender: data.gender || "",
    dob: data.dob || "",
    placeOfBirth: data.placeOfBirth || "",
    passportIssueDate: data.passportIssueDate || "",
    passportIssuePlace: data.passportIssuePlace || "",
    passportExpiryDate: data.passportExpiryDate || "",
    customResponses: data.customResponses || "",
    consent: data.consent || "",
    participationType: data.participationType || "",
    presentationTitle: data.presentationTitle || "",
    foodPreference: data.foodPreference || "",
    excursionOpt: data.excursionOpt || "",
    arrivalDate: data.arrivalDate || "",
    arrivalTime: data.arrivalTime || "",
    arrivalDetails: data.arrivalDetails || "",
    departureDate: data.departureDate || "",
    departureTime: data.departureTime || "",
    departureDetails: data.departureDetails || ""
  };
}

function validateRequiredFields(data) {
  var requiredFields = [
    "applicantType",
    "fullName",
    "email",
    "phone",
    "institution",
    "designation",
    "city",
    "state",
    "country",
    "researchInterest",
    "participationType",
    "foodPreference",
    "excursionOpt",
    "consent"
  ];

  for (var i = 0; i < requiredFields.length; i++) {
    if (!data[requiredFields[i]]) {
      return "Missing required field: " + requiredFields[i];
    }
  }

  return "";
}

function validateForeignFields(data) {
  var requiredFields = [
    "passportNumber",
    "surname",
    "givenName",
    "nationality",
    "gender",
    "dob",
    "placeOfBirth",
    "passportIssueDate",
    "passportIssuePlace",
    "passportExpiryDate"
  ];

  for (var i = 0; i < requiredFields.length; i++) {
    if (!data[requiredFields[i]]) {
      return "Passport details are required for Foreign Nationals";
    }
  }

  return "";
}

function buildCustomResponses(data) {
  return JSON.stringify({
    participationType: data.participationType || "",
    presentationTitle: data.presentationTitle || "",
    foodPreference: data.foodPreference || "",
    excursionOpt: data.excursionOpt || "",
    surname: data.surname || "",
    givenName: data.givenName || "",
    nationality: data.nationality || "",
    gender: data.gender || "",
    placeOfBirth: data.placeOfBirth || "",
    arrivalDate: data.arrivalDate || "",
    arrivalTime: data.arrivalTime || "",
    arrivalDetails: data.arrivalDetails || "",
    departureDate: data.departureDate || "",
    departureTime: data.departureTime || "",
    departureDetails: data.departureDetails || ""
  });
}

function getTestSheet() {
  if (!TEST_SPREADSHEET_ID) {
    throw new Error(
      "TEST_SPREADSHEET_ID is not configured. Copy the spreadsheet ID from the test Sheet URL into Code.gs."
    );
  }

  var spreadsheet = SpreadsheetApp.openById(TEST_SPREADSHEET_ID);
  var sheet = TEST_SHEET_NAME
    ? spreadsheet.getSheetByName(TEST_SHEET_NAME)
    : spreadsheet.getSheets()[0];

  if (!sheet) {
    throw new Error("Configured test sheet tab was not found: " + TEST_SHEET_NAME);
  }

  return sheet;
}

function ensureRequiredHeaders(sheet) {
  var headerValues = sheet.getRange(1, 1, 1, REQUIRED_HEADERS.length).getValues()[0];
  var isEmpty = headerValues.every(function(header) {
    return String(header || "").trim() === "";
  });

  if (isEmpty) {
    sheet.getRange(1, 1, 1, REQUIRED_HEADERS.length).setValues([REQUIRED_HEADERS]);
    return REQUIRED_HEADERS.slice();
  }

  for (var i = 0; i < REQUIRED_HEADERS.length; i++) {
    if (String(headerValues[i] || "").trim() !== REQUIRED_HEADERS[i]) {
      throw new Error(
        "Test sheet headers do not match the required columns. Expected column " +
        (i + 1) + ": " + REQUIRED_HEADERS[i]
      );
    }
  }

  return headerValues;
}

function buildRow(headers, data, regId, timestamp) {
  var row = [];

  for (var i = 0; i < headers.length; i++) {
    row.push(valueForHeader(headers[i], data, regId, timestamp));
  }

  return row;
}

function valueForHeader(header, data, regId, timestamp) {
  var normalisedHeader = normaliseHeader(header);

  switch (normalisedHeader) {
    case "registration id":
      return regId;
    case "timestamp":
      return timestamp;
    case "event id":
      return data.eventId;
    case "event name":
      return data.eventName;
    case "applicant type":
      return data.applicantType;
    case "full name":
      return data.fullName;
    case "email":
      return data.email;
    case "phone":
      return data.phone;
    case "institution":
    case "affiliation institution":
    case "affiliation":
      return data.institution;
    case "designation":
      return data.designation;
    case "city":
      return data.city;
    case "state":
      return data.state;
    case "country":
      return data.country;
    case "research interest":
    case "research area specialization":
    case "research area":
      return data.researchInterest;
    case "passport number":
      return data.passportNumber;
    case "date of birth":
      return data.dob;
    case "address":
      return data.address;
    case "passport issue date":
      return data.passportIssueDate;
    case "passport issue place":
      return data.passportIssuePlace;
    case "passport expiry date":
      return data.passportExpiryDate;
    case "custom responses":
      return data.customResponses;
    case "consent":
      return data.consent;
    default:
      return "";
  }
}

function isDuplicateEmail(sheet, emailColumn, emailValue) {
  if (!emailValue) {
    return false;
  }

  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) {
    return false;
  }

  var emailValues = sheet.getRange(2, emailColumn + 1, lastRow - 1, 1).getValues();
  var target = emailValue.toString().toLowerCase().trim();

  for (var i = 0; i < emailValues.length; i++) {
    var current = (emailValues[i][0] || "").toString().toLowerCase().trim();
    if (current === target) {
      return true;
    }
  }

  return false;
}

function findHeaderIndex(headers, aliases) {
  for (var i = 0; i < headers.length; i++) {
    var normalised = normaliseHeader(headers[i]);
    for (var j = 0; j < aliases.length; j++) {
      if (normalised === normaliseHeader(aliases[j])) {
        return i;
      }
    }
  }

  return -1;
}

function normaliseHeader(header) {
  return String(header || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function createRegistrationId() {
  return "REG-" + Math.floor(100000 + Math.random() * 900000);
}

function response(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
