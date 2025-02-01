n.d(t, {
    FL: () => k,
    Mq: () => P,
    NK: () => B,
    OP: () => y,
    Sw: () => F,
    ZP: () => G,
    ge: () => Z,
    hU: () => w,
    nY: () => v,
    nj: () => V
}),
    n(47120);
var i = n(192379),
    r = n(462382),
    a = n(259346),
    s = n(436817),
    o = n(189722),
    l = n(721355),
    u = n(999923),
    c = n(729917),
    d = n(932019),
    f = n(442837),
    _ = n(592125),
    p = n(496675);
n(594174);
var h = n(313889),
    m = n(177862),
    g = n(981631),
    E = n(388032);
function v(e) {
    return e.type === g.uaV.AUTO_MODERATION_ACTION;
}
function y(e) {
    var t;
    return null === (t = e.embeds) || void 0 === t
        ? void 0
        : t.some((e) => {
              let { type: t } = e;
              return t === g.hBH.AUTO_MODERATION_NOTIFICATION;
          });
}
function I(e) {
    return e.type === g.hBH.AUTO_MODERATION_NOTIFICATION;
}
function T(e) {
    return e.type === g.hBH.AUTO_MODERATION_MESSAGE;
}
function b(e, t) {
    var n, i, r, a, s;
    let [o] = null !== (n = e.embeds) && void 0 !== n ? n : [];
    return null == o
        ? void 0
        : T(o)
          ? null == o
              ? void 0
              : null === (r = o.fields) || void 0 === r
                ? void 0
                : null ===
                        (i = r.find((e) => {
                            let { rawName: n } = e;
                            return n === t;
                        })) || void 0 === i
                  ? void 0
                  : i.rawValue
          : I(o)
            ? null == o
                ? void 0
                : null === (s = o.fields) || void 0 === s
                  ? void 0
                  : null ===
                          (a = s.find((e) => {
                              let { rawName: n } = e;
                              return n === t;
                          })) || void 0 === a
                    ? void 0
                    : a.rawValue
            : void 0;
}
function S(e) {
    var t, n;
    let [i] = null !== (t = e.embeds) && void 0 !== t ? t : [];
    return null !== (n = null == i ? void 0 : i.rawDescription) && void 0 !== n ? n : '';
}
function A(e) {
    let t = b(e, o.G.DECISION_OUTCOME);
    if (null != t) return t;
}
function N(e) {
    let t = b(e, o.G.QUARANTINE_USER);
    if (null != t) return t;
}
function C(e) {
    let t = b(e, o.G.QUARANTINE_USER_ACTION);
    if (null != t) return t;
}
function R(e) {
    let t = b(e, o.G.BLOCK_PROFILE_UPDATE_TYPE);
    if (null != t) return t;
}
function O(e) {
    let t = b(e, o.G.QUARANTINE_EVENT);
    if (null != t) return t;
}
function D(e, t, n) {
    switch (t) {
        case c.z.BLOCK_PROFILE_UPDATE:
            return i(e);
        case c.z.QUARANTINE_USER:
            return s(n);
        case c.z.BLOCK_GUEST_JOIN:
            return a();
    }
    function i(e) {
        switch (e) {
            case r.J.NICKNAME_UPDATE:
                return E.intl.string(E.t.t98DPT);
            case r.J.NICKNAME_RESET:
                return E.intl.string(E.t['7u/rlZ']);
            default:
                return;
        }
    }
    function a() {
        return E.intl.string(E.t.MrYeyc);
    }
    function s(e) {
        switch (e) {
            case u.B.MESSAGE_SEND:
                return E.intl.string(E.t.PmSMMT);
            case u.B.GUILD_JOIN:
                return E.intl.string(E.t.m9wWzs);
            case u.B.USERNAME_UPDATE:
                return E.intl.string(E.t.KNSkCw);
            case u.B.CLAN_TAG_UPDATE:
                return E.intl.string(E.t.qV4K6u);
            default:
                return;
        }
    }
}
function x(e, t) {
    var n;
    return t ? (null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : E.intl.string(E.t.J90oLS)) : E.intl.string(E.t['/YzI6+']);
}
function L(e, t, n) {
    let i = b(e, o.G.VOICE_CHANNEL_STATUS_OUTCOME);
    if (null == i) return null;
    let r = 'blocked' === i ? E.t.cLQrq6 : E.t.bma6cn;
    return E.intl.format(r, {
        channelName: t,
        channelHook: n
    });
}
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.VqG,
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 ? arguments[4] : void 0,
        l = R(e),
        u = C(e),
        c = O(e),
        d = N(e),
        f = A(e),
        _ = b(e, o.G.INTERACTION_CALLBACK_TYPE),
        h = b(e, o.G.APPLICATION_NAME);
    if (null != d) {
        let e = D(l, u, c);
        if (null != e) return e;
    }
    let m = p.Z.can(g.Plq.VIEW_CHANNEL, t),
        v = x(t, m),
        y = null != t && m ? n : g.VqG,
        I = L(e, v, n);
    return null != I
        ? I
        : null != h
          ? _ === s.y.MODAL && null != r
              ? f !== a.P.BLOCKED
                  ? E.intl.format(E.t['4xL9Sk'], {
                        applicationName: h,
                        interactionUserHook: r,
                        integrationOwnerHook: i
                    })
                  : E.intl.format(E.t.S3lNIS, {
                        applicationName: h,
                        interactionUserHook: r,
                        integrationOwnerHook: i
                    })
              : f !== a.P.BLOCKED
                ? E.intl.format(E.t.AXQufH, {
                      applicationName: h,
                      channelName: v,
                      channelHook: y,
                      integrationOwnerHook: i
                  })
                : E.intl.format(E.t.s3tjMD, {
                      applicationName: h,
                      channelName: v,
                      channelHook: y,
                      integrationOwnerHook: i
                  })
          : f !== a.P.BLOCKED
            ? E.intl.format(E.t.IZg0VV, {
                  channelName: v,
                  channelHook: y
              })
            : E.intl.format(E.t.lOIOSE, {
                  channelName: v,
                  channelHook: y
              });
}
function w(e) {
    switch (e) {
        case d.i.NICKNAME:
            return E.intl.string(E.t.fkBQa2);
        case d.i.USERNAME:
            return E.intl.string(E.t.pJQVnp);
        case d.i.GLOBAL_NAME:
            return E.intl.string(E.t['V9eJ8/']);
        case d.i.CLAN_TAG:
            return E.intl.string(E.t.Rtum09);
        default:
            return E.intl.string(E.t.pJQVnp);
    }
}
function M(e) {
    return null == e ? null : e;
}
function k(e) {
    var t;
    let n = b(e, l.D.NOTIFICATION_TYPE),
        i = b(e, l.D.JOIN_ATTEMPTS),
        r = b(e, l.D.RAID_DATETIME),
        a = b(e, l.D.DMS_SENT),
        s = b(e, l.D.RAID_TYPE),
        o = b(e, l.D.RESOLVED_REASON),
        u = b(e, l.D.DECISION_ID),
        c = b(e, l.D.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
    return {
        notificationType: null !== (t = M(n)) && void 0 !== t ? t : void 0,
        joinAttempts: null != i ? parseInt(i) : void 0,
        raidDatetime: null != r ? new Date(r) : void 0,
        dmsSent: null != a ? parseInt(a) : void 0,
        raidType: null != s ? s : void 0,
        resolvedReason: null != o ? o : void 0,
        decisionId: null != u ? u : void 0,
        suspiciousMentionActivityUntil: null != c ? new Date(c) : void 0
    };
}
function U(e) {
    let t = b(e, o.G.CHANNEL_ID),
        n = b(e, o.G.ALERT_ACTIONS_EXECUTION),
        i = (0, h.t)(n);
    return {
        content: S(e),
        ruleName: b(e, o.G.RULE_NAME),
        decisionId: b(e, o.G.DECISION_ID),
        keyword: b(e, o.G.KEYWORD),
        keywordMatchedContent: b(e, o.G.KEYWORD_MATCHED_CONTENT),
        flaggedMessageId: b(e, o.G.FLAGGED_MESSAGE_ID),
        timeoutDuration: b(e, o.G.TIMEOUT_DURATION),
        quarantineType: b(e, o.G.QUARANTINE_USER),
        quarantineAction: b(e, o.G.QUARANTINE_USER_ACTION),
        decisionReason: b(e, o.G.DECISION_REASON),
        applicationName: b(e, o.G.APPLICATION_NAME),
        interactionUserId: b(e, o.G.INTERACTION_USER_ID),
        interactionCallbackType: b(e, o.G.INTERACTION_CALLBACK_TYPE),
        embedChannel: _.Z.getChannel(t),
        embedChannelId: t,
        alertActionsExecution: null != i ? i : void 0
    };
}
function G(e) {
    let t = i.useMemo(() => U(e), [e]),
        n = (0, f.e7)([_.Z], () => _.Z.getChannel(t.embedChannelId), [t.embedChannelId]);
    return {
        ...t,
        embedChannel: n
    };
}
function B(e) {
    if (null == e) return null;
    let { alertActionsExecution: t } = U(e);
    return null != t ? t : null;
}
function Z(e) {
    if (null == e) return E.intl.string(E.t.Gh3A0N);
    switch (e) {
        case m.$l.LEGITIMATE_ACTIVITY:
            return E.intl.string(E.t['riQ+HB']);
        case m.$l.DM_SPAM:
            return E.intl.string(E.t.j5V0io);
        case m.$l.JOIN_RAID:
            return E.intl.string(E.t.qhaRbG);
        default:
            return E.intl.string(E.t.GPg6JC);
    }
}
function F(e) {
    return b(e, l.D.ACTION_BY_USER_ID);
}
let V = void 0;
