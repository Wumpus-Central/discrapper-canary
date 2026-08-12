n.d(t, { N: () => f });
var r = n(477900),
    i = n(582128),
    s = n(682577),
    o = n(866323),
    l = n(857250),
    a = n(691540),
    c = n(97483),
    d = n(598642);
let u = { duration: 300, friction: 24, tension: 280 },
    h = {
        [c.xJ.TOP]: {
            styles: d.N,
            transition: {
                trail: 400,
                from: { transform: "translate3d(0, -100%, 0)", opacity: 0, config: u },
                enter: { transform: "translate3d(0, -0px, 0)", opacity: 1, config: u },
                leave: { transform: "translate3d(0, -100%, 0)", opacity: 0, config: { ...u, friction: 40, clamp: !0 } },
            },
        },
        [c.xJ.BOTTOM]: {
            styles: d.H,
            transition: {
                trail: 400,
                from: { transform: "translate3d(0, 100%, 0)", opacity: 0, config: u },
                enter: { transform: "translate3d(0, 0px, 0)", opacity: 1, config: u },
                leave: { transform: "translate3d(0, 100%, 0)", opacity: 0, config: { ...u, friction: 40, clamp: !0 } },
            },
        },
    };
function f(e) {
    let { appContext: t } = e,
        n = (0, a.WE)((e) => e.currentToastMap.get(t)),
        d = i.useRef(n?.options?.position ?? c.jg.position),
        u = i.useRef(n?.options?.duration ?? c.jg.duration);
    i.useEffect(() => {
        null != n &&
            ((d.current = n.options?.position ?? c.jg.position), (u.current = n.options?.duration ?? c.jg.duration));
    }, [n]);
    let f = i.useMemo(() => h[n?.options?.position ?? d.current], [n]),
        g = (0, o.p)(n, { keys: (e) => e?.id ?? "", ...f.transition });
    return (
        i.useEffect(() => {
            null != n &&
                setTimeout(() => {
                    (0, a.VD)(t);
                }, u.current);
        }, [n, t]),
        (0, r.jsx)("div", {
            className: f.styles,
            children: g((e, t) =>
                null == t ? null : (0, r.jsx)(s.animated.div, { style: e, children: (0, r.jsx)(l.y, { ...t }) }, t.id),
            ),
        })
    );
}
