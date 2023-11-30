import { theme, viewport } from '@/styles/theme';
import { openSans, inter } from '@/styles/fonts';
import styled from 'styled-components';
import { Form, Field } from 'formik';

export interface FormFieldProps {
    $isEmpty?: boolean;
    $isError?: boolean;
    value?: string;
}

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
export const NameFieldStyled = styled(Field)`
    border-top: none;
    border-right: none;
    border-bottom: 1px solid ${theme.colors.bluish};
    border-left: none;
    padding: 0.625rem 0.5rem;
    font-family: ${openSans.style.fontFamily};
    font-size: 1rem;
    height: 2.725rem;
    ${viewport.media.md} {
        font-size: 1.25rem;
        height: 3.125rem;
        padding: 0.75rem 1rem;
    }
    &:focus {
        outline: none;
        border-bottom: 2px solid ${theme.colors.bluish};
        transition: all 0.2s ease-in-out;
        background: linear-gradient(
            180deg,
            rgba(217, 230, 255, 0) 0%,
            rgba(217, 230, 255, 0.3) 100%
        );
    }
    ${(props) =>
        props.value.length !== 0 &&
        `background: linear-gradient(
          180deg,
          rgba(217, 230, 255, 0) 0%,
          rgba(217, 230, 255, 0.3) 100%
          );
          height: 2.725rem;
          font-size: 1rem;
          ${viewport.media.md} {
            font-size: 1.25rem;
            height: 3.125rem;
            padding: 0.75rem 1rem;
          `}
`;
export const EmailFieldStyled = styled(Field)`
    border-top: none;
    border-right: none;
    border-bottom: 1px solid ${theme.colors.bluish};
    border-left: none;
    padding: 0.625rem 0.5rem;
    font-family: ${openSans.style.fontFamily};
    font-size: 1rem;
    height: 2.725rem;
    &:focus {
        outline: none;
        border-bottom: 2px solid ${theme.colors.bluish};
        transition: all 0.2s ease-in-out;
        background: linear-gradient(
            180deg,
            rgba(217, 230, 255, 0) 0%,
            rgba(217, 230, 255, 0.3) 100%
        );
    }
    ${(props) =>
        props.value.length !== 0 &&
        `background: linear-gradient(
          180deg,
          rgba(217, 230, 255, 0) 0%,
          rgba(217, 230, 255, 0.3) 100%
          );
          height: 2.725rem;
          font-size: 1rem;
          ${viewport.media.md} {
            font-size: 1.25rem;
            height: 3.125rem;
            padding: 0.75rem 1rem;
          `}
    ${viewport.media.md} {
        padding: 0.75rem 1rem;
    }
`;
export const MessageFieldStyled = styled(Field)`
    resize: none;
    height: 2.725rem;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid ${theme.colors.bluish};
    border-left: none;
    overflow-wrap: break-word;
    padding: 0.625rem 0.5rem;
    font-family: ${openSans.style.fontFamily};
    font-size: 1rem;
    &:focus {
        outline: none;
        border-bottom: 2px solid ${theme.colors.bluish};
        transition: all 0.3s ease-in-out;
        height: 11rem;
        background: linear-gradient(
            180deg,
            rgba(217, 230, 255, 0) 0%,
            rgba(217, 230, 255, 0.3) 100%
        );
        ${viewport.media.md} {
            font-size: 1.25rem;
            height: 10rem;
            padding: 0.75rem 1rem;
        }
    }
    ${(props) =>
        props.value.length !== 0 &&
        `background: linear-gradient(
          180deg,
          rgba(217, 230, 255, 0) 0%,
          rgba(217, 230, 255, 0.3) 100%
          );
          height: 10rem;
          ${viewport.media.md} {
            font-size: 1.25rem;
            height: 10rem;
            padding: 0.75rem 1rem;
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
