# Easyclaim frontend
Easyclaim application UI is developed using Angular Js 

### To update the backend url
Update the file src/app/core/api.service.ts

# Deploying Steps
### Step 1 : Creating namespace 
```
kubectl create namespace easyclaim
```

### Step 2 : Deploying frontend container as deployment
```
kubectl apply -f frontend-deployment.yml
```
### About different Jenkinsfiles in cicd folder
* Jenkinsfile-capstone : Written for Devops professional capstone project
* Jenkinsfile-nexus-docker-same-server : Push the docker images to Nexus Repository manager and deploy the docker container to the same server where jenkins was running
* Jenkinsfile-nexus-docker-diffrent-server-using-ssh : Push the docker images to Nexus Repository manager and deploy the docker container to different server using ssh
* Jenkinsfile-nexus-docker-diffrent-server-using-ssh_plugin : Push the docker images to Nexus Repository manager and deploy the docker container to different server using ssh_plugin


### Backend Url hardcoded for Image tags
* 32011 --> http://gke-worker.devopspilot.com:32012
* 32013 --> http://gke-worker.devopspilot.com:32014
* 32015 --> http://gke-worker.devopspilot.com:32016

### Generate load for testing Horizontal Pod Autoscaler
```
kubectl run -i --tty load-generator --rm --image=busybox --restart=Never -- /bin/sh -c "while sleep 0.01; do wget -q -O- http://easyclaim-frontend:80; done"
```

easyclaim-frontend:80 --> Frontend Servicename and port