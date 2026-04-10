"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    s = n(417597),
    l = n(451988),
    a = n(397927),
    c = n(775602),
    o = n(21161),
    u = n(67414),
    d = n(147036),
    _ = n(888675),
    E = n(652215),
    A = n(868208);
function m(e) {
    let { giftIntentType: t, recipientUser: n, channel: m } = e,
        I = (0, s.bG)([c.A], () => c.A.useReducedMotion),
        T = r.useRef(null),
        { createMultipleConfettiAt: g } = r.useContext(o.x),
        N = r.useCallback(
            (e) => ({
                size: { type: "static-random", minValue: e.confettiSize - 6, maxValue: e.confettiSize + 6 },
                velocity: { type: "static-random", minValue: { x: -180, y: -180 }, maxValue: { x: 180, y: 0 } },
            }),
            [],
        );
    return (
        r.useEffect(() => {
            if (I) return;
            let e = T.current;
            if (null == e) return;
            let t = null,
                n = new IntersectionObserver(
                    (i) => {
                        let [r] = i;
                        r.intersectionRatio < 0.5 ||
                            (n.disconnect(),
                            (t = new l.J_(1e3, () => {
                                let t = e.getBoundingClientRect(),
                                    n = N({ confettiSize: 8 });
                                g(t.left + t.width / 2, t.top + t.height / 2, n, 60);
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
        }, [g, T, I, N]),
        (0, i.jsx)(_.A, {
            contentClassName: A.o9,
            iconContainerClassName: A.zc,
            iconNode: (0, i.jsx)(a.XFE, { colorClass: A.Kk }),
            children: (0, i.jsx)(u.A, {
                innerRef: T,
                giftIntentType: t,
                recipientUser: n,
                analyticsPage: (0, d.DJ)(m),
                analyticsSection: E.JJy.CHANNEL,
            }),
        })
    );
}
