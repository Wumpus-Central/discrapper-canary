e.exports = function (e) {
    let t = e.regex,
        n = /(?![A-Za-z0-9])(?![$])/,
        r = t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, n),
        i = t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, n),
        o = t.concat(/[A-Z]+/, n),
        a = {
            scope: 'variable',
            match: '\\$+' + r
        },
        s = {
            scope: 'meta',
            variants: [
                {
                    begin: /<\?php/,
                    relevance: 10
                },
                { begin: /<\?=/ },
                {
                    begin: /<\?/,
                    relevance: 0.1
                },
                { begin: /\?>/ }
            ]
        },
        l = {
            scope: 'subst',
            variants: [
                { begin: /\$\w+/ },
                {
                    begin: /\{\$/,
                    end: /\}/
                }
            ]
        },
        c = e.inherit(e.APOS_STRING_MODE, { illegal: null }),
        u = e.inherit(e.QUOTE_STRING_MODE, {
            illegal: null,
            contains: e.QUOTE_STRING_MODE.contains.concat(l)
        }),
        d = {
            begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
            end: /[ \t]*(\w+)\b/,
            contains: e.QUOTE_STRING_MODE.contains.concat(l),
            'on:begin': (e, t) => {
                t.data._beginMatch = e[1] || e[2];
            },
            'on:end': (e, t) => {
                t.data._beginMatch !== e[1] && t.ignoreMatch();
            }
        },
        f = e.END_SAME_AS_BEGIN({
            begin: /<<<[ \t]*'(\w+)'\n/,
            end: /[ \t]*(\w+)\b/
        }),
        _ = '[ \t\n]',
        p = {
            scope: 'string',
            variants: [u, c, d, f]
        },
        h = {
            scope: 'number',
            variants: [{ begin: '\\b0[bB][01]+(?:_[01]+)*\\b' }, { begin: '\\b0[oO][0-7]+(?:_[0-7]+)*\\b' }, { begin: '\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b' }, { begin: '(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?' }],
            relevance: 0
        },
        m = ['false', 'null', 'true'],
        g = ['__CLASS__', '__DIR__', '__FILE__', '__FUNCTION__', '__COMPILER_HALT_OFFSET__', '__LINE__', '__METHOD__', '__NAMESPACE__', '__TRAIT__', 'die', 'echo', 'exit', 'include', 'include_once', 'print', 'require', 'require_once', 'array', 'abstract', 'and', 'as', 'binary', 'bool', 'boolean', 'break', 'callable', 'case', 'catch', 'class', 'clone', 'const', 'continue', 'declare', 'default', 'do', 'double', 'else', 'elseif', 'empty', 'enddeclare', 'endfor', 'endforeach', 'endif', 'endswitch', 'endwhile', 'enum', 'eval', 'extends', 'final', 'finally', 'float', 'for', 'foreach', 'from', 'global', 'goto', 'if', 'implements', 'instanceof', 'insteadof', 'int', 'integer', 'interface', 'isset', 'iterable', 'list', 'match|0', 'mixed', 'new', 'never', 'object', 'or', 'private', 'protected', 'public', 'readonly', 'real', 'return', 'string', 'switch', 'throw', 'trait', 'try', 'unset', 'use', 'var', 'void', 'while', 'xor', 'yield'],
        E = ['Error|0', 'AppendIterator', 'ArgumentCountError', 'ArithmeticError', 'ArrayIterator', 'ArrayObject', 'AssertionError', 'BadFunctionCallException', 'BadMethodCallException', 'CachingIterator', 'CallbackFilterIterator', 'CompileError', 'Countable', 'DirectoryIterator', 'DivisionByZeroError', 'DomainException', 'EmptyIterator', 'ErrorException', 'Exception', 'FilesystemIterator', 'FilterIterator', 'GlobIterator', 'InfiniteIterator', 'InvalidArgumentException', 'IteratorIterator', 'LengthException', 'LimitIterator', 'LogicException', 'MultipleIterator', 'NoRewindIterator', 'OutOfBoundsException', 'OutOfRangeException', 'OuterIterator', 'OverflowException', 'ParentIterator', 'ParseError', 'RangeException', 'RecursiveArrayIterator', 'RecursiveCachingIterator', 'RecursiveCallbackFilterIterator', 'RecursiveDirectoryIterator', 'RecursiveFilterIterator', 'RecursiveIterator', 'RecursiveIteratorIterator', 'RecursiveRegexIterator', 'RecursiveTreeIterator', 'RegexIterator', 'RuntimeException', 'SeekableIterator', 'SplDoublyLinkedList', 'SplFileInfo', 'SplFileObject', 'SplFixedArray', 'SplHeap', 'SplMaxHeap', 'SplMinHeap', 'SplObjectStorage', 'SplObserver', 'SplPriorityQueue', 'SplQueue', 'SplStack', 'SplSubject', 'SplTempFileObject', 'TypeError', 'UnderflowException', 'UnexpectedValueException', 'UnhandledMatchError', 'ArrayAccess', 'BackedEnum', 'Closure', 'Fiber', 'Generator', 'Iterator', 'IteratorAggregate', 'Serializable', 'Stringable', 'Throwable', 'Traversable', 'UnitEnum', 'WeakReference', 'WeakMap', 'Directory', '__PHP_Incomplete_Class', 'parent', 'php_user_filter', 'self', 'static', 'stdClass'],
        b = {
            keyword: g,
            literal: ((e) => {
                let t = [];
                return (
                    e.forEach((e) => {
                        t.push(e), e.toLowerCase() === e ? t.push(e.toUpperCase()) : t.push(e.toLowerCase());
                    }),
                    t
                );
            })(m),
            built_in: E
        },
        y = (e) => e.map((e) => e.replace(/\|\d+$/, '')),
        v = {
            variants: [
                {
                    match: [/new/, t.concat(_, '+'), t.concat('(?!', y(E).join('\\b|'), '\\b)'), i],
                    scope: {
                        1: 'keyword',
                        4: 'title.class'
                    }
                }
            ]
        },
        O = t.concat(r, '\\b(?!\\()'),
        I = {
            variants: [
                {
                    match: [t.concat(/::/, t.lookahead(/(?!class\b)/)), O],
                    scope: { 2: 'variable.constant' }
                },
                {
                    match: [/::/, /class/],
                    scope: { 2: 'variable.language' }
                },
                {
                    match: [i, t.concat(/::/, t.lookahead(/(?!class\b)/)), O],
                    scope: {
                        1: 'title.class',
                        3: 'variable.constant'
                    }
                },
                {
                    match: [i, t.concat('::', t.lookahead(/(?!class\b)/))],
                    scope: { 1: 'title.class' }
                },
                {
                    match: [i, /::/, /class/],
                    scope: {
                        1: 'title.class',
                        3: 'variable.language'
                    }
                }
            ]
        },
        S = {
            scope: 'attr',
            match: t.concat(r, t.lookahead(':'), t.lookahead(/(?!::)/))
        },
        T = {
            relevance: 0,
            begin: /\(/,
            end: /\)/,
            keywords: b,
            contains: [S, a, I, e.C_BLOCK_COMMENT_MODE, p, h, v]
        },
        N = {
            relevance: 0,
            match: [/\b/, t.concat('(?!fn\\b|function\\b|', y(g).join('\\b|'), '|', y(E).join('\\b|'), '\\b)'), r, t.concat(_, '*'), t.lookahead(/(?=\()/)],
            scope: { 3: 'title.function.invoke' },
            contains: [T]
        };
    T.contains.push(N);
    let A = [S, I, e.C_BLOCK_COMMENT_MODE, p, h, v],
        C = {
            begin: t.concat(/#\[\s*\\?/, t.either(i, o)),
            beginScope: 'meta',
            end: /]/,
            endScope: 'meta',
            keywords: {
                literal: m,
                keyword: ['new', 'array']
            },
            contains: [
                {
                    begin: /\[/,
                    end: /]/,
                    keywords: {
                        literal: m,
                        keyword: ['new', 'array']
                    },
                    contains: ['self', ...A]
                },
                ...A,
                {
                    scope: 'meta',
                    variants: [{ match: i }, { match: o }]
                }
            ]
        };
    return {
        case_insensitive: !1,
        keywords: b,
        contains: [
            C,
            e.HASH_COMMENT_MODE,
            e.COMMENT('//', '$'),
            e.COMMENT('/\\*', '\\*/', {
                contains: [
                    {
                        scope: 'doctag',
                        match: '@[A-Za-z]+'
                    }
                ]
            }),
            {
                match: /__halt_compiler\(\);/,
                keywords: '__halt_compiler',
                starts: {
                    scope: 'comment',
                    end: e.MATCH_NOTHING_RE,
                    contains: [
                        {
                            match: /\?>/,
                            scope: 'meta',
                            endsParent: !0
                        }
                    ]
                }
            },
            s,
            {
                scope: 'variable.language',
                match: /\$this\b/
            },
            a,
            N,
            I,
            {
                match: [/const/, /\s/, r],
                scope: {
                    1: 'keyword',
                    3: 'variable.constant'
                }
            },
            v,
            {
                scope: 'function',
                relevance: 0,
                beginKeywords: 'fn function',
                end: /[;{]/,
                excludeEnd: !0,
                illegal: '[$%\\[]',
                contains: [
                    { beginKeywords: 'use' },
                    e.UNDERSCORE_TITLE_MODE,
                    {
                        begin: '=>',
                        endsParent: !0
                    },
                    {
                        scope: 'params',
                        begin: '\\(',
                        end: '\\)',
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: b,
                        contains: ['self', C, a, I, e.C_BLOCK_COMMENT_MODE, p, h]
                    }
                ]
            },
            {
                scope: 'class',
                variants: [
                    {
                        beginKeywords: 'enum',
                        illegal: /[($"]/
                    },
                    {
                        beginKeywords: 'class interface trait',
                        illegal: /[:($"]/
                    }
                ],
                relevance: 0,
                end: /\{/,
                excludeEnd: !0,
                contains: [{ beginKeywords: 'extends implements' }, e.UNDERSCORE_TITLE_MODE]
            },
            {
                beginKeywords: 'namespace',
                relevance: 0,
                end: ';',
                illegal: /[.']/,
                contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: 'title.class' })]
            },
            {
                beginKeywords: 'use',
                relevance: 0,
                end: ';',
                contains: [
                    {
                        match: /\b(as|const|function)\b/,
                        scope: 'keyword'
                    },
                    e.UNDERSCORE_TITLE_MODE
                ]
            },
            p,
            h
        ]
    };
};
