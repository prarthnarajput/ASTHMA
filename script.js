
// MENU TOGGLE


const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

if(menuBtn && navMenu){
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}



// HEADER SCROLL EFFECT

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(header){
        if(window.scrollY > 50){
            header.style.background = "#0d47a1";
        }
        else{
            header.style.background = "rgba(13,71,161,0.95)";
        }
    }

});

// technology

const techTitles = document.querySelectorAll(".tech-title");

techTitles.forEach(title => {

    title.addEventListener("click", () => {

        title.parentElement.classList.toggle("active");

    });

});

// doctore section

const profileBtns = document.querySelectorAll(".profile-btn");
const modal = document.getElementById("doctorModal");

const doctorName = document.getElementById("doctorName");
const doctorRole = document.getElementById("doctorRole");
const doctorExp = document.getElementById("doctorExp");
const doctorInfo = document.getElementById("doctorInfo");

const closeBtn = document.querySelector(".close-btn");

profileBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        doctorName.innerText = btn.dataset.name;
        doctorRole.innerText = btn.dataset.role;
        doctorExp.innerText = btn.dataset.exp;
        doctorInfo.innerText = btn.dataset.info;

        modal.style.display = "flex";

    });

});

if(closeBtn && modal){

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

}

if(modal){

    window.addEventListener("click", (e) => {

        if(e.target === modal){
            modal.style.display = "none";
        }

    });

}



// PRODUCT FILTER

function filterProducts(category, event){

    const cards = document.querySelectorAll(".product-card");
    const buttons = document.querySelectorAll(".filter-buttons button");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    if(event){
        event.target.classList.add("active");
    }

    cards.forEach(card => {

        if(category === "all"){
            card.style.display = "block";
        }
        else if(card.classList.contains(category)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

}


// CONTACT FORM


const contactForm = document.querySelector(".contact-form");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("✅ Message Sent Successfully!");

        this.reset();

    });

}


// AIR QUALITY WIDGET

const apiKey = "3e6e6bacdf5e340235d3ebd736becce8";

fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=22.4707&lon=70.0577&appid=${apiKey}`)

.then(response => response.json())

.then(data => {

    const aqi = data.list[0].main.aqi;

    let status = "";
    let color = "";
    let advice = "";

    if(aqi === 1){
        status = "Good 😊";
        color = "green";
        advice = "Air quality is excellent for outdoor activities.";
    }
    else if(aqi === 2){
        status = "Fair 🙂";
        color = "#8bc34a";
        advice = "Air quality is acceptable for most people.";
    }
    else if(aqi === 3){
        status = "Moderate 😐";
        color = "#ff9800";
        advice = "Sensitive individuals should limit prolonged outdoor activity.";
    }
    else if(aqi === 4){
        status = "Poor 😷";
        color = "#f44336";
        advice = "People with asthma should reduce outdoor exposure.";
    }
    else{
        status = "Very Poor 🚨";
        color = "#b71c1c";
        advice = "Avoid outdoor activities and follow medical advice.";
    }

    const aqiValue = document.getElementById("aqiValue");
    const aqiStatus = document.getElementById("aqiStatus");
    const aqiAdvice = document.getElementById("aqiAdvice");
    const lastUpdated = document.getElementById("lastUpdated");

    if(aqiValue){
        aqiValue.innerText = aqi;
        aqiValue.style.color = color;
    }

    if(aqiStatus){
        aqiStatus.innerText = status;
    }

    if(aqiAdvice){
        aqiAdvice.innerText = advice;
    }

    if(lastUpdated){
        const now = new Date();
        lastUpdated.innerText =
            "Updated: " + now.toLocaleTimeString();
    }

})

.catch(error => {

    console.error("Error:", error);

    const aqiValue = document.getElementById("aqiValue");
    const aqiStatus = document.getElementById("aqiStatus");

    if(aqiValue){
        aqiValue.innerText = "--";
    }

    if(aqiStatus){
        aqiStatus.innerText = "Unable to load AQI data";
    }

});

// Asthma Symptoms Checker

function checkSymptoms(){

    const symptoms =
    document.querySelectorAll(".symptom:checked");

    const result =
    document.getElementById("result");

    const count = symptoms.length;

    if(count === 0){

        result.innerHTML =
        "⚠ Please select at least one symptom.";

        result.style.color = "#ff9800";
    }

    else if(count <= 2){

        result.innerHTML =
        "🙂 Mild symptoms detected.<br>Please monitor your condition and consult a healthcare professional if symptoms continue.";

        result.style.color = "#4caf50";
    }

    else if(count <= 4){

        result.innerHTML =
        "😐 Multiple asthma-related symptoms detected.<br>Consider consulting a healthcare professional.";

        result.style.color = "#ff9800";
    }

    else{

        result.innerHTML =
        "🚨 Several asthma-related symptoms detected.<br>Please seek medical advice as soon as possible.";

        result.style.color = "#f44336";
    }

};

// FAQ


const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const faqItem = question.parentElement;

        faqItem.classList.toggle("active");

        const icon = question.querySelector("span");

        if(faqItem.classList.contains("active")){
            icon.innerText = "−";
        } else {
            icon.innerText = "+";
        }

    });

});


// Breathing Exercise Trainer

function startBreathing(){

    const circle =
    document.getElementById("breathingCircle");

    circle.innerText = "Inhale";

    circle.classList.add("expand");

    setTimeout(() => {

        circle.innerText = "Hold";

    },4000);

    setTimeout(() => {

        circle.innerText = "Exhale";

        circle.classList.remove("expand");

    },8000);

    setTimeout(() => {

        circle.innerText = "Completed ✅";

    },12000);

}