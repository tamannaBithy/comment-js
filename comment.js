const showComment = async () => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    const res = await fetch(url);
    const data = await res.json();
    displayComment(data);
}
showComment()
// i've call this function for showing data without clicking a button . if you want to show the data by clicking btn just enable the btn in html & no need to call this function

const displayComment = comments => {
    const divComment = document.getElementById('comment-section');
    comments.forEach(comment => {
        // console.log(comment)
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <p>${comment.id}</p>
        <h3>${comment.email}</h3>
        <button onclick="loadDetails(this)" >details </button>
        <div id="details"></div>
        `
        divComment.appendChild(div)
    });
}

const loadDetails = async element => {
    const id = element.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    // console.log(id)
    const details = element.nextSibling.nextSibling;
    // console.log(details)
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data, details);
}

const displayDetails = (data, details) => {
    details.innerHTML = `
    <p>${data.body}</p>`
}