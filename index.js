const core = require('@actions/core');
const exec = require("@actions/exec");

async function run() {
    try {
        const appName = core.getInput('app-name');
        const satelDockerUser = core.getInput('satel-docker-user');
        const satelDockerPass = core.getInput('satel-docker-pass');const src = __dirname;
        const satelRegistry = core.getInput('satel-registry');
        await exec.exec(`${src}/deploy_server.sh  ${appName} ${satelDockerUser} ${satelDockerPass} ${satelRegistry}`) ;
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();