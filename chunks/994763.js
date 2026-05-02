i.d(t, { z: () => r });
var s = i(64700),
    a = i(17928),
    n = i(775602);
function r(e, t, i, r) {
    !(function (e, t, i) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            l = arguments.length > 4 ? arguments[4] : void 0,
            c = (0, a.bG)([n.A], () => n.A.useReducedMotion),
            d = s.useRef(!1);
        s.useEffect(() => {
            if (!t || d.current) return;
            let i = { behavior: c ? "auto" : "smooth", block: r, inline: l },
                s = e();
            if (null != s && s.offsetHeight > 0) {
                (d.current = !0), s.scrollIntoView(i);
                return;
            }
            let a = !1,
                n = null,
                o = new ResizeObserver((e) => {
                    let t = e[0];
                    null == t ||
                        !(t.contentRect.height > 0) ||
                        d.current ||
                        a ||
                        ((d.current = !0), o.disconnect(), t.target.scrollIntoView(i));
                }),
                u = performance.now(),
                m = () => {
                    if (a || performance.now() - u > 5e3) return;
                    let t = e();
                    null != t
                        ? t.offsetHeight > 0
                            ? ((d.current = !0), t.scrollIntoView(i))
                            : o.observe(t)
                        : (n = requestAnimationFrame(m));
                };
            return (
                m(),
                () => {
                    (a = !0), null != n && cancelAnimationFrame(n), o.disconnect();
                }
            );
        }, [t, c, r, l, ...i]),
            s.useEffect(() => {
                t || (d.current = !1);
            }, [t]);
    })(() => document.getElementById(e), t, [e], i, r);
}
