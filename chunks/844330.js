var i = l(477900),
    t = l(582128),
    n = l(503698),
    r = l.n(n),
    c = l(939249),
    a = l(834730),
    u = l(147925),
    d = l(760038);
l.d(
    s,
    {},
    {
        A: function (e) {
            let {
                    icon: s,
                    title: l,
                    subtitle: n,
                    children: h,
                    className: x,
                    isExpanded: o,
                    onExpandedChange: m,
                    defaultExpanded: p = !1,
                    onOpen: f,
                    maxHeight: j,
                } = e,
                [v, b] = t.useState(p),
                g = t.useRef(null),
                [k, N] = t.useState(null),
                S = void 0 !== o,
                w = S ? o : v;
            t.useEffect(() => {
                w && null != g.current && N(g.current.scrollHeight);
            }, [w, h]);
            let y = t.useCallback(() => {
                    let e = !w;
                    (S || b(e), m?.(e), e && null != f && f());
                }, [w, S, m, f]),
                C = t.useMemo(() => {
                    if (w) {
                        if (null != j) return { maxHeight: "number" == typeof j ? `${j}px` : j };
                        if (null != k) return { maxHeight: `${k}px` };
                    }
                }, [j, w, k]);
            return (0, i.jsxs)("div", {
                className: r()(d.Yt, x, { [d.Sg]: w }),
                children: [
                    (0, i.jsxs)(c.D, {
                        className: d.wx,
                        onClick: y,
                        children: [
                            null != s && (0, i.jsx)("div", { className: d.Y5, children: s }),
                            (0, i.jsxs)("div", {
                                className: d.DD,
                                children: [
                                    (0, i.jsx)(a.E, { variant: "body-sm/medium", color: "text-default", children: l }),
                                    null != n &&
                                        "" !== n &&
                                        (0, i.jsx)(a.E, {
                                            variant: "body-xs/medium",
                                            color: "text-subtle",
                                            children: n,
                                        }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: r()(d.OW, { [d.Sg]: w }),
                                children: (0, i.jsx)(u.A, { width: 20, height: 20, direction: u.A.Directions.RIGHT }),
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { ref: g, className: r()(d.Qs, { [d.Sg]: w }), style: C, children: h }),
                ],
            });
        },
    },
);
