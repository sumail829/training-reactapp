pipeline{
	agent any
		stages{
			stage("install dependencies"){
        steps{
            echo "installing dependencies"
          }
      }
			stage("Build"){
        steps{
            echo "Building"
         }
       }
			stage("lint"){
        steps{
            echo "linting"
        }   
       }
			stage("test"){
        steps{
            echo "testing"
        }   
       }
			stage("archive"){
        steps{
            echo "archiving"
        }
     }
			stage("Deploy"){
        steps{
            echo "Deploying"
          }
      }
  }
}
