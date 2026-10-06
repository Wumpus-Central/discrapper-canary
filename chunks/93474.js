n.d(e, { A: () => f });
var i = n(17928),
    l = n(73153),
    r = n(779185),
    s = n(320095),
    a = n(734057),
    u = n(232835),
    o = n(935208),
    d = n(753738),
    c = n(877133),
    E = n(652215);
let _ = {},
    A = 0,
    R = {},
    h = {};
function T(t) {
    (null != _[t] && delete _[t], A++);
}
function I(t) {
    let e,
        n,
        { messageData: i, errorResponseBody: l } = t;
    return (
        (n = { id: (e = (0, r.cR)(i)), isBlockedEdit: (0, r.Qn)(i), messageData: i, errorMessage: (0, d.PD)(i, l) }),
        (_[e] = n),
        A++,
        !0
    );
}
function O(t) {
    let { channelId: e, messages: n } = t,
        i = a.A.getChannel(e)?.getGuildId();
    if (null == i) return !1;
    let l = h[i],
        r = n.reduce(
            (t, e) =>
                e.type === E.lAJ.AUTO_MODERATION_ACTION &&
                e.embeds?.some((t) => {
                    let { type: e } = t;
                    return e === E.Auw.AUTO_MODERATION_NOTIFICATION;
                })
                    ? null == t || -1 === o.default.compare(t, e.id)
                        ? e.id
                        : void 0
                    : t,
            l,
        );
    return null != r && h[i] !== r && ((h[i] = r), !0);
}
class S extends i.Ay.PersistedStore {
    static displayName = "GuildAutomodMessageStore";
    static persistKey = "GuildAutomodMessages";
    initialize(t) {
        (this.waitFor(a.A, u.A), null != t && ((_ = t.automodFailedMessages), (R = t.mentionRaidDetectionByGuild)));
    }
    getState() {
        return { automodFailedMessages: _, mentionRaidDetectionByGuild: R, lastIncidentAlertMessage: h };
    }
    getMessage(t) {
        return null == t ? null : (_[t] ?? null);
    }
    getMessagesVersion() {
        return A;
    }
    getMentionRaidDetected(t) {
        return R[t] ?? null;
    }
    getLastIncidentAlertMessage(t) {
        return h[t] ?? null;
    }
}
let f = new S(l.h, {
    CONNECTION_OPEN: function (t) {
        return 0 !== Object.keys(_).length && ((_ = {}), A++, !0);
    },
    LOAD_MESSAGES_SUCCESS: O,
    LOCAL_MESSAGES_LOADED: O,
    MESSAGE_CREATE: function (t) {
        let { guildId: e, message: n } = t;
        if (null == e || n.type !== E.lAJ.AUTO_MODERATION_ACTION) return !1;
        let i = (0, s.rh)(n);
        return !!(0, c.ER)(i) && !!(0, c.de)(i) && ((h[e] = i.id), !0);
    },
    MESSAGE_SEND_FAILED_AUTOMOD: I,
    MESSAGE_EDIT_FAILED_AUTOMOD: I,
    AUTO_MODERATION_CONTENT_DELETED: function (t) {
        let { message: e, notice: n } = t;
        return (
            null != e && ((_[e.id] = { id: e.id, messageData: void 0, isBlockedEdit: !1, errorMessage: n }), A++, !0)
        );
    },
    REMOVE_AUTOMOD_MESSAGE_NOTICE: function (t) {
        let { messageId: e } = t;
        return (T(e), !0);
    },
    MESSAGE_END_EDIT: function (t) {
        let { response: e } = t;
        if (e?.body == null || e.body.code === E.t02.AUTOMOD_MESSAGE_BLOCKED) return !1;
        let n = e.body.id;
        if (null == n) return !1;
        T(n);
    },
    AUTO_MODERATION_MENTION_RAID_DETECTION: function (t) {
        let { guildId: e, decisionId: n, suspiciousMentionActivityUntil: i } = t;
        return ((R[e] = { guildId: e, decisionId: n, suspiciousMentionActivityUntil: i }), !0);
    },
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (t) {
        let { guildId: e } = t;
        return (delete R[e], !0);
    },
});
