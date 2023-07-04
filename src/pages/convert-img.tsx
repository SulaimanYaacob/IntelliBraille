import { Button, FileInput, Image, Progress, Stack, Text } from "@mantine/core";
import {
  createWorker,
  Worker as TesseractWorker,
  RecognizeResult,
} from "tesseract.js";
import { useEffect, useRef, useState } from "react";
import BrailleArea from "@/components/BrailleArea";
import { Upload } from "lucide-react";

//TODO show modal after upload image
const ImageConvertPage = () => {
  const [imageData, setImageData] = useState<null | string>(null);
  const loadFile = (file: File | null) => {
    if (!file) {
      console.error("No file selected.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri = reader.result;
      setImageData(imageDataUri as string);
    };

    // Create a Blob from the File
    const blob = new Blob([file], { type: file.type });

    reader.readAsDataURL(blob);
  };

  const [ocrResult, setOcrResult] = useState<string>("");

  const workerRef = useRef<Promise<TesseractWorker> | null>(null);

  useEffect(() => {
    workerRef.current = createWorker();

    return () => {
      workerRef.current?.then((worker) => worker.terminate());
    };
  }, []);

  const handleExtract = async () => {
    if (imageData) {
      const worker = await workerRef.current;
      if (worker) {
        await worker.loadLanguage("eng");
        await worker.initialize("eng");

        const response: RecognizeResult = await worker.recognize(imageData);
        setOcrResult(response.data.text);
      } else {
        console.error("Tesseract worker is not available.");
      }
    }

    setImageData(null);
  };

  return (
    <>
      <Stack>
        <BrailleArea textInput={ocrResult} />
        <FileInput
          icon={<Upload size="16" />}
          title="Upload Image"
          placeholder="Upload an Image"
          onChange={(files: File) => loadFile(files)}
          accept="image/*"
          multiple={false}
        />

        <Stack sx={{ flex: 1 }}>
          <Button
            variant="outline"
            m="auto"
            disabled={!imageData}
            onClick={handleExtract}
          >
            Extract & Convert Image
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default ImageConvertPage;
