n.d(t, { z: () => l });
var i = n(64700),
    s = n(311907),
    a = n(775602);
function l(e, t, n) {
    !(function (e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            r = (0, s.bG)([a.A], () => a.A.useReducedMotion),
            o = i.useRef(!1);
        i.useEffect(() => {
            if (!t || o.current) return;
            let n = { behavior: r ? "auto" : "smooth", block: l },
                i = e();
            if (null != i && i.offsetHeight > 0) {
                (o.current = !0), i.scrollIntoView(n);
                return;
            }
            let s = !1,
                a = null,
                c = new ResizeObserver((e) => {
                    let t = e[0];
                    null == t ||
                        !(t.contentRect.height > 0) ||
                        o.current ||
                        s ||
                        ((o.current = !0), c.disconnect(), t.target.scrollIntoView(n));
                }),
                d = performance.now(),
                u = () => {
                    if (s || performance.now() - d > 5e3) return;
                    let t = e();
                    null != t
                        ? t.offsetHeight > 0
                            ? ((o.current = !0), t.scrollIntoView(n))
                            : c.observe(t)
                        : (a = requestAnimationFrame(u));
                };
            return (
                u(),
                () => {
                    (s = !0), null != a && cancelAnimationFrame(a), c.disconnect();
                }
            );
        }, [t, r, l, ...n]),
            i.useEffect(() => {
                t || (o.current = !1);
            }, [t]);
    })(() => document.getElementById(e), t, [e], n);
}
