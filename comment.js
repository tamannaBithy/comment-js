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
        <button onclick="loadDetails('${comment.id}')" >details </button>
        <div id="details"></div>
        `
        divComment.appendChild(div)
    });
}

const loadDetails = async id => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data);
}

const displayDetails = data => {
    // console.log(data)

    const divDetails = document.getElementById('details');
    divDetails.innerHTML = `
    <p>${data.body}</p>`


}