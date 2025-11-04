import React, { useRef, useState } from "react";
import { Button } from "../../../../../components/ui";
import { useReactToPrint } from "react-to-print";
import ReportTemplate from "./ReportTemplate";

const VisualReport = ({ data, onClose }) => {
  const componentRef = useRef();
  const [previewUrl, setPreviewUrl] = useState(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `visual-report-${data?.CustomerDetails?.label || "report"}`,
    pageStyle: `
      @media print {
        body {
          -webkit-print-color-adjust: exact;
        }
        .page {
          page-break-after: always;
          page-break-inside: avoid;
        }
        .report {
          page-break-inside: avoid;
        }
        .pageMargin{
          padding-top: 50px;
          padding-left: 10px;
          padding-right: 10px;
        }
      }
    `,
  });

  const handleGeneratePreview = () => {
    const node = componentRef.current;

    if (node) {
      const html = node.outerHTML;
      const blob = new Blob([html], { type: "text/html" });
      const blobUrl = URL.createObjectURL(blob);
      setPreviewUrl(blobUrl);
    }
  };

  const handlePrintAndPreview = () => {
    handlePrint();
    handleGeneratePreview();
  };

  return (
    data && (
      <>
        <div className="flex gap-4 mb-4">
          <Button
            variant="solid"
            color="orange-500"
            onClick={handlePrintAndPreview}
          >
            Print & Preview
          </Button>
          <Button
            className="border border-orange-200 !bg-white text-orange-500"
            onClick={onClose}
          >
            Close
          </Button>
        </div>

        {previewUrl && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Report Preview:</h3>
            <div
              style={{
                width: "100%",
                margin: "0 auto",
                height: "calc(100vh - 300px)",
                border: "1px solid black",
                overflow: "auto",
              }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: `<div>${componentRef.current?.outerHTML}</div>`,
                }}
              />
            </div>
          </div>
        )}

        <div style={{ display: "none" }}>
          <div ref={componentRef} className="pageMargin">
            <ReportTemplate data={data} />
          </div>
        </div>
      </>
    )
  );
};

export default VisualReport;

