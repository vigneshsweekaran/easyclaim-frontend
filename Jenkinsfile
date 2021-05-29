def COLOR_MAP = ['SUCCESS': 'good', 'FAILURE': 'danger', 'UNSTABLE': 'danger', 'ABORTED': 'danger']

pipeline {
    agent { label 'master'}
    tools { nodejs "NodeJs10.0" }
    environment {
        DATE = new Date().format('yy.M')
        TAG = "${DATE}.${BUILD_NUMBER}"
        scannerHome = tool 'sonarscanner'
    }
    stages {
        stage('Build') {
            steps {
	            sh 'npm install'
                sh 'npm run cibuild'
            }
        }
        stage('Docker Build') {
            steps {
                script {
                    docker.build("vigneshsweekaran/easyclaim-frontend:${TAG}")
                }
            }
        }
	    stage('SonarQube analysis') {
            steps {
                withSonarQubeEnv('sonarqube') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage('Functional Testing') {
            steps{
                sh "docker run --name easyclaim-frontend -d -p 80:80 vigneshsweekaran/easyclaim-frontend:${env.BUILD_ID}"
                sh "pytest -v -s --html=functional_result_${env.BUILD_ID}.html testing/test_pytest.py"
            }
	    }
	    stage('Pushing Docker Image to Nexus') {
            steps {
                script {
                    docker.withRegistry('https://devops.letspractice.tk', 'docker_credential') {
                        docker.image("training-docker-releases/easyclaim-frontend:${TAG}").push()
                        docker.image("training-docker-releases/easyclaim-frontend:${TAG}").push("latest")
                    }
                }
            }
        }
    }
	post {
        always {
            cleanWs()
            sh "docker stop easyclaim-frontend | true"
            sh "docker rm easyclaim-frontend | true"
            slackSend channel: '#capstone-easyclaim', color: COLOR_MAP[currentBuild.currentResult], message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}"
        }
    }
}
