n.d(t, { cy: () => p, p: () => m });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    s = n.n(i),
    a = n(821609),
    u = n(696208),
    o = n(364840),
    c = n(866665),
    d = n(820287),
    f = n(999784),
    h = n(429308);
function m(e) {
    let { onClick: t, loading: n, disabled: l, text: i, tooltipText: s, ...u } = e,
        o = { text: i, ...u },
        d = (0, r.jsx)(a.$, { ...o, onClick: t, loading: n, disabled: l, text: i });
    return null != s ? (0, r.jsx)(c.m, { text: s, asContainer: !0, children: d }) : d;
}
function p(e) {
    let { primaryCTAButtonProps: t, showLockIcon: n, onBackClick: i } = e,
        a = l.useMemo(() => [t], [t]),
        c = l.useMemo(() => (null != i ? (0, r.jsx)(d.A, { onClick: i }) : void 0), [i]);
    return null != t.tooltipText || n
        ? (0, r.jsx)(o.j, {
              children: (0, r.jsxs)("div", {
                  className: s()(h.wm, null != i ? h.LT : h.Ub),
                  children: [
                      null != i ? (0, r.jsx)(d.A, { onClick: i }) : null,
                      n && (0, r.jsx)(f.A, {}),
                      (0, r.jsx)(m, { ...t }),
                  ],
              }),
          })
        : (0, r.jsx)(u.H, { leading: c, actions: a });
}
