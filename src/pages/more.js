import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function More() {
  return (
    <Layout page="more">
      <SEO title="More" />
      <p>
        <a href="mailto:hi@nico.gl">hi@nico.gl</a>
      </p>
      <p>
        <a href="https://twitter.com/nicoglennon">Twitter</a>
      </p>
      <p>
        <a href="https://github.com/nicoglennon">Github</a>
      </p>
      <p>
        <a href="https://linkedin.com/in/nicoglennon">Linkedin</a>
      </p>
      <p>
        <a href="https://medium.com/@nicoglennon">Medium</a>
      </p>
      <p>
        <a href="https://www.producthunt.com/@nicoglennon">Product Hunt</a>
      </p>
      <p>
        <a href="https://www.wyzant.com/Tutors/nico">Wyzant</a>
      </p>
    </Layout>
  );
}

export default More;
