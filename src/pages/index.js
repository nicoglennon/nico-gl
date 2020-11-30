import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function Index() {
  return (
    <Layout>
      <SEO />
      <h1 style={{ display: "none" }}>Nico Glennon</h1>
      <p>
        Hi! I'm{" "}
        <a href="https://twitter.com/nicoglennon" target="_blank">
          Nico
        </a>
        . I design & code things.
      </p>
      <img
        src="https://i.pinimg.com/originals/e7/4b/87/e74b87ef8486bc21ecfdf2e036999ad2.gif"
        style={{ maxWidth: "100%" }}
        alt="wavyyyy gif"
      />
      <p style={{ textAlign: "right" }}>©2020</p>
    </Layout>
  );
}

export default Index;
