n.d(t, { A: () => I });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(707554),
    o = n(834730),
    d = n(435558),
    c = n.n(d),
    u = n(223637),
    m = n(999915),
    h = n(46054);
let g = c().omit(m.Ay.RULES, ["codeBlock", "heading"]),
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
    let { color: t, className: n, variant: s, text: d, lineClamp: c } = e,
        u = (0, r.$)(),
        m = l.useMemo(
            () =>
                null == d ? null : x(d, !0, { allowHeading: null == c, allowList: null == c, initialHeaderLevel: u }),
            [d, c, u],
        );
    return (0, i.jsx)(o.E, {
        className: a()(n, E.PT, { [f.E]: null != c && c > 1, [f.D]: 1 === c }),
        color: t,
        variant: s,
        lineClamp: c,
        children: m,
    });
}
