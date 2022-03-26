var currentServer = "";

class classroom {
    constructor(name) {
        this.name = name;
        this.rooms = [
            new textChannels("General Discussion"),
            new textChannels("Homework Help"),
            new textChannels("Exam Prep")
        ]
        
        let button = document.createElement("button");
        let temp = document.createTextNode(this.name);
        button.appendChild(temp);
        button.addEventListener("click", () => this.loadRooms());
        button.className = "serverButton";
        document.getElementById("classes").appendChild(button);
    }

    loadRooms() {        
        let childChecker = document.getElementById("rooms");
        currentServer = this.name;

        while(childChecker.hasChildNodes())
        {
            childChecker.removeChild(childChecker.children[0]);
        }

        for(let room of this.rooms) {
            let button = document.createElement("button");
            let temp = document.createTextNode(room.name);
            button.appendChild(temp);
            button.addEventListener("click", () => this.colorChange(room));
            button.setAttribute("Id", room.name)
            button.className = "roomButton";
            document.getElementById("rooms").appendChild(button);
        }
    }

    colorChange(room) {
        for(let temp of this.rooms){
            document.getElementById(temp.name).style.color = "LightSlateGrey";
        }

        room.loadChatroom()
    }
}

class textChannels {
    constructor(name) {
        this.name = name;
        this.chatHistory = [];
    }

    loadChatroom() {
        document.getElementById("chatroomHeader").innerHTML = currentServer + "'s "+ this.name+ " Chatroom";
        document.getElementById(this.name).style.color = "rgb(6, 87, 238)";
        currentRoom = this;
    }

    addChat(text) {
        this.chatHistory.push(text);
    }

}

function send() {
    
}

let servers = [
    new classroom("Math"),
    new classroom("English"),
    new classroom("Science"),
    new classroom("History")
]
