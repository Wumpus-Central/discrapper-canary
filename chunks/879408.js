n.d(t, { A: () => s });
var o = n(17928),
    r = n(228366),
    a = n(495544);
let i = new Set(),
    l = new Set();
class u extends o.Ay.Store {
    static displayName = "BulkBanStore";
    initialize() {
        this.waitFor(a.default);
    }
    hasPendingBulkBan(e) {
        return i.has(e);
    }
    consumeCompletedBeforeStarted(e, t) {
        let n = `${e}:${t}`;
        return l.delete(n);
    }
}
let s = new u(r.h, {
    GUILD_BULK_BAN_STARTED: function (e) {
        i.add(e.guildId);
    },
    GUILD_BULK_BAN_FAILED: function (e) {
        if (!i.has(e.guildId)) return !1;
        i.delete(e.guildId);
    },
    GUILD_BULK_BAN_UPDATE: function (e) {
        if (!i.has(e.guildId)) {
            let t = a.default.getId();
            return l.add(`${e.guildId}:${t}`), !1;
        }
        i.delete(e.guildId);
    },
    CONNECTION_OPEN: function () {
        i.clear(), l.clear();
    },
});
