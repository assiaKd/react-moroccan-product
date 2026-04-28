import '../index.css';

export default function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer className='footer'>
            <p className='footer-text'> 
            © {currentYear} Morocan Products
            </p>
        </footer>
    );
}