// Define the file structure as a JavaScript object
const fileStructure = {
    "Main": {
        "1. Personal": {
            "Books": {
                "Bookread.html": "assets/personal/Books/Bookread.html",
                "atomic habit": {
                    "Chapter_1_review.html": "assets/personal/Books/atomic_habit/Chapter_1_review.html"
                }
            }
        },
        "2. Finance": {
            "Stocks to pick": {
                "Growth stocks": {
                    "Tech_stocks_growth.html": "assets/finance/Stocks_to_pick/Growth_stocks/Tech_stocks_growth.html"
                }
            }
        }
    }
};

// Function to create HTML for the file tree
function createFileTree(structure, parentElement) {
    const ul = document.createElement('ul');

    for (let key in structure) {
        const li = document.createElement('li');
        
        if (typeof structure[key] === 'string') {
            // If it's a file, create a link
            const link = document.createElement('a');
            link.href = structure[key];
            link.textContent = key;
            link.target = "_blank";
            li.appendChild(link);
        } else {
            // If it's a folder, recursively create a nested list
            li.textContent = key;
            li.classList.add('folder');
            createFileTree(structure[key], li);
        }

        ul.appendChild(li);
    }

    parentElement.appendChild(ul);
}

// Find the file tree container and generate the file tree
document.addEventListener("DOMContentLoaded", () => {
    const fileTreeContainer = document.getElementById("fileTree");
    createFileTree(fileStructure, fileTreeContainer);
});
