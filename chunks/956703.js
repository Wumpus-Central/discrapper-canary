n.d(t, {
    A: () => E,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(857071),
    o = n(649963),
    l = n(427157),
    c = n(734057),
    u = n(287809);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let f = {};
class p {
    static ensure(e, t, n) {
        var r, i;
        let a = ""
            .concat(e, ":")
            .concat(t.name, ":")
            .concat(null != (r = t.id) ? r : "", ":")
            .concat(n);
        return (f[a] = null != (i = f[a]) ? i : new p());
    }
    constructor() {
        d(this, "users", void 0), d(this, "fetched", void 0), (this.fetched = !1), (this.users = new Map());
    }
}

function _() {
    f = {};
}

function h(e) {
    let { type: t, messageId: n, userId: r, emoji: i, reactionType: a } = e,
        s = p.ensure(n, i, a);
    if ("MESSAGE_REACTION_ADD" === t) {
        let e = u.default.getUser(r);
        null != e && s.users.set(r, e);
    } else s.users.delete(r);
}

function m(e) {
    let { messageId: t, users: n, emoji: r, reactionType: i } = e,
        a = p.ensure(t, r, i);
    n.forEach((e) => a.users.set(e.id, new l.A(e)));
}
class g extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(c.A, s.A, u.default);
    }
    getReactions(e, t, n, r, i) {
        let a = p.ensure(t, n, i);
        if (!a.fetched) {
            let l = c.A.getChannel(e),
                u = null != l ? l.getGuildId() : null;
            if (null != u && s.A.isLurking(u)) return;
            o.ao({
                channelId: e,
                messageId: t,
                emoji: n,
                limit: r,
                type: i,
            }),
                (a.fetched = !0);
        }
        return a.users;
    }
}
d(g, "displayName", "MessageReactionsStore");
let E = new g(a.h, {
    CONNECTION_OPEN: _,
    MESSAGE_REACTION_ADD: h,
    MESSAGE_REACTION_REMOVE: h,
    MESSAGE_REACTION_ADD_USERS: m,
});
