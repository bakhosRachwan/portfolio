import movieImg from "./movies.png";
import portfolioImg from "./portfolio.png";
import todoImg from "./todo.png";
import quizImg from "./quiz-1.jpg";
import dnlImg from "./dnl.jpg";

export const projects =[
    {
        id: 1,
        name: "Portfolio",
        img: portfolioImg,
        description: "My personal website the one you are in right now feel free to check the code on github.",
        link: "https://github.com/bakhosRachwan/portfolio",
        demo: "https://bakhos-rachwan.netlify.app/"
    },
    {
        id: 2,
        name: "Discover North Lebanon",
        img: dnlImg,
        description: "Discover North Lebanon is a web application built with reactjs. It allows you to explore different cities and activities that can be done in north Lebanon.",
        link: "https://github.com/bakhosRachwan/discover-north-lebanon",
        demo: "https://discover-north-lebanon-450b7.web.app/"
    },
    {
        id: 3,
        name: "Movie App",
        img: movieImg,
        description: "An App that fetches movies from TMDB API and you can search by name and genre. Each movie lists rating, trailer and actress information.",
        link: "https://github.com/bakhosRachwan/movie-app-react-js",
        demo: "https://mjbs-movie-app.netlify.app/"
    },
    {
        id: 4,
        name: "Todo List",
        img: todoImg,
        description: "Todo list app that manages tasks.",
        link: "https://github.com/bakhosRachwan/todo-list",
        demo: "https://ecstatic-todo.netlify.app/"
    },
    {
        id: 5,
        name: "Trivia quiz app",
        img: quizImg,
        description: "Like the name implies its a questions game. the app fetches questions from API and the user can choose from different settings.",
        link: "https://github.com/bakhosRachwan/quiz-game",
        demo: "https://trivia-quiz-night-app.netlify.app/"
    },
    {
        id: 6,
        name: "Wallet Manager",
        img: "https://img.freepik.com/free-vector/coming-soon-message-illuminated-with-light-projector_1284-3622.jpg?size=338&ext=jpg",
        description: "Your electronic Wallet thet keep track of all you Income and Expenses.",
        link: "https://github.com/bakhosRachwan/the-wallet-manager",
        demo: ""
    }
]