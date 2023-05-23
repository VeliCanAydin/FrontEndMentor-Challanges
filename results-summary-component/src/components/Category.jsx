import './category.css';

export default function Category({ category, score, icon }) {
  return (
    <div className={'category'} id={category.toLowerCase()}>
      <div className='image-heading'>
        <img src={icon} alt={category + ' Icon'} />
        <h1 className='heading' id={category.toLowerCase() + "-heading"} >{category}</h1>
      </div>
      <div className='score-percentage'>
        <p id='score'>{score}</p>
        <p id='percentage'>/ 100</p>
      </div>
    </div>
  );
}
