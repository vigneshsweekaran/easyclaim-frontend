# Easyclaim frontend
Easyclaim application UI is developed using Angular Js

### To update the backend url
Update the file src/app/core/api.service.ts

### Deploying Steps
```
kubectl apply -f frontend-deployment.yml
```
### About different Jenkinsfiles in cicd folder
* Jenkinsfile-capstone : Written for Devops professional capstone project
* Jenkinsfile-nexus-docker-same-server : Push the docker images to Nexus Repository manager and deploy the docker container to the same server where jenkins was running
* Jenkinsfile-nexus-docker-diffrent-server-using-ssh : Push the docker images to Nexus Repository manager and deploy the docker container to different server using ssh
* Jenkinsfile-nexus-docker-diffrent-server-using-ssh_plugin : Push the docker images to Nexus Repository manager and deploy the docker container to different server using ssh_plugin
