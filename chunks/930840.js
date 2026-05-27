s.d(l, { c: () => j });
var r = s(627968),
    n = s(64700),
    t = s(503698),
    a = s.n(t),
    c = s(990078),
    u = s(628284),
    i = s(624479),
    o = s(939249),
    d = s(661531),
    m = s(957565),
    h = s(375708),
    x = s(408345);
function j(e) {
    let { chunks: l, className: s, onCopy: t, ...j } = e,
        p = n.useMemo(() => l?.join(" "), [l]),
        [E, f] = n.useState(!1),
        T = n.useCallback(() => {
            (0, m.C)(p, () => {
                f(!0), t?.();
            });
        }, [t, p]),
        v = E ? u.y : i.T;
    return (0, r.jsx)(o.D, {
        className: a()(x.k, s),
        onClick: T,
        children: (0, r.jsx)(c.m, {
            text: E ? h.intl.string(h.t.t5VZ88) : h.intl.string(h.t.OpuAlK),
            children: (0, r.jsx)(v, {
                ...j,
                size: "xxs",
                color: E ? d.A.colors.TEXT_FEEDBACK_POSITIVE : d.A.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
        }),
    });
}
