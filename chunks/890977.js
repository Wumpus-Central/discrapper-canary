n.d(t, { b: () => x });
var i,
    l,
    a = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(500923),
    d = n.n(c),
    u = n(442837),
    h = n(607070),
    p = n(484334),
    m = n(158877),
    f = n(289967);
function g(e) {
    let t = (0, u.e7)([h.Z], () => h.Z.useReducedMotion),
        n = r.useRef(null);
    return (
        r.useEffect(() => {
            let i;
            return (
                null != n.current &&
                    (i = d().loadAnimation({
                        container: n.current,
                        renderer: 'svg',
                        loop: !0,
                        autoplay: !t,
                        animationData: JSON.parse(JSON.stringify(e))
                    })),
                () => {
                    null == i || i.destroy();
                }
            );
        }, [n, t, e]),
        n
    );
}
function _(e) {
    let { className: t } = e;
    return (0, a.jsx)('div', {
        ref: g(i || (i = n.t(p, 2))),
        className: o()(f.glow, t)
    });
}
function C(e) {
    let { className: t } = e;
    return (0, a.jsx)('div', {
        ref: g(l || (l = n.t(m, 2))),
        className: o()(f.trinkets, t)
    });
}
let x = (e) => {
    let { children: t, animationContainerClassName: n, glowClassName: i, trinketsClassName: l, onMount: s } = e;
    return (
        r.useEffect(() => {
            s();
        }, [s]),
        (0, a.jsxs)('div', {
            className: n,
            children: [
                (0, a.jsx)(_, { className: i }),
                (0, a.jsx)('div', { className: f.circleLayer }),
                (0, a.jsx)('div', {
                    className: f.entrypoint,
                    children: t
                }),
                (0, a.jsx)(C, { className: l })
            ]
        })
    );
};
