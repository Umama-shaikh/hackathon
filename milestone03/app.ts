const form = document.getElementById('resumeform') as HTMLFormElement;
const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement;

form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLTextAreaElement).value
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value
// generate the resume content dynamically

   const UserResume = `
   <h2>Resume<h2>
   <h3>Personal Information</h3>
   <p><b>Name:<b> ${name}</p>
   <p><b>Email:<b> ${email}</p>
   <p><b>Phone:<b> ${phone}</p>

   <h3>Education:<h3>
   <p>${education}</p>

   <h3>Experience:<h3>
   <p>${experience}</p>

   <h3>Skills<h3>
   <p>${skills}</p>
   `;
   if(resumeDisplay){
    resumeDisplay.innerHTML = UserResume;
   }else{
    console.error('something is missing!')
   }
})