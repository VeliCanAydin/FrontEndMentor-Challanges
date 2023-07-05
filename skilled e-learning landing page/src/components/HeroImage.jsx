import './HeroImage.css';

function HeroImage() {
  return (
    <>
      <div className='hero-image-group'>
        <div className='members popup'>
          <h2 className='popup-heading'>Members</h2>
          <span className='popup-text'>29k</span>
        </div>
        <div className='hours popup'>
          <h2 className='popup-heading'>Course Hours</h2>
          <span className='popup-text'>1,451</span>
        </div>
        <div className='hero-container'>
          <img src='images/hero-image.png' alt='' className='hero-image' />
        </div>
      </div>
    </>
  );
}

export default HeroImage;
