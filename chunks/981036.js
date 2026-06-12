n.d(t, { cy: () => m, p: () => h });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    i = n(990078),
    c = n(821609),
    d = n(696208),
    o = n(364840),
    u = n(999784),
    x = n(683433),
    j = n(978793);
let h = (e) => {
        let { onClick: t, loading: n, disabled: r, text: a, tooltipText: s, ...d } = e,
            o = { text: a, ...d },
            u = (0, l.jsx)(c.$, { ...o, onClick: t, loading: n, disabled: r, text: a });
        return null != s ? (0, l.jsx)(i.m, { text: s, asContainer: !0, children: u }) : u;
    },
    m = (e) => {
        let { primaryCTAButtonProps: t, showLockIcon: n, onBackClick: a } = e,
            i = r.useMemo(() => [t], [t]),
            c = r.useMemo(() => (null != a ? (0, l.jsx)(x.A, { onClick: a }) : void 0), [a]);
        return null != t.tooltipText || n
            ? (0, l.jsx)(o.j, {
                  children: (0, l.jsxs)("div", {
                      className: s()(j.wm, null != a ? j.LT : j.Ub),
                      children: [
                          null != a ? (0, l.jsx)(x.A, { onClick: a }) : null,
                          n && (0, l.jsx)(u.A, {}),
                          (0, l.jsx)(h, { ...t }),
                      ],
                  }),
              })
            : (0, l.jsx)(d.H, { leading: c, actions: i });
    };
