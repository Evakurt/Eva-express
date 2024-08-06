   // user name area

   
   function checkPassword() {
    // Get the entered username
   var enteredUsername = document.getElementById("username").value;

   // Get the entered password
   var enteredPassword = document.getElementById("password").value;

   // Set the predefined password
   var correctUsername = "user";

   // Set the predefined password
   var correctPassword = "password419";

   // Check if the entered username matches the predefined password
   if (enteredUsername === correctUsername);
   if (enteredPassword === correctPassword) {
    alert("Login Successful");
    // Redirect to the home page
    window.location.href = "loginhome.html";

    } else {
    alert("Incorrect Username and Password");
    }

}
    


    function checkTrack() {
    // Get the track password
    var enteredTrack = document.getElementById("track").value;

    // Set the predefined password
    var correctTrack = "UN7978659342";

    // Check if the entered track password matches the predefined code
    if (enteredTrack === correctTrack) {
      alert("Tracking ID Successful");
      // Redirect to the Track page
      window.location.href = "trackpage.html";

    } else {
      alert("Incorrect Tracking ID");
    }

  }




  function checkReg() {
    // Get the track password
    var enteredTrack = document.getElementById("trackReg").value;

    // Set the predefined password
    var correctTrack = "newvirus121";

    // Check if the entered track password matches the predefined code
    if (enteredTrack === correctTrack) {
      alert("Tracking ID Successful");
      // Redirect to the Track page
      window.location.href = "loginhome.html";

    } else {
      alert("Sorry you can't register due to your location.");
    }

  }



  
  function checkContact() {
    // Get the track password
    var enteredTrack = document.getElementById("message").value;

    // Set the predefined password
    var correctTrack = "newvirus121";

    // Check if the entered track password matches the predefined code
    if (enteredTrack === correctTrack) {
      alert("Tracking ID Successful");
      // Redirect to the Track page
      window.location.href = "home.html";

    } else {
      alert("Thank You For Contacting Eva Express!");
    }

  }


  // menu control starts //
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () =>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

// menu control ends //

// menu logo to scroll up and down //

$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('#menu-bar').fadeOut();
    } else {
      $('#menu-bar').fadeIn();
    }
  });


  // for shipper slider

  const arrows = document.querySelectorAll(".arrow");
  const movieLists = document.querySelectorAll(".movie-list");
  
  arrows.forEach((arrow, i) => {
      const itemNumber = movieLists[i].querySelectorAll("img").length;
      let clickCounter = 0;
      arrow.addEventListener("click", () => {
        clickCounter++;
        const currentX = parseInt(window.getComputedStyle(movieLists[i]).transform.split(",")[4], 10);
        if (itemNumber - (4 + clickCounter) >= 0) {
          movieLists[i].style.transform = `translateX(${currentX - 300}px)`;
        } else {
          movieLists[i].style.transform = "translateX(0)";
          clickCounter = 0;
        }
      });
  
      console.log(movieLists[i].querySelectorAll("img"))
    });
  
  

  



  


 
  

  