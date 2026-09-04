t.d(e, { cy: () => x, p: () => p });
var l = t(477900),
    n = t(582128),
    r = t(503698),
    s = t.n(r),
    i = t(821609),
    c = t(696208),
    o = t(364840),
    d = t(866665),
    h = t(999784),
    u = t(683433),
    m = t(429308);
function p(a) {
    let { onClick: e, loading: t, disabled: n, text: r, tooltipText: s, ...c } = a,
        o = { text: r, ...c },
        h = (0, l.jsx)(i.$, { ...o, onClick: e, loading: t, disabled: n, text: r });
    return null != s ? (0, l.jsx)(d.m, { text: s, asContainer: !0, children: h }) : h;
}
function x(a) {
    let { primaryCTAButtonProps: e, showLockIcon: t, onBackClick: r } = a,
        i = n.useMemo(() => [e], [e]),
        d = n.useMemo(() => (null != r ? (0, l.jsx)(u.A, { onClick: r }) : void 0), [r]);
    return null != e.tooltipText || t
        ? (0, l.jsx)(o.j, {
              children: (0, l.jsxs)("div", {
                  className: s()(m.wm, null != r ? m.LT : m.Ub),
                  children: [
                      null != r ? (0, l.jsx)(u.A, { onClick: r }) : null,
                      t && (0, l.jsx)(h.A, {}),
                      (0, l.jsx)(p, { ...e }),
                  ],
              }),
          })
        : (0, l.jsx)(c.H, { leading: d, actions: i });
}
