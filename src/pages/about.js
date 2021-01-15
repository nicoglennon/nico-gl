import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function About() {
  return (
    <Layout page="about">
      <SEO title="About" />
      <h1>About</h1>
      <p>I design & program cool shit on the web.</p>
    </Layout>
  );
}

export default About;
