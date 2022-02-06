//--------------------------------------- music-player Code Start -------------------------------------
let audiobox = document.querySelector("#audio-player");
audiobox.style.display = "none"; // ---- Hiding Audio Element
const players_Frame = document.querySelector("#players-frame");
const intropage = document.getElementById("intropage");
let progress_bar = document.getElementById("progress_bar");
const banner_img = document.getElementById("banner-img"); // banner-img
// Music Players Controls 
let next_btn = document.querySelector(".next-btn");
let pause_btn = document.querySelector(".pause-btn");
let pause_btn_img = document.getElementById("pause-btn-img");
let previes_btn = document.querySelector(".previes-btn");
// Rangebar 
let music_played_span = document.querySelector(".music-played");
let music_duration = document.querySelector(".music-duration");
let range_input = document.querySelector("#range");
// details showing
let song_name_span = document.querySelector("#music-title");
let singer_name = document.querySelector(".singer-name");
// Bolloen
let currentSong = 0;
let isPlaying = false;

// loding default song (onload Function) ----------->
window.addEventListener("load", () => {
    song_name_span.innerHTML = musicAPPS.songN[currentSong];
    singer_name.innerHTML = musicAPPS.singer[currentSong];
    audiobox.src = musicAPPS.songSource[currentSong];
    banner_img.src = musicAPPS.song_banner[currentSong];
    Li_Btn[currentSong].classList.add("active");
});
// next song function -- This Function Called when Song Gets Over ----------->
function NEXTsong() {
    currentSong = currentSong + 1;
    console.log(musicAPPS.songN[currentSong]);
    song_name_span.innerHTML = musicAPPS.songN[currentSong];
    singer_name.innerHTML = musicAPPS.singer[currentSong];
    console.log(audiobox.src = musicAPPS.songSource[currentSong]);
    banner_img.src = musicAPPS.song_banner[currentSong];
}
// Adding Function to Next Button (controls) ----------->
next_btn.addEventListener("click", () => {
    audiobox.setAttribute("autoplay", "");
    currentSong = currentSong + 1;
    if (currentSong >= musicAPPS.singer.length) {
        currentSong = 0;
        song_name_span.innerHTML = musicAPPS.songN[currentSong];
        singer_name.innerHTML = musicAPPS.singer[currentSong];
        console.log(audiobox.src = musicAPPS.songSource[currentSong]);
        banner_img.src = musicAPPS.song_banner[currentSong];
    } else {
        console.log(currentSong);
        console.log(musicAPPS)
        console.log(musicAPPS.songN[currentSong]);
        song_name_span.innerHTML = musicAPPS.songN[currentSong];
        singer_name.innerHTML = musicAPPS.singer[currentSong];
        console.log(audiobox.src = musicAPPS.songSource[currentSong]);
        banner_img.src = musicAPPS.song_banner[currentSong];
    }
    activatingListSong(currentSong);
});




// Adding Function to Previous Button (controls) ----------->
previes_btn.addEventListener("click", () => {
    currentSong = currentSong - 1;
    if (currentSong < 0) {
        alert("No more Songs");
    } else {
        console.log(currentSong);
        song_name_span.innerHTML = musicAPPS.songN[currentSong];
        singer_name.innerHTML = musicAPPS.singer[currentSong];
        console.log(audiobox.src = musicAPPS.songSource[currentSong]);
        banner_img.src = musicAPPS.song_banner[currentSong];
    };
    activatingListSong(currentSong);
});
// Adding Function to Play-Pause Button (controls) ----------->
function playSong() {
    isPlaying = true;
    audiobox.play();
    pause_btn_img.src = "./images/pause-btn.svg";
}

function PauseSong() {
    isPlaying = false;
    audiobox.pause();
    pause_btn_img.src = "./images/play-btn.svg";
}

function check_play_pause_song() {
    isPlaying ? PauseSong() : playSong();
};
pause_btn.addEventListener("click", check_play_pause_song);
//--------------------------------------- music-player Code End -----------------------------------------------------
// --------------------------------------    AUDIO ELEMAENT      ----------------------------------------------------
audiobox.addEventListener("timeupdate", (event) => {
    const { currentTime, duration } = event.srcElement;

    let progres_bar_time = (currentTime / duration) * 100;
    progress_bar.style.width = progres_bar_time + "%";

    music_played_span.innerHTML = parseInt(currentTime);
    let min_duration = duration / 60;
    let sec_duration = duration % 60;
    if (duration) {
        music_duration.innerHTML = parseInt(min_duration) + ":" + parseInt(sec_duration);
    };
    let min_currentTime = currentTime / 60;
    let sec_currentTime = currentTime % 60;
    if (sec_currentTime < 10) {
        music_played_span.innerHTML = parseInt(min_currentTime) + ":0" + parseInt(sec_currentTime);
    } else {
        music_played_span.innerHTML = parseInt(min_currentTime) + ":" + parseInt(sec_currentTime);
    };
});
audiobox.addEventListener("ended", () => {
    audiobox.setAttribute("autoplay", "");
    NEXTsong();
});
// controlling audio from range bar ----------->
const range_container = document.querySelector(".range_container");
range_container.addEventListener("click", (e) => {
    console.log(e)
    const { duration } = audiobox;
    let move_progress_bar = (e.offsetX / e.srcElement.clientWidth) * duration;
    audiobox.currentTime = move_progress_bar;
});


// -----------------------------------------   MAIN - FRAME Code Start  ---------------------------------------------
let songsLi = document.querySelector(".song-list");
// FUNSTION TO CREATE ELEMENTS  ---------->
function Create_Element(k) {
    let Created1_br = document.createElement("br");
    // CTRATED LI TAG with CLASS NAME SONG
    let creted_Li_elem = document.createElement("li");
    creted_Li_elem.classList.add("song");
    // CREATING PARAGRAPH TAG WITH CLASS NAME MUSIC-INFO
    let creted_p_elem = document.createElement("p");
    creted_p_elem.classList.add("music-info");
    // CRETEING SPAN TAG WITH CLASS NAME SONG-NAME
    let creted_span_1 = document.createElement("span");
    creted_span_1.classList.add("song-name");
    // CRETEING SPAN TAG WITH CLASS NAME SINGER-NAME
    let creted_span_2 = document.createElement("span");
    creted_span_2.classList.add("singer-name");
    // CREATING DIV TAG WITH CLASS NAME SONG-TOOGLE-BTN AND SONG-PLAY-PAUSE
    // let creted_div_ = document.createElement("div");
    // creted_div_.classList.add("pausePlay-direct-btn");
    let crete_img_tag = document.createElement("img");
    // apending  data and inserting and nesting tags  ---
    let inserting_li = songsLi.insertAdjacentElement("beforeend", creted_Li_elem)
    let nesting_span_1 = inserting_li.appendChild(creted_p_elem).appendChild(creted_span_1);
    nesting_span_1.innerHTML = musicAPPS.songN[k];
    nesting_span_1.insertAdjacentElement("afterend", Created1_br);
    let inserting_span_2 = Created1_br.insertAdjacentElement("afterend", creted_span_2);
    inserting_span_2.innerHTML = musicAPPS.singer[k];
    // let inserting_div = creted_p_elem.insertAdjacentElement("afterend", creted_div_);
    // let inserted_img_url = inserting_div.insertAdjacentElement("afterbegin", crete_img_tag);
    // inserted_img_url.src = "./images/play-btn.svg";
};
// FUNCTION TO INSET ELEMENT   ---------->
for (let i = 0; i < musicAPPS.songSource.length; i++) {
    Create_Element(i);
};
// main ---btn  ---------->
// let pausePlay_direct_btn = document.querySelectorAll(".pausePlay-direct-btn");

// pausePlay_direct_btn.forEach(element => {
//     element.addEventListener("click", () => {
//         for (let k = 0; k < pausePlay_direct_btn.length; k++) {
//             const element = pausePlay_direct_btn[k];
//             element.firstElementChild.src = "images/play-btn.svg  ";

//         }

//         console.log(element.firstElementChild.src = "images/pause-btn.svg");
//     });

// });
// for (let i = 0; i < pausePlay_direct_btn.length; i++) {
//     const element = pausePlay_direct_btn[i];
//     element.addEventListener("click", () => {

//         for (let k = 0; k < pausePlay_direct_btn.length; k++) {
//             const element_sub = pausePlay_direct_btn[k];
//             element_sub[k].src = "images/play-btn.svg  ";
//         }


// for (let p = 0; p < musicAPPS.songSource.length; p++) {
//     if (i === p) {  play-btn.svg
//         song_name_span.innerHTML = musicAPPS.songN[p];
//         singer_name.innerHTML = musicAPPS.singer[p];
//         banner_img.src = musicAPPS.song_banner[p];
//         audiobox.src = musicAPPS.songSource[p];
//         audiobox.setAttribute("autoplay", "");

//     }
// }
//     })

// };
let main_banner_img = document.getElementById("main-banner-img");
let Li_Btn = document.querySelectorAll(".song");
for (let i = 0; i < Li_Btn.length; i++) {


    const element = Li_Btn[i];
    element.addEventListener("click", () => {
        for (let i = 0; i < Li_Btn.length; i++) {
            Li_Btn[i].classList.remove("active");

        }
        element.classList.add("active");
        changePlayPauseBtnImage(i);
        for (let p = 0; p < musicAPPS.songSource.length; p++) {
            if (i === p) {
                song_name_span.innerHTML = musicAPPS.songN[p];
                singer_name.innerHTML = musicAPPS.singer[p];
                banner_img.src = musicAPPS.song_banner[p];
                audiobox.src = musicAPPS.songSource[p];
                audiobox.setAttribute("autoplay", "");
                // main_banner_img.src = musicAPPS.song_banner[p];
            }
        }
    })
};
// Navigating Between Two Frame ---------->  
// const menuBTN = document.querySelector("#menu-list-btn");
// menuBTN.addEventListener("click", () => {
//     // frame transition
//     intropage.style.transitionDelay = 0 + "s";
//     players_Frame.style.transitionDelay = 0.2 + "s";

//     players_Frame.style.top = 940 + "px";
//     intropage.style.top = 0;
// });
// // Like Function ( like Functinality ) ---------->
// let like_btn = document.querySelector("#like-btn");
// let like_img_container = like_btn.firstChild;
// like_btn.addEventListener("click", () => {
//     like_img_container.src = "./images/Filled-heart.svg";
// });
// -----------------------------------------   MAIN - FRAME Code END  ---------------------------------------------
//------------------------------------------------- extra functanilty------------------------------------------
// Dark Mode Functinality Start  ---------->
let dark_mode_container = document.querySelector(".dark-Mode-toogle");
let Dark_ModeToogle = document.querySelector("#Dark-Mode");
let slider = document.querySelector(".slider");

function Toogle_darkMode(e) {
    if (e.target.checked) {
        slider.style.transform = "translateX(" + 25 + "px)";
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        dark_mode_container.style.background = "#0067e6";
        // slider.style.background = "white";
    } else {
        console.log("nooooooooooooooo")
        slider.style.transform = "translateX(" + 0 + "px)";
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        dark_mode_container.style.background = "linear-gradient( 45deg, #8743FF, #4136F1)";
        // slider.style.background = "#fec150";
        slider.style.background = "white";
    }
};
// Get the current theme from local storage ---------->
const currentTheme = localStorage.getItem("theme");
// If the current local storage item can be found
if (currentTheme) {
    // Set the body data-theme attribute to match the local storage item
    document.documentElement.setAttribute("data-theme", currentTheme);
    // If the current theme is dark, check the theme toggle
    if (currentTheme === "dark") {
        dark_mode_container.style.background = "linear-gradient( 45deg, #8743FF, #4136F1)";
        slider.style.background = "#fec150F";
        slider.style.transform = "translateX(100%)";
        Dark_ModeToogle.checked = true;

    } else {
        dark_mode_container.style.background = "linear-gradient( 45deg, #8743FF, #4136F1)";
        slider.style.background = "white";
    }
};
Dark_ModeToogle.addEventListener("input", Toogle_darkMode, false);
//------------------------------------   Dark Mode Functinality End   ------------------------------------------------


// ------------------------------------------------------------------------------ activating box  --------------------------
function changePlayPauseBtnImage(j) {
    // console.log(j);
    // if (isPlaying) {

    // } else {
    //     pausePlay_direct_btn[j].firstChild.src = "images/play-btn.svg  ";
    //     pause_btn.firstElementChild.src = "images/play-btn.svg  ";
    // }
    // pausePlay_direct_btn[j].firstChild.src = "images/pause-btn.svg";
    pause_btn.firstElementChild.src = "images/pause-btn.svg";

}

function activatingListSong(j) {

    //    images/play-btn.svg  
    for (let i = 0; i < Li_Btn.length; i++) {
        Li_Btn[i].classList.remove("active");
        // changePlayPauseBtnImage(j);
        Li_Btn[i].lastElementChild.firstElementChild.src = "images/play-btn.svg  ";
    }

    Li_Btn[j].classList.add("active");

    changePlayPauseBtnImage(j);
}