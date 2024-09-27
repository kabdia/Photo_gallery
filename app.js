let button = document.querySelector('.search_button');
let div = document.querySelector('.main__container');
let input = document.querySelector('.search_style');
let close = document.querySelector('.search_close');


button.addEventListener('click', getPhotos); 
input.addEventListener('keyup',function(e){
    if (e.key === 'Enter') {
        getPhotos();
    };
})
input.addEventListener('input', function() {
    close.classList.remove('noactive');
    close.addEventListener('click', function() {
        input.value = '';
        close.classList.add('noactive');
    })
});

function getPhotos() {  
    div.innerHTML = ''; 
    const key = 'N8xUIpesUuaBuYS5DB49XB1_jYgHNhbR7iongEdYD5g';
    const request = document.querySelector('.search_style').value;
    const res = `https://api.unsplash.com/search/photos?client_id=${key}&query=${request}`;
      
    fetch(res)
     .then((res) => res.json())
     .then((data) => {  
        console.log(data)                 
        showData(data);       
    });    
}

function showData(data) {       
    if (data.results.length) {
        data.results.map(photo => {
            const img = document.createElement("img");
            img.src = photo.urls.regular;    
            img.classList.add('img-style');
            img.alt = photo.alt_description;          
            div.appendChild(img);            
        });
    } else {
        showError();
    }
        
}

function showError(){
    div.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('container_p');
    p.innerHTML = 'Фото на данную тематику отсутствуют. Переформулируйте запрос';
    div.appendChild(p);
}


