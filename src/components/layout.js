/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';
import Archive from './Archive';
import styled from 'styled-components';

const MainLayout = styled.main`
    max-width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 40px;
`;

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        # query / mutation or whatever must be there as it tells gatsby what it
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div>
            <Header siteTitle={data.site.siteMetadata.title} />
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
