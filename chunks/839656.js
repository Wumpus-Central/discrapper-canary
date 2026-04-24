n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(707554),
    o = n(834730),
    c = n(735438),
    d = n.n(c),
    u = n(223637),
    _ = n(29814),
    m = n(46054);
let h = d().omit(_.A.RULES, ["codeBlock", "heading"]),
    p = {
        ...u.A,
        parse: function (e, t, n) {
            let i = u.A.parse(e, t, n),
                l = Math.min(6, (n.initialHeaderLevel ?? 3) + i.level);
            return { ...i, level: l };
        },
    },
    g = m.A.combineAndInjectMentionRule(h, [m.A.createReactRules(m.A.defaultReactRuleOptions), { header: p }]),
    f = m.A.reactParserFor(g);
var x = n(162025),
    A = n(992595);
function C(e) {
    let { color: t, className: n, variant: a, text: c, lineClamp: d } = e,
        u = (0, s.$)(),
        _ = l.useMemo(
            () =>
                null == c ? null : f(c, !0, { allowHeading: null == d, allowList: null == d, initialHeaderLevel: u }),
            [c, d, u],
        );
    return (0, i.jsx)(o.E, {
        className: r()(n, A.PT, { [x.E]: null != d && d > 1, [x.D]: 1 === d }),
        color: t,
        variant: a,
        lineClamp: d,
        children: _,
    });
}
