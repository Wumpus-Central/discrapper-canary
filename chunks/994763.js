n.d(t, { z: () => l });
var i = n(64700),
    s = n(311907),
    a = n(775602);
function l(e, t) {
    var n;
    let l, r;
    (n = [e]),
        (l = (0, s.bG)([a.A], () => a.A.useReducedMotion)),
        (r = i.useRef(!1)),
        i.useEffect(() => {
            if (!t || r.current) return;
            let n = (() => document.getElementById(e))();
            if (null != n && n.offsetHeight > 0) {
                (r.current = !0), n.scrollIntoView({ behavior: l ? "auto" : "smooth" });
                return;
            }
            let i = !1,
                s = null,
                a = new ResizeObserver((e) => {
                    let t = e[0];
                    null == t ||
                        !(t.contentRect.height > 0) ||
                        r.current ||
                        i ||
                        ((r.current = !0),
                        a.disconnect(),
                        t.target.scrollIntoView({ behavior: l ? "auto" : "smooth" }));
                }),
                o = performance.now(),
                c = () => {
                    if (i || performance.now() - o > 5e3) return;
                    let t = (() => document.getElementById(e))();
                    null != t
                        ? t.offsetHeight > 0
                            ? ((r.current = !0), t.scrollIntoView({ behavior: l ? "auto" : "smooth" }))
                            : a.observe(t)
                        : (s = requestAnimationFrame(c));
                };
            return (
                c(),
                () => {
                    (i = !0), null != s && cancelAnimationFrame(s), a.disconnect();
                }
            );
        }, [t, l, ...n]),
        i.useEffect(() => {
            t || (r.current = !1);
        }, [t]);
}
