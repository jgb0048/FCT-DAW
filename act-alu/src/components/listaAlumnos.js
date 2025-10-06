export default function ListaAlumnos({ alumnos, editarAlumno, eliminarAlumno }) {
  return (
    <ul>
      {alumnos.map((alumno) => (
        <li key={alumno.id}>
          {alumno.nombre} - {alumno.correo} - {alumno.curso}{" "}
          <button onClick={() => editarAlumno(alumno)}>Editar</button>{" "}
          <button onClick={() => eliminarAlumno(alumno.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}
