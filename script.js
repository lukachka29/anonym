document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const recipient = document.getElementById('recipient').value;
    const message = document.getElementById('message').value;
    
    addMessage(recipient, message);

    // Clear the form
    document.getElementById('messageForm').reset();
});

function addMessage(recipient, message) {
    const messageList = document.getElementById('messageList');
    const messageItem = document.createElement('div');
    messageItem.classList.add('messageItem');
    
    const recipientElement = document.createElement('h4');
    recipientElement.innerText = `To: ${recipient}`;
    
    const messageElement = document.createElement('p');
    messageElement.innerText = message;
    
    messageItem.appendChild(recipientElement);
    messageItem.appendChild(messageElement);
    
    messageList.appendChild(messageItem);
}
