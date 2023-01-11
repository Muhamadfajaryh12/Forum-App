import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';
import '@testing-library/jest-dom'; 
describe('LoginInput component', () => {
    it('should handle Email typing correctly', async () => {
      // Arrange
      render(<LoginInput login={() => {}} />);
      const EmailInput = await screen.getByPlaceholderText('Email');
      // Action
      await userEvent.type(EmailInput, 'Email@gmail.com');
      // Assert
      expect(EmailInput).toHaveValue('Email@gmail.com');
    });
    it('should handle password typing correctly', async () =>{
        render(<LoginInput login={() => {}}/>);
        const PasswordInput = await screen.getByPlaceholderText('Password');
        await userEvent.type(PasswordInput, 'test123');
        expect(PasswordInput).toHaveValue('test123');
    })
    it('should call login function when login button is clicked',async () =>{
        const mockLogin = jest.fn();
        render(<LoginInput login={mockLogin} />);
        const EmailInput = await screen.getByPlaceholderText('Email');
        await userEvent.type(EmailInput, 'Email@gmail.com');
        const PasswordInput = await screen.getByPlaceholderText('Password');
        await userEvent.type(PasswordInput, 'test123');
        const loginButton = await screen.getByRole('button', { name: 'Masuk' });
        await userEvent.click(loginButton);
        expect(mockLogin).toBeCalledWith({
            email: 'Email@gmail.com',
            password: 'test123',
          });
        });
    })