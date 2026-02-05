n.d(t, { A: () => l, z: () => o });
var i = n(64700),
    s = n(311907),
    r = n(775602);
function a(e, t, n) {
    let a = (0, s.bG)([r.A], () => r.A.useReducedMotion),
        l = i.useRef(!1);
    i.useEffect(() => {
        if (!t || l.current) return;
        let n = e();
        if (null != n && n.offsetHeight > 0) {
            (l.current = !0), n.scrollIntoView({ behavior: a ? "auto" : "smooth" });
            return;
        }
        let i = !1,
            s = null,
            r = new ResizeObserver((e) => {
                let t = e[0];
                null == t ||
                    !(t.contentRect.height > 0) ||
                    l.current ||
                    i ||
                    ((l.current = !0), r.disconnect(), t.target.scrollIntoView({ behavior: a ? "auto" : "smooth" }));
            }),
            o = () => {
                if (i) return;
                let t = e();
                null != t
                    ? t.offsetHeight > 0
                        ? ((l.current = !0), t.scrollIntoView({ behavior: a ? "auto" : "smooth" }))
                        : r.observe(t)
                    : (s = requestAnimationFrame(o));
            };
        return (
            o(),
            () => {
                (i = !0), null != s && cancelAnimationFrame(s), r.disconnect();
            }
        );
    }, [t, a, ...n]),
        i.useEffect(() => {
            t || (l.current = !1);
        }, [t]);
}
function l(e, t) {
    a(() => e.current, t, [e]);
}
function o(e, t) {
    a(() => document.getElementById(e), t, [e]);
}
