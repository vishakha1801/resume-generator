import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Made with ❤️ in Manipal</p>
      <Link href="https://github.com/vishakha1801" target="_blank">
        <FaGithub />
      </Link>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
<<<<<<< HEAD
  background-color: ${({ theme }) => theme.colors.blue};
=======
  background-color: ${({ theme }) => theme.colors.dark};
>>>>>>> e6f23ad38eea6ac465f4982b70b66f1f8a1d1cb0
  color: ${({ theme }) => theme.colors.light};
`;

const Link = styled.a`
  position: relative;
  top: 0.2rem;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.light};
  font-size: 2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.lightHover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.lightActive};
  }
`;

export default Footer;
