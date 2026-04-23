n.d(t, { z: () => s });
var r = n(64700),
    a = n(311907),
    i = n(775602);
function s(e, t, n, s) {
    !(function (e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            l = arguments.length > 4 ? arguments[4] : void 0,
            c = (0, a.bG)([i.A], () => i.A.useReducedMotion),
            o = r.useRef(!1);
        r.useEffect(() => {
            if (!t || o.current) return;
            let n = { behavior: c ? "auto" : "smooth", block: s, inline: l },
                r = e();
            if (null != r && r.offsetHeight > 0) {
                (o.current = !0), r.scrollIntoView(n);
                return;
            }
            let a = !1,
                i = null,
                d = new ResizeObserver((e) => {
                    let t = e[0];
                    null == t ||
                        !(t.contentRect.height > 0) ||
                        o.current ||
                        a ||
                        ((o.current = !0), d.disconnect(), t.target.scrollIntoView(n));
                }),
                u = performance.now(),
                _ = () => {
                    if (a || performance.now() - u > 5e3) return;
                    let t = e();
                    null != t
                        ? t.offsetHeight > 0
                            ? ((o.current = !0), t.scrollIntoView(n))
                            : d.observe(t)
                        : (i = requestAnimationFrame(_));
                };
            return (
                _(),
                () => {
                    (a = !0), null != i && cancelAnimationFrame(i), d.disconnect();
                }
            );
        }, [t, c, s, l, ...n]),
            r.useEffect(() => {
                t || (o.current = !1);
            }, [t]);
    })(() => document.getElementById(e), t, [e], n, s);
}
