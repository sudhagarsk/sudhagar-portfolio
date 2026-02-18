function sendMail(){
    let value={
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
  
          
    }
  
    emailjs.send("service_kihuaru","template_yowe2yo",value).then(alert("Email Sent!!"))
  }  