s.d(t, { A: () => u });
var r = s(627968),
    n = s(64700),
    a = s(503698),
    i = s.n(a),
    l = s(880013),
    o = s(397927),
    c = s(557722),
    h = s(219716),
    d = s(779220);
function u(e) {
    let { show: t, alpha2: s, countryCode: a } = e,
        u = n.useRef(null),
        p = n.useRef(null),
        [m, C] = n.useState(0),
        [A, g] = n.useState(!1);
    n.useEffect(() => {
        function e() {
            C(t ? (p.current?.getBoundingClientRect().width ?? 0) : 0);
        }
        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
    }, [t, s, a]);
    let S = (0, o.zhh)({
        width: `${m}px`,
        onStart: () => {
            g(!0);
        },
        onRest: () => {
            g(!1);
        },
    });
    return (0, r.jsx)(o.YNO, {
        targetElementRef: u,
        position: "top",
        renderPopout: (e) =>
            (0, r.jsx)(h.A, {
                className: d.SW,
                onClick: (t) => {
                    c.A.setCountryCode(t), e.closePopout();
                },
            }),
        children: (e) =>
            (0, r.jsx)("div", {
                className: i()(d.nw, { [d.R]: !(t || A) }),
                ref: u,
                children: (0, r.jsx)(l.animated.div, {
                    className: d.kL,
                    style: S,
                    children: (0, r.jsxs)("div", {
                        className: d.WH,
                        ref: p,
                        children: [
                            (0, r.jsxs)(o.DUT, { ...e, className: d.kf, children: [s, " ", a] }),
                            (0, r.jsx)("div", { className: d.me }),
                        ],
                    }),
                }),
            }),
    });
}
