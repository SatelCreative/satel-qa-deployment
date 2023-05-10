# Satel QA Deployment
This centralized GitHub action deploys a webapp to QA environment/VM

## Usage 
```yml
name: "QA deployment"
on:
  push:
    branches:
      - main  
deploy-to-qa:
    name: Deploy webapp to QA vm
    needs: [generate-variables, build-client, build-server]
    if: github.ref == 'refs/heads/main' # run only on main
    # host_name is self-hosted or the name of server where the action runner is hosted, self-hosted for example
    runs-on: <host-name>
    steps:
      - name: Deploy to QA vm
        uses:  SatelCreative/satel-qa-deployment@v1
        with:
          app-name: <app-name>
          # clean-branch-name parameter is set in a previous step  
          clean-branch-name: ${{ needs.registry-push.outputs.clean-branch-name }}
          # satel-docker-user & satel-docker-pass are secrets added from the settings
          satel-docker-user: ${{ secrets.SATEL_DOCKER_USER }}
          satel-docker-pass: ${{ secrets.SATEL_DOCKER_PASS }}
          satel-registry: docker.satel.ca
```
        
