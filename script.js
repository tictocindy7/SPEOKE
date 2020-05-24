//Buttons for collecting start times of phrases
document.getElementById("timestamp").addEventListener("click", timeStamp);
document.getElementById("save").addEventListener("click", save);

//List of start times of phrases
var times = [];
//Video
var vid = document.getElementById("vid");

//Add time to list when button clicked
function timeStamp(){
    var n = vid.currentTime;
    times.push(n);
    console.log(times);
}

//Save list of times
function save(){
    var blob = new Blob([times], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "timeStamps.txt");
}

//List of times
var stamps = [1.1,2.1,5.8,8.3,11.0,13.3,15.7,17.8,19.2,22.1,23.8,25.4,27.7,29.7,32.7,34.4,36.1,39.2,43.1,46.0,47.7,49.8,51.5,54.1,55.7,59.3,62.8,65.6,67.9,71.3,74.5,77.6,80.0,82.9,86.5,87.8,91.0,91.5,93.5,96.6,104.2,109.1,118.4,125.3,126.5,129.8,131.8,134.5,136.6,138.8,141]

//When video time changes run function highlight
document.getElementById("vid").addEventListener("timeupdate", highlight);

//Highlight current phrase
function highlight(){
    //Loop through each start of phrase timestamp in list
    for(let i = 0; i < stamps.length; i++){

        //If the timestamp has been passed
        if(vid.currentTime > (stamps[i]-.2)){

            //select span (phrase) with the same Id as index of timestamp and highlight
            let Id = i.toString();
            document.getElementById(Id).style.color = "#F08700";

            //Turn phrases before current to black
            if(i>0){    
                for(let j=0; j < i; j++){
                    let oldId = j.toString();
                    document.getElementById(oldId).style.color = "black";
                }
            }

            //Turn phrases after current to black
            if(i< (stamps.length - 1)){
                for(let j=(i+1); j < stamps.length; j++){
                    let oldId = j.toString();
                    document.getElementById(oldId).style.color = "black";
                }
            }

            //Automatically Scroll
            if( (i > 5) && (i%3==0)){
                let pastId = (i-5).toString();
                let oldPhrase = document.getElementById(pastId);
                oldPhrase.scrollIntoView();
            }
        }
    }
}