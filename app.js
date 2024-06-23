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
    