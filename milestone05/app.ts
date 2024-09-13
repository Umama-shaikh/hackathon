const form = document.getElementById('resumeform') as HTMLFormElement;
const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable') as HTMLAnchorElement;
const downloadBtn = document.getElementById('download') as HTMLButtonElement;

// handle form submission
form.addEventListener('submit',(event:Event)=>{
    event.preventDefault(); // prevent page reload


// collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // save form data in localStorage with the username as the key
    const resumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills

    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // saving the data locally

// generate the resume content dynamically
   const UserResume = `
   <h2>Resume<h2>
   <h3>Personal Information</h3>
   <p><b>Name:<b><span contenteditable="true"> ${name}</span></p>
   <p><b>Email:<b><span contenteditable="true"> ${email}</span></p>
   <p><b>Phone:<b><span contenteditable="true"> ${phone}</span></p>

   <h3>Education:<h3>
   <p contenteditable="true">${education}</p>

   <h3>Experience:<h3>
   <p contenteditable="true">${experience}</p>

   <h3>Skills<h3>
   <p contenteditable="true">${skills}</p>
   `;
//    display the genarated resume
   resumeDisplay.innerHTML= UserResume;

//  generate a shareable URL with the fullname only
    const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;

    //display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});

// handle PDF download
downloadBtn.addEventListener('click',()=>{
    window.print(); // this will open the print dialog and allow the user to save as PDF
});

// perfill the form based on the username in the URl
window.addEventListener('DOMContentLoaded', ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const username=urlParams.get('username');

    if(username){
        //autofill form if the data is found in localstroge
        const saveResumeData = localStorage.getItem(username);

        if(saveResumeData){
            const resumeData = JSON.parse(saveResumeData);
            (document.getElementById('username')as HTMLInputElement).value = username;
            (document.getElementById('name')as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email')as HTMLInputElement).value = resumeData.email;
            (document.getElementById('phone')as HTMLInputElement).value = resumeData.phone;
            (document.getElementById('education')as HTMLInputElement).value = resumeData.education;
            (document.getElementById('experience')as HTMLInputElement).value = resumeData.experience;
            (document.getElementById('skills')as HTMLInputElement).value = resumeData.skills;

            
        }
    }
});
