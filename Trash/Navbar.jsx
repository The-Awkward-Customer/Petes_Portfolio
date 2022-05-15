import styled from "styled-components";
import Link from "next/link";
import { Header1 } from "../atoms/typography/Headers";
import { device, space } from "../../theme";

// Component description: The global navigation bar

const Navwrap = styled.div`
  @media ${device.mobileS} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(32px, auto);
    grid-gap: 8px;
    background: white;
    grid-template-areas: "item1 item1 item1";
    padding: ${space.fixed.m};
  }

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(32px, auto);
    grid-gap: 8px;
    background: white;
    grid-template-areas: "item1 item1 item3";
    padding: ${space.fixed.m};
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(32px, auto);
    grid-gap: 8px;
    background: white;
    grid-template-areas: "item1 item2 item3";
    padding: ${space.fixed.l};
  }
`;

const Block1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: white;
  grid-area: item1;
`;

const Block2 = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }

  @media ${device.laptop} {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    grid-area: item2;
  }
`;

const Block3 = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: flex-end;
  }

  @media ${device.laptop} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: white;
    grid-area: item3;
  }
`;

export const Navbar = () => {
  return (
    <Navwrap>
      <Block1>
        <Header1 variation="xxs" text="Peter Abbott" />
      </Block1>
      <Block2>
        <Header1 variation="xxs" text="❤️" />
      </Block2>
      <Block3>
        <Header1 variation="xxs" text="Say Hello" />
      </Block3>
    </Navwrap>
  );
};

// const NavWrapper = styled.nav`
//   padding: 32px;
//   display: flex;
//   justify-content: space-between;
//   align-items: baseline;
//   //background: pink;
// `;

// const HeaderWrapper = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   width: 300px;
//   //background: grey;
// `;

// const WeatherWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 300px;
//   //background: grey;
// `;

// const ItemsWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   width: 300px;
//   //background: grey;
// `;

// const Header = styled.header`
//   color: ${COLORS.primary50};
//   font-family: CivilPremium-medium, sans-serif;
//   font-size: ${SIZES.xs};
//   padding: ${SPACING.xs};
//   //background: lightgrey;
// `;

// const Anchor = styled.a`
//   color: ${COLORS.primary50};
//   font-family: CivilPremium-medium, sans-serif;
//   font-size: ${SIZES.xs};
//   padding: ${SPACING.xs};
// `;

// const Navbar = () => {
//   return (
//     <NavWrapper>
//       <HeaderWrapper>
//         <Header as={motion.div} animate={{ x: 10 }}>
//           Peter Abbott
//         </Header>
//       </HeaderWrapper>
//       <WeatherWrapper>
//         <Header>14º - Sunny</Header>
//       </WeatherWrapper>
//       <ItemsWrapper>
//         <Link href="/">
//           <Anchor>Home</Anchor>
//         </Link>
//         <Link href="/About">
//           <Anchor>About</Anchor>
//         </Link>
//         <Link href="/Lists/Page">
//           <Anchor>Page</Anchor>
//         </Link>
//       </ItemsWrapper>
//     </NavWrapper>
//   );
// };

// export default Navbar;
