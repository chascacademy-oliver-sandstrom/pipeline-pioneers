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
                sh 'echo "Deployment stage will go here, placeholder until we choose a hosting site"'
                
                // Add a comment to Jira here
                script {
                    def jiraUrl = 'https://pipeline-pioneers.atlassian.net/rest/api/2/issue/KAN-9/comment'
                    def jiraUsername = 'sebastian.salas@chasacademy.se'
                    def jiraApiToken = 'ATATT3xFfGF0XoQ2iw7R8usyY81C62UrFlR1ywGQ9Bd7DK6SbAuMYc0VHd6i6qrOSxz5uJBQ2aXzs8kmb7XgbKR_fxwHC1sseoZ-7E0YVN9TXBUwKR2p-9lAl1sA2Ot9z8ASYsMzZrYVVfZKWCX5tNaSwgcbSiscLsODc1r-BwEw9Q2_k_8dOZg=8293DF8F'
                    def comment = 'This is the updated comment for the Jira ticket.'

                    def curlCmd = """curl -i -X POST -H 'Content-Type: application/json' -u ${jiraUsername}:${jiraApiToken} -d '{
                       "body": "${comment}"
                    }' ${jiraUrl}"""

                    def responseContent = sh(script: curlCmd, returnStdout: true).trim()
                    echo "Response from Jira: ${responseContent}"

                    if (responseContent.contains("\"id\":")) {  // checking if the response has an "id" field, indicating a successful comment creation
                        echo "Jira ticket updated successfully."
                    } else {
                        error "Failed to update Jira ticket."
                    }
                }
            }
        }
    }
}
