"use strict";
n.d(t, { A: () => m });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(95701),
    l = n(734057);
let u = {};
function c(e) {
    e.threads?.forEach(d);
}
function d(e) {
    if (!o.A_.has(e.type)) return !1;
    let t =
        (e.id in u ||
            (u[e.id] = {
                guildId: e.guild_id,
                parentId: e.parent_id,
                memberCount: e.memberCount ?? 0,
                memberIdsPreview: e.memberIdsPreview ?? [],
            }),
        u[e.id]);
    null != e.memberCount && (t.memberCount = e.memberCount),
        null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview);
}
function _(e) {
    let { channel: t } = e;
    return d(t);
}
function f(e) {
    let { threads: t } = e;
    t.forEach(h);
}
function p(e) {
    let { data: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            let { threads: t, messages: r } = e;
            r.forEach((e) => {
                e.forEach((e) => {
                    n = h(e.thread) || n;
                });
            }),
                t.forEach((e) => {
                    n = h(e) || n;
                });
        }),
        n
    );
}
function h(e) {
    if (null != e && !(e.id in u)) {
        let t = l.A.getChannel(e.id);
        if (null != t) return d(t), !0;
    }
    return !1;
}
class E extends s.Ay.Store {
    static displayName = "ThreadMembersStore";
    initialize() {
        this.waitFor(l.A);
    }
    getMemberCount(e) {
        return u[e]?.memberCount ?? null;
    }
    getMemberIdsPreview(e) {
        return u[e]?.memberIdsPreview ?? null;
    }
    getInitialOverlayState() {
        return u;
    }
}
let m = new E(a.h, {
    CONNECTION_OPEN: function (e) {
        (u = {}), e.guilds.forEach(c);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { threadMembers: t } = e;
        u = { ...t };
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        c(t);
    },
    GUILD_DELETE: function (e) {
        var t;
        let { guild: n } = e;
        (t = n.id), (u = i().omitBy(u, (e) => e.guildId === t));
    },
    CHANNEL_DELETE: function (e) {
        var t;
        let { channel: n } = e;
        (t = n.id), (u = i().omitBy(u, (e) => e.parentId === t));
    },
    THREAD_CREATE: _,
    THREAD_UPDATE: _,
    THREAD_LIST_SYNC: function (e) {
        let { threads: t } = e;
        t.forEach(d);
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let t = u[e.id];
        if (null == t) return !1;
        null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), (t.memberCount = e.memberCount);
    },
    SEARCH_MESSAGES_SUCCESS: p,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: p,
    LOAD_THREADS_SUCCESS: f,
    LOAD_ARCHIVED_THREADS_SUCCESS: f,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        delete u[t.id];
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let t = !1;
        for (let n of e.messages) t = h(n.thread) || t;
        return t;
    },
});
