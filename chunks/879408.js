n.d(t, { A: () => d });
var r = n(17928),
    a = n(228366),
    i = n(495544);
let o = new Set(),
    l = new Set();
class s extends r.Ay.Store {
    static displayName = "BulkBanStore";
    initialize() {
        this.waitFor(i.default);
    }
    hasPendingBulkBan(e) {
        return o.has(e);
    }
    consumeCompletedBeforeStarted(e, t) {
        let n = `${e}:${t}`;
        return l.delete(n);
    }
}
let d = new s(a.h, {
    GUILD_BULK_BAN_STARTED: function (e) {
        o.add(e.guildId);
    },
    GUILD_BULK_BAN_FAILED: function (e) {
        if (!o.has(e.guildId)) return !1;
        o.delete(e.guildId);
    },
    GUILD_BULK_BAN_UPDATE: function (e) {
        if (!o.has(e.guildId)) {
            let t = i.default.getId();
            return l.add(`${e.guildId}:${t}`), !1;
        }
        o.delete(e.guildId);
    },
    CONNECTION_OPEN: function () {
        o.clear(), l.clear();
    },
});
