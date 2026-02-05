"use strict";
n.d(t, { Wg: () => d, cy: () => f });
var r = n(627968),
    i = n(990078),
    a = n(732955),
    s = n(397927),
    o = n(235986),
    l = n(999784),
    u = n(683433),
    c = n(513670);
let d = (e) => {
        let { message: t } = e;
        return (0, r.jsx)(s.wx6, { type: "critical", children: t });
    },
    _ = (e) => {
        let { onClick: t, loading: n, disabled: s, text: o, tooltipText: l, ...u } = e,
            c = { text: o, ...u },
            d = (0, r.jsx)(a.$nd, { ...c, onClick: t, loading: n, disabled: s, text: o });
        return null != l ? (0, r.jsx)(i.m, { text: l, asContainer: !0, children: d }) : d;
    },
    f = (e) => {
        let { primaryCTAButtonProps: t, showLockIcon: n, onBackClick: i, ...a } = e;
        return (0, r.jsxs)(s.jlY, {
            className: c.B,
            direction: o.A.Direction.HORIZONTAL,
            justify: null != i ? o.A.Justify.BETWEEN : o.A.Justify.END,
            "data-migration-pending": !0,
            ...a,
            children: [
                null != i ? (0, r.jsx)(u.A, { onClick: i }) : null,
                n && (0, r.jsx)(l.A, {}),
                (0, r.jsx)(_, { ...t }),
            ],
        });
    };
