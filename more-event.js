document.getElementById('btn-delete').addEventListener('click', function () {
    document.getElementById('secret-info').style.display = 'none';

})
document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-delete');

    if (text === 'delete') {
        deleteButton.removeAttribute('disabled')
    }
    else {
        deleteButton.setAttribute('disabled', true)
    }
})


// document.getElementById('btn-delete').addEventListener('click', function () {
//     document.getElementById('secret-info').style.display = 'none';
// })


// document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
//     const email = event.target.value;
//     const newButton = document.getElementById('btn-delete');

//     if (email === 'delete') {
//         newButton.removeAttribute('disabled');
//     }
//     else {
//         newButton.setAttribute('disabled', true);
//     }
// })






























