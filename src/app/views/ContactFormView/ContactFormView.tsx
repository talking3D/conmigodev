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
                onSubmit={(values, actions) => {
                    console.log(values);
                }}
                validationSchema={validationSchema}
            >
                {(props) => (
                    <FormStyled onSubmit={props.handleSubmit}>
                        <FormRowStyled onClick={handleFieldClick}>
                            <FormLabelStyled
                                htmlFor="name"
                                $isEmpty={formValues.name.length === 0}
                            >
                                Name
                            </FormLabelStyled>
                            <NameFieldStyled
                                name="name"
                                type="text"
                                onChange={setFieldValue}
                                value={formValues.name}
                            />
                        </FormRowStyled>
                        <FormRowStyled onClick={handleFieldClick}>
                            <FormLabelStyled
                                $isEmpty={formValues.email.length === 0}
                                htmlFor="email"
                            >
                                Email
                            </FormLabelStyled>
                            <EmailFieldStyled
                                name="email"
                                type="email"
                                onChange={setFieldValue}
                                value={formValues.email}
                            />
                        </FormRowStyled>
                        <FormRowStyled onClick={handleFieldClick}>
                            <FormLabelStyled
                                htmlFor="message"
                                $isEmpty={formValues.message.length === 0}
                            >
                                Message
                            </FormLabelStyled>
                            <MessageFieldStyled
                                name="message"
                                as={'textarea'}
                                onChange={setFieldValue}
                                value={formValues.message}
                                maxLength={512}
                            />
                        </FormRowStyled>
                    </FormStyled>
                )}
            </Formik>
        </FormContainerStyled>
    );
};
