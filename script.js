//Add links to the javascript in full calendar

//Creates a class that will represent the sideBar
class sideBar
{
    //Creates a constructor for sideBar
    constructor()
    {
        //Stores the html content of sideBar
        this.sideBar = "";
    }

    //Creates the Side Bar in index.html
    createSideBar()
    {
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
class calendar
{
    //Constructor for calendar class
    constructor()
    {
        //Contains the html content of claendar
        this.calendar;

        //Next, create a new fullCalendar to render
        this.fullCalendar;
        
    }

    //Creates a new calendar for the homepage
    createCalendar()
    {
        //Firstly, create a new div element
        this.calendar = document.createElement("div");

        //Set the id of cal to be be calendar
        this.calendar.setAttribute("id", "calendar");

        //Next, attach cal to the body
       // window.document.querySelector("body").appendChild(this.calendar);

        //Create a new FullCalendar, no new parameters for now
        this.fullCalendar = new FullCalendar.Calendar(this.calendar , {
        });
    
        //Render fullCalendar
        this.fullCalendar.render();

        //Resize the window to fit fullCalendar properly
        window.dispatchEvent(new Event('resize'))
    }

}

//To-Do List Class
class todoList
{
    //Constructor for Todo-List
    constructor()
    {
        //Stores the html content of todoList
        this.todoList;
    }

    //Creates todoList
    createTodoList()
    {
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
    createTags(type, id, css)
    {
        //Firstly, create the newElement by using the doucment querySelector to create
        let newElement = document.createElement(type);

        //Next, check if id is not null
        //If id is null
        if(id != null)
        {
            //Set the attribute of newElement to be id
            newElement.setAttribute("id", id);
        }

        //Next, check if css is not null
        //If css is null
        if(css != null)
        {
            //Set the class of newElement to be css
            newElement.setAttribute("class", css);
        }

        //Finally, return newElement
        return newElement;
    }

    //Create TodoList Header
    createHeader()
    {
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
    createProjectForm()
    {
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
    createTodoForm()
    {
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
    createProjectHeaders()
    {
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
    createForm()
    {
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
    createBody()
    {
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


//side.createSideBar();
//cal.createCalendar();
//to.createTodoList();

//Contains all information about the user homePage
class homePage
{
    //Constructor for home page
    constructor()
    {
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
    render()
    {
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
        this.homePage.appendChild(this.side.sideBar);
        this.homePage.appendChild(this.cal.calendar);
        this.homePage.appendChild(this.to.todoList);

        //Hide the todoList
        this.to.todoList.style.display = "none";

        //Show the calendar
        this.cal.calendar.style.display = "";

    
        //Append homepage to the body
        window.document.querySelector("body").appendChild(this.homePage);
    }

    //Add switches to the headers of sideBar
    addSwitches()
    {
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
            if(this.cal.calendar.style.display == "none")
            {
                //Hide todo list
                this.to.todoList.style.display = "none";

                //Show the calendar
                this.cal.calendar.style.display = "";
            }
        })

        //Next, add an event listner to todoListLink
        todoListLink.addEventListener("click", (e) =>
        {
            //Firstly, check if the todoList is hidden
            //If the todoList is hidden
            if(this.to.todoList.style.display == "none")
            {
                //Hide the calendar
                this.cal.calendar.style.display = "none";

                //Show the todoList
                this.to.todoList.style.display = "";
            }
        })
    }
}

let home = new homePage();
home.render();
home.addSwitches();




