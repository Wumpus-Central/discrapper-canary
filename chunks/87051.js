n.d(t, { Z: () => p }), n(47120), n(789020);
var i = n(544891),
    r = n(780384),
    a = n(570140),
    s = n(149071),
    o = n(9156),
    l = n(630388),
    u = n(621600),
    c = n(709054),
    d = n(981631),
    f = n(526761),
    _ = n(388032);
let p = {
    open(e) {
        a.Z.dispatch({
            type: 'NOTIFICATION_SETTINGS_MODAL_OPEN',
            guildId: e
        });
    },
    close() {
        a.Z.dispatch({ type: 'NOTIFICATION_SETTINGS_MODAL_CLOSE' });
    },
    updateGuildNotificationSettings(e, t, n, i) {
        let r = (0, u.GA)(e);
        s.Z.saveUserGuildSettings(e, t),
            a.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_GUILD_UPDATE',
                guildId: e,
                settings: t
            }),
            (0, u.Wq)(e, t, r, n, i);
    },
    updateGuildAndChannelNotificationSettings(e, t, n, i) {
        let r = c.default.keys(t.channel_overrides),
            o = (0, u.GA)(e),
            l = (0, u.wK)(e, r);
        s.Z.saveUserGuildSettings(e, t),
            a.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE',
                guildId: e,
                settings: t
            }),
            (0, u.Wq)(e, t, o, n, i),
            c.default.keys(t.channel_overrides).forEach((r) => {
                let a = l.get(r);
                (0, u.jz)(e, r, t.channel_overrides[r], a, n, i);
            });
    },
    updateGuildNotificationSettingsBulk(e, t, n) {
        let i = c.default.keys(e),
            r = (0, u.rU)(i);
        s.Z.saveUserGuildSettingsBulk(e),
            c.default.entries(e).forEach((e) => {
                let [i, s] = e,
                    o = r.get(i);
                a.Z.dispatch({
                    type: 'USER_GUILD_SETTINGS_GUILD_UPDATE',
                    guildId: i,
                    settings: s
                }),
                    (0, u.Wq)(i, s, o, t, n);
            });
    },
    updateChannelOverrideSettings(e, t, n, i, o) {
        let l = (0, u.I)(e, t),
            c = { channel_overrides: { [t]: n } };
        s.Z.saveUserGuildSettings(e, c),
            a.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
                guildId: e,
                channelId: t,
                settings: n
            }),
            r.uv.announce(_.intl.string(_.t.MlIsJy)),
            (0, u.jz)(e, t, n, l, i, o);
    },
    updateChannelOverrideSettingsBulk(e, t, n, i) {
        let r = c.default.keys(t),
            o = { channel_overrides: t },
            l = (0, u.wK)(e, r);
        s.Z.saveUserGuildSettings(e, o),
            a.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK',
                guildId: e,
                overrides: t
            }),
            c.default.keys(t).forEach((r) => (0, u.jz)(e, r, t[r], l.get(r), n, i));
    },
    setForumThreadsCreated(e, t) {
        let n = t ? f.ic.NEW_FORUM_THREADS_ON : f.ic.NEW_FORUM_THREADS_OFF,
            i = t ? f.ic.NEW_FORUM_THREADS_OFF : f.ic.NEW_FORUM_THREADS_ON,
            r = (o.ZP.getChannelFlags(e) & ~i) | n;
        this.updateChannelOverrideSettings(e.guild_id, e.id, { flags: r }, u.UE.forumThreadsCreated(t));
    },
    async setAccountFlag(e, t) {
        let n = o.ZP.accountNotificationSettings.flags,
            r = (0, l.mB)(n, e, t);
        await i.tn.patch({
            url: d.ANM.ACCOUNT_NOTIFICATION_SETTINGS,
            body: { flags: r },
            rejectWithError: !1
        }),
            await a.Z.dispatch({
                type: 'NOTIFICATION_SETTINGS_UPDATE',
                settings: { flags: r }
            });
    }
};
