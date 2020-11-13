import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import "../styles/index.css";

const LinkWrapper = styled.div`
  display: inline-block;
  font-size: 21px;
`;

const LinkSpacing = styled.div`
  display: inline-block;
  margin: 10px;
`;

const HeaderWrapper = styled.header`
  margin: auto;
  margin-top: 120px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;
`;

const SectionWrapper = styled.div``;

const Header = ({ siteTitle, page }) => (
  <HeaderWrapper>
    <SectionWrapper>
      <LinkWrapper>
        <code>/{page}</code>
      </LinkWrapper>
    </SectionWrapper>
    <SectionWrapper></SectionWrapper>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  page: PropTypes.string.isRequired,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
