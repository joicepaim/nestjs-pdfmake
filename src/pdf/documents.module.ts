import { Module } from '@nestjs/common';
import { DocumentsController } from './documentsController';
import { PdfService } from './pdf.service';
import { PdfMakeModule } from 'src/pdfMake/pdfMake.module';

@Module({
  imports: [PdfMakeModule],
  controllers: [DocumentsController],
  providers: [PdfService],
  exports: [PdfService],
})
export class DocumentsModule {}
