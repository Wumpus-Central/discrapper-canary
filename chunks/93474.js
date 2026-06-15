n.d(t, { A: () => C });
var i = n(17928),
    l = n(228366),
    r = n(779185),
    s = n(320095),
    a = n(734057),
    E = n(232835),
    o = n(935208),
    c = n(753738),
    _ = n(877133),
    u = n(652215);
let A = {},
    T = 0,
    d = {},
    I = {},
    N = (e) => {
        null != A[e] && delete A[e], T++;
    };
function R(e) {
    let t,
        n,
        { messageData: i, errorResponseBody: l } = e;
    return (
        (n = { id: (t = (0, r.cR)(i)), isBlockedEdit: (0, r.Qn)(i), messageData: i, errorMessage: (0, c.PD)(i, l) }),
        (A[t] = n),
        T++,
        !0
    );
}
function S(e) {
    let { channelId: t, messages: n } = e,
        i = a.A.getChannel(t)?.getGuildId();
    if (null == i) return !1;
    let l = I[i],
        r = n.reduce(
            (e, t) =>
                t.type === u.lAJ.AUTO_MODERATION_ACTION &&
                t.embeds?.some((e) => {
                    let { type: t } = e;
                    return t === u.Auw.AUTO_MODERATION_NOTIFICATION;
                })
                    ? null == e || -1 === o.default.compare(e, t.id)
                        ? t.id
                        : void 0
                    : e,
            l,
        );
    return null != r && I[i] !== r && ((I[i] = r), !0);
}
class O extends i.Ay.PersistedStore {
    static displayName = "GuildAutomodMessageStore";
    static persistKey = "GuildAutomodMessages";
    initialize(e) {
        this.waitFor(a.A, E.A), null != e && ((A = e.automodFailedMessages), (d = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return { automodFailedMessages: A, mentionRaidDetectionByGuild: d, lastIncidentAlertMessage: I };
    }
    getMessage(e) {
        return null == e ? null : (A[e] ?? null);
    }
    getMessagesVersion() {
        return T;
    }
    getMentionRaidDetected(e) {
        return d[e] ?? null;
    }
    getLastIncidentAlertMessage(e) {
        return I[e] ?? null;
    }
}
let C = new O(l.h, {
    CONNECTION_OPEN: function (e) {
        return 0 !== Object.keys(A).length && ((A = {}), T++, !0);
    },
    LOAD_MESSAGES_SUCCESS: S,
    LOCAL_MESSAGES_LOADED: S,
    MESSAGE_CREATE: function (e) {
        let { guildId: t, message: n } = e;
        if (null == t || n.type !== u.lAJ.AUTO_MODERATION_ACTION) return !1;
        let i = (0, s.rh)(n);
        return !!(0, _.ER)(i) && !!(0, _.de)(i) && ((I[t] = i.id), !0);
    },
    MESSAGE_SEND_FAILED_AUTOMOD: R,
    MESSAGE_EDIT_FAILED_AUTOMOD: R,
    REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
        let { messageId: t } = e;
        return N(t), !0;
    },
    MESSAGE_END_EDIT: function (e) {
        let { response: t } = e;
        if (t?.body == null || t.body.code === u.t02.AUTOMOD_MESSAGE_BLOCKED) return !1;
        let n = t.body.id;
        if (null == n) return !1;
        N(n);
    },
    AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
        let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: i } = e;
        return (d[t] = { guildId: t, decisionId: n, suspiciousMentionActivityUntil: i }), !0;
    },
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
        let { guildId: t } = e;
        return delete d[t], !0;
    },
});
