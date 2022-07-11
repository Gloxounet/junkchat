import { Link } from "react-router-dom";
import styles from './ButtonArrow.module.css';

export default function ButtonArrow({link_uri,text,backgroundColor='var(--pink)',onClick=()=>{}}) {
    return (
      <Link onClick={onClick} className={styles.buttonWrapper +" white"} to={link_uri} style={{backgroundColor:backgroundColor}}>
        <span className={styles.buttonText}>
          {text}
        </span>
        <img className='white' src='img/arrow.svg'alt=''/>
      </Link>
    );
}