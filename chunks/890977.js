n.d(t, { b: () => y }), n(49124);
var i,
    r,
    l = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    c = n(500923),
    u = n.n(c),
    d = n(442837),
    p = n(607070),
    h = n(484334),
    f = n(158877),
    m = n(505723);
function g(e) {
    let t = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        n = a.useRef(null);
    return (
        a.useEffect(() => {
            let i;
            return (
                null != n.current &&
                    (i = u().loadAnimation({
                        container: n.current,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !t,
                        animationData: JSON.parse(JSON.stringify(e)),
                    })),
                () => {
                    null == i || i.destroy();
                }
            );
        }, [n, t, e]),
        n
    );
}
function b(e) {
    let { className: t } = e;
    return (0, l.jsx)("div", {
        ref: g(i || (i = n.t(h, 2))),
        className: s()(m.glow, t),
    });
}
function C(e) {
    let { className: t } = e;
    return (0, l.jsx)("div", {
        ref: g(r || (r = n.t(f, 2))),
        className: s()(m.trinkets, t),
    });
}
let y = (e) => {
    let { children: t, animationContainerClassName: n, glowClassName: i, trinketsClassName: r, onMount: o } = e;
    return (
        a.useEffect(() => {
            o();
        }, [o]),
        (0, l.jsxs)("div", {
            className: n,
            children: [
                (0, l.jsx)(b, { className: i }),
                (0, l.jsx)("div", { className: m.circleLayer }),
                (0, l.jsx)("div", {
                    className: m.entrypoint,
                    children: t,
                }),
                (0, l.jsx)(C, { className: r }),
            ],
        })
    );
};
