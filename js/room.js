class Room {
    constructor (x, y, width, height){
        this.x = x*gridSize;
        this.y = y*gridSize;
        this.width = width*gridSize; 
        this.height = height*gridSize;
        this.id = Date.now() + Math.random().toString(36).substr(2, 9);
        this.number = "";
        this.name = "";
        this.typ = ""; // do budoucna na rozdeleni na sklady, kancelare, WC, chodby atd...
        this.ethSockets = "";
        this.doors = []; //je nutné přiřazovat dveře/okna místnosti?
        this.windows = [];
    }

    createRoomSvg() {
        const svg = document.createElementNS(svgNS, 'svg'); //obalový svg, kvůli snadnějšímu posouvání - groupa společných komponent
        svg.setAttribute("id", this.id);
        svg.setAttribute("class", "roomSvg");
        svg.setAttribute('x', this.x); //0-80
        svg.setAttribute('y', this.y);
        svg.setAttribute('width', this.width);
        svg.setAttribute('height', this.height);
        
        const rect = document.createElementNS(svgNS, 'rect');
        rect.setAttribute("id", this.id+"_shape");
        rect.setAttribute("class", "room");
        rect.setAttribute('width', this.width);
        rect.setAttribute('height', this.height);
        //rect.addEventListener("click", selectRoom); //bohužel na svg nefunguje click event (ale na vnorene rect, circle, line v nem ano... resp ikdyz se click prida na svg vola se na elementu v nem)
        svg.appendChild(rect);
        viewPort.appendChild(svg);
    }

    addDoor(x, y, orientation){
        const door = new Door (x, y, orientation);
        this.doors.push(door);
    }     

    createDoorsSvg(){
        if (this.doors.length > 0) {
            for (const door of this.doors) {
                const rect = document.createElementNS(svgNS, 'rect');
                rect.setAttribute("id", door.id);
                rect.setAttribute("class", "door");
                rect.setAttribute('x', door.x);
                rect.setAttribute('y', door.y);                
                rect.setAttribute('width', door.width);
                rect.setAttribute('height', door.height);    
                if (document.getElementById(this.id)) {
                    document.getElementById(this.id).appendChild(rect);
                }          
            }
        }
    }  

    // destroyDoorsSvg(){
    //     if (this.doors.length > 0) {
    //         for (const door of this.doors) {    
    //             if (document.getElementById(door.id)) document.getElementById(door.id).outerHTML = "";
    //         }
    //     }
    // }

    addWindow(x, y, orientation){
        const window = new Window (x, y, orientation);
        this.windows.push(window);
    }  

    createWindowsSvg(){
        if (this.windows.length > 0) {
            for (const window of this.windows) {
                const rect = document.createElementNS(svgNS, 'rect');
                rect.setAttribute("id", window.id);
                rect.setAttribute("class", "window");
                rect.setAttribute('x', window.x);
                rect.setAttribute('y', window.y);                
                rect.setAttribute('width', window.width);
                rect.setAttribute('height', window.height);    
                if (document.getElementById(this.id)) {
                    document.getElementById(this.id).appendChild(rect);
                }          
            }
        }
    }  

    // destroyWindowsSvg(){
    //     if (this.windows.length > 0) {
    //         for (const window of this.windows) {    
    //             if (document.getElementById(window.id)) document.getElementById(window.id).outerHTML = "";
    //         }
    //     }
    // }

    // createNumberSvg() {
    //     if (this.number == "") return;
    //     let textNode = document.createTextNode(this.number);
    //     let text = document.createElementNS(svgNS, 'text');
    //     text.setAttribute("id", this.id+"_number");
    //     text.setAttribute("class", "roomNumber");
    //     //text.setAttribute('x', Math.floor(this.width/2) + this.x); // vycentruje se pres css
    //     //text.setAttribute('y', Math.floor((this.height/4)) + this.y);
    //     text.setAttribute('x', Math.floor(this.width/2)); // vycentruje se pres css
    //     text.setAttribute('y', Math.floor(this.height/3));        
    //     text.appendChild(textNode);
    //     if (document.getElementById(this.id)) {
    //         document.getElementById(this.id).appendChild(text);
    //     }        
    // }

    // destroyNumberSvg(){
    //     if (this.number == "") {
    //         if (document.getElementById(this.id+"_number")) {
    //             document.getElementById(this.id+"_number").outerHTML = "";
    //         }
    //     }
    // }

    createNameSvg() {
        if (this.name == "") return;
        //na 6m sirky pouzij max 12 znaku+"..."tzn co 1m sirky, to 2 znaky
        const maxLength = this.width / gridSize * 2;
        const title = this.name.length > maxLength ? this.name.slice(0,maxLength) + "..." : this.name; 
        const textNode = document.createTextNode(title)
        const text = document.createElementNS(svgNS, 'text');
        text.setAttribute("id", this.id+"_name");
        text.setAttribute("class", "roomName");
        text.setAttribute('x', Math.floor(this.width/2)); // vycentruje se pres css
        text.setAttribute('y', Math.floor(this.height/2));
        text.appendChild(textNode);
        if (document.getElementById(this.id)) {
            document.getElementById(this.id).appendChild(text);
        }          
    }

    destroyNameSvg(){
        if (document.getElementById(this.id+"_name")) {
            document.getElementById(this.id+"_name").outerHTML = "";
        }
    }

    // createEthSocketsSvg(){
    //     if (this.ethSockets == "") return;
    //     let textNode = document.createTextNode(this.ethSockets);
    //     let text = document.createElementNS(svgNS, 'text');
    //     text.setAttribute("id", this.id+"_ethSockets");
    //     text.setAttribute("class", "roomEthConnectors");
    //     text.setAttribute('x', Math.floor(this.width/2)); // vycentruje se pres css3.25.1, 3.25.2     
    //     text.setAttribute('y', this.height - Math.floor(this.height/4));
    //     text.appendChild(textNode);
    //     if (document.getElementById(this.id)) {
    //         document.getElementById(this.id).appendChild(text);
    //     }           
    // }

    // destroyEthSocketsSvg(){
    //     if (this.ethSockets == "") {
    //         if (document.getElementById(this.id+"_ethSockets")) {
    //             document.getElementById(this.id+"_ethSockets").outerHTML = "";
    //         }
    //     }
    // }

    updateRoom() {
        let found = false;
        const number = document.getElementById("detailNumber").value;
        found = rooms.find((element) => element.number == number);
        document.getElementById("success").style.display = "none";
        document.getElementById("success").innerHTML = "";
        document.getElementById("alert").style.display = "none";
        document.getElementById("alert").innerHTML = "";

        if (!found || this.number == number || number == "") { // jeste neexistuj, nebo se edituje stavajici, nebo je prazdny retezec (smazani cisla)  
            if (this.number != number) { 
                this.number = number;
                // if (document.getElementById(this.id+"_number")) document.getElementById(this.id+"_number").textContent = this.number; 
                // else this.createNumberSvg();
                // if (this.number == "") this.destroyNumberSvg();
            } //else console.log("stejne cislo mistnosti");

            if (this.name != document.getElementById("detailName").value) {
                this.name = document.getElementById("detailName").value;
                if (document.getElementById(this.id+"_name")) document.getElementById(this.id+"_name").textContent = this.name;
                else this.createNameSvg();
                if (this.name == "") this.destroyNameSvg();
            }

            if (this.ethSockets != document.getElementById("detailEthSockets").value) {
                this.ethSockets = document.getElementById("detailEthSockets").value;
                // if (document.getElementById(this.id+"_ethSockets")) document.getElementById(this.id+"_ethSockets").textContent = this.ethSockets;
                // else this.createEthSocketsSvg();
                // if (this.ethSockets == "") this.destroyEthSocketsSvg();
            }
                       
            if (this.width != document.getElementById("detailWidth").value) {
                this.width = (document.getElementById("detailWidth").value) * gridSize;  
                if (document.getElementById(this.id)) document.getElementById(this.id).setAttribute("width", this.width);          
                if (document.getElementById(this.id+"_shape")) document.getElementById(this.id+"_shape").setAttribute("width", this.width);
                if (document.getElementById(this.id+"_name")) {
                    //document.getElementById(this.id+"_name").setAttribute('x', Math.floor(this.width/2)); 
                    this.destroyNameSvg()
                    this.createNameSvg();
                }
                // if (document.getElementById(this.id+"_number")) document.getElementById(this.id+"_number").setAttribute('x', Math.floor(this.width/2));
                // if (document.getElementById(this.id+"_ethSockets")) document.getElementById(this.id+"_ethSockets").setAttribute('x', Math.floor(this.width/2)); 
            }
            if (this.height != document.getElementById("detailHeight").value) {
                this.height = (document.getElementById("detailHeight").value) * gridSize; 
                if (document.getElementById(this.id)) document.getElementById(this.id).setAttribute("height", this.height);
                if (document.getElementById(this.id+"_shape")) document.getElementById(this.id+"_shape").setAttribute("height", this.height);
                if (document.getElementById(this.id+"_name")) document.getElementById(this.id+"_name").setAttribute('y', Math.floor(this.height/2)); 
                // if (document.getElementById(this.id+"_number")) document.getElementById(this.id+"_number").setAttribute('y', Math.floor(this.height/4));
                // if (document.getElementById(this.id+"_ethSockets")) document.getElementById(this.id+"_ethSockets").setAttribute('y', Math.floor(this.height - this.height/4)); 
            }

            if (this.x != document.getElementById("detailX").value * gridSize) {
                this.x = (document.getElementById("detailX").value) * gridSize; 
                document.getElementById(this.id).setAttribute("x", this.x);
            }

            if (this.y != document.getElementById("detailY").value * gridSize) {              
                this.y = (document.getElementById("detailY").value) * gridSize; 
                document.getElementById(this.id).setAttribute("y", this.y);
            }

            document.getElementById("success").innerHTML += "Místnost " + number + " uložena!";
            document.getElementById("success").style.display = "block";
        } else {
            document.getElementById("alert").innerHTML += "Místnost " + number + " již existuje!";
            document.getElementById("alert").style.display = "block";
        }
    }

    // updateName(name){
    //     document.getElementById(this.id+"_name").textContent = name;
    //     this.name = name;
    // }
    
}