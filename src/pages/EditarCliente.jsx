export async function loader({ params }) {
  console.log(params);

  return params;
}

function EditarCliente() {

  return (
    <div>Editar Cliente</div>
  );
}

export default EditarCliente;
