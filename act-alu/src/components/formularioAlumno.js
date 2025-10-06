export default function FormularioAlumno({
  nombre,
  correo,
  curso,
  setNombre,
  setCorreo,
  setCurso,
  guardarAlumno,
  editandoId
}) {
  return (
    <form onSubmit={guardarAlumno} style={{ display: "grid", gap: 8, marginBottom: 16 }}>
      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        placeholder="Curso"
        value={curso}
        onChange={(e) => setCurso(e.target.value)}
        />
      <button type="submit">
        {editandoId ? "Guardar cambios" : "Añadir alumno"}
      </button>
    </form>
  );
}
