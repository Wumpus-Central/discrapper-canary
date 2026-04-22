n.d(t, { c: () => g });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(990078),
    o = n(628284),
    c = n(624479),
    d = n(939249),
    u = n(827734),
    h = n(957565),
    m = n(985018),
    A = n(408345);
function g(e) {
    let { chunks: t, className: n, onCopy: a, ...g } = e,
        p = l.useMemo(() => t?.join(" "), [t]),
        [_, f] = l.useState(!1),
        E = l.useCallback(() => {
            (0, h.C)(p, () => {
                f(!0), a?.();
            });
        }, [a, p]),
        C = _ ? o.y : c.T;
    return (0, i.jsx)(d.D, {
        className: s()(A.k, n),
        onClick: E,
        children: (0, i.jsx)(r.m, {
            text: _ ? m.intl.string(m.t.t5VZ88) : m.intl.string(m.t.OpuAlK),
            children: (0, i.jsx)(C, {
                ...g,
                size: "xxs",
                color: _ ? u.A.colors.TEXT_FEEDBACK_POSITIVE : u.A.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
        }),
    });
}
