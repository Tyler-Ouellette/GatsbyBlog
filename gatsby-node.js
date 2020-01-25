/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    try {
        const results = await graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            frontmatter {
                                slug
                            }
                        }
                    }
                }
            }
        `);

        results.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: `posts${node.frontmatter.slug}`,
                component: path.resolve('./src/components/PostLayout.js'),
                context: {
                    slug: node.frontmatter.slug,
                },
            });
        });
    } catch (err) {}
};
