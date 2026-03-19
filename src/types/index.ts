/**
 * TIPOS LITERALES Y UNIONES
 * Qué: Define estados y tipos de vehículos permitidos.
 * Para: Asegurar que el CRUD solo use valores válidos.
 * Impacto: Evita errores al actualizar estados o asignar logística.
 */
export type EstadoTraslado = 'pendiente' | 'en-ruta' | 'entregado' | 'cancelado';
export type TipoVehiculo = 'furgoneta' | 'camion-pequeño' | 'camion-grande';

/**
 * INTERFAZ: Solicitud de Traslado (Entidad Principal)
 * Qué: Estructura de datos para el CRUD de mudanzas.
 * Para: Tipar el estado (useState) en App.tsx y las Props de los componentes.
 * Impacto: Garantiza que cada objeto en la lista tenga ID, cliente y direcciones.
 */
export interface SolicitudTraslado {
  id: number;           // Usaremos Date.now() para generar IDs únicos
  cliente: string;      // Nombre de quien contrata
  origen: string;       // Dirección de salida
  destino: string;      // Dirección de llegada
  estado: EstadoTraslado;
  vehiculo: TipoVehiculo;
  tarifa: number;       // Precio pactado
  fecha: string;        // Fecha programada del servicio
}

/**
 * INTERFAZ: Estadísticas (Opcional para el componente Stats)
 * Qué: Estructura para resumir los datos de la empresa.
 */
export interface MudanzaStats {
  totalServicios: number;
  pendientes: number;
  completados: number;
  recaudacionTotal: number;
}