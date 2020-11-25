import React, { Fragment } from 'react'; 
import Temas from '../Temas/Temas.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Temas = () => {
	return (
	<Fragment>
	

<div className="select">     
	<select>
		<option value=""></option>
		<option value="temas">Temas</option>
	</select>
	<select>
		<option value=""></option>
		<option value="tipos entregables">Tipos entregables</option>
	</select>
	<select>
		<option value=""></option>
		<option value="areas">Áreas</option>
	</select>
	<select>
		<option value=""></option>
		<option value="tipos de opciones">Tipos de opciones</option>
	</select>
	<select>
		<option value=""></option>
		<option value="nivel autorizacion">Nivel autorización</option>
	</select>
</div>

<table className="table">
<thead>
	<tr>
	<th scope="col">Fecha</th>
	<th scope="col">Nombre</th>
	<th scope="col">Tema</th>
	<th scope="col">Area cliente</th>
	<th scope="col">Area relacionada</th>
	<th scope="col">Opciones</th>
	</tr>
</thead>
<tbody>
	<tr>
	<th scope="row">1</th>
	<td>Mark</td>
	<td>Otto</td>
	<td>@mdo</td>
	</tr>
	<tr>
	<th scope="row">2</th>
	<td>Jacob</td>
	<td>Thornton</td>
	<td>@fat</td>
	</tr>
	<tr>
	<th scope="row">3</th>
	<td>Larry</td>
	<td>the Bird</td>
	<td>@twitter</td>
	</tr>
</tbody>
</table>
	</Fragment>
	);
}
export default Temas;