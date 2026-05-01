n.d(t, { A: () => u });
var o = n(17928),
    r = n(228366),
    i = n(495544);
let a = new Set(),
    l = new Set();
class s extends o.Ay.Store {
    static displayName = "BulkBanStore";
    initialize() {
        this.waitFor(i.default);
    }
    hasPendingBulkBan(e) {
        return a.has(e);
    }
    consumeCompletedBeforeStarted(e, t) {
        let n = `${e}:${t}`;
        return l.delete(n);
    }
}
let u = new s(r.h, {
    GUILD_BULK_BAN_STARTED: function (e) {
        a.add(e.guildId);
    },
    GUILD_BULK_BAN_FAILED: function (e) {
        if (!a.has(e.guildId)) return !1;
        a.delete(e.guildId);
    },
    GUILD_BULK_BAN_UPDATE: function (e) {
        if (!a.has(e.guildId)) {
            let t = i.default.getId();
            return l.add(`${e.guildId}:${t}`), !1;
        }
        a.delete(e.guildId);
    },
    CONNECTION_OPEN: function () {
        a.clear(), l.clear();
    },
});
