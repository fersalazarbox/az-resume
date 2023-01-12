
window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})
const functionApiUrl = 'https://func-portfolio-prod-lfso.azurewebsites.net/api/GetResumeCounter?code=TFzbDpnl_GgJsX6cKdXgBveRdKyYgDf4vTVluH0o6zlkAzFuK4Wa5g==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () =>{
    let count =30;
    fetch(functionApiUrl).then(response =>{
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText=count;
    }).catch(function(error) {
        console.log(error);
    });
    return count;
}