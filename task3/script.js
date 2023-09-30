// JavaScript code for the responsive blog website

// Function to toggle the mobile navigation menu
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Event listener for the mobile menu toggle button
document.querySelector('.logo').addEventListener('click', toggleMobileMenu);

// Function to load more blog posts (if applicable)
function loadMorePosts() {
    // Implement your logic to load more posts here
    // You can fetch data from an API or show/hide additional posts already present in the HTML
    // For simplicity, we'll just hide the button in this example
    document.querySelector('.load-more').style.display = 'none';
}

// Event listener for the "Load More" button
document.querySelector('.load-more button').addEventListener('click', loadMorePosts);
