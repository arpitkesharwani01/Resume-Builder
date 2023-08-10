document.addEventListener('DOMContentLoaded', function () {
    let fullNameValue, emailValue, workExperienceValue, educationValue, skillsValue, projectsValue, languagesValue;
  
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get user inputs
      fullNameValue = document.getElementById('fullName').value;
      emailValue = document.getElementById('email').value;
      workExperienceValue = document.getElementById('workExperience').value;
      educationValue = document.getElementById('education').value;
      skillsValue = document.getElementById('skills').value;
      projectsValue = document.getElementById('projects').value;
      languagesValue = document.getElementById('languages').value;
  
      // Create the resume output
      const resumeOutput = `

      
        <h2>${fullNameValue}</h2>
        <p>Email: ${emailValue}</p>
        <hr>
        <h3>Work Experience</h3>
        <p>${workExperienceValue}</p>
        <hr>
        <h3>Education</h3>
        <p>${educationValue}</p>
        <hr>
        <h3>Skills</h3>
        <p>${skillsValue}</p>
        <hr>
        <h3>Projects</h3>
        <p>${projectsValue}</p>
        <hr>
        <h3>Languages</h3>
        <p>${languagesValue}</p>
      `;
  
      // Display the generated resume
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = resumeOutput;
  
      // Show the Download Resume button
      document.getElementById('downloadResumeBtn').style.display = 'block';
  
      // Store the generated resume content in a variable
      const resumeContent = `
        ${fullNameValue}
        Email: ${emailValue}
  
        Work Experience:
        ${workExperienceValue}
  
        Education:
        ${educationValue}
  
        Skills:
        ${skillsValue}
  
        Projects:
        ${projectsValue}
  
        Languages:
        ${languagesValue}
      `;
  
      // Store the generated resume content in a hidden input field
      document.getElementById('resumeContent').value = resumeContent;
    });
  
    // Handle the Download Resume button click event
    document.getElementById('downloadResumeBtn').addEventListener('click', function () {
      // Get the generated resume content from the hidden input field
      const resumeContent = document.getElementById('resumeContent').value;
  
      // Generate PDF and provide download link
      const doc = new jsPDF();
      doc.text(resumeContent, 10, 10);
  
      // Save the PDF with a filename based on the user's name
      doc.save(`${fullNameValue}_resume.pdf`);
    });
  });
  