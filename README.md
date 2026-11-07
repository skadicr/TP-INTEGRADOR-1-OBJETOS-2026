# Gestor de Tareas

## Integrantes
- Cecilia Rodriguez

## Descripción
Aplicación web para organizar tareas. Cada tarea tiene un título y un responsable, que se elige entre los usuarios obtenidos de una API pública. Las tareas pueden marcarse como urgentes, completarse y eliminarse. La información se conserva al recargar la página.

## Funcionalidades
- Alta de tareas normales y urgentes
- Asignación de un responsable obtenido desde la API JSONPlaceholder
- Completar, reabrir y eliminar tareas
- Persistencia con localStorage

## Estructura
- `/modelos`: Tarea, TareaUrgente, Usuario y almacenamiento
- `/vistas`: TareaVista
- `/controladores`: TareaControlador
- `/api`: usuarioApi
- `/css`: estilos separados por componente (base, formulario, botones y lista)
- `/docs`: diagrama de clases y diagrama de secuencia