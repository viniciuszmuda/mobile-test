node {
    stage('checkout from scm') {
        checkout scm
    }
    stage('Execucao') {
        sh label: '', script: 'gradlew clean test'
    }
    stage ('Resultado') {
    cucumber fileIncludePattern: '**/cucumber.json', sortingMethod: 'ALPHABETICAL'
    }
}
