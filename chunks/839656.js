n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(707554),
    o = n(834730),
    d = n(735438),
    c = n.n(d),
    u = n(223637),
    m = n(29814),
    h = n(46054);
let g = c().omit(m.A.RULES, ["codeBlock", "heading"]),
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
var f = n(162025),
    E = n(992595);
function I(e) {
    let { color: t, className: n, variant: s, text: d, lineClamp: c } = e,
        u = (0, a.$)(),
        m = l.useMemo(
            () =>
                null == d ? null : x(d, !0, { allowHeading: null == c, allowList: null == c, initialHeaderLevel: u }),
            [d, c, u],
        );
    return (0, i.jsx)(o.E, {
        className: r()(n, E.PT, { [f.E]: null != c && c > 1, [f.D]: 1 === c }),
        color: t,
        variant: s,
        lineClamp: c,
        children: m,
    });
}
