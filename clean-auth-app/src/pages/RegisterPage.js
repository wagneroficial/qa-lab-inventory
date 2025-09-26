import React, { useState } from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Alert from '../components/ui/Alert';

const RegisterPage = ({ onRegister, onNavigateToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Preencha todos os campos');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Senhas não conferem');
      return;
    }
    
    if (formData.password.length < 6) {
      setError('Senha deve ter pelo menos 6 caracteres');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simular loading
    setTimeout(() => {
      if (!onRegister(formData)) {
        setError('Este email já está cadastrado');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <AuthLayout title="Criar Conta" subtitle="Comece sua jornada">
      <div className="space-y-6">
        {error && <Alert message={error} type="error" />}
        
        <div>
          <Input
            id="register-name"
            data-testid="register-name-input"
            placeholder="Nome completo"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        
        <div>
          <Input
            id="register-email"
            data-testid="register-email-input"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        
        <div>
          <Input
            id="register-password"
            data-testid="register-password-input"
            type="password"
            placeholder="Senha"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
        </div>
        
        <div>
          <Input
            id="register-confirm-password"
            data-testid="register-confirm-password-input"
            type="password"
            placeholder="Confirmar senha"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            required
          />
        </div>
        
        <Button
          id="register-submit-btn"
          data-testid="register-submit-button"
          onClick={handleSubmit}
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Criando conta...' : 'Criar Conta'}
        </Button>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 text-sm">
          Já tem uma conta?{' '}
          <button
            id="navigate-to-login"
            data-testid="navigate-to-login-button"
            onClick={onNavigateToLogin}
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Fazer login
          </button>
        </p>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;