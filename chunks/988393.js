"use strict";
n.d(t, { N: () => f });
var r = n(627968),
    i = n(64700),
    s = n(880013),
    a = n(397927),
    o = n(857250),
    l = n(691540),
    u = n(97483),
    c = n(156039);
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
        c = i.useRef(n?.options?.position ?? u.jg.position),
        d = i.useRef(n?.options?.duration ?? u.jg.duration);
    i.useEffect(() => {
        null != n &&
            ((c.current = n.options?.position ?? u.jg.position), (d.current = n.options?.duration ?? u.jg.duration));
    }, [n]);
    let f = i.useMemo(() => _[n?.options?.position ?? c.current], [n]),
        p = (0, a.pnh)(n, { keys: (e) => e?.id ?? "", ...f.transition });
    return (
        i.useEffect(() => {
            null != n &&
                setTimeout(() => {
                    (0, l.VD)(t);
                }, d.current);
        }, [n, t]),
        (0, r.jsx)("div", {
            className: f.styles,
            children: p((e, t) =>
                null == t ? null : (0, r.jsx)(s.animated.div, { style: e, children: (0, r.jsx)(o.y, { ...t }) }, t.id),
            ),
        })
    );
}
