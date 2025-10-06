import { useState } from "react";
import FormularioAlumno from "./components/formularioAlumno";
import ListaAlumnos from "./components/listaAlumnos";

const API = "http://localhost:8080/api/alumnos";

export default function Aplicacion() {
  const [alumnos, setAlumnos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [curso, setCurso] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  // Ver alumnos
  const verAlumnos = async () => {
    const respuesta = await fetch(API);
    const datos = await respuesta.json();
    setAlumnos(datos);
  };

  // Guardar (añadir o editar)
  const guardarAlumno = async (e) => {
    e.preventDefault();
    const nuevoAlumno = { nombre, correo, curso};

    if (editandoId) {
      await fetch(`${API}/${editandoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoAlumno)
      });
      setEditandoId(null);
    } else {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoAlumno)
      });
    }

    setNombre("");
    setCorreo("");
    setCurso("");
    verAlumnos();
  };

  // Editar alumno
  const editarAlumno = (alumno) => {
    setNombre(alumno.nombre);
    setCorreo(alumno.correo);
    setCurso(alumno.curso);
    setEditandoId(alumno.id);
  };

  // Eliminar alumno
  const eliminarAlumno = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    verAlumnos();
  };

  return (
    <div style={{ maxWidth: 500, margin: "20px auto", padding: 16 }}>
      <h1>Alumnoss</h1>

      <FormularioAlumno
        nombre={nombre}
        correo={correo}
        curso={curso}
        setNombre={setNombre}
        setCorreo={setCorreo}
        setCurso={setCurso}
        guardarAlumno={guardarAlumno}
        editandoId={editandoId}
      />

      <button onClick={verAlumnos} style={{ marginBottom: 16 }}>Ver alumnos</button>

      <ListaAlumnos
        alumnos={alumnos}
        editarAlumno={editarAlumno}
        eliminarAlumno={eliminarAlumno}
      />
    </div>
  );
}
