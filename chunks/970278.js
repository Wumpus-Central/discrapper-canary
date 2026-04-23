"use strict";
n.d(t, { A: () => I });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(95701),
    l = n(734057),
    u = n(661191);
let c = {},
    d = new Set();
function _(e) {
    return { id: e.id, parentId: e.parent_id };
}
function f(e) {
    e in c && delete c[e];
}
function p(e) {
    null != e.threads &&
        e.threads.length > 0 &&
        ((c[e.id] = {}), e.threads.filter((e) => o.A_.has(e.type)).forEach((t) => h(e.id, t))),
        e.hasThreadsSubscription && d.add(e.id);
}
function h(e, t) {
    let n = c[e],
        r = t.parent_id;
    r in n || (n[r] = {}), (c[e][r][t.id] = _(t));
}
function E(e) {
    let { channel: t } = e;
    if (!o.A_.has(t.type)) return !1;
    if (t.threadMetadata?.archived === !0) return m(t);
    {
        let e = c[t.guild_id] ?? {};
        c[t.guild_id] = { ...e, [t.parent_id]: { ...e[t.parent_id], [t.id]: _(t) } };
    }
}
function m(e) {
    let { guild_id: t, parent_id: n, id: r } = e;
    if (null == t || null == n || !(t in c) || !(n in c[t]) || !(r in c[t][n])) return !1;
    (c[t] = { ...c[t], [n]: { ...c[t][n] } }), delete c[t][n][r], i().isEmpty(c[t][n]) && delete c[t][n];
}
let g = {};
class A extends s.Ay.Store {
    static displayName = "ActiveThreadsStore";
    initialize() {
        this.waitFor(l.A);
    }
    isActive(e, t, n) {
        return null != e && null != this.getThreadsForParent(e, t)[n];
    }
    getThreadsForGuild(e) {
        return c[e] ?? g;
    }
    getThreadsForParent(e, t) {
        return this.getThreadsForGuild(e)[t] ?? g;
    }
    hasThreadsForChannel(e, t) {
        return !i().isEmpty(this.getThreadsForParent(e, t));
    }
    forEachGuild(e) {
        u.default.keys(c).forEach((t) => {
            e(t, c[t]);
        });
    }
    hasLoaded(e) {
        return d.has(e);
    }
}
let I = new A(a.h, {
    CONNECTION_OPEN: function (e) {
        (c = {}),
            d.clear(),
            e.guilds.forEach((e) => {
                p(e);
            });
    },
    OVERLAY_INITIALIZE: function (e) {
        let { channels: t } = e;
        (c = {}),
            i()(t)
                .filter((e) => o.Le.has(e.type))
                .groupBy("guild_id")
                .forEach((e, t) => {
                    (c[t] = {}), e.forEach((e) => h(t, e));
                });
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        f(t.id), p(t);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        f(t.id);
    },
    THREAD_CREATE: E,
    THREAD_UPDATE: E,
    THREAD_LIST_SYNC: function (e) {
        let { guildId: t, threads: n, channelIds: r } = e;
        for (let e in (null == r && d.add(t), (c[t] = { ...c[t] }), c[t])) c[t][e] = { ...c[t][e] };
        n.forEach((e) => h(t, e));
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return m(t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (null == t.guild_id || !(t.guild_id in c)) return !1;
        (c[t.guild_id] = { ...c[t.guild_id] }), delete c[t.guild_id][t.id];
    },
});
