"use strict";
n.d(t, { A: () => m });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
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
function h(e) {
    let { threads: t } = e;
    t.forEach(p);
}
function f(e) {
    let { data: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            let { threads: t, messages: i } = e;
            i.forEach((e) => {
                e.forEach((e) => {
                    n = p(e.thread) || n;
                });
            }),
                t.forEach((e) => {
                    n = p(e) || n;
                });
        }),
        n
    );
}
function p(e) {
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
        (t = n.id), (u = r().omitBy(u, (e) => e.guildId === t));
    },
    CHANNEL_DELETE: function (e) {
        var t;
        let { channel: n } = e;
        (t = n.id), (u = r().omitBy(u, (e) => e.parentId === t));
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
    SEARCH_MESSAGES_SUCCESS: f,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: f,
    LOAD_THREADS_SUCCESS: h,
    LOAD_ARCHIVED_THREADS_SUCCESS: h,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        delete u[t.id];
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let t = !1;
        for (let n of e.messages) t = p(n.thread) || t;
        return t;
    },
});
