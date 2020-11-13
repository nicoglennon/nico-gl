import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const MainHeader = styled.p`
  font-size: 22px;
  font-weight: 400;
`;
const HiddenH1 = styled.h1`
  display: none;
`;
function Index() {
  return (
    <Layout>
      <SEO title="Home" />
      <HiddenH1>Nico Glennon</HiddenH1>
      <MainHeader>
        Hi! I'm <a href="https://twitter.com/nicoglennon">Nico</a>. I design &
        code things.
      </MainHeader>
      <img
        src="https://i.pinimg.com/originals/e7/4b/87/e74b87ef8486bc21ecfdf2e036999ad2.gif"
        style={{ maxWidth: "100%" }}
      />
    </Layout>
  );
}

export default Index;
