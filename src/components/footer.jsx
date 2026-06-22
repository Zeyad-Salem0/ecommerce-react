import "./footer.css";
import {
  Send as SendIcon,
  Copyright as CopyrightIcon,
  Facebook as FacebookIcon,
  X as XIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import google from "./assets/googlePlay.svg";
import app from "./assets/appStore.svg";
import qrCode from "./assets/qrcode.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* column 1 */}
        <div className="footer-col1">
          <h2>Exclusive</h2>
          <h4>subscribe</h4>
          <p>Get 10% off your first order</p>

          <div className="input-box">
            <input type="email" name="email" placeholder="Enter your email" />
            <button>
              <SendIcon />
            </button>
          </div>
        </div>

        {/* column 2 */}
        <div className="footer-col2">
          <h4>Support</h4>
          <p>111 Bijoy Sarani,Dhaka,DH 1515,Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* column 3 */}
        <div className="footer-col3">
          <h4>Account</h4>
          <a href="/">My Acount</a>
          <a href="/">Login / Register</a>
          <a href="/">cart</a>
          <a href="/">Wishlist</a>
          <a href="/">Shop</a>
        </div>

        {/* column 4 */}
        <div className="footer-col4">
          <h4>Quick Link</h4>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms Of Use</a>
          <a href="/">FAQ</a>
          <a href="/">Contact</a>
        </div>

        {/* column 5 */}
        <div className="footer-col5">
          <h4>Download App</h4>
          <p>save $3 with App New user Only</p>

          <div className="download">
            <div className="qr">
              <a href="/" target="_blank" rel="noopener noopener">
                <img src={qrCode} alt="qrCode" />
              </a>
            </div>

            <div className="download-links">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noopener"
              >
                <img
                  src={google}
                  alt="Google Play"
                />
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noopener"
              >
                <img
                  src={app}
                  alt="App Store"
                />
              </a>
            </div>
          </div>

          <div className="mdia">
            <a href="https://facebook.com" target="block">
              <FacebookIcon />
            </a>
            <a href="https://x.com" target="block">
              <XIcon />
            </a>
            <a href="https://instagram.com" target="block">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com" target="block">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <hr />

      {/* copyRight */}
      <div className="copyRight">
        <CopyrightIcon />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}
