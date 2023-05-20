import { Link } from 'react-router-dom';
import logonew from '../../Utils/logonew.svg'
const Title = ()=>{
    return(
        <div>
            <Link to='/'>
            <img src={logonew} />
            </Link>
        </div>
    );
}

export default Title;