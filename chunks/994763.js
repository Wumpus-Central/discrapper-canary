n.d(t, { z: () => r });
var i = n(64700),
    a = n(17928),
    s = n(775602);
function r(e, t, n, r) {
    !(function (e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            l = arguments.length > 4 ? arguments[4] : void 0,
            c = (0, a.bG)([s.Ay], () => s.Ay.useReducedMotion),
            o = i.useRef(!1);
        i.useEffect(() => {
            if (!t || o.current) return;
            let n = { behavior: c ? "auto" : "smooth", block: r, inline: l },
                i = e();
            if (null != i && i.offsetHeight > 0) {
                (o.current = !0), i.scrollIntoView(n);
                return;
            }
            let a = !1,
                s = null,
                d = new ResizeObserver((e) => {
                    let t = e[0];
                    null == t ||
                        !(t.contentRect.height > 0) ||
                        o.current ||
                        a ||
                        ((o.current = !0), d.disconnect(), t.target.scrollIntoView(n));
                }),
                u = performance.now(),
                m = () => {
                    if (a || performance.now() - u > 5e3) return;
                    let t = e();
                    null != t
                        ? t.offsetHeight > 0
                            ? ((o.current = !0), t.scrollIntoView(n))
                            : d.observe(t)
                        : (s = requestAnimationFrame(m));
                };
            return (
                m(),
                () => {
                    (a = !0), null != s && cancelAnimationFrame(s), d.disconnect();
                }
            );
        }, [t, c, r, l, ...n]),
            i.useEffect(() => {
                t || (o.current = !1);
            }, [t]);
    })(() => document.getElementById(e), t, [e], n, r);
}
