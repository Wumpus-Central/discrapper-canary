n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(73153),
    s = n(31728),
    o = n(203982),
    d = n(91242),
    c = n(165610),
    u = n(652215);
let A = (e, t) => {
    l.h.wait(() => {
        (0, s.I_)(e, t);
    });
};
function h(e) {
    let { embedId: t, className: n, style: l, currentWindow: s } = e,
        h = (0, a.bG)([d.A], () => d.A.getConnectedFrame()),
        _ = (0, a.bG)([d.A], () => d.A.getFrameLayoutMode()),
        m = null != h && _ === c.y.FOCUSED ? window : (s ?? window),
        p = r.useRef(null),
        g = r.useCallback(() => {
            null == p.current || A(t, p.current.getBoundingClientRect());
        }, [t]);
    r.useLayoutEffect(() => {
        g();
    });
    let E = r.useMemo(
        () =>
            new ResizeObserver(() => {
                g();
            }),
        [g],
    );
    return (
        r.useLayoutEffect(() => {
            let e = p.current;
            if (null != e) return E.observe(e), () => E.unobserve(e);
        }, [E]),
        r.useLayoutEffect(() => {
            let e = () => g(),
                t = () => g();
            return (
                m.addEventListener("scroll", e, !0),
                m.addEventListener("resize", t),
                () => {
                    m.removeEventListener("scroll", e, !0), m.removeEventListener("resize", t);
                }
            );
        }, [g, m]),
        r.useLayoutEffect(
            () => (
                o._.subscribe(u.jej.MANUAL_IFRAME_RESIZING, g),
                () => {
                    o._.unsubscribe(u.jej.MANUAL_IFRAME_RESIZING, g);
                }
            ),
            [g],
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
