import { Braille } from "@/types/braille";
import {
  ScrollArea,
  CopyButton,
  Tooltip,
  ActionIcon,
  Box,
  Text,
} from "@mantine/core";
import { CopyCheck, Copy } from "lucide-react";
import React, { useEffect } from "react";
const braille = require("braille") as Braille;

type Props = {
  textInput: string;
};

const BrailleArea = ({ textInput }: Props) => {
  const [brailleText, setBrailleText] = React.useState<string>("");

  useEffect(() => {
    const convertedText = braille.toBraille(textInput);
    setBrailleText(convertedText);
  }, [textInput]);

  return (
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
  );
};

export default BrailleArea;
