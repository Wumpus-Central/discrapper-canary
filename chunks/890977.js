(n.d(t, { b: () => b }), n(49124));
var r,
    i,
    a = n(255367),
    o = n(73800),
    s = n(120356),
    l = n.n(s),
    c = n(500923),
    u = n.n(c),
    d = n(442837),
    f = n(607070),
    _ = n(484334),
    p = n(158877),
    h = n(449696);
function m(e) {
    let t = (0, d.e7)([f.Z], () => f.Z.useReducedMotion),
        n = o.useRef(null);
    return (
        o.useEffect(() => {
            let r;
            return (
                null != n.current &&
                    (r = u().loadAnimation({
                        container: n.current,
                        renderer: 'svg',
                        loop: !0,
                        autoplay: !t,
                        animationData: JSON.parse(JSON.stringify(e))
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
    return (0, a.jsx)('div', {
        ref: m(r || (r = n.t(_, 2))),
        className: l()(h.glow, t)
    });
}
function E(e) {
    let { className: t } = e;
    return (0, a.jsx)('div', {
        ref: m(i || (i = n.t(p, 2))),
        className: l()(h.trinkets, t)
    });
}
let b = (e) => {
    let { children: t, animationContainerClassName: n, glowClassName: r, trinketsClassName: i, onMount: s } = e;
    return (
        o.useEffect(() => {
            s();
        }, [s]),
        (0, a.jsxs)('div', {
            className: n,
            children: [
                (0, a.jsx)(g, { className: r }),
                (0, a.jsx)('div', { className: h.circleLayer }),
                (0, a.jsx)('div', {
                    className: h.entrypoint,
                    children: t
                }),
                (0, a.jsx)(E, { className: i })
            ]
        })
    );
};
