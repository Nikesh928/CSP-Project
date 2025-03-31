function navigateTo(page) {
    // Ensure a smooth transition effect when navigating to a new page
    document.body.style.opacity = 0;
    setTimeout(() => {
        window.location.href = page;
    }, 300);
}

// Attach event listeners to all navigation buttons dynamically
window.onload = () => {
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = 1;
    
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", function () {
            const targetPage = this.getAttribute("data-target");
            if (targetPage) {
                navigateTo(targetPage);
            }
        });
    });
};
