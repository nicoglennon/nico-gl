import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import "../styles/index.css";
import { Link } from "gatsby";

const SectionWrapper = styled.div``;

const Sidebar = ({ siteTitle, page }) => (
  <div id="sidebar">
    <SectionWrapper>
      <p>
        <p style={{ borderBottom: "none" }}>
          <strong>Nico Glennon</strong>
        </p>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/projects">Projects</Link>
      </p>
      <p>
        <Link to="/concepts">Concepts</Link>
      </p>
      <p>
        <Link to="/more">More</Link>
      </p>
      <br />
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
