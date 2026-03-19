import { SolicitudTraslado } from '../types';
import { BarChart3, CheckCircle2, Clock, DollarSign } from 'lucide-react';

interface StatsProps {
  items: SolicitudTraslado[];
}

const Stats = ({ items }: StatsProps) => {
  const total = items.length;
  const completados = items.filter(i => i.estado === 'entregado').length;
  const pendientes = items.filter(i => i.estado === 'pendiente' || i.estado === 'en-ruta').length;
  const recaudacion = items.reduce((acc, curr) => acc + curr.tarifa, 0);

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <BarChart3 size={20} color="#6366f1" />
        <div>
          <span>Total Servicios</span>
          <strong>{total}</strong>
        </div>
      </div>
      <div className="stat-card">
        <Clock size={20} color="#f59e0b" />
        <div>
          <span>Pendientes</span>
          <strong>{pendientes}</strong>
        </div>
      </div>
      <div className="stat-card">
        <CheckCircle2 size={20} color="#10b981" />
        <div>
          <span>Completados</span>
          <strong>{completados}</strong>
        </div>
      </div>
      <div className="stat-card">
        <DollarSign size={20} color="#059669" />
        <div>
          <span>Recaudación</span>
          <strong>${recaudacion.toLocaleString()}</strong>
        </div>
      </div>
    </div>
  );
};

export default Stats;