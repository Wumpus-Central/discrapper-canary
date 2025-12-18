n.d(t, { Z: () => c }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(392711),
    a = n(70097),
    o = n(195045),
    s = n(604878);
let c = () => {
    let e = r.useRef(null),
        t = (0, o.Z)(),
        [n, c] = r.useState(!1),
        [u, d] = r.useState([0, 0]),
        [p, f] = r.useState(0.5),
        [h, m] = r.useState(0),
        [g, b] = r.useState(!1);
    return (
        r.useEffect(() => {
            let t = null,
                i = e.current;
            if (null != i) {
                if (!1 === n) {
                    let e = 10000 * Math.random() + 5000;
                    t = window.setTimeout(() => {
                        c(!0),
                            d([(0, l.random)(128, 1792), (0, l.random)(64, 360)]),
                            f((0, l.random)(0.15, 0.5)),
                            m((0, l.random)(-15, 15)),
                            b(Math.random() > 0.5);
                    }, e);
                }
                return (
                    !0 === n && i.paused && ((i.currentTime = 0), i.play()),
                    () => {
                        window.clearTimeout(t);
                    }
                );
            }
        }, [n]),
        (0, i.jsx)(a.Z, {
            ref: e,
            className: s.star,
            style: {
                transform: "translate("
                    .concat(u[0], "px, ")
                    .concat(u[1], "px) scale(")
                    .concat(g ? -1 * p : p, ", ")
                    .concat(p, ") rotate(")
                    .concat(h, "deg)"),
            },
            src: null == t ? void 0 : t.misc["shooting-star"],
            loop: !1,
            onEnded: () => {
                c(!1);
            },
        })
    );
};
