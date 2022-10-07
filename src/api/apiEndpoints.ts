interface ApiEndpoints {
  sourcerunner: string;
  source: string;
}

export const env = {
  'source.waterthetrees.com': 'prod',
  'sourcedev.waterthetrees.com': 'dev',
  'localhost': 'local',
}[window.location.hostname] || 'local';

export const url = {
  prod: 'https://source.waterthetrees.com',
  dev: 'https://sourcedev.waterthetrees.com',
  localserver: 'http://localhost',
  docker: 'http://localhost',
}[env];

export const port = {
  prod: '',
  dev: '',
  local: ':3333',
}[env];

const apiEndpoints: ApiEndpoints = {
  sourcerunner: `${url}${port}/api/sourcerunner`,
  source: `${url}${port}/api/source`,
};

export default apiEndpoints;
