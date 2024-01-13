// JavaScript for fetching social media data and displaying widgets

// Simulated data for widgets (replace with actual data fetching)
const socialMediaData = [
    { platform: 'Facebook', followers: 5000, posts: 120 },
    { platform: 'Twitter', followers: 3500, posts: 80 },
    { platform: 'Instagram', followers: 8000, posts: 200 },
    // Add more social media data as needed
];

const widgetsSection = document.querySelector('.widgets');

// Function to create social media widgets
function createSocialMediaWidgets() {
    socialMediaData.forEach(data => {
        const widget = document.createElement('div');
        widget.classList.add('widget');
        widget.innerHTML = `
            <h2>${data.platform}</h2>
            <p>Followers: ${data.followers}</p>
            <p>Posts: ${data.posts}</p>
        `;
        widgetsSection.appendChild(widget);
    });
}

// Call the function to create widgets when the page loads
window.onload = createSocialMediaWidgets;
