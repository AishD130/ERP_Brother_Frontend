import React, { useRef, useState } from "react";
import { Form, Formik } from "formik";
import { Button, Card, FormContainer, Input, DatePicker } from "../../../components/ui";
import { useReactToPrint } from "react-to-print";
import MTCPrintTemplate from "./components/MTCPrintTemplate";

const MTC = () => {
  const componentRef = useRef();
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formValues, setFormValues] = useState(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `MTC-${formValues?.certificateNo || "certificate"}`,
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          margin: 0;
          padding: 0;
        }
        .page {
          page-break-after: always;
          page-break-inside: avoid;
          height: 29.7cm;
          width: 21cm;
          margin: 0;
          padding: 40px;
        }
        .page:last-child {
          page-break-after: auto;
        }
        .mtc-certificate {
          page-break-inside: avoid;
        }
        .pageMargin {
          padding: 0;
        }
      }
    `,
  });

  const handleGeneratePreview = (values) => {
    setFormValues(values);
    const node = componentRef.current;
    if (node) {
      const html = node.outerHTML;
      const blob = new Blob([html], { type: "text/html" });
      const blobUrl = URL.createObjectURL(blob);
      setPreviewUrl(blobUrl);
      window.open(blobUrl, "_blank");
    }
  };

  const initialValues = {
    // Header Details
    manufacturer: "BROTHERS METAL",
    address: "Gate No.883 Kisloskarwadi Road, Sawantpur",
    customer: "Brothers Industries",
    customerPONo: "PO-998877",
    certificateNo: "MTC-2024-00125",
    dateOfIssue: new Date(),
    invoiceNo: "",
    invoiceDate: null,

    // Product Identification
    productItems: [
      {
        itemNo: "",
        partNo: "",
        materialGrade: "",
        heatCastNo: "",
        weight: "",
        qty: "",
      },
    ],

    // Chemical Composition
    chemicalComposition: {
      heatNo: "Heat 12345",
      reqMax: {
        c: "",
        mn: "",
        si: "",
        p: "",
        s: "",
        ni: "",
        cr: "",
        mo: "",
        cu: "",
        v: "",
      },
      reqMin: {
        c: "",
        mn: "",
        si: "",
        p: "",
        s: "",
        ni: "",
        cr: "",
        mo: "",
        cu: "",
        v: "",
      },
      actual: {
        c: "",
        mn: "",
        si: "",
        p: "",
        s: "",
        ni: "",
        cr: "",
        mo: "",
        cu: "",
        v: "",
      },
    },

    // Mechanical Properties
    mechanicalProperties: {
      reqMin: {
        ys: "-",
        uts: "-",
        elongation: "-",
        redInArea: "",
        bendTest: "-",
      },
      reqMax: {
        ys: "-",
        uts: "-",
        elongation: "-",
        redInArea: "-",
        bendTest: "-",
      },
      actual: {
        ys: "",
        uts: "",
        elongation: "",
        redInArea: "",
        bendTest: "",
      },
    },

    // Supplementary Details
    heatTreatment: "Normalizing at 940°C for 3 Hrs Soaking, Air Cooled",
    tempering: "Tempered at 750°C for 3 Hrs Soaking, Air Cooled",
    hydrostaticTest: "Tested at 2500 PSI for 10 secs - OK",
    ultrasonicTest: "OK (As per ASTM E213)",
    visualCheck: "Inspected as per MSS-SP-55: Found Satisfactory / Conforms to Tolerance",
    grade: "ASTM A216 Gr. WCB",
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setFormValues(values);
          setSubmitting(false);
        }}
      >
        {({ values, setFieldValue, handleChange }) => (
          <Form>
            <FormContainer>
              {/* Header Details Section */}
              <Card className="bg-blue-50 mb-4" bodyClass="pb-0">
                <h5 className="font-semibold text-gray-700 mb-3">
                  1. HEADER DETAILS
                </h5>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Manufacturer
                    </label>
                    <Input
                      name="manufacturer"
                      value={values.manufacturer}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Address
                    </label>
                    <Input
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Customer
                    </label>
                    <Input
                      name="customer"
                      value={values.customer}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Customer PO No
                    </label>
                    <Input
                      name="customerPONo"
                      value={values.customerPONo}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Certificate No
                    </label>
                    <Input
                      name="certificateNo"
                      value={values.certificateNo}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Date of Issue
                    </label>
                    <DatePicker
                      name="dateOfIssue"
                      value={values.dateOfIssue}
                      onChange={(date) => setFieldValue("dateOfIssue", date)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Invoice No
                    </label>
                    <Input
                      name="invoiceNo"
                      value={values.invoiceNo}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Invoice Date
                    </label>
                    <DatePicker
                      name="invoiceDate"
                      value={values.invoiceDate}
                      onChange={(date) => setFieldValue("invoiceDate", date)}
                    />
                  </div>
                </div>
              </Card>

              {/* Product Identification Section */}
              <Card className="bg-green-50 mb-4" bodyClass="pb-0">
                <h5 className="font-semibold text-gray-700 mb-3">
                  2. PRODUCT IDENTIFICATION
                </h5>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Item No</th>
                        <th className="border border-gray-300 px-4 py-2">Part No</th>
                        <th className="border border-gray-300 px-4 py-2">Material Grade</th>
                        <th className="border border-gray-300 px-4 py-2">Heat / Cast No</th>
                        <th className="border border-gray-300 px-4 py-2">Weight (kg)</th>
                        <th className="border border-gray-300 px-4 py-2">Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {values.productItems.map((item, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2">
                            <Input
                              value={item.itemNo}
                              onChange={(e) => {
                                const newItems = [...values.productItems];
                                newItems[index].itemNo = e.target.value;
                                setFieldValue("productItems", newItems);
                              }}
                              className="border-0"
                            />
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <Input
                              value={item.partNo}
                              onChange={(e) => {
                                const newItems = [...values.productItems];
                                newItems[index].partNo = e.target.value;
                                setFieldValue("productItems", newItems);
                              }}
                              className="border-0"
                            />
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <Input
                              value={item.materialGrade}
                              onChange={(e) => {
                                const newItems = [...values.productItems];
                                newItems[index].materialGrade = e.target.value;
                                setFieldValue("productItems", newItems);
                              }}
                              className="border-0"
                            />
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <Input
                              value={item.heatCastNo}
                              onChange={(e) => {
                                const newItems = [...values.productItems];
                                newItems[index].heatCastNo = e.target.value;
                                setFieldValue("productItems", newItems);
                              }}
                              className="border-0"
                            />
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <Input
                              value={item.weight}
                              onChange={(e) => {
                                const newItems = [...values.productItems];
                                newItems[index].weight = e.target.value;
                                setFieldValue("productItems", newItems);
                              }}
                              className="border-0"
                            />
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <Input
                              value={item.qty}
                              onChange={(e) => {
                                const newItems = [...values.productItems];
                                newItems[index].qty = e.target.value;
                                setFieldValue("productItems", newItems);
                              }}
                              className="border-0"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Button
                    type="button"
                    variant="plain"
                    size="sm"
                    className="mt-2"
                    onClick={() => {
                      setFieldValue("productItems", [
                        ...values.productItems,
                        {
                          itemNo: "",
                          partNo: "",
                          materialGrade: "",
                          heatCastNo: "",
                          weight: "",
                          qty: "",
                        },
                      ]);
                    }}
                  >
                    + Add Row
                  </Button>
                </div>
              </Card>

              {/* Chemical Composition Section */}
              <Card className="bg-yellow-50 mb-4" bodyClass="pb-0">
                <h5 className="font-semibold text-gray-700 mb-3">
                  3. CHEMICAL COMPOSITION (%)
                </h5>
                <div className="mb-3">
                  <label className="block text-sm font-medium mb-1">
                    Heat No
                  </label>
                  <Input
                    name="chemicalComposition.heatNo"
                    value={values.chemicalComposition.heatNo}
                    onChange={handleChange}
                    className="w-full max-w-xs"
                  />
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Description</th>
                        <th className="border border-gray-300 px-4 py-2">C</th>
                        <th className="border border-gray-300 px-4 py-2">Mn</th>
                        <th className="border border-gray-300 px-4 py-2">Si</th>
                        <th className="border border-gray-300 px-4 py-2">P</th>
                        <th className="border border-gray-300 px-4 py-2">S</th>
                        <th className="border border-gray-300 px-4 py-2">Ni</th>
                        <th className="border border-gray-300 px-4 py-2">Cr</th>
                        <th className="border border-gray-300 px-4 py-2">Mo</th>
                        <th className="border border-gray-300 px-4 py-2">Cu</th>
                        <th className="border border-gray-300 px-4 py-2">V</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Req (Max)</td>
                        {["c", "mn", "si", "p", "s", "ni", "cr", "mo", "cu", "v"].map((element) => (
                          <td key={element} className="border border-gray-300 px-2 py-1">
                            <Input
                              value={values.chemicalComposition.reqMax[element] || ""}
                              onChange={(e) =>
                                setFieldValue(
                                  `chemicalComposition.reqMax.${element}`,
                                  e.target.value
                                )
                              }
                              className="w-full border-0 text-center"
                              size="sm"
                            />
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Req (Min)</td>
                        {["c", "mn", "si", "p", "s", "ni", "cr", "mo", "cu", "v"].map((element) => (
                          <td key={element} className="border border-gray-300 px-2 py-1">
                            <Input
                              value={values.chemicalComposition.reqMin[element] || ""}
                              onChange={(e) =>
                                setFieldValue(
                                  `chemicalComposition.reqMin.${element}`,
                                  e.target.value
                                )
                              }
                              className="w-full border-0 text-center"
                              size="sm"
                            />
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          {values.chemicalComposition.heatNo}
                        </td>
                        {["c", "mn", "si", "p", "s", "ni", "cr", "mo", "cu", "v"].map((element) => (
                          <td key={element} className="border border-gray-300 px-2 py-1">
                            <Input
                              value={values.chemicalComposition.actual[element] || ""}
                              onChange={(e) =>
                                setFieldValue(
                                  `chemicalComposition.actual.${element}`,
                                  e.target.value
                                )
                              }
                              className="w-full border-0 text-center"
                              size="sm"
                            />
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* Mechanical Properties Section */}
              <Card className="bg-purple-50 mb-4" bodyClass="pb-0">
                <h5 className="font-semibold text-gray-700 mb-3">
                  4. MECHANICAL PROPERTIES
                </h5>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Description</th>
                        <th className="border border-gray-300 px-4 py-2">Y.S (0.2% Offset)</th>
                        <th className="border border-gray-300 px-4 py-2">U.T.S</th>
                        <th className="border border-gray-300 px-4 py-2">Elongation (GL 50mm)</th>
                        <th className="border border-gray-300 px-4 py-2">Red. in Area</th>
                        <th className="border border-gray-300 px-4 py-2">Bend Test (D=3t)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Unit</td>
                        <td className="border border-gray-300 px-4 py-2">MPa</td>
                        <td className="border border-gray-300 px-4 py-2">MPa</td>
                        <td className="border border-gray-300 px-4 py-2">%</td>
                        <td className="border border-gray-300 px-4 py-2">%</td>
                        <td className="border border-gray-300 px-4 py-2">Degrees</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Req (Min)</td>
                        {["ys", "uts", "elongation", "redInArea", "bendTest"].map((prop) => (
                          <td key={prop} className="border border-gray-300 px-2 py-1">
                            <Input
                              value={values.mechanicalProperties.reqMin[prop] || ""}
                              onChange={(e) =>
                                setFieldValue(
                                  `mechanicalProperties.reqMin.${prop}`,
                                  e.target.value
                                )
                              }
                              className="w-full border-0 text-center"
                              size="sm"
                            />
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Req (Max)</td>
                        {["ys", "uts", "elongation", "redInArea", "bendTest"].map((prop) => (
                          <td key={prop} className="border border-gray-300 px-2 py-1">
                            <Input
                              value={values.mechanicalProperties.reqMax[prop] || ""}
                              onChange={(e) =>
                                setFieldValue(
                                  `mechanicalProperties.reqMax.${prop}`,
                                  e.target.value
                                )
                              }
                              className="w-full border-0 text-center"
                              size="sm"
                            />
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Actual</td>
                        {["ys", "uts", "elongation", "redInArea", "bendTest"].map((prop) => (
                          <td key={prop} className="border border-gray-300 px-2 py-1">
                            <Input
                              value={values.mechanicalProperties.actual[prop] || ""}
                              onChange={(e) =>
                                setFieldValue(
                                  `mechanicalProperties.actual.${prop}`,
                                  e.target.value
                                )
                              }
                              className="w-full border-0 text-center"
                              size="sm"
                            />
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* Supplementary Details Section */}
              <Card className="bg-indigo-50 mb-4" bodyClass="pb-0">
                <h5 className="font-semibold text-gray-700 mb-3">
                  5. SUPPLEMENTARY DETAILS
                </h5>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Heat Treatment
                    </label>
                    <Input
                      name="heatTreatment"
                      value={values.heatTreatment}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Tempering
                    </label>
                    <Input
                      name="tempering"
                      value={values.tempering}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Hydrostatic Test
                    </label>
                    <Input
                      name="hydrostaticTest"
                      value={values.hydrostaticTest}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Ultrasonic Test
                    </label>
                    <Input
                      name="ultrasonicTest"
                      value={values.ultrasonicTest}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Visual Check
                    </label>
                    <Input
                      name="visualCheck"
                      value={values.visualCheck}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Grade
                    </label>
                    <Input
                      name="grade"
                      value={values.grade}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </Card>

              {/* Declaration Section */}
              <Card className="bg-gray-50 mb-4" bodyClass="pb-0">
                <h5 className="font-semibold text-gray-700 mb-3">
                  6. DECLARATION
                </h5>
                <p className="text-sm text-gray-700">
                  We hereby certify that the material described above has been tested and inspected
                  in accordance with the requirements of the Purchase Order and the specifications
                  outlined above.
                </p>
              </Card>

              {/* Authorized Signatures Section */}
              <Card className="bg-orange-50 mb-4" bodyClass="pb-0">
                <h5 className="font-semibold text-gray-700 mb-3">
                  7. AUTHORIZED SIGNATURES
                </h5>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4">
                  <div>
                    <p className="font-semibold mb-2">AJAY KUMAR BIND</p>
                    <p className="text-sm text-gray-600">Chief Chemist</p>
                    <p className="text-xs text-gray-500 mt-4">(Sign & Stamp Here)</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">VISHAL RAMESH GURAV</p>
                    <p className="text-sm text-gray-600">QC Incharge</p>
                    <p className="text-xs text-gray-500 mt-4">(Sign & Stamp Here)</p>
                  </div>
                </div>
              </Card>

              {/* Generate Report Button - At the end of the page */}
              <div className="flex justify-center my-6">
                <Button
                  type="button"
                  variant="solid"
                  size="lg"
                  onClick={() => {
                    setFormValues(values);
                    setTimeout(() => {
                      if (componentRef.current) {
                        handlePrint();
                      }
                    }, 200);
                  }}
                >
                  Generate Report
                </Button>
              </div>
            </FormContainer>
          </Form>
        )}
      </Formik>

      {/* Hidden printable component */}
      <div style={{ display: "none" }}>
        <div ref={componentRef}>
          {formValues && <MTCPrintTemplate data={formValues} />}
        </div>
      </div>

      {/* Preview Modal/Dialog could be added here if needed */}
    </div>
  );
};

export default MTC;
