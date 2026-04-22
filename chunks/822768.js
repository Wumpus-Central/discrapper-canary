"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n(607470),
    o = n(860923),
    l = n(933971);
let u = () => {
    let e = i.useRef(null),
        t = (0, o.A)(),
        [n, u] = i.useState(!1),
        [d, c] = i.useState([0, 0]),
        [_, f] = i.useState(0.5),
        [E, h] = i.useState(0),
        [p, m] = i.useState(!1);
    return (
        i.useEffect(() => {
            let t = null,
                r = e.current;
            if (null != r) {
                if (!1 === n) {
                    let e = 1e4 * Math.random() + 5e3;
                    t = window.setTimeout(() => {
                        u(!0),
                            c([(0, s.random)(128, 1792), (0, s.random)(64, 360)]),
                            f((0, s.random)(0.15, 0.5)),
                            h((0, s.random)(-15, 15)),
                            m(Math.random() > 0.5);
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
        (0, r.jsx)(a.A, {
            ref: e,
            className: l.d,
            style: { transform: `translate(${d[0]}px, ${d[1]}px) scale(${p ? -1 * _ : _}, ${_}) rotate(${E}deg)` },
            src: t?.misc["shooting-star"],
            loop: !1,
            onEnded: () => {
                u(!1);
            },
        })
    );
};
