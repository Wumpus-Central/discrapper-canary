e.exports = function (e) {
    return {
        aliases: ['pycon'],
        contains: [
            {
                className: 'meta.prompt',
                starts: {
                    end: / |$/,
                    starts: {
                        end: '$',
                        subLanguage: 'python'
                    }
                },
                variants: [{ begin: /^>>>(?=[ ]|$)/ }, { begin: /^\.\.\.(?=[ ]|$)/ }]
            }
        ]
    };
};
