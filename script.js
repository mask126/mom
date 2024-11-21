function showHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;

        heart.style.animationDuration = `${4 + Math.random() * 2}s`;
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 100000);

    }
}
