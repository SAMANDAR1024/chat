
let username = "User"; 

document.getElementById("changeNameBtn").addEventListener("click", () => {
    document.getElementById("nameChangePopup").style.display = "flex";
});

document.getElementById("closePopupBtn").addEventListener("click", () => {
    document.getElementById("nameChangePopup").style.display = "none";
});

document.getElementById("saveNameBtn").addEventListener("click", () => {
    const newName = document.getElementById("newName").value;
    if (newName.trim()) {
        username = newName;
        document.getElementById("nameChangePopup").style.display = "none";
    }
});

document.getElementById("sendBtn").addEventListener("click", () => {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value.trim();
    if (message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");

        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const time = `${hours}:${minutes}`;

        messageElement.innerHTML = `<strong>${username}:</strong> ${message} <span class="time">(${time})</span>`;
        document.getElementById("chatBox").appendChild(messageElement);
        messageInput.value = "";  
        document.getElementById("chatBox").scrollTop = document.getElementById("chatBox").scrollHeight; 
    }
});
