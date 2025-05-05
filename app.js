const sideBar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll('.sidebar a');
const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");

document.querySelectorAll(".project-vidbox").forEach((vidBox) => {
    const video = vidBox.querySelector("video");
    const hoverSign = vidBox.querySelector(".hover-sign");
    let isHovering = false;
    let resetTimeout;

    video.addEventListener("mouseover", () => {
        isHovering = true;
        video.play();
        hoverSign.classList.add("active");

        if (resetTimeout) clearTimeout(resetTimeout); // Cancel any pending reset
    });

    video.addEventListener("mouseout", () => {
        isHovering = false;
        video.pause();


        // Wait 3 seconds, then only show the sign if not hovering
        resetTimeout = setTimeout(() => {
            if (!isHovering) {
                hoverSign.classList.remove("active");
            }
        }, 3000);
    });
});


menu.addEventListener("click", () => {
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
    
})

close.addEventListener("click", () => {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
})


sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideBar.classList.add("close-sidebar"); // Close sidebar
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = `Inquiry from ${name}`;
    const body = `Hi Vishnu, This is ${name}.\n\n${message} \n\n Contact me at: ${email}`;

    const mailtoLink = `mailto:vishnu.kv8833@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoLink;
});
