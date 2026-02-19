n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    a = n(417597),
    r = n(451988),
    s = n(397927),
    o = n(775602),
    d = n(21161),
    c = n(67414),
    u = n(147036),
    m = n(888675),
    _ = n(652215),
    h = n(731875);
function p(e) {
    let { giftIntentType: t, recipientUser: n, channel: p } = e,
        g = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        A = l.useRef(null),
        { createMultipleConfettiAt: f } = l.useContext(d.x),
        x = l.useCallback(
            (e) => ({
                size: { type: "static-random", minValue: e.confettiSize - 6, maxValue: e.confettiSize + 6 },
                velocity: { type: "static-random", minValue: { x: -180, y: -180 }, maxValue: { x: 180, y: 0 } },
            }),
            [],
        );
    return (
        l.useEffect(() => {
            if (g) return;
            let e = A.current;
            if (null == e) return;
            let t = null,
                n = new IntersectionObserver(
                    (i) => {
                        let [l] = i;
                        l.intersectionRatio < 0.5 ||
                            (n.disconnect(),
                            (t = new r.J_(1e3, () => {
                                let t = e.getBoundingClientRect(),
                                    n = x({ confettiSize: 8 });
                                f(t.left + t.width / 2, t.top + t.height / 2, n, 60);
                            })).delay());
                    },
                    { threshold: 0.5 },
                );
            return (
                n.observe(e),
                () => {
                    n.disconnect(), t?.cancel();
                }
            );
        }, [f, A, g, x]),
        (0, i.jsx)(m.A, {
            contentClassName: h.o9,
            iconContainerClassName: h.zc,
            iconNode: (0, i.jsx)(s.XFE, { colorClass: h.Kk }),
            children: (0, i.jsx)(c.A, {
                innerRef: A,
                giftIntentType: t,
                recipientUser: n,
                analyticsPage: (0, u.DJ)(p),
                analyticsSection: _.JJy.CHANNEL,
            }),
        })
    );
}
