// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dark/Light Mode Toggle
  function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
  }
  
  // Loader functionality
  window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none'; // Hide loader after page loads
  });
  
  function openPopup(skill) {
    const popup = document.getElementById("popup");
    const title = document.getElementById("popup-title");
    const description = document.getElementById("popup-description");
  
    // Set content based on the clicked skill
    if (skill === 'html') {
      title.innerText = "HTML";
      description.innerText = "HTML is the standard markup language for creating web pages. I have been working with HTML for about 1.5 to 2 years, learning through YouTube, various websites, and a few books.";
    } else if (skill === 'css') {
      title.innerText = "CSS";
      description.innerText = "CSS is a style sheet language used for describing the presentation of a document. My learning journey has involved numerous online resources and practice.";
    } else if (skill === 'javascript') {
      title.innerText = "JavaScript";
      description.innerText = "JavaScript is a programming language that allows you to implement complex features on web pages. I've gained knowledge from tutorials and hands-on projects.";
    } else if (skill === 'bootstrap') {
      title.innerText = "Bootstrap";
      description.innerText = "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. I've used it extensively in my projects.";
    } else if (skill === 'react') {
      title.innerText = "React";
      description.innerText = "React is a JavaScript library for building user interfaces, maintained by Facebook. I've learned it through online courses and documentation.";
    }
  
    // Add your overall experience description
    description.innerHTML += "<br><strong>Experience:</strong> I have been a front-end developer for about 1.5 to 2 years, primarily self-taught through YouTube, websites, and books.";
    
    popup.style.display = "block"; // Show the popup
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none"; // Hide the popup
  }
  
  // Close the popup if the user clicks anywhere outside of it
  window.onclick = function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
      closePopup();
    }
  }
  
  function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
  }

  window.onload = function() {
    if (isMobileDevice()) {
      showMobileWarning();
    }
  };
  
  function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }
  
  function showMobileWarning() {
    const mobilePopup = document.createElement('div');
    mobilePopup.style.position = 'fixed';
    mobilePopup.style.top = '0';
    mobilePopup.style.left = '0';
    mobilePopup.style.width = '100%';
    mobilePopup.style.height = '100%';
    mobilePopup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    mobilePopup.style.color = '#fff';
    mobilePopup.style.display = 'flex';
    mobilePopup.style.alignItems = 'center';
    mobilePopup.style.justifyContent = 'center';
    mobilePopup.style.zIndex = '9999';
    mobilePopup.style.fontSize = '20px';
    mobilePopup.innerHTML = `
      <div style="text-align: center;">
        <p>Please access this website on a laptop or desktop.</p>
        <button onclick="closeMobileWarning()" style="background-color: #f44336; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Close</button>
      </div>
    `;
  
    document.body.appendChild(mobilePopup);
  }
  
  function closeMobileWarning() {
    const mobilePopup = document.body.lastChild; // Assuming the mobile warning is the last child
    document.body.removeChild(mobilePopup); // Remove the popup
  }
  