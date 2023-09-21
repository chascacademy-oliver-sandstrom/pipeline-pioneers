pipeline {
    agent any

    tools {
        nodejs 'NodeJS 20.6.1'
    }

    environment {
        JIRA_CREDENTIALS = credentials('06d572c9-0723-4e67-9243-19de023940c8')
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
                sh 'echo "Deployment stage here"'
            }
        }
        stage('Update Jira Ticket') {
            steps {
                script {
                    def jiraUrl = 'https://pipeline-pioneers.atlassian.net/rest/api/2/issue/KAN-9/comment'
                    def comment = 'This is the updated comment for the Jira ticket.'

                    def curlCmd = """curl -i -X POST -H 'Content-Type: application/json' -u ${JIRA_CREDENTIALS_USR}:${JIRA_CREDENTIALS_PSW} -d '{
                       "body": "${comment}"
                    }' ${jiraUrl}"""

                    def responseContent = sh(script: curlCmd, returnStdout: true).trim()
                    echo "Response from Jira: ${responseContent}"

                    if (responseContent.contains("\"id\":")) {  
                        echo "Jira ticket updated successfully."
                    } else {
                        error "Failed to update Jira ticket."
                    }
                }
            }
        }
    }
}
