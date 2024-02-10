/* eslint-disable react/prop-types */

import { Address } from "../Address/Address";
import { Paragraph, Span, SuperParagraph } from "./User.styled";

export const User = ({
  user: {
    name,
    email,
    address: { street, city },
  },
}) => {
  const endsWithNet = email.endsWith("net");
  return (
    <>
      <SuperParagraph>
        Name : <Span>{name}</Span>
      </SuperParagraph>
      <Paragraph>
        Email: <Span isRed={endsWithNet}>{email}</Span>
      </Paragraph>
      <Address street={street} city={city} />
    </>
  );
};
