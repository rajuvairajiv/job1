document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".table-container").forEach(container => {
        container.style.display = "none";
    });

    document.querySelectorAll(".box input[type='checkbox']").forEach(checkbox => {
        checkbox.addEventListener("click", function () {
            let tableContainer = this.closest(".box").querySelector(".table-container");

            tableContainer.style.display = tableContainer.style.display === "block" ? "none" : "block";
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown > button").forEach(button => {
        button.addEventListener("click", function (event) {
            let dropdownContent = this.nextElementSibling;

            document.querySelectorAll(".dropdown > div").forEach(dropdown => {
                if (dropdown !== dropdownContent) {
                    dropdown.style.display = "none";
                }
            });

            dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";

            event.stopPropagation();
        });
    });


    document.addEventListener("click", function () {
        document.querySelectorAll(".dropdown > div").forEach(dropdown => {
            dropdown.style.display = "none";
        });
    });
});


