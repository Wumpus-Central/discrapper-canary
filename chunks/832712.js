"use strict";
n.d(t, { A: () => m }), n(938796);
var i = n(665260),
    r = n(636537),
    s = n(765178),
    a = n(228366),
    o = n(931260),
    l = n(543465),
    d = n(477427),
    _ = n(935208),
    u = n(652215),
    c = n(406535),
    E = n(355097),
    h = n(985018);
let m = {
    open(e) {
        a.h.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_OPEN", guildId: e });
    },
    close() {
        a.h.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
    },
    updateGuildNotificationSettings(e, t, n, i) {
        let r = (0, d.CP)(e);
        o.A.saveUserGuildSettings(e, t),
            a.h.dispatch({ type: "USER_GUILD_SETTINGS_GUILD_UPDATE", guildId: e, settings: t }),
            (0, d.Sq)(e, t, r, n, i);
    },
    updateGuildAndChannelNotificationSettings(e, t, n, i) {
        let r = _.default.keys(t.channel_overrides),
            s = (0, d.CP)(e),
            l = (0, d.Xh)(e, r);
        o.A.saveUserGuildSettings(e, t),
            a.h.dispatch({ type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE", guildId: e, settings: t }),
            (0, d.Sq)(e, t, s, n, i),
            _.default.keys(t.channel_overrides).forEach((r) => {
                let s = l.get(r);
                (0, d.ct)({
                    guildId: e,
                    channelId: r,
                    change: t.channel_overrides[r],
                    previous: s,
                    label: n,
                    location: i,
                });
            });
    },
    updateChannelOverrideSettings(e, t, n, i, r) {
        let l = (0, d.ME)(e, t);
        o.A.saveUserGuildSettings(e, { channel_overrides: { [t]: n } }),
            a.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: n }),
            s.O.announce(h.intl.string(h.t.MlIsJ8)),
            (0, d.ct)({ guildId: e, channelId: t, change: n, previous: l, label: i, location: r });
    },
    updateChannelOverrideSettingsBulk(e, t, n, i) {
        let r = _.default.keys(t),
            s = (0, d.Xh)(e, r);
        o.A.saveUserGuildSettings(e, { channel_overrides: t }),
            a.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId: e, overrides: t }),
            _.default
                .keys(t)
                .forEach((r) =>
                    (0, d.ct)({ guildId: e, channelId: r, change: t[r], previous: s.get(r), label: n, location: i }),
                );
    },
    updateAppDMOverrideSettings(e, t, n, i, r) {
        let l = (0, d.ME)(e, t);
        o.A.saveUserGuildSettings(e, { channel_overrides: { [t]: i } }),
            a.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: i }),
            s.O.announce(h.intl.string(h.t.MlIsJ8)),
            (0, d.ct)({
                updateType: c.Y.AUTHORIZED_APP_DM,
                guildId: e,
                channelId: t,
                applicationId: n,
                change: i,
                previous: l,
                label: r,
            });
    },
    setForumThreadsCreated(e, t) {
        let n = t ? E.vv.NEW_FORUM_THREADS_ON : E.vv.NEW_FORUM_THREADS_OFF,
            i = t ? E.vv.NEW_FORUM_THREADS_OFF : E.vv.NEW_FORUM_THREADS_ON,
            r = l.Ay.getChannelFlags(e);
        this.updateChannelOverrideSettings(e.guild_id, e.id, { flags: (r & ~i) | n }, d.G_.forumThreadsCreated(t));
    },
    async setAccountFlag(e, t) {
        let n = l.Ay.accountNotificationSettings.flags,
            s = (0, i.lA)(n, e, t);
        await r.Bo.patch({ url: u.Rsh.ACCOUNT_NOTIFICATION_SETTINGS, body: { flags: s }, rejectWithError: !1 }),
            await a.h.dispatch({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: s } });
    },
};
