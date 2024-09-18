import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import styles from './stylesTarea';

const FormularioTarea = () => {
  const { t } = useTranslation(); // hook de i18next
  const [descripcion, setDescripcion] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [tasks, setTasks] = useState([]);

  const URL = 'https://server-todo-app-production.up.railway.app';

  const fetchTasks = async () => {
    try {
      const response = await axios.get(URL + '/tareas');
      setTasks(response.data);
    } catch (error) {
      console.error('Error al cargar las tareas:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleOnSubmit = async () => {
    if (descripcion.trim() !== '') {
      try {
        const newTask = { descripcion };
        const response = await axios.post(URL + '/tarea', newTask);
        setTasks([...tasks, response.data]);
        setDescripcion('');
        setErrorMsg('');
        window.location.reload();
      } catch (error) {
        console.error('Error al guardar la tarea:', error);
      }
    } else {
      setErrorMsg(t('error_msg')); // Usa la traducción
    }
  };

  const handleCheckTask = async (idtarea) => {
    try {
      await axios.put(`${URL}/completar/${idtarea}`);
      fetchTasks();
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
    }
  };

  const handleDeleteTask = async (idtarea) => {
    try {
      await axios.delete(`${URL}/tarea/${idtarea}`);
      const updatedTasks = tasks.filter((task) => task.idtarea !== idtarea);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  return (
    <View style={styles.container}>
      {errorMsg ? <Text style={styles.errorMsg}>{errorMsg}</Text> : null}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={t('task_description')} // Usa la traducción
          value={descripcion}
          onChangeText={setDescripcion}
        />
        <Button title={t('save')} onPress={handleOnSubmit} /> {/* Usa la traducción */}
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text>{t(item.descripcion)}</Text>
            <Text>{t(item.estado)}</Text>
            <View style={styles.taskActions}>
              {item.estado === 'pendiente 🕒' && (
                <TouchableOpacity
                  style={styles.checkBtn}
                  onPress={() => handleCheckTask(item.idtarea)}
                >
                  <Text>{t('complete_task')}</Text> {/* Usa la traducción */}
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => handleDeleteTask(item.idtarea)}
              >
                <Text>{t('delete_task')}</Text> {/* Usa la traducción */}
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.idtarea.toString()}
      />
    </View>
  );
};

export default FormularioTarea;
