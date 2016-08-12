var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span>%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="pad">mobile</span><span>%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="pad">email</span><span>%data%</span></li>';

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

if (bio.skills.length > 0){
  $("#skillSet").append(HTMLskillsStart);
  for (skill in bio.skills){
    var skillsformated = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(skillsformated);
  }
}

formatedEmail = HTMLemail.replace("%data%",bio.ContactInformation.email)
$("#contact").append(formatedEmail);

formatedMobile = HTMLmobile.replace("%data%",bio.ContactInformation.mobile)
$("#contact").append(formatedMobile);