const frameEL = document.getElementsByName("urls");
const a = document.getElementById("previewframe");
let url = ['https://youtu.be/0zAf6KChGd8','https://youtu.be/UxEHgVV6yzg'];
let len = 2;



/*動画*/
const v1 = document.getElementById("video_1");
const v2 = document.getElementById("video_2");
const v3 = document.getElementById("video_3");
const v4 = document.getElementById("video_4");
const v5 = document.getElementById("video_5");
const v6 = document.getElementById("video_6");
const v7 = document.getElementById("video_7");

/*背景*/
const TyuniBG = document.getElementById("bgI_1");
const ApexBG = document.getElementById("bgI_2");
const osuBG = document.getElementById("bgI_3");
const NGNL = document.getElementById("bgI_4");

window.onload = () =>{
    v1.style.display = "none";
    v2.style.display = "none";
    v3.style.display = "none";
    v4.style.display = "none";
    v5.style.display = "none";
    v6.style.display = "none";
    v7.style.display = "none";
};

let i;

document.getElementById("Relbutton").onclick = () => {
selected();
};
const selected = () => {
        if (frameEL[0].checked){
            apper0();
        };
        if (frameEL[1].checked){
            apper1();
        };
        if (frameEL[2].checked){
            apper2();
        };
        if (frameEL[3].checked){
            apper3();
        };
        if (frameEL[4].checked){
            apper4();
        };
        if (frameEL[5].checked){
            apper5();
        };
        if (frameEL[6].checked){
            apper6();
        };
};

const apper0 = () => {
    v1.play();
    v2.pause();
    v3.pause();
    v4.pause();
    v5.pause();
    v6.pause();
    v7.pause();
    v1.style.display = "block";
    v2.style.display = "none";
    v3.style.display = "none";
    v4.style.display = "none";
    v5.style.display = "none";
    v6.style.display = "none";
    v7.style.display = "none";
    ApexBG.style.opacity = "0";
    TyuniBG.style.opacity = "1";
    osuBG.style.opacity = "0";
    NGNL.style.opacity = "0";
};

const apper1 = () => {
    v1.pause();
    v2.play();
    v3.pause();
    v4.pause();
    v5.pause();
    v6.pause();
    v7.pause();
    v1.style.display = "none";
    v2.style.display = "block";
    v3.style.display = "none";
    v4.style.display = "none";
    v5.style.display = "none";
    v6.style.display = "none";
    v7.style.display = "none";
    ApexBG.style.opacity = "1";
    TyuniBG.style.opacity = "0";
    osuBG.style.opacity = "0";
    NGNL.style.opacity = "0";
};

const apper2 = () => {
    v1.pause();
    v2.pause();
    v3.play();
    v4.pause();
    v5.pause();
    v6.pause();
    v7.pause();
    v1.style.display = "none";
    v2.style.display = "none";
    v3.style.display = "block";
    v4.style.display = "none";
    v5.style.display = "none";
    v6.style.display = "none";
    v7.style.display = "none";
    ApexBG.style.opacity = "0";
    TyuniBG.style.opacity = "0";
    osuBG.style.opacity = "1";
    NGNL.style.opacity = "0";
};

const apper3 = () => {
    v1.pause();
    v2.pause();
    v3.pause();
    v4.play();
    v5.pause();
    v6.pause();
    v7.pause();
    v1.style.display = "none";
    v2.style.display = "none";
    v3.style.display = "none";
    v4.style.display = "block";
    v5.style.display = "none";
    v6.style.display = "none";
    v7.style.display = "none";
    ApexBG.style.opacity = "1";
    TyuniBG.style.opacity = "0";
    osuBG.style.opacity = "0";
    NGNL.style.opacity = "0";
}
const apper4 = () => {
    v1.pause();
    v2.pause();
    v3.pause();
    v4.pause();
    v5.play();
    v6.pause();
    v7.pause();
    v1.style.display = "none";
    v2.style.display = "none";
    v3.style.display = "none";
    v4.style.display = "none";
    v5.style.display = "block";
    v6.style.display = "none";
    v7.style.display = "none";
    ApexBG.style.opacity = "1";
    TyuniBG.style.opacity = "0";
    osuBG.style.opacity = "0";
    NGNL.style.opacity = "0";
}
const apper5 = () => {
    v1.pause();
    v2.pause();
    v3.pause();
    v4.pause();
    v5.pause();
    v6.play();
    v7.pause();
    v1.style.display = "none";
    v2.style.display = "none";
    v3.style.display = "none";
    v4.style.display = "none";
    v5.style.display = "none";
    v6.style.display = "block";
    v7.style.display = "none";
    ApexBG.style.opacity = "1";
    TyuniBG.style.opacity = "0";
    osuBG.style.opacity = "0";
    NGNL.style.opacity = "0";
}

const apper6 = () => {
    v1.pause();
    v2.pause();
    v3.pause();
    v4.pause();
    v5.pause();
    v6.pause();
    v7.play();
    v1.style.display = "none";
    v2.style.display = "none";
    v3.style.display = "none";
    v4.style.display = "none";
    v5.style.display = "none";
    v6.style.display = "none";
    v7.style.display = "block";
    ApexBG.style.opacity = "0";
    TyuniBG.style.opacity = "0";
    osuBG.style.opacity = "0";
    NGNL.style.opacity = "1";
}



