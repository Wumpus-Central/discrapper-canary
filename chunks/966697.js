"use strict";
n.d(t, { y: () => c });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(289873);
n(323874), n(14289), n(35956);
var l = n(132500);
let d = new Worker(new URL("/assets/" + n.u("74589"), n.b));
var _ = n(652215),
    u = n(503117);
function c(e) {
    let {
            readyState: t,
            aspectRatio: n,
            placeholder: s,
            placeholderVersion: c,
            placeholderStyle: E,
            children: h,
            disableSpinner: m = !1,
        } = e,
        f = t === _.Rv1.LOADING,
        [g] = r.useState(f),
        [p, A] = r.useState(!1),
        [I] = r.useState(() => Date.now()),
        T = (function (e, t, n) {
            let i = n && 1 === t && null != e,
                [s, a] = r.useState(void 0);
            return (
                r.useEffect(() => {
                    let t = !1;
                    return (
                        i &&
                            new Promise((t) => {
                                let n = (0, l.A)(),
                                    i = (e) => {
                                        let {
                                            data: { id: r, png: s },
                                        } = e;
                                        n === r && (t(s), d.removeEventListener("message", i));
                                    };
                                d.addEventListener("message", i), d.postMessage({ id: n, placeholderData: e });
                            }).then((e) => {
                                t || a(e);
                            }),
                        () => {
                            t = !0;
                        }
                    );
                }, [e, i]),
                s
            );
        })(s, c, g),
        S = t === _.Rv1.READY && Date.now() - I < 200;
    return (
        r.useEffect(() => {
            if (m) return;
            let e = setTimeout(() => {
                A(!0);
            }, 2e3);
            return () => {
                clearTimeout(e);
            };
        }, [m, g]),
        (0, i.jsxs)("div", {
            className: u.bX,
            style: { aspectRatio: n },
            children: [
                h,
                null != T &&
                    (0, i.jsx)("img", {
                        style: E,
                        className: a()(u.bc, { [u.t5]: f, [u.Jh]: !f, [u.zg]: S }),
                        src: T,
                        alt: "",
                    }),
                m
                    ? null
                    : (0, i.jsx)("div", {
                          "aria-hidden": !(f && p),
                          className: a()(u.oM, { [u.__]: f && p }),
                          children: (0, i.jsx)(o.y, {
                              type: o.t.SPINNING_CIRCLE_SIMPLE,
                              animated: f && p,
                              className: u.Xd,
                          }),
                      }),
            ],
        })
    );
}
