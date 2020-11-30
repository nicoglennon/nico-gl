import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function More() {
  return (
    <Layout page="more">
      <SEO title="More" />
      <p>
        <a href="mailto:hi@nico.gl">Email</a>
      </p>
      <p>
        <a href="https://twitter.com/nicoglennon" target="_blank">
          Twitter
        </a>
      </p>
      <p>
        <a href="https://github.com/nicoglennon" target="_blank">
          Github
        </a>
      </p>
      <p>
        <a href="https://linkedin.com/in/nicoglennon" target="_blank">
          Linkedin
        </a>
      </p>
      <p>
        <a href="https://medium.com/@nicoglennon" target="_blank">
          Medium
        </a>
      </p>
      <p>
        <a href="https://www.producthunt.com/@nicoglennon" target="_blank">
          Product Hunt
        </a>
      </p>
      <p>
        <a href="https://www.wyzant.com/Tutors/nico" target="_blank">
          Wyzant
        </a>
      </p>
      <p>
        <a href="https://www.public.com/ocin" target="_blank">
          Stonks
        </a>
      </p>
      <p>
        <a
          href="https://etherscan.io/address/0xc986ca9476edc3c021c04e3306f9e37eed9071ab"
          target="_blank"
        >
          blonded.eth
        </a>
      </p>
    </Layout>
  );
}

export default More;
