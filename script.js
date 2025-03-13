document.addEventListener("DOMContentLoaded", function() {
    loadNews();
});

function loadNews() {
    let newsList = document.getElementById("news-list");
    newsList.innerHTML = "";
    
    let newsData = JSON.parse(localStorage.getItem("news")) || [];
    
    newsData.forEach((news, index) => {
        let newsItem = document.createElement("div");
        newsItem.classList.add("news-item");
        newsItem.innerHTML = `
            <h3>${news.title}</h3>
            <p>${news.content}</p>
            <button onclick="deleteNews(${index})">Delete</button>
        `;
        newsList.appendChild(newsItem);
    });
}

function addNews() {
    let title = document.getElementById("news-title").value;
    let content = document.getElementById("news-content").value;
    
    if (title.trim() === "" || content.trim() === "") {
        alert("Please enter both title and content.");
        return;
    }
    
    let newsData = JSON.parse(localStorage.getItem("news")) || [];
    newsData.push({ title, content });
    localStorage.setItem("news", JSON.stringify(newsData));
    
    document.getElementById("news-title").value = "";
    document.getElementById("news-content").value = "";
    
    loadNews();
}

function deleteNews(index) {
    let newsData = JSON.parse(localStorage.getItem("news")) || [];
    newsData.splice(index, 1);
    localStorage.setItem("news", JSON.stringify(newsData));
    loadNews();
}