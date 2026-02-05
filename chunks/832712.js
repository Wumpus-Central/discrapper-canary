"use strict";
n.d(t, { A: () => h }), n(938796);
var r = n(665260),
    i = n(562465),
    a = n(582754),
    s = n(73153),
    o = n(931260),
    l = n(543465),
    u = n(477427),
    c = n(661191),
    d = n(652215),
    _ = n(406535),
    f = n(355097),
    p = n(985018);
let h = {
    open(e) {
        s.h.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_OPEN", guildId: e });
    },
    close() {
        s.h.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
    },
    updateGuildNotificationSettings(e, t, n, r) {
        let i = (0, u.CP)(e);
        o.A.saveUserGuildSettings(e, t),
            s.h.dispatch({ type: "USER_GUILD_SETTINGS_GUILD_UPDATE", guildId: e, settings: t }),
            (0, u.Sq)(e, t, i, n, r);
    },
    updateGuildAndChannelNotificationSettings(e, t, n, r) {
        let i = c.default.keys(t.channel_overrides),
            a = (0, u.CP)(e),
            l = (0, u.Xh)(e, i);
        o.A.saveUserGuildSettings(e, t),
            s.h.dispatch({ type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE", guildId: e, settings: t }),
            (0, u.Sq)(e, t, a, n, r),
            c.default.keys(t.channel_overrides).forEach((i) => {
                let a = l.get(i);
                (0, u.ct)({
                    guildId: e,
                    channelId: i,
                    change: t.channel_overrides[i],
                    previous: a,
                    label: n,
                    location: r,
                });
            });
    },
    updateChannelOverrideSettings(e, t, n, r, i) {
        let l = (0, u.ME)(e, t),
            c = { channel_overrides: { [t]: n } };
        o.A.saveUserGuildSettings(e, c),
            s.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: n }),
            a.OR.announce(p.intl.string(p.t.MlIsJ8)),
            (0, u.ct)({ guildId: e, channelId: t, change: n, previous: l, label: r, location: i });
    },
    updateChannelOverrideSettingsBulk(e, t, n, r) {
        let i = c.default.keys(t),
            a = { channel_overrides: t },
            l = (0, u.Xh)(e, i);
        o.A.saveUserGuildSettings(e, a),
            s.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId: e, overrides: t }),
            c.default
                .keys(t)
                .forEach((i) =>
                    (0, u.ct)({ guildId: e, channelId: i, change: t[i], previous: l.get(i), label: n, location: r }),
                );
    },
    updateAppDMOverrideSettings(e, t, n, r, i) {
        let l = (0, u.ME)(e, t),
            c = { channel_overrides: { [t]: r } };
        o.A.saveUserGuildSettings(e, c),
            s.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: r }),
            a.OR.announce(p.intl.string(p.t.MlIsJ8)),
            (0, u.ct)({
                updateType: _.Y.AUTHORIZED_APP_DM,
                guildId: e,
                channelId: t,
                applicationId: n,
                change: r,
                previous: l,
                label: i,
            });
    },
    setForumThreadsCreated(e, t) {
        let n = t ? f.vv.NEW_FORUM_THREADS_ON : f.vv.NEW_FORUM_THREADS_OFF,
            r = t ? f.vv.NEW_FORUM_THREADS_OFF : f.vv.NEW_FORUM_THREADS_ON,
            i = (l.Ay.getChannelFlags(e) & ~r) | n;
        this.updateChannelOverrideSettings(e.guild_id, e.id, { flags: i }, u.G_.forumThreadsCreated(t));
    },
    async setAccountFlag(e, t) {
        let n = l.Ay.accountNotificationSettings.flags,
            a = (0, r.lA)(n, e, t);
        await i.Bo.patch({ url: d.Rsh.ACCOUNT_NOTIFICATION_SETTINGS, body: { flags: a }, rejectWithError: !1 }),
            await s.h.dispatch({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: a } });
    },
};
