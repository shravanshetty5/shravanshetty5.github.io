var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span>%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="pad">mobile</span><span>%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="pad">email</span><span>%data%</span></li>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%';
var HTMLschoolDates = ' (%data%)</a>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var ContactInfo = {
  "email": "shravanshetty@tamu.edu",
  "mobile": "(979) 422-7984",
  "github":"shravanshetty5",
  "twitter":"",
  "location":"College Station, TX"
};

var skills = ['Python','NoSql','R','AngularJS','JavaScript','HTML5','SCSS'];

var bio = {
  "Name" : "Shravan Shetty",
  "Role" : " Software Intern",
  "ContactInformation" : ContactInfo,
  "pictureURL":"images/me.jpg",
  "skills" : skills,
  "WelcomeMessage" : "Hi Guys, Thank you for taking the time to go through my profile"
};

var education = {
    "schools": [{
        "Name": "Texas A&M University",
        "Majors": ["Management Information Systems"],
        "dates": "2015-2017",
    "degree":"MS",
        "location": "College Station, TX",
    "url":"https://www.tamu.edu/"
    }, {
        "Name": "NMAMIT Nitte",
        "Majors": ["ECE"],
        "dates": "2008-2012",
    "degree":"B.E",
        "location": "Managlore, KA",
    "url":"http://nmamit.nitte.edu.in/"
    }],
  "onlineCourses":[
    {
      "title":"JavaScript Basics",
      "school":"Udacity",
      "dates":"June 2016",
      "url":"https://classroom.udacity.com/courses/ud804"
    }
  ]
};

if (bio.skills.length > 0){
  $("#skillSet").append(HTMLskillsStart);
  for (skill in bio.skills){
    var skillsformated = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(skillsformated);
  }
}

function displayEducation(){
  if (education.schools.length > 0){
    for (school in education.schools){
    $("#education").append(HTMLschoolStart);
    var formatedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].Name);
    var formatedSchoolName = formatedSchoolName.replace("#",education.schools[school].url);
    var formatedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    var formatedSchoolDate = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $("#education").append(formatedSchoolName+formatedSchoolDegree+formatedSchoolDate);
    var formatedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].Majors);
    $("#education").append(formatedSchoolMajor);
    var formatedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $("#education").append(formatedSchoolLocation);
    }
  }
};

formatedEmail = HTMLemail.replace("%data%",bio.ContactInformation.email)
$("#contact").append(formatedEmail);

formatedMobile = HTMLmobile.replace("%data%",bio.ContactInformation.mobile)
$("#contact").append(formatedMobile);

displayEducation();