"use strict";
n.d(t, { cy: () => h, p: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(821609),
    u = n(696208),
    c = n(364840),
    d = n(999784),
    _ = n(683433),
    f = n(978793);
let p = (e) => {
        let { onClick: t, loading: n, disabled: i, text: s, tooltipText: a, ...u } = e,
            c = { text: s, ...u },
            d = (0, r.jsx)(l.$, { ...c, onClick: t, loading: n, disabled: i, text: s });
        return null != a ? (0, r.jsx)(o.m, { text: a, asContainer: !0, children: d }) : d;
    },
    h = (e) => {
        let { primaryCTAButtonProps: t, showLockIcon: n, onBackClick: s } = e,
            o = i.useMemo(() => [t], [t]),
            l = i.useMemo(() => (null != s ? (0, r.jsx)(_.A, { onClick: s }) : void 0), [s]);
        return null != t.tooltipText || n
            ? (0, r.jsx)(c.j, {
                  children: (0, r.jsxs)("div", {
                      className: a()(f.wm, null != s ? f.LT : f.Ub),
                      children: [
                          null != s ? (0, r.jsx)(_.A, { onClick: s }) : null,
                          n && (0, r.jsx)(d.A, {}),
                          (0, r.jsx)(p, { ...t }),
                      ],
                  }),
              })
            : (0, r.jsx)(u.H, { leading: l, actions: o });
    };
