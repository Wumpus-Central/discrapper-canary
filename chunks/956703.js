n.d(t, { A: () => A });
var i = n(17928),
    r = n(73153),
    a = n(857071),
    s = n(649963),
    l = n(889227),
    o = n(734057),
    d = n(287809);
let c = {};
class u {
    users;
    fetched;
    static ensure(e, t, n) {
        let i = `${e}:${t.name}:${t.id ?? ""}:${n}`;
        return (c[i] = c[i] ?? new u());
    }
    constructor() {
        ((this.fetched = !1), (this.users = new Map()));
    }
}
function _(e) {
    let { type: t, messageId: n, userId: i, emoji: r, reactionType: a } = e,
        s = u.ensure(n, r, a);
    if ("MESSAGE_REACTION_ADD" === t) {
        let e = d.default.getUser(i);
        null != e && s.users.set(i, e);
    } else s.users.delete(i);
}
class E extends i.Ay.Store {
    initialize() {
        this.waitFor(o.A, a.A, d.default);
    }
    static displayName = "MessageReactionsStore";
    getReactions(e, t, n, i, r) {
        let l = u.ensure(t, n, r);
        if (!l.fetched) {
            let d = o.A.getChannel(e),
                c = null != d ? d.getGuildId() : null;
            if (null != c && a.A.isLurking(c)) return;
            (s.ao({ channelId: e, messageId: t, emoji: n, limit: i, type: r }), (l.fetched = !0));
        }
        return l.users;
    }
}
let A = new E(r.h, {
    CONNECTION_OPEN: function () {
        c = {};
    },
    MESSAGE_REACTION_ADD: _,
    MESSAGE_REACTION_REMOVE: _,
    MESSAGE_REACTION_ADD_USERS: function (e) {
        let { messageId: t, users: n, emoji: i, reactionType: r } = e,
            a = u.ensure(t, i, r);
        n.forEach((e) => a.users.set(e.id, new l.A(e)));
    },
    MESSAGE_REACTION_SET_FETCHED: function (e) {
        let { messageId: t, emoji: n, reactionType: i } = e;
        u.ensure(t, n, i).fetched = !0;
    },
});
