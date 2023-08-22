const socket = io()

const clientsTotal = document.getElementById('clients-total');
const messageContainer = document.getElementById('message-container');
const nameInput = document.getElementById('name-input');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input')

messageForm.addEventListener('submit', (e) => {
	e.preventDefault();
	sendMessage();
})
console.log(clientsTotal)
socket.on('clients-total', (data) => {
	console.log(data);
	clientsTotal.innerText = `Total clients: ${data}`;
})

function sendMessage() {
	console.log(messageInput.value);
	const data = {
		name: nameInput.value,
		message: messageInput.value,
		dateTime: new Date(),
	}
	socket.emit('message', data)
}
