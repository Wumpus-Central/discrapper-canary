"use strict";
n.d(t, { N: () => f });
var i = n(627968),
    r = n(64700),
    s = n(873174),
    a = n(866323),
    o = n(857250),
    l = n(691540),
    u = n(97483),
    c = n(768218);
let d = { duration: 300, friction: 24, tension: 280 },
    _ = {
        [u.xJ.TOP]: {
            styles: c.N,
            transition: {
                trail: 400,
                from: { transform: "translate3d(0, -100%, 0)", opacity: 0, config: d },
                enter: { transform: "translate3d(0, -0px, 0)", opacity: 1, config: d },
                leave: { transform: "translate3d(0, -100%, 0)", opacity: 0, config: { ...d, friction: 40, clamp: !0 } },
            },
        },
        [u.xJ.BOTTOM]: {
            styles: c.H,
            transition: {
                trail: 400,
                from: { transform: "translate3d(0, 100%, 0)", opacity: 0, config: d },
                enter: { transform: "translate3d(0, 0px, 0)", opacity: 1, config: d },
                leave: { transform: "translate3d(0, 100%, 0)", opacity: 0, config: { ...d, friction: 40, clamp: !0 } },
            },
        },
    };
function f(e) {
    let { appContext: t } = e,
        n = (0, l.WE)((e) => e.currentToastMap.get(t)),
        c = r.useRef(n?.options?.position ?? u.jg.position),
        d = r.useRef(n?.options?.duration ?? u.jg.duration);
    r.useEffect(() => {
        null != n &&
            ((c.current = n.options?.position ?? u.jg.position), (d.current = n.options?.duration ?? u.jg.duration));
    }, [n]);
    let f = r.useMemo(() => _[n?.options?.position ?? c.current], [n]),
        h = (0, a.p)(n, { keys: (e) => e?.id ?? "", ...f.transition });
    return (
        r.useEffect(() => {
            null != n &&
                setTimeout(() => {
                    (0, l.VD)(t);
                }, d.current);
        }, [n, t]),
        (0, i.jsx)("div", {
            className: f.styles,
            children: h((e, t) =>
                null == t ? null : (0, i.jsx)(s.animated.div, { style: e, children: (0, i.jsx)(o.y, { ...t }) }, t.id),
            ),
        })
    );
}
