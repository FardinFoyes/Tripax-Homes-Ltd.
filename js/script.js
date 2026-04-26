const elements = document.querySelectorAll('.fade-left, .fade-right');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.5 });

elements.forEach(el => observer.observe(el));


// Reviews Section
let currentSlide = 0;

function moveSlide(direction) {
    const slider = document.getElementById('testimonialSlider');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const cardWidth = cards[0].offsetWidth + 30; // Card width + gap

    // Logic to calculate max slides based on screen width
    const visibleCards = window.innerWidth > 768 ? 2 : 1;
    const maxSlide = totalCards - visibleCards;

    currentSlide += direction;

    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide > maxSlide) currentSlide = maxSlide;

    slider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}

// Modal Logic
function openModal(name, role, text) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalRole').innerText = role;
    document.getElementById('modalText').innerText = text;
    document.getElementById('reviewModal').style.display = "block";
}

function closeModal() {
    document.getElementById('reviewModal').style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    let modal = document.getElementById('reviewModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Prevent form submission refresh
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your review! It has been submitted for approval.');
    this.reset();
});