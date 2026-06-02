r.d(t, { cy: () => m, p: () => _ });
var n = r(627968),
    a = r(64700),
    l = r(503698),
    i = r.n(l),
    u = r(990078),
    s = r(821609),
    o = r(696208),
    c = r(364840),
    d = r(999784),
    p = r(683433),
    f = r(978793);
let _ = (e) => {
        let { onClick: t, loading: r, disabled: a, text: l, tooltipText: i, ...o } = e,
            c = { text: l, ...o },
            d = (0, n.jsx)(s.$, { ...c, onClick: t, loading: r, disabled: a, text: l });
        return null != i ? (0, n.jsx)(u.m, { text: i, asContainer: !0, children: d }) : d;
    },
    m = (e) => {
        let { primaryCTAButtonProps: t, showLockIcon: r, onBackClick: l } = e,
            u = a.useMemo(() => [t], [t]),
            s = a.useMemo(() => (null != l ? (0, n.jsx)(p.A, { onClick: l }) : void 0), [l]);
        return null != t.tooltipText || r
            ? (0, n.jsx)(c.j, {
                  children: (0, n.jsxs)("div", {
                      className: i()(f.wm, null != l ? f.LT : f.Ub),
                      children: [
                          null != l ? (0, n.jsx)(p.A, { onClick: l }) : null,
                          r && (0, n.jsx)(d.A, {}),
                          (0, n.jsx)(_, { ...t }),
                      ],
                  }),
              })
            : (0, n.jsx)(o.H, { leading: s, actions: u });
    };
