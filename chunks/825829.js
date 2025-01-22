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
        return I;
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
        return b;
    },
    nj: function () {
        return H;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(462382),
    s = r(259346),
    l = r(436817),
    u = r(189722),
    c = r(721355),
    d = r(999923),
    f = r(729917),
    p = r(932019),
    h = r(442837),
    _ = r(592125),
    m = r(496675);
r(594174);
var g = r(313889),
    E = r(177862),
    v = r(981631),
    y = r(388032);
function b(e) {
    return e.type === v.uaV.AUTO_MODERATION_ACTION;
}
function I(e) {
    var n;
    return null === (n = e.embeds) || void 0 === n
        ? void 0
        : n.some((e) => {
              let { type: n } = e;
              return n === v.hBH.AUTO_MODERATION_NOTIFICATION;
          });
}
function T(e) {
    return e.type === v.hBH.AUTO_MODERATION_NOTIFICATION;
}
function S(e) {
    return e.type === v.hBH.AUTO_MODERATION_MESSAGE;
}
function A(e, n) {
    var r, i, a, o, s;
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
          : T(l)
            ? null == l
                ? void 0
                : null === (s = l.fields) || void 0 === s
                  ? void 0
                  : null ===
                          (o = s.find((e) => {
                              let { rawName: r } = e;
                              return r === n;
                          })) || void 0 === o
                    ? void 0
                    : o.rawValue
            : void 0;
}
function C(e) {
    var n, r;
    let [i] = null !== (n = e.embeds) && void 0 !== n ? n : [];
    return null !== (r = null == i ? void 0 : i.rawDescription) && void 0 !== r ? r : '';
}
function N(e) {
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
            return s(r);
        case f.z.BLOCK_GUEST_JOIN:
            return a();
    }
    function i(e) {
        switch (e) {
            case o.J.NICKNAME_UPDATE:
                return y.intl.string(y.t.t98DPT);
            case o.J.NICKNAME_RESET:
                return y.intl.string(y.t['7u/rlZ']);
            default:
                return;
        }
    }
    function a() {
        return y.intl.string(y.t.MrYeyc);
    }
    function s(e) {
        switch (e) {
            case d.B.MESSAGE_SEND:
                return y.intl.string(y.t.PmSMMT);
            case d.B.GUILD_JOIN:
                return y.intl.string(y.t.m9wWzs);
            case d.B.USERNAME_UPDATE:
                return y.intl.string(y.t.KNSkCw);
            case d.B.CLAN_TAG_UPDATE:
                return y.intl.string(y.t.qV4K6u);
            default:
                return;
        }
    }
}
function w(e, n) {
    var r;
    return n ? (null !== (r = null == e ? void 0 : e.name) && void 0 !== r ? r : y.intl.string(y.t.J90oLS)) : y.intl.string(y.t['/YzI6+']);
}
function P(e, n, r) {
    let i = A(e, u.G.VOICE_CHANNEL_STATUS_OUTCOME);
    if (null == i) return null;
    let a = 'blocked' === i ? y.t.cLQrq6 : y.t.bma6cn;
    return y.intl.format(a, {
        channelName: n,
        channelHook: r
    });
}
function M(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v.VqG,
        i = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0,
        o = D(e),
        c = O(e),
        d = L(e),
        f = R(e),
        p = N(e),
        h = A(e, u.G.INTERACTION_CALLBACK_TYPE),
        _ = A(e, u.G.APPLICATION_NAME);
    if (null != f) {
        let e = x(o, c, d);
        if (null != e) return e;
    }
    let g = m.Z.can(v.Plq.VIEW_CHANNEL, n),
        E = w(n, g),
        b = null != n && g ? r : v.VqG,
        I = P(e, E, r);
    if (null != I) return I;
    if (null != _)
        return h === l.y.MODAL && null != a
            ? p !== s.P.BLOCKED
                ? y.intl.format(y.t['4xL9Sk'], {
                      applicationName: _,
                      interactionUserHook: a,
                      integrationOwnerHook: i
                  })
                : y.intl.format(y.t.S3lNIS, {
                      applicationName: _,
                      interactionUserHook: a,
                      integrationOwnerHook: i
                  })
            : p !== s.P.BLOCKED
              ? y.intl.format(y.t.AXQufH, {
                    applicationName: _,
                    channelName: E,
                    channelHook: b,
                    integrationOwnerHook: i
                })
              : y.intl.format(y.t.s3tjMD, {
                    applicationName: _,
                    channelName: E,
                    channelHook: b,
                    integrationOwnerHook: i
                });
    return p !== s.P.BLOCKED
        ? y.intl.format(y.t.IZg0VV, {
              channelName: E,
              channelHook: b
          })
        : y.intl.format(y.t.lOIOSE, {
              channelName: E,
              channelHook: b
          });
}
function k(e) {
    switch (e) {
        case p.i.NICKNAME:
            return y.intl.string(y.t.fkBQa2);
        case p.i.USERNAME:
            return y.intl.string(y.t.pJQVnp);
        case p.i.GLOBAL_NAME:
            return y.intl.string(y.t['V9eJ8/']);
        case p.i.CLAN_TAG:
            return y.intl.string(y.t.Rtum09);
        default:
            return y.intl.string(y.t.pJQVnp);
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
        o = A(e, c.D.DMS_SENT),
        s = A(e, c.D.RAID_TYPE),
        l = A(e, c.D.RESOLVED_REASON),
        u = A(e, c.D.DECISION_ID),
        d = A(e, c.D.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
    return {
        notificationType: null !== (n = U(r)) && void 0 !== n ? n : void 0,
        joinAttempts: null != i ? parseInt(i) : void 0,
        raidDatetime: null != a ? new Date(a) : void 0,
        dmsSent: null != o ? parseInt(o) : void 0,
        raidType: null != s ? s : void 0,
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
        content: C(e),
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
        embedChannel: _.Z.getChannel(n),
        embedChannelId: n,
        alertActionsExecution: null != i ? i : void 0
    };
}
function Z(e) {
    let n = a.useMemo(() => G(e), [e]),
        r = (0, h.e7)([_.Z], () => _.Z.getChannel(n.embedChannelId), [n.embedChannelId]);
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
    if (null == e) return y.intl.string(y.t.Gh3A0N);
    switch (e) {
        case E.$l.LEGITIMATE_ACTIVITY:
            return y.intl.string(y.t['riQ+HB']);
        case E.$l.DM_SPAM:
            return y.intl.string(y.t.j5V0io);
        case E.$l.JOIN_RAID:
            return y.intl.string(y.t.qhaRbG);
        default:
            return y.intl.string(y.t.GPg6JC);
    }
}
function j(e) {
    return A(e, c.D.ACTION_BY_USER_ID);
}
let H = void 0;
