// --- THREE.JS LOGIC ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
    canvas: document.getElementById('bg-canvas'), 
    antialias: true, 
    alpha: true 
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 30;

// Create Particles
const particlesGeometry = new THREE.BufferGeometry();
const counts = 3000;
const positions = new Float32Array(counts * 3);

for(let i = 0; i < counts * 3; i++) { 
    positions[i] = (Math.random() - 0.5) * 100; 
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const particlesMaterial = new THREE.PointsMaterial({ size: 0.05, color: 0xffffff });
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    particlesMesh.rotation.y += 0.001;
    renderer.render(scene, camera);
}

// Window Resize Handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();