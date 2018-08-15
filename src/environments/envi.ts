export const environment = {
  production: false,
  // URL base del servidor rest
  server: 'http://mmoron.sis.cooperativaobrera.coop:9005/index.php/',
  sitio_url: 'http://mmoron.sis.cooperativaobrera.coop:4201',
  // Variable almacenada con los datos del cliente
  local_storage: {
    usuario: '_eccolu'
  },
  // DirecciÃ³n a la que se redirecciona en caso de no tener permiso
  redireccionado: {
    login: '/login'
  },
  // Identifica que template tendra en cuenta
  template: 'lcec'
};
