"use strict";
n.d(t, { Wg: () => f, cy: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(732955),
    u = n(397927),
    c = n(999784),
    d = n(683433),
    _ = n(513670);
let f = (e) => {
        let { message: t } = e;
        return (0, r.jsx)(u.wx6, { type: "critical", children: t });
    },
    h = (e) => {
        let { onClick: t, loading: n, disabled: i, text: a, tooltipText: s, ...u } = e,
            c = { text: a, ...u },
            d = (0, r.jsx)(l.$nd, { ...c, onClick: t, loading: n, disabled: i, text: a });
        return null != s ? (0, r.jsx)(o.m, { text: s, asContainer: !0, children: d }) : d;
    },
    p = (e) => {
        let { primaryCTAButtonProps: t, showLockIcon: n, onBackClick: a } = e,
            o = i.useMemo(() => [t], [t]),
            u = i.useMemo(() => (null != a ? (0, r.jsx)(d.A, { onClick: a }) : void 0), [a]);
        return null != t.tooltipText || n
            ? (0, r.jsx)(l.jlY, {
                  children: (0, r.jsxs)("div", {
                      className: s()(_.wm, null != a ? _.LT : _.Ub),
                      children: [
                          null != a ? (0, r.jsx)(d.A, { onClick: a }) : null,
                          n && (0, r.jsx)(c.A, {}),
                          (0, r.jsx)(h, { ...t }),
                      ],
                  }),
              })
            : (0, r.jsx)(l.H7u, { leading: u, actions: o });
    };
