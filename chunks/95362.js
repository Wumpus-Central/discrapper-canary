r.d(t, { Ar: () => v, d_: () => f, Ip: () => p });
var n = r(477900),
    c = r(582128),
    i = r(503698),
    s = r.n(i),
    l = r(330573),
    u = r(518898),
    a = r(751591),
    d = r(6095);
function o(e, t) {
    return function (r) {
        let {
                children: i,
                className: o,
                dir: p = "ltr",
                orientation: v = "vertical",
                scrollbarGutter: f = "stable",
                fade: h = !1,
                disableFocusRingScope: R = !1,
                onScroll: b,
                style: k,
                ref: y,
                ...x
            } = r,
            A = c.useRef(null),
            _ = (0, u.A)({ scrollbarGutter: f, orientation: v, className: o, scrollerRef: A }),
            j = !1 === f || "vertical" !== v ? void 0 : "stable" === f ? d.x2 : d.GV;
        return (0, n.jsx)("div", {
            ref: (e) => {
                ("function" == typeof y ? y(e) : null != y && (y.current = e), (A.current = e));
            },
            className: s()(o, j, { [e]: !0, [t]: h }),
            style: (0, a.Ay)(k, v),
            dir: p,
            ...x,
            children: (0, n.jsxs)(l.t, { disableFocusRingScope: R, containerRef: A, children: [i, _] }),
        });
    };
}
let p = o(d.yL, d.Rv),
    v = o(d.qZ, d.Rv),
    f = o(d.dv, d.Rv);
