n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(73153),
    s = n(31728),
    o = n(203982),
    c = n(91242),
    u = n(165610),
    d = n(652215);
let p = (e, t) => {
    a.h.wait(() => {
        (0, s.I_)(e, t);
    });
};
function f(e) {
    let { embedId: t, className: n, style: a, currentWindow: s } = e,
        f = (0, l.bG)([c.A], () => c.A.getConnectedFrame()),
        h = (0, l.bG)([c.A], () => c.A.getFrameLayoutMode()),
        A = null != f && h === u.y.FOCUSED ? window : null != s ? s : window,
        g = i.useRef(null),
        m = i.useCallback(() => {
            null == g.current || p(t, g.current.getBoundingClientRect());
        }, [t]);
    i.useLayoutEffect(() => {
        m();
    });
    let b = i.useMemo(
        () =>
            new ResizeObserver(() => {
                m();
            }),
        [m],
    );
    return (
        i.useLayoutEffect(() => {
            let e = g.current;
            if (null != e) return b.observe(e), () => b.unobserve(e);
        }, [b]),
        i.useLayoutEffect(() => {
            let e = () => m(),
                t = () => m();
            return (
                A.addEventListener("scroll", e, !0),
                A.addEventListener("resize", t),
                () => {
                    A.removeEventListener("scroll", e, !0), A.removeEventListener("resize", t);
                }
            );
        }, [m, A]),
        i.useLayoutEffect(
            () => (
                o._.subscribe(d.jej.MANUAL_IFRAME_RESIZING, m),
                () => {
                    o._.unsubscribe(d.jej.MANUAL_IFRAME_RESIZING, m);
                }
            ),
            [m],
        ),
        i.useLayoutEffect(
            () => () => {
                p(t, null);
            },
            [t],
        ),
        (0, r.jsx)("div", {
            ref: g,
            className: n,
            style: a,
        })
    );
}
