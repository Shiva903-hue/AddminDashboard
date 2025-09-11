import React from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


export default function ExcelExport() {
  const voucherData = [
    {
      reportTitle: "Voucher Report",
      generatedOn: "2025-09-10",
      vouchers: [
        {
          voucherId: "VCH-1001",
          date: "2025-09-01",
          amount: 5000,
          status: "Approved",
        },
        {
          voucherId: "VCH-1002",
          date: "2025-09-02",
          amount: 3200,
          status: "Pending",
        },
        {
          voucherId: "VCH-1003",
          date: "2025-09-03",
          amount: 1500,
          status: "Rejected",
        },
      ],
    },
  ];

//   const handleExcelExport= ()=>{
//           // console.log(voucherData)
//           var wb = XLSX.utils.book_new(), 
//           ws = XLSX.utils.json_to_sheet(voucherData);
//           XLSX.utils.book_append_sheet( wb , ws , 'mysheet1');

//           XLSX.writeFile(wb,'myExcel.xlsx');
//   }

const handleExcelExport = () => {
  const wb = XLSX.utils.book_new();

  // pick the first object inside array
  const report = voucherData[0];

  // 1) Add report info
  const reportInfo = [
    ["Report Title", report.reportTitle],
    ["Generated On", report.generatedOn],
    []
  ];
  const ws = XLSX.utils.aoa_to_sheet(reportInfo);

  // 2) Add vouchers table
  if (Array.isArray(report.vouchers)) {
    XLSX.utils.sheet_add_json(ws, report.vouchers, { origin: -1 });
  }

  // 3) Append and save
  XLSX.utils.book_append_sheet(wb, ws, "Voucher Report");
  XLSX.writeFile(wb, "voucher_report.xlsx");
};

const handlePdfExport = () => {
  const report = voucherData[0];
  const doc = new jsPDF();

  // Add header info
  doc.setFontSize(14);
  doc.text("Voucher Report", 14, 20);
  doc.setFontSize(11);
  doc.text(`Report Title: ${report.reportTitle}`, 14, 30);
  doc.text(`Generated On: ${report.generatedOn}`, 14, 38);

  // Table
  const tableColumn = ["Voucher ID", "Date", "Amount", "Status"];
  const tableRows = report.vouchers.map(v => [
    v.voucherId,
    v.date,
    v.amount,
    v.status,
  ]);

  // Use autoTable correctly
  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 50,
  });

  doc.save("voucher_report.pdf");
};

  return (
    <div className="flex flex-wrap gap-6 ">
      <button onClick={handleExcelExport}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
        Download Excel File
      </button>
      <button onClick={handlePdfExport}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
        Download PDF File
      </button>
    </div>
  );
}
