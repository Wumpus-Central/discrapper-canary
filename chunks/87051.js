n.d(t, { Z: () => h }), n(388685), n(997841);
var r = n(544891),
    i = n(780384),
    o = n(570140),
    a = n(149071),
    s = n(9156),
    l = n(630388),
    c = n(621600),
    u = n(709054),
    d = n(981631),
    f = n(468788),
    _ = n(526761),
    p = n(388032);
let h = {
    open(e) {
        o.Z.dispatch({
            type: 'NOTIFICATION_SETTINGS_MODAL_OPEN',
            guildId: e
        });
    },
    close() {
        o.Z.dispatch({ type: 'NOTIFICATION_SETTINGS_MODAL_CLOSE' });
    },
    updateGuildNotificationSettings(e, t, n, r) {
        let i = (0, c.GA)(e);
        a.Z.saveUserGuildSettings(e, t),
            o.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_GUILD_UPDATE',
                guildId: e,
                settings: t
            }),
            (0, c.Wq)(e, t, i, n, r);
    },
    updateGuildAndChannelNotificationSettings(e, t, n, r) {
        let i = u.default.keys(t.channel_overrides),
            s = (0, c.GA)(e),
            l = (0, c.wK)(e, i);
        a.Z.saveUserGuildSettings(e, t),
            o.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE',
                guildId: e,
                settings: t
            }),
            (0, c.Wq)(e, t, s, n, r),
            u.default.keys(t.channel_overrides).forEach((i) => {
                let o = l.get(i);
                (0, c.jz)({
                    guildId: e,
                    channelId: i,
                    change: t.channel_overrides[i],
                    previous: o,
                    label: n,
                    location: r
                });
            });
    },
    updateGuildNotificationSettingsBulk(e, t, n) {
        let r = u.default.keys(e),
            i = (0, c.rU)(r);
        a.Z.saveUserGuildSettingsBulk(e),
            u.default.entries(e).forEach((e) => {
                let [r, a] = e,
                    s = i.get(r);
                o.Z.dispatch({
                    type: 'USER_GUILD_SETTINGS_GUILD_UPDATE',
                    guildId: r,
                    settings: a
                }),
                    (0, c.Wq)(r, a, s, t, n);
            });
    },
    updateChannelOverrideSettings(e, t, n, r, s) {
        let l = (0, c.I)(e, t),
            u = { channel_overrides: { [t]: n } };
        a.Z.saveUserGuildSettings(e, u),
            o.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
                guildId: e,
                channelId: t,
                settings: n
            }),
            i.uv.announce(p.intl.string(p.t.MlIsJy)),
            (0, c.jz)({
                guildId: e,
                channelId: t,
                change: n,
                previous: l,
                label: r,
                location: s
            });
    },
    updateChannelOverrideSettingsBulk(e, t, n, r) {
        let i = u.default.keys(t),
            s = { channel_overrides: t },
            l = (0, c.wK)(e, i);
        a.Z.saveUserGuildSettings(e, s),
            o.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK',
                guildId: e,
                overrides: t
            }),
            u.default.keys(t).forEach((i) =>
                (0, c.jz)({
                    guildId: e,
                    channelId: i,
                    change: t[i],
                    previous: l.get(i),
                    label: n,
                    location: r
                })
            );
    },
    updateAppDMOverrideSettings(e, t, n, r, s) {
        let l = (0, c.I)(e, t),
            u = { channel_overrides: { [t]: r } };
        a.Z.saveUserGuildSettings(e, u),
            o.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
                guildId: e,
                channelId: t,
                settings: r
            }),
            i.uv.announce(p.intl.string(p.t.MlIsJy)),
            (0, c.jz)({
                updateType: f.I.AUTHORIZED_APP_DM,
                guildId: e,
                channelId: t,
                applicationId: n,
                change: r,
                previous: l,
                label: s
            });
    },
    setForumThreadsCreated(e, t) {
        let n = t ? _.ic.NEW_FORUM_THREADS_ON : _.ic.NEW_FORUM_THREADS_OFF,
            r = t ? _.ic.NEW_FORUM_THREADS_OFF : _.ic.NEW_FORUM_THREADS_ON,
            i = (s.ZP.getChannelFlags(e) & ~r) | n;
        this.updateChannelOverrideSettings(e.guild_id, e.id, { flags: i }, c.UE.forumThreadsCreated(t));
    },
    async setAccountFlag(e, t) {
        let n = s.ZP.accountNotificationSettings.flags,
            i = (0, l.mB)(n, e, t);
        await r.tn.patch({
            url: d.ANM.ACCOUNT_NOTIFICATION_SETTINGS,
            body: { flags: i },
            rejectWithError: !1
        }),
            await o.Z.dispatch({
                type: 'NOTIFICATION_SETTINGS_UPDATE',
                settings: { flags: i }
            });
    }
};
