import React from "react";
import { Center, Group, Header, Text, Title } from "@mantine/core";
import TextLink from "./TextLink";
import { useRouter } from "next/router";
import Image from "next/image";

function LandingHeader() {
  const route = ["/convert-text", "/convert-file"];
  const { pathname } = useRouter();

  return (
    <Header height={{ base: 60, md: 70 }} p="md">
      <Center w="600px" m="auto" sx={{ justifyContent: "space-between" }}>
        <Group>
          <Image src="/favicon.png" width={40} height={40} alt="" />
          <Title c="blue.3" ff="cursive" align="center" order={2}>
            IntelliBraille
          </Title>
        </Group>
        <Group align="end">
          <TextLink text="Convert Text" href="/convert-text" />
          <TextLink text="Convert File" href="/convert-file" />
        </Group>
      </Center>
    </Header>
  );
}

export default LandingHeader;
