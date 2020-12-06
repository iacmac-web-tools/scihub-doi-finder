if (!localStorage.sciHubUrl)
    localStorage.sciHubUrl = "https://sci-hub.do/";
document.getElementById('url').value = localStorage.sciHubUrl;

document.getElementById('formSciHub').onsubmit = function () {
    localStorage.sciHubUrl = document.getElementById('url').value.trim();
    alert('New url ' + localStorage.sciHubUrl + ' saved');
    return true;
};