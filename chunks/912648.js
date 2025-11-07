n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(755721),
    s = n(100527),
    l = n(906732),
    c = n(556019),
    u = n(256754),
    d = n(719403),
    f = n(806774),
    _ = n(372129),
    p = n(357156),
    h = n(430824),
    m = n(981631),
    g = n(388032);
function E(e) {
    let { channel: t } = e,
        n = i.useRef(null),
        [E, b] = i.useState(!1),
        y = (0, l.ZP)(s.Z.EMOJI_PICKER),
        [O, v] = i.useState(!1),
        I = (0, a.e7)([h.Z], () => h.Z.getGuild(null == t ? void 0 : t.guild_id)),
        S = (0, c.qt)({
            autoTrackExposure: !1,
            location: s.Z.EMOJI_PICKER,
        }),
        { availableEmojiSlots: T } = (0, d.t)({ guild: null != I ? I : null }),
        { canCreateExpressions: A } = (0, p.XJ)(I),
        C = 0 === T || !A,
        N = !S.isSelectFileBeforeEmojiStudioExperimentEnabled && C,
        R = O || E || N,
        P = i.useCallback(async () => {
            if (R || S.isSelectFileBeforeEmojiStudioExperimentEnabled) return;
            if ((v(!0), S.enabled)) {
                var e;
                await (0, u.i)({
                    guildId: null != (e = null == t ? void 0 : t.guild_id) ? e : null,
                    analyticsLocation: {
                        section: m.jXE.EXPRESSION_PICKER,
                        page: (null == t ? void 0 : t.guild_id) != null ? m.ZY5.GUILD_CHANNEL : m.ZY5.DM_CHANNEL,
                    },
                }),
                    v(!1);
                return;
            }
            if (null == t) return void v(!1);
            let n = S.isEntrypointOnlyExperimentEnabled || S.isEmojiEditingExperimentEnabled;
            f.Ku({
                guildId: t.guild_id,
                autoOpenFileInput: n,
                analyticsLocation: y,
            }),
                v(!1);
        }, [t, y, S, R]),
        w = i.useCallback(
            async (e, n, r) => {
                var i;
                v(!0),
                    await (0, u.i)({
                        userImage: {
                            data: e,
                            file: n,
                            image: r,
                        },
                        guildId: null != (i = null == t ? void 0 : t.guild_id) ? i : null,
                        analyticsLocation: {
                            section: m.jXE.EXPRESSION_PICKER,
                            page: (null == t ? void 0 : t.guild_id) != null ? m.ZY5.GUILD_CHANNEL : m.ZY5.DM_CHANNEL,
                        },
                    }),
                    v(!1);
            },
            [t],
        );
    return (0, r.jsxs)(o.zx, {
        "data-migration-pending": !0,
        tabIndex: -1,
        color: o.zx.Colors.PRIMARY,
        size: o.zx.Sizes.MEDIUM,
        onClick: P,
        disabled: R,
        submitting: E,
        focusProps: { within: !0 },
        children: [
            g.intl.string(g.t.iMJO37),
            S.isSelectFileBeforeEmojiStudioExperimentEnabled
                ? (0, r.jsx)(_.ZP, {
                      ref: n,
                      tabIndex: 0,
                      disabled: R,
                      onChange: w,
                      setLoading: b,
                  })
                : null,
        ],
    });
}
