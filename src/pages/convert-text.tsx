import React from "react";
import { Braille } from "@/types/braille";
import { Copy, CopyCheck } from "lucide-react";
import {
  ActionIcon,
  Box,
  Button,
  Container,
  CopyButton,
  ScrollArea,
  Stack,
  Text,
  Textarea,
  Tooltip,
} from "@mantine/core";
const braille = require("braille") as Braille;

const TextConvertPage = () => {
  const [text, setText] = React.useState<string>("");
  const [brailleText, setBrailleText] = React.useState<string>("");

  const convertToBraille = () => {
    const convertedText = braille.toBraille(text);
    setBrailleText(convertedText);
  };

  return (
    <Stack>
      <ScrollArea bg="#f8f9fa" h={250} p="xl">
        <Box pos="absolute" right={5} top={5}>
          <CopyButton value={brailleText} timeout={2000}>
            {({ copied, copy }) => (
              <Tooltip
                label={copied ? "Copied" : "Copy"}
                withArrow
                position="right"
              >
                <ActionIcon color={copied ? "teal" : "gray"} onClick={copy}>
                  {copied ? <CopyCheck size="1rem" /> : <Copy size="1rem" />}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </Box>
        {brailleText.length === 0 && (
          <Text c="gray" align="center">
            Your braille will be generated here
          </Text>
        )}
        {brailleText.split("").map((char, i) => (
          <Box key={i} display="inline-block">
            <Text>{char}</Text>
          </Box>
        ))}
      </ScrollArea>
      <Stack>
        <Textarea
          autosize
          placeholder="Input text to convert to braille"
          onChange={(e) => setText(e.currentTarget.value)}
        />
        <Button onClick={() => convertToBraille()} variant="outline" m="auto">
          Convert
        </Button>
      </Stack>
    </Stack>
  );
};

export default TextConvertPage;
