/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Sidebar from "./sidebar";
import "../styles/index.css";
import styled from "styled-components";

const BodyWrapper = styled.div`
  margin: auto;
  margin-bottom: 80px;
  display: flex;
  position: relative;
  overflow: none;
`;

const HtmlWrapper = styled.div`
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
      <BodyWrapper>
        <Sidebar siteTitle={data.site.siteMetadata.title} page={page} />
        <main>{children}</main>
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
