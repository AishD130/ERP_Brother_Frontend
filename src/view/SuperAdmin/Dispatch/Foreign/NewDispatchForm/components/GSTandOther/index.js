import React, { memo } from 'react'
import BillTypeInformationField from './BillTypeInformationField'
import IGSTInformationField from './IGSTInformationField'
import CGSTInformationField from './CGSTInformationField'
import SGSTInformationField from './SGSTInformationField'
import EWayBillNoInformationField from './EWayBillNoInformationField'
import RemarkInformationField from './RemarkInformationField'

const GSTandOtherInformationFields = (props) => {
    const { touched, errors, values } = props
    
    return (
        <div>
            <div className='grid gap-2 md:grid-cols-3'>
                <BillTypeInformationField
                    errors={errors?.bill_type}
                    touched={touched?.bill_type}
                    values={values?.bill_type}
                />
                {values?.bill_type === 'IGST' ? (
                    <IGSTInformationField
                        errors={errors?.i_gst}
                        touched={touched?.i_gst}
                        values={values?.i_gst}
                    />
                ) : values?.bill_type === 'GST' ? (
                    <>
                        <SGSTInformationField
                            errors={errors?.s_gst}
                            touched={touched?.s_gst}
                            values={values?.s_gst}
                        />
                        <CGSTInformationField
                            errors={errors?.c_gst}
                            touched={touched?.c_gst}
                            values={values?.c_gst}
                        />
                    </>
                ) : null}
            </div>
            <EWayBillNoInformationField
                errors={errors?.e_way_bill_no}
                touched={touched?.e_way_bill_no}
            />
            <RemarkInformationField
                errors={errors?.remark}
                touched={touched?.remark}
            />
        </div>
    )
}

export default memo(GSTandOtherInformationFields)

