//Add links to the javascript in full calendar
const socket = io();

//Creates a class that will represent the sideBar
class sideBar {
    //Creates a constructor for sideBar
    constructor() {
        //Stores the html content of sideBar
        this.sideBar = "";
    }

    //Creates the Side Bar in index.html
    createSideBar() {
        //Firstly, create a new div tag that will store the side bar
        this.sideBar = document.createElement("div");

        //Set the id of sideBar to sideBar
        this.sideBar.setAttribute("id", "sideBar");

        //Next, create three headers
        //The first header represents the Homepage
        //The second header represents the Calendar, and the last headerrepresents to To-Do list

        //Create a new header tag for Homepage
        let homePage = document.createElement("h2");

        //Set the inner html of homepage to be Home 
        homePage.innerHTML = "Home";

        //Set the id of homepage to be homePageTitle
        homePage.setAttribute("id", "homePageTile");

        //Append homePage to sidebar
        this.sideBar.append(homePage);

        //Create a new header tag
        let calendar = document.createElement("h3");

        //Set innerhtml of calendar to be Calendar
        calendar.innerHTML = "Calendar";

        //Sets its id to be calendarLink
        calendar.setAttribute("id", "calendarLink");

        //Attach calendar to sideBar
        this.sideBar.appendChild(calendar);

        //Create a new header tag for to do list
        let todoList = document.createElement("h3");

        //Set innerhtml of todoList
        todoList.innerHTML = "Todo List";

        //Sets its id to be todoListLink
        todoList.setAttribute("id", "todoListLink");

        //Attach todoList to sideBar
        this.sideBar.appendChild(todoList);

        //Attach sideBar to body
        // window.document.querySelector("body").appendChild(this.sideBar);
    }
}

//Represents a calendar for the user
class calendar {
    //Constructor for calendar class
    constructor() {
        //Contains the html content of claendar
        this.calendar;

        //Next, create a new fullCalendar to render
        this.fullCalendar;

    }

    //Creates a new calendar for the homepage
    createCalendar() {
        //Firstly, create a new div element
        this.calendar = document.createElement("div");

        //Set the id of cal to be be calendar
        this.calendar.setAttribute("id", "calendar");

        //Next, attach cal to the body
        // window.document.querySelector("body").appendChild(this.calendar);

        //Create a new xr, no new parameters for now
        this.fullCalendar = new FullCalendar.Calendar(this.calendar, {
        });

        //Render fullCalendar
        this.fullCalendar.render();

        //Resize the window to fit fullCalendar properly
        window.dispatchEvent(new Event('resize'));
    }

}

//To-Do List Class
class todoList {
    //Constructor for Todo-List
    constructor() {
        //Stores the html content of todoList
        this.todoList;
    }

    //Creates todoList
    createTodoList() {
        //Firstly, create a new div element called todoList
        this.todoList = document.createElement("div");

        //Set the id of div to be todoList
        this.todoList.setAttribute("id", "todoList");

        //Create the header div for todoList
        this.todoList.appendChild(this.createHeader());

        //Create the project-form div for todoList
        this.todoList.appendChild(this.createProjectForm());

        //Create the todo-form div for todoList
        this.todoList.appendChild(this.createTodoForm());

        //Create the body div for todoList
        this.todoList.appendChild(this.createBody());

        //Attach todoList to body
        //window.document.querySelector("body").appendChild(this.todoList);
    }

    //Create an tag by passing in a class and id
    //Class and id won't be added to the tag if 
    //either of them are null
    createTags(type, id, css) {
        //Firstly, create the newElement by using the doucment querySelector to create
        let newElement = document.createElement(type);

        //Next, check if id is not null
        //If id is null
        if (id != null) {
            //Set the attribute of newElement to be id
            newElement.setAttribute("id", id);
        }

        //Next, check if css is not null
        //If css is null
        if (css != null) {
            //Set the class of newElement to be css
            newElement.setAttribute("class", css);
        }

        //Finally, return newElement
        return newElement;
    }

    //Create TodoList Header
    createHeader() {
        //Create the first div tag
        let div1 = this.createTags("div", null, "header");

        //Add the second div tag
        let div2 = this.createTags("div", null, "header-cotainer");

        //Add the third div tag
        let div3 = this.createTags("div", null, "title");

        //Set the inner html to be div3
        div3.innerHTML = "Todo List";

        //Append div3 to div2 and div2 to div1
        div2.appendChild(div3);
        div1.appendChild(div2);

        //Return div1
        return div1;
    }

    //Create div tag for project-form
    createProjectForm() {
        //Create the first div tag
        let div1 = this.createTags("div", "project-form", null);

        //Create the second div tag
        let div2 = this.createTags("div", "formcontent", null)

        //Create the third div tag
        let div3 = this.createTags("div", "close", null);

        //Set the inner html of div3
        div3.innerHTML = " x ";

        //Add div3 to div2 and div2 to div1
        div2.appendChild(div3);
        div1.appendChild(div2);

        //Return div1
        return div1;
    }

    //Create div tag for todo-form
    createTodoForm() {
        //Create the first div tag
        let div1 = this.createTags("div", "todo-form", null);

        //Create the second div tag
        let div2 = this.createTags("div", "formcontent1", null);

        //Create the third div tag
        let div3 = this.createTags("div", "close1", null);

        //Set the inner html of div3
        div3.innerHTML = " x ";

        //Add div3 to div2 and div2 to div1
        div2.appendChild(div3);
        div1.appendChild(div2);

        //Return div1
        return div1;
    }

    //Create a div tag for project-headers
    createProjectHeaders() {
        //Create the first div tag
        let div1 = this.createTags("div", null, "project-headers");

        //Create the second div tag
        let div2 = this.createTags("div", null, "project-buttons");

        //Create the button tag for addProject
        let button = this.createTags("button", "addProject", null);

        //Add classes to button
        button.classList.add("addProject", "button2");

        //Set the inner html of button to be Add project
        button.innerHTML = "Add project";

        //Add button to div2 and add div2 to div1
        div2.appendChild(button);
        div1.appendChild(div2);

        //Return div1
        return div1;
    }

    //Create a div-tag for form
    createForm() {
        //Create the first div tag
        let div1 = this.createTags("div", null, "form");

        //Create the second div tag
        let div2 = this.createTags("div", null, null);

        //Add the label 
        let label = document.createElement("label");

        //Set the attribute of label to for
        label.setAttribute("for", "todo");

        //Create the input tag
        let input = this.createTags("input", "todo", null);

        //Set the type of input to be text
        input.setAttribute("type", "text");

        //Next, add label and input to div2 and div2 to div1
        div2.appendChild(label);
        div2.appendChild(input);
        div1.appendChild(div2);

        //Next, add a button
        let button = this.createTags("button", null, "add button2");

        //Set the innerhtml of button
        button.innerHTML = "+";

        //Finally, add button to div1
        div1.appendChild(button);

        //Return div1
        return div1;
    }

    //Create the div body
    createBody() {
        //Firstly, create the first div tag
        let div1 = this.createTags("div", null, "body");

        //Create the second div tag
        let div2 = this.createTags("div", null, "container");

        //Create the third div tag
        let div3 = this.createProjectHeaders();

        //Create the fourth div tag
        let div4 = this.createForm();

        //Create the fifth div tag
        let div5 = this.createTags("div", null, "list");

        //Add div3, div4, and div5 to div2
        div2.appendChild(div3);
        div2.appendChild(div4);
        div2.appendChild(div5);

        //Add div2 to div1
        div1.appendChild(div2);

        //Return div1
        return div1;
    }

}

//Create a new sideBar
let side = new sideBar();
//Create a new calendar
let cal = new calendar();
//Create todoList
let to = new todoList();

//Contains all information about the user homePage
class homePage {
    //Constructor for home page
    constructor() {
        //Create all three parts of the homepage
        //The sideBar
        this.side = new sideBar();

        //The Calendar
        this.cal = new calendar();

        //The TodoList
        this.to = new todoList();

        //Contains all the html content of homepage
        this.homePage;
    }

    //Creates the homepage 
    render() {
        //Create a new div tag for homepage
        this.homePage = document.createElement("div");

        //Set the id of homepage to be homepage
        this.homePage.setAttribute("id", "homepage");

        //Add the class of homepage to be maincontainer
        this.homePage.setAttribute("class", "mainContainer")

        //Render the calendar, the todo list, and side bar
        this.cal.createCalendar();
        this.to.createTodoList();
        this.side.createSideBar();

        //Next, attach the sideBar, todolist, and calendar to homePage
        this.homePage.appendChild(this.cal.calendar);
        this.homePage.appendChild(this.to.todoList);
        this.homePage.appendChild(this.side.sideBar);

        //Hide the todoList
        this.to.todoList.style.display = "none";

        //Show the calendar
        this.cal.calendar.style.display = "";

        //Hide the homePage
        this.homePage.style.display = "none";

        //Add switches 
        this.addSwitches();
    }

    //Add switches to the headers of sideBar
    addSwitches() {
        //Firstly, get the children of the sideBar
        let headers = this.side.sideBar.children;

        //Next, get the second and third children of the sideBar
        //Which are the calendar and todoList headers
        let calendarLink = headers[1];
        let todoListLink = headers[2];


        //Next, add an event listener to calendarLink
        calendarLink.addEventListener("click", (e) => {
            //Firstly, check if calendar is hidden
            //If the calendar is hidden
            if (this.cal.calendar.style.display == "none") {
                //Hide todo list
                this.to.todoList.style.display = "none";

                //Show the calendar
                this.cal.calendar.style.display = "";

                //Updates the calendar by resizing it
                window.dispatchEvent(new Event('resize'));
            }
        })

        //Next, add an event listner to todoListLink
        todoListLink.addEventListener("click", (e) => {
            //Firstly, check if the todoList is hidden
            //If the todoList is hidden
            if (this.to.todoList.style.display == "none") {
                //Hide the calendar
                this.cal.calendar.style.display = "none";

                //Show the todoList
                this.to.todoList.style.display = "";
            }
        })
    }

    //This function is call to hide everything about the homepage
    hideHomePage() {
        //Set the display of the homepage to be none
        this.homePage.style.display = "none";
    }

    //Show the homePage
    showHomePage() {
        //Set the dispaly of the homepage to be ""
        this.homePage.style.display = "";

        //Resize the window to fit fullCalendar properly
        window.dispatchEvent(new Event('resize'));
    }
}

//Create a new home page
let home = new homePage();
home.render();

//Attach the homePage to body
window.document.querySelector("body").appendChild(home.homePage);



class User {
    constructor(name, email, permissions, profilePicture) {
        this.name = name
        this.email = email
        this.servers = new Set()
        this.status = 3
        this.permissions = permissions
        this.profilePicture = profilePicture
        this.room = ""
    }

    // Getters
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

    currentRoom() {
        return this.room;
    }

    addServer(server) { // adds a server for the user
        if (this.servers.has(server)) return false
        this.servers.add(server)
        return true
    }

    removeServer(server) { // removes a server from the user
        if (this.servers.has(server)) return false
        this.servers.delete(server)
        return true
    }

    changePerms(perm) { // changes the user's permissions
        this.permissions = perm
    }

    changePicture(picture) { // changes the user's profile picture
        this.picture = picture
    }

    setCurrentRoom(room) {
        this.room = room
    }
}

class Server {
    constructor(name, department, channels) {
        this.name = name
        this.department = department
        this.channels = new Array();
        for (let i = 0; i < channels.length; i++) {
            this.channels.push(channels[i])
        }

        this.users = new Set()

        this.createServerButton()
    }

    createServerButton() { //creates the sidebar of server buttons 
        let button = document.createElement("button");
        let temp = document.createTextNode(this.name);
        button.appendChild(temp);
        button.addEventListener("click", () => {
            this.loadRooms()
            leaveHome();
            let messages = document.getElementById('chatborder');
            if (currentUser.room != "") {
                socket.emit('leaveRoom', {})
            }

            while (chatborder.childNodes.length > 2) {
                chatborder.removeChild(chatborder.lastChild)
            }



            currentUser.setCurrentRoom(this.name)

            socket.emit('joinRoom', currentUser)
            // add userlist functionality?
            socket.on('roomUsers', (currentUser) => {
                // outputRoomName(currentUser.room)
                // outputUsers(currentUser.users)
            })

        });
        button.className = "serverButton";
        button.id = this.name + "server";
        document.getElementById("classes").insertBefore(button, document.getElementById("editServerBtn"));
    }

    loadRooms() { //creates the chatrooms based on the channels stored on the server
        let childChecker = document.getElementById("rooms");

        while (childChecker.hasChildNodes()) //removes the chatrooms previously listed
        {
            childChecker.removeChild(childChecker.children[0]);
        }

        // Edit Channels button:
        let button = document.createElement("button");
        let temp = document.createTextNode("Edit Channels");
        button.appendChild(temp);
        button.addEventListener("click", () => editChannels());
        button.className = "roomButton";
        button.id = "editChannelBtn";
        document.getElementById("rooms").appendChild(button);

        // The rest of the channels:
        for (let channel of this.channels) {
            let button = document.createElement("button");
            let temp = document.createTextNode(channel.name);
            button.appendChild(temp);
            button.addEventListener("click", () => this.colorChange(channel));
            button.setAttribute("Id", channel.name)
            button.className = "roomButton";
            button.id = channel.name + "channel";
            document.getElementById("rooms").appendChild(button);
        }
    }

    colorChange(channel) { //resets the color to light grey
        for (let temp of this.channels) {
            document.getElementById(temp.name + "channel").style.color = "LightSlateGrey";
        }

        channel.loadChatroom()
    }

    // Getters
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

    setName(name) { // name setter
        this.name = name
    }

    addChannel(channel) { // adds a channel/chatrom to the server
        for (let iterator of this.channels)
            if (iterator.name == channel.name) {
                alert("Channel already exists!")
                return;
            }

        this.channels.push(channel);
        let button = document.createElement("button");
        let temp = document.createTextNode(channel.name);
        button.appendChild(temp);
        button.addEventListener("click", () => this.colorChange(channel));
        button.setAttribute("Id", channel.name)
        button.className = "roomButton";
        button.id = channel.name + "channel";
        document.getElementById("rooms").appendChild(button);

        this.loadRooms();
    }
    removeChannel(channelName) { // removes a channel/chatroom from the server
        for (let i = 0; i < this.channels.length; i++)
            if (this.channels[i].name == channelName) {
                this.channels.splice(i, 1);
                break;
            }

        this.loadRooms();
    }

    addUser(user) { // adds a user to the server
        if (this.users.has(user)) return false
        this.users.add(user)
        return true
    }
    removeUser(user) { // removes a user from the server
        if (this.users.has(user)) return false
        this.users.delete(user)
        return true
    }
}

class Channel {
    constructor(name, category, server) {
        this.chatLogs = [] // maybe make this into set?
        this.server = server
        this.category = category
        this.name = name
    }

    // Getters
    name() {
        return this.name
    }
    category() {
        return this.category
    }
    logs() {
        return this.chatLogs
    }

    loadChatroom() { //changes the selected chatroom to blue
        document.getElementById("chatroomHeader").innerHTML = this.server + "'s " + this.name + " Chatroom";
        document.getElementById(this.name + "channel").style.color = "rgb(6, 87, 238)";
    }
    // double check on how to link message with actual message in chatroom, right now its by text but could be by time/id
    message(message) {
        for (let i = 0; i < this.chatLogs.length; i++) {
            if (message == this.chatLogs[i].text) return this.chatLogs[i]
        }
    }
    addChat(message) {
        this.chatLogs.append(message)
    }

    removeChat(message) {
        let found = false;
        for (let i = 0; i < this.chatLogs.length; i++) {
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

let currentUser = new User("Guest", "example@gmail.com", "", "");

function setUser() {

}

function onSignIn(googleUser) { // uses the Google API sign in
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    document.getElementById("myModal").style.display = "none";
    currentUser = new User(profile.getName(), profile.getEmail(), "", profile.getImageUrl())

}
function renderButton() {
    gapi.signin2.render('my-signin2', {
        'theme': 'dark'
    });
}


var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    document.getElementById("myModal").style.display = "none";
}


function goHome() {

    //Hide the rooms bar, chatroom header, and chatroom from the display
    window.document.querySelector("#rooms").style.display = "none";
    window.document.querySelector("#chatroomHeader").style.display = "none";
    window.document.querySelector(".chatroom").style.display = "none";

    //Shows the home page
    home.showHomePage();
}

//Leaves the home page
function leaveHome() {
    //Hides the home page
    home.hideHomePage();

    //Display the room bar, chatroon, and chatroom header
    window.document.querySelector("#rooms").style.display = "";
    window.document.querySelector("#chatroomHeader").style.display = "";
    window.document.querySelector(".chatroom").style.display = "";

}

let spanChannel = [
    new Channel("Homework Help", "help", "Spanish"),
    new Channel("Group Chat", "Students", "Spanish"),
    new Channel("Exam Prep", "Exam", "Spanish")
]

let chemChannel = [
    new Channel("Homework Help", "help", "Chemistry"),
    new Channel("Group Chat", "Students", "Chemistry"),
    new Channel("Exam Prep", "Exam", "Chemistry")
]
let englChannel = [
    new Channel("Homework Help", "help", "Writing"),
    new Channel("Group Chat", "Students", "Writing"),
    new Channel("Exam Prep", "Exam", "Writing")
]
let mathChannel = [
    new Channel("Homework Help", "help", "Calculus"),
    new Channel("Group Chat", "Students", "Calculus"),
    new Channel("Exam Prep", "Exam", "Calculus")
]

let servers = [
    new Server("Calculus", "Math", mathChannel),
    new Server("Writing", "English", englChannel),
    new Server("Chemistry", "Science", chemChannel),
    new Server("Spanish", "Language", spanChannel)
]

let sendButton = document.getElementById('send')
let chatBorder = document.getElementById('chatborder')
let sendBox = document.getElementById('chatbox')

sendBox.addEventListener("keypress", function (event) { //calls send message when user presses the enter button
    if (event.key === 'Enter') {
        const msg = sendBox.value

        socket.emit('chatMessage', msg)
    };
})

sendButton.addEventListener('click', (e) => {
    let chatbox = document.getElementById("chatbox")
    const msg = chatbox.value
    console.log(msg)

    socket.emit('chatMessage', msg)
    chatbox.focus()
})

socket.on('message', message => {
    console.log(message)
    sendMessage(message)
    chatBorder.scrollTop = chatBorder.scrollHeight;
})

function sendMessage(message) {

    let chatborder = document.getElementById("chatborder"); // parent, containing all the messages
    let chatbox = document.getElementById("chatbox"); // input box
    let textLine = document.getElementById("textLine"); // child of chatborder, parent to chatbox

    var currentdate = new Date(); // obtains the current time
    var datetime = currentdate.getDate() + "/" // contains the date and time information
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + ", "
        + currentdate.getHours() + ":";
    if (currentdate.getMinutes() < 10)
        datetime += "0";
    datetime += currentdate.getMinutes();

    let newMessage = document.createElement("div"); // the message to add to chatborder
    let userInfo = document.createElement("div"); // the time and user information of the message
    let messageText = document.createElement("div"); // the actual text of the message

    newMessage.setAttribute('class', 'chat-message')
    userInfo.textContent = `[${message.time}] ${message.username}:`;
    messageText.textContent = message.text;

    newMessage.appendChild(userInfo); // first append the new message with the information
    newMessage.appendChild(messageText); // and then the text itself

    console.log(message.time, message.username, message.text)

    // Appropriately inserts the new message to chatborder
    if (chatborder.childElementCount == 1) {
        chatborder.appendChild(newMessage)
    }
    else { chatborder.insertChildAtIndex(newMessage, 1) }
    chatbox.value = "";
    //console.log(chatborder.childElementCount)
}

Element.prototype.insertChildAtIndex = function (child, index) {
    if (!index) index = 0
    if (index >= this.children.length) {
        this.appendChild(child)
    } else {
        this.insertBefore(child, this.children[index])
    }
}

function editServerBtn() {
    let button = document.createElement("button");
    let temp = document.createTextNode("Edit Server");
    button.appendChild(temp);
    button.addEventListener("click", () => editServers());
    button.className = "serverButton";
    button.id = "editServerBtn";
    document.getElementById("classes").appendChild(button);
}

editServerBtn();

function editServers() {
    let action = prompt("Enter add or delete: ");

    if (action == "add") {
        let serverName = prompt("Enter server name to add: ");

        let tempChannel = [
            new Channel("Homework Help", "help", serverName),
            new Channel("Group Chat", "Students", serverName),
            new Channel("Exam Prep", "Exam", serverName)
        ]
        let newServer = new Server(serverName, "", tempChannel);
    }

    else if (action == "delete") {
        serverName = prompt("Enter server name to delete: ");
        document.getElementById("classes").removeChild(document.getElementById(serverName + "server"));
    }
}

function editChannels() {
    let action = prompt("Enter add or delete: ");

    let index = 0;
    for (let i = 0; i < servers.length; i++) {
        if (servers[i].name == currentUser.currentRoom())
            index = i;
    }

    if (action == "add") {
        let channelName = prompt("Enter channel name to add: ");

        let newChannel = new Channel(channelName, "", currentUser.currentRoom());
        servers[index].addChannel(newChannel);
    }

    else if (action == "delete") {
        channelName = prompt("Enter channel name to delete: ");

        servers[index].removeChannel(channelName);
    }
}

function testSuite() {

    function addServer() {
        let originalNumber = document.querySelectorAll(".serverButton").length;
        let newServer = new Server("TestServer99", "", "");

        if (originalNumber = document.querySelectorAll(".serverButton").length == originalNumber + 1)
            return "PASSED";

        else return "FAILED";
    }

    function deleteServer() {
        let originalNumber = document.querySelectorAll(".serverButton").length;
        document.getElementById("classes").removeChild(document.getElementById("TestServer99server"));

        if (originalNumber = document.querySelectorAll(".serverButton").length == originalNumber - 1)
            return "PASSED";

        else return "FAILED";
    }

    console.log("Test #1: adding a server " + addServer());
    console.log("Test #2: deleting a server " + deleteServer());
}
