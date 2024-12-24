import './Footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="social-links">

                <a href="https://instagram.com/mazzola_" target="_blank" rel="noopener noreferrer">
                    <img src="/img/ig.png" alt="Instagram"/>
                </a>

                <a href="https://github.com/vicmazzola" target="_blank" rel="noopener noreferrer">
                    <img src="/img/GitHub_final.png" alt="GitHub"/>
                </a>

            </div>
            <p>Developed by Victor</p>
        </footer>
    );
}
