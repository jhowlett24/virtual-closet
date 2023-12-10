import "../CSS/Footer.css";

//If you see Footer.css, the text color is black, as well as the background, so you cannot see the sample text.
//We had to add something in the body of the div in order for the footer to be called properly

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">sample text</div>
    </div>
  );
};
export default Footer;
