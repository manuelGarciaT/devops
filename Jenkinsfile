pipeline {
    agent any
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
        stage('hacer build') {
                
                    steps {
                        sh 'npm run build'
                    }
                }
            }
        }