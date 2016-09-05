var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span>%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="pad">Mobile</span><span>%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="pad">Email</span><span>%data%</span></li>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a target="_blank" href="#">%data%';
var HTMLschoolDegree = ' -- %data%';
var HTMLschoolDates = ' (%data%)</a>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%';
var HTMLworkDates = ' (%data%)</a>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p class="description"><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

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

var education = {
    "schools": [{
        "Name": "Texas A&M University",
        "Majors": ["Management Information Systems"],
        "dates": "2015-2017",
    "degree":"MS",
        "location": "College Station, TX",
    "url":"https://mays.tamu.edu/ms-management-information-systems/overview/"
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

function displayEducation(){
  if (education.schools.length > 0){
    for (school in education.schools){
    $("#education").append(HTMLschoolStart);
    var formatedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].Name);
    var formatedSchoolName = formatedSchoolName.replace("#",education.schools[school].url);
    var formatedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    var formatedSchoolDate = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $("#education").append(formatedSchoolName+formatedSchoolDegree+formatedSchoolDate);
    var formatedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $("#education").append(formatedSchoolLocation);
    var formatedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].Majors);
    $("#education").append(formatedSchoolMajor);
    }
  }
};

displayEducation();

var work = {
    "jobs": [{
        "employer": "Cisco",
        "title": "Software Intern",
        "location": "Dallas, TX",
        "dates": "June 2016-Aug 2016",
        "description": "Worked as a full stack developer on Atlas and Cisco Spark. During my internship, i gained valuable technical and functional knowledge that is used in today’s fast paced industry. In terms of understanding Cisco’s business, I now have a good understanding of products like Atlas and Cisco Spark and its inner workings. Having worked with multiple teams, I now have an understanding of different layers of implementation and its interdependencies.<br> A few things I have achieved during this period are<br>\u2022     Improved UX by Redesigned PSTN order workflow for partner login in Atlas<br>\u2022     Deployed server side sort to eliminate error caused by pagination when dealing with bulk data<br>\u2022     Worked with a global team to implement order status feature in Cisco Spark, Helpdesk.<br>\u2022     Eliminated external Docker (Cassandra cluster) dependencies by implementing CasandraUnit."
    }, {
        "employer": "Texas A&M University",
        "title": "Research Assistant",
        "location": "College Station, TX",
        "dates": "Aug 2015-May 2016",
        "description": "My role as a Graduate Research Assistant involves designing the System architecture for a Systems Safety Data Network and capturing all essential data required to make predictive analysis on accident data. I have authored and presented papers at the ISERC and CSERC conferences on the same."
    }, {
        "employer": "Accenture",
        "title": "Software Engineer",
        "location": "Hyderabad, AP",
        "dates": "Jan 2013-April 2015",
        "description": "As a PeopleSoft Techno-Functional  consultant at Accenture, I was in charge of managing the online order capture module of an advertising company based in Texas. The skills i developed here are Requirement analysis, PeopleSoft API, PeopleCode,JAVA, Database Analysis, PL/SQL scripting and XML."
    }]
};

function displayWork(){
  if (work.jobs.length > 0){
    for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
        var formatedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formatedJobTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formatedWorkDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $("#workExperience").append(formatedWorkEmployer + formatedJobTitle + formatedWorkDate);

        var formatedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        $("#workExperience").append(formatedWorkLocation);

        var formatedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $("#workExperience").append(formatedWorkDescription);
    }
  }
};

displayWork();

var projects = {
    "projects": [{
        "title": "System Safety Data Network",
        "dates": "Aug 2015-May 2016",
        "description": "This paper presents the current status in the design of the System Safety Database, a comprehensive object-oriented database capable of generating reports, statistics, and lessons learned from a variety of disparate system contexts.",
        "images": ["images/Database.png"]
    }]
};

projects.display = function(){
    if(projects.projects.length > 0){
        for (project in projects.projects){
            $("#Projects").append(HTMLprojectStart);
            var formatedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
            $(".project-entry:last").append(formatedProjectTitle);
            var formatedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
            $(".project-entry:last").append(formatedProjectDates);
            var formatedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
            $(".project-entry:last").append(formatedProjectDescription);

            if (projects.projects[project].images.length > 0) {
                    for (image in projects.projects[project].images) {
                      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                      $(".project-entry:last").append(formattedImage);
                    }
            }
        }
    }
}

projects.display();

formatedEmail = HTMLemail.replace("%data%",bio.ContactInformation.email)
$("#contact").append(formatedEmail);

formatedMobile = HTMLmobile.replace("%data%",bio.ContactInformation.mobile)
$("#contact").append(formatedMobile);


var googleMap = '<div id="map"></div>';
//GoogleMap Implementation
var map;
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };
  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.ContactInformation.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });
    console.log(locations);
    locations.shift();

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      console.log('Name of place:', place)
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});

$("#mapDiv").append(googleMap);
