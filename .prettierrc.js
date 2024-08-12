module.exports = {
    arrowParens: 'avoid',
    bracketSpacing: true,
    printWidth: 120,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    useTabs: false,
    endOfLine: 'lf',

    importOrder: [
        "^components/(.*)$", "^[./]"
    ],

    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
