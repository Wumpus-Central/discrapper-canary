"use strict";
n.d(t, { A: () => I });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(95701),
    l = n(734057),
    d = n(935208);
let _ = {},
    u = new Set();
function c(e) {
    return { id: e.id, parentId: e.parent_id };
}
function E(e) {
    e in _ && delete _[e];
}
function h(e) {
    null != e.threads &&
        e.threads.length > 0 &&
        ((_[e.id] = {}), e.threads.filter((e) => o.A_.has(e.type)).forEach((t) => m(e.id, t))),
        e.hasThreadsSubscription && u.add(e.id);
}
function m(e, t) {
    let n = _[e],
        i = t.parent_id;
    i in n || (n[i] = {}), (_[e][i][t.id] = c(t));
}
function f(e) {
    let { channel: t } = e;
    if (!o.A_.has(t.type)) return !1;
    if (t.threadMetadata?.archived === !0) return g(t);
    {
        let e = _[t.guild_id] ?? {};
        _[t.guild_id] = { ...e, [t.parent_id]: { ...e[t.parent_id], [t.id]: c(t) } };
    }
}
function g(e) {
    let { guild_id: t, parent_id: n, id: i } = e;
    if (null == t || null == n || !(t in _) || !(n in _[t]) || !(i in _[t][n])) return !1;
    (_[t] = { ..._[t], [n]: { ..._[t][n] } }), delete _[t][n][i], r().isEmpty(_[t][n]) && delete _[t][n];
}
let p = {};
class A extends s.Ay.Store {
    static displayName = "ActiveThreadsStore";
    initialize() {
        this.waitFor(l.A);
    }
    isActive(e, t, n) {
        return null != e && null != this.getThreadsForParent(e, t)[n];
    }
    getThreadsForGuild(e) {
        return _[e] ?? p;
    }
    getThreadsForParent(e, t) {
        return this.getThreadsForGuild(e)[t] ?? p;
    }
    hasThreadsForChannel(e, t) {
        return !r().isEmpty(this.getThreadsForParent(e, t));
    }
    forEachGuild(e) {
        d.default.keys(_).forEach((t) => {
            e(t, _[t]);
        });
    }
    hasLoaded(e) {
        return u.has(e);
    }
}
let I = new A(a.h, {
    CONNECTION_OPEN: function (e) {
        (_ = {}),
            u.clear(),
            e.guilds.forEach((e) => {
                h(e);
            });
    },
    OVERLAY_INITIALIZE: function (e) {
        let { channels: t } = e;
        (_ = {}),
            r()(t)
                .filter((e) => o.Le.has(e.type))
                .groupBy("guild_id")
                .forEach((e, t) => {
                    (_[t] = {}), e.forEach((e) => m(t, e));
                });
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        E(t.id), h(t);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        E(t.id);
    },
    THREAD_CREATE: f,
    THREAD_UPDATE: f,
    THREAD_LIST_SYNC: function (e) {
        let { guildId: t, threads: n, channelIds: i } = e;
        for (let e in (null == i && u.add(t), (_[t] = { ..._[t] }), _[t])) _[t][e] = { ..._[t][e] };
        n.forEach((e) => m(t, e));
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return g(t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (null == t.guild_id || !(t.guild_id in _)) return !1;
        (_[t.guild_id] = { ..._[t.guild_id] }), delete _[t.guild_id][t.id];
    },
});
