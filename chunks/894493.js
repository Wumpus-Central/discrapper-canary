e.exports = function (e) {
    let t = e.regex,
        n = /[dualxmsipngr]{0,12}/,
        r = {
            $pattern: /[\w.]+/,
            keyword: 'abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot class close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl field fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map method mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0'
        },
        i = {
            className: 'subst',
            begin: '[$@]\\{',
            end: '\\}',
            keywords: r
        },
        o = {
            begin: /->\{/,
            end: /\}/
        },
        a = {
            scope: 'attr',
            match: /\s+:\s*\w+(\s*\(.*?\))?/
        },
        s = {
            scope: 'variable',
            variants: [
                { begin: /\$\d/ },
                { begin: t.concat(/[$%@](?!")(\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, '(?![A-Za-z])(?![@$%])') },
                {
                    begin: /[$%@](?!")[^\s\w{=]|\$=/,
                    relevance: 0
                }
            ],
            contains: [a]
        },
        l = {
            className: 'number',
            variants: [{ match: /0?\.[0-9][0-9_]+\b/ }, { match: /\bv?(0|[1-9][0-9_]*(\.[0-9_]+)?|[1-9][0-9_]*)\b/ }, { match: /\b0[0-7][0-7_]*\b/ }, { match: /\b0x[0-9a-fA-F][0-9a-fA-F_]*\b/ }, { match: /\b0b[0-1][0-1_]*\b/ }],
            relevance: 0
        },
        c = [e.BACKSLASH_ESCAPE, i, s],
        u = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/],
        d = (e, r, i = '\\1') => {
            let o = '\\1' === i ? i : t.concat(i, r);
            return t.concat(t.concat('(?:', e, ')'), r, /(?:\\.|[^\\\/])*?/, o, /(?:\\.|[^\\\/])*?/, i, n);
        },
        f = (e, r, i) => t.concat(t.concat('(?:', e, ')'), r, /(?:\\.|[^\\\/])*?/, i, n),
        _ = [
            s,
            e.HASH_COMMENT_MODE,
            e.COMMENT(/^=\w/, /=cut/, { endsWithParent: !0 }),
            o,
            {
                className: 'string',
                contains: c,
                variants: [
                    {
                        begin: 'q[qwxr]?\\s*\\(',
                        end: '\\)',
                        relevance: 5
                    },
                    {
                        begin: 'q[qwxr]?\\s*\\[',
                        end: '\\]',
                        relevance: 5
                    },
                    {
                        begin: 'q[qwxr]?\\s*\\{',
                        end: '\\}',
                        relevance: 5
                    },
                    {
                        begin: 'q[qwxr]?\\s*\\|',
                        end: '\\|',
                        relevance: 5
                    },
                    {
                        begin: 'q[qwxr]?\\s*<',
                        end: '>',
                        relevance: 5
                    },
                    {
                        begin: 'qw\\s+q',
                        end: 'q',
                        relevance: 5
                    },
                    {
                        begin: "'",
                        end: "'",
                        contains: [e.BACKSLASH_ESCAPE]
                    },
                    {
                        begin: '"',
                        end: '"'
                    },
                    {
                        begin: '`',
                        end: '`',
                        contains: [e.BACKSLASH_ESCAPE]
                    },
                    {
                        begin: /\{\w+\}/,
                        relevance: 0
                    },
                    {
                        begin: '-?\\w+\\s*=>',
                        relevance: 0
                    }
                ]
            },
            l,
            {
                begin: '(\\/\\/|' + e.RE_STARTERS_RE + '|\\b(split|return|print|reverse|grep)\\b)\\s*',
                keywords: 'split return print reverse grep',
                relevance: 0,
                contains: [
                    e.HASH_COMMENT_MODE,
                    {
                        className: 'regexp',
                        variants: [{ begin: d('s|tr|y', t.either(...u, { capture: !0 })) }, { begin: d('s|tr|y', '\\(', '\\)') }, { begin: d('s|tr|y', '\\[', '\\]') }, { begin: d('s|tr|y', '\\{', '\\}') }],
                        relevance: 2
                    },
                    {
                        className: 'regexp',
                        variants: [
                            {
                                begin: /(m|qr)\/\//,
                                relevance: 0
                            },
                            { begin: f('(?:m|qr)?', /\//, /\//) },
                            { begin: f('m|qr', t.either(...u, { capture: !0 }), /\1/) },
                            { begin: f('m|qr', /\(/, /\)/) },
                            { begin: f('m|qr', /\[/, /\]/) },
                            { begin: f('m|qr', /\{/, /\}/) }
                        ]
                    }
                ]
            },
            {
                className: 'function',
                beginKeywords: 'sub method',
                end: '(\\s*\\(.*?\\))?[;{]',
                excludeEnd: !0,
                relevance: 5,
                contains: [e.TITLE_MODE, a]
            },
            {
                className: 'class',
                beginKeywords: 'class',
                end: '[;{]',
                excludeEnd: !0,
                relevance: 5,
                contains: [e.TITLE_MODE, a, l]
            },
            {
                begin: '-\\w\\b',
                relevance: 0
            },
            {
                begin: '^__DATA__$',
                end: '^__END__$',
                subLanguage: 'mojolicious',
                contains: [
                    {
                        begin: '^@@.*',
                        end: '$',
                        className: 'comment'
                    }
                ]
            }
        ];
    return (
        (i.contains = _),
        (o.contains = _),
        {
            name: 'Perl',
            aliases: ['pl', 'pm'],
            keywords: r,
            contains: _
        }
    );
};
