// const form = document.querySelector('.collectReward');

// const axios = require("axios");

const getNames = () => {
    axios.post("http://localhost:5501/api/names", ('.collectReward')).then( (response) => {
        console.log(response);
    }).catch(console.log) 
};
getNames()


// window.location.search = ?name=sai&score=10

const params = new URLSearchParams(window.location.search);
const name = params.get("firstname");
console.log(name);

const imageContainer = document.querySelector('#certificateContainer')
const awardee = document.createElement('strong')
awardee.innerText = name;
imageContainer.appendChild(awardee)

//We want to delete the name that was just posted
const deleteName = () => {
    axios.delete("http://localhost:5501/api/names").then( (response) => {
        window.location.href = `/collectYouReward.html?firstname=${response.data}`;
    }).catch(console.log)
};
const deleteTheName = document.querySelector('#deleteReward')
deleteTheName.addEventListener('click', deleteName)

console.log("end of script");