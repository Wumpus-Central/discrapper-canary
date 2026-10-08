i.d(t, { y: () => o });
var a = i(477900),
    s = i(582128),
    l = i(503698),
    n = i.n(l),
    r = i(289873);
(i(323874), i(14289), i(35956));
var d = i(132500);
let c = new Worker(new URL("/assets/" + i.u("314250"), i.b));
var h = i(652215),
    u = i(774702);
function o(e) {
    let {
            readyState: t,
            aspectRatio: i,
            placeholder: l,
            placeholderVersion: o,
            placeholderStyle: m,
            children: x,
            disableSpinner: g = !1,
        } = e,
        f = t === h.Rv1.LOADING,
        [p] = s.useState(f),
        [v, b] = s.useState(!1),
        [N] = s.useState(() => Date.now()),
        R = (function (e, t, i) {
            let a = i && 1 === t && null != e,
                [l, n] = s.useState(void 0);
            return (
                s.useEffect(() => {
                    let t = !1;
                    return (
                        a &&
                            new Promise((t) => {
                                let i = (0, d.A)();
                                (c.addEventListener("message", function e(a) {
                                    let {
                                        data: { id: s, png: l },
                                    } = a;
                                    i === s && (t(l), c.removeEventListener("message", e));
                                }),
                                    c.postMessage({ id: i, placeholderData: e }));
                            }).then((e) => {
                                t || n(e);
                            }),
                        () => {
                            t = !0;
                        }
                    );
                }, [e, a]),
                l
            );
        })(l, o, p),
        y = t === h.Rv1.READY && Date.now() - N < 200;
    return (
        s.useEffect(() => {
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
                        className: n()(u.bc, { [u.t5]: f, [u.Jh]: !f, [u.zg]: y }),
                        src: R,
                        alt: "",
                    }),
                g || !f
                    ? null
                    : (0, a.jsx)("div", {
                          "aria-hidden": !v,
                          className: n()(u.oM, { [u.__]: v }),
                          children: (0, a.jsx)(r.y, { type: r.t.SPINNING_CIRCLE_SIMPLE, animated: v, className: u.Xd }),
                      }),
            ],
        })
    );
}
