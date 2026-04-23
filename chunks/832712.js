"use strict";
n.d(t, { A: () => h }), n(938796);
var r = n(665260),
    i = n(562465),
    s = n(765178),
    a = n(73153),
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
        a.h.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_OPEN", guildId: e });
    },
    close() {
        a.h.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
    },
    updateGuildNotificationSettings(e, t, n, r) {
        let i = (0, u.CP)(e);
        o.A.saveUserGuildSettings(e, t),
            a.h.dispatch({ type: "USER_GUILD_SETTINGS_GUILD_UPDATE", guildId: e, settings: t }),
            (0, u.Sq)(e, t, i, n, r);
    },
    updateGuildAndChannelNotificationSettings(e, t, n, r) {
        let i = c.default.keys(t.channel_overrides),
            s = (0, u.CP)(e),
            l = (0, u.Xh)(e, i);
        o.A.saveUserGuildSettings(e, t),
            a.h.dispatch({ type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE", guildId: e, settings: t }),
            (0, u.Sq)(e, t, s, n, r),
            c.default.keys(t.channel_overrides).forEach((i) => {
                let s = l.get(i);
                (0, u.ct)({
                    guildId: e,
                    channelId: i,
                    change: t.channel_overrides[i],
                    previous: s,
                    label: n,
                    location: r,
                });
            });
    },
    updateChannelOverrideSettings(e, t, n, r, i) {
        let l = (0, u.ME)(e, t);
        o.A.saveUserGuildSettings(e, { channel_overrides: { [t]: n } }),
            a.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: n }),
            s.O.announce(p.intl.string(p.t.MlIsJ8)),
            (0, u.ct)({ guildId: e, channelId: t, change: n, previous: l, label: r, location: i });
    },
    updateChannelOverrideSettingsBulk(e, t, n, r) {
        let i = c.default.keys(t),
            s = (0, u.Xh)(e, i);
        o.A.saveUserGuildSettings(e, { channel_overrides: t }),
            a.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId: e, overrides: t }),
            c.default
                .keys(t)
                .forEach((i) =>
                    (0, u.ct)({ guildId: e, channelId: i, change: t[i], previous: s.get(i), label: n, location: r }),
                );
    },
    updateAppDMOverrideSettings(e, t, n, r, i) {
        let l = (0, u.ME)(e, t);
        o.A.saveUserGuildSettings(e, { channel_overrides: { [t]: r } }),
            a.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: r }),
            s.O.announce(p.intl.string(p.t.MlIsJ8)),
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
            i = l.Ay.getChannelFlags(e);
        this.updateChannelOverrideSettings(e.guild_id, e.id, { flags: (i & ~r) | n }, u.G_.forumThreadsCreated(t));
    },
    async setAccountFlag(e, t) {
        let n = l.Ay.accountNotificationSettings.flags,
            s = (0, r.lA)(n, e, t);
        await i.Bo.patch({ url: d.Rsh.ACCOUNT_NOTIFICATION_SETTINGS, body: { flags: s }, rejectWithError: !1 }),
            await a.h.dispatch({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: s } });
    },
};
