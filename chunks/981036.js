n.d(t, { cy: () => h, p: () => m });
var r = n(477900),
    o = n(582128),
    l = n(503698),
    s = n.n(l),
    i = n(821609),
    a = n(696208),
    u = n(364840),
    c = n(866665),
    d = n(820287),
    p = n(999784),
    x = n(429308);
function m(e) {
    let { onClick: t, loading: n, disabled: o, text: l, tooltipText: s, ...a } = e,
        u = { text: l, ...a },
        d = (0, r.jsx)(i.$, { ...u, onClick: t, loading: n, disabled: o, text: l });
    return null != s ? (0, r.jsx)(c.m, { text: s, asContainer: !0, children: d }) : d;
}
function h(e) {
    let { primaryCTAButtonProps: t, showLockIcon: n, onBackClick: l } = e,
        i = o.useMemo(() => [t], [t]),
        c = o.useMemo(() => (null != l ? (0, r.jsx)(d.A, { onClick: l }) : void 0), [l]);
    return null != t.tooltipText || n
        ? (0, r.jsx)(u.j, {
              children: (0, r.jsxs)("div", {
                  className: s()(x.wm, null != l ? x.LT : x.Ub),
                  children: [
                      null != l ? (0, r.jsx)(d.A, { onClick: l }) : null,
                      n && (0, r.jsx)(p.A, {}),
                      (0, r.jsx)(m, { ...t }),
                  ],
              }),
          })
        : (0, r.jsx)(a.H, { leading: c, actions: i });
}
