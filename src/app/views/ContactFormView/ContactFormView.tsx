'use client';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
    FormContainerStyled,
    ContactFormTitleStyled,
    FormStyled,
    FormRowStyled,
    NameFieldStyled,
    EmailFieldStyled,
    MessageFieldStyled,
    FormLabelStyled,
    FormSubmitButtonStyled,
    FormErrorStyled,
    FormFieldStyled,
} from './ContactFormView.styles';

import { SectionTitle } from '@/components';

interface FormValues {
    name: string;
    email: string;
    message: string;
}

export const ContactFormView: React.FC = () => {
    const initialValues: FormValues = {
        name: '',
        email: '',
        message: '',
    };
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string().required('Required'),
    });

    const handleFieldClick = (e: React.MouseEvent) => {
        const target: HTMLElement = e.target as HTMLElement;
        if (target.tagName === 'LABEL') {
            const input = target.nextElementSibling as HTMLInputElement;
            input.focus();
        } else if (target.tagName === 'INPUT') {
            target.focus();
        }
    };
    const [formValues, setFormValues] = useState<FormValues>(initialValues);

    const setFieldValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <FormContainerStyled>
            <ContactFormTitleStyled>
                <SectionTitle
                    title={'Get in touch'}
                    end
                    responsiveEllipse={['xs', 'xr', 'sm', 'md']}
                />
            </ContactFormTitleStyled>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        actions.setSubmitting(false);
                    }, 500);
                }}
            >
                {({
                    handleSubmit,
                    isSubmitting,
                    dirty,
                    isValid,
                }: FormikProps<any>) => (
                    <FormStyled onSubmit={handleSubmit}>
                        <Field name="name">
                            {({ field, meta }: FormFieldProps) => (
                                <FormRowStyled onClick={handleFieldClick}>
                                    <FormLabelStyled
                                        htmlFor="name"
                                        $isEmpty={field.value.length === 0}
                                        $isError={!!meta.error && meta.touched}
                                    >
                                        Name
                                    </FormLabelStyled>
                                    <FormFieldStyled
                                        type="text"
                                        $isError={!!meta.error && meta.touched}
                                        {...field}
                                    />
                                    {meta.touched && meta.error ? (
                                        <FormErrorStyled>
                                            {meta.error}
                                        </FormErrorStyled>
                                    ) : null}
                                </FormRowStyled>
                            )}
                        </Field>
                        <Field name="email">
                            {({ field, meta }: FormFieldProps) => (
                                <FormRowStyled onClick={handleFieldClick}>
                                    <FormLabelStyled
                                        htmlFor="email"
                                        $isEmpty={field.value.length === 0}
                                        $isError={!!meta.error && meta.touched}
                                    >
                                        Email
                                    </FormLabelStyled>
                                    <FormFieldStyled
                                        name="email"
                                        type="email"
                                        $isError={!!meta.error && meta.touched}
                                        {...field}
                                    />
                                    {meta.error && meta.touched ? (
                                        <FormErrorStyled>
                                            {meta.error}
                                        </FormErrorStyled>
                                    ) : null}
                                </FormRowStyled>
                            )}
                        </Field>
                        <Field name="message">
                            {({ field, meta }: FormFieldProps) => (
                                <FormRowStyled onClick={handleFieldClick}>
                                    <FormLabelStyled
                                        htmlFor="message"
                                        $isEmpty={field.value.length === 0}
                                        $isError={!!meta.error && meta.touched}
                                    >
                                        Message
                                    </FormLabelStyled>
                                    <MessageFieldStyled
                                        name="message"
                                        as={'textarea'}
                                        $isError={!!meta.error && meta.touched}
                                        {...field}
                                        maxLength={512}
                                    />
                                    {meta.error && meta.touched ? (
                                        <FormErrorStyled>
                                            {meta.error}
                                        </FormErrorStyled>
                                    ) : null}
                                </FormRowStyled>
                            )}
                        </Field>
                        <FormSubmitButtonStyled
                            type="submit"
                            disabled={isSubmitting || (dirty && !isValid)}
                        >
                            Send
                        </FormSubmitButtonStyled>
                    </FormStyled>
                )}
            </Formik>
        </FormContainerStyled>
    );
};
