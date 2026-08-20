c.d(t, { c: () => d });
var e = c(477900),
    i = c(582128),
    n = c(503698),
    o = c.n(n),
    l = c(628284),
    r = c(624479),
    a = c(939249),
    u = c(866665),
    p = c(661531),
    C = c(957565),
    E = c(375708),
    T = c(596872);
function d(s) {
    let { chunks: t, className: c, onCopy: n, ...d } = s,
        h = i.useMemo(() => t?.join(" "), [t]),
        [k, x] = i.useState(!1),
        A = i.useCallback(() => {
            (0, C.C)(h, () => {
                x(!0), n?.();
            });
        }, [n, h]),
        _ = k ? l.y : r.CopyIcon;
    return (0, e.jsx)(a.D, {
        className: o()(T.k, c),
        onClick: A,
        children: (0, e.jsx)(u.m, {
            text: k ? E.intl.string(E.t.t5VZ88) : E.intl.string(E.t.OpuAlK),
            children: (0, e.jsx)(_, {
                ...d,
                size: "xxs",
                color: k ? p.A.colors.TEXT_FEEDBACK_POSITIVE : p.A.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
        }),
    });
}
