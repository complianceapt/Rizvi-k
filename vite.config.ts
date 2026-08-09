{
  "name": "RIZVI FAMILY IMPMS",
  "short_name": "RIZVI IMPMS",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#0b1020",
  "theme_color": "#111a32",
  "icons": []
}
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
