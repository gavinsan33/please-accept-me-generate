const text = "YOU WANT TO ACCEPT GAVIN SANDERS TO GENERATE...";
const asciiArt = `
              ==========                                                                                                                                           
          ==============     ===                                                                                                                                   
           ============     =======                                                                                                                                
            ===========    ==========                                                                                                                              
            ===========    ============                                                                                                                            
     @@@@     =========   ===============                                                                                                                          
    @@@@@@    ===        =============                                                                                                                             
   @@@@@@@@@                ========                                                                                                          @@@@                 
  @@@@@@@@@                   ===         ==                                                                                                  @@@@                 
 @@@@@@@@@      ==========           =======                   @@@@  @@@      @@@@@@     @@@@ @@@@@        @@@@@      @@@  @@@    @@@@@@    @@@@@@@@     @@@@@@    
@@@@@@@@@     =============      ============               @@@@@@@@@@@@    @@@@@@@@@@   @@@@@@@@@@@    @@@@@@@@@@    @@@@@@@@  @@@@@@@@@@  @@@@@@@@   @@@@@@@@@@  
@@@@@@@@@    ===============     ============               @@@     @@@@   @@@     @@@   @@@@    @@@@  @@@@     @@@   @@@@@     @@@    @@@    @@@@    @@@@     @@@ 
@@@@@@@@     ================    ============              @@@@      @@@  @@@@@@@@@@@@@  @@@@    @@@@  @@@@@@@@@@@@   @@@        @@@@@@@@@    @@@@    @@@@@@@@@@@@ 
@@@@@@@@     ================    ============               @@@     @@@@  @@@@           @@@@    @@@@  @@@@           @@@      @@@@    @@@    @@@@    @@@          
@@@@@@@@@    ===============     ============               @@@@@@@@@@@@   @@@@@  @@@@   @@@@    @@@@   @@@@   @@@@   @@@      @@@@   @@@@    @@@@@@   @@@@   @@@@ 
@@@@@@@@@      ============             =====                  @@@@@ @@@     @@@@@@@@    @@@@    @@@@    @@@@@@@@@    @@@       @@@@@@@@@@     @@@@@    @@@@@@@@   
 @@@@@@@@@       ========      @@@                         @@@@     @@@@                                                                                           
  @@@@@@@@@@                  @@@@@@@                       @@@@@@@@@@@                                                                                            
   @@@@@@@@@@@              @@@@@@@@@@@                       @@@@@@@                                                                                              
    @@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@                                                                                                                             
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                                                                                               
        @@@@@@@@@@@@@@@@@@@@@@@@@@                                                                                                                                 
          @@@@@@@@@@@@@@@@@@@@@                                                                                                                                    
@@@@@@@@@@@@@@@                                                                                                                            
`;

const textElement = document.getElementById("text");
const asciiElement = document.getElementById("ascii-art");

let textIndex = 0;
let asciiIndex = 0;

function typeText() {
  if (textIndex < text.length) {
    textElement.textContent += text[textIndex]; 
    textIndex++;
    setTimeout(typeText, 100); // Adjust typing speed
  } else {
    setTimeout(typeAsciiArt, 500);
  }
}

function typeAsciiArt() {
  const lines = asciiArt.split("\n"); 
  if (asciiIndex < lines.length) {
    asciiElement.textContent += lines[asciiIndex] + "\n"; 
    asciiIndex++;
    setTimeout(typeAsciiArt, 150); 
  } else {
    // Reset after a delay
    setTimeout(() => {
      textElement.textContent = "";
      asciiElement.textContent = ""; 
      textIndex = 0;
      asciiIndex = 0;
      typeText(); 
    }, 3000); 
  }
}

setTimeout(typeText, 1000);
