n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(70097),
    s = n(195045),
    l = n(604878);
let c = 10000,
    u = 5000,
    d = [128, 1792],
    f = [64, 360],
    p = [0.15, 0.5],
    _ = [-15, 15],
    m = () => {
        let e = i.useRef(null),
            t = (0, s.Z)(),
            [n, m] = i.useState(!1),
            [h, g] = i.useState([0, 0]),
            [E, b] = i.useState(0.5),
            [y, O] = i.useState(0),
            [v, S] = i.useState(!1);
        return (
            i.useEffect(() => {
                let t = null,
                    r = e.current;
                if (null != r) {
                    if (!1 === n) {
                        let e = Math.random() * c + u;
                        t = window.setTimeout(() => {
                            m(!0),
                                g([(0, a.random)(d[0], d[1]), (0, a.random)(f[0], f[1])]),
                                b((0, a.random)(p[0], p[1])),
                                O((0, a.random)(_[0], _[1])),
                                S(Math.random() > 0.5);
                        }, e);
                    }
                    return (
                        !0 === n && r.paused && ((r.currentTime = 0), r.play()),
                        () => {
                            window.clearTimeout(t);
                        }
                    );
                }
            }, [n]),
            (0, r.jsx)(o.Z, {
                ref: e,
                className: l.star,
                style: {
                    transform: "translate("
                        .concat(h[0], "px, ")
                        .concat(h[1], "px) scale(")
                        .concat(v ? -1 * E : E, ", ")
                        .concat(E, ") rotate(")
                        .concat(y, "deg)"),
                },
                src: null == t ? void 0 : t.misc["shooting-star"],
                loop: !1,
                onEnded: () => {
                    m(!1);
                },
            })
        );
    };
