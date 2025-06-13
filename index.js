document.addEventListener("DOMContentLoaded", () => {
    const picture = document.getElementById("profile-desktop");
    picture.classList.add("profile-desktop");

    const sr = ScrollReveal({
        distance: "200px",
        duration: 600,
        easing: "ease-out",
        mobile: true,
        reset: false,
    });

    sr.reveal(".skillsCard", {
        origin: "left",
        interval: 100,
    });
    sr.reveal(".toolsCard", {
        origin: "right",
        interval: 100,
    });

    sr.reveal(".project", {
        origin: "bottom",
        distance: "300px",
        duration: 600,
        easing: "ease-out",
        interval: 200,
        viewFactor: 0.2,
    });
});
