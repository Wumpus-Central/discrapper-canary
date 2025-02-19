n.d(t, {
    FL: () => B,
    Mq: () => j,
    NK: () => V,
    OP: () => I,
    Sw: () => W,
    ZP: () => F,
    ge: () => H,
    hU: () => U,
    nY: () => S,
    nj: () => Y
}),
    n(47120);
var r = n(192379),
    i = n(462382),
    o = n(259346),
    a = n(436817),
    s = n(189722),
    l = n(721355),
    c = n(999923),
    u = n(729917),
    d = n(932019),
    f = n(442837),
    p = n(592125),
    _ = n(496675);
n(594174);
var h = n(313889),
    m = n(177862),
    g = n(981631),
    E = n(388032);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    return e.type === g.uaV.AUTO_MODERATION_ACTION;
}
function I(e) {
    var t;
    return null === (t = e.embeds) || void 0 === t
        ? void 0
        : t.some((e) => {
              let { type: t } = e;
              return t === g.hBH.AUTO_MODERATION_NOTIFICATION;
          });
}
function T(e) {
    return e.type === g.hBH.AUTO_MODERATION_NOTIFICATION;
}
function N(e) {
    return e.type === g.hBH.AUTO_MODERATION_MESSAGE;
}
function A(e, t) {
    var n, r, i, o, a;
    let [s] = null !== (n = e.embeds) && void 0 !== n ? n : [];
    return null == s
        ? void 0
        : N(s)
          ? null == s
              ? void 0
              : null === (i = s.fields) || void 0 === i
                ? void 0
                : null ===
                        (r = i.find((e) => {
                            let { rawName: n } = e;
                            return n === t;
                        })) || void 0 === r
                  ? void 0
                  : r.rawValue
          : T(s)
            ? null == s
                ? void 0
                : null === (a = s.fields) || void 0 === a
                  ? void 0
                  : null ===
                          (o = a.find((e) => {
                              let { rawName: n } = e;
                              return n === t;
                          })) || void 0 === o
                    ? void 0
                    : o.rawValue
            : void 0;
}
function C(e) {
    var t, n;
    let [r] = null !== (t = e.embeds) && void 0 !== t ? t : [];
    return null !== (n = null == r ? void 0 : r.rawDescription) && void 0 !== n ? n : '';
}
function R(e) {
    let t = A(e, s.G.DECISION_OUTCOME);
    if (null != t) return t;
}
function P(e) {
    let t = A(e, s.G.QUARANTINE_USER);
    if (null != t) return t;
}
function w(e) {
    let t = A(e, s.G.QUARANTINE_USER_ACTION);
    if (null != t) return t;
}
function D(e) {
    let t = A(e, s.G.BLOCK_PROFILE_UPDATE_TYPE);
    if (null != t) return t;
}
function x(e) {
    let t = A(e, s.G.QUARANTINE_EVENT);
    if (null != t) return t;
}
function L(e, t, n) {
    switch (t) {
        case u.z.BLOCK_PROFILE_UPDATE:
            return r(e);
        case u.z.QUARANTINE_USER:
            return a(n);
        case u.z.BLOCK_GUEST_JOIN:
            return o();
    }
    function r(e) {
        switch (e) {
            case i.J.NICKNAME_UPDATE:
                return E.NW.string(E.t.t98DPT);
            case i.J.NICKNAME_RESET:
                return E.NW.string(E.t['7u/rlZ']);
            default:
                return;
        }
    }
    function o() {
        return E.NW.string(E.t.MrYeyc);
    }
    function a(e) {
        switch (e) {
            case c.B.MESSAGE_SEND:
                return E.NW.string(E.t.PmSMMT);
            case c.B.GUILD_JOIN:
                return E.NW.string(E.t.m9wWzs);
            case c.B.USERNAME_UPDATE:
                return E.NW.string(E.t.KNSkCw);
            case c.B.CLAN_TAG_UPDATE:
                return E.NW.string(E.t.qV4K6u);
            default:
                return;
        }
    }
}
function M(e, t) {
    var n;
    return t ? (null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : E.NW.string(E.t.J90oLS)) : E.NW.string(E.t['/YzI6+']);
}
function k(e, t, n) {
    let r = A(e, s.G.VOICE_CHANNEL_STATUS_OUTCOME);
    if (null == r) return null;
    let i = 'blocked' === r ? E.t.cLQrq6 : E.t.bma6cn;
    return E.NW.format(i, {
        channelName: t,
        channelHook: n
    });
}
function j(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.VqG,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = arguments.length > 4 ? arguments[4] : void 0,
        l = D(e),
        c = w(e),
        u = x(e),
        d = P(e),
        f = R(e),
        p = A(e, s.G.INTERACTION_CALLBACK_TYPE),
        h = A(e, s.G.APPLICATION_NAME);
    if (null != d) {
        let e = L(l, c, u);
        if (null != e) return e;
    }
    let m = _.Z.can(g.Plq.VIEW_CHANNEL, t),
        v = M(t, m),
        b = null != t && m ? n : g.VqG,
        y = k(e, v, n);
    return null != y
        ? y
        : null != h
          ? p === a.y.MODAL && null != i
              ? f !== o.P.BLOCKED
                  ? E.NW.format(E.t['4xL9Sk'], {
                        applicationName: h,
                        interactionUserHook: i,
                        integrationOwnerHook: r
                    })
                  : E.NW.format(E.t.S3lNIS, {
                        applicationName: h,
                        interactionUserHook: i,
                        integrationOwnerHook: r
                    })
              : f !== o.P.BLOCKED
                ? E.NW.format(E.t.AXQufH, {
                      applicationName: h,
                      channelName: v,
                      channelHook: b,
                      integrationOwnerHook: r
                  })
                : E.NW.format(E.t.s3tjMD, {
                      applicationName: h,
                      channelName: v,
                      channelHook: b,
                      integrationOwnerHook: r
                  })
          : f !== o.P.BLOCKED
            ? E.NW.format(E.t.IZg0VV, {
                  channelName: v,
                  channelHook: b
              })
            : E.NW.format(E.t.lOIOSE, {
                  channelName: v,
                  channelHook: b
              });
}
function U(e) {
    switch (e) {
        case d.i.NICKNAME:
            return E.NW.string(E.t.fkBQa2);
        case d.i.USERNAME:
            return E.NW.string(E.t.pJQVnp);
        case d.i.GLOBAL_NAME:
            return E.NW.string(E.t['V9eJ8/']);
        case d.i.CLAN_TAG:
            return E.NW.string(E.t.Rtum09);
        default:
            return E.NW.string(E.t.pJQVnp);
    }
}
function G(e) {
    return null == e ? null : e;
}
function B(e) {
    var t;
    let n = A(e, l.D.NOTIFICATION_TYPE),
        r = A(e, l.D.JOIN_ATTEMPTS),
        i = A(e, l.D.RAID_DATETIME),
        o = A(e, l.D.DMS_SENT),
        a = A(e, l.D.RAID_TYPE),
        s = A(e, l.D.RESOLVED_REASON),
        c = A(e, l.D.DECISION_ID),
        u = A(e, l.D.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
    return {
        notificationType: null !== (t = G(n)) && void 0 !== t ? t : void 0,
        joinAttempts: null != r ? parseInt(r) : void 0,
        raidDatetime: null != i ? new Date(i) : void 0,
        dmsSent: null != o ? parseInt(o) : void 0,
        raidType: null != a ? a : void 0,
        resolvedReason: null != s ? s : void 0,
        decisionId: null != c ? c : void 0,
        suspiciousMentionActivityUntil: null != u ? new Date(u) : void 0
    };
}
function Z(e) {
    let t = A(e, s.G.CHANNEL_ID),
        n = A(e, s.G.ALERT_ACTIONS_EXECUTION),
        r = (0, h.t)(n);
    return {
        content: C(e),
        ruleName: A(e, s.G.RULE_NAME),
        decisionId: A(e, s.G.DECISION_ID),
        keyword: A(e, s.G.KEYWORD),
        keywordMatchedContent: A(e, s.G.KEYWORD_MATCHED_CONTENT),
        flaggedMessageId: A(e, s.G.FLAGGED_MESSAGE_ID),
        timeoutDuration: A(e, s.G.TIMEOUT_DURATION),
        quarantineType: A(e, s.G.QUARANTINE_USER),
        quarantineAction: A(e, s.G.QUARANTINE_USER_ACTION),
        decisionReason: A(e, s.G.DECISION_REASON),
        applicationName: A(e, s.G.APPLICATION_NAME),
        interactionUserId: A(e, s.G.INTERACTION_USER_ID),
        interactionCallbackType: A(e, s.G.INTERACTION_CALLBACK_TYPE),
        embedChannel: p.Z.getChannel(t),
        embedChannelId: t,
        alertActionsExecution: null != r ? r : void 0
    };
}
function F(e) {
    let t = r.useMemo(() => Z(e), [e]),
        n = (0, f.e7)([p.Z], () => p.Z.getChannel(t.embedChannelId), [t.embedChannelId]);
    return O(b({}, t), { embedChannel: n });
}
function V(e) {
    if (null == e) return null;
    let { alertActionsExecution: t } = Z(e);
    return null != t ? t : null;
}
function H(e) {
    if (null == e) return E.NW.string(E.t.Gh3A0N);
    switch (e) {
        case m.$l.LEGITIMATE_ACTIVITY:
            return E.NW.string(E.t['riQ+HB']);
        case m.$l.DM_SPAM:
            return E.NW.string(E.t.j5V0io);
        case m.$l.JOIN_RAID:
            return E.NW.string(E.t.qhaRbG);
        default:
            return E.NW.string(E.t.GPg6JC);
    }
}
function W(e) {
    return A(e, l.D.ACTION_BY_USER_ID);
}
let Y = void 0;
