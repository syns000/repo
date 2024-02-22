let eurBtn = document.getElementById("EurBtn");
let engBtn = document.getElementById("EngBtn");
let mkdBtn = document.getElementById("MkdBtn");
let input = document.getElementById("input");
let search = document.getElementById("search");
let reset = document.getElementById("reset");
let result = document.getElementById("resultContainer");
let container = document.getElementById("container");
let spinner = document.getElementById("spinner");
async function caller(country) {
    try {
        spinner.style.display = "block";
        let response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        let data = await response.json();
        result.innerHTML = ``;
        container.style.backgroundColor = `aliceblue`;
        for (let i = 0; i < data.length; i++) {
            result.innerHTML += `
        <div style="background-color: rgb(0, 0, 255, 0); margin-left: 15px; margin-right: 15px; border: 1px solid white;">
        <img src="${data[i].flags.png}" alt="" style="width: 100%; height: 200px;">
        <p style="color: black;text-align: center; font-weight: 700">${data[i].name.common}</p>
        <p style="color: black; padding: 10px">${data[i].name.common} is country with population of ${data[i].population} with the capital city of ${data[i].capital[0]}.</p>
        <hr style="color: black; background-color: black">
        <p style="text-align: center; color: black"><span style="font-weight: bold">Open on </span><a href="https://en.wikipedia.org/wiki/${data[i].name.common}" target="_blank" style="color: blue; text-decoration: none">Wikipedia</a> </p>
        </div>`;
        }
        
    }
    catch (error) { console.error(`Something is wrong with calling the function: ${error}`); }
    finally {
        let time = new Date();
        console.log(`The function is called at ${time}`);
        spinner.style.display = "none";
    }
};
mkdBtn.addEventListener("click", () => {
    caller("macedonia");
});
search.addEventListener("click", () => {
    caller(input.value);
});
reset.addEventListener("click", () => {
    input.value = "";
    result.innerHTML = "";
    container.style.backgroundColor = `white`;
});
let countryes = [];
async function defaultCaller() {
    let response = await fetch(`https://restcountries.com/v3.1/all`);
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
        countryes.push(data[i]);
    }
};
defaultCaller();

function countryesUsingEUR() {
    spinner.style.display = "block";
    for (let i = 0; i < countryes.length; i++) {
        if (countryes[i].currencies.EUR) {
            result.innerHTML += `
        <div style="background-color: rgb(0, 0, 255, 0); margin-left: 15px; margin-right: 15px; border: 1px solid black;">
        <img src="${countryes[i].flags.png}" alt="" style="width: 100%; height: 200px;">
        <p style="color: black;text-align: center; font-weight: 700">${countryes[i].name.common}</p>
        <p style="color: black; padding: 10px">${countryes[i].name.common} is country with population of ${countryes[i].population} with the capital city of ${countryes[i].capital[0]}.</p>
        <hr style="color: black; background-color: black">
        <p style="text-align: center; color: black"><span style="font-weight: bold">Open on </span><a href="https://en.wikipedia.org/wiki/${countryes[i].name.common}" target="_blank" style="color: blue; text-decoration: none">Wikipedia</a> </p>
        </div>`;
        };
    };
    spinner.style.display = "none";
};

eurBtn.addEventListener("click", () => {
    result.innerHTML = ``;
    container.style.backgroundColor = `aliceblue`;
    setTimeout(() => {
        spinner.style.display = "none";
    }, 500);
    countryesUsingEUR();
});

function countryesTalkingENG() {
    spinner.style.display = "block";
    for (let i = 0; i < countryes.length; i++) {
        if (countryes[i].languages.eng) {
            result.innerHTML += `
        <div style="background-color: rgb(0, 0, 255, 0); margin-left: 15px; margin-right: 15px; border: 1px solid black; border-radius: 25px;">
        <img src="${countryes[i].flags.png}" alt="" style="width: 100%; height: 200px; border-radius: 25px">
        <p style="color: black;text-align: center; font-weight: 700">${countryes[i].name.common}</p>
        <p style="color: black; padding: 10px">${countryes[i].name.common} is country with population of ${countryes[i].population} with the capital city of ${countryes[i].capital[0]}.</p>
        <hr style="color: black; background-color: black">
        <p style="text-align: center; color: black"><span style="font-weight: bold">Open on </span><a href="https://en.wikipedia.org/wiki/${countryes[i].name.common}" target="_blank" style="color: blue; text-decoration: none">Wikipedia</a> </p>
        </div>`;
        };
    };
};

engBtn.addEventListener("click", () => {
    result.innerHTML = ``;
    container.style.backgroundColor = `aliceblue`;
    setTimeout(() => {
        spinner.style.display = "none";
    }, 500);
    countryesTalkingENG();
});







    












