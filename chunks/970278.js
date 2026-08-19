"use strict";
n.d(t, { A: () => m });
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(95701),
    o = n(734057),
    d = n(935208);
let c = {},
    u = new Set();
function _(e) {
    return { id: e.id, parentId: e.parent_id };
}
function E(e) {
    e in c && delete c[e];
}
function A(e) {
    null != e.threads &&
        e.threads.length > 0 &&
        ((c[e.id] = {}), e.threads.filter((e) => l.A_.has(e.type)).forEach((t) => h(e.id, t))),
        e.hasThreadsSubscription && u.add(e.id);
}
function h(e, t) {
    let n = c[e],
        i = t.parent_id;
    i in n || (n[i] = {}), (c[e][i][t.id] = _(t));
}
function I(e) {
    let { channel: t } = e;
    if (!l.A_.has(t.type)) return !1;
    if (t.threadMetadata?.archived === !0) return f(t);
    {
        let e = c[t.guild_id] ?? {};
        c[t.guild_id] = { ...e, [t.parent_id]: { ...e[t.parent_id], [t.id]: _(t) } };
    }
}
function f(e) {
    let { guild_id: t, parent_id: n, id: i } = e;
    if (null == t || null == n || !(t in c) || !(n in c[t]) || !(i in c[t][n])) return !1;
    (c[t] = { ...c[t], [n]: { ...c[t][n] } }), delete c[t][n][i], r().isEmpty(c[t][n]) && delete c[t][n];
}
let p = {};
class T extends a.Ay.Store {
    static displayName = "ActiveThreadsStore";
    initialize() {
        this.waitFor(o.A);
    }
    isActive(e, t, n) {
        return null != e && null != this.getThreadsForParent(e, t)[n];
    }
    getThreadsForGuild(e) {
        return c[e] ?? p;
    }
    getThreadsForParent(e, t) {
        return this.getThreadsForGuild(e)[t] ?? p;
    }
    hasThreadsForChannel(e, t) {
        return !r().isEmpty(this.getThreadsForParent(e, t));
    }
    forEachGuild(e) {
        d.default.keys(c).forEach((t) => {
            e(t, c[t]);
        });
    }
    hasLoaded(e) {
        return u.has(e);
    }
}
let m = new T(s.h, {
    CONNECTION_OPEN: function (e) {
        (c = {}),
            u.clear(),
            e.guilds.forEach((e) => {
                A(e);
            });
    },
    OVERLAY_INITIALIZE: function (e) {
        let { channels: t } = e;
        (c = {}),
            r()(t)
                .filter((e) => l.Le.has(e.type))
                .groupBy("guild_id")
                .forEach((e, t) => {
                    (c[t] = {}), e.forEach((e) => h(t, e));
                });
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        E(t.id), A(t);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        E(t.id);
    },
    THREAD_CREATE: I,
    THREAD_UPDATE: I,
    THREAD_LIST_SYNC: function (e) {
        let { guildId: t, threads: n, channelIds: i } = e;
        for (let e in (null == i && u.add(t), (c[t] = { ...c[t] }), c[t])) c[t][e] = { ...c[t][e] };
        n.forEach((e) => h(t, e));
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return f(t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (null == t.guild_id || !(t.guild_id in c)) return !1;
        (c[t.guild_id] = { ...c[t.guild_id] }), delete c[t.guild_id][t.id];
    },
});
