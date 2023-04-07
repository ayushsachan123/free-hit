import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p>
          Crafted with ❤️ by
          <a
            href="https://github.com/JasonDsouza212"
            target="_blank"
            className="footer-link"
            rel="noreferrer"
          >
            {' '}
            Jason Dsouza
          </a>
        </p>
      </div>
      <ul className="fot-links">
        <li>
          <a
            href="https://github.com/JasonDsouza212/free-hit"
            target="_blank"
            rel="noreferrer"
            className="fot-link"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/_Jason_Dsouza"
            target="_blank"
            rel="noreferrer"
            className="fot-link"
          >
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer
