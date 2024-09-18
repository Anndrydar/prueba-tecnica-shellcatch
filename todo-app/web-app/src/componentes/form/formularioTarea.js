import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'; // Importar axios
import './formularioTarea.css'; // Asegúrate de importar los estilos

const FormularioTarea = () => {
  const [descripcion, setDescripcion] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [tasks, setTasks] = useState([]);

  const URL = 'https://server-todo-app-production.up.railway.app';

  // Cargar las tareas desde la API cuando se monta el componente
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(URL + '/tareas');
        setTasks(response.data);
      } catch (error) {
        console.error('Error al cargar las tareas:', error);
      }
    };
    fetchTasks();
  }, []);

  // Función para guardar una nueva tarea
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (descripcion.trim() !== '') {
      try {
        const newTask = {
          descripcion
        };
        const response = await axios.post(URL + '/tarea', newTask);
        setTasks([...tasks, response.data]);
        setDescripcion('');
        setErrorMsg('');
        window.location.reload();
      } catch (error) {
        console.error('Error al guardar la tarea:', error);
      }
    } else {
      setErrorMsg('Por favor, rellene el campo de descripción.');
    }
  };

  // Función para marcar una tarea como completada o desmarcarla
  const handleCheckTask = async (idtarea) => {
    try {
      const newTask = {};
      await axios.put(`${URL}/completar/${idtarea}`,newTask); 
      const updatedTasks = tasks.map((task) =>
        task.idtarea === idtarea ? { ...task, completado: !task.completado } : task
      );
      setTasks(updatedTasks);
      window.location.reload();
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
    }
  };

  // Función para eliminar una tarea
  const handleDeleteTask = async (idtarea) => {
    try {
      await axios.delete(`${URL}/tarea/${idtarea}`); // Eliminar tarea
      const updatedTasks = tasks.filter((task) => task.idtarea !== idtarea);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setDescripcion(value);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div className="main-form mt-5">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
              <Form.Group controlId="descripcion">
                <Form.Label>Descripción de la Tarea</Form.Label>
                <Form.Control
                  className="input-control"
                  as="input"
                  rows={2}
                  name="descripcion"
                  value={descripcion}
                  placeholder="Ingrese la descripción de la tarea"
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="submit-btn mt-3">
                Guardar
              </Button>
            </Form>
          </div>

          {/* Listado de tareas */}
          <div className="task-list">
            {tasks.map((task) => (
              <div key={task.idtarea} className="task-card">
                <p >
                  {task.descripcion}
                </p>
                <p >
                  {task.estado}
                </p>
                <div className="task-actions">
                  {task.estado === 'pendiente 🕒' &&
                        (<button
                          className="check-btn"
                          onClick={() => handleCheckTask(task.idtarea)}
                        >Completar tarea 
                        </button>)
                  }
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteTask(task.idtarea)}
                  >
                    Eliminar tarea
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormularioTarea;