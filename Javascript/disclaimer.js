function startGalaxy() {
    const container = document.getElementById('galaxy-container');
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random colors for particles
        const colors = ['#ff4c93', '#ffdd00', '#4cffdc', '#4c6cff', '#ff914c'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        // Random position and movement
        const moveX = (Math.random() - 0.5) * 500 + 'px';
        const moveY = (Math.random() - 0.5) * 500 + 'px';
        particle.style.setProperty('--moveX', moveX);
        particle.style.setProperty('--moveY', moveY);

        // Random starting position
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';

        // Add particle to container
        container.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => particle.remove(), 2000);
    }
}
