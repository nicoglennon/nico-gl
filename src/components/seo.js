import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const metaTitle = title || site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={title ? `${site.siteMetadata.title} — %s` : metaTitle}
      link={[
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          key: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap",
          key:
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap",
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:url`,
          content: "https://nico.gl",
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: "og:image",
          content:
            "https://i.pinimg.com/originals/e7/4b/87/e74b87ef8486bc21ecfdf2e036999ad2.gif",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: "twitter:image",
          content:
            "https://i.pinimg.com/originals/e7/4b/87/e74b87ef8486bc21ecfdf2e036999ad2.gif",
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        { property: "twitter:url", content: "https://nico.gl" },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: null,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default SEO;
