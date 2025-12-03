

/**
 * Footer component
 * Displays consistent footer across all pages
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="section">
            <h3 className="title">Chicago Eats</h3>
            <p className="description">
              Discover the best local restaurants in Chicago.
              From deep-dish pizza to fine dining, explore the Windy City's culinary scene.
            </p>
          </div>

          <div className="section">
            <h4 className="sectionTitle">Quick Links</h4>
            <ul className="links">
              <li><a href="/" className="link">About</a></li>
              <li><a href="/top-10" className="link">Top 10 Restaurants</a></li>
              <li><a href="/recommend" className="link">Recommend a Restaurant</a></li>
            </ul>
          </div>

          <div className="section">
            <h4 className="sectionTitle">Connect</h4>
            <p className="text">
              Have a favorite spot we should know about?<br />
              Share your recommendations with us!
            </p>
          </div>
        </div>

        <div className="bottom">
          <p className="copyright">
            &copy; {currentYear} Chicago Eats. A project by students, for food lovers.
          </p>
          <p className="note">
            All restaurant information is for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;