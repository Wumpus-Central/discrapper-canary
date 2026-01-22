n.d(t, { A: () => d }), n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(397927),
    o = n(147925),
    c = n(314516);
function d(e) {
    let {
            icon: t,
            title: n,
            subtitle: i,
            children: d,
            className: u,
            isExpanded: m,
            onExpandedChange: p,
            defaultExpanded: h = !1,
            onOpen: f,
            maxHeight: x,
        } = e,
        [b, g] = l.useState(h),
        v = l.useRef(null),
        [j, y] = l.useState(null),
        _ = void 0 !== m,
        A = _ ? m : b;
    l.useEffect(() => {
        A && null != v.current && y(v.current.scrollHeight);
    }, [A, d]);
    let C = l.useCallback(() => {
            let e = !A;
            _ || g(e), null == p || p(e), e && null != f && f();
        }, [A, _, p, f]),
        S = l.useMemo(() => {
            if (A) {
                if (null != x) return { maxHeight: "number" == typeof x ? "".concat(x, "px") : x };
                if (null != j) return { maxHeight: "".concat(j, "px") };
            }
        }, [x, A, j]);
    return (0, a.jsxs)("div", {
        className: r()(c.Yt, u, { [c.Sg]: A }),
        children: [
            (0, a.jsxs)(s.DUT, {
                className: c.wx,
                onClick: C,
                children: [
                    null != t &&
                        (0, a.jsx)("div", {
                            className: c.Y5,
                            children: t,
                        }),
                    (0, a.jsxs)("div", {
                        className: c.DD,
                        children: [
                            (0, a.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: n,
                            }),
                            null != i &&
                                "" !== i &&
                                (0, a.jsx)(s.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    children: i,
                                }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: r()(c.OW, { [c.Sg]: A }),
                        children: (0, a.jsx)(o.A, {
                            width: 20,
                            height: 20,
                            direction: o.A.Directions.RIGHT,
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                ref: v,
                className: r()(c.Qs, { [c.Sg]: A }),
                style: S,
                children: d,
            }),
        ],
    });
}
