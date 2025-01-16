n.d(t, {
    b: function () {
        return v;
    }
});
var i,
    l,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(500923),
    d = n.n(c),
    u = n(442837),
    h = n(607070),
    p = n(484334),
    m = n(158877),
    f = n(406061);
function g(e) {
    let t = (0, u.e7)([h.Z], () => h.Z.useReducedMotion),
        n = a.useRef(null);
    return (
        a.useEffect(() => {
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
function C(e) {
    let { className: t } = e;
    return (0, r.jsx)('div', {
        ref: g(i || (i = n.t(p, 2))),
        className: o()(f.glow, t)
    });
}
function x(e) {
    let { className: t } = e;
    return (0, r.jsx)('div', {
        ref: g(l || (l = n.t(m, 2))),
        className: o()(f.trinkets, t)
    });
}
let v = (e) => {
    let { children: t, animationContainerClassName: n, glowClassName: i, trinketsClassName: l, onMount: s } = e;
    return (
        a.useEffect(() => {
            s();
        }, [s]),
        (0, r.jsxs)('div', {
            className: n,
            children: [
                (0, r.jsx)(C, { className: i }),
                (0, r.jsx)('div', { className: f.circleLayer }),
                (0, r.jsx)('div', {
                    className: f.entrypoint,
                    children: t
                }),
                (0, r.jsx)(x, { className: l })
            ]
        })
    );
};
