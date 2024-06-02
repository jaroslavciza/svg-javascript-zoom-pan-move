const svgNS = "http://www.w3.org/2000/svg";
const svgContainer = document.getElementById('svgContainer');
let viewPort = document.getElementById("viewport");

const gridSize = 10; 
const gridScale = 1; //kolik ctvercu je jeden metr na pixely

let rooms = [];
let room;

let selectedElement = false;
let selectedSVG = false;
let selectedRoom = false;

//varianta s matrix transformaci
let draging = false;
let draggingRoom = false;
let draggedSvg = false;
let dragingOffset = { x: 0, y: 0 };
const factor = .1;
let matrix = new DOMMatrix();

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


// function svgClicked(evt) {
//     console.log("clicked");
//     if (evt.target.id == "svgContainer" && selectedElement) {
//         selectedElement.setAttribute("class", "room");
//         selectedElement = false;
//         selectedRoom = false;
//         //drag = false;
//     }
// }


function selectRoom(evt) {
    if (selectedElement) {
        selectedElement.setAttribute("class", "room");
        selectedElement = false;
        selectedRoom = false;
        selectedSVG = false;
    }
    selectedElement = evt.target;
    selectedElement.setAttribute("class", "roomSelected");
    selectedSVG = document.getElementById(selectedElement.id.slice(0,-6));
    
    //jak predelat aby neupdateovala globalni promenou ale radsi vracela a pak se priradila kdyz je volana z onClick?)
    selectedRoom = rooms.find((element) => element.id == selectedElement.id.slice(0,-6)); //uřízne "_shape" z jahsdtrvfvf_shape

    document.getElementById("detailNumber").value = selectedRoom.number;
    document.getElementById("detailName").value = selectedRoom.name;
    document.getElementById("detailEthSockets").value = selectedRoom.ethSockets;
    document.getElementById("detailWidth").value = selectedRoom.width / gridSize / gridScale;
    document.getElementById("detailHeight").value = selectedRoom.height / gridSize / gridScale;
    document.getElementById("detailX").value = selectedRoom.x / gridSize;
    document.getElementById("detailY").value = selectedRoom.y / gridSize;
}

function updateRoom(){
    if (selectedRoom) {
        selectedRoom.updateRoom();   
    }
}

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
    //svgContainer.setAttribute('viewBox', "0 0 1000 1000");  
    matrix = new DOMMatrix();
    viewPort.style.transform = matrix.toString();    
}

function test(){
    console.log("test");
}

let newDragging = false;
let newDraggingSvg = false;
let newDraggingRoom = false;

let newSelectedElement = false; // vlastní zobrazený rect 
let newSelectedRoom = false; //objekt room
let newLastMouseEvent ={
    x : "",
    y : ""
};

let dragged = false;

window.addEventListener("DOMContentLoaded", (event) => {

    svgContainer.addEventListener('pointerdown', function (event) {
        // draging = true;
        // dragingOffset = { x: event.offsetX, y: event.offsetY };
        // draggingRoom = (selectedElement == event.target) ? true : false;

        //nova verze
        newDragging = true;
        newDraggingRoom = (newSelectedElement == event.target) ? true : false;
        
        //let element = document.getElementById(event.target.id);

        //newLastMouseEvent.x = event.offsetX.toFixed();
        //newLastMouseEvent.y = event.offsetY.toFixed();
        //console.log(newLastMouseEvent);
    });

    svgContainer.addEventListener('pointermove', function (event) {
        if (newDragging) {
            if (event.pressure > 0) { //je drzene tlacitko? jak se chova na tabletu? 0-1 ... reseni bugu s drag "obrazku" co se obcas stane
                if (newDraggingRoom) {

                }else {    
                
                }
                dragged = true;
            }
        }
    });    


    
    svgContainer.addEventListener('pointerup', function (event) { //click a release dragu
        let id = event.target.id;
        let element = event.target;

        //console.log("dragging:", newDragging, "draggingRoom:", newDraggingRoom, "draggedSVG:", draggedSvg);
        //konec clicku mimo room
        if (!draggedSvg && !dragged) {
            if (id == "svgContainer" && newSelectedElement) {
                newSelectedElement.setAttribute("class", "room");
                newSelectedElement = false;
                newSelectedRoom = false;     
                document.getElementById("detailNumber").value = "";
                document.getElementById("detailName").value = "";
                document.getElementById("detailEthSockets").value = "";
                document.getElementById("detailWidth").value = "";
                document.getElementById("detailHeight").value = "";
                document.getElementById("detailX").value = "";
                document.getElementById("detailY").value = "";                   
            }
        }
        

        if (id == "svgContainer") {
            //vycistit inputy vpravo
            if (newSelectedElement) newSelectedElement.setAttribute("class", "room");
            //newSelectedElement = element;
 

        } else { //kliknuto na room
            if (newSelectedElement) {
                // jiz je vybrana roomka
                if (newSelectedElement == element) {
                    // kliknuto na stejnou room - dragging

                } else {
                    // kliknuto na jinou room
                    newSelectedElement.setAttribute("class", "room");
                }
            } 
            
            newSelectedElement = element;
            newSelectedElement.setAttribute("class", "roomSelected");
            newSelectedRoom = rooms.find((element) => element.id == newSelectedElement.id.slice(0,-6)); //uřízne "_shape" z jahsdtrvfvf_shape        
            document.getElementById("detailNumber").value = newSelectedRoom.number;
            document.getElementById("detailName").value = newSelectedRoom.name;
            document.getElementById("detailEthSockets").value = newSelectedRoom.ethSockets;
            document.getElementById("detailWidth").value = newSelectedRoom.width / gridSize / gridScale;
            document.getElementById("detailHeight").value = newSelectedRoom.height / gridSize / gridScale;
            document.getElementById("detailX").value = newSelectedRoom.x / gridSize;
            document.getElementById("detailY").value = newSelectedRoom.y / gridSize;     
            
            newDragging = false;
            dragged = false;                   
        }        
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

//jak predelat aby funkce SelectRoom neupdateovala globalni promenou ale radsi vracela a pak se priradila kdyz je volana z onClick?)


*/






    // // varianta s matrix transformaci

    //svgContainer.addEventListener('pointerdown', function (event) {
        // draging = true;
        // dragingOffset = { x: event.offsetX, y: event.offsetY };
        // draggingRoom = (selectedElement == event.target) ? true : false;


    // svgContainer.addEventListener('wheel', function (event) {
    //     event.preventDefault();
    //
    //     var zoom = event.deltaY > 0 ? -1 : 1;
    //     var scale = 1 + factor * zoom;
    //     dragingOffset = {
    //         x: event.offsetX,
    //         y: event.offsetY
    //     };
    //     matrix.preMultiplySelf(new DOMMatrix()
    //     .translateSelf(dragingOffset.x, dragingOffset.y)
    //     .scaleSelf(scale, scale)
    //     .translateSelf(-dragingOffset.x, -dragingOffset.y));
    //     viewPort.style.transform = matrix.toString();
    // },{passive: false});
    
    // svgContainer.addEventListener('pointermove', function (event) {
    //     if (event.pressure > 0) { //je drzene tlacitko? jak se chova na tabletu? 0-1 ... reseni bugu s drag "obrazku" co se obcas stane
    //         if (draging) {
    //             if (draggingRoom) {
    //                 //posun vybrané roomky
    //                 var tx = event.offsetX - dragingOffset.x;
    //                 var ty = event.offsetY - dragingOffset.y;

    //                 if (Math.abs(tx) >= 10) {
    //                     tx = Math.trunc (tx/10)*10; //pri rychlem pohybu mysi muze skakat o vic nez 10
    //                     selectedRoom.x += tx;
    //                     selectedSVG.setAttribute("x", selectedRoom.x);
    //                     dragingOffset.x = event.offsetX; 
    //                 }
    //                 if (Math.abs(ty) >= 10) {
    //                     ty = Math.trunc (ty/10)*10;
    //                     selectedRoom.y += ty;
    //                     selectedSVG.setAttribute("y", selectedRoom.y);
    //                     dragingOffset.y = event.offsetY; 
    //                 }   
    //             } else {
    //                 //posun celého SVG
    //                 var tx = event.offsetX - dragingOffset.x;
    //                 var ty = event.offsetY - dragingOffset.y;
    //                 dragingOffset = {
    //                     x: event.offsetX,
    //                     y: event.offsetY
    //                 };
    //                 matrix.preMultiplySelf(new DOMMatrix()
    //                 .translateSelf(tx, ty));
    //                 viewPort.style.transform = matrix.toString();
    //                 draggedSvg = true;
    //             }
    //         }
    //     } else {
    //         draging = false;
    //         draggedSvg = false;
    //     }
    // });

    // svgContainer.addEventListener('pointerup', function (event) { //click a release dragu
    //     draging = false;

    //     //konec clicku mimo room
    //     if (!draggedSvg) {
    //         if (event.target.id == "svgContainer" && selectedElement) {
    //             selectedElement.setAttribute("class", "room");
    //             selectedElement = false;
    //             selectedRoom = false;     
    //             document.getElementById("detailNumber").value = "";
    //             document.getElementById("detailName").value = "";
    //             document.getElementById("detailEthSockets").value = "";
    //             document.getElementById("detailWidth").value = "";
    //             document.getElementById("detailHeight").value = "";
    //             document.getElementById("detailX").value = "";
    //             document.getElementById("detailY").value = "";                   
    //         }
    //     }
    // });