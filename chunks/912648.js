n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(442837),
    a = n(755721),
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
        I = (0, o.e7)([h.Z], () => h.Z.getGuild(null == t ? void 0 : t.guild_id)),
        T = (0, c.qt)({
            autoTrackExposure: !1,
            location: s.Z.EMOJI_PICKER,
        }),
        { availableEmojiSlots: S } = (0, d.t)({ guild: null != I ? I : null }),
        { canCreateExpressions: A } = (0, p.XJ)(I),
        C = O || E || 0 === S || !A,
        N = i.useCallback(async () => {
            if (C || T.isSelectFileBeforeEmojiStudioExperimentEnabled) return;
            if ((v(!0), T.enabled)) {
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
            let n = T.isEntrypointOnlyExperimentEnabled || T.isEmojiEditingExperimentEnabled;
            f.Ku({
                guildId: t.guild_id,
                autoOpenFileInput: n,
                analyticsLocation: y,
            }),
                v(!1);
        }, [t, y, T, C]),
        R = i.useCallback(
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
    return (0, r.jsxs)(a.zx, {
        tabIndex: -1,
        color: a.zx.Colors.PRIMARY,
        size: a.zx.Sizes.MEDIUM,
        onClick: N,
        disabled: C,
        submitting: E,
        focusProps: { within: !0 },
        children: [
            g.intl.string(g.t.iMJO39),
            T.isSelectFileBeforeEmojiStudioExperimentEnabled
                ? (0, r.jsx)(_.ZP, {
                      ref: n,
                      tabIndex: 0,
                      disabled: C,
                      onChange: R,
                      setLoading: b,
                  })
                : null,
        ],
    });
}
