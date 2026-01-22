pipeline{
	agent any
        tools {
          nodejs('20.20.0')
        }
		stages{
			stage("install dependencies"){
        steps{
              
            echo "installing dependencies"
            sh 'npm install'
          }
      }
			stage("Build"){
        steps{
            echo "Building"
            sh 'npm run build'
         }
       }
			stage("lint"){
        steps{
            echo "linting"
            sh 'npm run lint'
        }   
       }
			stage("test"){
        steps{
            echo "testing"
            sh 'npm test'
        }   
       }
			stage("archive"){
        steps{
            echo "archiving"
            archiveArtifacts artifacts:"dist/*", fingerprint:true
            
        }
     }
			stage("Deploy"){
        steps{
            echo "Deploying"
           # sh """
           # #!/bin/bash
           # cd dist
           # sudo cp -rv . /var/www/html
           # """
          }
      }
  }
}
