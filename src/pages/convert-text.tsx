import React, { useState } from "react";
import { Braille } from "@/types/braille";
import { Button, Stack, Textarea } from "@mantine/core";
import BrailleArea from "@/components/BrailleArea";
const braille = require("braille") as Braille;

const TextConvertPage = () => {
  const [text, setText] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("");

  return (
    <Stack>
      <BrailleArea textInput={text} />
      <Stack>
        <Textarea
          autosize
          placeholder="Input text to convert to braille"
          onChange={(e) => setPlaceholder(e.currentTarget.value)}
        />
        <Button onClick={() => setText(placeholder)} variant="outline" m="auto">
          Convert Text
        </Button>
      </Stack>
    </Stack>
  );
};

export default TextConvertPage;
