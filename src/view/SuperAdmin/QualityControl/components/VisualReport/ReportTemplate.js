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
        paddingLeft: "3%",
        paddingRight: "3%",
        fontSize: "9px",
        pageBreakAfter: "always",
      }}
    >
      <div
        className="report w-full relative"
        style={{
          border: "2px solid black",
          marginTop: "9px",
          fontSize: "9px",
          padding: "10px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5px" }}>
          <h1 style={{ fontSize: "16px", fontWeight: "bold", margin: "0" }}>
            BROTHERS INDUSTRIES
          </h1>
        </div>

        {/* Contact Info */}
        <div style={{ textAlign: "center", marginBottom: "10px", fontSize: "8px" }}>
          <p style={{ margin: "2px 0" }}>
            Maharashtra, India Mob. -7588777800, 9764705724 E-Mail - brothersindustries07@gmail.com
          </p>
        </div>

        <div
          style={{
            textAlign: "center",
            marginBottom: "15px",
            borderBottom: "1px solid black",
            paddingBottom: "5px",
          }}
        >
          <h2 style={{ fontSize: "13px", fontWeight: "bold", margin: "0" }}>
            VISUAL INSPECTION REPORT
          </h2>
        </div>

        {/* Customer Name and Report Date */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <div>
            <span style={{ fontWeight: "bold" }}>CUSTOMER NAME:</span>{" "}
            {CustomerDetails?.label || "--"}
          </div>
          <div>
            <span style={{ fontWeight: "bold" }}>REPORT DATE:</span>{" "}
            {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Inspection Table */}
        <div style={{ marginBottom: "15px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "8px",
            }}
          >
            <thead>
              {/* Main Headers */}
              <tr style={{ backgroundColor: "#f3f4f6" }}>
                <th
                  rowSpan="2"
                  style={{
                    border: "1px solid black",
                    padding: "4px 2px",
                    textAlign: "center",
                    width: "3%",
                  }}
                >
                  SR.NO
                </th>
                <th
                  rowSpan="2"
                  style={{
                    border: "1px solid black",
                    padding: "4px 2px",
                    textAlign: "center",
                    width: "8%",
                  }}
                >
                  P.O.No
                </th>
                <th
                  rowSpan="2"
                  style={{
                    border: "1px solid black",
                    padding: "4px 2px",
                    textAlign: "center",
                    width: "7%",
                  }}
                >
                  PROJECT NO
                </th>
                <th
                  rowSpan="2"
                  style={{
                    border: "1px solid black",
                    padding: "4px 2px",
                    textAlign: "center",
                    width: "12%",
                  }}
                >
                  DESCRIPTION
                </th>
                <th
                  rowSpan="2"
                  style={{
                    border: "1px solid black",
                    padding: "4px 2px",
                    textAlign: "center",
                    width: "6%",
                  }}
                >
                  GRADE
                </th>
                <th
                  rowSpan="2"
                  style={{
                    border: "1px solid black",
                    padding: "4px 2px",
                    textAlign: "center",
                    width: "6%",
                  }}
                >
                  HEAT NO.
                </th>
                <th
                  rowSpan="2"
                  style={{
                    border: "1px solid black",
                    padding: "4px 2px",
                    textAlign: "center",
                    width: "4%",
                  }}
                >
                  QTY
                </th>
                <th
                  colSpan="7"
                  style={{
                    border: "1px solid black",
                    padding: "4px 2px",
                    textAlign: "center",
                  }}
                >
                  PARAMETERS TO CHECK
                </th>
                <th
                  rowSpan="2"
                  style={{
                    border: "1px solid black",
                    padding: "4px 2px",
                    textAlign: "center",
                    width: "10%",
                  }}
                >
                  REMARK
                </th>
              </tr>
              {/* Sub Headers for Parameters */}
              <tr style={{ backgroundColor: "#f3f4f6" }}>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "4px 2px",
                    textAlign: "center",
                    width: "5%",
                  }}
                >
                  DEBURRING
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "4px 2px",
                    textAlign: "center",
                    width: "5%",
                  }}
                >
                  DENT
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "4px 2px",
                    textAlign: "center",
                    width: "5%",
                  }}
                >
                  SURFACE FINISH
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "4px 2px",
                    textAlign: "center",
                    width: "5%",
                  }}
                >
                  CRACKS
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "4px 2px",
                    textAlign: "center",
                    width: "5%",
                  }}
                >
                  PIN HOLES
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "4px 2px",
                    textAlign: "center",
                    width: "5%",
                  }}
                >
                  OTHERS
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "4px 2px",
                    textAlign: "center",
                    width: "6%",
                  }}
                >
                  ACCEPTABLE
                </th>
              </tr>
              {/* Status Row */}
              <tr style={{ backgroundColor: "#e5e7eb" }}>
                <td colSpan="7" style={{ border: "1px solid black", padding: "2px" }}></td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "2px",
                    textAlign: "center",
                    fontSize: "7px",
                  }}
                >
                  DONE
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "2px",
                    textAlign: "center",
                    fontSize: "7px",
                  }}
                >
                  NOT FOUND
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "2px",
                    textAlign: "center",
                    fontSize: "7px",
                  }}
                >
                  FOUND OK
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "2px",
                    textAlign: "center",
                    fontSize: "7px",
                  }}
                >
                  NOT FOUND
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "2px",
                    textAlign: "center",
                    fontSize: "7px",
                  }}
                >
                  NOT FOUND
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "2px",
                    textAlign: "center",
                    fontSize: "7px",
                  }}
                >
                  DONE
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "2px",
                    textAlign: "center",
                    fontSize: "7px",
                  }}
                >
                  ACCEPTABLE
                </td>
                <td style={{ border: "1px solid black", padding: "2px" }}></td>
              </tr>
            </thead>
            <tbody>
              {/* Data Rows */}
              {qualityItems.length > 0 ? (
                qualityItems.map((item, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "6px 2px",
                        textAlign: "center",
                      }}
                    >
                      {index + 1}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "6px 2px",
                        textAlign: "center",
                      }}
                    >
                      {item?.Po?.number || ""}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "6px 2px",
                        textAlign: "center",
                      }}
                    >
                      {item?.project_no || ""}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "6px 2px",
                      }}
                    >
                      {ProductDetails?.label || ""}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "6px 2px",
                        textAlign: "center",
                      }}
                    ></td>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "6px 2px",
                        textAlign: "center",
                      }}
                    ></td>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "6px 2px",
                        textAlign: "center",
                      }}
                    >
                      {item?.PoList?.quantity || 0}
                    </td>
                    {/* Parameters columns */}
                    {[1, 2, 3, 4, 5, 6, 7].map((col) => (
                      <td
                        key={col}
                        style={{
                          border: "1px solid black",
                          padding: "6px 2px",
                        }}
                      ></td>
                    ))}
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "6px 2px",
                      }}
                    ></td>
                  </tr>
                ))
              ) : (
                // Empty rows if no items
                [...Array(10)].map((_, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "10px 2px",
                        textAlign: "center",
                      }}
                    ></td>
                    {[...Array(15)].map((_, colIndex) => (
                      <td
                        key={colIndex}
                        style={{
                          border: "1px solid black",
                          padding: "10px 2px",
                        }}
                      ></td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Summary */}
        <div style={{ marginBottom: "20px", fontSize: "9px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
            <div>
              <span style={{ fontWeight: "bold" }}>TOTAL CASTING INSPECTION:</span> {totalQty}
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>NO.OF CASTING ACCEPTED:</span> {totalQty}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <span style={{ fontWeight: "bold" }}>TOTAL CASTING ON DEVIATION:</span> NIL
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>NO.OF CASTING REJECTED:</span> NIL
            </div>
          </div>
        </div>

        {/* Footer Signatures */}
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <p style={{ margin: "0", fontSize: "9px", fontWeight: "bold" }}>
              Inspected by
            </p>
            <div
              style={{
                marginTop: "50px",
                marginBottom: "5px",
              }}
            ></div>
            <p style={{ margin: "0", fontSize: "9px" }}>Job Inspector</p>
            <p style={{ margin: "0", fontSize: "9px" }}>BI/QA/</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ margin: "0", fontSize: "9px", fontWeight: "bold" }}>
              Verified By
            </p>
            <div
              style={{
                marginTop: "50px",
                marginBottom: "5px",
              }}
            ></div>
            <p style={{ margin: "0", fontSize: "9px" }}>Authorized Signatory</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportTemplate;
