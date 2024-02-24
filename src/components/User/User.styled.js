import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export const Paragraph = styled.p`
  color: #000;
  font-size: 24px;
  background-color: #f2f2f2;

  &:hover {
    background-color: aqua;
  }
`;

export const SuperParagraph = styled(Paragraph)`
  border: 2px solid #111;
`;

export const Span = styled.span`
  color: ${({ isRed }) => (isRed ? "red" : "blue")};
  ${Paragraph}:hover & {
    color: green;
  }
`;
