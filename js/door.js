class Door {
    constructor(x, y, orientation){
        this.id = Date.now() + Math.random().toString(36).substr(2, 9);
        this.x = x * gridSize;
        this.y = y * gridSize;
        this.orientation = orientation; //"horizontal" or "vertical"
        this.width;
        this.height;

        if (orientation == "horizontal") {
            this.width = 1 * gridSize;
            this.height = 1;
            
            //kvůli oříznutí SVG extentu a zobrazení linie na hranici SVG
            if (this.y > 0){
                this.y -= 1;
            }
        } else {
            this.width = 1;
            this.height = 1 * gridSize;

            if (this.x > 0){
                this.x -= 1;
            }
        }  
    }  
}