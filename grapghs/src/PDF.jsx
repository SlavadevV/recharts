import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

export const printDocument = () => {
    html2canvas(document.querySelector("#my-component")).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('l', 'mm', [640, 480]);
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("document.pdf");
    });
}
