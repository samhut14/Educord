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
=======
class User {
    constructor(name, email, permissions, profilePicture) {
        this.name = name
        this.email = email
        this.servers = new Set()
        this.status = 3
        this.permissions = permissions
        this.profilePicture = profilePicture
    }

    servers() {
        return this.servers
    }
    email() {
        return this.email
    }
    name() {
        return this.name
    }
    perms() {
        return this.permissions
    }

    addServer(server) {
        if (this.servers.has(server)) return false
        this.servers.add(server)
        return true
    }
    
    removeServer(server) {
        if (this.servers.has(server)) return false
        this.servers.delete(server)
        return true
    }

    changePerms(perm) {
        this.permissions = perm
    }
    
    changePicture(picture) {
        this.picture = picture
    }
}

class Server {
    constructor(name, department, channels) {
        this.name = name
        this.department = department
        this.channels = new Set()
        for (let i = 0; i < channels.length; i++) {
            this.channels.add(channels[i])
        }
        this.users = new Set()
    }

    name() {
        return this.name
    }
    channels() {
        return this.channels
    }
    department() {
        return this.department
    }
    users() {
        return this.users
    }

    setName(name) {
        this.name = name
    }
    addChannel(channel) {
        if (this.channels.has(channel)) return false
        this.channels.add(channel)
        return true
    }
    removeChannel(channel) {
        if (this.channels.has(channel)) return false
        this.channels.delete(channel)
        return true
    }
    addUser(user) {
        if (this.users.has(user)) return false
        this.users.add(user)
        return true
    }
    
    removeUser(user) {
        if (this.users.has(user)) return false
        this.users.delete(user)
        return true
    }
}

class Channel {
    constructor(name, category) {
        this.chatLogs = [] // maybe make this into set?
        this.category = category
        this.name = name
    }
    name() {
        return this.name
    }
    category() {
        return this.category
    }
    logs() {
        return this.chatLogs
    }
    // double check on how to link message with actual message in chatroom, right now its by text but could be by time/id
    message(message) {
        for(let i = 0; i < this.chatLogs.length; i++) {
            if (message == this.chatLogs[i].text) return this.chatLogs[i]
        }
    }
    addChat(message) {
        this.chatLogs.append(message)
    }

    removeChat(message) {
        let found = false;
        for(let i = 0; i < this.chatLogs.length; i++) {
            if (message == this.chatLogs[i].text) {
                this.chatLogs.splice(i, 1)
                found = true;
            }
        }
        return found;
    }

    editChat(message, newText) {
        this.Message(message).setText(newText)
    }

    setCategory(category) {
        this.category = category
    }
}

class ChatMessage {
    constructor(user, time, text) {
        this.user = user
        this.time = time
        this.text = text
    }

    user() {
        return this.user
    }
    time() {
        return this.time
    }
    text() {
        return this.text
    }

    setText(text) {
        this.text = text
    }

}
