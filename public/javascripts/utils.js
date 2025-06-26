let offset = 0;
let btnLoadNext = document.getElementById('load-next');
let btnLoadPrevious = document.getElementById('load-previous');
let titleSection = document.getElementById('title-section');
let contentSection = document.getElementById('content-section');
let dateSection = document.getElementById('date-section');

function loadMore(offset) {        

    fetch(`/post/offset/${offset}`, {method: 'get'})
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error){
        console.log(error);
    });

}

async function loadNext() {

    try {
        offset += 1;
        const response = await fetch(`/post/offset/${offset}`, {method: 'get'});
    
        if (!response.ok) throw new Error(`Response status: ${response.status}`);
        
        const json = await response.json();

        titleSection.innerHTML = json[0].TITLE;
        contentSection.innerHTML = json[0].CONTENT;
        dateSection.innerHTML = json[0].CREATE_DATE;

    } catch (error) { console.log(error); }

}

async function loadPrevious() {

    try {
        offset -= 1;
        const response = await fetch(`/post/offset/${offset}`, {method: 'get'});
    
        if (!response.ok) throw new Error(`Response status: ${response.status}`);
        
        const json = await response.json();

        titleSection.innerHTML = json[0].TITLE;
        contentSection.innerHTML = json[0].CONTENT;
        dateSection.innerHTML = json[0].CREATE_DATE;

    } catch (error) { console.log(error); }

}

btnLoadNext.addEventListener('click', loadNext)
btnLoadPrevious.addEventListener('click', loadPrevious)