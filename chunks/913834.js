n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(100527),
    o = n(873128),
    l = n(704041),
    u = n(986398),
    c = n(463031),
    d = n(414993);
function f(e) {
    let { guild: t, message: n } = e,
        [f, _] = r.useState(!1),
        p = r.useRef(!1),
        h = (0, o.Z)({
            guildId: t.id,
            leaderboardId: c.z,
            intervalOffset: 0
        }),
        m = r.useMemo(() => {
            var e;
            if ((null == h ? void 0 : null === (e = h.guild_settings) || void 0 === e ? void 0 : e.show_winner_crown) !== !0) return !1;
            let t = h.users[0];
            return n.author.id === (null == t ? void 0 : t.user_id);
        }, [h, n]);
    if (null == h || !m) return null;
    let g = () => {
            (p.current = !0), _(!0);
        },
        E = () => {
            (p.current = !1),
                setTimeout(() => {
                    p.current || _(!1);
                }, 100);
        };
    return (0, i.jsx)('div', {
        className: d.badge,
        onMouseEnter: g,
        onMouseLeave: E,
        children: (0, i.jsx)(a.yRy, {
            animation: a.yRy.Animation.TRANSLATE,
            align: 'center',
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: 'top',
            shouldShow: f,
            renderPopout: () =>
                (0, i.jsx)(l.Z, {
                    guildId: t.id,
                    previewMode: !0,
                    source: s.Z.MEMBER_LIST,
                    leaderboardId: h.leaderboard_id
                }),
            children: () =>
                (0, i.jsx)(u.Z, {
                    leaderboard: h,
                    className: d.image
                })
        })
    });
}
