import React from 'react'

const GstAndOtherDetails = ({ company, shipping }) => {
  return (
    <div className="p-1">
      <div className="flex gap-1 justify-start uppercase mt-2">
        <p className="text-gray-700 font-semibold print:text-sm">IEC CODE</p>
        <p className="text-gray-700 print:text-sm">-</p>
        <p className="text-gray-500 font-medium print:text-sm">
          {company?.iec_code}
        </p>
      </div>
      <div className="flex gap-1  justify-start uppercase">
        <p className="text-gray-700 font-semibold print:text-sm">GSTIN</p>
        <p className="text-gray-700 print:text-sm">-</p>
        <p className="text-gray-500 font-medium print:text-sm">
          {company?.gstin}
        </p>
      </div>
      <div className="flex gap-1  justify-start uppercase">
        <p className="text-gray-700 font-semibold print:text-sm">
          END USE CODE
        </p>
        <p className="text-gray-700 print:text-sm">-</p>
        <p className="text-gray-500 font-medium print:text-sm">
          {shipping?.end_use_code}
        </p>
      </div>
      <div className="flex gap-1  justify-start uppercase">
        <p className="text-gray-700 font-semibold print:text-sm">HSN NO</p>
        <p className="text-gray-700 print:text-sm">-</p>
        <p className="text-gray-500 font-medium print:text-sm">84139190</p>
      </div>
      <div className="flex gap-1  justify-start uppercase">
        <p className="text-gray-700 font-semibold print:text-sm">PAYMENT</p>
        <p className="text-gray-700 print:text-sm">-</p>
        <p className="text-gray-500 font-medium print:text-sm">
          {shipping?.payment_term}
        </p>
      </div>
      <div className="flex gap-1  justify-start uppercase">
        <p className="text-gray-700 font-semibold print:text-sm">BILL TYPE</p>
        <p className="text-gray-700 print:text-sm">-</p>
        <p className="text-gray-500 font-medium print:text-sm">
          {shipping?.bill_type || 'NON GST'}
        </p>
      </div>
      {shipping?.bill_type === 'IGST' && shipping?.i_gst > 0 && (
        <div className="flex gap-1  justify-start uppercase">
          <p className="text-gray-700 font-semibold print:text-sm">IGST</p>
          <p className="text-gray-700 print:text-sm">-</p>
          <p className="text-gray-500 font-medium print:text-sm">
            {shipping?.i_gst}%
          </p>
        </div>
      )}
      {shipping?.bill_type === 'GST' && (
        <>
          {shipping?.c_gst > 0 && (
            <div className="flex gap-1  justify-start uppercase">
              <p className="text-gray-700 font-semibold print:text-sm">CGST</p>
              <p className="text-gray-700 print:text-sm">-</p>
              <p className="text-gray-500 font-medium print:text-sm">
                {shipping?.c_gst}%
              </p>
            </div>
          )}
          {shipping?.s_gst > 0 && (
            <div className="flex gap-1  justify-start uppercase">
              <p className="text-gray-700 font-semibold print:text-sm">SGST</p>
              <p className="text-gray-700 print:text-sm">-</p>
              <p className="text-gray-500 font-medium print:text-sm">
                {shipping?.s_gst}%
              </p>
            </div>
          )}
        </>
      )}
      {shipping?.e_way_bill_no && (
        <div className="flex gap-1  justify-start uppercase">
          <p className="text-gray-700 font-semibold print:text-sm">E-WAY BILL NO</p>
          <p className="text-gray-700 print:text-sm">-</p>
          <p className="text-gray-500 font-medium print:text-sm">
            {shipping?.e_way_bill_no}
          </p>
        </div>
      )}
      {shipping?.remark && (
        <div className="flex gap-1  justify-start uppercase">
          <p className="text-gray-700 font-semibold print:text-sm">REMARK</p>
          <p className="text-gray-700 print:text-sm">-</p>
          <p className="text-gray-500 font-medium print:text-sm">
            {shipping?.remark}
          </p>
        </div>
      )}
    </div>
  )
}

export default GstAndOtherDetails
