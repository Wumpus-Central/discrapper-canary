n.d(t, { cy: () => A, p: () => h });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(990078),
    o = n(821609),
    u = n(696208),
    c = n(364840),
    d = n(999784),
    p = n(683433),
    m = n(978793);
let h = (e) => {
        let { onClick: t, loading: n, disabled: a, text: i, tooltipText: r, ...u } = e,
            c = { text: i, ...u },
            d = (0, l.jsx)(o.$, { ...c, onClick: t, loading: n, disabled: a, text: i });
        return null != r ? (0, l.jsx)(s.m, { text: r, asContainer: !0, children: d }) : d;
    },
    A = (e) => {
        let { primaryCTAButtonProps: t, showLockIcon: n, onBackClick: i } = e,
            s = a.useMemo(() => [t], [t]),
            o = a.useMemo(() => (null != i ? (0, l.jsx)(p.A, { onClick: i }) : void 0), [i]);
        return null != t.tooltipText || n
            ? (0, l.jsx)(c.j, {
                  children: (0, l.jsxs)("div", {
                      className: r()(m.wm, null != i ? m.LT : m.Ub),
                      children: [
                          null != i ? (0, l.jsx)(p.A, { onClick: i }) : null,
                          n && (0, l.jsx)(d.A, {}),
                          (0, l.jsx)(h, { ...t }),
                      ],
                  }),
              })
            : (0, l.jsx)(u.H, { leading: o, actions: s });
    };
