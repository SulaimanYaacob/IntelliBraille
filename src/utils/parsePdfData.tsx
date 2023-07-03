import { pdfjs } from "react-pdf";

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

export default parsePdfData;
