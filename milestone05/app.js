var form = document.getElementById('resumeform');
var resumeDisplay = document.getElementById('resumeDisplay');
var shareableLinkContainer = document.getElementById('shareable-link');
var shareableLinkElement = document.getElementById('shareable');
var downloadBtn = document.getElementById('download');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // saving the data locally
    // generate the resume content dynamically
    var UserResume = "\n   <h2>Resume<h2>\n   <h3>Personal Information</h3>\n   <p><b>Name:<b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n   <p><b>Email:<b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n   <p><b>Phone:<b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n\n   <h3>Education:<h3>\n   <p contenteditable=\"true\">").concat(education, "</p>\n\n   <h3>Experience:<h3>\n   <p contenteditable=\"true\">").concat(experience, "</p>\n\n   <h3>Skills<h3>\n   <p contenteditable=\"true\">").concat(skills, "</p>\n   ");
    //    display the genarated resume
    resumeDisplay.innerHTML = UserResume;
    //  generate a shareable URL with the fullname only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    //display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// handle PDF download
downloadBtn.addEventListener('click', function () {
    window.print(); // this will open the print dialog and allow the user to save as PDF
});
// perfill the form based on the username in the URl
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        //autofill form if the data is found in localstroge
        var saveResumeData = localStorage.getItem(username);
        if (saveResumeData) {
            var resumeData = JSON.parse(saveResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
