n.d(t, { A: () => u }), n(896048);
var r,
    i = n(627968),
    s = n(64700),
    l = n(218681),
    a = n(432022),
    o = n(397927);
let c = null != (r = window.ResizeObserver) ? r : l.t;
function u(e) {
    let { show: t, children: n, top: r = 0, bottom: l = 0 } = e,
        { ref: u, height: d } = (() => {
            let e = s.useRef(null),
                [t, n] = s.useState(0),
                r = s.useMemo(
                    () =>
                        new c((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                s.useLayoutEffect(() => (null != e.current && r.observe(e.current), () => r.disconnect()), [r]),
                {
                    ref: e,
                    height: t,
                }
            );
        })(),
        h = (0, o.zhh)({
            from: {
                height: 0,
                paddingBottom: "0px",
                marginTop: "0px",
            },
            to: {
                height: t ? d : 0,
                paddingBottom: t ? "".concat(l, "px") : "0px",
                marginTop: t ? "".concat(r, "px") : "0px",
            },
            config: {
                tension: 170,
                friction: 26,
            },
        }),
        f = (0, o.zhh)({
            from: { opacity: 0 },
            to: { opacity: +!!t },
            config: {
                duration: 200,
                easing: t ? (e) => e ** 4 : (e) => e * (2 - e),
            },
        });
    return (0, i.jsx)(a.animated.div, {
        style: {
            overflow: "hidden",
            height: h.height,
            paddingBottom: h.paddingBottom,
            marginTop: h.marginTop,
        },
        children: (0, i.jsx)(a.animated.div, {
            style: { opacity: f.opacity },
            ref: u,
            children: n,
        }),
    });
}
