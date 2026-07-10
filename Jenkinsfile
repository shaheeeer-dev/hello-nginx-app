/*
==========================================================
                Jenkins Pipeline
Project : hello-nginx-app

This pipeline currently does:

1. Checkout source code
2. Show project information
3. Verify project structure
4. (Optional) Build Java backend if Maven exists
5. Finish successfully

As the project grows we'll add:
- Unit Tests
- Nginx Validation
- Deployment
- Docker Build
==========================================================
*/

pipeline {

    // Run on any available Jenkins agent
    agent any

    environment {
        APP_NAME = "hello-nginx-app"
    }

    stages {

        stage('Checkout') {
            steps {
                echo "Checking out source code..."
                checkout scm
            }
        }

        stage('Project Information') {
            steps {
                sh '''
                    echo "========== PROJECT =========="
                    echo "Project: $APP_NAME"

                    echo ""
                    echo "Current Directory:"
                    pwd

                    echo ""
                    echo "Repository Files:"
                    ls -la
                '''
            }
        }

        stage('Check Frontend') {
            steps {
                sh '''
                    if [ -d frontend ]; then
                        echo "Frontend directory found."
                    else
                        echo "Frontend directory not found."
                        exit 1
                    fi
                '''
            }
        }

        stage('Check Backend') {
            steps {
                sh '''
                    if [ -d backend ]; then
                        echo "Backend directory found."
                    else
                        echo "Backend directory does not exist yet."
                    fi
                '''
            }
        }

        /*
        Build the Java backend only if a Maven project exists.
        This keeps early commits from failing.
        */
        stage('Build Java Backend') {
            steps {
                sh '''
                    if [ -f backend/pom.xml ]; then
                        echo "Maven project detected."

                        cd backend
                        mvn clean package

                    else
                        echo "No pom.xml found."
                        echo "Skipping Java build."
                    fi
                '''
            }
        }

        stage('Build Complete') {
            steps {
                echo "Pipeline completed successfully."
            }
        }
    }

    post {

        success {
            echo "Build SUCCESS."
        }

        failure {
            echo "Build FAILED."
        }

        always {
            echo "Cleaning workspace..."
            cleanWs()
        }
    }
}