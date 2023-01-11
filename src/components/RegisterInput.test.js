import React from 'react'
import {render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RegisterInput from './RegisterInput'
import '@testing-library/jest-dom'

describe('RegisterInput Component' ,() =>{
    it('should handle email typing correctly', async () =>{
        // Arrage
        render(<RegisterInput register={()=>{}}/>);
        const EmailInput = await screen.getByPlaceholderText('Email');
        // Action
        await userEvent.type(EmailInput,'email@gmail.com');
        // Assert
        expect(EmailInput).toHaveValue('email@gmail.com');
    })

    it('should handle password typing correctly', async () =>{
        // Arrage
        render(<RegisterInput register={()=>{}}/>);
        const PasswordInput = await screen.getByPlaceholderText('Password');
        // Action
        await userEvent.type(PasswordInput,'password');
        // Assert
        expect(PasswordInput).toHaveValue('password');
    })

    it('should handle username typing correctly', async () =>{
        // Arrage
        render(<RegisterInput register={()=>{}}/>)
        const NameInput = await screen.getByPlaceholderText('Nama');
        // Action
        await userEvent.type(NameInput,'nama123');
        // Assert
        expect(NameInput).toHaveValue('nama123')
    })

    it('should call register function when register button is clicked', async () =>{
        const mockRegister = jest.fn();
        render(<RegisterInput register={mockRegister}/>);
        const NameInput = await screen.getByPlaceholderText('Nama');
        await userEvent.type(NameInput,'nama123');
        const EmailInput = await screen.getByPlaceholderText('Email');
        await userEvent.type(EmailInput,'email@gmail.com');
        const PasswordInput = await screen.getByPlaceholderText('Password');
        await userEvent.type(PasswordInput,'password');
        const RegisterButton = await screen.getByRole('button', { name : 'Register'})
        await userEvent.click(RegisterButton);
        expect(mockRegister).toBeCalledWith({
            name:'nama123',
            email:'email@gmail.com',
            password:'password'
        })
    })
})