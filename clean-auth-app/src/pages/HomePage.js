import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FeatureCard from '../components/ui/FeatureCard';
import Button from '../components/ui/Button';

const HomePage = ({ user, onLogout }) => {
  const features = [
    {
      icon: { 
        bg: 'bg-blue-50', 
        color: 'text-blue-500', 
        path: 'M13 10V3L4 14h7v7l9-11h-7z' 
      },
      title: 'Rápido',
      description: 'Interface otimizada para uma experiência fluida e responsiva.'
    },
    {
      icon: { 
        bg: 'bg-green-50', 
        color: 'text-green-500', 
        path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' 
      },
      title: 'Seguro',
      description: 'Seus dados estão protegidos com as melhores práticas de segurança.'
    },
    {
      icon: { 
        bg: 'bg-purple-50', 
        color: 'text-purple-500', 
        path: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' 
      },
      title: 'Simples',
      description: 'Design clean e intuitivo que foca no que realmente importa.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header user={user} onLogout={onLogout} />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-gray-900 mb-6">
            Bem-vindo ao seu espaço
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Este é seu painel pessoal. Um lugar limpo e organizado para você começar sua jornada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Pronto para começar?</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Explore todas as funcionalidades disponíveis e personalize sua experiência.
          </p>
          <Button
            id="explore-resources-btn"
            data-testid="explore-resources-button"
          >
            Explorar Recursos
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;