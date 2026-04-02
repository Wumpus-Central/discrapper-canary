n.d(t, { I: () => x });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(308528),
    r = n(171316),
    o = n(834981),
    d = n(558001);
n(866945);
var c = n(933297),
    u = n(779733),
    m = n(835002),
    g = n(985018),
    _ = n(870236);
function x() {
    let e = (0, r.uM)(),
        t = (0, o.vx)(),
        n = s.useCallback(() => {
            (0, u.default)(),
                a.A.openPrivateChannel({ recipientIds: t }),
                (0, d.N)(m.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, m.YX.LEARN_MORE);
        }, [t]),
        x = s.useCallback(() => {
            (0, d.N)(m.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, m.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (e)
            return {
                type: c.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: x,
                useText: () =>
                    g.intl.format(_.default.i284fU, {
                        hook: (e, t) => (0, i.jsx)(l.MzZ, { onClick: n, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [n, e, t.length, x]);
}
