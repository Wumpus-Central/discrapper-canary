"use strict";
n.d(t, { A: () => I });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(95701),
    l = n(734057),
    u = n(661191);
let d = {},
    c = new Set();
function _(e) {
    return { id: e.id, parentId: e.parent_id };
}
function f(e) {
    e in d && delete d[e];
}
function E(e) {
    null != e.threads &&
        e.threads.length > 0 &&
        ((d[e.id] = {}), e.threads.filter((e) => o.A_.has(e.type)).forEach((t) => h(e.id, t))),
        e.hasThreadsSubscription && c.add(e.id);
}
function h(e, t) {
    let n = d[e],
        r = t.parent_id;
    r in n || (n[r] = {}), (d[e][r][t.id] = _(t));
}
function p(e) {
    let { channel: t } = e;
    if (!o.A_.has(t.type)) return !1;
    if (t.threadMetadata?.archived === !0) return m(t);
    {
        let e = d[t.guild_id] ?? {};
        d[t.guild_id] = { ...e, [t.parent_id]: { ...e[t.parent_id], [t.id]: _(t) } };
    }
}
function m(e) {
    let { guild_id: t, parent_id: n, id: r } = e;
    if (null == t || null == n || !(t in d) || !(n in d[t]) || !(r in d[t][n])) return !1;
    (d[t] = { ...d[t], [n]: { ...d[t][n] } }), delete d[t][n][r], i().isEmpty(d[t][n]) && delete d[t][n];
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
        return d[e] ?? g;
    }
    getThreadsForParent(e, t) {
        return this.getThreadsForGuild(e)[t] ?? g;
    }
    hasThreadsForChannel(e, t) {
        return !i().isEmpty(this.getThreadsForParent(e, t));
    }
    forEachGuild(e) {
        u.default.keys(d).forEach((t) => {
            e(t, d[t]);
        });
    }
    hasLoaded(e) {
        return c.has(e);
    }
}
let I = new A(a.h, {
    CONNECTION_OPEN: function (e) {
        (d = {}),
            c.clear(),
            e.guilds.forEach((e) => {
                E(e);
            });
    },
    OVERLAY_INITIALIZE: function (e) {
        let { channels: t } = e;
        (d = {}),
            i()(t)
                .filter((e) => o.Le.has(e.type))
                .groupBy("guild_id")
                .forEach((e, t) => {
                    (d[t] = {}), e.forEach((e) => h(t, e));
                });
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        f(t.id), E(t);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        f(t.id);
    },
    THREAD_CREATE: p,
    THREAD_UPDATE: p,
    THREAD_LIST_SYNC: function (e) {
        let { guildId: t, threads: n, channelIds: r } = e;
        for (let e in (null == r && c.add(t), (d[t] = { ...d[t] }), d[t])) d[t][e] = { ...d[t][e] };
        n.forEach((e) => h(t, e));
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return m(t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (null == t.guild_id || !(t.guild_id in d)) return !1;
        (d[t.guild_id] = { ...d[t.guild_id] }), delete d[t.guild_id][t.id];
    },
});
