// =============================================================================
// Central content for the ARIES International Workshop Portal.
// Authoritative source: Proposal for Organizing an International Workshop on
// Synergistic Investigation of Stellar Clusters and Asteroseismology using
// High-resolution Spectroscopy and Space Photometry (8–11 February 2027)
// Jointly organized by ARIES, Delhi University & IIT Delhi
// Sponsored by Department of Science and Technology (DST), Govt. of India
// (Under the project DST/ICD/Call-5/BRICS/SAPTARISI/2023/G)
// =============================================================================

export const event = {
  name: 'Synergistic Investigation of Stellar Clusters and Asteroseismology using High-resolution Spectroscopy and Space Photometry',
  shortName: 'Stellar Clusters · Asteroseismology · Spectroscopy',
  organisers: 'ARIES, Delhi University & IIT Delhi',
  dates: '8–11 February 2027',
  datesShort: '8–11 Feb 2027',
  year: '2027',
  venue: 'Institute of Informatics and Communication, Delhi University, South Campus, New Delhi',
  seats: 'Invitation only',
  duration: '8–11 February 2027',
  tagline:
    'An international workshop fostering synergistic research between asteroseismology and stellar cluster studies to define strategies for future missions and datasets.',
  sponsorship:
    'Sponsored by Department of Science and Technology (DST), Govt. of India (Under the project DST/ICD/Call-5/BRICS/SAPTARISI/2023/G)',
  projectCode: 'DST/ICD/Call-5/BRICS/SAPTARISI/2023/G',
  grantSanctioned: 'Rs. 10,00,000/-',
  totalBudget: 'Rs. 23,00,000/-',
  participationMode: 'By Invitation Only',
};

export const institute = {
  name: 'Aryabhatta Research Institute of Observational Sciences',
  acronym: 'ARIES',
  authority: 'An Autonomous Institute under the Department of Science & Technology (DST), Govt. of India',
  address: 'Manora Peak, Nainital – 263001, Uttarakhand, India',
  phone: '+91-5942-270700',
  fax: '+91-5942-233439',
  website: 'https://www.aries.res.in',
};

export const host = {
  name: 'Delhi University, South Campus',
  acronym: 'Delhi University',
  note: 'Host campus for the International Workshop at the Institute of Informatics and Communication, Delhi University, South Campus, New Delhi.',
  location: 'Delhi University, South Campus, New Delhi',
};

export const partners = [
  {
    name: 'Aryabhatta Research Institute of Observational Sciences',
    acronym: 'ARIES, Nainital',
    role: 'Organising Institute & Project Lead',
    note: 'Premier autonomous national research institute under the Department of Science & Technology (DST), Govt. of India, specializing in observational astronomy and astrophysics at Manora Peak, Nainital.',
    website: 'https://www.aries.res.in',
  },
  {
    name: 'Delhi University, South Campus',
    acronym: 'Delhi University',
    role: 'Host Campus & Venue',
    note: 'Host institute and venue for the workshop at Delhi University, South Campus, New Delhi.',
    website: 'http://south.du.ac.in',
  },
  {
    name: 'Indian Institute of Technology Delhi',
    acronym: 'IIT Delhi',
    role: 'Joint Organiser',
    note: 'Institute of National Importance contributing computational, theoretical, and instrumentation expertise to stellar astrophysics and high-performance computing.',
    website: 'https://home.iitd.ac.in',
  },
];

// ---- Navigation (order & labels are organized into clean dropdowns) ---------
export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'Overview',
    children: [
      { label: 'Scientific Rationale', href: '/overview/scientific-rationale' },
      { label: 'Workshop Theme', href: '/overview/workshop-theme' },
      { label: 'Information to Participants', href: '/overview/information-to-participants' },
    ],
  },
  {
    label: 'Programme',
    children: [
      { label: 'Scientific Program', href: '/programme/scientific-program' },
      { label: 'List of Participants', href: '/programme/list-of-participants' },
      { label: 'Key Speakers', href: '/programme/key-speakers' },
      { label: 'List of Posters', href: '/programme/list-of-posters' },
    ],
  },
  {
    label: 'People',
    children: [
      { label: 'Committee', href: '/committees' },
      { label: 'Key Organizers', href: '/organizers' },
      { label: 'Sponsored', href: '/sponsored' },
    ],
  },
  { label: 'Registration', href: '/registration' },
  {
    label: 'Venue & Travel',
    children: [
      { label: 'Accommodation', href: '/accommodation' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Workshop Handbook', href: '/downloads' },
      { label: 'Conference Poster', href: '/conference-poster' },
      { label: 'Guidelines', href: '/guidelines' },
    ],
  },
  { label: 'Taj Mahal Agra Excursion', href: '/excursion' },
];

// ---- Carousel (Real, licensed campus & conference images) ------------------
export const carousel = [
  {
    src: '/images/aries-nainital.jpg',
    alt: 'Aryabhatta Research Institute of Observational Sciences, Manora Peak, Nainital',
    kicker: 'ARIES, Nainital',
    title: 'ARIES Nainital',
    text: '',
  },
  {
    src: '/images/iit-delhi.jpg',
    alt: 'IIT Delhi academic institution campus',
    kicker: 'Joint Organisation',
    title: 'IIT Delhi',
    text: '',
  },
  {
    src: '/images/delhi-university.jpg',
    alt: 'Delhi University South Campus in New Delhi',
    kicker: 'Workshop Venue',
    title: 'Delhi University',
    text: '',
  },
];

// ---- Workshop themes (Authoritative, from proposal) ------------------------
export const topics = [
  'Application of Machine Learning (ML) and Artificial Intelligence (AI) for the classification of the different types of stellar variables',
  'Synergy between asteroseismology and stellar cluster studies',
  'Asteroseismology from space missions',
  'Asteroseismic modeling',
  'Application of high-resolution spectroscopy for asteroseismology',
];

// ---- Convenor --------------------------------------------------------------
export const convenor = {
  name: 'Dr. Santosh Joshi',
  role: 'Convenor of the Workshop',
  affil: 'ARIES, Nainital',
  email: 'santosh@aries.res.in',
};

// ---- Committees (Authoritative, from proposal) ------------------------------
export const soc = {
  title: 'Scientific Organizing Committee (SOC)',
  members: [
    { name: 'Dr. Santosh Joshi', role: 'Asteroseismology', affil: 'ARIES, India' },
    { name: 'Dr. Oleg Malkov', role: 'Big Data', affil: 'INASAN, Russia' },
    { name: 'Dr. Kefeng Tan', role: 'Galactic Archaeology', affil: 'NAOC, China' },
    { name: 'Dr. Hossein Safari', role: 'AI & ML', affil: 'ZNU, Iran' },
    { name: 'Dr. Medupe Thebe', role: 'Asteroseismology', affil: 'NWU, South Africa' },
    { name: 'Dr. Bharat K. Yerra', role: 'High-resolution Spectroscopy', affil: 'IIA, India' },
    { name: 'Dr. Peter De Cat', role: 'Asteroseismology', affil: 'ROB, Belgium' },
    { name: 'Dr. Sydney Barnes', role: 'Gyrochronology', affil: 'AIP, Potsdam, Germany' },
    { name: 'Dr. Benard Nsamba', role: 'Asteroseismic Modelling', affil: 'University of Kampala, Uganda' },
    { name: 'Dr. Eugene Semenko', role: 'High-resolution Spectroscopy', affil: 'NARIT, Thailand' },
  ],
};

export const loc = {
  title: 'Local Organizing Committee (LOC)',
  members: [
    { name: 'Dr. M. K. Das', role: 'Chair', affil: 'IIC, Delhi University, South Campus' },
    { name: 'Dr. Satish K. Dubey', role: 'Member', affil: 'IIT Delhi' },
    { name: 'Dr. Manoj Sharma', role: 'Member', affil: 'Delhi University, South Campus' },
    { name: 'Dr. Sanjeev Singh', role: 'Member', affil: 'Delhi University, South Campus' },
    { name: 'Dr. Mainpal Rajan', role: 'Member', affil: 'Venkateswar College, Delhi University South Campus' },
    { name: 'Dr. Santosh Joshi', role: 'Member', affil: 'ARIES, Nainital' },
    { name: 'Dr. Sangeeta Baksi', role: 'Member', affil: 'ARIES, Nainital' },
    { name: 'Dr. Govind Nandkumar', role: 'Member', affil: 'ARIES, Nainital' },
  ],
};

// ---- Travel (Delhi University South Campus) --------------------------------
export const travel = {
  mapUrl: 'https://maps.google.com/?q=Delhi+University+South+Campus+Benito+Juarez+Marg+New+Delhi',
  points: [
    { mode: 'By Air', place: 'Indira Gandhi International (IGI) Airport (approx. 8–10 km)', fare: '≈ ₹250–400 by taxi / metro' },
    { mode: 'By Rail', place: 'New Delhi / Old Delhi / Hazrat Nizamuddin Stations', fare: '≈ ₹250–350 by taxi / metro' },
    { mode: 'By Metro', place: 'Durgabai Deshmukh South Campus (Pink Line) / Dhaula Kuan (Airport Express)', fare: 'Direct connectivity' },
    { mode: 'By Road / Bus', place: 'Dhaula Kuan Bus Junction & Benito Juarez Marg', fare: 'Direct connectivity' },
  ],
};

// ---- Contacts --------------------------------------------------------------
export const contacts = {
  convenor: [
    { name: 'Dr. Santosh Joshi', role: 'Convenor of the Workshop & co-Chair SOC', email: 'santosh@aries.res.in', affil: 'ARIES, Nainital' },
  ],
  locLeadership: [
    { name: 'Dr. M. K. Das', role: 'Chair, Local Organizing Committee', affil: 'IIC, Delhi University, South Campus' },
    { name: 'Dr. Satish K. Dubey', role: 'LOC Member & Joint Organiser', affil: 'IIT Delhi' },
  ],
  scientific: [
    { name: 'Peter De Cat', role: 'co-Chair, Scientific Organizing Committee', affil: 'ROB, Belgium' },
    { name: 'Dr. Oleg Malkov', role: 'SOC Member (Big Data)', affil: 'INASAN, Russia' },
  ],
  general: 'santosh@aries.res.in',
};

// ---- Image credits ---------------------------------------------------------
export const imageCredits = [
  { label: 'ARIES Manora Peak Campus', by: 'ARIES, Nainital', lic: 'Official', via: 'aries.res.in' },
  { label: 'IIT Delhi Academic Campus', by: 'Azanti', lic: 'CC BY-SA 4.0', via: 'Wikimedia Commons' },
  { label: 'Delhi University Campus', by: 'Academic contributor', lic: 'CC BY-SA 4.0', via: 'Wikimedia Commons' },
  { label: 'ARIES Institutional Identity', by: 'ARIES, Nainital', lic: 'Official', via: 'aries.res.in' },
];

// ---- Tentative Participants List from the proposal -------------------------
export const participants = [
  { no: 1, name: 'Dr. Santosh Joshi', affil: 'ARIES, Nainital', country: 'India' },
  { no: 2, name: 'Dr. Yogesh C. Joshi', affil: 'ARIES, Nainital', country: 'India' },
  { no: 3, name: 'Dr. J. C. Pandey', affil: 'ARIES, Nainital', country: 'India' },
  { no: 4, name: 'Dr. Govind Nandkumar', affil: 'ARIES, Nainital', country: 'India' },
  { no: 5, name: 'Mr. Mrinmoy Sarkar', affil: 'ARIES, Nainital', country: 'India' },
  { no: 6, name: 'Mr. Athul Dileep', affil: 'ARIES, Nainital', country: 'India' },
  { no: 7, name: 'Mr. Surath C. Ghosh', affil: 'ARIES, Nainital', country: 'India' },
  { no: 8, name: 'Mr. Sohan Roy', affil: 'ARIES, Nainital', country: 'India' },
  { no: 9, name: 'Dr. Vaibhav Pant', affil: 'IIT Delhi', country: 'India' },
  { no: 10, name: 'Dr. Ram Sagar', affil: 'IIA, Bengaluru', country: 'India' },
  { no: 11, name: 'Dr. Bharat Kumar Yerra', affil: 'IIA, Bengaluru', country: 'India' },
  { no: 12, name: 'Dr. Sudhakar Reddy', affil: 'IIA, Bengaluru', country: 'India' },
  { no: 13, name: 'Dr. Gajendra Pandey', affil: 'IIA, Bengaluru', country: 'India' },
  { no: 14, name: 'Dr. Gourav Banerjee', affil: 'IIA, Bengaluru', country: 'India' },
  { no: 15, name: 'Dr. T. Sivarani', affil: 'IIA, Bengaluru', country: 'India' },
  { no: 16, name: 'Ms. Pupamudra Sharma', affil: 'IIA, Bengaluru', country: 'India' },
  { no: 17, name: 'Mr. Ajay Saini', affil: 'IIA, Bengaluru', country: 'India' },
  { no: 18, name: 'Dr. Ravi Joshi', affil: 'IIA, Bengaluru', country: 'India' },
  { no: 19, name: 'Dr. S. Seetha', affil: 'RRI, Bengaluru', country: 'India' },
  { no: 20, name: 'Dr. Abhijeet Chakraborty', affil: 'PRL, Ahmedabad', country: 'India' },
  { no: 21, name: 'Dr. Shashikiran Ganesh', affil: 'PRL, Ahmedabad', country: 'India' },
  { no: 22, name: 'Dr. Vishal Joshi', affil: 'PRL, Ahmedabad', country: 'India' },
  { no: 23, name: 'Dr. Pallavi Saraf', affil: 'PRL, Ahmedabad', country: 'India' },
  { no: 24, name: 'Dr. Meenakshi Gaira', affil: 'TIFR, Mumbai', country: 'India' },
  { no: 25, name: 'Dr. Shravan Hansoage', affil: 'TIFR, Mumbai', country: 'India' },
  { no: 26, name: 'Dr. Soumen Mondal', affil: 'SNBNCBS, Kolkata', country: 'India' },
  { no: 27, name: 'Dr. Sapnodip Pramanik', affil: 'IISER, Kolkata', country: 'India' },
  { no: 28, name: 'Dr. Anupam Bhardwaj', affil: 'IUCAA, Pune', country: 'India' },
  { no: 29, name: 'Dr. Satish Kumar Dubey', affil: 'IIT Delhi', country: 'India' },
  { no: 30, name: 'Dr. D. S. Mehta', affil: 'IIT Delhi', country: 'India' },
  { no: 31, name: 'Dr. Devasmita Dwibedi', affil: 'IIT Jodhpur', country: 'India' },
  { no: 32, name: 'Dr. Naveen Dwivedi', affil: 'IIIT Vadodara', country: 'India' },
  { no: 33, name: 'Dr. H. P. Singh', affil: 'Delhi University', country: 'India' },
  { no: 34, name: 'Dr. Subhash Kumar', affil: 'Delhi University', country: 'India' },
  { no: 35, name: 'Dr. Arun Awasthi', affil: 'Delhi University', country: 'India' },
  { no: 36, name: 'Dr. Mainpal Rajan', affil: 'Delhi University', country: 'India' },
  { no: 37, name: 'Mr. Manoj Sharma', affil: 'Delhi University', country: 'India' },
  { no: 38, name: 'Dr. M. K. Das', affil: 'Delhi University', country: 'India' },
  { no: 39, name: 'Dr. Sanjeev Singh', affil: 'Delhi University', country: 'India' },
  { no: 40, name: 'Dr. Drishya K.', affil: 'University of Calicut', country: 'India' },
  { no: 41, name: 'Dr. Mathew Blesson', affil: 'Christ University', country: 'India' },
  { no: 42, name: 'Dr. Suman Bhattacharya', affil: 'Christ University', country: 'India' },
  { no: 43, name: 'Ms. Harshita Pant', affil: 'Christ University', country: 'India' },
  { no: 44, name: 'Dr. V. Girish', affil: 'ISRO, Bangalore', country: 'India' },
  { no: 45, name: 'Dr. Abhay Pratap Yadav', affil: 'NIT Rourkela', country: 'India' },
  { no: 46, name: 'Dr. Sugyan Parida', affil: 'NIT Rourkela', country: 'India' },
  { no: 47, name: 'Dr. Anandmayee Tej', affil: 'IIST, Thiruvananthapuram', country: 'India' },
  { no: 48, name: 'Dr. Nitesh Kumar', affil: 'UPES, Dehradun', country: 'India' },
  { no: 49, name: 'Dr. Devendra Bisht', affil: 'ICSP, Kolkata', country: 'India' },
  { no: 50, name: 'Dr. Kefeng Tan', affil: 'NAOC, Beijing', country: 'China' },
  { no: 51, name: 'Dr. Ali Luo', affil: 'NAOC, Beijing', country: 'China' },
  { no: 52, name: 'Dr. Jianning Fu', affil: 'BNU, Beijing', country: 'China' },
  { no: 53, name: 'Dr. Jayanand Maurya', affil: 'XAO', country: 'China' },
  { no: 54, name: 'Dr. Alex Panchal', affil: 'Shandong University, Weihai', country: 'China' },
  { no: 55, name: 'Dr. Ali Esamdin', affil: 'XAO', country: 'China' },
  { no: 56, name: 'Dr. Oleg Malkov', affil: 'INASAN, Moscow', country: 'Russia' },
  { no: 57, name: 'Dr. Aleksandra Volosatykh', affil: 'INASAN, Moscow', country: 'Russia' },
  { no: 58, name: 'Dr. Tanya Ryabchikova', affil: 'INASAN, Moscow', country: 'Russia' },
  { no: 59, name: 'Dr. Lyudmila Mashonkina', affil: 'INASAN, Moscow', country: 'Russia' },
  { no: 60, name: 'Dr. Mikhail Sachkov', affil: 'INASAN, Moscow', country: 'Russia' },
  { no: 61, name: 'Dr. I. I. Romanyuk', affil: 'SAO', country: 'Russia' },
  { no: 62, name: 'Dr. Illya Yakunin', affil: 'SAO', country: 'Russia' },
  { no: 63, name: 'Dr. José Dias do Nascimento Junior', affil: 'UFRN', country: 'Brazil' },
  { no: 64, name: 'Dr. Dinil Bose', affil: 'OBSPM', country: 'France' },
  { no: 65, name: 'Dr. Eugene Semenko', affil: 'NARIT', country: 'Thailand' },
  { no: 66, name: 'Dr. David Mkrtichian', affil: 'NARIT', country: 'Thailand' },
  { no: 67, name: 'Ms. Akram Boloukio', affil: 'ZNU', country: 'Iran' },
  { no: 68, name: 'Ms. Fatmeh Vasigh', affil: 'ZNU', country: 'Iran' },
  { no: 69, name: 'Dr. Hossein Safari', affil: 'ZNU', country: 'Iran' },
  { no: 70, name: 'Dr. Elham Ziaali', affil: 'CSIC', country: 'Spain' },
  { no: 71, name: 'Dr. Otto Trust', affil: 'MUST', country: 'Uganda' },
  { no: 72, name: 'Dr. Edward Jurua', affil: 'MUST', country: 'Uganda' },
  { no: 73, name: 'Dr. Nsamba Benard', affil: 'Kyambogo University', country: 'Uganda' },
  { no: 74, name: 'Dr. C. N. Ofodum', affil: 'CBSS', country: 'Nigeria' },
  { no: 75, name: 'Dr. Sydney Barnes', affil: 'AIP', country: 'Germany' },
  { no: 76, name: 'Dr. David Gruner', affil: 'AIP', country: 'Germany' },
  { no: 77, name: 'Dr. Gang Li', affil: 'University of Southern Queensland', country: 'Australia' },
  { no: 78, name: 'Dr. S. Murphy', affil: 'University of Southern Queensland', country: 'Australia' },
  { no: 79, name: 'Dr. Tim Bedding', affil: 'University of Sydney', country: 'Australia' },
  { no: 80, name: 'Dr. Janaka Adasurya', affil: 'University of Colombo', country: 'Sri Lanka' },
  { no: 81, name: 'Dr. Vaidehi Verma', affil: 'NWU', country: 'South Africa' },
  { no: 82, name: 'Dr. Don Kurtz', affil: 'NWU', country: 'South Africa' },
  { no: 83, name: 'Dr. Medupe Thebe', affil: 'NWU', country: 'South Africa' },
  { no: 84, name: 'Dr. Bruno Letarte', affil: 'NWU', country: 'South Africa' },
  { no: 85, name: 'Mr. Daniel Nhlapo', affil: 'NWU', country: 'South Africa' },
  { no: 86, name: 'Dr. Lisa Crause', affil: 'SAAO', country: 'South Africa' },
  { no: 87, name: 'Dr. Antoine Mahoro', affil: 'SAAO', country: 'South Africa' },
  { no: 88, name: 'Dr. Peter De Cat', affil: 'ROB', country: 'Belgium' },
  { no: 89, name: 'Dr. Patricia Lampens', affil: 'ROB', country: 'Belgium' },
  { no: 90, name: 'Dr. Loic Felly', affil: 'University of Liège', country: 'Belgium' },
  { no: 91, name: 'Dr. Marc-Antoine Dupret', affil: 'University of Liège', country: 'Belgium' },
  { no: 92, name: 'Dr. Gael Buldgen', affil: 'University of Liège', country: 'Belgium' },
  { no: 93, name: 'Dr. Dario Fritzewski', affil: 'KU Leuven', country: 'Belgium' },
  { no: 94, name: 'Dr. Masao Takata', affil: 'University of Tokyo', country: 'Japan' },
  { no: 95, name: 'Dr. Hideyuki Sio', affil: 'University of Tokyo', country: 'Japan' },
  { no: 96, name: 'Mr. Bakuh Danang Setyo', affil: 'NAO', country: 'Japan' },
  { no: 97, name: 'Dr. Antonio Frasca', affil: 'INAF', country: 'Italy' },
  { no: 98, name: 'Dr. G. Catanzaro', affil: 'INAF', country: 'Italy' },
  { no: 99, name: 'Dr. Daniel Holdsworth', affil: 'University of Central Lancashire, Preston', country: 'UK' },
  { no: 100, name: 'Dr. Gerald Handler', affil: 'NCAC, Warsaw', country: 'Poland' },
  { no: 101, name: 'Dr. Ewa Niemczura', affil: 'WROC', country: 'Poland' },
  { no: 102, name: 'Dr. Jonathan Labadie-Bartz', affil: 'DTU', country: 'Denmark' },
  { no: 103, name: 'Dr. Stefan Hümmerich', affil: 'AAVSO, Cambridge', country: 'USA' },
  { no: 104, name: 'Dr. Ernst Paunzen', affil: 'Masaryk University, Brno', country: 'Czech Republic' },
  { no: 105, name: 'Dr. Marek Skarka', affil: 'ASU', country: 'Czech Republic' },
  { no: 106, name: 'Mr. Praneet Pathak', affil: 'University of Victoria', country: 'Canada' },
  { no: 107, name: 'Dr. Falk Herwig', affil: 'University of Victoria', country: 'Canada' },
];
