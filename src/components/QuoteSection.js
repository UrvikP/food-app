import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faQuoteLeft, faQuoteRight} from"@fortawesome/free-solid-svg-icons"
export default function QuoteSection(){
    return (
        <div className="section quote">
            <p className="quote-text"> 
            <FontAwesomeIcon icon={faQuoteLeft}/>
                Food is everything we are. It's an extension of a nationalist feeling, 
                ethnic feeling, your personal history, your province, your religion, your tribe, 
                your grandma. It's inseparable from those from the get-go.
            <FontAwesomeIcon icon={faQuoteRight}/>
            </p>
            <p className="quote-author">
                Anthony Bourdain
            </p>
        </div>
    )
}