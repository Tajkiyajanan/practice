document.getElementById('add-border').addEventListener('click', function (){
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid tomato'
})

const friends = document.getElementsByClassName('friend');
console.log(friends);