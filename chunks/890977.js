n.d(t, { b: () => C }), n(26686);
var r,
    i,
    l = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    c = n(500923),
    u = n.n(c),
    d = n(442837),
    p = n(607070),
    h = n(484334),
    f = n(158877),
    m = n(449696);
function g(e) {
    let t = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
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
function b(e) {
    let { className: t } = e;
    return (0, l.jsx)('div', {
        ref: g(r || (r = n.t(h, 2))),
        className: s()(m.glow, t)
    });
}
function _(e) {
    let { className: t } = e;
    return (0, l.jsx)('div', {
        ref: g(i || (i = n.t(f, 2))),
        className: s()(m.trinkets, t)
    });
}
let C = (e) => {
    let { children: t, animationContainerClassName: n, glowClassName: r, trinketsClassName: i, onMount: a } = e;
    return (
        o.useEffect(() => {
            a();
        }, [a]),
        (0, l.jsxs)('div', {
            className: n,
            children: [
                (0, l.jsx)(b, { className: r }),
                (0, l.jsx)('div', { className: m.circleLayer }),
                (0, l.jsx)('div', {
                    className: m.entrypoint,
                    children: t
                }),
                (0, l.jsx)(_, { className: i })
            ]
        })
    );
};
