c.d(t, { c: () => h });
var e = c(477900),
    i = c(582128),
    n = c(503698),
    l = c.n(n),
    r = c(628284),
    o = c(624479),
    a = c(939249),
    u = c(866665),
    T = c(661531),
    p = c(957565),
    E = c(375708),
    d = c(407649);
function h(s) {
    let { chunks: t, className: c, onCopy: n, ...h } = s,
        k = i.useMemo(() => t?.join(" "), [t]),
        [C, x] = i.useState(!1),
        A = i.useCallback(() => {
            (0, p.C)(k, () => {
                x(!0), n?.();
            });
        }, [n, k]),
        _ = C ? r.y : o.T;
    return (0, e.jsx)(a.D, {
        className: l()(d.k, c),
        onClick: A,
        children: (0, e.jsx)(u.m, {
            text: C ? E.intl.string(E.t.t5VZ88) : E.intl.string(E.t.OpuAlK),
            children: (0, e.jsx)(_, {
                ...h,
                size: "xxs",
                color: C ? T.A.colors.TEXT_FEEDBACK_POSITIVE : T.A.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
        }),
    });
}
