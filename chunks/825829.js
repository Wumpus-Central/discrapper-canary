r.d(n, {
    FL: function () {
        return B;
    },
    Mq: function () {
        return M;
    },
    NK: function () {
        return F;
    },
    OP: function () {
        return b;
    },
    Sw: function () {
        return j;
    },
    ZP: function () {
        return Z;
    },
    ge: function () {
        return V;
    },
    hU: function () {
        return k;
    },
    nY: function () {
        return T;
    },
    nj: function () {
        return H;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(462382),
    o = r(259346),
    l = r(436817),
    u = r(189722),
    c = r(721355),
    d = r(999923),
    f = r(729917),
    _ = r(932019),
    h = r(442837),
    p = r(592125),
    m = r(496675);
r(594174);
var g = r(313889),
    E = r(177862),
    v = r(981631),
    I = r(388032);
function T(e) {
    return e.type === v.uaV.AUTO_MODERATION_ACTION;
}
function b(e) {
    var n;
    return null === (n = e.embeds) || void 0 === n
        ? void 0
        : n.some((e) => {
              let { type: n } = e;
              return n === v.hBH.AUTO_MODERATION_NOTIFICATION;
          });
}
function y(e) {
    return e.type === v.hBH.AUTO_MODERATION_NOTIFICATION;
}
function S(e) {
    return e.type === v.hBH.AUTO_MODERATION_MESSAGE;
}
function A(e, n) {
    var r, i, a, s, o;
    let [l] = null !== (r = e.embeds) && void 0 !== r ? r : [];
    return null == l
        ? void 0
        : S(l)
          ? null == l
              ? void 0
              : null === (a = l.fields) || void 0 === a
                ? void 0
                : null ===
                        (i = a.find((e) => {
                            let { rawName: r } = e;
                            return r === n;
                        })) || void 0 === i
                  ? void 0
                  : i.rawValue
          : y(l)
            ? null == l
                ? void 0
                : null === (o = l.fields) || void 0 === o
                  ? void 0
                  : null ===
                          (s = o.find((e) => {
                              let { rawName: r } = e;
                              return r === n;
                          })) || void 0 === s
                    ? void 0
                    : s.rawValue
            : void 0;
}
function N(e) {
    var n, r;
    let [i] = null !== (n = e.embeds) && void 0 !== n ? n : [];
    return null !== (r = null == i ? void 0 : i.rawDescription) && void 0 !== r ? r : '';
}
function C(e) {
    let n = A(e, u.G.DECISION_OUTCOME);
    if (null != n) return n;
}
function R(e) {
    let n = A(e, u.G.QUARANTINE_USER);
    if (null != n) return n;
}
function O(e) {
    let n = A(e, u.G.QUARANTINE_USER_ACTION);
    if (null != n) return n;
}
function D(e) {
    let n = A(e, u.G.BLOCK_PROFILE_UPDATE_TYPE);
    if (null != n) return n;
}
function L(e) {
    let n = A(e, u.G.QUARANTINE_EVENT);
    if (null != n) return n;
}
function x(e, n, r) {
    switch (n) {
        case f.z.BLOCK_PROFILE_UPDATE:
            return i(e);
        case f.z.QUARANTINE_USER:
            return o(r);
        case f.z.BLOCK_GUEST_JOIN:
            return a();
    }
    function i(e) {
        switch (e) {
            case s.J.NICKNAME_UPDATE:
                return I.intl.string(I.t.t98DPT);
            case s.J.NICKNAME_RESET:
                return I.intl.string(I.t['7u/rlZ']);
            default:
                return;
        }
    }
    function a() {
        return I.intl.string(I.t.MrYeyc);
    }
    function o(e) {
        switch (e) {
            case d.B.MESSAGE_SEND:
                return I.intl.string(I.t.PmSMMT);
            case d.B.GUILD_JOIN:
                return I.intl.string(I.t.m9wWzs);
            case d.B.USERNAME_UPDATE:
                return I.intl.string(I.t.KNSkCw);
            case d.B.CLAN_TAG_UPDATE:
                return I.intl.string(I.t.qV4K6u);
            default:
                return;
        }
    }
}
function w(e, n) {
    var r;
    return n ? (null !== (r = null == e ? void 0 : e.name) && void 0 !== r ? r : I.intl.string(I.t.J90oLS)) : I.intl.string(I.t['/YzI6+']);
}
function P(e, n, r) {
    let i = A(e, u.G.VOICE_CHANNEL_STATUS_OUTCOME);
    if (null == i) return null;
    let a = 'blocked' === i ? I.t.cLQrq6 : I.t.bma6cn;
    return I.intl.format(a, {
        channelName: n,
        channelHook: r
    });
}
function M(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v.VqG,
        i = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0,
        s = D(e),
        c = O(e),
        d = L(e),
        f = R(e),
        _ = C(e),
        h = A(e, u.G.INTERACTION_CALLBACK_TYPE),
        p = A(e, u.G.APPLICATION_NAME);
    if (null != f) {
        let e = x(s, c, d);
        if (null != e) return e;
    }
    let g = m.Z.can(v.Plq.VIEW_CHANNEL, n),
        E = w(n, g),
        T = null != n && g ? r : v.VqG,
        b = P(e, E, r);
    if (null != b) return b;
    if (null != p)
        return h === l.y.MODAL && null != a
            ? _ !== o.P.BLOCKED
                ? I.intl.format(I.t['4xL9Sk'], {
                      applicationName: p,
                      interactionUserHook: a,
                      integrationOwnerHook: i
                  })
                : I.intl.format(I.t.S3lNIS, {
                      applicationName: p,
                      interactionUserHook: a,
                      integrationOwnerHook: i
                  })
            : _ !== o.P.BLOCKED
              ? I.intl.format(I.t.AXQufH, {
                    applicationName: p,
                    channelName: E,
                    channelHook: T,
                    integrationOwnerHook: i
                })
              : I.intl.format(I.t.s3tjMD, {
                    applicationName: p,
                    channelName: E,
                    channelHook: T,
                    integrationOwnerHook: i
                });
    return _ !== o.P.BLOCKED
        ? I.intl.format(I.t.IZg0VV, {
              channelName: E,
              channelHook: T
          })
        : I.intl.format(I.t.lOIOSE, {
              channelName: E,
              channelHook: T
          });
}
function k(e) {
    switch (e) {
        case _.i.NICKNAME:
            return I.intl.string(I.t.fkBQa2);
        case _.i.USERNAME:
            return I.intl.string(I.t.pJQVnp);
        case _.i.GLOBAL_NAME:
            return I.intl.string(I.t['V9eJ8/']);
        case _.i.CLAN_TAG:
            return I.intl.string(I.t.Rtum09);
        default:
            return I.intl.string(I.t.pJQVnp);
    }
}
function U(e) {
    return null == e ? null : e;
}
function B(e) {
    var n;
    let r = A(e, c.D.NOTIFICATION_TYPE),
        i = A(e, c.D.JOIN_ATTEMPTS),
        a = A(e, c.D.RAID_DATETIME),
        s = A(e, c.D.DMS_SENT),
        o = A(e, c.D.RAID_TYPE),
        l = A(e, c.D.RESOLVED_REASON),
        u = A(e, c.D.DECISION_ID),
        d = A(e, c.D.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
    return {
        notificationType: null !== (n = U(r)) && void 0 !== n ? n : void 0,
        joinAttempts: null != i ? parseInt(i) : void 0,
        raidDatetime: null != a ? new Date(a) : void 0,
        dmsSent: null != s ? parseInt(s) : void 0,
        raidType: null != o ? o : void 0,
        resolvedReason: null != l ? l : void 0,
        decisionId: null != u ? u : void 0,
        suspiciousMentionActivityUntil: null != d ? new Date(d) : void 0
    };
}
function G(e) {
    let n = A(e, u.G.CHANNEL_ID),
        r = A(e, u.G.ALERT_ACTIONS_EXECUTION),
        i = (0, g.t)(r);
    return {
        content: N(e),
        ruleName: A(e, u.G.RULE_NAME),
        decisionId: A(e, u.G.DECISION_ID),
        keyword: A(e, u.G.KEYWORD),
        keywordMatchedContent: A(e, u.G.KEYWORD_MATCHED_CONTENT),
        flaggedMessageId: A(e, u.G.FLAGGED_MESSAGE_ID),
        timeoutDuration: A(e, u.G.TIMEOUT_DURATION),
        quarantineType: A(e, u.G.QUARANTINE_USER),
        quarantineAction: A(e, u.G.QUARANTINE_USER_ACTION),
        decisionReason: A(e, u.G.DECISION_REASON),
        applicationName: A(e, u.G.APPLICATION_NAME),
        interactionUserId: A(e, u.G.INTERACTION_USER_ID),
        interactionCallbackType: A(e, u.G.INTERACTION_CALLBACK_TYPE),
        embedChannel: p.Z.getChannel(n),
        embedChannelId: n,
        alertActionsExecution: null != i ? i : void 0
    };
}
function Z(e) {
    let n = a.useMemo(() => G(e), [e]),
        r = (0, h.e7)([p.Z], () => p.Z.getChannel(n.embedChannelId), [n.embedChannelId]);
    return {
        ...n,
        embedChannel: r
    };
}
function F(e) {
    if (null == e) return null;
    let { alertActionsExecution: n } = G(e);
    return null != n ? n : null;
}
function V(e) {
    if (null == e) return I.intl.string(I.t.Gh3A0N);
    switch (e) {
        case E.$l.LEGITIMATE_ACTIVITY:
            return I.intl.string(I.t['riQ+HB']);
        case E.$l.DM_SPAM:
            return I.intl.string(I.t.j5V0io);
        case E.$l.JOIN_RAID:
            return I.intl.string(I.t.qhaRbG);
        default:
            return I.intl.string(I.t.GPg6JC);
    }
}
function j(e) {
    return A(e, c.D.ACTION_BY_USER_ID);
}
let H = void 0;
