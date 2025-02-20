n.d(t, { Z: () => s }), n(301563), n(566702);
var r = n(477660),
    i = n.n(r);
let o = /\n$/,
    a = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/,
    s = {
        order: i().defaultRules.heading.order,
        requiredFirstCharacters: ['-'],
        match: (e, t, n) => (null == n || '' === n || null != n.match(o) ? (0, r.anyScopeRegex)(a)(e, t, n) : null),
        parse: function (e, t, n) {
            return { content: (0, r.parseInline)(t, e[1].trim(), n) };
        }
    };
