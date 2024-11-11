const images = []; 
let currentIndex = -1; 

document.getElementById('fetchBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.waifu.pics/sfw/waifu');
        const data = await response.json();
        images.push(data.url);
        currentIndex = images.length - 1;
        displayImage();
        document.getElementById('prevBtn').style.display = currentIndex > 0 ? 'inline-block' : 'none';
        document.getElementById('nextBtn').style.display = 'none';
    } catch (error) {
        console.error('Error fetching image:', error);
    }
});

function displayImage() {
    const imgElement = document.getElementById('image');
    imgElement.src = images[currentIndex];
    imgElement.style.display = 'block';
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayImage();
        updateButtonVisibility();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        displayImage();
        updateButtonVisibility();
    }
});

function updateButtonVisibility() {
    document.getElementById('prevBtn').style.display = currentIndex > 0 ? 'inline-block' : 'none';
    document.getElementById('nextBtn').style.display = currentIndex < images.length - 1 ? 'inline-block' : 'none';
}
