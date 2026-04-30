"use strict";
n.d(t, { c: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(628284),
    u = n(624479),
    c = n(939249),
    d = n(661531),
    _ = n(957565),
    f = n(375708),
    h = n(408345);
function p(e) {
    let { chunks: t, className: n, onCopy: s, ...p } = e,
        E = r.useMemo(() => t?.join(" "), [t]),
        [m, g] = r.useState(!1),
        A = r.useCallback(() => {
            (0, _.C)(E, () => {
                g(!0), s?.();
            });
        }, [s, E]),
        I = m ? l.y : u.T;
    return (0, i.jsx)(c.D, {
        className: a()(h.k, n),
        onClick: A,
        children: (0, i.jsx)(o.m, {
            text: m ? f.intl.string(f.t.t5VZ88) : f.intl.string(f.t.OpuAlK),
            children: (0, i.jsx)(I, {
                ...p,
                size: "xxs",
                color: m ? d.A.colors.TEXT_FEEDBACK_POSITIVE : d.A.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
        }),
    });
}
