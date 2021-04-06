# Easyclaim frontend
Easyclaim application UI is developed using Angular Js

### To update the backend url
Update the file src/app/core/api.service.ts

# Deploying Steps
### Step 1 : Creating namespace
```
kubectl create namespace eayclaim
```

### Step 2 : Deploying frontend container as deployment
```
kubectl apply -f frontend-deployment.yml
```
