import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function About() {
  return (
    <Layout page="about">
      <SEO title="About" />
      <h1>About</h1>
      <p>
        <a href="mailto:hi@nico.xyz">Email</a>
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
    </Layout>
  );
}

export default About;
