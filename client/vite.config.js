import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // ... other configuration options

  build: {
    // ... other build options

    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.jsx'),
      },
    },
  },
});


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({

//   plugins: [react()],
//   build: {
//     // ... other build options

//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'src/main.jsx'),
//       },
//     },
//   },
// })

