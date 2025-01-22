var i = r(47120);
var a = r(789020);
var o = r(544891),
    s = r(780384),
    l = r(570140),
    u = r(149071),
    c = r(9156),
    d = r(630388),
    f = r(621600),
    p = r(709054),
    h = r(981631),
    _ = r(526761),
    m = r(388032);
n.Z = {
    open(e) {
        l.Z.dispatch({
            type: 'NOTIFICATION_SETTINGS_MODAL_OPEN',
            guildId: e
        });
    },
    close() {
        l.Z.dispatch({ type: 'NOTIFICATION_SETTINGS_MODAL_CLOSE' });
    },
    updateGuildNotificationSettings(e, n, r, i) {
        let a = (0, f.GA)(e);
        u.Z.saveUserGuildSettings(e, n),
            l.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_GUILD_UPDATE',
                guildId: e,
                settings: n
            }),
            (0, f.Wq)(e, n, a, r, i);
    },
    updateGuildAndChannelNotificationSettings(e, n, r, i) {
        let a = p.default.keys(n.channel_overrides),
            o = (0, f.GA)(e),
            s = (0, f.wK)(e, a);
        u.Z.saveUserGuildSettings(e, n),
            l.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE',
                guildId: e,
                settings: n
            }),
            (0, f.Wq)(e, n, o, r, i),
            p.default.keys(n.channel_overrides).forEach((a) => {
                let o = s.get(a);
                (0, f.jz)(e, a, n.channel_overrides[a], o, r, i);
            });
    },
    updateGuildNotificationSettingsBulk(e, n, r) {
        let i = p.default.keys(e),
            a = (0, f.rU)(i);
        u.Z.saveUserGuildSettingsBulk(e),
            p.default.entries(e).forEach((e) => {
                let [i, o] = e,
                    s = a.get(i);
                l.Z.dispatch({
                    type: 'USER_GUILD_SETTINGS_GUILD_UPDATE',
                    guildId: i,
                    settings: o
                }),
                    (0, f.Wq)(i, o, s, n, r);
            });
    },
    updateChannelOverrideSettings(e, n, r, i, a) {
        let o = (0, f.I)(e, n),
            c = { channel_overrides: { [n]: r } };
        u.Z.saveUserGuildSettings(e, c),
            l.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
                guildId: e,
                channelId: n,
                settings: r
            }),
            s.uv.announce(m.intl.string(m.t.MlIsJy)),
            (0, f.jz)(e, n, r, o, i, a);
    },
    updateChannelOverrideSettingsBulk(e, n, r, i) {
        let a = p.default.keys(n),
            o = { channel_overrides: n },
            s = (0, f.wK)(e, a);
        u.Z.saveUserGuildSettings(e, o),
            l.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK',
                guildId: e,
                overrides: n
            }),
            p.default.keys(n).forEach((a) => (0, f.jz)(e, a, n[a], s.get(a), r, i));
    },
    setForumThreadsCreated(e, n) {
        let r = n ? _.ic.NEW_FORUM_THREADS_ON : _.ic.NEW_FORUM_THREADS_OFF,
            i = n ? _.ic.NEW_FORUM_THREADS_OFF : _.ic.NEW_FORUM_THREADS_ON,
            a = (c.ZP.getChannelFlags(e) & ~i) | r;
        this.updateChannelOverrideSettings(e.guild_id, e.id, { flags: a }, f.UE.forumThreadsCreated(n));
    },
    async setAccountFlag(e, n) {
        let r = c.ZP.accountNotificationSettings.flags,
            i = (0, d.mB)(r, e, n);
        await o.tn.patch({
            url: h.ANM.ACCOUNT_NOTIFICATION_SETTINGS,
            body: { flags: i },
            rejectWithError: !1
        }),
            await l.Z.dispatch({
                type: 'NOTIFICATION_SETTINGS_UPDATE',
                settings: { flags: i }
            });
    }
};
