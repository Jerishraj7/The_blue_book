document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Dynamic year update in the footer
    const footer = document.querySelector("footer p");
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `&copy; ${currentYear} Blue Book Coupons. All Rights Reserved.`;
    }

    // Hover effect on vouchers
    document.querySelectorAll(".voucher").forEach(voucher => {
        voucher.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });
        voucher.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
