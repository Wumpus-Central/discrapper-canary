"use strict";
n.d(t, { A: () => g });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(95701),
    l = n(734057);
let d = {};
function _(e) {
    e.threads?.forEach(u);
}
function u(e) {
    if (!o.A_.has(e.type)) return !1;
    let t =
        (e.id in d ||
            (d[e.id] = {
                guildId: e.guild_id,
                parentId: e.parent_id,
                memberCount: e.memberCount ?? 0,
                memberIdsPreview: e.memberIdsPreview ?? [],
            }),
        d[e.id]);
    null != e.memberCount && (t.memberCount = e.memberCount),
        null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview);
}
function c(e) {
    let { channel: t } = e;
    return u(t);
}
function E(e) {
    let { threads: t } = e;
    t.forEach(m);
}
function h(e) {
    let { data: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            let { threads: t, messages: i } = e;
            i.forEach((e) => {
                e.forEach((e) => {
                    n = m(e.thread) || n;
                });
            }),
                t.forEach((e) => {
                    n = m(e) || n;
                });
        }),
        n
    );
}
function m(e) {
    if (null != e && !(e.id in d)) {
        let t = l.A.getChannel(e.id);
        if (null != t) return u(t), !0;
    }
    return !1;
}
class f extends s.Ay.Store {
    static displayName = "ThreadMembersStore";
    initialize() {
        this.waitFor(l.A);
    }
    getMemberCount(e) {
        return d[e]?.memberCount ?? null;
    }
    getMemberIdsPreview(e) {
        return d[e]?.memberIdsPreview ?? null;
    }
    getInitialOverlayState() {
        return d;
    }
}
let g = new f(a.h, {
    CONNECTION_OPEN: function (e) {
        (d = {}), e.guilds.forEach(_);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { threadMembers: t } = e;
        d = { ...t };
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        _(t);
    },
    GUILD_DELETE: function (e) {
        var t;
        let { guild: n } = e;
        (t = n.id), (d = r().omitBy(d, (e) => e.guildId === t));
    },
    CHANNEL_DELETE: function (e) {
        var t;
        let { channel: n } = e;
        (t = n.id), (d = r().omitBy(d, (e) => e.parentId === t));
    },
    THREAD_CREATE: c,
    THREAD_UPDATE: c,
    THREAD_LIST_SYNC: function (e) {
        let { threads: t } = e;
        t.forEach(u);
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let t = d[e.id];
        if (null == t) return !1;
        null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), (t.memberCount = e.memberCount);
    },
    SEARCH_MESSAGES_SUCCESS: h,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: h,
    LOAD_THREADS_SUCCESS: E,
    LOAD_ARCHIVED_THREADS_SUCCESS: E,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        delete d[t.id];
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let t = !1;
        for (let n of e.messages) t = m(n.thread) || t;
        return t;
    },
});
