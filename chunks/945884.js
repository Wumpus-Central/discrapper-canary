var i = r(477660),
    a = r.n(i);
let o = /\n$/,
    s = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/,
    l = {
        order: a().defaultRules.heading.order,
        requiredFirstCharacters: ['-'],
        match: (e, n, r) => (null == r || '' === r || null != r.match(o) ? (0, i.anyScopeRegex)(s)(e, n, r) : null),
        parse: function (e, n, r) {
            return { content: (0, i.parseInline)(n, e[1].trim(), r) };
        }
    };
n.Z = l;
