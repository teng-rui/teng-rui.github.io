// import data from './json/content.json'  assert { type: 'JSON' };

let height_array = [];
let profile;
let education;
let experience;
let abilities;
let projects;
let contact;
let messageBtn;
let messageForm;

let content = {
    "profile": {
        "aboutMe": "I'm a recent graduate in Data Science, with machine learning internship experience in Ericsson and Volvo, and with a background in self-taught web development. <br> I am motivated, adaptable, and always eager to learn and take on new challenges. I work well in a team but also on my own :)."
    },
    "education": [
        {
            "description": "During the second year of EIT Master's program, I studied at Aalto University and learned courses including Computer Vision, Bayesian Data Analysis, Reinforcement Learning, etc. "
        },
        {
            "description": "I started EIT Master's program at KTH, the program has provided me with a strong foundation in statistical methods, machine learning,  and data mining. Additionally, I have had the opportunity to work on real-world data projects."
        },
        {
            "description": "Through coursework and practical projects during my Bachelor studies, I have gained experience in a wide range of programming tools and technologies, including Javascript, Python, SQL, OOP, Git, etc. "
        }
    ],

    "experience": [
        { "description": "At Volvo Autonomous Solutions, I established deep recurrent neural networks-based error models to compensate simulation error of physics-based Volvo dynamics vehicle models." },
        { "description": "To reduce classification error in testers' trouble reporting work, I built intent classification models based on Sentence-BERT that can classify trouble reports, replace manual task allocation, and simplify trouble report workflow." },
        { "description": "I was responsible for data visualization and predicted future sales in mainland China for main products. The experience equipped me with communication and teamwork skills." }
    ],
    "abilities": [
        { "skill": "Javascript", "score": 4 },
        { "skill": "HTML(5)", "score": 4 },
        { "skill": "CSS(3)", "score": 4 },
        { "skill": "Bootstrap", "score": 3 },
        { "skill": "Python", "score": 4 },
        { "skill": "React", "score": 4 },
        { "skill": "NodeJS", "score": 3 },
        { "skill": "EJS", "score": 2 },
        { "skill": "MongoDB", "score": 3 },
        { "skill": "MySQL", "score": 2 },
        { "skill": "Express", "score": 3 },
        { "skill": "Git", "score": 3 },
        { "skill": "Pytorch", "score": 4 }
    ]

}

let aboutMe = content.profile.aboutMe;
let description_education = content.education.map(item => {
    return item.description;
});

let description_experience = content.experience.map(item => {
    return item.description;
});





function getDistance(el) {

    let dis = window.pageYOffset + el.getBoundingClientRect().top;
    return dis;
}
function foldDetail(el) {
    let target = el.parentNode.nextElementSibling;
    if (el.innerHTML == "Hide Detail.") {
        el.innerHTML = "Detail."
        target.style.display = "none";
    }
    else {
        el.innerHTML = "Hide Detail.";
        target.style.display = "block";
    }

}

function foldNav() {
    let el = document.getElementById("side-nav");
    if (el.style.visibility == "visible") {
        el.style.visibility = "hidden";
    }
    else {
        el.style.visibility = "visible";
    }

}

function turnButton(el) {

    if (el.firstElementChild.style.transform != "rotate(45deg)") {

        el.firstElementChild.style.transform = "rotate(45deg)";
        el.firstElementChild.style.color = "white";
    }
    else {
        el.firstElementChild.style.transform = "rotate(0deg)";
        el.firstElementChild.style.color = "black";
    }


}

function rollingBar(el) {


    let currentY = window.scrollY;
    for (h of height_array) {
        if (currentY < (h - 1)) {
            window.scroll({
                top: h
            });
            return;
        }
    }




    //el.style.display='none';
}

function sendMessage() {
    let txt = 'message sent!';
    if (!messageForm.children[1].checkValidity()) {
        txt = 'Please check your name :)';
        messageForm.children[11].style.color = 'red';
        messageForm.children[11].innerHTML = txt;
    }

    else if (!messageForm.children[4].checkValidity()) {
        txt = 'Please check your email :)';
        messageForm.children[11].style.color = 'red';
        messageForm.children[11].innerHTML = txt;
    }

    else if (!messageForm.children[8].checkValidity()) {
        txt = 'Please check the message :)';
        messageForm.children[11].style.color = 'red';
        messageForm.children[11].innerHTML = txt;
    }
    else {
        messageForm.children[11].style.color = 'blue';
        messageForm.children[11].innerHTML = txt;


        setTimeout(function () {
            messageForm.children[1].value = '';
            messageForm.children[4].value = '';
            messageForm.children[8].value = '';

        }, 1000);


        //send email to me and the sender

    }


}

function removeMessage() {

    messageForm.children[11].innerHTML = '';

}
// window.addEventListener("hashchange", function () {

//     if (window.scrollY <= height_array[3]) {
//         window.scrollTo(window.scrollX, window.scrollY - 80);

//     }
// });

window.onscroll = function () {
    let projects = document.getElementById("projects");
    let h = getDistance(projects);
    let rolling = document.getElementsByClassName("side-rolling")[0];
    let op = 1;


    // let pos = 0.5 * window.innerHeight - 10;

    // if (window.scrollY <= 140) {
    //     pos = 0.5 * window.innerHeight - 10;
    // }
    // if (window.scrollY > 140){

    //     pos = 0.5 * window.innerHeight - 150 + window.scrollY;
    // }

    // rolling.style.top = pos + "px";

    // console.log(rolling.style.top);
    let disRollingToMiddle = 0.5 * window.innerHeight - 140;
    let secondPoint = h - window.innerHeight * 0.5;
    let transparencyPoint = h - window.innerHeight * 0.5 + 200;
    if (window.scrollY <= disRollingToMiddle) {
        op = 1;
    }
    else if (window.scrollY > disRollingToMiddle && window.scrollY <= (disRollingToMiddle + 500)) {
        op = 1 - (window.scrollY - disRollingToMiddle) / 1000;
    }

    else if (window.scrollY > (disRollingToMiddle + 250) && window.scrollY <= secondPoint) {
        op = 0.5;
    }
    else if (window.scrollY >= transparencyPoint) {
        op = 0;
    }
    else {
        op = 0.5 - (window.scrollY - secondPoint) / 400;
    }
    rolling.style.opacity = op;
    rolling.firstElementChild.style.opacity = op;
}

window.onload = function () {




    profile = document.getElementById("profile");
    education = document.getElementById("education");
    experience = document.getElementById("workExperience");
    skills = document.getElementById("abilities");
    projects = document.getElementById("projects");


    content.abilities.slice(0, 7).map(item => {
        const el = document.createElement("div");
        el.className = "row";
        const el_div = document.createElement("div");
        el_div.className = "col-8";
        const el_p = document.createElement("p");
        el_p.className = "col-4";
        el_p.innerHTML = item.skill;
        el.appendChild(el_p);
        el.appendChild(el_div);
        for (let i = 0; i < item.score; i++) {
            const el_div_i = document.createElement("i");
            el_div_i.className = "material-icons";
            el_div_i.style = "font-size:22px;color:var(--color_orange2);";
            el_div_i.innerText = "star";
            el_div.appendChild(el_div_i);
        }
        for (let i = 5 - item.score; i > 0; i--) {
            const el_div_i = document.createElement("i");
            el_div_i.className = "material-icons";
            el_div_i.style = "font-size:22px;color:var(--color_grey);";
            el_div_i.innerText = "star";
            el_div.appendChild(el_div_i);
        }
        const parent = document.getElementsByClassName('classification1')[0];
        parent.appendChild(el);
    });

    content.abilities.slice(7, 13).map(item => {
        const el = document.createElement("div");
        el.className = "row";
        const el_div = document.createElement("div");
        el_div.className = "col-8";
        const el_p = document.createElement("p");
        el_p.className = "col-4";
        el_p.innerHTML = item.skill;
        el.appendChild(el_p);
        el.appendChild(el_div);
        for (let i = 0; i < item.score; i++) {
            const el_div_i = document.createElement("i");
            el_div_i.className = "material-icons";
            el_div_i.style = "font-size:22px;color:var(--color_orange2);";
            el_div_i.innerText = "star";
            el_div.appendChild(el_div_i);
        }
        for (let i = 5 - item.score; i > 0; i--) {
            const el_div_i = document.createElement("i");
            el_div_i.className = "material-icons";
            el_div_i.style = "font-size:22px;color:var(--color_grey);";
            el_div_i.innerText = "star";
            el_div.appendChild(el_div_i);
        }
        const parent = document.getElementsByClassName('classification2')[0];
        parent.appendChild(el);
    });


    profile.lastElementChild.children[1].lastElementChild.innerHTML = aboutMe;

    for (let i = 1; i < 4; i++) {
        education.children[i].lastElementChild.lastElementChild.innerHTML = description_education[i - 1];

    }

    for (let i = 1; i < 4; i++) {
        experience.children[i].lastElementChild.lastElementChild.innerHTML = description_experience[i - 1];

    }

    height_array.push(getDistance(profile));
    height_array.push(getDistance(education));
    height_array.push(getDistance(experience));
    height_array.push(getDistance(skills));
    height_array.push(getDistance(projects));

    messageBtn = document.getElementById("send-message-btn");
    messageForm = document.getElementById("message-form");

    messageBtn.addEventListener("click", sendMessage);

    let closeBtn = document.getElementById("close-modal");
    closeBtn.addEventListener("click", removeMessage);



    let fd = document.getElementsByClassName("fold_detail");
    for (let el of fd) {
        el.addEventListener("click", function () { foldDetail(this); });
    }

    let navButton = document.getElementById("nav-button");
    navButton.addEventListener("click", foldNav);
    navButton.addEventListener("click", function () { turnButton(this); });

    // let navItem = document.getElementsByClassName("vertical-nav-item");
    // for (let el of navItem) {
    //     el.addEventListener("click", foldNav);
    //     el.addEventListener("click", function () { turnButton(navButton); });
    // }

    let rolling = document.getElementsByClassName("side-rolling")[0];
    rolling.addEventListener("click", function () { rollingBar(this); });
}

window.onresize = function () {
    height_array[0] = getDistance(profile);
    height_array[1] = (getDistance(education));
    height_array[2] = (getDistance(experience));
    height_array[3] = (getDistance(skills));
    height_array[4] = (getDistance(projects));

    console.log(height_array);

}




