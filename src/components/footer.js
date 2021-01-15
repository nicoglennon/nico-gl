import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

const LinkWrapper = styled.div`
  display: block;
  font-size: 1rem;
`;

const Footer = ({ page }) => {
  return (
    <footer>
      <LinkWrapper>
        <Link to="/">Intro</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/projects">Projects</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/concepts">Concepts</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/more">More</Link>
      </LinkWrapper>
    </footer>
  );
};

Footer.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Footer;
