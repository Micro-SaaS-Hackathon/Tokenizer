import * as pdfjsLib from "pdfjs-dist";
import mammoth from "mammoth";

// PDF.js worker ayarı
pdfjsLib.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

const API_BASE_URL = "https://0bb822c3119b.ngrok-free.app";

/**
 * PDF dosyasından text çıkarır
 */
const extractTextFromPDF = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

  let text = "";
  for (let i = 0; i < pdf.numPages; i++) {
    const page = await pdf.getPage(i + 1);
    const content = await page.getTextContent();
    text += content.items.map((s) => s.str).join(" ") + "\n";
  }

  return text;
};

/**
 * DOCX dosyasından text çıkarır
 */
const extractTextFromDocx = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value;
};

/**
 * API'ye gönderilecek genel analiz fonksiyonu
 */
export const analyzeContract = async (file) => {
  try {
    let textContent = "";

    // Text dosyası
    if (file.type === "text/plain" || file.name.endsWith(".txt")) {
      textContent = await file.text();
    }
    // PDF dosyası
    else if (file.type === "application/pdf") {
      textContent = await extractTextFromPDF(file);
    }
    // DOCX dosyası
    else if (
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.type === "application/msword" ||
      file.name.endsWith(".docx") ||
      file.name.endsWith(".doc")
    ) {
      textContent = await extractTextFromDocx(file);
    }
    else {
      throw new Error("Unsupported file type. Please upload PDF, DOCX, or TXT.");
    }

    if (!textContent.trim()) {
      throw new Error("File is empty or no text could be extracted.");
    }

    const response = await fetch(`${API_BASE_URL}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: textContent }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`API request failed: ${response.status} - ${errText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("AI Service Error:", error);
    throw error;
  }
};
