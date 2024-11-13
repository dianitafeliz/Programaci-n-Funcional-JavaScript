// Lista de estudiantes en formato Json
const estudiantes = [
    { nombre: "Maria Mora", nota1: 3.2, nota2: 5, nota3: 2.0, nota4: 2.3 },
    { nombre: "Carlos García", nota1: 1.2, nota2: 1.1, nota3: 2.0, nota4: 2.3 },
    { nombre: "Juan Herrera", nota1: 4.1, nota2: 5.0, nota3: 3.8, nota4: 4.1 },
    { nombre: "Mariana Lopez", nota1: 3.7, nota2: 3.9, nota3: 4.3, nota4: 2.9 },
    { nombre: "Luis Martinez", nota1: 2.7, nota2: 5, nota3: 3.9, nota4: 2.7 },
    { nombre: "Liliana Cardona", nota1: 4.2, nota2: 4.1, nota3: 4.3, nota4: 4.9 },
    { nombre: "Ismael Gutierrez", nota1: 4.0, nota2: 1.4, nota3: 1.3, nota4: 3.9 },
    { nombre: "Carolina Acevedo", nota1: 1.3, nota2: 2, nota3: 2.1, nota4: 2 },
    { nombre: "Julieta Lopez", nota1: 4.7, nota2: 4, nota3: 4.6, nota4: 1 },
    { nombre: "Matilde Perez", nota1: 1.2, nota2: 3.2, nota3: 4.2, nota4: 1.9 },
    { nombre: "Ana Moreno", nota1: 3, nota2: 2.2, nota3: 2.3, nota4: 3.9 },
  ];
//----------------------------------------------------------------------------------------------------
 // Calcular el promedio de cada estudiante usando map()
  let estudiantesConPromedio = estudiantes.map(estudiante => {
      const notas = estudiante.nota1 + estudiante.nota2 + estudiante.nota3 + estudiante.nota4;
      const promedio = parseFloat((notas / 4).toFixed(2));
      return { ...estudiante, promedio };
  });
//----------------------------------------------------------------------------------------------------
  // Constantes que nos dan acceso al HTML por medio del Id
  const tablaEstudiantes = document.getElementById("tabla-estudiantes");
  const tablaEstudiantesDestacados = document.getElementById("tabla-estudiantes-destacados");
  
  // Agregar los datos los estudiantes en los campos td haciendo uso de map()
  estudiantesConPromedio.map(estudiante => {
      const fila = `<tr>
          <td class="nombre">${estudiante.nombre}</td>
          <td>${estudiante.nota1}</td>
          <td>${estudiante.nota2}</td>
          <td>${estudiante.nota3}</td>
          <td>${estudiante.nota4}</td>
          <td>${estudiante.promedio}</td>
      </tr>`;
      // Añadir la filas a la tabla
      tablaEstudiantes.innerHTML += fila;
  });
//----------------------------------------------------------------------------------------------------
  // Obtener el elemento de la tabla promedio en el HTML por Id
  const tablaPromedio = document.getElementById("tabla-promedio");
  
  // Calcular el promedio total del curso usando reduce()
  const promedioCurso = estudiantesConPromedio.reduce((acumulador, estudiante) => {
      return acumulador + estudiante.promedio;
  }, 0) / estudiantesConPromedio.length;
  
// Crear una fila con el promedio total del curso
  const filaPromedio = `<tr>
      <td> ${promedioCurso.toFixed(2)}</td>
  </tr>`;
  // Añadir la fila a la tabla
  tablaPromedio.innerHTML += filaPromedio;
 
//--------------------------------------------------------------------------------------------------------
// Filtrar con filter() estudiantes con promedio mayor a 4 y crear la tabla correspondiente 

    const estudiantesDestacados = estudiantesConPromedio.filter(estudiante => estudiante.promedio > 4); 
    estudiantesDestacados.map(estudiante => 
        { const filaDestacada = `<tr> 
            <td class="nombre">${estudiante.nombre}</td> 
            <td>${estudiante.nota1}</td> 
            <td>${estudiante.nota2}</td> 
            <td>${estudiante.nota3}</td> 
            <td>${estudiante.nota4}</td> 
            <td>${estudiante.promedio}</td> 
            </tr>`; tablaEstudiantesDestacados.innerHTML += filaDestacada; }); // Añadir la filas a la tabla

//--------------------------------------------------------------------------------------------------------
/**Agrupar estudiantes por rangos de promedio usando reduce */  

const rangosDePromedio = estudiantesConPromedio.reduce((acumulador, estudiante) => 
    { const promedio = parseFloat(estudiante.promedio); 
        if (promedio < 3) 
            { acumulador.bajo.push(estudiante); } 
        else if (promedio < 4) 
            { acumulador.medio.push(estudiante); } 
        else { acumulador.alto.push(estudiante); } 
    return acumulador; }, { bajo: [], medio: [], alto: [] });
    
// Constantes que nos dan acceso al HTML por medio del Id
const tablaEstudiantesBajo = document.getElementById("tabla-estudiantes-bajo"); 
const tablaEstudiantesMedio = document.getElementById("tabla-estudiantes-medio"); 

// Agregar los datos los estudiantes en los campos td haciendo uso de map()
rangosDePromedio.bajo.map(estudiante => { const fila = `<tr> 
    <td class="alinear-izquierda">${estudiante.nombre}</td> 
    <td>${estudiante.nota1}</td> 
    <td>${estudiante.nota2}</td> 
    <td>${estudiante.nota3}</td> 
    <td>${estudiante.nota4}</td> 
    <td>${estudiante.promedio}</td> 
    </tr>`; tablaEstudiantesBajo.innerHTML += fila; }); // Añadir las filas a la tabla

// Agregar los datos los estudiantes en los campos td haciendo uso de map()  
rangosDePromedio.medio.map(estudiante => { const fila = `<tr> 
    <td class="alinear-izquierda">${estudiante.nombre}</td> 
    <td>${estudiante.nota1}</td> 
    <td>${estudiante.nota2}</td> 
    <td>${estudiante.nota3}</td>
    <td>${estudiante.nota4}</td> 
    <td>${estudiante.promedio}</td> </tr>`; tablaEstudiantesMedio.innerHTML += fila; });// Añadir las filas a la tabla
