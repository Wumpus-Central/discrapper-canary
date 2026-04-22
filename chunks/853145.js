"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(73153),
    s = n(734057),
    a = n(320501),
    o = n(661191);
let l = {},
    u = {},
    d = {};
function c(e) {
    if (null == e) return !1;
    let t = u[e];
    if (null == t) return !1;
    let n = a.A.getMessage(e, t.messageId),
        r = s.A.getChannel(t.channelId);
    if (null == n || null == r) return !1;
    (l[e] = { channel: r, message: n, shouldMention: t.shouldMention, showMentionToggle: t.showMentionToggle }),
        delete u[e];
}
class _ extends r.Ay.PersistedStore {
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
        this.waitFor(a.A, s.A), (u = e ?? {});
    }
    getPendingReply(e) {
        return l[e];
    }
    getPendingReplyActionSource(e) {
        return d[e];
    }
}
let f = new _(i.h, {
    CREATE_PENDING_REPLY: function (e) {
        let { channel: t, message: n, shouldMention: r = !0, showMentionToggle: i = !0, source: s } = e;
        (l[t.id] = { channel: t, message: n, shouldMention: r, showMentionToggle: i }), (d[t.id] = s);
    },
    CREATE_SHALLOW_PENDING_REPLY: function (e) {
        let { channel: t, messageId: n, shouldMention: r = !0, showMentionToggle: i = !0 } = e;
        u[t.id] = { channelId: t.id, messageId: n, shouldMention: r, showMentionToggle: i };
    },
    SET_PENDING_REPLY_SHOULD_MENTION: function (e) {
        let { channelId: t, shouldMention: n } = e;
        t in l && (l[t] = { ...l[t], shouldMention: n }), t in u && (u[t] = { ...u[t], shouldMention: n });
    },
    DELETE_PENDING_REPLY: function (e) {
        let { channelId: t } = e;
        delete l[t], delete u[t];
    },
    CONNECTION_OPEN: function () {
        o.default.keys(u).forEach((e) => {
            null == s.A.getChannel(e) && delete u[e];
        });
    },
    LOGOUT: function () {
        (l = {}), (u = {}), (d = {});
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e;
        if (l[n]?.message?.id === t) delete l[n], delete d[n];
        else {
            if (u[n]?.messageId !== t) return !1;
            delete u[n], delete d[n];
        }
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        c(t);
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t } = e;
        c(t);
    },
});
