t.d(e, { cy: () => x, p: () => p });
var l = t(477900),
    n = t(582128),
    i = t(503698),
    r = t.n(i),
    s = t(821609),
    c = t(696208),
    o = t(364840),
    h = t(866665),
    d = t(999784),
    u = t(683433),
    m = t(541281);
function p(a) {
    let { onClick: e, loading: t, disabled: n, text: i, tooltipText: r, ...c } = a,
        o = { text: i, ...c },
        d = (0, l.jsx)(s.$, { ...o, onClick: e, loading: t, disabled: n, text: i });
    return null != r ? (0, l.jsx)(h.m, { text: r, asContainer: !0, children: d }) : d;
}
function x(a) {
    let { primaryCTAButtonProps: e, showLockIcon: t, onBackClick: i } = a,
        s = n.useMemo(() => [e], [e]),
        h = n.useMemo(() => (null != i ? (0, l.jsx)(u.A, { onClick: i }) : void 0), [i]);
    return null != e.tooltipText || t
        ? (0, l.jsx)(o.j, {
              children: (0, l.jsxs)("div", {
                  className: r()(m.wm, null != i ? m.LT : m.Ub),
                  children: [
                      null != i ? (0, l.jsx)(u.A, { onClick: i }) : null,
                      t && (0, l.jsx)(d.A, {}),
                      (0, l.jsx)(p, { ...e }),
                  ],
              }),
          })
        : (0, l.jsx)(c.H, { leading: h, actions: s });
}
