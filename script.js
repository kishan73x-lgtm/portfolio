 const skills = document.querySelectorAll('.skill-bar span');
  window.addEventListener('scroll', () => {
    skills.forEach(skill => {
      if (skill.getBoundingClientRect().top < window.innerHeight) {
        skill.style.width = skill.dataset.skill;
      }
    });
  });

  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Message sent successfully!');
    e.target.reset();
  });