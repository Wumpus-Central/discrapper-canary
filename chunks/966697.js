a.d(t, { y: () => p });
var r = a(627968),
    n = a(64700),
    i = a(503698),
    l = a.n(i),
    o = a(289873);
a(323874), a(14289), a(35956);
var s = a(132500);
let d = new Worker(new URL("/assets/" + a.u("74589"), a.b));
var c = a(652215),
    u = a(503117);
function p(e) {
    let {
            readyState: t,
            aspectRatio: a,
            placeholder: i,
            placeholderVersion: p,
            placeholderStyle: m,
            children: h,
            disableSpinner: v = !1,
        } = e,
        g = t === c.Rv1.LOADING,
        [_] = n.useState(g),
        [f, x] = n.useState(!1),
        [b] = n.useState(() => Date.now()),
        E = (function (e, t, a) {
            let r = a && 1 === t && null != e,
                [i, l] = n.useState(void 0);
            return (
                n.useEffect(() => {
                    let t = !1;
                    return (
                        r &&
                            new Promise((t) => {
                                let a = (0, s.A)(),
                                    r = (e) => {
                                        let {
                                            data: { id: n, png: i },
                                        } = e;
                                        a === n && (t(i), d.removeEventListener("message", r));
                                    };
                                d.addEventListener("message", r), d.postMessage({ id: a, placeholderData: e });
                            }).then((e) => {
                                t || l(e);
                            }),
                        () => {
                            t = !0;
                        }
                    );
                }, [e, r]),
                i
            );
        })(i, p, _),
        T = t === c.Rv1.READY && Date.now() - b < 200;
    return (
        n.useEffect(() => {
            if (v) return;
            let e = setTimeout(() => {
                x(!0);
            }, 2e3);
            return () => {
                clearTimeout(e);
            };
        }, [v, _]),
        (0, r.jsxs)("div", {
            className: u.bX,
            style: { aspectRatio: a },
            children: [
                h,
                null != E &&
                    (0, r.jsx)("img", {
                        style: m,
                        className: l()(u.bc, { [u.t5]: g, [u.Jh]: !g, [u.zg]: T }),
                        src: E,
                        alt: "",
                    }),
                v
                    ? null
                    : (0, r.jsx)("div", {
                          "aria-hidden": !(g && f),
                          className: l()(u.oM, { [u.__]: g && f }),
                          children: (0, r.jsx)(o.y, {
                              type: o.t.SPINNING_CIRCLE_SIMPLE,
                              animated: g && f,
                              className: u.Xd,
                          }),
                      }),
            ],
        })
    );
}
