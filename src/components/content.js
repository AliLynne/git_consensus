import React from 'react'

class Content extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      <div>
        <p>GitConsensus makes it possible to automate project governance on GitHub by using “reactions” as a voting mechanism to automatically merge (or close) pull requests.</p>
        <p>IMAGE HERE</p>

        <h3>Installation</h3>
        <p>On the <a href="https://github.com/gitconsensus/">GitConsensusApp Page on Github</a> find the Configure button to start. From there you can select where to install it to.</p>
        <p>Once installed each repository which should be managed by GitConsensus needs a .gitconsensus.yaml file to define the consensus rules used by the project. Repositories without this file will simply be ignored. A variety of <a href="https://github.com/gitconsensus/gitconsensus_examples">example files</a> exist to help get started, and these <a href="https://github.com/gitconsensus/gitconsensus_examples/blob/master/examples/recommended/.gitconsensus.yaml">recommended consensus</a> rules should be a great starting point for most projects.</p>
        <h3>Voting</h3>
        <p>Votes are made by using reactions on the top level comment of the Pull Request.</p>
        <p>IMAGE HERE</p>
        <p>An Abstain vote counts when calculating quorum but is discarded when checking to see if the vote passed.</p>
        <p>Voting for more than one option can be disabled on a per project basis.</p>
        <h3>Label Overrides</h3>
        <p>Any pull request with a WIP or DONTMERGE label (case insensitive) will be skipped over.</p>
      </div>
    )
  }
}

export default Content

export const pageQuery = graphql`
  query MyQuery {
  allImageSharp(filter: {original: {src: {regex: "/merge/"}}}) {
    edges {
      node {
        id
        original {
          src
        }
      }
    }
  }
}
`