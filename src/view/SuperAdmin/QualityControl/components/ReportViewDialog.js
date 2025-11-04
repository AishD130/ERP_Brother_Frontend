import React from "react";
import Dialog from "../../../../components/ui/Dialog";
import DimensionReport from "./DimensionReport";
import VisualReport from "./VisualReport";

const ReportViewDialog = ({ isOpen, onClose, reportType, data }) => {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      closable={true}
      width="90%"
      height="90vh"
    >
      <div className="p-6">
        {reportType === "dimension" && (
          <DimensionReport data={data} onClose={onClose} />
        )}
        {reportType === "visual" && (
          <VisualReport data={data} onClose={onClose} />
        )}
      </div>
    </Dialog>
  );
};

export default ReportViewDialog;

