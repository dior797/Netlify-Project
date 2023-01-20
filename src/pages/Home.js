import './PageCss/Home.css'
import Vintage from '../thriftstore.jpg'
  const Home = () => {
    return(
      <>
      <div className='Home-all'>
        <img src={Vintage}  id='log' width='100%' height="auto" alt='Clothes'></img>
        <div className='titlediv'>
        <p className='title'><b>Shop Smart, Shop Thrift!</b></p>
        <p className='desc'><b>Unlock your style at Land-Locked Thrift Shop</b></p>
        <a href="./shop"><button className='titlebut'>Explore</button></a>
        </div>
        </div>
        
        <div className='Home-title'>Subscribe to Our Newsletter!</div>
                    <div className='Home-form'>
                        <form className="Home-form">
                            <input
                                id="Home"
                                class="form-Button"
                                type="text"
                                placeholder="Your name"
                                name="YourName" required />
                                <input
                                id="Your-Name"
                                class="form-Button"
                                type="text"
                                placeholder="Your name"
                                name="YourName" required />
                                </form>
                                </div>
      </>
      
    )
  };
  
  export default Home;
