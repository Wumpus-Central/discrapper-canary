l.d(e, { cy: () => x, p: () => p });
var t = l(477900),
    r = l(582128),
    s = l(503698),
    n = l.n(s),
    h = l(821609),
    i = l(696208),
    o = l(364840),
    c = l(866665),
    d = l(999784),
    u = l(683433),
    m = l(429308);
function p(a) {
    let { onClick: e, loading: l, disabled: r, text: s, tooltipText: n, ...i } = a,
        o = { text: s, ...i },
        d = (0, t.jsx)(h.$, { ...o, onClick: e, loading: l, disabled: r, text: s });
    return null != n ? (0, t.jsx)(c.m, { text: n, asContainer: !0, children: d }) : d;
}
function x(a) {
    let { primaryCTAButtonProps: e, showLockIcon: l, onBackClick: s } = a,
        h = r.useMemo(() => [e], [e]),
        c = r.useMemo(() => (null != s ? (0, t.jsx)(u.A, { onClick: s }) : void 0), [s]);
    return null != e.tooltipText || l
        ? (0, t.jsx)(o.j, {
              children: (0, t.jsxs)("div", {
                  className: n()(m.wm, null != s ? m.LT : m.Ub),
                  children: [
                      null != s ? (0, t.jsx)(u.A, { onClick: s }) : null,
                      l && (0, t.jsx)(d.A, {}),
                      (0, t.jsx)(p, { ...e }),
                  ],
              }),
          })
        : (0, t.jsx)(i.H, { leading: c, actions: h });
}
