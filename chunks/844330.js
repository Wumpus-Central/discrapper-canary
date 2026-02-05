n.d(t, { A: () => c });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(397927),
    o = n(147925),
    d = n(314516);
function c(e) {
    let {
            icon: t,
            title: n,
            subtitle: i,
            children: c,
            className: u,
            isExpanded: m,
            onExpandedChange: h,
            defaultExpanded: x = !1,
            onOpen: p,
            maxHeight: g,
        } = e,
        [_, f] = s.useState(x),
        v = s.useRef(null),
        [b, j] = s.useState(null),
        A = void 0 !== m,
        C = A ? m : _;
    s.useEffect(() => {
        C && null != v.current && j(v.current.scrollHeight);
    }, [C, c]);
    let S = s.useCallback(() => {
            let e = !C;
            A || f(e), h?.(e), e && null != p && p();
        }, [C, A, h, p]),
        T = s.useMemo(() => {
            if (C) {
                if (null != g) return { maxHeight: "number" == typeof g ? `${g}px` : g };
                if (null != b) return { maxHeight: `${b}px` };
            }
        }, [g, C, b]);
    return (0, a.jsxs)("div", {
        className: l()(d.Yt, u, { [d.Sg]: C }),
        children: [
            (0, a.jsxs)(r.DUT, {
                className: d.wx,
                onClick: S,
                children: [
                    null != t && (0, a.jsx)("div", { className: d.Y5, children: t }),
                    (0, a.jsxs)("div", {
                        className: d.DD,
                        children: [
                            (0, a.jsx)(r.Text, { variant: "text-sm/medium", color: "text-default", children: n }),
                            null != i &&
                                "" !== i &&
                                (0, a.jsx)(r.Text, { variant: "text-xs/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: l()(d.OW, { [d.Sg]: C }),
                        children: (0, a.jsx)(o.A, { width: 20, height: 20, direction: o.A.Directions.RIGHT }),
                    }),
                ],
            }),
            (0, a.jsx)("div", { ref: v, className: l()(d.Qs, { [d.Sg]: C }), style: T, children: c }),
        ],
    });
}
