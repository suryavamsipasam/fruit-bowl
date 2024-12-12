import p1 from './p1.jpg';
import p6 from './p6.avif';
import p3 from './p3.jpg';
import home2 from './home2.jpg';
import  './HomeCss.css';
const Home = () => {
    return (
        <div >

            <div className="home-container">
                <img src={p1} alt="Fresh Produce" className="home-image" />
                <div className="home-text">
                    <h3>Freshness Delivered to You...</h3>
                    <p>Enjoy the best quality fruits and Fruit Bowls directly from the farm to you !!!</p>
                    <p id='p1'>Relish the taste of Fresh-Farm fruits packed with nutrients and flavor, perfect for your healthy lifestyle.  </p>
                    <p id='p1'>Every bite tells a story of quality, freshness, and love. Discover the true essence of natural fruits and bowls.

</p>
                </div>
            </div>
            
            <div className="home-container">
                <img src={p3} alt="fruit bowl" className="home-image2" />
                <div className="home-text">
                    <h3>The Sweetness of Nature, Packed for You...</h3>
                    <p>Savor the taste of freshly squeezed juices made from the best seasonal fruits.</p>
                    <p id='p1'>Discover the richness of natural fruits, perfect for snacking, blending, or sharing with loved ones.</p>
                    <p id='p1'>Our fruits are bursting with flavor, freshness, and goodness in every sip and bite.</p>
                </div>
            </div>

            
            <div className="home-container">
                <img src={p6} alt="Special Offer" className="home-image" />
                <div className="home-text">
                    <h3> Fruits That Speak the Language of Love...</h3>
                    <p id='p'>
                        Celebrate every moment with our handpicked collection of exotic fruits. Perfect for gifting or indulging yourself in nature's luxury.
                    </p>
                    <p id='p1'>
                         Buy fresh, stay healthy, and spread the love!
                    </p>
                </div>
            </div>

            <div className="home-container">
                <img src={home2} alt="Special Offer" className="home-image" />
                <div className="home-text">
                    <h3> "Nature’s Basket of Happiness"</h3>
                    <p id='p'>
                    Experience the joy of premium fruits that bring health and happiness to your life.
                     Handpicked with love, our fresh collection is perfect for every occasion.
                    </p>
                    <p id='p1'>
                    Stay vibrant, eat fresh, and cherish the taste of nature!
                    </p>
                </div>
            </div>

        </div>

        

        
    );
};

export default  Home;
