t.d(a, { cy: () => x, p: () => p });
var l = t(477900),
    n = t(582128),
    r = t(503698),
    s = t.n(r),
    i = t(821609),
    c = t(696208),
    o = t(364840),
    u = t(866665),
    d = t(999784),
    h = t(683433),
    m = t(429308);
function p(e) {
    let { onClick: a, loading: t, disabled: n, text: r, tooltipText: s, ...c } = e,
        o = { text: r, ...c },
        d = (0, l.jsx)(i.$, { ...o, onClick: a, loading: t, disabled: n, text: r });
    return null != s ? (0, l.jsx)(u.m, { text: s, asContainer: !0, children: d }) : d;
}
function x(e) {
    let { primaryCTAButtonProps: a, showLockIcon: t, onBackClick: r } = e,
        i = n.useMemo(() => [a], [a]),
        u = n.useMemo(() => (null != r ? (0, l.jsx)(h.A, { onClick: r }) : void 0), [r]);
    return null != a.tooltipText || t
        ? (0, l.jsx)(o.j, {
              children: (0, l.jsxs)("div", {
                  className: s()(m.wm, null != r ? m.LT : m.Ub),
                  children: [
                      null != r ? (0, l.jsx)(h.A, { onClick: r }) : null,
                      t && (0, l.jsx)(d.A, {}),
                      (0, l.jsx)(p, { ...a }),
                  ],
              }),
          })
        : (0, l.jsx)(c.H, { leading: u, actions: i });
}
