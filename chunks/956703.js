"use strict";
n.d(t, { A: () => m });
var r = n(311907),
    i = n(73153),
    a = n(857071),
    s = n(649963),
    o = n(427157),
    l = n(734057),
    u = n(287809);
let c = {};
class d {
    users;
    fetched;
    static ensure(e, t, n) {
        let r = `${e}:${t.name}:${t.id ?? ""}:${n}`;
        return (c[r] = c[r] ?? new d());
    }
    constructor() {
        (this.fetched = !1), (this.users = new Map());
    }
}
function _() {
    c = {};
}
function f(e) {
    let { type: t, messageId: n, userId: r, emoji: i, reactionType: a } = e,
        s = d.ensure(n, i, a);
    if ("MESSAGE_REACTION_ADD" === t) {
        let e = u.default.getUser(r);
        null != e && s.users.set(r, e);
    } else s.users.delete(r);
}
function p(e) {
    let { messageId: t, users: n, emoji: r, reactionType: i } = e,
        a = d.ensure(t, r, i);
    n.forEach((e) => a.users.set(e.id, new o.A(e)));
}
class h extends r.Ay.Store {
    initialize() {
        this.waitFor(l.A, a.A, u.default);
    }
    static displayName = "MessageReactionsStore";
    getReactions(e, t, n, r, i) {
        let o = d.ensure(t, n, i);
        if (!o.fetched) {
            let u = l.A.getChannel(e),
                c = null != u ? u.getGuildId() : null;
            if (null != c && a.A.isLurking(c)) return;
            s.ao({ channelId: e, messageId: t, emoji: n, limit: r, type: i }), (o.fetched = !0);
        }
        return o.users;
    }
}
let m = new h(i.h, {
    CONNECTION_OPEN: _,
    MESSAGE_REACTION_ADD: f,
    MESSAGE_REACTION_REMOVE: f,
    MESSAGE_REACTION_ADD_USERS: p,
});
