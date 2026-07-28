"use strict";
n.d(t, { A: () => f });
var i = n(17928),
    r = n(228366),
    a = n(857071),
    s = n(505527),
    l = n(649963),
    o = n(889227),
    d = n(734057),
    c = n(287809);
let u = {},
    _ = [s.v.NORMAL, s.v.BURST];
function E(e, t, n) {
    return `${e}:${t.name}:${t.id ?? ""}:${n}`;
}
class A {
    users;
    fetched;
    static ensure(e, t, n) {
        let i = E(e, t, n);
        return (u[i] = u[i] ?? new A());
    }
    constructor() {
        (this.fetched = !1), (this.users = new Map());
    }
}
function h(e) {
    let { type: t, messageId: n, userId: i, emoji: r, reactionType: a } = e,
        s = A.ensure(n, r, a);
    if ("MESSAGE_REACTION_ADD" === t) {
        let e = c.default.getUser(i);
        null != e && s.users.set(i, e);
    } else s.users.delete(i);
}
class I extends i.Ay.Store {
    initialize() {
        this.waitFor(d.A, a.A, c.default);
    }
    static displayName = "MessageReactionsStore";
    getKnownReactorIds(e, t) {
        let n = new Set();
        for (let i of t)
            for (let t of _) {
                let r = u[E(e, i, t)];
                if (null != r) for (let e of r.users.keys()) n.add(e);
            }
        return n;
    }
    getReactions(e, t, n, i, r) {
        let s = A.ensure(t, n, r);
        if (!s.fetched) {
            let o = d.A.getChannel(e),
                c = null != o ? o.getGuildId() : null;
            if (null != c && a.A.isLurking(c)) return;
            l.ao({ channelId: e, messageId: t, emoji: n, limit: i, type: r }), (s.fetched = !0);
        }
        return s.users;
    }
}
let f = new I(r.h, {
    CONNECTION_OPEN: function () {
        u = {};
    },
    MESSAGE_REACTION_ADD: h,
    MESSAGE_REACTION_REMOVE: h,
    MESSAGE_REACTION_ADD_USERS: function (e) {
        let { messageId: t, users: n, emoji: i, reactionType: r } = e,
            a = A.ensure(t, i, r);
        n.forEach((e) => a.users.set(e.id, new o.A(e)));
    },
});
