import React from "react";
import { Center, Group, Header, Text, Title } from "@mantine/core";
import TextLink from "./TextLink";

function LandingHeader() {
  return (
    <Header height={{ base: 60, md: 70 }} p="md">
      <Center w="600px" m="auto" sx={{ justifyContent: "space-between" }}>
        <Title ff="cursive" align="center" order={2}>
          IntelliBraille
        </Title>
        <Group align="end">
          <TextLink text="Convert Text" href="/convert-text" />
          <TextLink text="Convert File" href="/convert-file" />
        </Group>
      </Center>
    </Header>
  );
}

export default LandingHeader;
