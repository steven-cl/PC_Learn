import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@root': path.resolve(__dirname, '.'), // Aquí apuntas a la raíz del proyecto
      '@src': path.resolve(__dirname, 'src'), // Aquí apuntas a la carpeta src
      '@assets': path.resolve(__dirname, 'src/assets'), // Aquí apuntas a la carpeta assets dentro de src
      '@components': path.resolve(__dirname, 'src/components'), // Aquí apuntas a la carpeta components dentro de src
      '@layouts': path.resolve(__dirname, 'src/layouts'), // Aquí apuntas a la carpeta layouts dentro de src
      '@lib': path.resolve(__dirname, 'src/lib'), // Aquí apuntas a la carpeta lib dentro de src
      '@pages': path.resolve(__dirname, 'src/pages'), // Aquí apuntas a la carpeta pages dentro de src
    },
  },
})
