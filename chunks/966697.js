i.d(t, { y: () => o });
var a = i(477900),
    l = i(582128),
    s = i(503698),
    n = i.n(s),
    d = i(289873);
i(323874), i(14289), i(35956);
var r = i(132500);
let c = new Worker(new URL("/assets/" + i.u("314250"), i.b));
var h = i(652215),
    u = i(397813);
function o(e) {
    let {
            readyState: t,
            aspectRatio: i,
            placeholder: s,
            placeholderVersion: o,
            placeholderStyle: m,
            children: x,
            disableSpinner: g = !1,
        } = e,
        f = t === h.Rv1.LOADING,
        [p] = l.useState(f),
        [v, b] = l.useState(!1),
        [y] = l.useState(() => Date.now()),
        R = (function (e, t, i) {
            let a = i && 1 === t && null != e,
                [s, n] = l.useState(void 0);
            return (
                l.useEffect(() => {
                    let t = !1;
                    return (
                        a &&
                            new Promise((t) => {
                                let i = (0, r.A)();
                                c.addEventListener("message", function e(a) {
                                    let {
                                        data: { id: l, png: s },
                                    } = a;
                                    i === l && (t(s), c.removeEventListener("message", e));
                                }),
                                    c.postMessage({ id: i, placeholderData: e });
                            }).then((e) => {
                                t || n(e);
                            }),
                        () => {
                            t = !0;
                        }
                    );
                }, [e, a]),
                s
            );
        })(s, o, p),
        N = t === h.Rv1.READY && Date.now() - y < 200;
    return (
        l.useEffect(() => {
            if (g) return;
            let e = setTimeout(() => {
                b(!0);
            }, 2e3);
            return () => {
                clearTimeout(e);
            };
        }, [g, p]),
        (0, a.jsxs)("div", {
            className: u.bX,
            style: { aspectRatio: i },
            children: [
                x,
                null != R &&
                    (0, a.jsx)("img", {
                        style: m,
                        className: n()(u.bc, { [u.t5]: f, [u.Jh]: !f, [u.zg]: N }),
                        src: R,
                        alt: "",
                    }),
                g || !f
                    ? null
                    : (0, a.jsx)("div", {
                          "aria-hidden": !v,
                          className: n()(u.oM, { [u.__]: v }),
                          children: (0, a.jsx)(d.y, { type: d.t.SPINNING_CIRCLE_SIMPLE, animated: v, className: u.Xd }),
                      }),
            ],
        })
    );
}
