import React from "react"
import Layout from "../components/layouts"

export default () => (
  <Layout>
    <div className="not-found">
  	</div>

		<div className="not-found-msg">
			<h1>404</h1>
			<h3>Oops, Sorry we can't find that page!</h3>
			<p>Either something went wrong or the page doesn't exist anymore</p>
			<div className="cta_btn_cont">
				<a href='/' className="primary_cta_btn">Return Home</a>
			</div>
		</div>
  </Layout>
)
