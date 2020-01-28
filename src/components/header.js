import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import gatsbyLogo from '../images/gatsby-icon.png';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background: #524763;
    img {
        margin-bottom: 0;
    }
`;

const HeaderContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0.5rem;
    img {
        margin-bottom: 0;
    }
`;

const Header = ({ siteTitle }) => (
    <HeaderWrapper>
        <HeaderContainer>
            <div>
                <h1 style={{ margin: 0 }}>
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}>
                        <img
                            style={{
                                width: '100px',
                            }}
                            src={gatsbyLogo}
                            alt=""></img>
                    </Link>
                </h1>
            </div>
        </HeaderContainer>
    </HeaderWrapper>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
