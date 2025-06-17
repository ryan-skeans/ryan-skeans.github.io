document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("#skill-filters .filter-btn");
    const cards = document.querySelectorAll(".skill-card");
    const inactiveClasses = [
        "opacity-30",
        "grayscale",
        "scale-95",
        "pointer-events-none",
    ];

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            buttons.forEach((b) => {
                b.classList.replace("bg-indigo-600", "bg-gray-700");
                b.classList.replace("text-white", "text-gray-200");
            });
            btn.classList.replace("bg-gray-700", "bg-indigo-600");
            btn.classList.replace("text-gray-200", "text-white");

            const filter = btn.dataset.filter;
            cards.forEach((card) => {
                const cat = card.dataset.category;
                if (filter === "all" || cat === filter) {
                    card.classList.remove(...inactiveClasses);
                } else {
                    card.classList.add(...inactiveClasses);
                }
            });
        });
    });

    // initialize on “All”
    document.querySelector('[data-filter="all"]').click();
});
