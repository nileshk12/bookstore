pipeline {
    agent any
    environment {
        COMPOSE_CMD = "docker-compose -f docker-compose.yml"
    }
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/nileshk12/bookstore.git'
            }
        }
        stage('Cleanup Previous Deployment') {
            steps {
                timeout(time: 3, unit: 'MINUTES') {
                    sh '''
                        echo "Cleaning up previous deployment..."
                        ${COMPOSE_CMD} down --volumes --remove-orphans || true
                        docker container prune -f || true
                        echo "Cleanup completed"
                    '''
                }
            }
        }
        stage('Build and Run with Docker Compose') {
            steps {
                timeout(time: 15, unit: 'MINUTES') {
                    sh '''
                        echo "Starting build at $(date)"
                        ${COMPOSE_CMD} up --build -d --force-recreate --no-deps --remove-orphans
                        echo "Docker Compose up completed at $(date)"
                        
                        # Wait a moment for containers to start
                        sleep 10
                        
                        # Verify containers are running
                        ${COMPOSE_CMD} ps
                    '''
                }
            }
        }
        stage('Post-Run Check') {
            steps {
                timeout(time: 2, unit: 'MINUTES') {
                    sh '''
                        echo "=== Running Containers ==="
                        docker ps
                        
                        echo "=== Docker Compose Services Status ==="
                        ${COMPOSE_CMD} ps
                        
                        echo "=== Container Health Check ==="
                        ${COMPOSE_CMD} logs --tail=20
                    '''
                }
            }
        }
    }
    post {
        always {
            sh '''
                echo "=== Final Container Status ==="
                docker ps -a || true
            '''
        }
        failure {
            sh '''
                echo "=== Failure Logs ==="
                ${COMPOSE_CMD} logs || true
                echo "=== Docker System Info ==="
                docker system df || true
            '''
        }
        success {
            echo "Build and deployment succeeded!"
        }
    }
}
