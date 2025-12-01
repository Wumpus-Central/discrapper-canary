n.d(t, { Z: () => m }), n(388685), n(997841);
var r = n(95015),
    i = n(544891),
    a = n(780384),
    o = n(570140),
    s = n(149071),
    l = n(9156),
    c = n(621600),
    u = n(709054),
    d = n(981631),
    f = n(468788),
    p = n(526761),
    _ = n(388032);
let m = {
    open(e) {
        o.Z.dispatch({
            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
            guildId: e,
        });
    },
    close() {
        o.Z.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
    },
    updateGuildNotificationSettings(e, t, n, r) {
        let i = (0, c.GA)(e);
        s.Z.saveUserGuildSettings(e, t),
            o.Z.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                guildId: e,
                settings: t,
            }),
            (0, c.Wq)(e, t, i, n, r);
    },
    updateGuildAndChannelNotificationSettings(e, t, n, r) {
        let i = u.default.keys(t.channel_overrides),
            a = (0, c.GA)(e),
            l = (0, c.wK)(e, i);
        s.Z.saveUserGuildSettings(e, t),
            o.Z.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                guildId: e,
                settings: t,
            }),
            (0, c.Wq)(e, t, a, n, r),
            u.default.keys(t.channel_overrides).forEach((i) => {
                let a = l.get(i);
                (0, c.jz)({
                    guildId: e,
                    channelId: i,
                    change: t.channel_overrides[i],
                    previous: a,
                    label: n,
                    location: r,
                });
            });
    },
    updateGuildNotificationSettingsBulk(e, t, n) {
        let r = u.default.keys(e),
            i = (0, c.rU)(r);
        s.Z.saveUserGuildSettingsBulk(e),
            u.default.entries(e).forEach((e) => {
                let [r, a] = e,
                    s = i.get(r);
                o.Z.dispatch({
                    type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                    guildId: r,
                    settings: a,
                }),
                    (0, c.Wq)(r, a, s, t, n);
            });
    },
    updateChannelOverrideSettings(e, t, n, r, i) {
        let l = (0, c.I)(e, t),
            u = { channel_overrides: { [t]: n } };
        s.Z.saveUserGuildSettings(e, u),
            o.Z.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                guildId: e,
                channelId: t,
                settings: n,
            }),
            a.uv.announce(_.intl.string(_.t.MlIsJ8)),
            (0, c.jz)({
                guildId: e,
                channelId: t,
                change: n,
                previous: l,
                label: r,
                location: i,
            });
    },
    updateChannelOverrideSettingsBulk(e, t, n, r) {
        let i = u.default.keys(t),
            a = { channel_overrides: t },
            l = (0, c.wK)(e, i);
        s.Z.saveUserGuildSettings(e, a),
            o.Z.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                guildId: e,
                overrides: t,
            }),
            u.default.keys(t).forEach((i) =>
                (0, c.jz)({
                    guildId: e,
                    channelId: i,
                    change: t[i],
                    previous: l.get(i),
                    label: n,
                    location: r,
                }),
            );
    },
    updateAppDMOverrideSettings(e, t, n, r, i) {
        let l = (0, c.I)(e, t),
            u = { channel_overrides: { [t]: r } };
        s.Z.saveUserGuildSettings(e, u),
            o.Z.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                guildId: e,
                channelId: t,
                settings: r,
            }),
            a.uv.announce(_.intl.string(_.t.MlIsJ8)),
            (0, c.jz)({
                updateType: f.I.AUTHORIZED_APP_DM,
                guildId: e,
                channelId: t,
                applicationId: n,
                change: r,
                previous: l,
                label: i,
            });
    },
    setForumThreadsCreated(e, t) {
        let n = t ? p.ic.NEW_FORUM_THREADS_ON : p.ic.NEW_FORUM_THREADS_OFF,
            r = t ? p.ic.NEW_FORUM_THREADS_OFF : p.ic.NEW_FORUM_THREADS_ON,
            i = (l.ZP.getChannelFlags(e) & ~r) | n;
        this.updateChannelOverrideSettings(e.guild_id, e.id, { flags: i }, c.UE.forumThreadsCreated(t));
    },
    async setAccountFlag(e, t) {
        let n = l.ZP.accountNotificationSettings.flags,
            a = (0, r.mB)(n, e, t);
        await i.tn.patch({
            url: d.ANM.ACCOUNT_NOTIFICATION_SETTINGS,
            body: { flags: a },
            rejectWithError: !1,
        }),
            await o.Z.dispatch({
                type: "NOTIFICATION_SETTINGS_UPDATE",
                settings: { flags: a },
            });
    },
};
