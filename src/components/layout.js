/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Spring } from 'react-spring/renderprops';
import Header from './header';
import './layout.css';
import Archive from './Archive';
import styled from 'styled-components';
import Img from 'gatsby-image';

const MainLayout = styled.main`
    max-width: 90%;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 40px;
`;

const Layout = ({ children, location }) => {
    const data = useStaticQuery(graphql`
        # query / mutation or whatever must be there as it tells gatsby what it
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
            file(relativePath: { regex: "/dev/" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                        # ...GatsbyImageSharpFluid_tracedSVG
                        # ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <div>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Spring
                from={{ height: location.pathname === '/' ? 100 : 400 }}
                to={{ height: location.pathname === '/' ? 400 : 100 }}>
                {styles => (
                    <div style={{ overflow: 'hidden', ...styles }}>
                        <Img fluid={data.file.childImageSharp.fluid} />
                    </div>
                )}
            </Spring>
            {/* ensure that the image is only on home page */}
            {/* {location.pathname === '/' && (
            )} */}
            <MainLayout>
                <div>{children}</div>

                <Archive />
            </MainLayout>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
