"use strict";
n.d(t, { N: () => E });
var i = n(627968),
    r = n(64700),
    a = n(580929),
    s = n(866323),
    l = n(857250),
    o = n(691540),
    d = n(97483),
    c = n(4506);
let u = { duration: 300, friction: 24, tension: 280 },
    _ = {
        [d.xJ.TOP]: {
            styles: c.N,
            transition: {
                trail: 400,
                from: { transform: "translate3d(0, -100%, 0)", opacity: 0, config: u },
                enter: { transform: "translate3d(0, -0px, 0)", opacity: 1, config: u },
                leave: { transform: "translate3d(0, -100%, 0)", opacity: 0, config: { ...u, friction: 40, clamp: !0 } },
            },
        },
        [d.xJ.BOTTOM]: {
            styles: c.H,
            transition: {
                trail: 400,
                from: { transform: "translate3d(0, 100%, 0)", opacity: 0, config: u },
                enter: { transform: "translate3d(0, 0px, 0)", opacity: 1, config: u },
                leave: { transform: "translate3d(0, 100%, 0)", opacity: 0, config: { ...u, friction: 40, clamp: !0 } },
            },
        },
    };
function E(e) {
    let { appContext: t } = e,
        n = (0, o.WE)((e) => e.currentToastMap.get(t)),
        c = r.useRef(n?.options?.position ?? d.jg.position),
        u = r.useRef(n?.options?.duration ?? d.jg.duration);
    r.useEffect(() => {
        null != n &&
            ((c.current = n.options?.position ?? d.jg.position), (u.current = n.options?.duration ?? d.jg.duration));
    }, [n]);
    let E = r.useMemo(() => _[n?.options?.position ?? c.current], [n]),
        A = (0, s.p)(n, { keys: (e) => e?.id ?? "", ...E.transition });
    return (
        r.useEffect(() => {
            null != n &&
                setTimeout(() => {
                    (0, o.VD)(t);
                }, u.current);
        }, [n, t]),
        (0, i.jsx)("div", {
            className: E.styles,
            children: A((e, t) =>
                null == t ? null : (0, i.jsx)(a.animated.div, { style: e, children: (0, i.jsx)(l.y, { ...t }) }, t.id),
            ),
        })
    );
}
