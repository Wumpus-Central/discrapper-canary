"use strict";
n.d(t, { A: () => u });
var i = n(311907),
    s = n(73153),
    l = n(71393),
    r = n(522055),
    a = n(645619),
    o = n(904629);
let c = {};
class d extends i.Ay.PersistedStore {
    static displayName = "GuildPowerupsNotificationStore";
    static persistKey = "GuildPowerupsNotificationStore";
    static migrations = [
        (e) => (
            Object.entries(e).forEach((t) => {
                let [n, i] = t;
                e[n] = i;
            }),
            e
        ),
    ];
    getState() {
        return c;
    }
    initialize(e) {
        this.waitFor(r.A, a.A, l.A), null != e && (c = e);
    }
    getNotificationStateForGuild(e) {
        return c[e];
    }
}
let u = new d(s.h, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        let { guildId: t } = e,
            n = l.A.getGuild(t)?.premiumSubscriberCount ?? 0,
            i = a.A.getStateForGuild(t),
            s = r.A.getStateForGuild(t),
            d = (0, o.k)([...Object.values(i?.unlockedPowerups ?? {}), ...Object.values(s?.entitlements ?? {})]);
        c = {
            ...c,
            [t]: {
                lastSeenWarningNotification: new Date(d[d.length - 1]?.ends_at ?? Date.now()).getTime(),
                lastBoostCount: n,
            },
        };
    },
    GUILD_POWERUPS_RESET_NOTIFICATIONS: function () {
        c = {};
    },
});
