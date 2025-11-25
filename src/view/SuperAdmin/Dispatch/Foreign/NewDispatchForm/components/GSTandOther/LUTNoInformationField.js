import React, { memo } from 'react'
import { FormItem, Input } from '../../../../../../../components/ui'
import { Field } from 'formik'

const LUTNoInformationField = (props) => {
    const { errors, touched } = props
    return (
        <FormItem
            className='mb-4'
            label="LUT Number"
            invalid={errors && touched}
            errorMessage={errors}
        >
            <small className="text-gray-500 block mt-1">
            SUPPLY MEANT FOR EXPORT UNDER LETTER OF UNDERTAKING WITHOUT PAYMENT OF IGST.
            </small>
            <br></br>
            <Field
                component={Input}
                name='DispatchShippingAndOtherDetails.lut_no'
                placeholder='ARN - Example : AD2704250138272'
            />
        </FormItem>
    )
}

export default memo(LUTNoInformationField)





