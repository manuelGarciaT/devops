pipeline {
    agent any
    stages {
        stage ("pipeline node") {

            stages {
                stage("checkout") {
                    steps {
                        checkout scm
                    }
                }
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