import { useState } from 'react';
import { SolicitudTraslado } from './types';
import Header from './components/Header';
import MudanzaForm from './components/MudanzaForm';
import MudanzaList from './components/MudanzaList';
import SearchBar from './components/SearchBar';
import Stats from './components/Stats';

const App = () => {
  const [traslados, setTraslados] = useState<SolicitudTraslado[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // CRUD: Crear
  const addTraslado = (nuevo: SolicitudTraslado) => {
    setTraslados([...traslados, nuevo]);
  };

  // CRUD: Actualizar
  const updateTraslado = (id: number, actualizado: Partial<SolicitudTraslado>) => {
    setTraslados(traslados.map((t) => (t.id === id ? { ...t, ...actualizado } : t)));
    setEditingId(null);
  };

  // CRUD: Eliminar
  const deleteTraslado = (id: number) => {
    if (confirm('¿Eliminar este registro?')) {
      setTraslados(traslados.filter((t) => t.id !== id));
    }
  };

  // Lógica de Filtrado para el Buscador
  const trasladosFiltrados = traslados.filter(t => 
    t.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.destino.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      
      <div className="content-wrapper">
        <Stats items={traslados} />
        
        <div className="main-grid">
          <aside className="sidebar">
            <div className="section-card">
              <h3>{editingId ? '📝 Editar Servicio' : '🚚 Nuevo Traslado'}</h3>
              <MudanzaForm 
                onAdd={addTraslado} 
                onUpdate={updateTraslado}
                editingItem={traslados.find(t => t.id === editingId)}
              />
              {editingId && (
                <button className="btn-cancel" onClick={() => setEditingId(null)}>
                  Cancelar Edición
                </button>
              )}
            </div>
          </aside>

          <section className="main-content">
            <div className="list-controls">
              <h3>Registros de Mudanzas</h3>
              <SearchBar onSearch={setSearchTerm} />
            </div>
            
            <MudanzaList 
              items={trasladosFiltrados} 
              onDelete={deleteTraslado} 
              onEdit={setEditingId} 
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;