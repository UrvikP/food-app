import CustomImage from "./CustomImage"
export default function HeroSection(){
    const images = [
        "./img/gallery/img_1.jpg",
        "./img/gallery/img_2.jpg",
        "./img/gallery/img_3.jpg",
        "./img/gallery/img_4.jpg",
        "./img/gallery/img_5.jpg",
        "./img/gallery/img_6.jpg",
        "./img/gallery/img_7.jpg",
        "./img/gallery/img_8.jpg",
        "./img/gallery/img_9.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What We Are About</h1>
                <p className="info">FoodHub is a place for foodies all around the world to satisfy their craving for delicious food recipes. Our service is free so what are you waiting for? Explore now!</p>
                <button className="btn">Explore Now</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                ))}
            </div>
        </div>
    )
}