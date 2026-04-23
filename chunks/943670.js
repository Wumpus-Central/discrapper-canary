n.d(t, { I: () => A });
var i = n(627968),
    s = n(64700),
    l = n(349288),
    a = n(308528),
    r = n(171316),
    o = n(834981),
    d = n(558001);
n(866945);
var u = n(933297),
    c = n(779733),
    g = n(835002),
    m = n(985018),
    _ = n(602339);
function A() {
    let e = (0, r.uM)(),
        t = (0, o.vx)(),
        n = s.useCallback(() => {
            (0, c.default)(),
                a.A.openPrivateChannel({ recipientIds: t }),
                (0, d.N)(g.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, g.YX.LEARN_MORE);
        }, [t]),
        A = s.useCallback(() => {
            (0, d.N)(g.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, g.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (e)
            return {
                type: u.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: A,
                useText: () =>
                    m.intl.format(_.default.i284fU, {
                        hook: (e, t) => (0, i.jsx)(l.Anchor, { onClick: n, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [n, e, t.length, A]);
}
