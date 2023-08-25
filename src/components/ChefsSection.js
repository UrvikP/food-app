import ChefCard from "./ChefCard"

export default function ChefsSection(){
    const chefs = [
        {
            name: "Juan Carlos",
            img: "./img/top-chefs/img_1-2.jpg",
            recipesCount: "10",
            cuisine: "Mexican"
        },
        {
            name: "John Doe",
            img: "./img/top-chefs/img_2-2.jpg",
            recipesCount: "05",
            cuisine: "Japanese"
        },
        {
            name: "Erich Maria",
            img: "./img/top-chefs/img_3-2.jpg",
            recipesCount: "13",
            cuisine: "Italian"
        },
        {
            name: "Chris Brown",
            img: "./img/top-chefs/img_4-2.jpg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Blake Lively",
            img: "./img/top-chefs/img_5-2.jpg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Ben Affleck",
            img: "./img/top-chefs/img_6-2.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        },

    ]

    return (
        <div className="section chefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chefs-container">
                {chefs.map( chef => <ChefCard key={chef.name} chef={chef} /> )}
            </div>
        </div>
    )
}