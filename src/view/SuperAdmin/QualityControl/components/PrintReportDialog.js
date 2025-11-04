import React from "react";
import { Button } from "../../../../components/ui";
import Dialog from "../../../../components/ui/Dialog";

const PrintReportDialog = ({ isOpen, onClose, onDimensionReport, onVisualReport }) => {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      closable={true}
      width={500}
    >
      <div className="p-6">
        <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Print Report
        </h4>
        <div className="flex flex-col gap-4">
          <Button
            variant="solid"
            color="orange-500"
            className="py-3 text-base font-medium"
            onClick={() => {
              onDimensionReport();
              onClose();
            }}
          >
            Dimension Report
          </Button>
          <Button
            className="py-3 text-base font-medium border border-orange-200 !bg-white text-orange-500"
            onClick={() => {
              onVisualReport();
              onClose();
            }}
          >
            Visual Report
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default PrintReportDialog;

