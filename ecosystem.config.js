module.exports =
{
  apps: [
  {
    name : 'react-app',
    script: 'yarn',
    args: 'start',
    cwd: './my-react-app',
  }, 
  {
    name : 'express-app',
    script: 'yarn',
    args: 'start',
    cwd: './express-app',
    env: {
      'PORT': 8081
    }
  }, 
  {
    name : 'express-app',
    script: 'yarn',
    args: 'start',
    cwd: './express-app',
    env: {
      'PORT': 8082
    }
  }, 
  ]
};
