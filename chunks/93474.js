"use strict";
n.d(t, { A: () => T });
var i = n(17928),
    r = n(228366),
    s = n(779185),
    a = n(320095),
    o = n(734057),
    l = n(232835),
    u = n(935208),
    c = n(753738),
    d = n(877133),
    _ = n(652215);
let f = {},
    h = 0,
    p = {},
    E = {},
    m = (e) => {
        null != f[e] && delete f[e], h++;
    };
function g(e) {
    let t,
        n,
        { messageData: i, errorResponseBody: r } = e;
    return (
        (n = { id: (t = (0, s.cR)(i)), isBlockedEdit: (0, s.Qn)(i), messageData: i, errorMessage: (0, c.PD)(i, r) }),
        (f[t] = n),
        h++,
        !0
    );
}
function A(e) {
    let { channelId: t, messages: n } = e,
        i = o.A.getChannel(t)?.getGuildId();
    if (null == i) return !1;
    let r = E[i],
        s = n.reduce(
            (e, t) =>
                t.type === _.lAJ.AUTO_MODERATION_ACTION &&
                t.embeds?.some((e) => {
                    let { type: t } = e;
                    return t === _.Auw.AUTO_MODERATION_NOTIFICATION;
                })
                    ? null == e || -1 === u.default.compare(e, t.id)
                        ? t.id
                        : void 0
                    : e,
            r,
        );
    return null != s && E[i] !== s && ((E[i] = s), !0);
}
class I extends i.Ay.PersistedStore {
    static displayName = "GuildAutomodMessageStore";
    static persistKey = "GuildAutomodMessages";
    initialize(e) {
        this.waitFor(o.A, l.A), null != e && ((f = e.automodFailedMessages), (p = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return { automodFailedMessages: f, mentionRaidDetectionByGuild: p, lastIncidentAlertMessage: E };
    }
    getMessage(e) {
        return null == e ? null : (f[e] ?? null);
    }
    getMessagesVersion() {
        return h;
    }
    getMentionRaidDetected(e) {
        return p[e] ?? null;
    }
    getLastIncidentAlertMessage(e) {
        return E[e] ?? null;
    }
}
let T = new I(r.h, {
    CONNECTION_OPEN: function (e) {
        return 0 !== Object.keys(f).length && ((f = {}), h++, !0);
    },
    LOAD_MESSAGES_SUCCESS: A,
    LOCAL_MESSAGES_LOADED: A,
    MESSAGE_CREATE: function (e) {
        let { guildId: t, message: n } = e;
        if (null == t || n.type !== _.lAJ.AUTO_MODERATION_ACTION) return !1;
        let i = (0, a.rh)(n);
        return !!(0, d.ER)(i) && !!(0, d.de)(i) && ((E[t] = i.id), !0);
    },
    MESSAGE_SEND_FAILED_AUTOMOD: g,
    MESSAGE_EDIT_FAILED_AUTOMOD: g,
    REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
        let { messageId: t } = e;
        return m(t), !0;
    },
    MESSAGE_END_EDIT: function (e) {
        let { response: t } = e;
        if (t?.body == null || t.body.code === _.t02.AUTOMOD_MESSAGE_BLOCKED) return !1;
        let n = t.body.id;
        if (null == n) return !1;
        m(n);
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
