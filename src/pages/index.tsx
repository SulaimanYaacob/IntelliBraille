import {
  ActionIcon,
  Button,
  Center,
  Divider,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
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
        <Grid justify="space-around">
          <Grid.Col span={6}>
            <ActionIcon
              c="blue"
              size="250px"
              component={Link}
              href="/convert-text"
            >
              <Stack align="center">
                <Languages size="10rem" />
                <Title order={2}> Text</Title>
              </Stack>
            </ActionIcon>
          </Grid.Col>
          <Grid.Col span={6}>
            <ActionIcon
              c="red"
              size="250px"
              component={Link}
              href="/convert-file"
            >
              <Stack align="center">
                <FileUp size="10rem" />
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
