"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n(607470),
    o = n(860923),
    l = n(933971);
let u = () => {
    let e = r.useRef(null),
        t = (0, o.A)(),
        [n, u] = r.useState(!1),
        [c, d] = r.useState([0, 0]),
        [_, f] = r.useState(0.5),
        [h, p] = r.useState(0),
        [E, m] = r.useState(!1);
    return (
        r.useEffect(() => {
            let t = null,
                i = e.current;
            if (null != i) {
                if (!1 === n) {
                    let e = 1e4 * Math.random() + 5e3;
                    t = window.setTimeout(() => {
                        u(!0),
                            d([(0, s.random)(128, 1792), (0, s.random)(64, 360)]),
                            f((0, s.random)(0.15, 0.5)),
                            p((0, s.random)(-15, 15)),
                            m(Math.random() > 0.5);
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
        (0, i.jsx)(a.A, {
            ref: e,
            className: l.d,
            style: { transform: `translate(${c[0]}px, ${c[1]}px) scale(${E ? -1 * _ : _}, ${_}) rotate(${h}deg)` },
            src: t?.misc["shooting-star"],
            loop: !1,
            onEnded: () => {
                u(!1);
            },
        })
    );
};
