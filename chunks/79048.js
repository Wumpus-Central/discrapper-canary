function n(e) {
    let n = e.regex,
        r = /[\p{XID_Start}_]\p{XID_Continue}*/u,
        i = ['and', 'as', 'assert', 'async', 'await', 'break', 'case', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'match', 'nonlocal|10', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'],
        a = {
            $pattern: /[A-Za-z]\w+|__\w+__/,
            keyword: i,
            built_in: ['__import__', 'abs', 'all', 'any', 'ascii', 'bin', 'bool', 'breakpoint', 'bytearray', 'bytes', 'callable', 'chr', 'classmethod', 'compile', 'complex', 'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 'exec', 'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr', 'hash', 'help', 'hex', 'id', 'input', 'int', 'isinstance', 'issubclass', 'iter', 'len', 'list', 'locals', 'map', 'max', 'memoryview', 'min', 'next', 'object', 'oct', 'open', 'ord', 'pow', 'print', 'property', 'range', 'repr', 'reversed', 'round', 'set', 'setattr', 'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'vars', 'zip'],
            literal: ['__debug__', 'Ellipsis', 'False', 'None', 'NotImplemented', 'True'],
            type: ['Any', 'Callable', 'Coroutine', 'Dict', 'List', 'Literal', 'Generic', 'Optional', 'Sequence', 'Set', 'Tuple', 'Type', 'Union']
        },
        s = {
            className: 'meta',
            begin: /^(>>>|\.\.\.) /
        },
        o = {
            className: 'subst',
            begin: /\{/,
            end: /\}/,
            keywords: a,
            illegal: /#/
        },
        l = {
            begin: /\{\{/,
            relevance: 0
        },
        u = {
            className: 'string',
            contains: [e.BACKSLASH_ESCAPE],
            variants: [
                {
                    begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                    end: /'''/,
                    contains: [e.BACKSLASH_ESCAPE, s],
                    relevance: 10
                },
                {
                    begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
                    end: /"""/,
                    contains: [e.BACKSLASH_ESCAPE, s],
                    relevance: 10
                },
                {
                    begin: /([fF][rR]|[rR][fF]|[fF])'''/,
                    end: /'''/,
                    contains: [e.BACKSLASH_ESCAPE, s, l, o]
                },
                {
                    begin: /([fF][rR]|[rR][fF]|[fF])"""/,
                    end: /"""/,
                    contains: [e.BACKSLASH_ESCAPE, s, l, o]
                },
                {
                    begin: /([uU]|[rR])'/,
                    end: /'/,
                    relevance: 10
                },
                {
                    begin: /([uU]|[rR])"/,
                    end: /"/,
                    relevance: 10
                },
                {
                    begin: /([bB]|[bB][rR]|[rR][bB])'/,
                    end: /'/
                },
                {
                    begin: /([bB]|[bB][rR]|[rR][bB])"/,
                    end: /"/
                },
                {
                    begin: /([fF][rR]|[rR][fF]|[fF])'/,
                    end: /'/,
                    contains: [e.BACKSLASH_ESCAPE, l, o]
                },
                {
                    begin: /([fF][rR]|[rR][fF]|[fF])"/,
                    end: /"/,
                    contains: [e.BACKSLASH_ESCAPE, l, o]
                },
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE
            ]
        },
        c = '[0-9](_?[0-9])*',
        d = `(\\b(${c}))?\\.(${c})|\\b(${c})\\.`,
        f = `\\b|${i.join('|')}`,
        _ = {
            className: 'number',
            relevance: 0,
            variants: [{ begin: `(\\b(${c})|(${d}))[eE][+-]?(${c})[jJ]?(?=${f})` }, { begin: `(${d})[jJ]?` }, { begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${f})` }, { begin: `\\b0[bB](_?[01])+[lL]?(?=${f})` }, { begin: `\\b0[oO](_?[0-7])+[lL]?(?=${f})` }, { begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${f})` }, { begin: `\\b(${c})[jJ](?=${f})` }]
        },
        h = {
            className: 'comment',
            begin: n.lookahead(/# type:/),
            end: /$/,
            keywords: a,
            contains: [
                { begin: /# type:/ },
                {
                    begin: /#/,
                    end: /\b\B/,
                    endsWithParent: !0
                }
            ]
        },
        p = {
            className: 'params',
            variants: [
                {
                    className: '',
                    begin: /\(\s*\)/,
                    skip: !0
                },
                {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: a,
                    contains: ['self', s, _, u, e.HASH_COMMENT_MODE]
                }
            ]
        };
    return (
        (o.contains = [u, _, s]),
        {
            name: 'Python',
            aliases: ['py', 'gyp', 'ipython'],
            unicodeRegex: !0,
            keywords: a,
            illegal: /(<\/|\?)|=>/,
            contains: [
                s,
                _,
                {
                    scope: 'variable.language',
                    match: /\bself\b/
                },
                {
                    beginKeywords: 'if',
                    relevance: 0
                },
                {
                    match: /\bor\b/,
                    scope: 'keyword'
                },
                u,
                h,
                e.HASH_COMMENT_MODE,
                {
                    match: [/\bdef/, /\s+/, r],
                    scope: {
                        1: 'keyword',
                        3: 'title.function'
                    },
                    contains: [p]
                },
                {
                    variants: [
                        {
                            match: [/\bclass/, /\s+/, r, /\s*/, /\(\s*/, r, /\s*\)/]
                        },
                        {
                            match: [/\bclass/, /\s+/, r]
                        }
                    ],
                    scope: {
                        1: 'keyword',
                        3: 'title.class',
                        6: 'title.class.inherited'
                    }
                },
                {
                    className: 'meta',
                    begin: /^[\t ]*@/,
                    end: /(?=#)|$/,
                    contains: [_, p, u]
                }
            ]
        }
    );
}
e.exports = n;
