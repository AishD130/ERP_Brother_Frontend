import React, { memo } from 'react'
import { FormItem, Select } from '../../../../../../../components/ui'
import { Field } from 'formik'

const GST_PERCENTAGE = [3, 5, 6, 7, 9, 12, 18, 24]

const SGSTInformationFields = (props) => {
    const { errors, values, touched } = props

    const percentageData = GST_PERCENTAGE.map((percentage) => {
        return { label: `${percentage} %`, value: percentage }
    })

    return (
        <FormItem
            className='mb-4'
            label='SGST'
            invalid={errors && touched}
            errorMessage={errors}
        >
            <Field name='DispatchShippingAndOtherDetails.s_gst'>
                {({ field, form }) => (
                    <Select
                        field={field}
                        form={form}
                        options={percentageData}
                        value={percentageData.filter(
                            (percentage) =>
                                percentage.value === values
                        )}
                        onChange={(option) =>
                            form.setFieldValue(
                                field.name,
                                option.value
                            )
                        }
                    />
                )}
            </Field>
        </FormItem>
    )
}

export default memo(SGSTInformationFields)


