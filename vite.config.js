import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        robot: resolve(__dirname, 'robot-book-details.html'),
        taskly: resolve(__dirname, 'taskly-details.html'),
        multiAgent: resolve(__dirname, 'multi-agent-details.html'),
        voiceAgent: resolve(__dirname, 'voice-agent-details.html'),
        assignment: resolve(__dirname, 'assignment-details.html'),
        startProject: resolve(__dirname, 'start-project.html'),
      },
    },
  },
});
