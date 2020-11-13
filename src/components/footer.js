import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  padding: 20px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  maxwidth: 550px;
  text-align: right;
`;
const LinkWrapper = styled.div`
  display: inline-block;
  font-size: 21px;
`;

const LinkSpacing = styled.div`
  display: inline-block;
  margin: 7px;
`;

const SectionWrapper = styled.div``;

const Footer = ({ page }) => {
  return (
    <>
      <FooterWrapper>
        <SectionWrapper>
          {page !== "" && (
            <LinkWrapper>
              <Link to="/">Main</Link>
            </LinkWrapper>
          )}
        </SectionWrapper>
        <SectionWrapper>
          <LinkWrapper>
            <Link to="/projects">Projects</Link>
          </LinkWrapper>
          <LinkSpacing />
          <LinkWrapper>
            <Link to="/concepts">Concepts</Link>
          </LinkWrapper>
          <LinkSpacing />
          <LinkWrapper>
            <Link to="/more">More</Link>
          </LinkWrapper>
        </SectionWrapper>
      </FooterWrapper>
    </>
  );
};

Footer.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Footer;
