"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    s = n(734057),
    a = n(232835),
    o = n(935208);
let l = {},
    u = {},
    c = {};
function d(e) {
    if (null == e) return !1;
    let t = u[e];
    if (null == t) return !1;
    let n = a.A.getMessage(e, t.messageId),
        i = s.A.getChannel(t.channelId);
    if (null == n || null == i) return !1;
    (l[e] = { channel: i, message: n, shouldMention: t.shouldMention, showMentionToggle: t.showMentionToggle }),
        delete u[e];
}
class _ extends i.Ay.PersistedStore {
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
        return c[e];
    }
}
let h = new _(r.h, {
    CREATE_PENDING_REPLY: function (e) {
        let {
            channel: t,
            message: n,
            shouldMention: i = !0,
            showMentionToggle: r = !0,
            source: s,
            mediaMention: a,
        } = e;
        (l[t.id] = { channel: t, message: n, shouldMention: i, showMentionToggle: r, mediaMention: a }), (c[t.id] = s);
    },
    CREATE_SHALLOW_PENDING_REPLY: function (e) {
        let { channel: t, messageId: n, shouldMention: i = !0, showMentionToggle: r = !0 } = e;
        u[t.id] = { channelId: t.id, messageId: n, shouldMention: i, showMentionToggle: r };
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
        (l = {}), (u = {}), (c = {});
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e;
        if (l[n]?.message?.id === t) delete l[n], delete c[n];
        else {
            if (u[n]?.messageId !== t) return !1;
            delete u[n], delete c[n];
        }
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        d(t);
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t } = e;
        d(t);
    },
});
