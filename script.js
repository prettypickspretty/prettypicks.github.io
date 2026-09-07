/* =========================================
   PRETTY PICKS
   Main JavaScript
========================================= */


/*
    =========================================
    PRODUCT DATABASE
    =========================================

    IMPORTANT:

    These are demonstration products.

    Before publishing the site for real,
    replace the image URLs and Amazon links
    with your own compliant product information
    and affiliate links.

    You can add more products by copying
    the format below.
*/


const products = [

    {
        name: "Minimalist Jewelry Organizer",
        category: "Accessories",
        description: "A pretty and practical way to keep everyday jewelry organized.",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
        link: "#"
    },

    {
        name: "Cozy Home Decor",
        category: "Home",
        description: "A simple decorative touch to make your space feel warmer.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        link: "#"
    },

    {
        name: "Pretty Makeup Organizer",
        category: "Beauty",
        description: "Keep your beauty essentials neat, visible and easy to reach.",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
        link: "#"
    },

    {
        name: "Everyday Tote Bag",
        category: "Fashion",
        description: "A versatile everyday bag that goes with almost everything.",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
        link: "#"
    },

    {
        name: "Cute Desk Accessories",
        category: "Home",
        description: "Small desk upgrades for a prettier workspace.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
        link: "#"
    },

    {
        name: "Self Care Gift Set",
        category: "Gifts",
        description: "A thoughtful idea for birthdays, holidays or just because.",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
        link: "#"
    },

    {
        name: "Minimal Beauty Mirror",
        category: "Beauty",
        description: "A beautiful addition to a vanity, bedroom or dressing area.",
        image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80",
        link: "#"
    },

    {
        name: "Elegant Everyday Earrings",
        category: "Accessories",
        description: "Simple accessories that work beautifully with everyday outfits.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
        link: "#"
    }

];


/* =========================================
   PRODUCT DISPLAY
========================================= */

const productGrid = document.getElementById("productGrid");

const noResults = document.getElementById("noResults");


function displayProducts(list) {

    productGrid.innerHTML = "";


    if (list.length === 0) {

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    list.forEach(product => {

        const card = document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <a
                    href="${product.link}"
                    class="amazon-button"
                    target="_blank"
                    rel="nofollow sponsored noopener"
                >
                    Check it out on Amazon →
                </a>

            </div>

        `;


        productGrid.appendChild(card);

    });

}


/* =========================================
   INITIAL DISPLAY
========================================= */

displayProducts(products);


/* =========================================
   CATEGORY FILTERS
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const category =
            button.dataset.filter;


        if (category === "All") {

            displayProducts(products);

        } else {

            const filtered =
                products.filter(product =>
                    product.category === category
                );

            displayProducts(filtered);

        }

    });

});


/* =========================================
   SEARCH
========================================= */

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener("input", () => {

    const searchTerm =
        searchInput.value.toLowerCase().trim();


    const filtered =
        products.filter(product => {

            return (

                product.name
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                product.description
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                product.category
                    .toLowerCase()
                    .includes(searchTerm)

            );

        });


    displayProducts(filtered);

});


/* =========================================
   CATEGORY CARDS
========================================= */

const categoryCards =
    document.querySelectorAll(".category-card");


categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        const category =
            card.dataset.category;


        const filtered =
            products.filter(product =>
                product.category === category
            );


        document
            .querySelectorAll(".filter-btn")
            .forEach(btn => {

                btn.classList.remove("active");

            });


        const matchingButton =
            document.querySelector(
                `.filter-btn[data-filter="${category}"]`
            );


        if (matchingButton) {

            matchingButton.classList.add("active");

        }


        displayProducts(filtered);


        document
            .getElementById("picks")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


menuToggle.addEventListener("click", () => {

    nav.classList.toggle("show");

});


/* Close mobile menu after clicking */

document.querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("show");

        });

    });


/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById("year")
    .textContent = new Date().getFullYear();
