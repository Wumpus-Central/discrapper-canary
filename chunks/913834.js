r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(481060),
    l = r(100527),
    u = r(873128),
    c = r(704041),
    d = r(986398),
    f = r(463031),
    _ = r(414993);
function h(e) {
    let { guild: n, message: r } = e,
        [i, h] = s.useState(!1),
        p = s.useRef(!1),
        m = (0, u.Z)({
            guildId: n.id,
            leaderboardId: f.z,
            intervalOffset: 0
        }),
        g = s.useMemo(() => {
            var e;
            if ((null == m ? void 0 : null === (e = m.guild_settings) || void 0 === e ? void 0 : e.show_winner_crown) !== !0) return !1;
            let n = m.users[0];
            return r.author.id === (null == n ? void 0 : n.user_id);
        }, [m, r]);
    if (null == m || !g) return null;
    let E = () => {
            (p.current = !0), h(!0);
        },
        v = () => {
            (p.current = !1),
                setTimeout(() => {
                    !p.current && h(!1);
                }, 100);
        };
    return (0, a.jsx)('div', {
        className: _.badge,
        onMouseEnter: E,
        onMouseLeave: v,
        children: (0, a.jsx)(o.Popout, {
            animation: o.Popout.Animation.TRANSLATE,
            align: 'center',
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: 'top',
            shouldShow: i,
            renderPopout: () =>
                (0, a.jsx)(c.Z, {
                    guildId: n.id,
                    previewMode: !0,
                    source: l.Z.MEMBER_LIST,
                    leaderboardId: m.leaderboard_id
                }),
            children: () =>
                (0, a.jsx)(d.Z, {
                    leaderboard: m,
                    className: _.image
                })
        })
    });
}
