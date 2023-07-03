import { ActionIcon, Center, Divider, Grid, Stack, Title } from "@mantine/core";
import { FileUp, Languages } from "lucide-react";
import Link from "next/link";
import React from "react";

function index() {
  return (
    <Center>
      <Stack spacing="xl">
        <Title align="center" ff="cursive">
          Convert To Braille
        </Title>
        <Divider />

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
              size="200px"
              component={Link}
              href="/convert-text"
            >
              <Stack align="center">
                <Languages size="100px" />
                <Title order={2}> Text</Title>
              </Stack>
            </ActionIcon>
          </Grid.Col>
          <Grid.Col span="auto">
            <ActionIcon
              c="red"
              size="200px"
              component={Link}
              href="/convert-file"
            >
              <Stack align="center">
                <FileUp size="100px" />
                <Title order={2}> File</Title>
              </Stack>
            </ActionIcon>
          </Grid.Col>
        </Grid>
      </Stack>
    </Center>
  );
}

export default index;
