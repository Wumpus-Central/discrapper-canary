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
        C = l.useRef(null),
        A = l.useCallback(() => {
            if (null == C.current) return;
            let e = C.current.getBoundingClientRect();
            (0, s.I_)(t, e);
        }, [t]);
    l.useLayoutEffect(() => {
        A();
    });
    let p = l.useMemo(
        () =>
            new ResizeObserver(() => {
                A();
            }),
        [A],
    );
    return (
        l.useLayoutEffect(() => {
            let e = C.current;
            if (null != e) return (p.observe(e), () => p.unobserve(e));
        }, [p]),
        l.useLayoutEffect(() => {
            function e() {
                return A();
            }
            function t() {
                return A();
            }
            return (
                g.addEventListener("scroll", e, !0),
                g.addEventListener("resize", t),
                () => {
                    (g.removeEventListener("scroll", e, !0), g.removeEventListener("resize", t));
                }
            );
        }, [A, g]),
        l.useLayoutEffect(
            () => (
                a._.subscribe(d.jej.MANUAL_IFRAME_RESIZING, A),
                () => {
                    a._.unsubscribe(d.jej.MANUAL_IFRAME_RESIZING, A);
                }
            ),
            [A],
        ),
        l.useLayoutEffect(
            () => () => {
                (0, s.I_)(t, null);
            },
            [t],
        ),
        (0, i.jsx)("div", { ref: C, className: n, style: c })
    );
}
