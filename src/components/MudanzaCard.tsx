import { SolicitudTraslado } from '../types';
import { MapPin, Truck, Trash2, Edit, Calendar } from 'lucide-react';

/**
 * PROPS: MudanzaCardProps
 * Qué: Define qué necesita este componente para funcionar.
 */
interface MudanzaCardProps {
  item: SolicitudTraslado;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const MudanzaCard = ({ item, onDelete, onEdit }: MudanzaCardProps) => {
  // Color según el estado
  const statusColor = {
    pendiente: '#f59e0b',
    'en-ruta': '#3b82f6',
    entregado: '#10b981',
    cancelado: '#ef4444'
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{item.cliente}</h3>
        <span 
          className="badge" 
          style={{ backgroundColor: statusColor[item.estado] }}
        >
          {item.estado}
        </span>
      </div>

      <div className="card-body">
        <p><MapPin size={16} /> <strong>Origen:</strong> {item.origen}</p>
        <p><MapPin size={16} /> <strong>Destino:</strong> {item.destino}</p>
        <p><Truck size={16} /> <strong>Vehículo:</strong> {item.vehiculo}</p>
        <p><Calendar size={16} /> <strong>Fecha:</strong> {item.fecha}</p>
        <p className="price">Tarifa: ${item.tarifa}</p>
      </div>

      <div className="card-actions">
        <button className="btn-edit" onClick={() => onEdit(item.id)}>
          <Edit size={18} /> Editar
        </button>
        <button className="btn-delete" onClick={() => onDelete(item.id)}>
          <Trash2 size={18} /> Eliminar
        </button>
      </div>
    </div>
  );
};

export default MudanzaCard;