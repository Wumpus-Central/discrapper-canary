n.d(t, {
    A: () => a,
    z: () => o,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    l = n(775602);

function s(e, t, n) {
    let s = (0, i.bG)([l.A], () => l.A.useReducedMotion),
        a = r.useRef(!1);
    r.useEffect(() => {
        if (!t || a.current) return;
        let n = e();
        if (null != n && n.offsetHeight > 0) {
            (a.current = !0),
                n.scrollIntoView({
                    behavior: s ? "auto" : "smooth",
                });
            return;
        }
        let r = !1,
            i = null,
            l = new ResizeObserver((e) => {
                let t = e[0];
                null == t ||
                    !(t.contentRect.height > 0) ||
                    a.current ||
                    r ||
                    ((a.current = !0),
                    l.disconnect(),
                    t.target.scrollIntoView({
                        behavior: s ? "auto" : "smooth",
                    }));
            }),
            o = () => {
                if (r) return;
                let t = e();
                null != t
                    ? t.offsetHeight > 0
                        ? ((a.current = !0),
                          t.scrollIntoView({
                              behavior: s ? "auto" : "smooth",
                          }))
                        : l.observe(t)
                    : (i = requestAnimationFrame(o));
            };
        return (
            o(),
            () => {
                (r = !0), null != i && cancelAnimationFrame(i), l.disconnect();
            }
        );
    }, [t, s, ...n]),
        r.useEffect(() => {
            t || (a.current = !1);
        }, [t]);
}

function a(e, t) {
    s(() => e.current, t, [e]);
}

function o(e, t) {
    s(() => document.getElementById(e), t, [e]);
}
