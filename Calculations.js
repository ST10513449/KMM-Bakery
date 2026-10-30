console.log("JS is working");

const orderItems = document.querySelectorAll(".order-item");
const total = document.getElementById("total");
const orderButton = document.getElementById("orderButton");


// Flavours for each treat
const flavours = {

    "Cupcake": [
        "Classic Vanilla",
        "Chocolate Fudge",
        "Lemon Bliss",
        "Strawberry Vanilla",
        "Cookies and Cream"
    ],

    "Cookie": [
        "Chocolate Chip",
        "Oatmeal Raisin",
        "Salted Caramel",
        "Blueberry Lemon Cheesecake",
        "Peanut Butter"
    ],

    "Brownie": [
        "Classic Fudgy Fudge",
        "Biscoff Bliss",
        "Salted Caramel",
        "Peanut Butter Swirl",
        "Cookies and Cream"
    ],

    "Cinnamon Roll": [
        "Classic Cinnamon Sugar",
        "Chocolate",
        "Caramel",
        "Apple",
        "Cream Cheese"
    ],

    "Custom Cake": [
        "Vanilla",
        "Chocolate",
        "Red Velvet",
        "Carrot"
    ]
};


// Change flavours based on selected treat
function updateFlavours(orderItem) {

    const item = orderItem.querySelector(".item");
    const flavour = orderItem.querySelector(".flavour");

    const selectedText =
        item.options[item.selectedIndex].text;

    // Clear existing flavours
    flavour.innerHTML =
        '<option value="">Select a flavour</option>';


    // Find the selected treat
    let selectedTreat = "";

    if (selectedText.includes("Cupcake")) {
        selectedTreat = "Cupcake";

    } else if (selectedText.includes("Brownie")) {
        selectedTreat = "Brownie";

    } else if (selectedText.includes("Cookie")) {
        selectedTreat = "Cookie";

    } else if (selectedText.includes("Cinnamon Roll")) {
        selectedTreat = "Cinnamon Roll";

    } else if (selectedText.includes("Custom Cake")) {
        selectedTreat = "Custom Cake";
    }


    // Add flavours
    if (selectedTreat !== "") {

        flavours[selectedTreat].forEach(function(flavourName) {

            const option =
                document.createElement("option");

            option.value = flavourName;
            option.textContent = flavourName;

            flavour.appendChild(option);
        });
    }
}


// Calculate total
function calculateTotal() {

    let finalPrice = 0;


    orderItems.forEach(function(orderItem) {

        const item =
            orderItem.querySelector(".item");

        const quantity =
            orderItem.querySelector(".quantity");

        const cakeSize =
            orderItem.querySelector(".cake-size");


        let price =
            Number(item.value);

        let amount =
            Number(quantity.value);


        // Custom cake uses size price
        if (
            item.value !== "" &&
            item.options[item.selectedIndex].text.includes("Custom Cake")
        ) {

            if (cakeSize.value !== "") {
                price = Number(cakeSize.value);
            }
        }


        finalPrice += price * amount;

    });


    total.textContent =
        finalPrice.toFixed(2);
}


// Set up each order item
orderItems.forEach(function(orderItem) {

    const item =
        orderItem.querySelector(".item");

    const quantity =
        orderItem.querySelector(".quantity");

    const cakeSizeContainer =
        orderItem.querySelector(".cake-size-container");

    const cakeSize =
        orderItem.querySelector(".cake-size");


    // Treat selected
    item.addEventListener("change", function() {

        updateFlavours(orderItem);


        // Show cake size only for custom cakes
        if (
            item.options[item.selectedIndex].text.includes("Custom Cake")
        ) {

            cakeSizeContainer.style.display =
                "block";

        } else {

            cakeSizeContainer.style.display =
                "none";

            cakeSize.value = "";
        }


        calculateTotal();
    });


    // Quantity changed
    quantity.addEventListener(
        "input",
        calculateTotal
    );


    // Cake size changed
    cakeSize.addEventListener(
        "change",
        calculateTotal
    );

});


// Place order
orderButton.addEventListener("click", function() {

    const name =
        document.getElementById("name").value;

    const date =
        document.getElementById("date").value;


    if (name === "" || date === "") {

        alert(
            "Please fill in your name and collection date."
        );

        return;
    }


    let orderDetails = "";
    let hasOrder = false;


    orderItems.forEach(function(orderItem, index) {

        const item =
            orderItem.querySelector(".item");

        const flavour =
            orderItem.querySelector(".flavour");

        const quantity =
            orderItem.querySelector(".quantity");

        const cakeSize =
            orderItem.querySelector(".cake-size");


        if (item.value !== "") {

            hasOrder = true;


            const selectedItem =
                item.options[item.selectedIndex].text;


            orderDetails +=
                (index + 1) + ". " +
                selectedItem + "\n";


            orderDetails +=
                "   Flavour: " +
                (flavour.value || "Not selected") +
                "\n";


            // Add cake size
            if (
                item.options[item.selectedIndex].text.includes("Custom Cake")
            ) {

                if (cakeSize.value !== "") {

                    orderDetails +=
                        "   Size: " +
                        cakeSize.options[cakeSize.selectedIndex].text +
                        "\n";

                } else {

                    orderDetails +=
                        "   Size: Not selected\n";
                }
            }


            orderDetails +=
                "   Quantity: " +
                quantity.value +
                "\n\n";
        }

    });


    if (!hasOrder) {

        alert(
            "Please select at least one treat."
        );

        return;
    }


    window.location.href = "ThankYou.html";

});

