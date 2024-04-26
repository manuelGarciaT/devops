pipeline {
    agent any
    stages {
        stage ("pipeline node") {
            agent {
                docker (node:20.11.1-alpine3.19)
            }
            stages {
                stage('instalar dependencias') {
                    steps {
                        sh 'npm install'
                    }
                }
                stage('ejecutar test') {
                    steps {
                        sh 'npm run test'
                    }
                }
                stage('hacer build'){
                    steps {
                        sh 'npm run build'
                    }
                }
            }
        }
    }
}