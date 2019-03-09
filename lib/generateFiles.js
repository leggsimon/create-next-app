const packageJson = require('../examples/default/package.json');

const generatePackageJson = basename => {
	return {
		...packageJson,
		name: basename || 'create-next-example-app',
	};
};

module.exports = {
	generatePackageJson,
};
