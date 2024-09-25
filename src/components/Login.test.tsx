import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  test('renders login form', () => {
    render(<Login />);
    expect(screen.getByLabelText(/用户名/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/密码/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /登录/i })).toBeInTheDocument();
  });

  test('shows error message when form is submitted with empty fields', () => {
    render(<Login />);
    fireEvent.click(screen.getByRole('button', { name: /登录/i }));
    expect(screen.getByText(/请填写所有必填项/i)).toBeInTheDocument();
  });

  // 添加更多测试...
});