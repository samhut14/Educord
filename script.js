//Add links to the javascript in full calendar

//Creates a class that will represent the sideBar
class sideBar
{
    //Creates a constructor for sideBar
    constructor()
    {

    }

    //Creates the Side Bar in index.html
    createSideBar()
    {
        //Firstly, create a new div tag that will store the side bar
        let sideBar = document.createElement("div");

        //Set the id of sideBar to sideBar
        sideBar.setAttribute("id", "sideBar");

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
        sideBar.append(homePage);
        
        //Create a new header tag
        let calendar = document.createElement("h3");

        //Set innerhtml of calendar to be Calendar
        calendar.innerHTML = "Calendar";

        //Sets its id to be calendarLink
        calendar.setAttribute("id", "calendarLink");

        //Attach calendar to sideBar
        sideBar.appendChild(calendar);

        //Create a new header tag for to do list
        let todoList = document.createElement("h3");

        //Set innerhtml of todoList
        todoList.innerHTML = "Todo List";

        //Sets its id to be todoListLink
        todoList.setAttribute("id", "todoListLink");

        //Attach todoList to sideBar
        sideBar.appendChild(todoList);

        //Attach sideBar to body
        window.document.querySelector("body").appendChild(sideBar);
    }
}

//Represents a calendar for the user
class calendar
{
    //Constructor for calendar class
    constructor()
    {

    }

    //Creates a new calendar for the homepage
    createCalendar()
    {
        //Firstly, create a new div element
        let cal = document.createElement("div");

        //Set the id of cal to be be calendar
        cal.setAttribute("id", "calendar");

        //Next, attach cal to the body
        window.document.querySelector("body").appendChild(cal);

        //Next, create a new fullCalendar to render
        let fullCalendar = new FullCalendar.Calendar(cal , {

        });
    
        //Render fullCalendar
        fullCalendar.render();
    }

}

//Create a new sideBar
let side = new sideBar();
//Create a new calendar
let cal = new calendar();

//Event handeler to wait for loading
window.addEventListener("load", () => {
    side.createSideBar();
    //cal.createCalendar();
});



