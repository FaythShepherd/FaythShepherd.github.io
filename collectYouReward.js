const getNames = () => {
    axios.post("http://localhost:5501/api/names", ('.collectReward')).then( (response) => {
        console.log(response);
    }).catch(console.log) 
};
getNames()