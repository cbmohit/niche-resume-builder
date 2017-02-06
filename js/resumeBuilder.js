var projects = {
	"projects" : [
		{
			"title" : "Whatsapp",
			"dates" : 2014,
			"description" : "WhatsApp Messenger is a freeware, cross-platform and end-to-end encrypted instant messaging application for smartphones.[6] It uses the Internet to make voice calls, one to one video calls; send text messages, documents, PDF files, images, GIF, videos, user location, audio files, phone contacts and voice notes[7][8] to other users using standard cellular mobile numbers.",
			"images" : [
				"images/whatsapp.png",
				"images/whatsapp-2.jpg",
				"images/whatsapp-3.jpg"
			]
		},
		{
			"title" : "Facebook",
			"dates" : 2015,
			"description" : "Facebook is an American for-profit corporation and online social media and social networking service based in Menlo Park, California. The Facebook website was launched on February 4, 2004, by Mark Zuckerberg, along with fellow Harvard College students and roommates, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes",
			"images" : [
				"images/facebook.png",
				"images/facebook-2.png",
				"images/facebook-3.png",
				"images/facebook-4.png",
				"images/facebook-5.png"
			]
		},
		{
			"title" : "Google Search Engine",
			"dates" : 2014,
			"description" : "Google Search, commonly referred to as Google Web Search or simply Google, is a web search engine developed by Google. It is the most-used search engine on the World Wide Web,[5] handling more than three billion searches each day.[6][7] As of February 2016 it is the most used search engine in the US with 64.0% market share.",
			"images" : [
				"images/google.png",
				"images/google-1.jpg",
				"images/google-2.png"
			]
		}
	]
}

var bio = {
	"name" : "Nishant Paul",
	"age" : 27,
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "8105624412",
		"email" : "nishant5800@gmail.com",
		"github" : "nishant5800",
		"location" : "Bangalore"
	},
	"bioPic" : "images/resume_dp.jpg",
	"welcomeMessage" : "Result oriented software developer and research professional with four years of experience in development. <br>I make it my goal to create software with the user in mind, creating applications with a useable and intuitive user interface experience. I am constantly striving to learn new technologies and look for ways to better myself in this rapidly changing industry.",
	"skills" : [
		["ObjectiveC", 9], 
		["Swift", 8],
		["Python", 6], 
		["C++", 7], 
		["Java", 6], 
		["Javascript", 5],
	],
};

var work = {
	"jobs" : [
		{
			"employer" : "Facebook Inc.",
			"title" : "Software Developer",
			"location" : "San Francisco",
			"dates" : "June 2013 - May 2015",
			"description" : [
				"Completed bespoke iOS apps for various clients including Facebook UK",
				"Created various framework for both iOS and Android platform, working on beacon technology",
				"Pursued personal research on Python programming"
				]
		},
		{
			"employer" : "Google Inc.",
			"title" : "iPhone Engineering And Research",
			"location" : "Palo Alto",
			"dates" : "May 2015 - Present",
			"description" : [
				"Completed bespoke iOS apps for various clients including Facebook UK",
				"Created various framework for both iOS and Android platform, working on beacon technology"
				]
		}
	]
};

var education = {
	"colleges" : [
		{
			"name" : "ITM",
			"location" : "Gurgaon",
			"degree" : "B.Tech",
			"major" : ["Computer Science"],
			"dates" : "2008-2012"
		}
	],
	"onlineCourses" : [
		{
			"title": "Javascript Syntax",
			"school": "Udacity",
			"dates": "2017",
			"url": "http://www.udacity.com/course/ud804"
		}
	]
};

var misc = {
	"hobbies": [
	{
		"name" : "Internet Surfing",
		"icon" : "images/internet_surf.png"
	},
	{
		"name" : "Coding",
		"icon" : "images/code.png"
	},
	{
		"name" : "Travelling",
		"icon" : "images/travel.png"
	},
	{
		"name" : "Cricket",
		"icon" : "images/cricket.png"
	},
	{
		"name" : "Fitness",
		"icon" : "images/fitness.png"
	}
	]
}

function locationizer(work_obj) {
	var work_locations = [];

	for(var i=0; i<work_obj.jobs.length; i++) {
		work_locations.push(work_obj.jobs[i].location);
	}

	return work_locations;
}

function inName(name) {
	name = name.trim().split(" ");
	firstName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	lastName = name[1].toUpperCase();

	return firstName + " " + lastName;
}

bio.display = function() {

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedPictureUrl = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPictureUrl);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

	if (bio.skills.length > 0) {
		$("#skills").append(googleCharts);
	}
	
	var formattedMobileInfo = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#footerContacts").append(formattedMobileInfo);

	var formattedEmailInfo = HTMLemail.replace("%data%", bio.contacts.email);
	$("#footerContacts").append(formattedEmailInfo);

	var formattedGithubInfo = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#footerContacts").append(formattedGithubInfo);

	var formattedLocationInfo = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts").append(formattedLocationInfo);

	
}

work.display = function() {
	for(var i=0; i<work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedWorkLocation);

		if(work.jobs[i].description.length > 0) {
			var descID = HTMLworkDescriptionStart.replace("%data%", i)
			$(".work-entry:last").append(descID);
			for(desc in work.jobs[i].description) {
				var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description[desc]);
				$("#description-"+i).append(formattedWorkDescription);
			}
		}
	}
}

projects.display = function() {
	for(var i=0; i<projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedProjectDescription);

		if(projects.projects[i].images.length > 0) {
			for(image in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}

education.display = function() {
	for(var i=0; i<education.colleges.length; i++) {
		$("#education").append(HTMLschoolStart);

		var formattedCollegeName = HTMLschoolName.replace("%data%", education.colleges[i].name);
		var formattedCollegeDegree = HTMLschoolDegree.replace("%data%", education.colleges[i].degree);
		$(".education-entry:last").append(formattedCollegeName + formattedCollegeDegree);

		var formattedCollegeDates = HTMLschoolDates.replace("%data%", education.colleges[i].dates);
		$(".education-entry:last").append(formattedCollegeDates);

		var formattedCollegeLocation = HTMLschoolLocation.replace("%data%", education.colleges[i].location);
		$(".education-entry:last").append(formattedCollegeLocation);

		var formattedCollegeMajor = HTMLschoolMajor.replace("%data%", education.colleges[i].major);
		$(".education-entry:last").append(formattedCollegeMajor);

	}

	$("#education").append(HTMLonlineClasses)
	for(var i=0; i<education.onlineCourses.length; i++) {
		$("#education").append(HTMLschoolStart);

		var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		$(".education-entry:last").append(formattedCourseTitle + formattedCourseSchool);

		var formattedCollegeDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
		$(".education-entry:last").append(formattedCollegeDates);

		var formattedCollegeUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedCollegeUrl);

	}
}

misc.display = function() {
	
	for(var i=0; i<misc.hobbies.length; i++) {
		$("#misc").append(HTMLhobbyStart);

		var formattedHobbyIcon = HTMLhobbyIcon.replace("%data%", misc.hobbies[i].icon);
		$(".hobbies-entry:last").append(formattedHobbyIcon);

		var formattedHobbyName = HTMLhobbyName.replace("%data%", misc.hobbies[i].name);
		$(".hobbies-entry:last").append(formattedHobbyName);
	}
};

// Call the display function to display the resume
bio.display();
work.display();
projects.display();
education.display();
misc.display();

// Add internationalize button to capitalize the last name
$("#main").append(internationalizeButton);
// Add google maps
$("#mapDiv").append(googleMap);     