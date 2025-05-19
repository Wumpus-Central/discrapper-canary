n.d(t, { b: () => C }), n(49124);
var r,
    i,
    l = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    c = n(500923),
    u = n.n(c),
    d = n(442837),
    p = n(607070),
    h = n(484334),
    f = n(158877),
    m = n(740680);
function g(e) {
    let t = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        n = a.useRef(null);
    return (
        a.useEffect(() => {
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
    let { children: t, animationContainerClassName: n, glowClassName: r, trinketsClassName: i, onMount: o } = e;
    return (
        a.useEffect(() => {
            o();
        }, [o]),
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
