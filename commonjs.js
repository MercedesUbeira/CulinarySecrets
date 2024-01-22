//Since all the pages have header and footer, I figured that it would be easier to use to have one file for header, one for footer and one js that can be applied to all pages.


function includeHTML(filePath, targetId) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", function() {
    includeHTML("/FirstLevel/header.html", "header");
    includeHTML("/FirstLevel/footer.html", "footer");
});

//Function for the "Begin to Savor" btn that scrolls down to the categories.

function scrollToContent() {
    window.scrollTo({
        top: document.getElementById('content').offsetTop,
        behavior: 'smooth'
    });
}