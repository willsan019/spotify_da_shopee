document.addEventListener('DOMContentLoaded', () => {

    const artistsdata = [
    {name: 'luisa sonsa', image: 'img/album-escandalo.jpg'},
    {name: 'billie elish', image: 'img/album-hit-me.jpg'},
    {name: 'vida loka', image: 'img/album-vida-loka.jpg'},
    {name: 'white noise', image: 'img/album-white-noise.jpg'},
    {name: 'jorge e matheus', image: 'img/artista-jorge-mateus.jpg'},
];

const albunsdata = [
    {name: 'luisa sonsa', image: 'img/album-escandalo.jpg'},
    {name: 'billie elish', image: 'img/album-hit-me.jpg'},
    {name: 'vida loka', image: 'img/album-vida-loka.jpg'},
    {name: 'white noise', image: 'img/album-white-noise.jpg'},
    {name: 'jorge e matheus', image: 'img/artista-jorge-mateus.jpg'},
];

const artistGrid = document.querySelector('.artists-grid');
const albunsGrid = document.querySelector('.albuns-grid');

artistsdata.forEach(artist => { 
    const artistCard = document.createElement('div');
    artistCard.classList.add('artist-card');

    artistCard.innerHTML = `
        <img src="${artist.image}" alt="${artist.name}">
        <div>
            <h3>${artist.name}</h3>
            <p>artista</p>
        </div>
    `

    artistGrid.appendChild(artistCard);
    })

    albunsdata.forEach(albun => { 
    const albunCard = document.createElement('div');
    albunCard.classList.add('albun-card');

    albunCard.innerHTML = `
        <img src="${albun.image}" alt="${albun.name}">
        <div>
            <h3>${albun.name}</h3>
            <p>artista</p>
        </div>
    `

    albunsGrid.appendChild(albunCard);
    })
})