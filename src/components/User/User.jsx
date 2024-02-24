/* eslint-disable react/prop-types */

import { Address } from "../Address/Address";
import { Paragraph, Span, SuperParagraph, Button } from "./User.styled";

export const User = ({
  user: {
    name,
    email,
    isOnline,
    address: { street, city },
    id,
  },
  onDelete,
  onChange,
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
      <Paragraph>
        Is online: <Span>{isOnline}</Span>
      </Paragraph>
      <Address street={street} city={city} />
      <Button onClick={() => onDelete(id)}>Delete</Button>
      <Button onClick={() => onChange(id)}>Change online status</Button>
    </>
  );
};
