n.d(t, { cy: () => p, p: () => m });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(821609),
    u = n(696208),
    c = n(364840),
    o = n(866665),
    d = n(820287),
    f = n(999784),
    h = n(429308);
function m(e) {
    let { onClick: t, loading: n, disabled: r, text: i, tooltipText: a, ...u } = e,
        c = { text: i, ...u },
        d = (0, l.jsx)(s.$, { ...c, onClick: t, loading: n, disabled: r, text: i });
    return null != a ? (0, l.jsx)(o.m, { text: a, asContainer: !0, children: d }) : d;
}
function p(e) {
    let { primaryCTAButtonProps: t, showLockIcon: n, onBackClick: i } = e,
        s = r.useMemo(() => [t], [t]),
        o = r.useMemo(() => (null != i ? (0, l.jsx)(d.A, { onClick: i }) : void 0), [i]);
    return null != t.tooltipText || n
        ? (0, l.jsx)(c.j, {
              children: (0, l.jsxs)("div", {
                  className: a()(h.wm, null != i ? h.LT : h.Ub),
                  children: [
                      null != i ? (0, l.jsx)(d.A, { onClick: i }) : null,
                      n && (0, l.jsx)(f.A, {}),
                      (0, l.jsx)(m, { ...t }),
                  ],
              }),
          })
        : (0, l.jsx)(u.H, { leading: o, actions: s });
}
