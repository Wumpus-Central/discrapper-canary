"use strict";
n.d(t, { A: () => O });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(95701),
    l = n(734057);
let u = {};
function c(e) {
    u = i().omitBy(u, (t) => t.guildId === e);
}
function d(e) {
    u = i().omitBy(u, (t) => t.parentId === e);
}
function _(e) {
    e.threads?.forEach(p);
}
function f(e) {
    return (
        e.id in u ||
            (u[e.id] = {
                guildId: e.guild_id,
                parentId: e.parent_id,
                memberCount: e.memberCount ?? 0,
                memberIdsPreview: e.memberIdsPreview ?? [],
            }),
        u[e.id]
    );
}
function p(e) {
    if (!o.A_.has(e.type)) return !1;
    let t = f(e);
    null != e.memberCount && (t.memberCount = e.memberCount),
        null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview);
}
function h(e) {
    (u = {}), e.guilds.forEach(_);
}
function m(e) {
    let { threadMembers: t } = e;
    u = { ...t };
}
function g(e) {
    let { guild: t } = e;
    _(t);
}
function E(e) {
    let { guild: t } = e;
    c(t.id);
}
function A(e) {
    let { channel: t } = e;
    return p(t);
}
function I(e) {
    let { threads: t } = e;
    t.forEach(p);
}
function T(e) {
    let { threads: t } = e;
    t.forEach(b);
}
function y(e) {
    let { channel: t } = e;
    d(t.id);
}
function S(e) {
    let { channel: t } = e;
    delete u[t.id];
}
function v(e) {
    let t = !1;
    for (let n of e.messages) t = b(n.thread) || t;
    return t;
}
function C(e) {
    let { data: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            let { threads: t, messages: r } = e;
            r.forEach((e) => {
                e.forEach((e) => {
                    n = b(e.thread) || n;
                });
            }),
                t.forEach((e) => {
                    n = b(e) || n;
                });
        }),
        n
    );
}
function b(e) {
    if (null != e && !(e.id in u)) {
        let t = l.A.getChannel(e.id);
        if (null != t) return p(t), !0;
    }
    return !1;
}
function N(e) {
    let t = u[e.id];
    if (null == t) return !1;
    null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), (t.memberCount = e.memberCount);
}
class R extends a.Ay.Store {
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
let O = new R(s.h, {
    CONNECTION_OPEN: h,
    OVERLAY_INITIALIZE: m,
    GUILD_CREATE: g,
    GUILD_DELETE: E,
    CHANNEL_DELETE: y,
    THREAD_CREATE: A,
    THREAD_UPDATE: A,
    THREAD_LIST_SYNC: I,
    THREAD_MEMBERS_UPDATE: N,
    SEARCH_MESSAGES_SUCCESS: C,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: C,
    LOAD_THREADS_SUCCESS: T,
    LOAD_ARCHIVED_THREADS_SUCCESS: T,
    THREAD_DELETE: S,
    LOAD_MESSAGES_SUCCESS: v,
});
