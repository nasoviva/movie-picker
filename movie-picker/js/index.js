const moviesData = {
    1: [
        { title: "The Gray Man", img: "../assets/images/movie_1.png", imdb: "https://www.imdb.com/title/tt1649418/" },
        { title: "Blonde", img: "../assets/images/movie_2.png", imdb: "https://www.imdb.com/title/tt1745960/" },
        { title: "Minions: The Rise of Gru", img: "../assets/images/movie_3.png", imdb: "https://www.imdb.com/title/tt5113044/" },
    ],
    2: {
        1: [
            { title: "Top Gun: Maverick", img: "../assets/images/movie_4.png", imdb: "https://www.imdb.com/title/tt1745960/" },
            { title: "Bullet Train", img: "../assets/images/movie_5.png", imdb: "https://www.imdb.com/title/tt12593682/" },
            { title: "Thor: Love and Thunder", img: "../assets/images/movie_6.png", imdb: "https://www.imdb.com/title/tt10648342/" },
        ],
        2: [
            { title: "Purple Hearts", img: "../assets/images/movie_7.png", imdb: "https://www.imdb.com/title/tt1234567/" },
            { title: "Black Panther: Wakanda Forever", img: "../assets/images/movie_8.png", imdb: "https://www.imdb.com/title/tt9114286/" },
            { title: "The Godfather", img: "../assets/images/movie_9.png", imdb: "https://www.imdb.com/title/tt0068646/" },
        ],
        3: [
            { title: "Sing 2", img: "../assets/images/movie_10.png", imdb: "https://www.imdb.com/title/tt6467266/" },
            { title: "The Secret Life of Pets", img: "../assets/images/movie_11.png", imdb: "https://www.imdb.com/title/tt2709768/" },
            { title: "Despicable Me", img: "../assets/images/movie_12.png", imdb: "https://www.imdb.com/title/tt0479952/" },
        ],
    },
    3: {
        "Top Gun: Maverick": [
            { title: "Interstellar", img: "../assets/images/movie_13.png", imdb: "https://www.imdb.com/title/tt0816692/" },
            { title: "Gravity", img: "../assets/images/movie_14.png", imdb: "https://www.imdb.com/title/tt1454468/" },
            { title: "Dune", img: "../assets/images/movie_15.png", imdb: "https://www.imdb.com/title/tt1160419/" },
        ],
        "Bullet Train": [
            { title: "John Wick", img: "../assets/images/movie_16.png", imdb: "https://www.imdb.com/title/tt2911666/" },
            { title: "The Expendables", img: "../assets/images/movie_17.png", imdb: "https://www.imdb.com/title/tt1320253/" },
            { title: "Mission: Impossible", img: "../assets/images/movie_18.png", imdb: "https://www.imdb.com/title/tt0117060/" },
        ],
        "Thor: Love and Thunder": [
            { title: "Iron Man", img: "../assets/images/movie_19.png", imdb: "https://www.imdb.com/title/tt0371746/" },
            { title: "Spider-Man: Into the Spider-Verse", img: "../assets/images/movie_20.png", imdb: "https://www.imdb.com/title/tt4633694/" },
            { title: "Captain Marvel", img: "../assets/images/movie_21.png", imdb: "https://www.imdb.com/title/tt4154664/" },
        ],
        "Purple Hearts": [
            { title: "La La Land", img: "../assets/images/movie_22.png", imdb: "https://www.imdb.com/title/tt3783958/" },
            { title: "The Fault in Our Stars", img: "../assets/images/movie_23.png", imdb: "https://www.imdb.com/title/tt2582846/" },
            { title: "Melancholia", img: "../assets/images/movie_24.png", imdb: "https://www.imdb.com/title/tt1527186/" },
        ],
        "Black Panther: Wakanda Forever": [
            { title: "Avengers: Endgame", img: "../assets/images/movie_25.png", imdb: "https://www.imdb.com/title/tt4154796/" },
            { title: "Black Widow", img: "../assets/images/movie_26.png", imdb: "https://www.imdb.com/title/tt3480822/" },
            { title: "Guardians of the Galaxy", img: "../assets/images/movie_27.png", imdb: "https://www.imdb.com/title/tt2015381/" },
        ],
        "The Godfather": [
            { title: "Scarface", img: "../assets/images/movie_28.png", imdb: "https://www.imdb.com/title/tt0086250/" },
            { title: "Casino", img: "../assets/images/movie_29.png", imdb: "https://www.imdb.com/title/tt0112641/" },
            { title: "Once Upon a Time in America", img: "../assets/images/movie_30.png", imdb: "https://www.imdb.com/title/tt0087843/" },
        ],
        "Sing 2": [
            { title: "Song of the Sea", img: "../assets/images/movie_31.png", imdb: "https://www.imdb.com/title/tt1865505/" },
            { title: "Shrek", img: "../assets/images/movie_32.png", imdb: "https://www.imdb.com/title/tt0126029/" },
            { title: "Coco", img: "../assets/images/movie_33.png", imdb: "https://www.imdb.com/title/tt2380307/" },
        ],
        "The Secret Life of Pets": [
            { title: "Finding Nemo", img: "../assets/images/movie_34.png", imdb: "https://www.imdb.com/title/tt0266543/" },
            { title: "Frozen", img: "../assets/images/movie_35.png", imdb: "https://www.imdb.com/title/tt2294629/" },
            { title: "Ratatouille", img: "../assets/images/movie_36.png", imdb: "https://www.imdb.com/title/tt0382932/" },
        ],
        "Despicable Me": [
            { title: "The Incredibles", img: "../assets/images/movie_37.png", imdb: "https://www.imdb.com/title/tt0317705/" },
            { title: "The Boss Baby", img: "../assets/images/movie_38.png", imdb: "https://www.imdb.com/title/tt3874544/" },
            { title: "Toy Story", img: "../assets/images/movie_39.png", imdb: "https://www.imdb.com/title/tt0114709/" },
        ],
    },
};

let currentQuestion = 1;
let selectedMovies = [];

function nextQuestion(selectedMovieIndex) {
    console.log(`[nextQuestion] User selected movie index: ${selectedMovieIndex} at question ${currentQuestion}`);
    selectedMovies.push(selectedMovieIndex);

    if (currentQuestion < 3) {
        currentQuestion++;
        const nextMovies = currentQuestion === 2
            ? moviesData[2][selectedMovies[0]]
            : moviesData[3][moviesData[2][selectedMovies[0]][selectedMovies[1] - 1].title];

        updateQuestion(currentQuestion, nextMovies);
        
        setTimeout(() => {
            const nextPossibleImages = getNextPossibleImages(selectedMovies, currentQuestion);
            if (nextPossibleImages.length > 0) {
                console.log(`[nextQuestion] Preloading ${nextPossibleImages.length} images for next question in background`);
                preloadImages(nextPossibleImages, "low");
            }
        }, 100);
    } else {
        showResult();
    }
}

function updateQuestion(questionNumber, movies) {
    console.log(`[updateQuestion] Updating to question ${questionNumber} with ${movies.length} movies`);
    
    const dotsTitle = document.querySelector(".dots-title");
    dotsTitle.textContent = `Question ${questionNumber} of 3:`;

    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === questionNumber - 1);
    });

    const questionTitle = document.querySelector(".question-title");
    if (questionNumber === 1) {
        questionTitle.textContent = "Choose one of the three movies";
    } else if (questionNumber === 2) {
        questionTitle.textContent = "Which one do you like the most?";
    } else if (questionNumber === 3) {
        questionTitle.textContent = "Which one do you want to watch now?";
    }

    const moviesWrapper = document.querySelector(".movies-wrapper");
    moviesWrapper.innerHTML = "";

    const fetchPriority = questionNumber === 1 ? "high" : "auto";
    const loadingAttr = questionNumber === 1 ? "eager" : "lazy";

    movies.forEach((movie, index) => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");
        
        const img = document.createElement("img");
        img.src = movie.img;
        img.alt = movie.title;
        img.loading = loadingAttr;
        img.fetchPriority = fetchPriority;
        img.decoding = "async";
        
        img.onerror = function() {
            console.error(`[Image Load Error] Failed to load image: ${movie.img}`);
            this.style.backgroundColor = "#333";
            this.style.display = "flex";
            this.style.alignItems = "center";
            this.style.justifyContent = "center";
            this.alt = `${movie.title} - Image not available`;
        };
        
        img.onload = function() {
            console.log(`[Image Load] Successfully loaded: ${movie.img}`);
        };
        
        movieDiv.appendChild(img);
        movieDiv.onclick = () => nextQuestion(index + 1);
        moviesWrapper.appendChild(movieDiv);
    });
}

function showResult() {
    document.querySelector(".question").classList.remove("active");
    document.querySelector(".result-wrapper").classList.add("active");

    const lastSelectedIndex = selectedMovies[selectedMovies.length - 1] - 1;
    const secondQuestionMovies = moviesData[2][selectedMovies[0]];
    const selectedSecondMovie = secondQuestionMovies[selectedMovies[1] - 1];
    const finalMovies = moviesData[3][selectedSecondMovie.title];
    const finalMovie = finalMovies[lastSelectedIndex];

    const imdbButton = document.getElementById("imdbButton");
    imdbButton.onclick = function () {
        window.location.href = finalMovie.imdb;
    };
}

function preloadImages(imageUrls, priority = "low") {
    console.log(`[preloadImages] Preloading ${imageUrls.length} images with priority: ${priority}`);
    
    imageUrls.forEach((url) => {
        const img = new Image();
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = url;
        link.fetchPriority = priority;
        document.head.appendChild(link);
        
        img.src = url;
        img.onload = () => {
            console.log(`[preloadImages] Preloaded: ${url}`);
            link.remove();
        };
        img.onerror = () => {
            console.error(`[preloadImages] Failed to preload: ${url}`);
            link.remove();
        };
    });
}

function getNextPossibleImages(selectedMovies, currentQuestion) {
    const nextImages = [];
    
    if (currentQuestion === 1) {
        Object.values(moviesData[2]).forEach(movies => {
            movies.forEach(movie => {
                if (movie.img) nextImages.push(movie.img);
            });
        });
    } else if (currentQuestion === 2 && selectedMovies.length > 0) {
        const secondQuestionMovies = moviesData[2][selectedMovies[0]];
        if (secondQuestionMovies) {
            secondQuestionMovies.forEach(movie => {
                const thirdQuestionMovies = moviesData[3][movie.title];
                if (thirdQuestionMovies) {
                    thirdQuestionMovies.forEach(m => {
                        if (m.img) nextImages.push(m.img);
                    });
                }
            });
        }
    }
    
    return nextImages;
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("[DOMContentLoaded] Initializing movie picker");
    
    const firstMovies = moviesData[1];
    updateQuestion(1, firstMovies);
    
    setTimeout(() => {
        const nextPossibleImages = getNextPossibleImages([], 1);
        if (nextPossibleImages.length > 0) {
            console.log(`[DOMContentLoaded] Preloading ${nextPossibleImages.length} images for question 2 in background`);
            preloadImages(nextPossibleImages, "low");
        }
    }, 500);
});
