import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

export class PdfMakeService {
  constructor() {
    // Certifique-se de configurar o vfs (Virtual File System) com as fontes.
    (pdfMake as any).vfs = pdfFonts.vfs
  }

  async generatePdf(docDefinition: any): Promise<Buffer> {
    return new Promise((resolve) => {
      const pdfDocGenerator = pdfMake.createPdf(docDefinition);

      // Gera o buffer para o PDF
      pdfDocGenerator.getBuffer((buffer) => {
        resolve(Buffer.from(buffer));
      });
    });
  }
}
