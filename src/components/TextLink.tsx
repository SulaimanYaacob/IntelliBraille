import { Text } from "@mantine/core";
import type { TextProps } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Props extends TextProps {
  text: string;
  href: string;
}
const TextLink = ({ text, href, ...rest }: Props) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Text
      href={href}
      sx={{
        color: `${isActive ? "cornflowerblue" : "GrayText"} `,
        borderBottom: `${isActive ? "2px solid cornflowerblue" : "none"}`,
        ":hover": { color: "cornflowerblue" },
      }}
      component={Link}
      {...rest}
    >
      {text}
    </Text>
  );
};

export default TextLink;
