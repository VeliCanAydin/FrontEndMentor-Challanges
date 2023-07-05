import './CourseCard.css';

function CourseCard({title, img, text}) {
  return (
    <>
      <div className='card'>
        <img src={img} alt="" className='course-icon'/>
        <h2 className='card-title'>{title}</h2>
        <p className='card-text'>
          {text}
        </p>
        <a href='#' className='card-link'>Get Started</a>
      </div>
    </>
  );
}

export default CourseCard;
