import { Truck } from 'lucide-react';


const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-area" style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
          {/* Icono de camión para la marca de mudanzas */}
          <Truck size={40} color="#2563eb" />
          <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#1e293b' }}>
            MudaTech
          </h1>
        </div>
        <p className="subtitle" style={{ color: '#64748b', marginTop: '5px' }}>
          Gestión Profesional de Traslados e Inventarios
        </p>
      </div>
      <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '20px 0' }} />
    </header>
  );
};

export default Header;