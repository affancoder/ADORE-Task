document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('closed');
});

document.addEventListener("DOMContentLoaded", function() {
    const statusElement = document.getElementById("status");
    const submitBtn = document.getElementById("submitBtn");

    const statuses = ["Upcoming", "Published", "In Progress", "Cancelled"];
    let currentIndex = 0;

    submitBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % statuses.length;
        statusElement.textContent = statuses[currentIndex];
    });
});
