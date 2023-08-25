import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
export default function Footer(){
    return (
        <div className="footer">
            <div className="footer-section">
                <p className="title">FoodHub.com</p>
                <p>FoodHub is the place to get your daily fix of the best food
                    recipes to fill your soul and belly with delightful sensations.
                </p>
                <p>&copy; 2021 | All rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>foodhub@gmail.com</p>
                <p>420-555-6969</p>
                <p>123 Hub Street New York, New York 10001</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <p className="facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                </p>
                <p className="twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                </p>
                <p className="instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </p>
            </div>
        </div>
    )
}