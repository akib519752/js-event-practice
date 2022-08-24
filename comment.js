document.getElementById('btn-post').addEventListener('click', function () {
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newComment;
    commentContainer.appendChild(p);
    commentBox.value = '';
});



// document.getElementById('btn-post').addEventListener('click', function () {
//     const comment = document.getElementById('new-comment');
//     const newComment = comment.value;
//     const commentContainer = document.getElementById('comment-container');
//     const p = document.createElement('p');
//     p.innerText = newComment;
//     commentContainer.appendChild(p);
//     comment.value = '';
// })
































