const ws = new WebSocket('ws://localhost:8080');

ws.onmessage = function(event) {
    const message = event.data;
    displayMessage(message);
};

document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    sendMessage();
});

document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value;
    ws.send(message);
    input.value = '';
}

function displayMessage(message) {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerText = message;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
