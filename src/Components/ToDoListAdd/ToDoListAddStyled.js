import Styled from 'styled-components'

export const ToDoAddForm = Styled.form `
    display: flex;
    @media (max-width: 992px) {
        display: block;
    };
`

export const ToDoAddFormInput = Styled.input `
    border: none;
    padding: 1rem;
    outline: none;
    color: #30B9F0;
    font-weight: bold;
    flex-basis: 10%;
`

export const ToDoAddFormNameLabel = Styled.label `
    flex-basis: 60%;
`

export const ToDoAddFormNameInput = Styled(ToDoAddFormInput)
`
    width: 100%;
    background-color: #eee;
`

export const ToDoAddFormPriorityLabel = Styled.label `
    flex-basis: 30%;
`

export const ToDoAddFormPriorityInput = Styled(ToDoAddFormInput)
`
    width: 100%;
    background-color: #eee;
`


export const ToDoAddFormSubmit = Styled.input `
    cursor: pointer;
    color: #fff;
    background-color: #30B9F0;
    border: none;
    outline: none;
    font-weight: 700;
    @media (max-width: 992px) {
        width: 100%;
        padding: 5%;
    };
`