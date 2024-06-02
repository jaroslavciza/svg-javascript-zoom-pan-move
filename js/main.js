const svgNS = "http://www.w3.org/2000/svg";
const svgContainer = document.getElementById('svgContainer');
const svgBoundaries = svgContainer.getBoundingClientRect();
const viewPort = document.getElementById("viewport");
const gridSize = 10; 

let rooms = [];
let room;

let selectedElement = false;
let selectedRoom = false;

let draggingEnabled = false;
let draggingRoom = false;
let dragged = false;
let dxSnapped = 0;
let dySnapped = 0;

let lastMouseEvent ={
    x : "",
    y : ""
};

let currentViewboxToSvgRatio = 1; // oprava chyby pri velkem zoomu se posouvaji objekty rychleji nez mys... spatny prepocet mezi html tagem a svg
const defaultViewBox="0 0 800 800";

room = new Room(73, 1, 6, 3);
room.name = "Ložnice";
room.number = "337";
room.ethSockets += "3.26.1";
room.ethSockets += ", 3.26.2";
room.addDoor(0, 1, "vertical");
room.addDoor(1, room.height/gridSize, "horizontal");
room.addWindow(room.width/gridSize, 1, "vertical");
rooms.push(room);

room = new Room(73, 4, 6, 9);
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

room = new Room(73, 13, 6, 6);
room.name = "Merglová, Kolesová";
room.number = "338";
room.ethSockets += "3.26.1";
room.ethSockets += ", 3.26.2";
room.addDoor(0, 1, "vertical");
room.addWindow(room.width/gridSize, 1, "vertical");
room.addWindow(room.width/gridSize, 4, "vertical");
rooms.push(room);

room = new Room(73, 19, 6, 3);
room.name = "Müller";
room.number = "337";
room.ethSockets += "3.26.1";
room.ethSockets += ", 3.26.2";
room.addDoor(0, 1, "vertical");
room.addWindow(room.width/gridSize, 1, "vertical");
rooms.push(room);

room = new Room(73, 22, 6, 3);
room.name = "Kalamenová";
room.number = "337";
room.ethSockets += "3.26.1";
room.ethSockets += ", 3.26.2";
room.addDoor(0, 1, "vertical");
room.addWindow(room.width/gridSize, 1, "vertical");
rooms.push(room);

room = new Room(73, 25, 6, 12);
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

room = new Room(73, 37, 6, 3);
room.number = "335";
room.ethSockets += "3.26.1";
room.ethSockets += ", 3.26.2";
room.addDoor(0, 1, "vertical");
room.addWindow(room.width/gridSize, 1, "vertical");
rooms.push(room);

room = new Room(73, 40, 6, 9);
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

room = new Room(73, 49, 6, 3);
room.name = "Vaněk";
room.number = "333";
room.ethSockets += "3.27.1";
room.addDoor(0, 1, "vertical");
room.addDoor(1, 0, "horizontal");
room.addWindow(room.width/gridSize, 1, "vertical");
rooms.push(room);

room = new Room(73, 52, 6, 3);
room.name = "Cíza";
room.number = "332";
room.ethSockets += "3.26.1";
room.ethSockets += ", 3.26.2";
room.addDoor(0, 1, "vertical");
room.addWindow(room.width/gridSize, 1, "vertical");
rooms.push(room);

room = new Room(73, 55, 6, 6);
room.name = "Huk, Fibiger";
room.number = "331";
room.ethSockets += "3.25.1";
room.ethSockets += ", 3.25.2";
room.addDoor(0, 3, "vertical");
room.addWindow(room.width/gridSize, 1, "vertical");
room.addWindow(room.width/gridSize, 4, "vertical");
rooms.push(room);

room = new Room(73, 61, 6, 12);
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

room = new Room(64, 16, 6, 3);
room.name = "Sklad 112";
room.number = "";
room.addDoor(room.width/gridSize, 1, "vertical");
rooms.push(room);

room = new Room(66, 49, 4, 3); 
room.name = "WC ženy";
room.number = "";
room.addDoor(room.width/gridSize, 1, "vertical");
rooms.push(room);

room = new Room(69, 13, 1, 3);
room.name = "WC";
room.number = "";
room.addDoor(0, 0, "horizontal");
rooms.push(room);

room = new Room(68, 13, 1, 3);
room.name = "WC";
room.number = "";
room.addDoor(0, 0, "horizontal");
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

window.addEventListener("DOMContentLoaded", (event) => {

    svgContainer.addEventListener('pointerdown', function (event) {
        draggingEnabled = true;
        draggingRoom = (selectedElement == event.target) ? true : false;

        lastMouseEvent.x = event.offsetX;
        lastMouseEvent.y = event.offsetY;
    });

    svgContainer.addEventListener('pointermove', function (event) {
        if (draggingEnabled) {
            if (event.pressure > 0) { //je drzene tlacitko? jak se chova na tabletu? 0-1 ... reseni bugu s drag "obrazku" co se obcas stane
                let dx = (event.offsetX - lastMouseEvent.x) * currentViewboxToSvgRatio;
                let dy = (event.offsetY - lastMouseEvent.y) * currentViewboxToSvgRatio;  
                //console.log(dx);
                if (dx !=0 || dy !=0) { //první mouse event
                    //presun mistnosti
                    if (draggingRoom) {               
                        //bez snapování
                        // selectedRoom.x += dx;
                        // document.getElementById(selectedElement.id.slice(0,-6)).setAttribute('x', selectedRoom.x);
                        // selectedRoom.y += dy;
                        // document.getElementById(selectedElement.id.slice(0,-6)).setAttribute('y', selectedRoom.y);
   
                        //se snapováním
                        dxSnapped += dx;
                        dySnapped += dy;
                        if (Math.abs(dxSnapped) >= gridSize){
                            selectedRoom.x += dxSnapped / Math.abs(dxSnapped) * gridSize;
                            if (selectedRoom.x < 0) selectedRoom.x = 0;
                            if (selectedRoom.x + selectedRoom.width > svgBoundaries.width) selectedRoom.x = svgBoundaries.width  - selectedRoom.width;                      
                            dxSnapped = (dxSnapped > 0) ? (dxSnapped - gridSize) : (dxSnapped + gridSize);
                            document.getElementById(selectedElement.id.slice(0,-6)).setAttribute('x', selectedRoom.x);
                            document.getElementById("detailX").value = selectedRoom.x / gridSize;
                        }
                        if (Math.abs(dySnapped) >= gridSize){
                            selectedRoom.y += dySnapped / Math.abs(dySnapped) * gridSize ;
                            if (selectedRoom.y < 0) selectedRoom.y = 0;
                            if (selectedRoom.y + selectedRoom.height > svgBoundaries.height) selectedRoom.y = svgBoundaries.height  - selectedRoom.height;
                            dySnapped = (dySnapped > 0) ? (dySnapped - gridSize) : (dySnapped + gridSize);
                            document.getElementById(selectedElement.id.slice(0,-6)).setAttribute('y', selectedRoom.y);
                            document.getElementById("detailY").value = selectedRoom.y / gridSize;   
                        }

                    //posun SVG
                    } else {
                            let [viewboxX, viewboxY, viewboxWidth, viewboxHeight] = svgContainer.getAttribute("viewBox")
                            .split(" ")
                            .map (s => parseFloat(s));     
                            viewboxX = viewboxX - dx; 
                            viewboxY = viewboxY - dy;         
                            
                            const scaledViewbox = [viewboxX , viewboxY , viewboxWidth, viewboxHeight]
                                .map (s => s.toFixed(20))
                                .join (" ");
                            svgContainer.setAttribute('viewBox', scaledViewbox);                 
                    }
                dragged = true;
                }
            }
            lastMouseEvent.x = event.offsetX;
            lastMouseEvent.y = event.offsetY;
        }
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
                if (selectedElement && selectedElement != element) selectedElement.setAttribute("class", "room");
                selectedElement = element;
                selectedElement.setAttribute("class", "roomSelected");
                selectedRoom = rooms.find((element) => element.id == selectedElement.id.slice(0,-6)); //uřízne "_shape" z jahsdtrvfvf_shape   
                
            } 
        }        
            
        if(selectedRoom) {
            document.getElementById("detailNumber").value = selectedRoom.number;
            document.getElementById("detailName").value = selectedRoom.name;
            document.getElementById("detailEthSockets").value = selectedRoom.ethSockets;
            document.getElementById("detailWidth").value = selectedRoom.width / gridSize;
            document.getElementById("detailHeight").value = selectedRoom.height / gridSize;
            document.getElementById("detailX").value = selectedRoom.x / gridSize;
            document.getElementById("detailY").value = selectedRoom.y / gridSize;     
        }
            
        draggingEnabled = false;
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
        
        let scaledViewbox;
        if (scaledViewboxWidth > svgBoundaries.width / 4 && scaledViewboxWidth < svgBoundaries.width * 2) {        
            scaledViewbox = [scaledViewboxX , scaledViewboxY , scaledViewboxWidth, scaledViewboxHeight]
            .map (s => s.toFixed())
            .join (" ");
        } else scaledViewbox = svgContainer.getAttribute("viewBox");
        svgContainer.setAttribute('viewBox', scaledViewbox);
        
        currentViewboxToSvgRatio = scaledViewboxWidth / svgBoundaries.width; //kalibrace mouse movementu pri vysokem zoomu
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
- pri rychlem pohybu mysi pri dragovani roomky je pointer rychlejsi...? nestiha tak rychle volen onmove event?


pri resize mistnosti neresim umisteni oken a dveri!


*/