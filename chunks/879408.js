"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153),
    s = n(961350);
let a = new Set(),
    o = new Set();
class l extends r.Ay.Store {
    static displayName = "BulkBanStore";
    initialize() {
        this.waitFor(s.default);
    }
    hasPendingBulkBan(e) {
        return a.has(e);
    }
    consumeCompletedBeforeStarted(e, t) {
        let n = `${e}:${t}`;
        return o.delete(n);
    }
}
let u = new l(i.h, {
    GUILD_BULK_BAN_STARTED: function (e) {
        a.add(e.guildId);
    },
    GUILD_BULK_BAN_FAILED: function (e) {
        if (!a.has(e.guildId)) return !1;
        a.delete(e.guildId);
    },
    GUILD_BULK_BAN_UPDATE: function (e) {
        if (!a.has(e.guildId)) {
            let t = s.default.getId();
            return o.add(`${e.guildId}:${t}`), !1;
        }
        a.delete(e.guildId);
    },
    CONNECTION_OPEN: function () {
        a.clear(), o.clear();
    },
});
