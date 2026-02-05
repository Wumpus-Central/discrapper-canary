n.d(t, { A: () => C });
var i = n(311907),
    l = n(73153),
    a = n(884384),
    r = n(141468),
    s = n(734057),
    o = n(320501),
    d = n(661191),
    c = n(753738),
    u = n(785823),
    m = n(652215);
let _ = {},
    h = 0,
    p = {},
    g = {},
    A = (e) => {
        null != _[e] && delete _[e], h++;
    };
function f(e) {
    let t,
        n,
        { messageData: i, errorResponseBody: l } = e;
    return (
        (n = { id: (t = (0, a.cR)(i)), isBlockedEdit: (0, a.Qn)(i), messageData: i, errorMessage: (0, c.PD)(i, l) }),
        (_[t] = n),
        h++,
        !0
    );
}
function x(e) {
    let { channelId: t, messages: n } = e,
        i = s.A.getChannel(t)?.getGuildId();
    if (null == i) return !1;
    let l = g[i],
        a = n.reduce(
            (e, t) =>
                t.type === m.lAJ.AUTO_MODERATION_ACTION &&
                t.embeds?.some((e) => {
                    let { type: t } = e;
                    return t === m.Auw.AUTO_MODERATION_NOTIFICATION;
                })
                    ? null == e || -1 === d.default.compare(e, t.id)
                        ? t.id
                        : void 0
                    : e,
            l,
        );
    return null != a && g[i] !== a && ((g[i] = a), !0);
}
class E extends i.Ay.PersistedStore {
    static displayName = "GuildAutomodMessageStore";
    static persistKey = "GuildAutomodMessages";
    initialize(e) {
        this.waitFor(s.A, o.A), null != e && ((_ = e.automodFailedMessages), (p = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return { automodFailedMessages: _, mentionRaidDetectionByGuild: p, lastIncidentAlertMessage: g };
    }
    getMessage(e) {
        return null == e ? null : (_[e] ?? null);
    }
    getMessagesVersion() {
        return h;
    }
    getMentionRaidDetected(e) {
        return p[e] ?? null;
    }
    getLastIncidentAlertMessage(e) {
        return g[e] ?? null;
    }
}
let C = new E(l.h, {
    CONNECTION_OPEN: function (e) {
        return 0 !== Object.keys(_).length && ((_ = {}), h++, !0);
    },
    LOAD_MESSAGES_SUCCESS: x,
    LOCAL_MESSAGES_LOADED: x,
    MESSAGE_CREATE: function (e) {
        let { guildId: t, message: n } = e;
        if (null == t || n.type !== m.lAJ.AUTO_MODERATION_ACTION) return !1;
        let i = (0, r.rh)(n);
        return !!(0, u.ER)(i) && !!(0, u.de)(i) && ((g[t] = i.id), !0);
    },
    MESSAGE_SEND_FAILED_AUTOMOD: f,
    MESSAGE_EDIT_FAILED_AUTOMOD: f,
    REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
        let { messageId: t } = e;
        return A(t), !0;
    },
    MESSAGE_END_EDIT: function (e) {
        let { response: t } = e;
        if (t?.body == null || t.body.code === m.t02.AUTOMOD_MESSAGE_BLOCKED) return !1;
        let n = t.body.id;
        if (null == n) return !1;
        A(n);
    },
    AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
        let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: i } = e;
        return (p[t] = { guildId: t, decisionId: n, suspiciousMentionActivityUntil: i }), !0;
    },
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
        let { guildId: t } = e;
        return delete p[t], !0;
    },
});
