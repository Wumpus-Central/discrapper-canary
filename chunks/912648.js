n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(680018),
    s = n(100527),
    l = n(906732),
    c = n(556019),
    u = n(256754),
    d = n(719403),
    f = n(806774),
    _ = n(357156),
    p = n(430824),
    h = n(981631),
    m = n(388032);
function g(e) {
    let { channel: t } = e,
        n = (0, l.ZP)(s.Z.EMOJI_PICKER),
        [g, E] = i.useState(!1),
        b = (0, a.e7)([p.Z], () => p.Z.getGuild(null == t ? void 0 : t.guild_id)),
        y = (0, c.qt)({
            autoTrackExposure: !1,
            location: s.Z.EMOJI_PICKER,
        }),
        { availableEmojiSlots: O } = (0, d.t)({ guild: null != b ? b : null }),
        { canCreateExpressions: v } = (0, _.XJ)(b),
        I = g || 0 === O || !v,
        T = i.useCallback(async () => {
            if (!I) {
                if ((E(!0), y.enabled)) {
                    await (0, u.i)({
                        analyticsLocation: {
                            section: h.jXE.EXPRESSION_PICKER,
                            page: (null == t ? void 0 : t.guild_id) != null ? h.ZY5.GUILD_CHANNEL : h.ZY5.DM_CHANNEL,
                        },
                    }),
                        E(!1);
                    return;
                }
                if (null == t) return void E(!1);
                f.K({
                    guildId: t.guild_id,
                    autoOpenFileInput: y.isEntrypointExperimentEnabled,
                    analyticsLocation: n,
                }),
                    E(!1);
            }
        }, [t, n, y, I]);
    return (0, r.jsx)(o.z, {
        variant: "secondary",
        size: "md",
        onClick: T,
        text: m.intl.string(m.t.iMJO39),
        disabled: I,
    });
}
