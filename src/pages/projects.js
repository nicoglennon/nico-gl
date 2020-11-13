import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function Projects() {
  return (
    <Layout page="projects">
      <SEO title="Projects" />
      <h2>🌼 Percent</h2>
      <p>
        <a href="https://percent.me">Percent</a> is a system to track
        overarching life goals and analyze if you&#39;re actually sticking to
        them.
      </p>
      <p>
        The idea came from a personal process I did myself for several months to
        quantify my life on a weekly basis — although the first version was a
        spreadsheet with a bunch of formulas, there were enough features to
        justify building a standalone product.
      </p>
      <h2>🔮 Someday</h2>
      <p>
        An iOS app made for those of us living one day at a time. Get it{" "}
        <a href="https://someday.im">here</a>.
      </p>
      <h2>🛹 Zero Skips</h2>
      <p>
        <a href="http://zeroskips.com">Zero Skips</a> is a 7-track, zero-skips
        playlist dropping every week. Subscribe{" "}
        <a href="https://zeroskips.substack.com/welcome">here</a> to get it in
        your inbox Tuesday nights.
      </p>
      <h2>🐀 Another Day in the Simulation</h2>
      <p>
        Inspired by Elon&#39;s <em>Occupy Mars</em> t-shirt, I created{" "}
        <a href="http://adits.world">ADITS</a> in 2018 after spending too much
        time thinking about the simulation theory. First collection is out
        (Classic) -- store is paused while I create a few more collections!
      </p>
      <h2>🧬 React Meetup</h2>
      <p>
        I ran the <strong>React.js meetup</strong> in Green Bay — you can check
        out some of my presentations about{" "}
        <a href="https://www.youtube.com/watch?v=HVdMhKN2ng4&amp;list=PL6ubUCP07zW6_AyMYUNohwKq2NQDlZigO&amp;index=1">
          interacting with databases
        </a>
        , the{" "}
        <a href="https://www.youtube.com/watch?v=3bucBLOSUt0&amp;list=PL6ubUCP07zW6_AyMYUNohwKq2NQDlZigO&amp;index=3">
          history of React state
        </a>
        , or{" "}
        <a href="https://www.youtube.com/watch?list=PL6ubUCP07zW6_AyMYUNohwKq2NQDlZigO&amp;v=p2sZKAPOQXs&amp;feature=emb_title">
          integrating Storybook
        </a>
        .
      </p>
      <h2>🎏 Zen</h2>
      <p>
        With <a href="http://zen.glitch.me">Zen</a>, I wanted to create a small
        set of &#39;rooms&#39; that would take me somewhere peaceful. I was
        feeling a lot of stress at the time and wished there was something
        pretty but boring to fall into for a quick mental break.
      </p>
      <p>
        It&#39;s built using <a href="http://threejs.org">three.js</a> and runs
        on <a href="http://glitch.com">Glitch</a>, a really cool platform to
        build small projects.
      </p>
      <h2>😸 Felist</h2>
      <p>
        <a href="http://feli.st">Felist</a> is a minimal organizer. I hated
        having to decide between a bunch of todo-list apps that were complete
        overkills for what I needed (I even{" "}
        <a href="https://medium.com/the-mission/searching-for-the-perfect-to-do-list-app-934a04f6328">
          wrote a semi-popular post
        </a>{" "}
        about). So here&#39;s a sleek &amp; minimal app to save you and me from
        todo-list oblivion.
      </p>
      <h2>☁️ Salesforce Starter</h2>
      <p>
        While at IBM I learned to develop in Salesforce and wrote some
        documentation for myself. I figured if anyone wants to save themselves a
        headache, they can avoid the endless Salesforce on-boarding docs and
        just read what I distilled{" "}
        <a href="https://www.notion.so/bdbf8cd356184675b19451f8166e3add">
          here
        </a>
        .
      </p>
      <h2>📚 Tutoring</h2>
      <p>
        I&#39;m one of the top programming tutors on{" "}
        <a href="https://www.wyzant.com">Wyzant</a>! I&#39;m the top search
        result for HTML, JavaScript, Ruby, etc. I even got my own URL:{" "}
        <a href="https://wyzant.com/tutors/nico">wyzant.com/tutors/nico</a>.
      </p>
      <p>
        I love to learn different technologies by getting involved in other
        people&#39;s pet projects. If you&#39;re interested, email me at{" "}
        <strong>hi@nico.gl</strong> for more info.
      </p>
    </Layout>
  );
}

export default Projects;
