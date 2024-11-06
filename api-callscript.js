document.getElementById('fetchBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.waifu.pics/sfw/waifu'); // Fetching a random waifu image
        const data = await response.json();
        document.getElementById('image').src = data.url; // Set the image source to the fetched URL
        document.getElementById('image').style.display = 'block'; // Show the image
    } catch (error) {
        console.error('Error fetching image:', error);
    }
});