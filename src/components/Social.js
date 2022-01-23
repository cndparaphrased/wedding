const Social = () => {
  return (
    <ul className="social">
      <li className="social__items">
        <a href="https://www.instagram.com/cndparaphrased" aria-label="Instagram for cndparaphrased" target="_blank">
          <i aria-hidden="true" className="fab fa-instagram social__icon"></i>
        </a>
      </li>
      <li className="social__items">
        <a href="https://www.linkedin.com/in/cindy-poon-yeung-572858169" aria-label="LinkedIn profile" target="_blank">
          <i aria-hidden="true" className="fab fa-linkedin-in social__icon"></i>
        </a>
      </li>
      <li className="social__items">
        <a href="https://github.com/cndparaphrased" aria-label="github repositories" target="_blank">
          <i aria-hidden="true" className="fab fa-github social__icon"></i>
        </a>
      </li>
    </ul>
  );
};

export default Social;
