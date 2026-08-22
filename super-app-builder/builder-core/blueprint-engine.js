// ===============================
// GENERATOR IMPORTS
// ===============================
const flyGen = require('../generators/fly-generator');
const crudGen = require('../generators/crud-generator');
const authGen = require('../generators/auth-generator');
const dbGen = require('../generators/db-generator');
const reactGen = require('../generators/react-generator');
const nodeGen = require('../generators/node-generator');
const screenGen = require('../generators/screen-generator');
const themeGen = require('../generators/theme-generator');

// ===============================
// BLUEPRINT ENGINE
// ===============================
function generateBlueprint(idea, type) {
    const name = idea
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

    const blueprint = {
        name,
        idea,
        type,
        stack: {
            frontend: 'React',
            backend: 'Node + Express',
            database: 'PostgreSQL'
        },
        folders: [
            `${name}/client/src/components`,
            `${name}/client/src/pages`,
            `${name}/server/routes`,
            `${name}/server/controllers`,
            `${name}/server/models`
        ],
        files: []
    };

    // ===============================
    // APPLY ALL GENERATORS
    // ===============================

    // Fly.io deployment generator
    flyGen.addFlyDeployment(blueprint);

    // CRUD generator
    crudGen.addCRUD(blueprint, 'item');

    // Authentication generator
    authGen.addAuth(blueprint);

    // Database generator
    dbGen.addDatabase(blueprint);

    // React frontend generator
    reactGen.addReact(blueprint);

    // Node backend generator
    nodeGen.addNode(blueprint);

    // Screen generator
    screenGen.addScreens(blueprint);

    // Theme generator
    themeGen.addTheme(blueprint);

    return blueprint;
}

mod