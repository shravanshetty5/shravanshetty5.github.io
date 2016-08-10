var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var ContactInfo = {
  "email": "shravash@cisco.com",
  "mobile": "(979) 422 7984",
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
  $(".col-9").append(HTMLskillsStart);
  for (skill in bio.skills){
    var skillsformated = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(skillsformated);
  }
}