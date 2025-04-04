document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navigation
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.add('bg-transparent');
            navbar.classList.remove('bg-black');
        }
    });

    // Performance Counter Animation
    const countUpElements = document.querySelectorAll('.count-up');
    const animateCountUp = (el) => {
        const target = parseFloat(el.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                el.textContent = target % 1 === 0 ? target : target.toFixed(1);
                clearInterval(timer);
            } else {
                el.textContent = current % 1 === 0 ? Math.floor(current) : current.toFixed(1);
            }
        }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCountUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    countUpElements.forEach(el => observer.observe(el));

    // Fetch Models from Backend
    fetch('/api/models')
        .then(response => response.json())
        .then(models => {
            const container = document.getElementById('models-container');
            models.forEach(model => {
                const card = `
                    <div class="model-card bg-gray-50 rounded overflow-hidden shadow-lg">
                        <div class="h-64 overflow-hidden">
                            <img src="${model.image}" alt="${model.name}" class="model-img w-full h-full object-cover object-top">
                        </div>
                        <div class="p-6">
                            <h3 class="text-2xl font-bold mb-2">${model.name}</h3>
                            <p class="text-gray-600 mb-4">${model.description}</p>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-bold">From $${model.price.toLocaleString()}</span>
                                <button class="bg-primary text-white px-4 py-2 !rounded-button font-medium hover:bg-red-700 transition whitespace-nowrap">Explore</button>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            });
        })
        .catch(error => console.error('Error fetching models:', error));

    // Contact Form Submission
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                interest: document.getElementById('interest').value,
                message: document.getElementById('message').value
            };
            
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                const result = await response.json();
                alert(result.message);
                contactForm.reset();
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('An error occurred. Please try again.');
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Fetch models from the backend
    fetch('/api/models')
      .then(response => response.json())
      .then(models => {
        const container = document.getElementById('models-container');
        models.forEach(model => {
          const card = `
            <div class="model-card bg-gray-50 rounded overflow-hidden shadow-lg">
              <div class="h-64 overflow-hidden">
                <img src="${model.image}" alt="${model.name}" class="w-full h-full object-cover object-top">
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bold mb-2">${model.name}</h3>
                <p class="text-gray-600 mb-4">${model.description}</p>
                <div class="flex justify-between items-center">
                  <span class="text-xl font-bold">From $${model.price.toLocaleString()}</span>
                  <button class="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition">Explore</button>
                </div>
              </div>
            </div>
          `;
          container.innerHTML += card;
        });
      })
      .catch(error => console.error('Error fetching models:', error));
  });