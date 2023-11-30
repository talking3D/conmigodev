import { theme, viewport } from '@/styles/theme';
import { openSans, inter } from '@/styles/fonts';
import styled from 'styled-components';
import { Form } from 'formik';

export interface FormFieldProps {
    $isEmpty?: boolean;
    $isError?: boolean;
    value?: string;
}

const errorBackgoundImage =
    'linear-gradient(180deg, rgba(255, 168, 0, 0) 0%, rgba(255, 168, 0, 0.2) 100%)';
const validBackgoundImage =
    'linear-gradient(180deg, rgba(217, 230, 255, 0) 0%, rgba(217, 230, 255, 0.3) 100%)';

export const FormContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.625rem;
    margin-right: 0.625rem;
    ${viewport.media.xs} {
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

export const ContactFormTitleStyled = styled.div`
    align-self: end;
    ${viewport.media.md} {
        margin-right: 2rem;
    }
    ${viewport.media.lg} {
        align-self: start;
        margin-left: 3rem;
        margin-bottom: 2rem;
    }
    max-width: max-content;
`;

export const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 1rem;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 90%;
    row-gap: 3rem;
    ${viewport.media.sm} {
        max-width: 80%;
    }
    ${viewport.media.lg} {
        max-width: 70%;
    }
`;

export const FormRowStyled = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;

export const FormFieldStyled = styled.input<FormFieldProps>`
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${(props) =>
        props.$isError
            ? `${theme.colors.orangeText}`
            : `${theme.colors.bluish}`};
    padding: 0.625rem 0.5rem;
    font-family: ${openSans.style.fontFamily};
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    height: 2.725rem;
    &:focus {
        outline: none;
        border-bottom-width: 2px;
        transition: all 0.2s ease-in-out;
        background-image: ${(props) =>
            props.$isError
                ? `${errorBackgoundImage}`
                : `${validBackgoundImage}`};
    }
    ${viewport.media.md} {
        font-size: 1.25rem;
        height: 3.125rem;
        padding: 0.75rem 1rem;
    }
    ${(props) =>
        props.value &&
        props.value.length !== 0 &&
        `background: ${validBackgoundImage};
          padding: 0.75rem 1rem;
          `}
    ${(props) => props.$isError && `background-image: ${errorBackgoundImage};}`}
`;

export const NameFieldStyled = styled(FormFieldStyled)`
    ${(props) =>
        props.value &&
        props.value.length !== 0 &&
        `
          ${viewport.media.md} {
            height: 3.125rem;
          `}
`;
export const EmailFieldStyled = styled(FormFieldStyled)`
    ${(props) =>
        props.value &&
        props.value.length !== 0 &&
        `
          ${viewport.media.md} {
            height: 3.125rem;
          `}
`;
export const MessageFieldStyled = styled(FormFieldStyled)`
    resize: none;
    transition: all 0.3s ease-in-out;
    padding-top: 0.5rem;
    &:focus {
        height: 11rem;
        padding: 0.625rem 0.5rem;
        ${viewport.media.md} {
            height: 10rem;
        }
    }
    ${(props) =>
        props.value &&
        props.value.length !== 0 &&
        `
          height: 10rem;
          padding: 0.625rem 0.5rem;
          ${viewport.media.md} {
            height: 10rem;
          `}
`;
export const FormLabelStyled = styled.label<FormFieldProps>`
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: -2.5rem;
    transition: all 0.2s ease-in-out;
    ${viewport.media.md} {
        font-size: 1.725rem;
    }
    ${(props) =>
        !props.$isEmpty || props.$isError
            ? `
          font-size: 0.875rem;
          margin-bottom: 0rem;
          color: #767676;
          ${viewport.media.md} {
            font-size: 1.125rem;
        }
      `
            : null}
    ${FormRowStyled}:focus-within & {
        font-size: 0.875rem;
        margin-bottom: 0rem;
        color: #767676;
        ${viewport.media.md} {
            font-size: 1.125rem;
        }
    }

    z-index: 1;
`;

export const FormErrorStyled = styled.div`
    font-family: ${inter.style.fontFamily};
    font-weight: 400;
    font-size: 0.75rem;
    color: ${theme.colors.orangeText};
    ${viewport.media.md} {
        font-size: 0.875rem;
    }
    ${viewport.media.lg} {
        font-size: 1.25rem;
    }
`;

export const FormSubmitButtonStyled = styled.button`
    display: inline-block;
    position: relative;
    border-radius: 50px;
    padding: 1.25rem 4rem;
    color: ${theme.colors.white};
    font-size: 1.25rem;
    font-family: ${inter.style.fontFamily};
    font-weight: 700;
    border: none;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    ${viewport.media.xr} {
        max-width: 60%;
    }
    ${viewport.media.md} {
        font-size: 2rem;
        padding: 1.25rem 6rem;
        margin-top: 2rem;
        max-width: 50%;
    }
    ${viewport.media.lg} {
        max-width: 40%;
        margin-top: 3rem;
    }

    overflow: hidden;
    z-index: 1;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        border-radius: 50px;
        background-color: ${theme.colors.orangeText};
        z-index: -1;
        transition: all 0.3s ease-in-out;
    }
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: 50px;
        color: ${theme.colors.white};
        background-color: ${theme.colors.bluish};
        z-index: -2;
        transition: all 0.3s ease-in-out;
    }
    &:hover:before {
        width: 100%;
        height: 100%;
    }
`;
