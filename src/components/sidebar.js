import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import "../styles/index.css";
import { Link } from "gatsby";

const LinkWrapper = styled.div`
  display: block;
  font-size: 1rem;
`;

const SectionWrapper = styled.div``;

const Sidebar = ({ siteTitle, page }) => (
  <div id="sidebar">
    <SectionWrapper>
      <LinkWrapper>
        <p style={{ borderBottom: "none", marginBottom: 0 }}>
          <strong>Nico Glennon</strong>
        </p>
        <p>Bit Flipper</p>
      </LinkWrapper>
      {/* <LinkWrapper>
        <Link to="/about">About</Link>
      </LinkWrapper> */}
      <LinkWrapper>
        <Link to="/projects">Projects</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/concepts">Concepts</Link>
      </LinkWrapper>
      <LinkWrapper>
        <a
          href="https://twitter.com/nicoglennon"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/more">More</Link>
      </LinkWrapper>
      <br />
      <p>©2021</p>
    </SectionWrapper>
  </div>
);

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
  page: PropTypes.string.isRequired,
};

Sidebar.defaultProps = {
  siteTitle: ``,
};

export default Sidebar;
