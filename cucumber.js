const common = {
    parallel: 1,
    retry: 0,
    format: [],
    require: ['features/support/*.js'],
};

module.exports = {
    default: {
        ...common,
    },
    cli: {
        ...common,
        paths: ['features/tests/*.feature'],
    },
};
