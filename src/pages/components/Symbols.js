import styled from 'styled-components';

const X = styled.svg`
  width: 50px;
  height: 50px;
`;

const XLine = styled.line`
  stroke: #fff; // set the stroke to white
  stroke-width: 2;
  color: #fff;
`;

export function XIcon(props) {
  return (
    <X viewBox='0 0 50 50' {...props}>
      <XLine x1='10' y1='10' x2='40' y2='40' />
      <XLine x1='40' y1='10' x2='10' y2='40' />
    </X>
  );
}

const Hamburger = styled.svg`
  width: 24px;
  height: 24px;
  fill: #fff; // set the fill to white
  stroke: black;
  stroke-width: 2px;
  color: #fff;
`;

const HamburgerLine = styled.line`
  stroke-linecap: round;
  stroke: #fff; // set the stroke to white
`;

export function HamburgerIcon(props) {
  return (
    <Hamburger viewBox='0 0 24 24' {...props}>
      <HamburgerLine x1='3' y1='12' x2='21' y2='12' />
      <HamburgerLine x1='3' y1='6' x2='21' y2='6' />
      <HamburgerLine x1='3' y1='18' x2='21' y2='18' />
    </Hamburger>
  );
}
