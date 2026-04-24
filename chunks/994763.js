n.d(t, { z: () => s });
var a = n(64700),
    i = n(17928),
    r = n(775602);
function s(e, t, n, s) {
    !(function (e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            l = arguments.length > 4 ? arguments[4] : void 0,
            c = (0, i.bG)([r.A], () => r.A.useReducedMotion),
            o = a.useRef(!1);
        a.useEffect(() => {
            if (!t || o.current) return;
            let n = { behavior: c ? "auto" : "smooth", block: s, inline: l },
                a = e();
            if (null != a && a.offsetHeight > 0) {
                (o.current = !0), a.scrollIntoView(n);
                return;
            }
            let i = !1,
                r = null,
                d = new ResizeObserver((e) => {
                    let t = e[0];
                    null == t ||
                        !(t.contentRect.height > 0) ||
                        o.current ||
                        i ||
                        ((o.current = !0), d.disconnect(), t.target.scrollIntoView(n));
                }),
                u = performance.now(),
                _ = () => {
                    if (i || performance.now() - u > 5e3) return;
                    let t = e();
                    null != t
                        ? t.offsetHeight > 0
                            ? ((o.current = !0), t.scrollIntoView(n))
                            : d.observe(t)
                        : (r = requestAnimationFrame(_));
                };
            return (
                _(),
                () => {
                    (i = !0), null != r && cancelAnimationFrame(r), d.disconnect();
                }
            );
        }, [t, c, s, l, ...n]),
            a.useEffect(() => {
                t || (o.current = !1);
            }, [t]);
    })(() => document.getElementById(e), t, [e], n, s);
}
