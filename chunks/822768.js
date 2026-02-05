"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(607470),
    o = n(860923),
    l = n(126418);
let u = 1e4,
    c = 5e3,
    d = [128, 1792],
    _ = [64, 360],
    f = [0.15, 0.5],
    p = [-15, 15],
    h = () => {
        let e = i.useRef(null),
            t = (0, o.A)(),
            [n, h] = i.useState(!1),
            [m, g] = i.useState([0, 0]),
            [E, A] = i.useState(0.5),
            [I, T] = i.useState(0),
            [y, S] = i.useState(!1);
        return (
            i.useEffect(() => {
                let t = null,
                    r = e.current;
                if (null != r) {
                    if (!1 === n) {
                        let e = Math.random() * u + c;
                        t = window.setTimeout(() => {
                            h(!0),
                                g([(0, a.random)(d[0], d[1]), (0, a.random)(_[0], _[1])]),
                                A((0, a.random)(f[0], f[1])),
                                T((0, a.random)(p[0], p[1])),
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
            (0, r.jsx)(s.A, {
                ref: e,
                className: l.d,
                style: { transform: `translate(${m[0]}px, ${m[1]}px) scale(${y ? -1 * E : E}, ${E}) rotate(${I}deg)` },
                src: t?.misc["shooting-star"],
                loop: !1,
                onEnded: () => {
                    h(!1);
                },
            })
        );
    };
