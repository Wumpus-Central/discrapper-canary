"use strict";
n.d(t, { A: () => h }), n(938796);
var i = n(665260),
    r = n(636537),
    a = n(765178),
    s = n(228366),
    l = n(931260),
    o = n(543465),
    d = n(477427),
    c = n(935208),
    u = n(652215),
    _ = n(406535),
    E = n(355097),
    A = n(375708);
let h = {
    open(e) {
        s.h.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_OPEN", guildId: e });
    },
    close() {
        s.h.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
    },
    updateGuildNotificationSettings(e, t, n, i) {
        let r = (0, d.CP)(e);
        l.A.saveUserGuildSettings(e, t),
            s.h.dispatch({ type: "USER_GUILD_SETTINGS_GUILD_UPDATE", guildId: e, settings: t }),
            (0, d.Sq)(e, t, r, n, i);
    },
    updateGuildAndChannelNotificationSettings(e, t, n, i) {
        let r = c.default.keys(t.channel_overrides),
            a = (0, d.CP)(e),
            o = (0, d.Xh)(e, r);
        l.A.saveUserGuildSettings(e, t),
            s.h.dispatch({ type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE", guildId: e, settings: t }),
            (0, d.Sq)(e, t, a, n, i),
            c.default.keys(t.channel_overrides).forEach((r) => {
                let a = o.get(r);
                (0, d.ct)({
                    guildId: e,
                    channelId: r,
                    change: t.channel_overrides[r],
                    previous: a,
                    label: n,
                    location: i,
                });
            });
    },
    updateChannelOverrideSettings(e, t, n, i, r) {
        let o = (0, d.ME)(e, t);
        l.A.saveUserGuildSettings(e, { channel_overrides: { [t]: n } }),
            s.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: n }),
            a.O.announce(A.intl.string(A.t.MlIsJ8)),
            (0, d.ct)({ guildId: e, channelId: t, change: n, previous: o, label: i, location: r });
    },
    updateChannelOverrideSettingsBulk(e, t, n, i) {
        let r = c.default.keys(t),
            a = (0, d.Xh)(e, r);
        l.A.saveUserGuildSettings(e, { channel_overrides: t }),
            s.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId: e, overrides: t }),
            c.default
                .keys(t)
                .forEach((r) =>
                    (0, d.ct)({ guildId: e, channelId: r, change: t[r], previous: a.get(r), label: n, location: i }),
                );
    },
    updateAppDMOverrideSettings(e, t, n, i, r) {
        let o = (0, d.ME)(e, t);
        l.A.saveUserGuildSettings(e, { channel_overrides: { [t]: i } }),
            s.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: i }),
            a.O.announce(A.intl.string(A.t.MlIsJ8)),
            (0, d.ct)({
                updateType: _.Y.AUTHORIZED_APP_DM,
                guildId: e,
                channelId: t,
                applicationId: n,
                change: i,
                previous: o,
                label: r,
            });
    },
    setForumThreadsCreated(e, t) {
        let n = t ? E.vv.NEW_FORUM_THREADS_ON : E.vv.NEW_FORUM_THREADS_OFF,
            i = t ? E.vv.NEW_FORUM_THREADS_OFF : E.vv.NEW_FORUM_THREADS_ON,
            r = o.Ay.getChannelFlags(e);
        this.updateChannelOverrideSettings(e.guild_id, e.id, { flags: (r & ~i) | n }, d.G_.forumThreadsCreated(t));
    },
    async setAccountFlag(e, t) {
        let n = o.Ay.accountNotificationSettings.flags,
            a = (0, i.lA)(n, e, t);
        await r.Bo.patch({
            url: u.Rsh.ACCOUNT_NOTIFICATION_SETTINGS,
            body: { flags: a },
            rejectWithError: (0, r.fT)(),
        }),
            await s.h.dispatch({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: a } });
    },
};
