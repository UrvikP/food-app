import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Pepperoni Pizza",
            image: "./img/gallery/img_1.jpg",
            authorImg: "./img/top-chefs/img_1-2.jpg",
            description: "Fluffy dough topped with mozarella cheese and pepperoni.",
        },
        {
            title: "Spaghetti and Meatballs",
            image: "./img/gallery/img_4.jpg",
            authorImg: "./img/top-chefs/img_2-2.jpg",
            description: "Spaghetti cooked in a creamy meat sauce, topped with juicy meatballs.",
        },
        {
            title: "Cheeseburger",
            image: "./img/gallery/img_5.jpg",
            authorImg: "./img/top-chefs/img_3-2.jpg",
            description: "Classic cheeseburger with lettuce, tomato, mayo, American cheese and beef patty.",
        },
        {
            title: "Mutton Biriyani",
            image: "./img/gallery/img_6.jpg",
            authorImg: "./img/top-chefs/img_5-2.jpg",
            description: "Special rice mix packed with flavor.",
        },
        {
            title: "Sushi",
            image: "./img/gallery/img_10.jpg",
            authorImg: "./img/top-chefs/img_6-2.jpg",
            description: "Variety of sushi, each with unique flavors.",
        },
        {
            title: "Pepperoni Pizza",
            image: "./img/gallery/img_1.jpg",
            authorImg: "./img/top-chefs/img_1-2.jpg",
            description: "Fluffy dough topped with mozarella cheese and pepperoni.",
        },
        {
            title: "Spaghetti and Meatballs",
            image: "./img/gallery/img_4.jpg",
            authorImg: "./img/top-chefs/img_2-2.jpg",
            description: "Spaghetti cooked in a creamy meat sauce, topped with juicy meatballs.",
        },
        {
            title: "Cheeseburger",
            image: "./img/gallery/img_5.jpg",
            authorImg: "./img/top-chefs/img_3-2.jpg",
            description: "Classic cheeseburger with lettuce, tomato, mayo, American cheese and beef patty.",
        },
        {
            title: "Mutton Biriyani",
            image: "./img/gallery/img_6.jpg",
            authorImg: "./img/top-chefs/img_5-2.jpg",
            description: "Special rice mix packed with flavor.",
        },
        {
            title: "Sushi",
            image: "./img/gallery/img_10.jpg",
            authorImg: "./img/top-chefs/img_6-2.jpg",
            description: "Variety of sushi, each with unique flavors.",
        },
        {
            title: "Pepperoni Pizza",
            image: "./img/gallery/img_1.jpg",
            authorImg: "./img/top-chefs/img_1-2.jpg",
            description: "Fluffy dough topped with mozarella cheese and pepperoni.",
        },
        {
            title: "Spaghetti and Meatballs",
            image: "./img/gallery/img_4.jpg",
            authorImg: "./img/top-chefs/img_2-2.jpg",
            description: "Spaghetti cooked in a creamy meat sauce, topped with juicy meatballs.",
        },
        {
            title: "Cheeseburger",
            image: "./img/gallery/img_5.jpg",
            authorImg: "./img/top-chefs/img_3-2.jpg",
            description: "Classic cheeseburger with lettuce, tomato, mayo, American cheese and beef patty.",
        },
        {
            title: "Mutton Biriyani",
            image: "./img/gallery/img_6.jpg",
            authorImg: "./img/top-chefs/img_5-2.jpg",
            description: "Special rice mix packed with flavor.",
        },
        {
            title: "Sushi",
            image: "./img/gallery/img_10.jpg",
            authorImg: "./img/top-chefs/img_6-2.jpg",
            description: "Variety of sushi, each with unique flavors.",
        }
    ].sort( () => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}