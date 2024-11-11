import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { PdfService } from './pdf.service';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('example-pdf')
  async generateExamplePdf(@Res() res: Response) {
    const pdfBuffer = await this.pdfService.generateSamplePdf();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename=example.pdf',
      'Content-Length': pdfBuffer.length,
    });

    res.end(pdfBuffer);
  }
}
