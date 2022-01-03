import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { COLORS } from "../constants";
import { SPACING } from "../constants";
import { SIZES } from "../constants";

// Component description: The global navigation bar

const NavWrapper = styled.nav`
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  //background: pink;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 300px;
  //background: grey;
`;

const WeatherWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  //background: grey;
`;

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 300px;
  //background: grey;
`;

const Header = styled.header`
  color: ${COLORS.primary50};
  font-family: CivilPremium-medium, sans-serif;
  font-size: ${SIZES.xs};
  padding: ${SPACING.xs};
  //background: lightgrey;
`;

const Anchor = styled.a`
  color: ${COLORS.primary50};
  font-family: CivilPremium-medium, sans-serif;
  font-size: ${SIZES.xs};
  padding: ${SPACING.xs};
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <HeaderWrapper>
        <Header as={motion.div} animate={{ x: 10 }}>
          Peter Abbott
        </Header>
      </HeaderWrapper>
      <WeatherWrapper>
        <Header>14º - Sunny</Header>
      </WeatherWrapper>
      <ItemsWrapper>
        <Link href="/">
          <Anchor>Home</Anchor>
        </Link>
        <Link href="/About">
          <Anchor>About</Anchor>
        </Link>
        <Link href="/Lists/Page">
          <Anchor>Page</Anchor>
        </Link>
      </ItemsWrapper>
    </NavWrapper>
  );
};

export default Navbar;
