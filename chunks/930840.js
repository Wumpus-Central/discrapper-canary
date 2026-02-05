n.d(t, { c: () => h });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(990078),
    o = n(397927),
    c = n(957565),
    d = n(985018),
    u = n(770778);
function h(e) {
    let { chunks: t, className: n, onCopy: a, ...h } = e,
        m = l.useMemo(() => t?.join(" "), [t]),
        [A, p] = l.useState(!1),
        g = l.useCallback(() => {
            (0, c.C)(m, () => {
                p(!0), a?.();
            });
        }, [a, m]),
        f = A ? o.yr3 : o.TdU;
    return (0, i.jsx)(o.DUT, {
        className: s()(u.k, n),
        onClick: g,
        children: (0, i.jsx)(r.m, {
            text: A ? d.intl.string(d.t.t5VZ88) : d.intl.string(d.t.OpuAlK),
            children: (0, i.jsx)(f, {
                ...h,
                size: "xxs",
                color: A ? o.LU0.colors.TEXT_FEEDBACK_POSITIVE : o.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
        }),
    });
}
