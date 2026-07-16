"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    a = n(435558),
    s = n(607470),
    l = n(860923),
    o = n(933971);
let d = function () {
    let e = r.useRef(null),
        t = (0, l.A)(),
        [n, d] = r.useState(!1),
        [c, u] = r.useState([0, 0]),
        [_, E] = r.useState(0.5),
        [A, h] = r.useState(0),
        [I, f] = r.useState(!1);
    return (
        r.useEffect(() => {
            let t = null,
                i = e.current;
            if (null != i) {
                if (!1 === n) {
                    let e = 1e4 * Math.random() + 5e3;
                    t = window.setTimeout(() => {
                        d(!0),
                            u([(0, a.random)(128, 1792), (0, a.random)(64, 360)]),
                            E((0, a.random)(0.15, 0.5)),
                            h((0, a.random)(-15, 15)),
                            f(Math.random() > 0.5);
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
        (0, i.jsx)(s.A, {
            ref: e,
            className: o.d,
            style: { transform: `translate(${c[0]}px, ${c[1]}px) scale(${I ? -1 * _ : _}, ${_}) rotate(${A}deg)` },
            src: t?.misc["shooting-star"],
            loop: !1,
            onEnded: () => {
                d(!1);
            },
        })
    );
};
