n.d(t, {
    A: () => O,
});
var r,
    i = n(311907),
    l = n(73153),
    a = n(884384),
    s = n(141468),
    o = n(734057),
    c = n(320501),
    u = n(661191),
    d = n(753738),
    p = n(785823),
    m = n(652215);

function f(e, t, n) {
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
let g = {},
    h = 0,
    _ = {},
    b = {},
    A = (e) => {
        null != g[e] && delete g[e], h++;
    };

function y(e) {
    let t,
        n,
        { messageData: r, errorResponseBody: i } = e;
    return (
        (n = {
            id: (t = (0, a.cR)(r)),
            isBlockedEdit: (0, a.Qn)(r),
            messageData: r,
            errorMessage: (0, d.PD)(r, i),
        }),
        (g[t] = n),
        h++,
        !0
    );
}

function v(e) {
    var t;
    let { channelId: n, messages: r } = e,
        i = null == (t = o.A.getChannel(n)) ? void 0 : t.getGuildId();
    if (null == i) return !1;
    let l = b[i],
        a = r.reduce((e, t) => {
            var n;
            return t.type === m.lAJ.AUTO_MODERATION_ACTION &&
                (null == (n = t.embeds)
                    ? void 0
                    : n.some((e) => {
                          let { type: t } = e;
                          return t === m.Auw.AUTO_MODERATION_NOTIFICATION;
                      }))
                ? null == e || -1 === u.default.compare(e, t.id)
                    ? t.id
                    : void 0
                : e;
        }, l);
    return null != a && b[i] !== a && ((b[i] = a), !0);
}
class x extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(o.A, c.A), null != e && ((g = e.automodFailedMessages), (_ = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: g,
            mentionRaidDetectionByGuild: _,
            lastIncidentAlertMessage: b,
        };
    }
    getMessage(e) {
        var t;
        return null == e ? null : null != (t = g[e]) ? t : null;
    }
    getMessagesVersion() {
        return h;
    }
    getMentionRaidDetected(e) {
        var t;
        return null != (t = _[e]) ? t : null;
    }
    getLastIncidentAlertMessage(e) {
        var t;
        return null != (t = b[e]) ? t : null;
    }
}
f(x, "displayName", "GuildAutomodMessageStore"), f(x, "persistKey", "GuildAutomodMessages");
let O = new x(l.h, {
    CONNECTION_OPEN: function (e) {
        return 0 !== Object.keys(g).length && ((g = {}), h++, !0);
    },
    LOAD_MESSAGES_SUCCESS: v,
    LOCAL_MESSAGES_LOADED: v,
    MESSAGE_CREATE: function (e) {
        let { guildId: t, message: n } = e;
        if (null == t || n.type !== m.lAJ.AUTO_MODERATION_ACTION) return !1;
        let r = (0, s.rh)(n);
        return !!(0, p.ER)(r) && !!(0, p.de)(r) && ((b[t] = r.id), !0);
    },
    MESSAGE_SEND_FAILED_AUTOMOD: y,
    MESSAGE_EDIT_FAILED_AUTOMOD: y,
    REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
        let { messageId: t } = e;
        return A(t), !0;
    },
    MESSAGE_END_EDIT: function (e) {
        let { response: t } = e;
        if ((null == t ? void 0 : t.body) == null || t.body.code === m.t02.AUTOMOD_MESSAGE_BLOCKED) return !1;
        let n = t.body.id;
        if (null == n) return !1;
        A(n);
    },
    AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
        let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: r } = e;
        return (
            (_[t] = {
                guildId: t,
                decisionId: n,
                suspiciousMentionActivityUntil: r,
            }),
            !0
        );
    },
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
        let { guildId: t } = e;
        return delete _[t], !0;
    },
});
