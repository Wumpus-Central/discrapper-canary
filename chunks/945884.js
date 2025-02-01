n.d(t, { Z: () => o });
var i = n(477660),
    r = n.n(i);
let a = /\n$/,
    s = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/,
    o = {
        order: r().defaultRules.heading.order,
        requiredFirstCharacters: ['-'],
        match: (e, t, n) => (null == n || '' === n || null != n.match(a) ? (0, i.anyScopeRegex)(s)(e, t, n) : null),
        parse: function (e, t, n) {
            return { content: (0, i.parseInline)(t, e[1].trim(), n) };
        }
    };
