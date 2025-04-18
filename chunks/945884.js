n.d(t, { Z: () => s }), n(35282), n(781311);
var r = n(477660),
    i = n.n(r);
let a = /\n$/,
    o = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/,
    s = {
        order: i().defaultRules.heading.order,
        requiredFirstCharacters: ['-'],
        match: (e, t, n) => (null == n || '' === n || null != n.match(a) ? (0, r.anyScopeRegex)(o)(e, t, n) : null),
        parse: function (e, t, n) {
            return { content: (0, r.parseInline)(t, e[1].trim(), n) };
        }
    };
