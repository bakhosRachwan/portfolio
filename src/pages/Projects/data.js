import movieImg from "./movies.png";
import portfolioImg from "./portfolio.png";
import todoImg from "./todo.png";

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
        name: "Movie App",
        img: movieImg,
        description: "An App that fetches movies from TMDB API and you can search by name and genre. Each movie lists rating, trailer and actress information.",
        link: "https://github.com/bakhosRachwan/movie-app-react-js",
        demo: "https://mjbs-movie-app.netlify.app/"
    },
    {
        id: 3,
        name: "Todo List",
        img: todoImg,
        description: "Todo list app that manages tasks.",
        link: "https://github.com/bakhosRachwan/todo-list",
        demo: "https://ecstatic-todo.netlify.app/"
    }
]