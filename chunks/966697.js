"use strict";
n.d(t, { y: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(289873);
n(323874), n(14289), n(35956);
var o = n(132500);
let d = new Worker(new URL("/assets/" + n.u("14250"), n.b));
var c = n(652215),
    u = n(503117);
function _(e) {
    let {
            readyState: t,
            aspectRatio: n,
            placeholder: a,
            placeholderVersion: _,
            placeholderStyle: E,
            children: A,
            disableSpinner: h = !1,
        } = e,
        I = t === c.Rv1.LOADING,
        [f] = r.useState(I),
        [p, T] = r.useState(!1),
        [m] = r.useState(() => Date.now()),
        g = (function (e, t, n) {
            let i = n && 1 === t && null != e,
                [a, s] = r.useState(void 0);
            return (
                r.useEffect(() => {
                    let t = !1;
                    return (
                        i &&
                            new Promise((t) => {
                                let n = (0, o.A)();
                                d.addEventListener("message", function e(i) {
                                    let {
                                        data: { id: r, png: a },
                                    } = i;
                                    n === r && (t(a), d.removeEventListener("message", e));
                                }),
                                    d.postMessage({ id: n, placeholderData: e });
                            }).then((e) => {
                                t || s(e);
                            }),
                        () => {
                            t = !0;
                        }
                    );
                }, [e, i]),
                a
            );
        })(a, _, f),
        S = t === c.Rv1.READY && Date.now() - m < 200;
    return (
        r.useEffect(() => {
            if (h) return;
            let e = setTimeout(() => {
                T(!0);
            }, 2e3);
            return () => {
                clearTimeout(e);
            };
        }, [h, f]),
        (0, i.jsxs)("div", {
            className: u.bX,
            style: { aspectRatio: n },
            children: [
                A,
                null != g &&
                    (0, i.jsx)("img", {
                        style: E,
                        className: s()(u.bc, { [u.t5]: I, [u.Jh]: !I, [u.zg]: S }),
                        src: g,
                        alt: "",
                    }),
                h || !I
                    ? null
                    : (0, i.jsx)("div", {
                          "aria-hidden": !p,
                          className: s()(u.oM, { [u.__]: p }),
                          children: (0, i.jsx)(l.y, { type: l.t.SPINNING_CIRCLE_SIMPLE, animated: p, className: u.Xd }),
                      }),
            ],
        })
    );
}
