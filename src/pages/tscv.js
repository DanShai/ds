import React, { Component } from 'react'
import CsvComponent from '../components/testcsv'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default class tscv extends Component {
  render() {
    const data = this.props.data.allLettersCsv.edges
    return (
      <Layout>
        <Helmet>
          <title>Blog - Dan </title>
          <meta name="description" content="Generic Page" />
        </Helmet>
        <section className="container">
          <header className="bheader">
            <h2> Testing CSV </h2>
          </header>
          <CsvComponent data={data} />
        </section>
      </Layout>
    )
  }
}

export const CsvQuery = graphql`
  query {
    allLettersCsv {
      edges {
        node {
          letter
          value
        }
      }
    }
  }
`
