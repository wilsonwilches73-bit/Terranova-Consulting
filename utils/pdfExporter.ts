// This utility uses jsPDF and html2canvas, which are loaded from a CDN in index.html.
// We declare them here to inform TypeScript that they will be available on the window object at runtime.
declare const jspdf: any;
declare const html2canvas: any;

/**
 * Exports a given HTML element to a downloadable PDF file.
 * @param element The HTMLElement to be converted into a PDF.
 * @param fileName The desired name for the downloaded PDF file.
 */
export const exportToPdf = async (
  element: HTMLElement,
  fileName: string
): Promise<void> => {
  if (!element || typeof html2canvas === 'undefined' || typeof jspdf === 'undefined') {
    console.error("PDF export dependencies are not loaded or the element is missing.");
    return;
  }

  try {
    // Use html2canvas to render the element to a canvas with higher resolution
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');

    // Initialize jsPDF for an A4 page
    const { jsPDF } = jspdf;
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4',
    });

    // Calculate dimensions
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const ratio = canvasWidth / pdfWidth;
    const scaledCanvasHeight = canvasHeight / ratio;

    let position = 0;
    let heightLeft = scaledCanvasHeight;

    // Add the first page
    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, scaledCanvasHeight);
    heightLeft -= pdfHeight;

    // Add new pages if the content overflows
    while (heightLeft > 0) {
      position = -heightLeft; // The position is the negative offset from the top
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, scaledCanvasHeight);
      heightLeft -= pdfHeight;
    }

    // Save the generated PDF
    pdf.save(fileName);
  } catch (error) {
    console.error("An error occurred during PDF export:", error);
  }
};