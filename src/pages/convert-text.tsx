import React, { useState } from "react";
import { Button, Stack, Textarea } from "@mantine/core";
import BrailleArea from "@/components/BrailleArea";

const TextConvertPage = () => {
  const [text, setText] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("");

  return (
    <Stack>
      <BrailleArea textInput={text} />
      <Stack>
        <Textarea
          maxRows={2}
          placeholder="Enter text to convert to Braille"
          onChange={(e) => setPlaceholder(e.currentTarget.value)}
        />
        <Button
          disabled={!placeholder}
          onClick={() => setText(placeholder)}
          variant="outline"
          m="auto"
        >
          Convert Text
        </Button>
      </Stack>
    </Stack>
  );
};

export default TextConvertPage;
