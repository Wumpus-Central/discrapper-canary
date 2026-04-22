n.d(t, { cy: () => A, p: () => h });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(990078),
    o = n(821609),
    u = n(696208),
    c = n(364840),
    d = n(999784),
    p = n(683433),
    m = n(978793);
let h = (e) => {
        let { onClick: t, loading: n, disabled: i, text: a, tooltipText: r, ...u } = e,
            c = { text: a, ...u },
            d = (0, l.jsx)(o.$, { ...c, onClick: t, loading: n, disabled: i, text: a });
        return null != r ? (0, l.jsx)(s.m, { text: r, asContainer: !0, children: d }) : d;
    },
    A = (e) => {
        let { primaryCTAButtonProps: t, showLockIcon: n, onBackClick: a } = e,
            s = i.useMemo(() => [t], [t]),
            o = i.useMemo(() => (null != a ? (0, l.jsx)(p.A, { onClick: a }) : void 0), [a]);
        return null != t.tooltipText || n
            ? (0, l.jsx)(c.j, {
                  children: (0, l.jsxs)("div", {
                      className: r()(m.wm, null != a ? m.LT : m.Ub),
                      children: [
                          null != a ? (0, l.jsx)(p.A, { onClick: a }) : null,
                          n && (0, l.jsx)(d.A, {}),
                          (0, l.jsx)(h, { ...t }),
                      ],
                  }),
              })
            : (0, l.jsx)(u.H, { leading: o, actions: s });
    };
