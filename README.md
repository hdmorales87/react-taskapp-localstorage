# React Task App with LocalStorage

Una aplicación de gestión de tareas construida con React que utiliza LocalStorage para la persistencia de datos. El proyecto sigue buenas prácticas de código con hooks personalizados y una arquitectura escalable.

## 🚀 Características

- ✅ Crear, marcar como completada y eliminar tareas
- 💾 Persistencia automática con LocalStorage
- 🎨 Interfaz moderna con Bootstrap 5
- 🔄 Filtrado de tareas por estado (pendientes/completadas)
- 🏗️ Arquitectura modular con hooks personalizados
- 📝 Código limpio y mantenible con nombres descriptivos

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm (viene con Node.js)

## 🛠️ Instalación

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd react-taskapp-localstorage
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar la aplicación
```bash
npm start
```

La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000)

## 📦 Dependencias

### Dependencias principales:
- **react**: ^19.3.0 - Biblioteca principal para construir la UI
- **react-dom**: ^19.3.0 - Renderizado de React en el DOM
- **bootstrap**: ^5.3.8 - Framework CSS para estilos responsive
- **react-scripts**: 5.0.1 - Scripts de configuración de Create React App

### Dependencias de desarrollo/testing:
- **@testing-library/react**: ^16.3.3 - Testing de componentes React
- **@testing-library/jest-dom**: ^6.9.1 - Utilidades para Jest
- **@testing-library/user-event**: ^13.5.0 - Simulación de eventos de usuario
- **@testing-library/dom**: ^10.4.2 - Testing del DOM
- **web-vitals**: ^2.1.4 - Métricas de rendimiento web

## 🎯 Comandos Disponibles

### `npm start`
Ejecuta la aplicación en modo de desarrollo.
- Abre [http://localhost:3000](http://localhost:3000)
- Recarga automática al guardar cambios
- Muestra errores de linting en consola

### `npm test`
Ejecuta los tests en modo interactivo.
- Watch mode: ejecuta tests automáticamente al guardar cambios
- Presiona `a` para ejecutar todos los tests
- Presiona `q` para salir

### `npm run build`
Compila la aplicación para producción.
- Crea la carpeta `build/` con archivos optimizados
- Minifica JavaScript y CSS
- Nombres de archivos con hashes para cache busting
- Lista para desplegar

### `npm run eject`
⚠️ **Operación irreversible** - No es necesaria para este proyecto.
Expone toda la configuración de webpack, Babel, ESLint, etc.

## 🏗️ Estructura del Proyecto

```
react-taskapp-localstorage/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Container.js    # Contenedor de layout
│   │   ├── TaskCreator.js  # Formulario para crear tareas
│   │   ├── TaskTable.js    # Tabla de tareas
│   │   ├── TaskRow.js      # Fila individual de tarea
│   │   └── VisibilityControl.js  # Control de visibilidad
│   ├── hooks/              # Hooks personalizados
│   │   └── useLocalStorage.js    # Hook para persistencia en localStorage
│   ├── App.js              # Componente principal
│   ├── App.css             # Estilos globales
│   └── index.js            # Punto de entrada
├── package.json            # Dependencias y scripts
└── README.md               # Este archivo
```

## 🔧 Arquitectura y Patrones

### Hooks Personalizados

#### `useLocalStorage(key, initialValue)`
Hook personalizado para sincronizar estado con localStorage.

**Características:**
- Lazy initialization: ejecuta la lectura de localStorage solo una vez durante la inicialización
- Manejo automático de errores de parsing
- Actualización automática de localStorage al cambiar el estado

**Uso:**
```javascript
const [tasks, setTasks] = useLocalStorage('tasks', []);
```

**Beneficios:**
- Reutilizable para cualquier dato que necesite persistencia
- Evita el useEffect tradicional para lectura inicial
- Sin "flash" de estado vacío (los datos están disponibles desde el primer render)

### Lazy Initialization en useState

```javascript
// ❌ Sin lazy initialization (se ejecuta en cada render)
const [value, setValue] = useState(expensiveCalculation());

// ✅ Con lazy initialization (se ejecuta solo en inicialización)
const [value, setValue] = useState(() => expensiveCalculation());
```

**¿Por qué usarlo?**
- Mejora el rendimiento evitando cálculos innecesarios
- Función de inicialización se ejecuta SOLO una vez
- Ideal para operaciones costosas como leer localStorage

### Convenciones de Nomenclatura

El proyecto sigue convenciones consistentes para mejorar la legibilidad:

**Variables de estado:**
- `tasks` (no `taskItems`) - nombre simple y estándar
- `showCompleted` (no `completed`) - indica claramente que es estado de UI

**Funciones:**
- Prefijo `handle` para event handlers: `handleAddTask`, `handleToggleTask`
- Prefijo `on` para props de callbacks: `onAddTask`, `onToggleTask`
- Nombres descriptivos: `handleDeleteCompleted` (no `clearCompleted`)

**Componentes:**
- PascalCase: `TaskCreator`, `TaskTable`, `VisibilityControl`
- Props camelCase con prefijo `on` para callbacks

## 🔄 Flujo de Datos

1. **Usuario crea tarea** → `TaskCreator` → `handleAddTask` → `setTasks` → `useLocalStorage` guarda en localStorage
2. **Usuario marca tarea** → `TaskRow` → `handleToggleTask` → `setTasks` → `useLocalStorage` actualiza localStorage
3. **Usuario filtra tareas** → `VisibilityControl` → `setShowCompleted` → Filtrado en `getTasksByStatus`
4. **Usuario elimina completadas** → `VisibilityControl` → `handleDeleteCompleted` → `setTasks` → `useLocalStorage` actualiza

## 🎨 Tecnologías Utilizadas

- **React 19**: Biblioteca para construir interfaces de usuario
- **Bootstrap 5**: Framework CSS para diseño responsive
- **LocalStorage API**: API del navegador para persistencia de datos
- **Create React App**: Herramienta de inicialización de proyectos React

## 📚 Recursos de Aprendizaje

- [Documentación oficial de React](https://react.dev/)
- [Documentación de Bootstrap 5](https://getbootstrap.com/docs/5.3/)
- [Hooks personalizados en React](https://react.dev/reference/react)
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## 🚀 Despliegue

Para desplegar en producción:

```bash
npm run build
```

Luego puedes desplegar la carpeta `build/` en:
- Netlify
- Vercel
- GitHub Pages
- Cualquier hosting estático

## 📝 Notas de Desarrollo

- El proyecto usa `create-react-app` como base
- No se requiere configuración adicional de webpack o Babel
- Los estilos de Bootstrap se importan en el componente correspondiente
- El estado se mantiene sincronizado automáticamente con localStorage

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-feature`)
3. Commit tus cambios (`git commit -m 'Añadir nueva feature'`)
4. Push a la rama (`git push origin feature/nueva-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
