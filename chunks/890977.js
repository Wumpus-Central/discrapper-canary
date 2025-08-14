n.d(t, { b: () => b }), n(49124);
var r,
    i,
    o = n(255367),
    a = n(73800),
    s = n(120356),
    l = n.n(s),
    c = n(500923),
    u = n.n(c),
    d = n(442837),
    f = n(607070),
    _ = n(484334),
    p = n(158877),
    h = n(505723);
function m(e) {
    let t = (0, d.e7)([f.Z], () => f.Z.useReducedMotion),
        n = a.useRef(null);
    return (
        a.useEffect(() => {
            let r;
            return (
                null != n.current &&
                    (r = u().loadAnimation({
                        container: n.current,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !t,
                        animationData: JSON.parse(JSON.stringify(e)),
                    })),
                () => {
                    null == r || r.destroy();
                }
            );
        }, [n, t, e]),
        n
    );
}
function g(e) {
    let { className: t } = e;
    return (0, o.jsx)("div", {
        ref: m(r || (r = n.t(_, 2))),
        className: l()(h.glow, t),
    });
}
function E(e) {
    let { className: t } = e;
    return (0, o.jsx)("div", {
        ref: m(i || (i = n.t(p, 2))),
        className: l()(h.trinkets, t),
    });
}
let b = (e) => {
    let { children: t, animationContainerClassName: n, glowClassName: r, trinketsClassName: i, onMount: s } = e;
    return (
        a.useEffect(() => {
            s();
        }, [s]),
        (0, o.jsxs)("div", {
            className: n,
            children: [
                (0, o.jsx)(g, { className: r }),
                (0, o.jsx)("div", { className: h.circleLayer }),
                (0, o.jsx)("div", {
                    className: h.entrypoint,
                    children: t,
                }),
                (0, o.jsx)(E, { className: i }),
            ],
        })
    );
};
