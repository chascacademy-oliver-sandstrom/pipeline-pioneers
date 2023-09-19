pipeline {
    agent any

    tools {
        nodejs 'NodeJS 20.6.1'  
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
                echo 'Running build...'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Placeholder for actual deployment steps
            }
        }
    }
}
