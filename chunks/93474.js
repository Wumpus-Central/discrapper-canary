n.d(t, { A: () => P });
var r,
    i = n(311907),
    a = n(73153),
    s = n(884384),
    o = n(141468),
    l = n(734057),
    c = n(320501),
    u = n(661191),
    d = n(753738),
    f = n(785823),
    p = n(652215);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let h = {},
    m = 0,
    g = {},
    E = {},
    b = (e, t) => {
        let n = (0, s.cR)(e),
            r = {
                id: n,
                isBlockedEdit: (0, s.Qn)(e),
                messageData: e,
                errorMessage: (0, d.PD)(e, t),
            };
        (h[n] = r), m++;
    },
    y = (e) => h[e],
    O = (e) => {
        null != h[e] && delete h[e], m++;
    };
function A(e) {
    return 0 !== Object.keys(h).length && ((h = {}), m++, !0);
}
function v(e) {
    let { messageData: t, errorResponseBody: n } = e;
    return b(t, n), !0;
}
function S(e) {
    let { messageId: t } = e;
    return O(t), !0;
}
function I(e) {
    let { response: t } = e;
    if ((null == t ? void 0 : t.body) == null || t.body.code === p.t02.AUTOMOD_MESSAGE_BLOCKED) return !1;
    let n = t.body.id;
    if (null == n) return !1;
    O(n);
}
function T(e) {
    let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: r } = e;
    return (
        (g[t] = {
            guildId: t,
            decisionId: n,
            suspiciousMentionActivityUntil: r,
        }),
        !0
    );
}
function C(e) {
    let { guildId: t } = e;
    return delete g[t], !0;
}
function N(e) {
    let { guildId: t, message: n } = e;
    if (null == t || n.type !== p.lAJ.AUTO_MODERATION_ACTION) return !1;
    let r = (0, o.rh)(n);
    return !!(0, f.ER)(r) && !!(0, f.de)(r) && ((E[t] = r.id), !0);
}
function R(e) {
    var t;
    let { channelId: n, messages: r } = e,
        i = null == (t = l.A.getChannel(n)) ? void 0 : t.getGuildId();
    if (null == i) return !1;
    let a = E[i],
        s = r.reduce((e, t) => {
            var n;
            return t.type === p.lAJ.AUTO_MODERATION_ACTION &&
                (null == (n = t.embeds)
                    ? void 0
                    : n.some((e) => {
                          let { type: t } = e;
                          return t === p.Auw.AUTO_MODERATION_NOTIFICATION;
                      }))
                ? null == e || -1 === u.default.compare(e, t.id)
                    ? t.id
                    : void 0
                : e;
        }, a);
    return null != s && E[i] !== s && ((E[i] = s), !0);
}
class w extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(l.A, c.A), null != e && ((h = e.automodFailedMessages), (g = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: h,
            mentionRaidDetectionByGuild: g,
            lastIncidentAlertMessage: E,
        };
    }
    getMessage(e) {
        var t;
        return null == e ? null : null != (t = y(e)) ? t : null;
    }
    getMessagesVersion() {
        return m;
    }
    getMentionRaidDetected(e) {
        var t;
        return null != (t = g[e]) ? t : null;
    }
    getLastIncidentAlertMessage(e) {
        var t;
        return null != (t = E[e]) ? t : null;
    }
}
_(w, "displayName", "GuildAutomodMessageStore"), _(w, "persistKey", "GuildAutomodMessages");
let P = new w(a.h, {
    CONNECTION_OPEN: A,
    LOAD_MESSAGES_SUCCESS: R,
    LOCAL_MESSAGES_LOADED: R,
    MESSAGE_CREATE: N,
    MESSAGE_SEND_FAILED_AUTOMOD: v,
    MESSAGE_EDIT_FAILED_AUTOMOD: v,
    REMOVE_AUTOMOD_MESSAGE_NOTICE: S,
    MESSAGE_END_EDIT: I,
    AUTO_MODERATION_MENTION_RAID_DETECTION: T,
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: C,
});
