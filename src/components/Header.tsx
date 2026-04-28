import { Link } from 'react-router-dom';
import '../index.css';

export default function Header(){
    return (
        <div className='header'>
            <img className='logo' src='../../public/images/tajine.jpeg' alt="tajine" />
            <div className="header-row">
            <h2 className='app-subtitle'>Find your favorites Morocan Product here !</h2>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/wishlist">WishList</Link>
              </li>
            </ul>
          </nav>

         
        </div>
        </div>
    );
}