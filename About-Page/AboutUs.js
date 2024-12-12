import './Aboutus.css';
import p2 from './p2.jpg';
export default function AboutUs(){
    return(
        <div>

            <div className="image-container">
                <img src={p2} alt="Background" className="background-image" /> 
                <div className="overlay-text">
                    <h1>Fruits That Speak the Language of Love</h1>
                    <p>
                        Celebrate every moment with our handpicked collection of exotic fruits. 
                        Perfect for gifting or indulging yourself in nature's luxury.
                    </p>
                    <p>Buy fresh, stay healthy, and spread the love!</p>
                </div>
            </div>

        </div>
    )
}