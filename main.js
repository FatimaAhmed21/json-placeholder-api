function getPosts(userId) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    request.responseType = "json";
    request.send();
    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
            document.querySelector(".posts-container").innerHTML = ""
            for (let post of posts) {
                let content = `<div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>`
                document.querySelector(".posts-container").innerHTML += content
            }
        } else {
            console.log("error")
        }
    }
}
getPosts(1);

function getUsers() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users/");
    request.responseType = "json";
    request.send();
    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
            let users = request.response;
            for (let user of users) {
                let content = `<div class="user" onclick="filterPosts(${user.id} , this)">
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            </div>`
                document.querySelector(".users-container").innerHTML += content
            }
        } else {
            console.log("error")
        }
    }
}
getUsers();



function filterPosts(id, element) {
    getPosts(id)
    let selectedElements = document.getElementsByClassName("selected")
    for (const SE of selectedElements) {
        SE.classList.remove("selected")
    }
    element.classList.add("selected")
}