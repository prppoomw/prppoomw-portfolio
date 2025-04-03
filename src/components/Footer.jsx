const Footer = () => {

    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Dec 2024 Prppoomw</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://github.com/prppoomw" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src="./assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/poomrapee-wongchuea-9aa651299/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src="./assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2"/>
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.instagram.com/prppoom/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src="./assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2"/>
                    </a>
                </div>
            </div>
        </footer>
);
};

export default Footer;