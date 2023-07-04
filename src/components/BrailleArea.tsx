import { Braille } from "@/types/braille";
import {
  ScrollArea,
  CopyButton,
  Tooltip,
  ActionIcon,
  Box,
  Text,
  Select,
} from "@mantine/core";
import { CopyCheck, Copy } from "lucide-react";
import { useEffect, useState } from "react";
const braille = require("braille") as Braille;

type Props = {
  textInput: string;
};

const BrailleArea = ({ textInput }: Props) => {
  const [brailleText, setBrailleText] = useState<string>("");
  const [displayMode, setDisplayMode] = useState<"Text" | "Braille">("Braille");

  useEffect(() => {
    const convertedText = braille.toBraille(textInput);
    setBrailleText(convertedText);
  }, [textInput]);

  return (
    <>
      <Select
        defaultValue="braille"
        label="Display mode"
        data={[
          { value: "Braille", label: "Braille" },
          { value: "Text", label: "Text" },
        ]}
        value={displayMode}
        onChange={(value: any) => setDisplayMode(value)}
      />
      <ScrollArea bg="#f8f9fa" h={250} p="xl">
        <Box pos="absolute" right={5} top={5}>
          <CopyButton
            value={displayMode === "Braille" ? brailleText : textInput}
            timeout={2000}
          >
            {({ copied, copy }) => (
              <Tooltip
                label={copied ? "Copied" : "Copy"}
                withArrow
                position="right"
              >
                <ActionIcon
                  variant="transparent"
                  color={copied ? "teal" : "gray"}
                  onClick={copy}
                >
                  {copied ? <CopyCheck size="1rem" /> : <Copy size="1rem" />}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </Box>
        {textInput.length === 0 && (
          <Text c="gray" align="center">
            Your {displayMode} will be generated here
          </Text>
        )}
        {displayMode === "Braille" &&
          brailleText.split("").map((char, i) => (
            <Box key={i} display="inline-block">
              <Text>{char}</Text>
            </Box>
          ))}
        {displayMode === "Text" && <Text>{textInput}</Text>}
      </ScrollArea>
    </>
  );
};

export default BrailleArea;
