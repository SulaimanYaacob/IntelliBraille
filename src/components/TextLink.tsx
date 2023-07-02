import { Text } from "@mantine/core";
import type { TextProps } from "@mantine/core";
import Link from "next/link";
import React from "react";

interface Props extends TextProps {
  text: string;
  href: string;
}
const TextLink = ({ text, href, ...rest }: Props) => {
  return (
    <Text
      href={href}
      sx={{ color: "GrayText", ":hover": { color: "cornflowerblue" } }}
      component={Link}
      {...rest}
    >
      {text}
    </Text>
  );
};

export default TextLink;
