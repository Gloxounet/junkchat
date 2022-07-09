import { Link } from "react-router-dom";
import './ButtonArrow.css';

export default function ButtonArrow({link_uri,text}) {
    return (
      <Link className="button-wrapper white" to={link_uri}>
        <span className="button-text">
          {text}
        </span>
        <img className='white' src='img/arrow.svg'alt=''/>
      </Link>
    );
}