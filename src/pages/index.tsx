import { ActionIcon, Center, Divider, Grid, Stack, Title } from "@mantine/core";
import { FileUp, Languages, ImageIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function index() {
  return (
    <Center>
      <Stack spacing="xl">
        <Title align="center" ff="cursive">
          Convert To Braille
        </Title>
        <Divider p="xl" />

        <Grid
          grow
          sx={{
            ".mantine-av2ldk": {
              display: "flex",
              justifyContent: "center",
            },
          }}
        >
          <Grid.Col span="auto">
            <ActionIcon
              c="blue"
              size="150px"
              component={Link}
              href="/convert-text"
            >
              <Stack align="center">
                <Languages size="75px" />
                <Title order={2}> Text</Title>
              </Stack>
            </ActionIcon>
          </Grid.Col>
          <Grid.Col span="auto">
            <ActionIcon
              c="red"
              size="150px"
              component={Link}
              href="/convert-file"
            >
              <Stack align="center">
                <FileUp size="75px" />
                <Title order={2}> File</Title>
              </Stack>
            </ActionIcon>
          </Grid.Col>
          <Grid.Col span="auto">
            <ActionIcon
              c="teal"
              size="150px"
              component={Link}
              href="/convert-img"
            >
              <Stack align="center">
                <ImageIcon size="75px" />
                <Title order={2}> Image</Title>
              </Stack>
            </ActionIcon>
          </Grid.Col>
        </Grid>
      </Stack>
    </Center>
  );
}

export default index;
