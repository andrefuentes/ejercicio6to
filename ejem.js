var Andre={
	edad:17,
	altura:190,
	direccion:{
		departamento:'Guatemala',
		municipio:'ciudad de Guatemala',
		canton:16,
		zona:2,
		residencia:{
			colonia:'san angel',
			casa:'40',
		}
	}
};
console.log(Andre['direccion']['zona ']);
console.log(Andre.direccion.residencia);