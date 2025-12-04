n.d(t, {
    Z: () => u,
    t: () => c,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(391876),
    l = n(831880);
let c = 400;
function u(e) {
    let { className: t, textClassName: n, text: a, variant: u, delay: d } = e,
        f = (0, i.useRef)(0),
        p = (0, i.useRef)(0),
        [_, m] = (0, i.useState)("");
    return (
        (0, i.useEffect)(() => {
            let e = () => {
                let t = Date.now() - f.current,
                    n = Math.max(Math.min(t / c, 1), 0);
                m(a.substring(0, Math.floor(n * a.length))), t < c && (p.current = window.requestAnimationFrame(e));
            };
            return (
                (f.current = Date.now() + (null != d ? d : 0)),
                (p.current = window.requestAnimationFrame(e)),
                () => cancelAnimationFrame(p.current)
            );
        }, [d, a]),
        (0, r.jsxs)("div", {
            className: o()(t, l.container),
            children: [
                (0, r.jsx)(s.Z, {
                    "aria-hidden": !0,
                    className: o()(l.hiddenText, n),
                    variant: u,
                    children: a,
                }),
                (0, r.jsx)(s.Z, {
                    className: o()(l.animatedText, n),
                    variant: u,
                    children: _,
                }),
            ],
        })
    );
}
