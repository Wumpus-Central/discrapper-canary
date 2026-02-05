"use strict";
n.d(t, { A: () => y });
var r = n(311907),
    i = n(73153),
    a = n(734057),
    s = n(320501),
    o = n(661191);
let l = {},
    u = {},
    c = {};
function d(e) {
    let { channel: t, message: n, shouldMention: r = !0, showMentionToggle: i = !0, source: a } = e;
    (l[t.id] = { channel: t, message: n, shouldMention: r, showMentionToggle: i }), (c[t.id] = a);
}
function _(e) {
    let { channel: t, messageId: n, shouldMention: r = !0, showMentionToggle: i = !0 } = e;
    u[t.id] = { channelId: t.id, messageId: n, shouldMention: r, showMentionToggle: i };
}
function f(e) {
    let { channelId: t, shouldMention: n } = e;
    t in l && (l[t] = { ...l[t], shouldMention: n }), t in u && (u[t] = { ...u[t], shouldMention: n });
}
function p(e) {
    let { channelId: t } = e;
    delete l[t], delete u[t];
}
function h(e) {
    let { id: t, channelId: n } = e;
    if (l[n]?.message?.id === t) delete l[n], delete c[n];
    else {
        if (u[n]?.messageId !== t) return !1;
        delete u[n], delete c[n];
    }
}
function m(e) {
    if (null == e) return !1;
    let t = u[e];
    if (null == t) return !1;
    let n = s.A.getMessage(e, t.messageId),
        r = a.A.getChannel(t.channelId);
    if (null == n || null == r) return !1;
    (l[e] = { channel: r, message: n, shouldMention: t.shouldMention, showMentionToggle: t.showMentionToggle }),
        delete u[e];
}
function g(e) {
    let { channelId: t } = e;
    m(t);
}
function E(e) {
    let { channelId: t } = e;
    m(t);
}
function A() {
    o.default.keys(u).forEach((e) => {
        null == a.A.getChannel(e) && delete u[e];
    });
}
function I() {
    (l = {}), (u = {}), (c = {});
}
class T extends r.Ay.PersistedStore {
    static displayName = "PendingReplyStore";
    static persistKey = "PendingReplyStore";
    static migrations = [(e) => e ?? {}];
    getState() {
        let e = {};
        for (let [t, n] of o.default.entries(l))
            e[t] = {
                channelId: t,
                messageId: n.message.id,
                shouldMention: n.shouldMention,
                showMentionToggle: n.showMentionToggle,
            };
        return { ...u, ...e };
    }
    initialize(e) {
        this.waitFor(s.A, a.A), (u = e ?? {});
    }
    getPendingReply(e) {
        return l[e];
    }
    getPendingReplyActionSource(e) {
        return c[e];
    }
}
let y = new T(i.h, {
    CREATE_PENDING_REPLY: d,
    CREATE_SHALLOW_PENDING_REPLY: _,
    SET_PENDING_REPLY_SHOULD_MENTION: f,
    DELETE_PENDING_REPLY: p,
    CONNECTION_OPEN: A,
    LOGOUT: I,
    MESSAGE_DELETE: h,
    CHANNEL_SELECT: g,
    LOAD_MESSAGES_SUCCESS: E,
});
