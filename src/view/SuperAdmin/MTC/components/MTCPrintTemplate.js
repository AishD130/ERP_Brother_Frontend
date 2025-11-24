import React from "react";
import dayjs from "dayjs";

const MTCPrintTemplate = ({ data }) => {
  if (!data) return null;

  const formatDate = (date) => {
    if (!date) return "";
    if (typeof date === "string") return date;
    return dayjs(date).format("DD-MMM-YY");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* PAGE 1: MTC REPORT (without authorization) */}
      <div 
        className="page" 
        style={{ 
          padding: "40px", 
          pageBreakAfter: "always",
          pageBreakInside: "avoid",
          minHeight: "29.7cm",
          maxHeight: "29.7cm",
          overflow: "hidden"
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
            MATERIAL TEST CERTIFICATE (EN 10204 / ISO 10474 Type 3.1)
          </h1>
        </div>

        {/* 1. HEADER DETAILS */}
        <div style={{ marginBottom: "25px" }}>
          <h2 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "15px", textDecoration: "underline" }}>
            1. HEADER DETAILS
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", fontSize: "12px", marginBottom: "10px" }}>
            {/* Left Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div>
                <strong>Manufacturer:</strong> {data.manufacturer || ""}
              </div>
              <div>
                <strong>Address:</strong> {data.address || ""}
              </div>
            </div>
            
            {/* Right Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div>
                <strong>Customer:</strong> {data.customer || ""}
              </div>
              <div>
                <strong>Customer PO No:</strong> {data.customerPONo || ""}
              </div>
              <div>
                <strong>Certificate No:</strong> {data.certificateNo || ""}
              </div>
              <div>
                <strong>Date of Issue:</strong> {formatDate(data.dateOfIssue) || ""}
              </div>
            </div>
          </div>
          
          {/* Invoice Row */}
          <div style={{ display: "flex", gap: "30px", fontSize: "12px" }}>
            <div>
              <strong>Invoice No:</strong> {data.invoiceNo || ""}
            </div>
            <div>
              <strong>Invoice Date:</strong> {formatDate(data.invoiceDate) || ""}
            </div>
          </div>
        </div>

        {/* 2. PRODUCT IDENTIFICATION */}
        <div style={{ marginBottom: "25px" }}>
          <h2 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "15px", textDecoration: "underline" }}>
            2. PRODUCT IDENTIFICATION
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "11px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f0f0f0" }}>
                <th style={{ border: "1px solid #000", padding: "8px", textAlign: "left" }}>Item No</th>
                <th style={{ border: "1px solid #000", padding: "8px", textAlign: "left" }}>Part No</th>
                <th style={{ border: "1px solid #000", padding: "8px", textAlign: "left" }}>Material Grade</th>
                <th style={{ border: "1px solid #000", padding: "8px", textAlign: "left" }}>Heat / Cast No</th>
                <th style={{ border: "1px solid #000", padding: "8px", textAlign: "left" }}>Weight (kg)</th>
                <th style={{ border: "1px solid #000", padding: "8px", textAlign: "left" }}>Qty</th>
              </tr>
            </thead>
            <tbody>
              {data.productItems && data.productItems.length > 0 ? (
                data.productItems.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid #000", padding: "8px" }}>{item.itemNo || "-"}</td>
                    <td style={{ border: "1px solid #000", padding: "8px" }}>{item.partNo || "-"}</td>
                    <td style={{ border: "1px solid #000", padding: "8px" }}>{item.materialGrade || "-"}</td>
                    <td style={{ border: "1px solid #000", padding: "8px" }}>{item.heatCastNo || "-"}</td>
                    <td style={{ border: "1px solid #000", padding: "8px" }}>{item.weight || "-"}</td>
                    <td style={{ border: "1px solid #000", padding: "8px" }}>{item.qty || "-"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>
                    No items
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 3. CHEMICAL COMPOSITION (%) */}
        <div style={{ marginBottom: "25px" }}>
          <h2 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "15px", textDecoration: "underline" }}>
            3. CHEMICAL COMPOSITION (%)
          </h2>
          <div style={{ marginBottom: "10px", fontSize: "11px" }}>
            <strong>Heat No:</strong> {data.chemicalComposition?.heatNo || "-"}
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "10px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f0f0f0" }}>
                <th style={{ border: "1px solid #000", padding: "6px", textAlign: "left" }}>Description</th>
                <th style={{ border: "1px solid #000", padding: "6px", textAlign: "center" }}>C</th>
                <th style={{ border: "1px solid #000", padding: "6px", textAlign: "center" }}>Mn</th>
                <th style={{ border: "1px solid #000", padding: "6px", textAlign: "center" }}>Si</th>
                <th style={{ border: "1px solid #000", padding: "6px", textAlign: "center" }}>P</th>
                <th style={{ border: "1px solid #000", padding: "6px", textAlign: "center" }}>S</th>
                <th style={{ border: "1px solid #000", padding: "6px", textAlign: "center" }}>Ni</th>
                <th style={{ border: "1px solid #000", padding: "6px", textAlign: "center" }}>Cr</th>
                <th style={{ border: "1px solid #000", padding: "6px", textAlign: "center" }}>Mo</th>
                <th style={{ border: "1px solid #000", padding: "6px", textAlign: "center" }}>Cu</th>
                <th style={{ border: "1px solid #000", padding: "6px", textAlign: "center" }}>V</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #000", padding: "6px", fontWeight: "bold" }}>Req (Max)</td>
                {["c", "mn", "si", "p", "s", "ni", "cr", "mo", "cu", "v"].map((element) => (
                  <td key={element} style={{ border: "1px solid #000", padding: "6px", textAlign: "center" }}>
                    {data.chemicalComposition?.reqMax?.[element] || "-"}
                  </td>
                ))}
              </tr>
              <tr>
                <td style={{ border: "1px solid #000", padding: "6px", fontWeight: "bold" }}>Req (Min)</td>
                {["c", "mn", "si", "p", "s", "ni", "cr", "mo", "cu", "v"].map((element) => (
                  <td key={element} style={{ border: "1px solid #000", padding: "6px", textAlign: "center" }}>
                    {data.chemicalComposition?.reqMin?.[element] || "-"}
                  </td>
                ))}
              </tr>
              <tr>
                <td style={{ border: "1px solid #000", padding: "6px", fontWeight: "bold" }}>
                  {data.chemicalComposition?.heatNo || "Heat No"}
                </td>
                {["c", "mn", "si", "p", "s", "ni", "cr", "mo", "cu", "v"].map((element) => (
                  <td key={element} style={{ border: "1px solid #000", padding: "6px", textAlign: "center" }}>
                    {data.chemicalComposition?.actual?.[element] || "-"}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* 4. MECHANICAL PROPERTIES */}
        <div style={{ marginBottom: "25px" }}>
          <h2 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "15px", textDecoration: "underline" }}>
            4. MECHANICAL PROPERTIES
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "11px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f0f0f0" }}>
                <th style={{ border: "1px solid #000", padding: "8px", textAlign: "left" }}>Description</th>
                <th style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>Y.S (0.2% Offset)</th>
                <th style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>U.T.S</th>
                <th style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>Elongation (GL 50mm)</th>
                <th style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>Red. in Area</th>
                <th style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>Bend Test (D=3t)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #000", padding: "8px", fontWeight: "bold" }}>Unit</td>
                <td style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>MPa</td>
                <td style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>MPa</td>
                <td style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>%</td>
                <td style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>%</td>
                <td style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>Degrees</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #000", padding: "8px", fontWeight: "bold" }}>Req (Min)</td>
                {["ys", "uts", "elongation", "redInArea", "bendTest"].map((prop) => (
                  <td key={prop} style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>
                    {data.mechanicalProperties?.reqMin?.[prop] || "-"}
                  </td>
                ))}
              </tr>
              <tr>
                <td style={{ border: "1px solid #000", padding: "8px", fontWeight: "bold" }}>Req (Max)</td>
                {["ys", "uts", "elongation", "redInArea", "bendTest"].map((prop) => (
                  <td key={prop} style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>
                    {data.mechanicalProperties?.reqMax?.[prop] || "-"}
                  </td>
                ))}
              </tr>
              <tr>
                <td style={{ border: "1px solid #000", padding: "8px", fontWeight: "bold" }}>Actual</td>
                {["ys", "uts", "elongation", "redInArea", "bendTest"].map((prop) => (
                  <td key={prop} style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>
                    {data.mechanicalProperties?.actual?.[prop] || "-"}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* 5. SUPPLEMENTARY DETAILS */}
        <div style={{ marginBottom: "25px" }}>
          <h2 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "15px", textDecoration: "underline" }}>
            5. SUPPLEMENTARY DETAILS
          </h2>
          <div style={{ fontSize: "12px", lineHeight: "1.8" }}>
            <div style={{ marginBottom: "8px" }}>
              <strong>Heat Treatment:</strong> {data.heatTreatment || "-"}
            </div>
            <div style={{ marginBottom: "8px" }}>
              <strong>Tempering:</strong> {data.tempering || "-"}
            </div>
            <div style={{ marginBottom: "8px" }}>
              <strong>Hydrostatic Test:</strong> {data.hydrostaticTest || "-"}
            </div>
            <div style={{ marginBottom: "8px" }}>
              <strong>Ultrasonic Test:</strong> {data.ultrasonicTest || "-"}
            </div>
            <div style={{ marginBottom: "8px" }}>
              <strong>Visual Check:</strong> {data.visualCheck || "-"}
            </div>
            <div style={{ marginBottom: "8px" }}>
              <strong>Grade:</strong> {data.grade || "-"}
            </div>
          </div>
        </div>

        {/* 6. DECLARATION */}
        <div style={{ marginBottom: "25px" }}>
          <h2 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "15px", textDecoration: "underline" }}>
            6. DECLARATION
          </h2>
          <p style={{ fontSize: "12px", lineHeight: "1.6", textAlign: "justify" }}>
            We hereby certify that the material described above has been tested and inspected in accordance
            with the requirements of the Purchase Order and the specifications outlined above.
          </p>
        </div>

        {/* 7. AUTHORIZED SIGNATURES - On same page if space permits */}
        <div style={{ marginTop: "40px" }}>
          <h2 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "25px", textDecoration: "underline" }}>
            7. AUTHORIZED SIGNATURES
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", marginTop: "40px" }}>
            <div>
              <div style={{ fontSize: "13px", fontWeight: "bold", marginBottom: "5px" }}>
                AJAY KUMAR BIND
              </div>
              <div style={{ fontSize: "12px", marginBottom: "40px" }}>Chief Chemist</div>
              <div style={{ fontSize: "10px", color: "#666", borderTop: "1px solid #000", paddingTop: "5px", marginTop: "60px" }}>
                (Sign & Stamp Here)
              </div>
            </div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: "bold", marginBottom: "5px" }}>
                VISHAL RAMESH GURAV
              </div>
              <div style={{ fontSize: "12px", marginBottom: "40px" }}>QC Incharge</div>
              <div style={{ fontSize: "10px", color: "#666", borderTop: "1px solid #000", paddingTop: "5px", marginTop: "60px" }}>
                (Sign & Stamp Here)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 2: HEAT TREATMENT REPORT */}
      <div 
        className="page" 
        style={{ 
          padding: "40px", 
          pageBreakAfter: "always",
          pageBreakInside: "avoid",
          minHeight: "29.7cm",
          maxHeight: "29.7cm"
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
            HEAT TREATMENT REPORT
          </h1>
        </div>
        <div style={{ marginTop: "50px", fontSize: "12px" }}>
          <p style={{ marginBottom: "15px" }}>
            <strong>Certificate No:</strong> {data.certificateNo || ""}
          </p>
          <p style={{ marginBottom: "15px" }}>
            <strong>Heat Treatment:</strong> {data.heatTreatment || "-"}
          </p>
          <p style={{ marginBottom: "15px" }}>
            <strong>Tempering:</strong> {data.tempering || "-"}
          </p>
          <p style={{ marginBottom: "15px" }}>
            <strong>Heat No:</strong> {data.chemicalComposition?.heatNo || "-"}
          </p>
          {/* Add more heat treatment report details here */}
        </div>
      </div>

      {/* PAGE 3: HEAT TREATMENT GRAPH */}
      <div 
        className="page" 
        style={{ 
          padding: "40px", 
          pageBreakInside: "avoid",
          minHeight: "29.7cm",
          maxHeight: "29.7cm"
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
            HEAT TREATMENT GRAPH
          </h1>
        </div>
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <p style={{ fontSize: "12px", marginBottom: "15px" }}>
            <strong>Certificate No:</strong> {data.certificateNo || ""}
          </p>
          {/* Placeholder for heat treatment graph */}
          <div style={{ 
            border: "2px solid #000", 
            minHeight: "400px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            marginTop: "50px"
          }}>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Heat Treatment Graph will be displayed here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MTCPrintTemplate;
