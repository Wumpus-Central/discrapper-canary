n.d(t, { Z: () => f }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(100527),
    s = n(873128),
    l = n(704041),
    c = n(986398),
    u = n(463031),
    d = n(132810);
function f(e) {
    let { guild: t, message: n } = e,
        f = i.useRef(null),
        [_, p] = i.useState(!1),
        h = i.useRef(!1),
        m = (0, s.Z)({
            guildId: t.id,
            leaderboardId: u.z,
            intervalOffset: 0,
        }),
        g = i.useMemo(() => {
            var e;
            if ((null == m || null == (e = m.guild_settings) ? void 0 : e.show_winner_crown) !== !0) return !1;
            let t = m.users[0];
            return n.author.id === (null == t ? void 0 : t.user_id);
        }, [m, n]);
    if (null == m || !g) return null;
    let E = () => {
            (h.current = !0), p(!0);
        },
        b = () => {
            (h.current = !1),
                setTimeout(() => {
                    h.current || p(!1);
                }, 100);
        };
    return (0, r.jsx)("div", {
        className: d.badge,
        onMouseEnter: E,
        onMouseLeave: b,
        children: (0, r.jsx)(o.yRy, {
            targetElementRef: f,
            animation: o.yRy.Animation.TRANSLATE,
            align: "center",
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "top",
            shouldShow: _,
            renderPopout: () =>
                (0, r.jsx)(l.Z, {
                    guildId: t.id,
                    previewMode: !0,
                    source: a.Z.MEMBER_LIST,
                    leaderboardId: m.leaderboard_id,
                }),
            children: () =>
                (0, r.jsx)(c.Z, {
                    leaderboard: m,
                    className: d.image,
                    ref: f,
                }),
        }),
    });
}
