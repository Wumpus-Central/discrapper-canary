n.d(t, { A: () => c });
var i = n(477900),
    l = n(582128),
    r = n(17928),
    s = n(31728),
    a = n(625494),
    o = n(91242),
    u = n(165610),
    d = n(652215);
function c(e) {
    let { embedId: t, className: n, style: c, currentWindow: h } = e,
        f = (0, r.bG)([o.A], () => (0, u.ny)(o.A.getMainFrame())),
        g = null != f && f.data.layoutMode === u.y0.FOCUSED ? window : (h ?? window),
        A = l.useRef(null),
        p = l.useCallback(() => {
            if (null == A.current) return;
            let e = A.current.getBoundingClientRect();
            (0, s.I_)(t, e);
        }, [t]);
    l.useLayoutEffect(() => {
        p();
    });
    let m = l.useMemo(
        () =>
            new ResizeObserver(() => {
                p();
            }),
        [p],
    );
    return (
        l.useLayoutEffect(() => {
            let e = A.current;
            if (null != e) return (m.observe(e), () => m.unobserve(e));
        }, [m]),
        l.useLayoutEffect(() => {
            function e() {
                return p();
            }
            function t() {
                return p();
            }
            return (
                g.addEventListener("scroll", e, !0),
                g.addEventListener("resize", t),
                () => {
                    (g.removeEventListener("scroll", e, !0), g.removeEventListener("resize", t));
                }
            );
        }, [p, g]),
        l.useLayoutEffect(
            () => (
                a._.subscribe(d.jej.MANUAL_IFRAME_RESIZING, p),
                () => {
                    a._.unsubscribe(d.jej.MANUAL_IFRAME_RESIZING, p);
                }
            ),
            [p],
        ),
        l.useLayoutEffect(
            () => () => {
                (0, s.I_)(t, null);
            },
            [t],
        ),
        (0, i.jsx)("div", { ref: A, className: n, style: c })
    );
}
