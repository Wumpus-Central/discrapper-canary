n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    a = n(417597),
    s = n(451988),
    o = n(397927),
    l = n(775602),
    c = n(21161),
    u = n(67414),
    d = n(147036),
    f = n(888675),
    p = n(652215),
    _ = n(731875);
let h = 6,
    m = 1000;
function g(e) {
    let { giftIntentType: t, recipientUser: n, channel: g } = e,
        E = (0, a.bG)([l.A], () => l.A.useReducedMotion),
        b = i.useRef(null),
        { createMultipleConfettiAt: y } = i.useContext(c.x),
        O = i.useCallback(
            (e) => ({
                size: {
                    type: "static-random",
                    minValue: e.confettiSize - h,
                    maxValue: e.confettiSize + h,
                },
                velocity: {
                    type: "static-random",
                    minValue: {
                        x: -180,
                        y: -180,
                    },
                    maxValue: {
                        x: 180,
                        y: 0,
                    },
                },
            }),
            [],
        );
    return (
        i.useEffect(() => {
            var e;
            if (E) return;
            let t = null == (e = b.current) ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = O({ confettiSize: 8 }),
                r = new s.J_(m, () => {
                    y(t.left + t.width / 2, t.top + t.height / 2, n, 60);
                });
            return (
                r.delay(),
                () => {
                    r.cancel();
                }
            );
        }, [y, b, E, O]),
        (0, r.jsx)(f.A, {
            contentClassName: _.o9,
            iconContainerClassName: _.zc,
            iconNode: (0, r.jsx)(o.XFE, { colorClass: _.Kk }),
            children: (0, r.jsx)(u.A, {
                innerRef: b,
                giftIntentType: t,
                recipientUser: n,
                analyticsPage: (0, d.DJ)(g),
                analyticsSection: p.JJy.CHANNEL,
            }),
        })
    );
}
