// Write your code here!
function removeMain(mainTagId) {
    const mainTag = document.getElementById(mainTagId);
    mainTag.remove();
}
removeMain("main");

const newHeader = document.createElement('h1'); // Create an <h1> element
newHeader.id = 'victory'; // Set the id to 'victory'
newHeader.textContent = 'Abala is the champion'; // Set the text content