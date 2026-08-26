/**
 * ARIES International Workshop 2027 — Google Apps Script for Registration Backend
 * 
 * INSTRUCTIONS TO DEPLOY:
 * 1. Open Google Sheets (https://sheets.new)
 * 2. In row 1, add column headers:
 *    Timestamp | Full Name | Email | Affiliation | Designation | Country | Research Area | Participation Type | Presentation Title | Food Preference | Arrival Date | Arrival Time | Arrival Flight/Train | Departure Date | Departure Time | Departure Flight/Train
 * 3. Go to Extensions -> Apps Script
 * 4. Replace all code in Code.gs with this script.
 * 5. Click "Deploy" -> "New deployment" -> Select type: "Web app"
 * 6. Execute as: "Me" | Who has access: "Anyone"
 * 7. Click "Deploy", grant permissions, and copy the Web App URL.
 * 8. In `src/pages/registration.astro`, set `GOOGLE_SCRIPT_WEBAPP_URL` to your Web App URL.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date().toLocaleString(),
      data.fullName || '',
      data.email || '',
      data.affiliation || '',
      data.designation || '',
      data.country || '',
      data.researchArea || '',
      data.participationType || '',
      data.presentationTitle || '',
      data.foodPreference || '',
      data.arrivalDate || '',
      data.arrivalTime || '',
      data.arrivalDetails || '',
      data.departureDate || '',
      data.departureDetails || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Registration recorded successfully" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
