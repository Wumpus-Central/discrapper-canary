n.d(t, { A: () => I });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(707554),
    o = n(834730),
    c = n(435558),
    d = n.n(c),
    u = n(223637),
    m = n(29814),
    h = n(46054);
let g = d().omit(m.Ay.RULES, ["codeBlock", "heading"]),
    p = {
        ...u.A,
        parse: function (e, t, n) {
            let i = u.A.parse(e, t, n),
                l = Math.min(6, (n.initialHeaderLevel ?? 3) + i.level);
            return { ...i, level: l };
        },
    },
    A = h.A.combineAndInjectMentionRule(g, [h.A.createReactRules(h.A.defaultReactRuleOptions), { header: p }]),
    x = h.A.reactParserFor(A);
var f = n(199014),
    E = n(165648);
function I(e) {
    let { color: t, className: n, variant: s, text: c, lineClamp: d } = e,
        u = (0, r.$)(),
        m = l.useMemo(
            () =>
                null == c ? null : x(c, !0, { allowHeading: null == d, allowList: null == d, initialHeaderLevel: u }),
            [c, d, u],
        );
    return (0, i.jsx)(o.E, {
        className: a()(n, E.PT, { [f.E]: null != d && d > 1, [f.D]: 1 === d }),
        color: t,
        variant: s,
        lineClamp: d,
        children: m,
    });
}
