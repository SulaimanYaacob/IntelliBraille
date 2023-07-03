import { Center, Group, Header, Title } from "@mantine/core";
import TextLink from "./TextLink";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";

function LandingHeader() {
  const { pathname } = useRouter();
  const matches = useMediaQuery("(min-width: 500px)");
  const route = "/";

  if (pathname !== route) {
    return (
      <Header height={{ base: 60, md: 70 }} p="md">
        <Center maw="600px" m="auto" sx={{ justifyContent: "space-between" }}>
          {matches && (
            <Group>
              <Image src="/favicon.png" width={40} height={40} alt="" />
              <Title c="blue.3" ff="cursive" align="center" order={2}>
                IntelliBraille
              </Title>
            </Group>
          )}
          <Group align="end">
            <TextLink text="Convert Text" href="/convert-text" />
            <TextLink text="Convert File" href="/convert-file" />
          </Group>
        </Center>
      </Header>
    );
  }

  return (
    <Header height={{ base: 60, md: 70 }} p="md">
      <Center maw="600px" m="auto" sx={{ justifyContent: "space-between" }}>
        <Group>
          <Image src="/favicon.png" width={40} height={40} alt="" />
          <Title c="blue.3" ff="cursive" align="center" order={2}>
            IntelliBraille
          </Title>
        </Group>
      </Center>
    </Header>
  );
}

export default LandingHeader;
