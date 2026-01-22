let r;
n.d(t, {
    Ay: () => H,
    Bk: () => F,
    ER: () => S,
    Oj: () => W,
    ZA: () => r,
    ZD: () => K,
    de: () => I,
    fu: () => U,
    kZ: () => Y,
    o2: () => G,
}),
    n(896048);
var i = n(64700),
    a = n(856491),
    s = n(952987),
    o = n(692942),
    l = n(889310),
    c = n(385244),
    u = n(688064),
    d = n(649201),
    f = n(329475),
    p = n(311907),
    _ = n(734057),
    h = n(576705);
n(287809);
var m = n(845625),
    g = n(615550),
    E = n(652215),
    b = n(985018);
function y(e, t, n) {
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
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    return e.type === E.lAJ.AUTO_MODERATION_ACTION;
}
function I(e) {
    var t;
    return null == (t = e.embeds)
        ? void 0
        : t.some((e) => {
              let { type: t } = e;
              return t === E.Auw.AUTO_MODERATION_NOTIFICATION;
          });
}
function T(e) {
    return e.type === E.Auw.AUTO_MODERATION_NOTIFICATION;
}
function C(e) {
    return e.type === E.Auw.AUTO_MODERATION_MESSAGE;
}
function N(e, t) {
    var n, r, i, a, s;
    let [o] = null != (n = e.embeds) ? n : [];
    if (null != o) {
        if (C(o))
            return null == o ||
                null == (i = o.fields) ||
                null ==
                    (r = i.find((e) => {
                        let { rawName: n } = e;
                        return n === t;
                    }))
                ? void 0
                : r.rawValue;
        if (T(o))
            return null == o ||
                null == (s = o.fields) ||
                null ==
                    (a = s.find((e) => {
                        let { rawName: n } = e;
                        return n === t;
                    }))
                ? void 0
                : a.rawValue;
    }
}
function R(e) {
    var t, n;
    let [r] = null != (t = e.embeds) ? t : [];
    return null != (n = null == r ? void 0 : r.rawDescription) ? n : "";
}
function w(e) {
    let t = N(e, l.G.DECISION_OUTCOME);
    if (null != t) return t;
}
function P(e) {
    let t = N(e, l.G.QUARANTINE_USER);
    if (null != t) return t;
}
function D(e) {
    let t = N(e, l.G.QUARANTINE_USER_ACTION);
    if (null != t) return t;
}
function x(e) {
    let t = N(e, l.G.BLOCK_PROFILE_UPDATE_TYPE);
    if (null != t) return t;
}
function L(e) {
    let t = N(e, l.G.QUARANTINE_EVENT);
    if (null != t) return t;
}
function j(e, t, n) {
    switch (t) {
        case d.t.BLOCK_PROFILE_UPDATE:
            return r(e);
        case d.t.QUARANTINE_USER:
            return s(n);
        case d.t.BLOCK_GUEST_JOIN:
            return i();
    }
    function r(e) {
        switch (e) {
            case a.d.NICKNAME_UPDATE:
                return b.intl.string(b.t.t98DPb);
            case a.d.NICKNAME_RESET:
                return b.intl.string(b.t["7u/rlU"]);
            default:
                return;
        }
    }
    function i() {
        return b.intl.string(b.t.MrYeyS);
    }
    function s(e) {
        switch (e) {
            case u.c.MESSAGE_SEND:
                return b.intl.string(b.t.PmSMMS);
            case u.c.GUILD_JOIN:
                return b.intl.string(b.t.m9wWzo);
            case u.c.USERNAME_UPDATE:
                return b.intl.string(b.t.KNSkC6);
            case u.c.CLAN_TAG_UPDATE:
                return b.intl.string(b.t.qV4K6j);
            default:
                return;
        }
    }
}
function M(e, t) {
    var n;
    return t
        ? null != (n = null == e ? void 0 : e.name)
            ? n
            : b.intl.string(b.t.J90oLW)
        : b.intl.string(b.t["/YzI63"]);
}
function k(e, t, n) {
    let r = N(e, l.G.VOICE_CHANNEL_STATUS_OUTCOME);
    if (null == r) return null;
    let i = "blocked" === r ? b.t.cLQrqz : b.t.bma6cs;
    return b.intl.format(i, {
        channelName: t,
        channelHook: n,
    });
}
function U(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.FXj,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = arguments.length > 4 ? arguments[4] : void 0,
        a = x(e),
        c = D(e),
        u = L(e),
        d = P(e),
        f = w(e),
        p = N(e, l.G.INTERACTION_CALLBACK_TYPE),
        _ = N(e, l.G.APPLICATION_NAME);
    if (null != d) {
        let e = j(a, c, u);
        if (null != e) return e;
    }
    let m = h.A.can(E.xBc.VIEW_CHANNEL, t),
        g = M(t, m),
        y = null != t && m ? n : E.FXj,
        O = k(e, g, n);
    return null != O
        ? O
        : null != _
          ? p === o.i.MODAL && null != i
              ? f !== s.z.BLOCKED
                  ? b.intl.format(b.t["4xL9Sk"], {
                        applicationName: _,
                        interactionUserHook: i,
                        integrationOwnerHook: r,
                    })
                  : b.intl.format(b.t.S3lNIT, {
                        applicationName: _,
                        interactionUserHook: i,
                        integrationOwnerHook: r,
                    })
              : f !== s.z.BLOCKED
                ? b.intl.format(b.t.AXQufN, {
                      applicationName: _,
                      channelName: g,
                      channelHook: y,
                      integrationOwnerHook: r,
                  })
                : b.intl.format(b.t.s3tjMN, {
                      applicationName: _,
                      channelName: g,
                      channelHook: y,
                      integrationOwnerHook: r,
                  })
          : f !== s.z.BLOCKED
            ? b.intl.format(b.t.IZg0VQ, {
                  channelName: g,
                  channelHook: y,
              })
            : b.intl.format(b.t.lOIOSK, {
                  channelName: g,
                  channelHook: y,
              });
}
function G(e) {
    switch (e) {
        case f.d.NICKNAME:
            return b.intl.string(b.t["fkBQa/"]);
        case f.d.USERNAME:
            return b.intl.string(b.t.pJQVnr);
        case f.d.GLOBAL_NAME:
            return b.intl.string(b.t.V9eJ85);
        case f.d.CLAN_TAG:
            return b.intl.string(b.t.Rtum01);
        default:
            return b.intl.string(b.t.pJQVnr);
    }
}
function V(e) {
    return null == e ? null : e;
}
function F(e) {
    var t;
    let n = N(e, c.E.NOTIFICATION_TYPE),
        r = N(e, c.E.JOIN_ATTEMPTS),
        i = N(e, c.E.RAID_DATETIME),
        a = N(e, c.E.DMS_SENT),
        s = N(e, c.E.RAID_TYPE),
        o = N(e, c.E.RESOLVED_REASON),
        l = N(e, c.E.DECISION_ID),
        u = N(e, c.E.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
    return {
        notificationType: null != (t = V(n)) ? t : void 0,
        joinAttempts: null != r ? parseInt(r) : void 0,
        raidDatetime: null != i ? new Date(i) : void 0,
        dmsSent: null != a ? parseInt(a) : void 0,
        raidType: null != s ? s : void 0,
        resolvedReason: null != o ? o : void 0,
        decisionId: null != l ? l : void 0,
        suspiciousMentionActivityUntil: null != u ? new Date(u) : void 0,
    };
}
function B(e) {
    let t = N(e, l.G.CHANNEL_ID),
        n = N(e, l.G.ALERT_ACTIONS_EXECUTION),
        r = (0, m.v)(n);
    return {
        content: R(e),
        ruleName: N(e, l.G.RULE_NAME),
        decisionId: N(e, l.G.DECISION_ID),
        keyword: N(e, l.G.KEYWORD),
        keywordMatchedContent: N(e, l.G.KEYWORD_MATCHED_CONTENT),
        flaggedMessageId: N(e, l.G.FLAGGED_MESSAGE_ID),
        timeoutDuration: N(e, l.G.TIMEOUT_DURATION),
        quarantineType: N(e, l.G.QUARANTINE_USER),
        quarantineAction: N(e, l.G.QUARANTINE_USER_ACTION),
        decisionReason: N(e, l.G.DECISION_REASON),
        applicationName: N(e, l.G.APPLICATION_NAME),
        interactionUserId: N(e, l.G.INTERACTION_USER_ID),
        interactionCallbackType: N(e, l.G.INTERACTION_CALLBACK_TYPE),
        embedChannel: _.A.getChannel(t),
        embedChannelId: t,
        alertActionsExecution: null != r ? r : void 0,
    };
}
function H(e) {
    let t = i.useMemo(() => B(e), [e]),
        n = (0, p.bG)([_.A], () => _.A.getChannel(t.embedChannelId), [t.embedChannelId]);
    return v(O({}, t), { embedChannel: n });
}
function Y(e) {
    if (null == e) return null;
    let { alertActionsExecution: t } = B(e);
    return null != t ? t : null;
}
function W(e) {
    if (null == e) return b.intl.string(b.t.Gh3A0O);
    switch (e) {
        case g.no.LEGITIMATE_ACTIVITY:
            return b.intl.string(b.t["riQ+HH"]);
        case g.no.DM_SPAM:
            return b.intl.string(b.t.j5V0ij);
        case g.no.JOIN_RAID:
            return b.intl.string(b.t.qhaRbG);
        default:
            return b.intl.string(b.t.GPg6JM);
    }
}
function K(e) {
    return N(e, c.E.ACTION_BY_USER_ID);
}
