import Styled from 'styled-components'

export const ToDoTask = Styled.div `
    background-color: #fff;
`

export const ToDoNoTask = Styled.div `
    background-color: #fff;
    color: #46529d;
    padding: 1rem 0.4rem;
`

export const ToDoTaskTHeader = Styled.div `
    display: flex;
    background-color: #30B9F0;
`

export const Task = Styled.span `
    flex-basis: 60%;
    padding: 1rem 0.4rem;
    color: #264653;
`

export const Priority = Styled.span `
    flex-basis: 30%;
    padding: 1rem 0.4rem;
    color: #264653;
`

export const Times = Styled.span `
    flex-basis: 10%;
    padding: 1rem 0.4rem;
    color: #30B9F0;
    cursor: pointer;
    color: #264653;
`

export const ForFlex = Styled.div `
    display: flex;
`

export const TaskTitle = Styled(Task) `
    color: #fff;
    padding: 1rem 0.4rem;
    font-weight: bolder;
    font-size: 20px;
`
export const TaskPriority = Styled(Priority) `
    color: #fff;
    padding: 1rem 0.4rem;
    font-weight: bolder;
    font-size: 20px;
`
export const TaskTimes = Styled(Times) `
    color: #fff;
    padding: 1rem 0.4rem;
    font-weight: bolder;
    font-size: 20px;
`