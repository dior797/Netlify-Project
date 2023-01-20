import '../pages/PageCss/Navbar.css'
import newlogo from '../Meow.png'
const top = () => {
  return (
    <>
      <div className='Subscribe'><a href="" className='Subscribe'><u>Subscribe Now!</u></a> And get 80% off your next in store purchase</div>
      <div className='all'>
        <a href="/"><img src={newlogo} id="Image" height="auto" alt='logo'></img></a>
        <a href="./" className='nav'><b>Home</b></a>
        <a href="./shop" className='nav'><b>Inventory</b></a>
        <a href="./ship" className='nav'><b>Donate</b></a>
        <a href="./about" className='nav'><b>About</b></a>
        <a href="./contact" className='nav'><b>Information</b></a>

      </div>
    </>
  )
};

export default top;