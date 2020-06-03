import React from "react"
import styles from "./references.module.css"

const References = () => (
  <article>
    <ul className={styles.references}>
      <li>
        Readme.md and source code on{" "}
        <a href="https://github.com/ClareBee/demo-site">GitHub</a>
      </li>
      <li>
        Incremental Builds on{" "}
        <a href="https://www.netlify.com/blog/2020/04/23/enable-gatsby-incremental-builds-on-netlify/">
          Netlify Blog (23/04/2020)
        </a>
      </li>
      <li>
        Build Plugins on{" "}
        <a href="https://www.netlify.com/blog/2020/05/27/netlify-build-plugins-are-here/">
          Netlify Blog (27/05/2020)
        </a>
      </li>
    </ul>
  </article>
)

export default References
