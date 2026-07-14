n.d(t, { N: () => f });
var r = n(627968),
    i = n(64700),
    s = n(580929),
    o = n(866323),
    l = n(857250),
    a = n(691540),
    c = n(97483),
    u = n(4506);
let d = { duration: 300, friction: 24, tension: 280 },
    h = {
        [c.xJ.TOP]: {
            styles: u.N,
            transition: {
                trail: 400,
                from: { transform: "translate3d(0, -100%, 0)", opacity: 0, config: d },
                enter: { transform: "translate3d(0, -0px, 0)", opacity: 1, config: d },
                leave: { transform: "translate3d(0, -100%, 0)", opacity: 0, config: { ...d, friction: 40, clamp: !0 } },
            },
        },
        [c.xJ.BOTTOM]: {
            styles: u.H,
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
        n = (0, a.WE)((e) => e.currentToastMap.get(t)),
        u = i.useRef(n?.options?.position ?? c.jg.position),
        d = i.useRef(n?.options?.duration ?? c.jg.duration);
    i.useEffect(() => {
        null != n &&
            ((u.current = n.options?.position ?? c.jg.position), (d.current = n.options?.duration ?? c.jg.duration));
    }, [n]);
    let f = i.useMemo(() => h[n?.options?.position ?? u.current], [n]),
        p = (0, o.p)(n, { keys: (e) => e?.id ?? "", ...f.transition });
    return (
        i.useEffect(() => {
            null != n &&
                setTimeout(() => {
                    (0, a.VD)(t);
                }, d.current);
        }, [n, t]),
        (0, r.jsx)("div", {
            className: f.styles,
            children: p((e, t) =>
                null == t ? null : (0, r.jsx)(s.animated.div, { style: e, children: (0, r.jsx)(l.y, { ...t }) }, t.id),
            ),
        })
    );
}
