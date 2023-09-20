pipeline {
    agent any

    tools {
        nodejs 'NodeJS 20.6.1'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm // checkout the latest code
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo' "Deployment stage will go here, placeholder until we choose hosting site"
            }
        }
    }
}



