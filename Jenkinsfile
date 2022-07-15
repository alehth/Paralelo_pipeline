pipeline {
    agent any

    tools {nodejs "Node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/alehth/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 7d83e757-f440-405b-affc-4e2c9713047a  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/alehth/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 7d83e757-f440-405b-affc-4e2c9713047a  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent2_3"
                    }
                    steps {
                        git url: 'https://github.com/alehth/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 7d83e757-f440-405b-affc-4e2c9713047a  --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agent2_4"
                    }
                    steps {
                        git url: 'https://github.com/alehth/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 7d83e757-f440-405b-affc-4e2c9713047a  --parallel'
                    
                    }
                }

               

                
   
                  
            }

             
        }

    }
            
}