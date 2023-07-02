import AppLayout from "@/components/AppLayout";
import { Braille } from "@/types/braille";
import { Button, Center, Text } from "@mantine/core";
const braille = require("braille") as Braille;
import React from "react";

function index() {
  const brailleText = braille.toBraille(
    "Fugiat ut eu eu ex reprehenderit consectetur. "
  );

  const text = braille.toText(brailleText);
  return (
    <Center>
      <Text>{text}</Text>
    </Center>
  );
}

export default index;
