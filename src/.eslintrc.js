module.exports = {
    root: true,
    extends: ['scratch', 'scratch/es6', 'scratch/react', 'plugin:import/errors'],
    env: {
        browser: true
    },
    globals: {
        process: true
    },
    rules: {
        'import/no-mutable-exports': 'error',
        'import/no-commonjs': 'error',
        'import/no-amd': 'error',
        'import/no-nodejs-modules': 'error',
        'react/jsx-no-literals': 'error',
        'no-confusing-arrow': ['error', {
            'allowParens': true
        }],
        'no-warning-comments': [0, {
            terms: ['todo'],
            location: 'start'
        }]
    },
    settings: {
        react: {
            version: '16.2' // Prevent 16.3 lifecycle method errors
        }
    }
};
