n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(73153),
    s = n(31728),
    o = n(203982),
    d = n(91242),
    u = n(165610),
    c = n(652215);
let A = (e, t) => {
    l.h.wait(() => {
        (0, s.I_)(e, t);
    });
};
function h(e) {
    let { embedId: t, className: n, style: l, currentWindow: s } = e,
        h = (0, a.bG)([d.A], () => d.A.getConnectedFrame()),
        _ = (0, a.bG)([d.A], () => d.A.getFrameLayoutMode()),
        E = null != h && _ === u.y.FOCUSED ? window : (s ?? window),
        p = r.useRef(null),
        m = r.useCallback(() => {
            null == p.current || A(t, p.current.getBoundingClientRect());
        }, [t]);
    r.useLayoutEffect(() => {
        m();
    });
    let g = r.useMemo(
        () =>
            new ResizeObserver(() => {
                m();
            }),
        [m],
    );
    return (
        r.useLayoutEffect(() => {
            let e = p.current;
            if (null != e) return g.observe(e), () => g.unobserve(e);
        }, [g]),
        r.useLayoutEffect(() => {
            let e = () => m(),
                t = () => m();
            return (
                E.addEventListener("scroll", e, !0),
                E.addEventListener("resize", t),
                () => {
                    E.removeEventListener("scroll", e, !0), E.removeEventListener("resize", t);
                }
            );
        }, [m, E]),
        r.useLayoutEffect(
            () => (
                o._.subscribe(c.jej.MANUAL_IFRAME_RESIZING, m),
                () => {
                    o._.unsubscribe(c.jej.MANUAL_IFRAME_RESIZING, m);
                }
            ),
            [m],
        ),
        r.useLayoutEffect(
            () => () => {
                A(t, null);
            },
            [t],
        ),
        (0, i.jsx)("div", { ref: p, className: n, style: l })
    );
}
