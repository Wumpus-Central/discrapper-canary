var i = n(477900),
    r = n(582128),
    l = n(855986),
    s = n(31728),
    a = n(188567),
    o = n(91242),
    u = n(165610),
    d = n(652215);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { embedId: t, className: n, style: c, currentWindow: h } = e,
                f = (0, l.bG)([o.A], () => (0, u.ny)(o.A.getMainFrame())),
                g = null != f && f.data.layoutMode === u.y0.FOCUSED ? window : (h ?? window),
                A = r.useRef(null),
                p = r.useCallback(() => {
                    if (null == A.current) return;
                    let e = A.current.getBoundingClientRect();
                    (0, s.I_)(t, e);
                }, [t]);
            r.useLayoutEffect(() => {
                p();
            });
            let m = r.useMemo(
                () =>
                    new ResizeObserver(() => {
                        p();
                    }),
                [p],
            );
            return (
                r.useLayoutEffect(() => {
                    let e = A.current;
                    if (null != e) return (m.observe(e), () => m.unobserve(e));
                }, [m]),
                r.useLayoutEffect(() => {
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
                r.useLayoutEffect(
                    () => (
                        a._.subscribe(d.jej.MANUAL_IFRAME_RESIZING, p),
                        () => {
                            a._.unsubscribe(d.jej.MANUAL_IFRAME_RESIZING, p);
                        }
                    ),
                    [p],
                ),
                r.useLayoutEffect(
                    () => () => {
                        (0, s.I_)(t, null);
                    },
                    [t],
                ),
                (0, i.jsx)("div", { ref: A, className: n, style: c })
            );
        },
    },
);
