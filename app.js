let button = document.querySelector('.search_button');
let div = document.querySelector('.main__container');
let input = document.querySelector('.search_style');

getPhotos();

button.addEventListener('click', getPhotos); 
input.addEventListener('keyup',function(e){
    if (e.key === 'Enter') {
        getPhotos();
    };
})
function getPhotos() {  
    div.innerHTML = ''; 
    let request = document.querySelector('.search_style').value;
    const key = 'N8xUIpesUuaBuYS5DB49XB1_jYgHNhbR7iongEdYD5g';
    const res = `https://api.unsplash.com/search/photos?client_id=${key}&query=${request}`;
    
    fetch(res)
     .then((res) => res.json())
     .then((data) => {            
        showData(data);
    });
}

function showData(data) {   
    console.log(data) 
    data.results.map(photo => {
        const img = document.createElement("img");
        img.src = photo.urls.regular;    
        img.classList.add('img-style');
        img.alt = photo.alt_description;          
        div.appendChild(img);            
    });    
}



