//Buttons for collecting start times of phrases
document.getElementById("timestamp").addEventListener("click", timeStamp);
document.getElementById("saveTime").addEventListener("click", saveTime);

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
function saveTime(){
    var blob = new Blob([times], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "timeStamps.txt");
}

//List of times (length of 51)
var stamps = [1.1,2.1,5.8,8.3,11.0,13.3,15.7,17.8,19.2,22.1,23.8,25.4,27.7,29.7,32.7,34.4,36.1,39.2,43.1,46.0,47.7,49.8,51.5,54.1,55.7,59.3,62.8,65.6,67.9,71.3,74.5,77.6,80.0,82.9,86.5,87.8,91.0,91.5,93.5,96.6,104.2,109.1,118.4,125.3,126.5,129.8,131.8,134.5,136.6,138.8,141]

//When video time changes run function highlight
vid.addEventListener("timeupdate", highlight);

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
//Audio IN
let shouldStop = false;
let stopped = false;
let shouldStart = false;
let started = false;
var player = document.getElementById('player');
var download = document.getElementById('download');
var stopButton = document.getElementById('stop');
var startButton = document.getElementById('start');


var handleSuccess = function(stream) {
    var recordedChunks = [];
    var mediaRecorder = new MediaRecorder(stream);

    startButton.addEventListener('click', function(){
        shouldStart = true;
        startButton.disabled = true;
        stopButton.disabled = false;
        mediaRecorder.start(1000);
    });

    mediaRecorder.ondataavailable = function(e) {
        recordedChunks.push(e.data);
    };

    stopButton.addEventListener('click', function() {
        shouldStop = true;
        startButton.disabled = false;
        stopButton.disabled = true;
        mediaRecorder.stop();
        var blob = new Blob(recordedChunks, { 'type' : 'audio/mpeg-3'});
        player.src = window.URL.createObjectURL(blob);
    });
}

navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(handleSuccess);

//List of Amplitudes length = 143
var amps = [0.000011139088427346638, 0.0010497813816435454,0.032532122277926,0.12151144061220649,0.17648091223066736,0.007734216815259405,0.1846018399302684,0.011336152867082724,0.005741647884779565,0.06980472508668535,0.07115377549611675,0.0956219715268535,0.10354008074417789,0.029929552868999156,0.06430923651605269,0.001385927392728647,0.02803329512381049,0.1171021783596046,0.0654144365904784,0.004237108472232674,0.12245518028936397,0.00015032523684748968,0.0004916438882282037,0.04905693492069807,0.03588004956940269,0.0012652422520292072,0.122568203473299,0.009037674565095369,0.009790252706521582,0.012592955301919694,0.22366831524499176,0.1034061146638849,0.0019669243694271504,0.03424125422285369,0.012854110933654855,0.0933739136799865,0.012161089849761206,0.0230292461288695,0.1476548852488947,0.012956235904995797,0.052222090007905286,0.08423967811086652,0.0068562778337623205,0.1231523220429485,0.21864818181340645,0.12720344675810163,0.06657317394207285,0.01062906410275247,0.026790883275203656,0.13209807968033022,0.14690640985697362,0.08695935370108154,0.12126492076388401,0.01850815936254752,0.12582633446713123,0.13379893052602138,0.0922917130823302,0.12398827290430461,0.08037967479045793,0.001706537235671257,0.14404758939682755,0.16525748221810266,0.0014138576709444948,0.05263343040146892,0.000024894139566057214,0.00004093078501321611,0.12318101371362247,0.09310032338518535,0.10624317762042973,0.035403039343727946,0.11420393875471462,0.015904292787017986,0.13655269554765592,0.15329745551614166,0.0006878675253350133,0.1327328010122616,0.11976649785254907,0,0.1276165578304298,0.012068881557256612,0.13185237690120036,0.05370863073114866,0.001183444183610528,0.00004838673280640996,0.04768890722112627,0.06657729429183623,0.0030278760940671387,0.10892506427224075,0.058668301027485215,0.007094796649336944,0.0002889500829872067,0.15177865032153004,0.1710271836372279,0.03974419685047456,0.06087074139732691,0.00426240816685253,0.00008559616877584501,0.0144838674845549,0.08525948003682934,0,0.00003814688666751924,0.00004301941128536106,0.00004536149069760824,0.003295892305017546,0.00004381987355857722,0.07994329887591464,0.0231957448056557,0.000007866297136528487,0.000043377449835275496,0.16763367163060658,0.05562556123015996,0.02809482584454879,0.022095415237989996,0,0.000035389784659628325,0.000040978127067058156,0.00008468399908308455,0.0003104385716967226,0.0009686540736064946,0.1530798940885978,0.08239399405793435,0.07860279389950195,0.000011220505974404503,0.000042211007463354986,0.000042518624244288987,0.000041199903096557046,0.058432091248141985,0.01716255320893351,0.03860637064462745,0.0010608475756538533,0.044891145141228925,0.022610299451176798,0.16953640392117927,0.010303001172335107,0.12417429826630275,0.11912280578161752,0.0763895876333757,0.0880461653258312,0.1298857619802425,0.025939910897579285,0.16073527635607102,0.12114046591400812,0.14087737291896654]

var mic;

function setup(){
    mic = new p5.AudioIn();
    vid.addEventListener("timeupdate", function(){
        mic.start();
    });
    noLoop();
}

vid.addEventListener("timeupdate", function(){ loop(); });

function draw(){
    if(vid.paused){ 
        document.getElementById("bad").style.color = "#F6EF44";
        document.getElementById("good").style.color = "#F6EF44";
        document.getElementById("perfect").style.color = "#F6EF44";
        noLoop();
    };
    frameRate(1);
    var vol = mic.getLevel();
    let time = Math.floor(vid.currentTime);
    if((vol < (amps[time-1] + .01)) && ((vol > (amps[time-1] - .01)))){
        document.getElementById("perfect").style.color = "green";
        document.getElementById("bad").style.color = "#F6EF44";
        document.getElementById("good").style.color = "#F6EF44";
    }
    else if((vol < (amps[time-1] + .1)) && ((vol > (amps[time-1] - .1)))){
        document.getElementById("good").style.color = "purple";
        document.getElementById("bad").style.color = "#F6EF44";
        document.getElementById("perfect").style.color = "#F6EF44";
    }
    else if(vid.paused){
        document.getElementById("bad").style.color = "#F6EF44";
    }
    else {
        document.getElementById("perfect").style.color = "#F6EF44";
        document.getElementById("good").style.color = "#F6EF44";
        document.getElementById("bad").style.color = "red";
    }
}