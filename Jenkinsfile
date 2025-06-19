pipeline {
    agent any

    environment {
        COMPOSE_CMD = "docker compose -f docker-compose.yml"
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/nileshk12/bookstore.git'
            }
        }

        stage('Build and Run with Docker Compose') {
            steps {
                sh "${COMPOSE_CMD} down || true"
                sh "${COMPOSE_CMD} up --build -d"
            }
        }

        stage('Post-Run Check') {
            steps {
                sh 'docker ps' // List running containers
            }
        }
    }

    post {
        failure {
            echo "Build failed"
        }
        success {
            echo "Build succeeded"
        }
    }
}

