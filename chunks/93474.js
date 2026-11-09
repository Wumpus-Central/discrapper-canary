var i = n(855986),
    r = n(73153),
    l = n(870801),
    u = n(432005),
    s = n(734057),
    o = n(596344),
    a = n(811091),
    E = n(753738),
    d = n(233444),
    _ = n(652215);
let c = {},
    R = 0,
    A = {},
    T = {};
function I(t) {
    (null != c[t] && delete c[t], R++);
}
function S(t) {
    let e,
        n,
        { messageData: i, errorResponseBody: r } = t;
    return (
        (n = { id: (e = (0, l.cR)(i)), isBlockedEdit: (0, l.Qn)(i), messageData: i, errorMessage: (0, E.PD)(i, r) }),
        (c[e] = n),
        R++,
        !0
    );
}
function h(t) {
    let { channelId: e, messages: n } = t,
        i = s.A.getChannel(e)?.getGuildId();
    if (null == i) return !1;
    let r = T[i],
        l = n.reduce(
            (t, e) =>
                e.type === _.lAJ.AUTO_MODERATION_ACTION &&
                e.embeds?.some((t) => {
                    let { type: e } = t;
                    return e === _.Auw.AUTO_MODERATION_NOTIFICATION;
                })
                    ? null == t || -1 === a.default.compare(t, e.id)
                        ? e.id
                        : void 0
                    : t,
            r,
        );
    return null != l && T[i] !== l && ((T[i] = l), !0);
}
class O extends i.Ay.PersistedStore {
    static displayName = "GuildAutomodMessageStore";
    static persistKey = "GuildAutomodMessages";
    initialize(t) {
        (this.waitFor(s.A, o.A), null != t && ((c = t.automodFailedMessages), (A = t.mentionRaidDetectionByGuild)));
    }
    getState() {
        return { automodFailedMessages: c, mentionRaidDetectionByGuild: A, lastIncidentAlertMessage: T };
    }
    getMessage(t) {
        return null == t ? null : (c[t] ?? null);
    }
    getMessagesVersion() {
        return R;
    }
    getMentionRaidDetected(t) {
        return A[t] ?? null;
    }
    getLastIncidentAlertMessage(t) {
        return T[t] ?? null;
    }
}
let f = new O(r.h, {
    CONNECTION_OPEN: function (t) {
        return 0 !== Object.keys(c).length && ((c = {}), R++, !0);
    },
    LOAD_MESSAGES_SUCCESS: h,
    LOCAL_MESSAGES_LOADED: h,
    MESSAGE_CREATE: function (t) {
        let { guildId: e, message: n } = t;
        if (null == e || n.type !== _.lAJ.AUTO_MODERATION_ACTION) return !1;
        let i = (0, u.rh)(n);
        return !!(0, d.ER)(i) && !!(0, d.de)(i) && ((T[e] = i.id), !0);
    },
    MESSAGE_SEND_FAILED_AUTOMOD: S,
    MESSAGE_EDIT_FAILED_AUTOMOD: S,
    AUTO_MODERATION_CONTENT_DELETED: function (t) {
        let { message: e, notice: n } = t;
        return (
            null != e && ((c[e.id] = { id: e.id, messageData: void 0, isBlockedEdit: !1, errorMessage: n }), R++, !0)
        );
    },
    REMOVE_AUTOMOD_MESSAGE_NOTICE: function (t) {
        let { messageId: e } = t;
        return (I(e), !0);
    },
    MESSAGE_END_EDIT: function (t) {
        let { response: e } = t;
        if (e?.body == null || e.body.code === _.t02.AUTOMOD_MESSAGE_BLOCKED) return !1;
        let n = e.body.id;
        if (null == n) return !1;
        I(n);
    },
    AUTO_MODERATION_MENTION_RAID_DETECTION: function (t) {
        let { guildId: e, decisionId: n, suspiciousMentionActivityUntil: i } = t;
        return ((A[e] = { guildId: e, decisionId: n, suspiciousMentionActivityUntil: i }), !0);
    },
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (t) {
        let { guildId: e } = t;
        return (delete A[e], !0);
    },
});
n.d(e, {}, { A: f });
