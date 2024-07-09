import { ReactComponent as Star } from '../assets/star.svg'

export const Rating = (props) => {
    const roundedRating = Math.round(props.rating);

    return (
      <div className={`flex flex-row gap-[2px]`}>
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} className="scale-[.80]" style={{color:`${index < roundedRating ? '#383452' : '#ffffff'}`}}  />
        ))}
      </div>
    );
  };