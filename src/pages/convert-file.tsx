import BrailleArea from "@/components/BrailleArea";
import parsePdfData from "@/utils/parsePdfData";
import { Stack, FileInput, Button } from "@mantine/core";
import { useEffect, useState } from "react";

const FileConvertPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [placeholder, setPlaceholder] = useState<string>("");
  const [pdfText, setPdfText] = useState<string>("");

  // Use useEffect to trigger the PDF parsing when the file state changes
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        const pdfData = new Uint8Array(reader.result as ArrayBuffer);
        try {
          const parsedText = await parsePdfData(pdfData);
          setPlaceholder(parsedText);
        } catch (error) {
          console.error("Error parsing PDF:", error);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  }, [file]);

  return (
    <Stack>
      <BrailleArea textInput={pdfText} />
      <Stack>
        <FileInput
          accept="application/pdf"
          onChange={setFile}
          title="Upload File"
        />
        <Button
          onClick={() => setPdfText(placeholder)}
          variant="outline"
          m="auto"
        >
          Convert File
        </Button>
      </Stack>
    </Stack>
  );
};

export default FileConvertPage;
