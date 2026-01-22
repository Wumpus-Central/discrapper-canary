n.d(t, {
    R: () => y,
}),
    n(457529);
var r,
    l,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    c = n(883885),
    u = n.n(c),
    d = n(311907),
    f = n(775602),
    p = n(455902),
    h = n(423993),
    b = n(851007);

function g(e) {
    let t = (0, d.bG)([f.A], () => f.A.useReducedMotion),
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

function m(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", {
        ref: g(r || (r = n.t(p, 2))),
        className: o()(b.ys, t),
    });
}

function A(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", {
        ref: g(l || (l = n.t(h, 2))),
        className: o()(b.R0, t),
    });
}
let y = (e) => {
    let { children: t, animationContainerClassName: n, glowClassName: r, trinketsClassName: l, onMount: s } = e;
    return (
        a.useEffect(() => {
            s();
        }, [s]),
        (0, i.jsxs)("div", {
            className: n,
            children: [
                (0, i.jsx)(m, {
                    className: r,
                }),
                (0, i.jsx)("div", {
                    className: b.cw,
                }),
                (0, i.jsx)("div", {
                    className: b.h$,
                    children: t,
                }),
                (0, i.jsx)(A, {
                    className: l,
                }),
            ],
        })
    );
};
