a.d(t, { A: () => u });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(939249),
    o = a(834730),
    d = a(147925),
    c = a(214205);
function u(e) {
    let {
            icon: t,
            title: a,
            subtitle: i,
            children: u,
            className: m,
            isExpanded: h,
            onExpandedChange: p,
            defaultExpanded: x = !1,
            onOpen: g,
            maxHeight: v,
        } = e,
        [b, _] = l.useState(x),
        f = l.useRef(null),
        [j, A] = l.useState(null),
        y = void 0 !== h,
        C = y ? h : b;
    l.useEffect(() => {
        C && null != f.current && A(f.current.scrollHeight);
    }, [C, u]);
    let E = l.useCallback(() => {
            let e = !C;
            y || _(e), p?.(e), e && null != g && g();
        }, [C, y, p, g]),
        S = l.useMemo(() => {
            if (C) {
                if (null != v) return { maxHeight: "number" == typeof v ? `${v}px` : v };
                if (null != j) return { maxHeight: `${j}px` };
            }
        }, [v, C, j]);
    return (0, n.jsxs)("div", {
        className: s()(c.Yt, m, { [c.Sg]: C }),
        children: [
            (0, n.jsxs)(r.D, {
                className: c.wx,
                onClick: E,
                children: [
                    null != t && (0, n.jsx)("div", { className: c.Y5, children: t }),
                    (0, n.jsxs)("div", {
                        className: c.DD,
                        children: [
                            (0, n.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: a }),
                            null != i &&
                                "" !== i &&
                                (0, n.jsx)(o.E, { variant: "text-xs/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: s()(c.OW, { [c.Sg]: C }),
                        children: (0, n.jsx)(d.A, { width: 20, height: 20, direction: d.A.Directions.RIGHT }),
                    }),
                ],
            }),
            (0, n.jsx)("div", { ref: f, className: s()(c.Qs, { [c.Sg]: C }), style: S, children: u }),
        ],
    });
}
