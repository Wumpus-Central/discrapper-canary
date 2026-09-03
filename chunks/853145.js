n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366),
    a = n(734057),
    s = n(232835),
    l = n(935208);
let o = {},
    d = {},
    c = {};
function u(e) {
    if (null == e) return !1;
    let t = d[e];
    if (null == t) return !1;
    let n = s.A.getMessage(e, t.messageId),
        i = a.A.getChannel(t.channelId);
    if (null == n || null == i) return !1;
    (o[e] = { channel: i, message: n, shouldMention: t.shouldMention, showMentionToggle: t.showMentionToggle }),
        delete d[e];
}
class _ extends i.Ay.PersistedStore {
    static displayName = "PendingReplyStore";
    static persistKey = "PendingReplyStore";
    static migrations = [(e) => e ?? {}];
    getState() {
        let e = {};
        for (let [t, n] of l.default.entries(o))
            e[t] = {
                channelId: t,
                messageId: n.message.id,
                shouldMention: n.shouldMention,
                showMentionToggle: n.showMentionToggle,
            };
        return { ...d, ...e };
    }
    initialize(e) {
        this.waitFor(s.A, a.A), (d = e ?? {});
    }
    getPendingReply(e) {
        return o[e];
    }
    getPendingReplyActionSource(e) {
        return c[e];
    }
}
let E = new _(r.h, {
    CREATE_PENDING_REPLY: function (e) {
        let {
            channel: t,
            message: n,
            shouldMention: i = !0,
            showMentionToggle: r = !0,
            source: a,
            mediaMention: s,
        } = e;
        (o[t.id] = { channel: t, message: n, shouldMention: i, showMentionToggle: r, mediaMention: s }), (c[t.id] = a);
    },
    CREATE_SHALLOW_PENDING_REPLY: function (e) {
        let { channel: t, messageId: n, shouldMention: i = !0, showMentionToggle: r = !0 } = e;
        d[t.id] = { channelId: t.id, messageId: n, shouldMention: i, showMentionToggle: r };
    },
    SET_PENDING_REPLY_SHOULD_MENTION: function (e) {
        let { channelId: t, shouldMention: n } = e;
        t in o && (o[t] = { ...o[t], shouldMention: n }), t in d && (d[t] = { ...d[t], shouldMention: n });
    },
    DELETE_PENDING_REPLY: function (e) {
        let { channelId: t } = e;
        delete o[t], delete d[t];
    },
    CONNECTION_OPEN: function () {
        l.default.keys(d).forEach((e) => {
            null == a.A.getChannel(e) && delete d[e];
        });
    },
    LOGOUT: function () {
        (o = {}), (d = {}), (c = {});
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e;
        if (o[n]?.message?.id === t) delete o[n], delete c[n];
        else {
            if (d[n]?.messageId !== t) return !1;
            delete d[n], delete c[n];
        }
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        u(t);
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t } = e;
        u(t);
    },
});
