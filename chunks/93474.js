l.d(t, { A: () => N });
var n = l(17928),
    i = l(228366),
    r = l(884384),
    s = l(320095),
    a = l(734057),
    u = l(232835),
    o = l(935208),
    c = l(753738),
    d = l(877133),
    E = l(652215);
let h = {},
    _ = 0,
    T = {},
    A = {},
    S = (e) => {
        null != h[e] && delete h[e], _++;
    };
function I(e) {
    let t,
        l,
        { messageData: n, errorResponseBody: i } = e;
    return (
        (l = { id: (t = (0, r.cR)(n)), isBlockedEdit: (0, r.Qn)(n), messageData: n, errorMessage: (0, c.PD)(n, i) }),
        (h[t] = l),
        _++,
        !0
    );
}
function p(e) {
    let { channelId: t, messages: l } = e,
        n = a.A.getChannel(t)?.getGuildId();
    if (null == n) return !1;
    let i = A[n],
        r = l.reduce(
            (e, t) =>
                t.type === E.lAJ.AUTO_MODERATION_ACTION &&
                t.embeds?.some((e) => {
                    let { type: t } = e;
                    return t === E.Auw.AUTO_MODERATION_NOTIFICATION;
                })
                    ? null == e || -1 === o.default.compare(e, t.id)
                        ? t.id
                        : void 0
                    : e,
            i,
        );
    return null != r && A[n] !== r && ((A[n] = r), !0);
}
class f extends n.Ay.PersistedStore {
    static displayName = "GuildAutomodMessageStore";
    static persistKey = "GuildAutomodMessages";
    initialize(e) {
        this.waitFor(a.A, u.A), null != e && ((h = e.automodFailedMessages), (T = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return { automodFailedMessages: h, mentionRaidDetectionByGuild: T, lastIncidentAlertMessage: A };
    }
    getMessage(e) {
        return null == e ? null : (h[e] ?? null);
    }
    getMessagesVersion() {
        return _;
    }
    getMentionRaidDetected(e) {
        return T[e] ?? null;
    }
    getLastIncidentAlertMessage(e) {
        return A[e] ?? null;
    }
}
let N = new f(i.h, {
    CONNECTION_OPEN: function (e) {
        return 0 !== Object.keys(h).length && ((h = {}), _++, !0);
    },
    LOAD_MESSAGES_SUCCESS: p,
    LOCAL_MESSAGES_LOADED: p,
    MESSAGE_CREATE: function (e) {
        let { guildId: t, message: l } = e;
        if (null == t || l.type !== E.lAJ.AUTO_MODERATION_ACTION) return !1;
        let n = (0, s.rh)(l);
        return !!(0, d.ER)(n) && !!(0, d.de)(n) && ((A[t] = n.id), !0);
    },
    MESSAGE_SEND_FAILED_AUTOMOD: I,
    MESSAGE_EDIT_FAILED_AUTOMOD: I,
    REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
        let { messageId: t } = e;
        return S(t), !0;
    },
    MESSAGE_END_EDIT: function (e) {
        let { response: t } = e;
        if (t?.body == null || t.body.code === E.t02.AUTOMOD_MESSAGE_BLOCKED) return !1;
        let l = t.body.id;
        if (null == l) return !1;
        S(l);
    },
    AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
        let { guildId: t, decisionId: l, suspiciousMentionActivityUntil: n } = e;
        return (T[t] = { guildId: t, decisionId: l, suspiciousMentionActivityUntil: n }), !0;
    },
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
        let { guildId: t } = e;
        return delete T[t], !0;
    },
});
