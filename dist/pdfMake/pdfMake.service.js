"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfMakeService = void 0;
const pdfMake = require("pdfmake/build/pdfmake");
const pdfFonts = require("pdfmake/build/vfs_fonts");
class PdfMakeService {
    constructor() {
        pdfMake.vfs = pdfFonts.vfs;
    }
    async generatePdf(docDefinition) {
        return new Promise((resolve) => {
            const pdfDocGenerator = pdfMake.createPdf(docDefinition);
            pdfDocGenerator.getBuffer((buffer) => {
                resolve(Buffer.from(buffer));
            });
        });
    }
}
exports.PdfMakeService = PdfMakeService;
//# sourceMappingURL=pdfMake.service.js.map