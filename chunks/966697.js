"use strict";
n.d(t, { y: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(289873);
n(323874), n(14289), n(35956);
var l = n(835245);
let u = new Worker(new URL("/assets/" + n.u("14250"), n.b));
var c = n(652215),
    d = n(503117);
function _(e) {
    let {
            readyState: t,
            aspectRatio: n,
            placeholder: s,
            placeholderVersion: _,
            placeholderStyle: f,
            children: h,
            disableSpinner: p = !1,
        } = e,
        E = t === c.Rv1.LOADING,
        [m] = r.useState(E),
        [g, A] = r.useState(!1),
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
                                        n === r && (t(s), u.removeEventListener("message", i));
                                    };
                                u.addEventListener("message", i), u.postMessage({ id: n, placeholderData: e });
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
        })(s, _, m),
        S = t === c.Rv1.READY && Date.now() - I < 200;
    return (
        r.useEffect(() => {
            if (p) return;
            let e = setTimeout(() => {
                A(!0);
            }, 2e3);
            return () => {
                clearTimeout(e);
            };
        }, [p, m]),
        (0, i.jsxs)("div", {
            className: d.bX,
            style: { aspectRatio: n },
            children: [
                h,
                null != T &&
                    (0, i.jsx)("img", {
                        style: f,
                        className: a()(d.bc, { [d.t5]: E, [d.Jh]: !E, [d.zg]: S }),
                        src: T,
                        alt: "",
                    }),
                p
                    ? null
                    : (0, i.jsx)("div", {
                          "aria-hidden": !(E && g),
                          className: a()(d.oM, { [d.__]: E && g }),
                          children: (0, i.jsx)(o.y, {
                              type: o.t.SPINNING_CIRCLE_SIMPLE,
                              animated: E && g,
                              className: d.Xd,
                          }),
                      }),
            ],
        })
    );
}
