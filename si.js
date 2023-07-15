document.getElementById("signUpForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var rollno = document.getElementById("rollno").value;
    var password = document.getElementById("password").value;
  
    var data = {
      rollno: rollno,
      password: password
    };
  
    fetch("http://localhost:9900/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        // Assuming the server responds with the saved student object
        if (result && result.rollno) {
          // Successful sign up
          console.log("Sign up successful:", result);
  
          // Store roll number in session storage
          sessionStorage.setItem("rollno", result.rollno);
  
          // Redirect to the next page
          window.location.href = "nextpage.html";
        } else {
          // Display an error message or perform appropriate actions
          console.log("Sign up failed");
        }
      })
      .catch(error => {
        console.error("Error during sign up:", error);
        // Handle the error
      });  