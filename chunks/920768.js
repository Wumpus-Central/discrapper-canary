s.d(t, { A: () => m });
var r = s(627968),
    n = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(419354),
    o = s(717421),
    c = s(265872),
    h = s(939249),
    d = s(557722),
    u = s(219716),
    p = s(696841);
function m(e) {
    let { show: t, alpha2: s, countryCode: l } = e,
        m = n.useRef(null),
        C = n.useRef(null),
        [f, A] = n.useState(0),
        [g, y] = n.useState(!1);
    n.useEffect(() => {
        function e() {
            A(t ? (C.current?.getBoundingClientRect().width ?? 0) : 0);
        }
        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
    }, [t, s, l]);
    let x = (0, o.z)({
        width: `${f}px`,
        onStart: () => {
            y(!0);
        },
        onRest: () => {
            y(!1);
        },
    });
    return (0, r.jsx)(c.Y, {
        targetElementRef: m,
        position: "top",
        renderPopout: (e) =>
            (0, r.jsx)(u.A, {
                className: p.SW,
                onClick: (t) => {
                    d.A.setCountryCode(t), e.closePopout();
                },
            }),
        children: (e) =>
            (0, r.jsx)("div", {
                className: a()(p.nw, { [p.R]: !(t || g) }),
                ref: m,
                children: (0, r.jsx)(i.animated.div, {
                    className: p.kL,
                    style: x,
                    children: (0, r.jsxs)("div", {
                        className: p.WH,
                        ref: C,
                        children: [
                            (0, r.jsxs)(h.D, { ...e, className: p.kf, children: [s, " ", l] }),
                            (0, r.jsx)("div", { className: p.me }),
                        ],
                    }),
                }),
            }),
    });
}
