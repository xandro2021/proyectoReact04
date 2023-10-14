import { obtenerCliente } from '../data/clientes';

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clienteId);

  // Validar que exista el cliente (no vacio)
  if (Object.values(cliente).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'El cliente no fue encontrado',
    });
  }

  return cliente;
}

function EditarCliente() {

  return (
    <div>Editar Cliente</div>
  );
}

export default EditarCliente;
