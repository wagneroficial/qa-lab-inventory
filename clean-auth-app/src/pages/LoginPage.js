import React, { useState } from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Alert from '../components/ui/Alert';

const LoginPage = ({ onLogin, onNavigateToRegister }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      setError('Preencha todos os campos');
      return;
    }

    setIsLoading(true);
    setError('');
    
    // Simular loading
    setTimeout(() => {
      if (!onLogin(formData.email, formData.password)) {
        setError('Email ou senha incorretos');
      }
      setIsLoading(false);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <AuthLayout title="Entrar" subtitle="Acesse sua conta">
      <div className="space-y-6">
        {error && <Alert message={error} type="error" />}
        
        <div>
          <Input
            id="login-email"
            data-testid="login-email-input"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        
        <div>
        
        </div>
        
        <Button
          id="login-submit-btn"
          data-testid="login-submit-button"
          onClick={handleSubmit}
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Entrando...' : 'Entrar'}
        </Button>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 text-sm">
          Não tem uma conta?{' '}
          <button
            id="navigate-to-register"
            data-testid="navigate-to-register-button"
            onClick={onNavigateToRegister}
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Criar conta
          </button>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;