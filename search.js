// DEMO SEARCH DATA
const demoUsers = [
    {
        name: "Rahul Sharma",
        bio: "Travel | Tech | Music",
        img: "https://picsum.photos/200?random=1"
    },
    {
        name: "Sneha Patel",
        bio: "Foodie & Lifestyle Blogger",
        img: "https://picsum.photos/200?random=2"
    },
    {
        name: "Aman Singh",
        bio: "Photography Lover",
        img: "https://picsum.photos/200?random=3"
    },
    {
        name: "Priya Verma",
        bio: "Fashion & Makeup",
        img: "https://picsum.photos/200?random=4"
    }
];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// Filter Search
searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase();
    const filtered = demoUsers.filter(user =>
        user.name.toLowerCase().includes(text) ||
        user.bio.toLowerCase().includes(text)
    );
    showResults(filtered);
});

// Render Function
function showResults(list) {
    searchResults.innerHTML = "";

    list.forEach(user => {
        const item = document.createElement("div");
        item.classList.add("search-item");
        item.innerHTML = `
            <img src="${user.img}" class="previewable-img">
            <div class="search-info">
                <h4>${user.name}</h4>
                <p>${user.bio}</p>
            </div>
        `;

        // Image click preview
        item.querySelector("img").addEventListener("click", (e) => {
            e.stopPropagation();
            openImagePreview(user.img);
        });

        searchResults.appendChild(item);
    });
}

// IMAGE PREVIEW MODAL
const modal = document.getElementById("imgPreviewModal");
const previewImg = document.getElementById("previewImage");
const closeBtn = document.getElementById("closePreview");

function openImagePreview(src) {
    previewImg.src = src;
    modal.style.display = "flex";
}

closeBtn.onclick = () => {
    modal.style.display = "none";
};

modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};

// Initial Load
showResults(demoUsers);