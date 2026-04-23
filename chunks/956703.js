"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    s = n(857071),
    a = n(649963),
    o = n(889227),
    l = n(734057),
    d = n(287809);
let _ = {};
class u {
    users;
    fetched;
    static ensure(e, t, n) {
        let i = `${e}:${t.name}:${t.id ?? ""}:${n}`;
        return (_[i] = _[i] ?? new u());
    }
    constructor() {
        (this.fetched = !1), (this.users = new Map());
    }
}
function c(e) {
    let { type: t, messageId: n, userId: i, emoji: r, reactionType: s } = e,
        a = u.ensure(n, r, s);
    if ("MESSAGE_REACTION_ADD" === t) {
        let e = d.default.getUser(i);
        null != e && a.users.set(i, e);
    } else a.users.delete(i);
}
class E extends i.Ay.Store {
    initialize() {
        this.waitFor(l.A, s.A, d.default);
    }
    static displayName = "MessageReactionsStore";
    getReactions(e, t, n, i, r) {
        let o = u.ensure(t, n, r);
        if (!o.fetched) {
            let d = l.A.getChannel(e),
                _ = null != d ? d.getGuildId() : null;
            if (null != _ && s.A.isLurking(_)) return;
            a.ao({ channelId: e, messageId: t, emoji: n, limit: i, type: r }), (o.fetched = !0);
        }
        return o.users;
    }
}
let h = new E(r.h, {
    CONNECTION_OPEN: function () {
        _ = {};
    },
    MESSAGE_REACTION_ADD: c,
    MESSAGE_REACTION_REMOVE: c,
    MESSAGE_REACTION_ADD_USERS: function (e) {
        let { messageId: t, users: n, emoji: i, reactionType: r } = e,
            s = u.ensure(t, i, r);
        n.forEach((e) => s.users.set(e.id, new o.A(e)));
    },
});
