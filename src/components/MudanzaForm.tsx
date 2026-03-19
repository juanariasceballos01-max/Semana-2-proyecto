import React, { useState, useEffect } from 'react';
import { SolicitudTraslado, EstadoTraslado, TipoVehiculo } from '../types';

interface MudanzaFormProps {
  onAdd: (item: SolicitudTraslado) => void;
  onUpdate: (id: number, updates: Partial<SolicitudTraslado>) => void;
  editingItem?: SolicitudTraslado;
}

const initialState: Omit<SolicitudTraslado, 'id'> = {
  cliente: '',
  origen: '',
  destino: '',
  estado: 'pendiente',
  vehiculo: 'furgoneta',
  tarifa: 0,
  fecha: ''
};

const MudanzaForm = ({ onAdd, onUpdate, editingItem }: MudanzaFormProps) => {
  const [formData, setFormData] = useState(initialState);

  // EFECTO: Si recibimos un item para editar, llenamos el formulario
  useEffect(() => {
    if (editingItem) {
      setFormData(editingItem);
    } else {
      setFormData(initialState);
    }
  }, [editingItem]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'tarifa' ? Number(value) : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // VALIDACIÓN BÁSICA
    if (!formData.cliente || !formData.origen || !formData.destino) {
      alert("Por favor, completa los campos principales.");
      return;
    }

    if (editingItem) {
      onUpdate(editingItem.id, formData);
    } else {
      onAdd({ ...formData, id: Date.now() } as SolicitudTraslado);
    }
    
    setFormData(initialState); // Limpiar después de enviar
  };

  return (
    <form onSubmit={handleSubmit} className="mudanza-form">
      <input 
        name="cliente" 
        placeholder="Nombre del Cliente" 
        value={formData.cliente} 
        onChange={handleChange} 
      />
      <input 
        name="origen" 
        placeholder="Dirección Origen" 
        value={formData.origen} 
        onChange={handleChange} 
      />
      <input 
        name="destino" 
        placeholder="Dirección Destino" 
        value={formData.destino} 
        onChange={handleChange} 
      />
      
      <div className="form-row">
        <select name="vehiculo" value={formData.vehiculo} onChange={handleChange}>
          <option value="furgoneta">Furgoneta</option>
          <option value="camion-pequeño">Camión Pequeño</option>
          <option value="camion-grande">Camión Grande</option>
        </select>

        <select name="estado" value={formData.estado} onChange={handleChange}>
          <option value="pendiente">Pendiente</option>
          <option value="en-ruta">En Ruta</option>
          <option value="entregado">Entregado</option>
          <option value="cancelado">Cancelado</option>
        </select>
      </div>

      <div className="form-row">
        <input 
          type="date" 
          name="fecha" 
          value={formData.fecha} 
          onChange={handleChange} 
        />
        <input 
          type="number" 
          name="tarifa" 
          placeholder="Tarifa $" 
          value={formData.tarifa} 
          onChange={handleChange} 
        />
      </div>

      <button type="submit" className="btn-submit">
        {editingItem ? 'Guardar Cambios' : 'Registrar Mudanza'}
      </button>
    </form>
  );
};

export default MudanzaForm;