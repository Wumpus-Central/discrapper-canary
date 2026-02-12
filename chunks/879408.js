"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(73153),
    a = n(961350);
let s = new Set(),
    o = new Set();
function l(e) {
    s.add(e.guildId);
}
function u(e) {
    if (!s.has(e.guildId)) {
        let t = a.default.getId();
        return o.add(`${e.guildId}:${t}`), !1;
    }
    s.delete(e.guildId);
}
function c(e) {
    if (!s.has(e.guildId)) return !1;
    s.delete(e.guildId);
}
function d() {
    s.clear(), o.clear();
}
class _ extends r.Ay.Store {
    static displayName = "BulkBanStore";
    initialize() {
        this.waitFor(a.default);
    }
    hasPendingBulkBan(e) {
        return s.has(e);
    }
    consumeCompletedBeforeStarted(e, t) {
        let n = `${e}:${t}`;
        return o.delete(n);
    }
}
let f = new _(i.h, {
    GUILD_BULK_BAN_STARTED: l,
    GUILD_BULK_BAN_FAILED: c,
    GUILD_BULK_BAN_UPDATE: u,
    CONNECTION_OPEN: d,
});
