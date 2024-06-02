const svgNS = "http://www.w3.org/2000/svg";
const svgContainer = document.getElementById('svgContainer');
let viewPort = document.getElementById("viewport");

const gridSize = 10; 
const gridScale = 1; //kolik ctvercu je jeden metr na pixely

let rooms = [];
let room;

let selectedElement = false;
let selectedRoom = false;

//varianta s viewBoxem
const defaultViewBox="0 0 800 800";

room = new Room(79 -6*gridScale, 1, 6, 3);
room.name = "Ložnice";
room.number = "337";
room.ethSockets += "3.26.1";
room.ethSockets += ", 3.26.2";
room.addDoor(0, 1, "vertical");
room.addDoor(1, room.height/gridSize, "horizontal");
room.addWindow(room.width/gridSize, 1, "vertical");
rooms.push(room);

room = new Room(79 -6*gridScale, 4, 6, 9);
room.name = "PC učebna";
room.number = "339";
room.ethSockets += "3.26.1";
room.ethSockets += ", 3.26.2";
room.addDoor(0, 6, "vertical");
room.addDoor(1, 0, "horizontal");
room.addWindow(room.width/gridSize, 1, "vertical");
room.addWindow(room.width/gridSize, 4, "vertical");
room.addWindow(room.width/gridSize, 7, "vertical");
rooms.push(room);

room = new Room(79 -6*gridScale, 13, 6, 6);
room.name = "Merglová, Kolesová";
room.number = "338";
room.ethSockets += "3.26.1";
room.ethSockets += ", 3.26.2";
room.addDoor(0, 1, "vertical");
room.addWindow(room.width/gridSize, 1, "vertical");
room.addWindow(room.width/gridSize, 4, "vertical");
rooms.push(room);

room = new Room(79 -6*gridScale, 19, 6, 3);
room.name = "Müller";
room.number = "337";
room.ethSockets += "3.26.1";
room.ethSockets += ", 3.26.2";
room.addDoor(0, 1, "vertical");
room.addWindow(room.width/gridSize, 1, "vertical");
rooms.push(room);

room = new Room(79 -6*gridScale, 22, 6, 3);
room.name = "Kalamenová";
room.number = "337";
room.ethSockets += "3.26.1";
room.ethSockets += ", 3.26.2";
room.addDoor(0, 1, "vertical");
room.addWindow(room.width/gridSize, 1, "vertical");
rooms.push(room);

room = new Room(79 -6*gridScale, 25, 6, 12);
room.name = "Učebna";
room.number = "336";
room.ethSockets += "3.26.1";
room.ethSockets += ", 3.26.2";
room.addDoor(0, 2, "vertical");
room.addDoor(0, room.height/gridSize - 3, "vertical");
room.addWindow(room.width/gridSize, 1, "vertical");
room.addWindow(room.width/gridSize, 4, "vertical");
room.addWindow(room.width/gridSize, 7, "vertical");
room.addWindow(room.width/gridSize, 10, "vertical");
rooms.push(room);

room = new Room(79 -6*gridScale, 37, 6, 3);
room.number = "335";
room.ethSockets += "3.26.1";
room.ethSockets += ", 3.26.2";
room.addDoor(0, 1, "vertical");
room.addWindow(room.width/gridSize, 1, "vertical");
rooms.push(room);

room = new Room(79 -6*gridScale, 40, 6, 9); //grid x=50 y=10 sirka 6m delka 3m
room.name = "Filinger, Wagner, Hauseker";
room.number = "334";
room.ethSockets += "3.27.1";
room.addDoor(0, 1, "vertical");
room.addDoor(0, 2, "vertical");
room.addDoor(1, room.height/gridSize, "horizontal");
room.addWindow(room.width/gridSize, 1, "vertical");
room.addWindow(room.width/gridSize, 4, "vertical");
room.addWindow(room.width/gridSize, 7, "vertical");
rooms.push(room);

room = new Room(79 -6*gridScale, 49, 6, 3); //grid x=50 y=10 sirka 6m delka 3m
room.name = "Vaněk";
room.number = "333";
room.ethSockets += "3.27.1";
room.addDoor(0, 1, "vertical");
room.addDoor(1, 0, "horizontal");
room.addWindow(room.width/gridSize, 1, "vertical");
rooms.push(room);

room = new Room(79 -6*gridScale, 52, 6, 3);
room.name = "Cíza";
room.number = "332";
room.ethSockets += "3.26.1";
room.ethSockets += ", 3.26.2";
room.addDoor(0, 1, "vertical");
room.addWindow(room.width/gridSize, 1, "vertical");
rooms.push(room);

room = new Room(79 -6*gridScale, 55, 6, 6);
room.name = "Huk, Fibiger";
room.number = "331";
room.ethSockets += "3.25.1";
room.ethSockets += ", 3.25.2";
room.addDoor(0, 3, "vertical");
room.addWindow(room.width/gridSize, 1, "vertical");
room.addWindow(room.width/gridSize, 4, "vertical");
rooms.push(room);

room = new Room(79 -6*gridScale, 61, 6, 12);
room.name = "Tělocvična";
room.number = "330";
room.addDoor(0, 1, "vertical");
room.addDoor(0, 2, "vertical");
room.addWindow(room.width/gridSize, 3, "vertical");
room.addWindow(room.width/gridSize, 4, "vertical");
room.addWindow(room.width/gridSize, 7, "vertical");
room.addWindow(room.width/gridSize, 8, "vertical");
rooms.push(room);


room = new Room(70, 13, 3, 58);
room.name = "Chodba";
room.typ = "chodba";
room.ethSockets += "3.01.1";
rooms.push(room);

room = new Room(50, 1, 23, 12);
room.name = "Chodba vodojem";
room.typ = "chodba";
room.ethSockets += "3.01.1";
rooms.push(room);

room = new Room(67, 71, 6, 2);
room.number = "329";
room.name = "Sklad";
room.addDoor(room.width/gridSize - 2, 0, "horizontal");
rooms.push(room);

room = new Room(64, 16, 6, 3); //grid x=50 y=10 sirka 6m delka 3m
room.name = "Sklad 112";
room.number = "";
room.addDoor(room.width/gridSize, 1, "vertical");
rooms.push(room);

room = new Room(66, 49, 4, 3); //grid x=50 y=10 sirka 6m delka 3m
room.name = "WC ženy";
room.number = "";
room.addDoor(room.width/gridSize, 1, "vertical");
rooms.push(room);

room = new Room(64, 16, 6, 3); //grid x=50 y=10 sirka 6m delka 3m
room.name = "Sklad 112";
room.number = "";
room.addDoor(room.width/gridSize, 1, "vertical");
rooms.push(room);

function gridToggle(){
    gridBtn = document.getElementById("gridToggle");
    gridRect = document.getElementById('gridRect');

    if (gridRect.style.display === "none") {
        gridRect.style.display = "block";
        gridBtn.setAttribute("class", "btn btn-primary");
      } else {
        gridRect.style.display = "none";
        gridBtn.setAttribute("class", "btn btn-secondary");
      }
}

function gridReset(){
    svgContainer.setAttribute('viewBox', defaultViewBox);  
}

function test(){
    console.log("test");
}

function updateRoom(){
    if (selectedRoom) {
        selectedRoom.updateRoom();   
    }
}

let dragging = false;
let draggingRoom = false;
let dragged = false;

let lastMouseEvent ={
    x : "",
    y : ""
};

currentViewboxToSvgRatio = 1; // oprava chyby pri velkem zoomu se posouvaji objekty rychleji nez mys... spatny prepocet mezi html tagem a svg


window.addEventListener("DOMContentLoaded", (event) => {

    svgContainer.addEventListener('pointerdown', function (event) {
        dragging = true;
        draggingRoom = (selectedElement == event.target) ? true : false;

        //newLastMouseEvent.x = event.offsetX.toFixed();
        //newLastMouseEvent.y = event.offsetY.toFixed();
        //console.log(newLastMouseEvent);
    });

    svgContainer.addEventListener('pointermove', function (event) {
        if (dragging) {
            if (event.pressure > 0) { //je drzene tlacitko? jak se chova na tabletu? 0-1 ... reseni bugu s drag "obrazku" co se obcas stane
                //presun mistnosti
                if (draggingRoom) {

                //posun SVG
                } else {    
                    let dx = event.offsetX - lastMouseEvent.x;
                    let dy = event.offsetY - lastMouseEvent.y;

                    let [viewboxX, viewboxY, viewboxWidth, viewboxHeight] = svgContainer.getAttribute("viewBox")
                        .split(" ")
                        .map (s => parseFloat(s));     
                    viewboxX = viewboxX - dx * currentViewboxToSvgRatio; 
                    viewboxY = viewboxY - dy * currentViewboxToSvgRatio;         

                    const scaledViewbox = [viewboxX , viewboxY , viewboxWidth, viewboxHeight]
                        .map (s => s.toFixed(20))
                        .join (" ");
                    svgContainer.setAttribute('viewBox', scaledViewbox);                 
                }
            }
            dragged = true;
        }
        lastMouseEvent.x = event.offsetX;
        lastMouseEvent.y = event.offsetY;
    });    


    
    svgContainer.addEventListener('pointerup', function (event) { //click a release dragu
        let id = event.target.id;
        let element = event.target;

        
        if (!dragged) {
            //konec clicku mimo room
            if (id == "svgContainer" && selectedElement) {
                selectedElement.setAttribute("class", "room");
                selectedElement = false;
                selectedRoom = false;     
                document.getElementById("detailNumber").value = "";
                document.getElementById("detailName").value = "";
                document.getElementById("detailEthSockets").value = "";
                document.getElementById("detailWidth").value = "";
                document.getElementById("detailHeight").value = "";
                document.getElementById("detailX").value = "";
                document.getElementById("detailY").value = "";              
            }  

            //kliknuti na roomku
            if (id != "svgContainer") {
                if (selectedElement) {
                    // jiz je vybrana roomka
                    if (selectedElement == element) {
                        // kliknuto na stejnou room - dragging
                        


                    } else {
                        // kliknuto na jinou room
                        selectedElement.setAttribute("class", "room");
                    }
                }
                selectedElement = element;
                selectedElement.setAttribute("class", "roomSelected");
                selectedRoom = rooms.find((element) => element.id == selectedElement.id.slice(0,-6)); //uřízne "_shape" z jahsdtrvfvf_shape        

            } 
        }        
            
        if(selectedRoom) {
            document.getElementById("detailNumber").value = selectedRoom.number;
            document.getElementById("detailName").value = selectedRoom.name;
            document.getElementById("detailEthSockets").value = selectedRoom.ethSockets;
            document.getElementById("detailWidth").value = selectedRoom.width / gridSize / gridScale;
            document.getElementById("detailHeight").value = selectedRoom.height / gridSize / gridScale;
            document.getElementById("detailX").value = selectedRoom.x / gridSize;
            document.getElementById("detailY").value = selectedRoom.y / gridSize;     
        }
            
        dragging = false;
        dragged = false;                   
    });

    //varianta s viewBoxem https://www.youtube.com/watch?v=lr-AeQa4FiY
    svgContainer.addEventListener('wheel', function (event) {
        event.preventDefault();

        const zoomScale = 1.1;
        let mouse = {
            x: event.offsetX,
            y: event.offsetY
        };
        const [viewboxX, viewboxY, viewboxWidth, viewboxHeight] = svgContainer.getAttribute("viewBox")
            .split(" ")
            .map (s => parseFloat(s));       
        let scaledViewboxWidth, scaledViewboxHeight, zoomLeftFraction, zoomTopFraction, scaledViewboxX, scaledViewboxY;

        //jak daleko od leveho horniho okraje SVG je mys (0 - 1)
        let svgBoundaries = svgContainer.getBoundingClientRect();
        zoomLeftFraction = mouse.x / svgBoundaries.width; 
        zoomTopFraction = mouse.y / svgBoundaries.height; 
        
        if (event.deltaY < 0) { // zazoomování
            scaledViewboxWidth = viewboxWidth / zoomScale; 
            scaledViewboxHeight = viewboxHeight / zoomScale; 

            scaledViewboxX = viewboxX + (viewboxWidth - scaledViewboxWidth) * zoomLeftFraction; 
            scaledViewboxY = viewboxY + (viewboxHeight - scaledViewboxHeight) * zoomTopFraction;             
        } else { // odzoomování
            scaledViewboxWidth = viewboxWidth * zoomScale; 
            scaledViewboxHeight = viewboxHeight * zoomScale; 

            scaledViewboxX = viewboxX - (scaledViewboxWidth- viewboxWidth) * zoomLeftFraction; 
            scaledViewboxY = viewboxY - (scaledViewboxHeight - viewboxHeight) * zoomTopFraction;       
        }
        
        const scaledViewbox = [scaledViewboxX , scaledViewboxY , scaledViewboxWidth, scaledViewboxHeight]
            .map (s => s.toFixed())
            .join (" ");
        svgContainer.setAttribute('viewBox', scaledViewbox);
        
        currentViewboxToSvgRatio = scaledViewboxWidth / svgBoundaries.width; //kalibrace mouse eventu pri vysokem zoomu
    },{passive: false});


    for (room of rooms) {
        room.createRoomSvg();
        room.createNameSvg();
        
        room.createDoorsSvg();
        room.createWindowsSvg();
        //room.createNumberSvg();
        //room.createEthSocketsSvg();
    }
})


/*
TODO LIST
- pri zazoomovani a pouziti matice na translate se pohybuje mys ryhleji nez obejkt pri dragu
? https://stackoverflow.com/questions/73989202/svg-mouse-position-relative-to-transformed-element pouzit invertni matici na mouse delta?

pri resize mistnosti neresim umisteni oken a dveri!


*/