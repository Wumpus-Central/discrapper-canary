"use strict";
n.d(t, { cy: () => p, p: () => h });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(821609),
    u = n(696208),
    c = n(364840),
    d = n(999784),
    _ = n(683433),
    f = n(978793);
let h = (e) => {
        let { onClick: t, loading: n, disabled: r, text: s, tooltipText: a, ...u } = e,
            c = { text: s, ...u },
            d = (0, i.jsx)(l.$, { ...c, onClick: t, loading: n, disabled: r, text: s });
        return null != a ? (0, i.jsx)(o.m, { text: a, asContainer: !0, children: d }) : d;
    },
    p = (e) => {
        let { primaryCTAButtonProps: t, showLockIcon: n, onBackClick: s } = e,
            o = r.useMemo(() => [t], [t]),
            l = r.useMemo(() => (null != s ? (0, i.jsx)(_.A, { onClick: s }) : void 0), [s]);
        return null != t.tooltipText || n
            ? (0, i.jsx)(c.j, {
                  children: (0, i.jsxs)("div", {
                      className: a()(f.wm, null != s ? f.LT : f.Ub),
                      children: [
                          null != s ? (0, i.jsx)(_.A, { onClick: s }) : null,
                          n && (0, i.jsx)(d.A, {}),
                          (0, i.jsx)(h, { ...t }),
                      ],
                  }),
              })
            : (0, i.jsx)(u.H, { leading: l, actions: o });
    };
