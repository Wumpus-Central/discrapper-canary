"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    r = n(218681),
    l = n(92674),
    a = n(397927);
let o = window.ResizeObserver ?? r.t;
function c(e) {
    let { show: t, children: n, top: r = 0, bottom: c = 0 } = e,
        { ref: d, height: u } = (() => {
            let e = s.useRef(null),
                [t, n] = s.useState(0),
                i = s.useMemo(
                    () =>
                        new o((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                s.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]),
                { ref: e, height: t }
            );
        })(),
        h = (0, a.zhh)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? u : 0, paddingBottom: t ? `${c}px` : "0px", marginTop: t ? `${r}px` : "0px" },
            config: { tension: 170, friction: 26 },
        }),
        _ = (0, a.zhh)({
            from: { opacity: 0 },
            to: { opacity: +!!t },
            config: { duration: 200, easing: t ? (e) => e ** 4 : (e) => e * (2 - e) },
        });
    return (0, i.jsx)(l.animated.div, {
        style: { overflow: "hidden", height: h.height, paddingBottom: h.paddingBottom, marginTop: h.marginTop },
        children: (0, i.jsx)(l.animated.div, { style: { opacity: _.opacity }, ref: d, children: n }),
    });
}
