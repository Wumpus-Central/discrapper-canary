"use strict";
n.d(t, { A: () => E });
var r = n(311907),
    i = n(73153),
    s = n(857071),
    a = n(649963),
    o = n(427157),
    l = n(734057),
    u = n(287809);
let d = {};
class c {
    users;
    fetched;
    static ensure(e, t, n) {
        let r = `${e}:${t.name}:${t.id ?? ""}:${n}`;
        return (d[r] = d[r] ?? new c());
    }
    constructor() {
        (this.fetched = !1), (this.users = new Map());
    }
}
function _(e) {
    let { type: t, messageId: n, userId: r, emoji: i, reactionType: s } = e,
        a = c.ensure(n, i, s);
    if ("MESSAGE_REACTION_ADD" === t) {
        let e = u.default.getUser(r);
        null != e && a.users.set(r, e);
    } else a.users.delete(r);
}
class f extends r.Ay.Store {
    initialize() {
        this.waitFor(l.A, s.A, u.default);
    }
    static displayName = "MessageReactionsStore";
    getReactions(e, t, n, r, i) {
        let o = c.ensure(t, n, i);
        if (!o.fetched) {
            let u = l.A.getChannel(e),
                d = null != u ? u.getGuildId() : null;
            if (null != d && s.A.isLurking(d)) return;
            a.ao({ channelId: e, messageId: t, emoji: n, limit: r, type: i }), (o.fetched = !0);
        }
        return o.users;
    }
}
let E = new f(i.h, {
    CONNECTION_OPEN: function () {
        d = {};
    },
    MESSAGE_REACTION_ADD: _,
    MESSAGE_REACTION_REMOVE: _,
    MESSAGE_REACTION_ADD_USERS: function (e) {
        let { messageId: t, users: n, emoji: r, reactionType: i } = e,
            s = c.ensure(t, r, i);
        n.forEach((e) => s.users.set(e.id, new o.A(e)));
    },
});
