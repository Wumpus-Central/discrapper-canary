"use strict";
n.d(t, { z: () => a });
var i = n(64700),
    r = n(17928),
    s = n(775602);
function a(e, t, n, a) {
    !(function (e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            o = arguments.length > 4 ? arguments[4] : void 0,
            l = (0, r.bG)([s.A], () => s.A.useReducedMotion),
            u = i.useRef(!1);
        i.useEffect(() => {
            if (!t || u.current) return;
            let n = { behavior: l ? "auto" : "smooth", block: a, inline: o },
                i = e();
            if (null != i && i.offsetHeight > 0) {
                (u.current = !0), i.scrollIntoView(n);
                return;
            }
            let r = !1,
                s = null,
                c = new ResizeObserver((e) => {
                    let t = e[0];
                    null == t ||
                        !(t.contentRect.height > 0) ||
                        u.current ||
                        r ||
                        ((u.current = !0), c.disconnect(), t.target.scrollIntoView(n));
                }),
                d = performance.now(),
                _ = () => {
                    if (r || performance.now() - d > 5e3) return;
                    let t = e();
                    null != t
                        ? t.offsetHeight > 0
                            ? ((u.current = !0), t.scrollIntoView(n))
                            : c.observe(t)
                        : (s = requestAnimationFrame(_));
                };
            return (
                _(),
                () => {
                    (r = !0), null != s && cancelAnimationFrame(s), c.disconnect();
                }
            );
        }, [t, l, a, o, ...n]),
            i.useEffect(() => {
                t || (u.current = !1);
            }, [t]);
    })(() => document.getElementById(e), t, [e], n, a);
}
