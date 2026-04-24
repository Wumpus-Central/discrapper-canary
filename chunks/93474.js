n.d(t, { A: () => O });
var i = n(17928),
    l = n(228366),
    r = n(884384),
    a = n(320095),
    o = n(734057),
    s = n(232835),
    u = n(935208),
    d = n(753738),
    c = n(877133),
    E = n(652215);
let _ = {},
    A = 0,
    I = {},
    h = {},
    T = (e) => {
        null != _[e] && delete _[e], A++;
    };
function S(e) {
    let t,
        n,
        { messageData: i, errorResponseBody: l } = e;
    return (
        (n = { id: (t = (0, r.cR)(i)), isBlockedEdit: (0, r.Qn)(i), messageData: i, errorMessage: (0, d.PD)(i, l) }),
        (_[t] = n),
        A++,
        !0
    );
}
function p(e) {
    let { channelId: t, messages: n } = e,
        i = o.A.getChannel(t)?.getGuildId();
    if (null == i) return !1;
    let l = h[i],
        r = n.reduce(
            (e, t) =>
                t.type === E.lAJ.AUTO_MODERATION_ACTION &&
                t.embeds?.some((e) => {
                    let { type: t } = e;
                    return t === E.Auw.AUTO_MODERATION_NOTIFICATION;
                })
                    ? null == e || -1 === u.default.compare(e, t.id)
                        ? t.id
                        : void 0
                    : e,
            l,
        );
    return null != r && h[i] !== r && ((h[i] = r), !0);
}
class N extends i.Ay.PersistedStore {
    static displayName = "GuildAutomodMessageStore";
    static persistKey = "GuildAutomodMessages";
    initialize(e) {
        this.waitFor(o.A, s.A), null != e && ((_ = e.automodFailedMessages), (I = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return { automodFailedMessages: _, mentionRaidDetectionByGuild: I, lastIncidentAlertMessage: h };
    }
    getMessage(e) {
        return null == e ? null : (_[e] ?? null);
    }
    getMessagesVersion() {
        return A;
    }
    getMentionRaidDetected(e) {
        return I[e] ?? null;
    }
    getLastIncidentAlertMessage(e) {
        return h[e] ?? null;
    }
}
let O = new N(l.h, {
    CONNECTION_OPEN: function (e) {
        return 0 !== Object.keys(_).length && ((_ = {}), A++, !0);
    },
    LOAD_MESSAGES_SUCCESS: p,
    LOCAL_MESSAGES_LOADED: p,
    MESSAGE_CREATE: function (e) {
        let { guildId: t, message: n } = e;
        if (null == t || n.type !== E.lAJ.AUTO_MODERATION_ACTION) return !1;
        let i = (0, a.rh)(n);
        return !!(0, c.ER)(i) && !!(0, c.de)(i) && ((h[t] = i.id), !0);
    },
    MESSAGE_SEND_FAILED_AUTOMOD: S,
    MESSAGE_EDIT_FAILED_AUTOMOD: S,
    REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
        let { messageId: t } = e;
        return T(t), !0;
    },
    MESSAGE_END_EDIT: function (e) {
        let { response: t } = e;
        if (t?.body == null || t.body.code === E.t02.AUTOMOD_MESSAGE_BLOCKED) return !1;
        let n = t.body.id;
        if (null == n) return !1;
        T(n);
    },
    AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
        let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: i } = e;
        return (I[t] = { guildId: t, decisionId: n, suspiciousMentionActivityUntil: i }), !0;
    },
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
        let { guildId: t } = e;
        return delete I[t], !0;
    },
});
