import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Snake from '../components/snake'

export default class sgame extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Snake - Dan </title>
          <meta name="description" content="snake" />
        </Helmet>
        <section className="container">
          <header className="bheader">
            <h2> Snake </h2>
          </header>
          <Snake width={400} height={400} />
        </section>
      </Layout>
    )
  }
}
