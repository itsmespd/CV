var form = document.getElementById("formemail");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.classList.add('success');
        status.innerHTML = "Thanks for your message! I will get back to you as soon as possible.";
        form.reset()
      }).catch(error => {
        status.classList.add('error');
        status.innerHTML = "Oops! There was a problem! Please try again."
      });
    }
    form.addEventListener("submit", handleSubmit)
    
    document.addEventListener("DOMContentLoaded", function () {
      const cards = document.querySelectorAll('.employment-card');
    
      cards.forEach(card => {
        card.addEventListener('mouseover', () => {
          card.classList.add('animate__animated', 'animate__pulse');
        });
        card.addEventListener('mouseout', () => {
          card.classList.remove('animate__animated', 'animate__pulse');
        });
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
      const skillSection = document.getElementById("skills");
      const progressBars = document.querySelectorAll(".progress-bar");
  
      // Function to animate progress bars
      function animateProgressBars() {
          progressBars.forEach(bar => {
              const targetWidth = bar.getAttribute("data-width");
              bar.style.width = targetWidth + "%";
          });
      }
  
      // Function to check if an element is visible in the viewport
      function isElementInViewport(el) {
          const rect = el.getBoundingClientRect();
          return (
              rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.bottom >= 0
          );
      }
  
      // Scroll event listener
      function handleScroll() {
          if (isElementInViewport(skillSection)) {
              animateProgressBars(); // Animate bars
              window.removeEventListener("scroll", handleScroll); // Unbind after animation
          }
      }
  
      // Attach scroll event listener
      window.addEventListener("scroll", handleScroll);
  
      // Run the handler once on page load to check if the section is already visible
      handleScroll();
  });

  document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".resume-header");
    const contents = document.querySelectorAll(".resume-content");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function handleScroll() {
        headers.forEach(header => {
            if (isElementInViewport(header)) {
                header.classList.add("visible");
            }
        });

        contents.forEach(content => {
            if (isElementInViewport(content)) {
                content.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on page load
});

