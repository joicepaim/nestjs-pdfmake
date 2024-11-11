import { Response } from 'express';
import { PdfService } from './pdf.service';
export declare class DocumentsController {
    private readonly pdfService;
    constructor(pdfService: PdfService);
    generateExamplePdf(res: Response): Promise<void>;
}
