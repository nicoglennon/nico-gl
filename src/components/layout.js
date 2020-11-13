/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import "../styles/index.css";
import styled from "styled-components";

const BodyWrapper = styled.div`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 80px;
`;

const HtmlWrapper = styled.div`
  max-width: 500px;
  margin: auto;
`;

const Layout = ({ children, page }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <HtmlWrapper>
      <Header siteTitle={data.site.siteMetadata.title} page={page} />
      <BodyWrapper>
        <main>{children}</main>
        <Footer page={page} />
      </BodyWrapper>
    </HtmlWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string,
};

Layout.defaultProps = {
  page: "",
};

export default Layout;
