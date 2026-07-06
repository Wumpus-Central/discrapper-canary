t.d(n, { cy: () => m, p: () => h });
var l = t(627968),
    r = t(64700),
    i = t(503698),
    s = t.n(i),
    a = t(990078),
    c = t(821609),
    o = t(696208),
    d = t(364840),
    u = t(999784),
    x = t(683433),
    j = t(978793);
function h(e) {
    let { onClick: n, loading: t, disabled: r, text: i, tooltipText: s, ...o } = e,
        d = { text: i, ...o },
        u = (0, l.jsx)(c.$, { ...d, onClick: n, loading: t, disabled: r, text: i });
    return null != s ? (0, l.jsx)(a.m, { text: s, asContainer: !0, children: u }) : u;
}
function m(e) {
    let { primaryCTAButtonProps: n, showLockIcon: t, onBackClick: i } = e,
        a = r.useMemo(() => [n], [n]),
        c = r.useMemo(() => (null != i ? (0, l.jsx)(x.A, { onClick: i }) : void 0), [i]);
    return null != n.tooltipText || t
        ? (0, l.jsx)(d.j, {
              children: (0, l.jsxs)("div", {
                  className: s()(j.wm, null != i ? j.LT : j.Ub),
                  children: [
                      null != i ? (0, l.jsx)(x.A, { onClick: i }) : null,
                      t && (0, l.jsx)(u.A, {}),
                      (0, l.jsx)(h, { ...n }),
                  ],
              }),
          })
        : (0, l.jsx)(o.H, { leading: c, actions: a });
}
