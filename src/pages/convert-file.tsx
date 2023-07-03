import BrailleArea from "@/components/BrailleArea";
import { Stack, FileInput, Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { pdfjs } from "react-pdf";

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
          const pdfText = await parsePdfData(pdfData);
          setPlaceholder(pdfText);
        } catch (error) {
          console.error("Error parsing PDF:", error);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  }, [file]);

  const parsePdfData = async (pdfData: Uint8Array) => {
    // Load the PDF data using pdf.js
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const pdfDocument = await pdfjs.getDocument({ data: pdfData }).promise;

    let pdfText = "";

    // Get the text of first page in the PDF
    const pdfPage = await pdfDocument.getPage(1);
    const pageText = await pdfPage.getTextContent();
    pdfText += pageText.items.map((item: any) => item.str).join(" ");

    return pdfText;
  };

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
