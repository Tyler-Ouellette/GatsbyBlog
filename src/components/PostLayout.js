import React, { Component } from 'react';
import Layout from './layout';
import { graphql } from 'gatsby';

export default class PostLayout extends Component {
    render() {
        const { markdownRemark } = this.props.data;
        const { location } = this.props;
        return (
            <Layout location={location}>
                <div>
                    <h1>{markdownRemark.frontmatter.title}</h1>
                    <div
                        // This is a react thing
                        dangerouslySetInnerHTML={{
                            __html: markdownRemark.html,
                        }}
                    />
                </div>
            </Layout>
        );
    }
}

//Gatsby Magic, the variable in the parameter must be the same thing as being passed in context
export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                title
                date
                slug
            }
        }
    }
`;
