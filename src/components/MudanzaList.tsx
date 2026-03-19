import { SolicitudTraslado } from '../types';
import MudanzaCard from './MudanzaCard';

/**
 * PROPS: MudanzaListProps
 * Qué: Recibe la lista completa y las funciones de acción.
 */
interface MudanzaListProps {
  items: SolicitudTraslado[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const MudanzaList = ({ items, onDelete, onEdit }: MudanzaListProps) => {
  // RENDERIZADO CONDICIONAL: Si no hay mudanzas
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <p>No hay solicitudes de traslado registradas aún. 🚚</p>
      </div>
    );
  }

  return (
    <div className="grid-list">
      {items.map((mudanza) => (
        <MudanzaCard 
          key={mudanza.id} // Key única requerida por React
          item={mudanza} 
          onDelete={onDelete} 
          onEdit={onEdit} 
        />
      ))}
    </div>
  );
};

export default MudanzaList;