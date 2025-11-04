import React from "react";

const ReportTemplate = ({ data }) => {
  const { CustomerDetails, ProductDetails, qualityItems = [] } = data;
  
  // Calculate totals
  const totalQty = qualityItems.reduce(
    (sum, item) => sum + (item?.PoList?.quantity || 0),
    0
  );

  return (
    <div
      className="page"
      style={{
        paddingLeft: "4%",
        paddingRight: "4%",
        fontSize: "10px",
        pageBreakAfter: "always",
      }}
    >
      <div
        className="report w-full relative"
        style={{
          border: "2px solid black",
          marginTop: "9px",
          fontSize: "10px",
          padding: "10px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <h1 style={{ fontSize: "18px", fontWeight: "bold", margin: "0" }}>
            BROTHERS INDUSTRIES
          </h1>
        </div>

        <div
          style={{
            textAlign: "center",
            marginBottom: "15px",
            borderBottom: "1px solid black",
            paddingBottom: "5px",
          }}
        >
          <h2 style={{ fontSize: "14px", fontWeight: "bold", margin: "0" }}>
            FINAL INSPECTION REPORT
          </h2>
        </div>

        {/* Info Section - Two Columns */}
        <div style={{ display: "flex", marginBottom: "10px" }}>
          {/* Left Column */}
          <div style={{ flex: 1, paddingRight: "20px" }}>
            <table style={{ width: "100%", fontSize: "10px" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "3px 0", fontWeight: "bold", width: "45%" }}>
                    CUSTOMER :
                  </td>
                  <td style={{ padding: "3px 0" }}>
                    {CustomerDetails?.label || "---"}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "3px 0", fontWeight: "bold" }}>
                    COMPONENT NAME :
                  </td>
                  <td style={{ padding: "3px 0" }}>
                    {ProductDetails?.label || "---"}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "3px 0", fontWeight: "bold" }}>
                    M/C DRG. NO / REV. :
                  </td>
                  <td style={{ padding: "3px 0" }}>
                    {qualityItems[0]?.drawing_number || "---"}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "3px 0", fontWeight: "bold" }}>GRADE :</td>
                  <td style={{ padding: "3px 0" }}>---</td>
                </tr>
                <tr>
                  <td style={{ padding: "3px 0", fontWeight: "bold" }}>DATE :</td>
                  <td style={{ padding: "3px 0" }}>
                    {new Date().toLocaleDateString()}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "3px 0", fontWeight: "bold" }}>HEAT NO :</td>
                  <td style={{ padding: "3px 0" }}>---</td>
                </tr>
                <tr>
                  <td style={{ padding: "3px 0", fontWeight: "bold" }}>
                    PROJECT NO :
                  </td>
                  <td style={{ padding: "3px 0" }}>
                    {qualityItems[0]?.project_no || "---"}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "3px 0", fontWeight: "bold" }}>
                    PO.SR.NO.:
                  </td>
                  <td style={{ padding: "3px 0" }}>
                    {qualityItems[0]?.PoList?.serial_number || "---"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Column */}
          <div style={{ flex: 1, paddingLeft: "20px" }}>
            <table style={{ width: "100%", fontSize: "10px" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "3px 0", fontWeight: "bold", width: "45%" }}>
                    PO. NO. :
                  </td>
                  <td style={{ padding: "3px 0" }}>
                    {qualityItems[0]?.Po?.number || "---"}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "3px 0", fontWeight: "bold" }}>QTY.:</td>
                  <td style={{ padding: "3px 0" }}>
                    {totalQty} NOS
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "3px 0", fontWeight: "bold" }}>
                    OFFER QTY :
                  </td>
                  <td style={{ padding: "3px 0" }}>{totalQty} NOS</td>
                </tr>
                <tr>
                  <td style={{ padding: "3px 0", fontWeight: "bold" }}>
                    REWORK QTY :
                  </td>
                  <td style={{ padding: "3px 0" }}>00 NOS</td>
                </tr>
                <tr>
                  <td style={{ padding: "3px 0", fontWeight: "bold" }}>
                    ACCEPTED QTY :
                  </td>
                  <td style={{ padding: "3px 0" }}>{totalQty} NOS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Inspection Table */}
        <div style={{ marginTop: "15px", marginBottom: "15px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "9px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f3f4f6" }}>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "4px",
                    textAlign: "center",
                    width: "4%",
                  }}
                >
                  SR.NO.
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "4px",
                    textAlign: "center",
                    width: "16%",
                  }}
                >
                  DESCRIPTION
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "4px",
                    textAlign: "center",
                    width: "12%",
                  }}
                >
                  REQUIRED DIMENSIONS
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "4px",
                    textAlign: "center",
                    width: "8%",
                  }}
                >
                  TOLERANCE
                </th>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <th
                    key={num}
                    style={{
                      border: "1px solid black",
                      padding: "4px",
                      textAlign: "center",
                      width: "6%",
                    }}
                  >
                    {num}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Empty rows for manual entry */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rowNum) => (
                <tr key={rowNum}>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "8px 4px",
                      textAlign: "center",
                    }}
                  >
                    {rowNum}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "8px 4px",
                    }}
                  ></td>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "8px 4px",
                    }}
                  ></td>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "8px 4px",
                    }}
                  ></td>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((colNum) => (
                    <td
                      key={colNum}
                      style={{
                        border: "1px solid black",
                        padding: "8px 4px",
                      }}
                    ></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Signatures */}
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <p style={{ margin: "0", fontSize: "10px", fontWeight: "bold" }}>
              DEPT. HEAD
            </p>
            <div
              style={{
                marginTop: "40px",
                borderBottom: "1px solid black",
                width: "200px",
              }}
            ></div>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ margin: "0", fontSize: "10px", fontWeight: "bold" }}>
              BROTHERS QA
            </p>
            <div
              style={{
                marginTop: "40px",
                borderBottom: "1px solid black",
                width: "200px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportTemplate;

