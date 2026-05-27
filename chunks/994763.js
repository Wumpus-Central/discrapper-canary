n.d(t, { z: () => s });
var i = n(64700),
    l = n(17928),
    r = n(775602);
function s(e, t, n, s) {
    !(function (e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            a = arguments.length > 4 ? arguments[4] : void 0,
            c = (0, l.bG)([r.A], () => r.A.useReducedMotion),
            o = i.useRef(!1);
        i.useEffect(() => {
            if (!t || o.current) return;
            let n = { behavior: c ? "auto" : "smooth", block: s, inline: a },
                i = e();
            if (null != i && i.offsetHeight > 0) {
                (o.current = !0), i.scrollIntoView(n);
                return;
            }
            let l = !1,
                r = null,
                d = new ResizeObserver((e) => {
                    let t = e[0];
                    null == t ||
                        !(t.contentRect.height > 0) ||
                        o.current ||
                        l ||
                        ((o.current = !0), d.disconnect(), t.target.scrollIntoView(n));
                }),
                u = performance.now(),
                E = () => {
                    if (l || performance.now() - u > 5e3) return;
                    let t = e();
                    null != t
                        ? t.offsetHeight > 0
                            ? ((o.current = !0), t.scrollIntoView(n))
                            : d.observe(t)
                        : (r = requestAnimationFrame(E));
                };
            return (
                E(),
                () => {
                    (l = !0), null != r && cancelAnimationFrame(r), d.disconnect();
                }
            );
        }, [t, c, s, a, ...n]),
            i.useEffect(() => {
                t || (o.current = !1);
            }, [t]);
    })(() => document.getElementById(e), t, [e], n, s);
}
