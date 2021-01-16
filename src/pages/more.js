import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function More() {
  return (
    <Layout page="more">
      <SEO title="More" />
      <h1>More</h1>
      <p>
        <a href="mailto:hi@nico.gl">Email</a>
      </p>
      <p>
        <a href="https://read.cv/nico" target="_blank" rel="noreferrer">
          CV
        </a>
      </p>
      <p>
        <a
          href="https://github.com/nicoglennon"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </p>
      <p>
        <a
          href="https://www.wyzant.com/Tutors/nico"
          target="_blank"
          rel="noreferrer"
        >
          Tutoring
        </a>
      </p>
      <p>
        <a
          href="https://www.producthunt.com/@nicoglennon"
          target="_blank"
          rel="noreferrer"
        >
          Product Hunt
        </a>
      </p>
    </Layout>
  );
}

export default More;
