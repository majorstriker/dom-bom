const CLIENT_ID = "h_NwwmJhwYGCfDmYM0oQmM3BthI0DAF8no3z2st11cA";
const slider = document.getElementById("slider");

let state = [];
let currentSlide;

const fetchPhotos = async() => {
    try {
        const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=4`;
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok && data.length) {
            state = data;
            currentSlide = data[0].id;
            setPhotos();
        }
    } catch (err) {
        console.log(err);
    }
};

const renderItem = () => {
    return state
        .map(({ urls: { regular }, user: { name }, likes, id }) => {
            const isActive = currentSlide === id ? "active" : "";
            return `<div class="slide ${isActive}" data-id="${id}" style="background-image: url(${regular})">
                        <div class="slide-text"> 
                            <span>photo by</span>
                            ${name}
                            <span class="likes">Likes</span>
                            ${likes}
                            <button class="add_like">Like!</button>
                        </div>
                    </div>`;
        })
        .join("");
};

const handeClick = ({ currentTarget }) => {
    const slides = document.querySelectorAll('.slide');

    const { id } = currentTarget.dataset;

    if (id === currentSlide) return;

    slides.forEach((slide) => slide.classList.remove('active'));
    currentTarget.classList.add('active');
    currentSlide = id;
};

const setPhotos = () => {
    slider.innerHTML = renderItem();

    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => {
        slide.addEventListener('click', handeClick);
    });
};



fetchPhotos();