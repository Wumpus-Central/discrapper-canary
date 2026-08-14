a.d(t, { y: () => o });
var i = a(477900),
    s = a(582128),
    l = a(503698),
    n = a.n(l),
    r = a(289873);
a(323874), a(14289), a(35956);
var d = a(132500);
let c = new Worker(new URL("/assets/" + a.u("314250"), a.b));
var h = a(652215),
    u = a(397813);
function o(e) {
    let {
            readyState: t,
            aspectRatio: a,
            placeholder: l,
            placeholderVersion: o,
            placeholderStyle: m,
            children: x,
            disableSpinner: f = !1,
        } = e,
        g = t === h.Rv1.LOADING,
        [p] = s.useState(g),
        [v, R] = s.useState(!1),
        [b] = s.useState(() => Date.now()),
        N = (function (e, t, a) {
            let i = a && 1 === t && null != e,
                [l, n] = s.useState(void 0);
            return (
                s.useEffect(() => {
                    let t = !1;
                    return (
                        i &&
                            new Promise((t) => {
                                let a = (0, d.A)();
                                c.addEventListener("message", function e(i) {
                                    let {
                                        data: { id: s, png: l },
                                    } = i;
                                    a === s && (t(l), c.removeEventListener("message", e));
                                }),
                                    c.postMessage({ id: a, placeholderData: e });
                            }).then((e) => {
                                t || n(e);
                            }),
                        () => {
                            t = !0;
                        }
                    );
                }, [e, i]),
                l
            );
        })(l, o, p),
        w = t === h.Rv1.READY && Date.now() - b < 200;
    return (
        s.useEffect(() => {
            if (f) return;
            let e = setTimeout(() => {
                R(!0);
            }, 2e3);
            return () => {
                clearTimeout(e);
            };
        }, [f, p]),
        (0, i.jsxs)("div", {
            className: u.bX,
            style: { aspectRatio: a },
            children: [
                x,
                null != N &&
                    (0, i.jsx)("img", {
                        style: m,
                        className: n()(u.bc, { [u.t5]: g, [u.Jh]: !g, [u.zg]: w }),
                        src: N,
                        alt: "",
                    }),
                f || !g
                    ? null
                    : (0, i.jsx)("div", {
                          "aria-hidden": !v,
                          className: n()(u.oM, { [u.__]: v }),
                          children: (0, i.jsx)(r.y, { type: r.t.SPINNING_CIRCLE_SIMPLE, animated: v, className: u.Xd }),
                      }),
            ],
        })
    );
}
