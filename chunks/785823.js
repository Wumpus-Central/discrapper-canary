"use strict";
let r;
n.d(t, {
    Ay: () => B,
    Bk: () => F,
    ER: () => y,
    Oj: () => j,
    ZA: () => r,
    ZD: () => Y,
    de: () => v,
    fu: () => k,
    kZ: () => H,
    o2: () => U,
});
var i = n(64700),
    s = n(856491),
    a = n(952987),
    o = n(692942),
    l = n(889310),
    u = n(385244),
    c = n(688064),
    d = n(649201),
    _ = n(329475),
    f = n(311907),
    p = n(47167),
    h = n(734057),
    m = n(576705),
    E = n(994500),
    g = n(287809),
    A = n(845625),
    I = n(615550),
    T = n(652215),
    S = n(985018);
function y(e) {
    return e.type === T.lAJ.AUTO_MODERATION_ACTION;
}
function v(e) {
    return e.embeds?.some((e) => {
        let { type: t } = e;
        return t === T.Auw.AUTO_MODERATION_NOTIFICATION;
    });
}
function N(e) {
    return e.type === T.Auw.AUTO_MODERATION_NOTIFICATION;
}
function C(e) {
    return e.type === T.Auw.AUTO_MODERATION_MESSAGE;
}
function R(e, t) {
    let [n] = e.embeds ?? [];
    if (null != n && (C(n) || N(n)))
        return n?.fields?.find((e) => {
            let { rawName: n } = e;
            return n === t;
        })?.rawValue;
}
function O(e) {
    let [t] = e.embeds ?? [];
    return t?.rawDescription ?? "";
}
function b(e) {
    let t = R(e, l.G.DECISION_OUTCOME);
    if (null != t) return t;
}
function D(e) {
    let t = R(e, l.G.QUARANTINE_USER);
    if (null != t) return t;
}
function L(e) {
    let t = R(e, l.G.QUARANTINE_USER_ACTION);
    if (null != t) return t;
}
function w(e) {
    let t = R(e, l.G.BLOCK_PROFILE_UPDATE_TYPE);
    if (null != t) return t;
}
function M(e) {
    let t = R(e, l.G.QUARANTINE_EVENT);
    if (null != t) return t;
}
function x(e, t, n) {
    switch (t) {
        case d.t.BLOCK_PROFILE_UPDATE:
            return r(e);
        case d.t.QUARANTINE_USER:
            return a(n);
        case d.t.BLOCK_GUEST_JOIN:
            return i();
    }
    function r(e) {
        switch (e) {
            case s.d.NICKNAME_UPDATE:
                return S.intl.string(S.t.t98DPb);
            case s.d.NICKNAME_RESET:
                return S.intl.string(S.t["7u/rlU"]);
            default:
                return;
        }
    }
    function i() {
        return S.intl.string(S.t.MrYeyS);
    }
    function a(e) {
        switch (e) {
            case c.c.MESSAGE_SEND:
                return S.intl.string(S.t.PmSMMS);
            case c.c.GUILD_JOIN:
                return S.intl.string(S.t.m9wWzo);
            case c.c.USERNAME_UPDATE:
                return S.intl.string(S.t.KNSkC6);
            case c.c.CLAN_TAG_UPDATE:
                return S.intl.string(S.t.qV4K6j);
            default:
                return;
        }
    }
}
function P(e, t, n) {
    let r = R(e, l.G.VOICE_CHANNEL_STATUS_OUTCOME);
    if (null == r) return null;
    let i = "blocked" === r ? S.t.cLQrqz : S.t.bma6cs;
    return S.intl.format(i, { channelName: t, channelHook: n });
}
function k(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.FXj,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = arguments.length > 4 ? arguments[4] : void 0,
        s = null != t ? (0, p.m1)(t, g.default, E.A) : S.intl.string(S.t.J90oLW),
        u = w(e),
        c = L(e),
        d = M(e),
        _ = D(e),
        f = b(e),
        h = R(e, l.G.INTERACTION_CALLBACK_TYPE),
        A = R(e, l.G.APPLICATION_NAME);
    if (null != _) {
        let e = x(u, c, d);
        if (null != e) return e;
    }
    let I = m.A.can(T.xBc.VIEW_CHANNEL, t),
        y = null != t && I ? n : T.FXj,
        v = P(e, s, n);
    return null != v
        ? v
        : null != A
          ? h === o.i.MODAL && null != i
              ? f !== a.z.BLOCKED
                  ? S.intl.format(S.t["4xL9Sk"], {
                        applicationName: A,
                        interactionUserHook: i,
                        integrationOwnerHook: r,
                    })
                  : S.intl.format(S.t.S3lNIT, { applicationName: A, interactionUserHook: i, integrationOwnerHook: r })
              : f !== a.z.BLOCKED
                ? S.intl.format(S.t.AXQufN, {
                      applicationName: A,
                      channelName: s,
                      channelHook: y,
                      integrationOwnerHook: r,
                  })
                : S.intl.format(S.t.s3tjMN, {
                      applicationName: A,
                      channelName: s,
                      channelHook: y,
                      integrationOwnerHook: r,
                  })
          : f !== a.z.BLOCKED
            ? S.intl.format(S.t.IZg0VQ, { channelName: s, channelHook: y })
            : S.intl.format(S.t.lOIOSK, { channelName: s, channelHook: y });
}
function U(e) {
    switch (e) {
        case _.d.NICKNAME:
            return S.intl.string(S.t["fkBQa/"]);
        case _.d.USERNAME:
            return S.intl.string(S.t.pJQVnr);
        case _.d.GLOBAL_NAME:
            return S.intl.string(S.t.V9eJ85);
        case _.d.CLAN_TAG:
            return S.intl.string(S.t.Rtum01);
        default:
            return S.intl.string(S.t.pJQVnr);
    }
}
function G(e) {
    return null == e ? null : e;
}
function F(e) {
    let t = R(e, u.E.NOTIFICATION_TYPE),
        n = R(e, u.E.JOIN_ATTEMPTS),
        r = R(e, u.E.RAID_DATETIME),
        i = R(e, u.E.DMS_SENT),
        s = R(e, u.E.RAID_TYPE),
        a = R(e, u.E.RESOLVED_REASON),
        o = R(e, u.E.DECISION_ID),
        l = R(e, u.E.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
    return {
        notificationType: G(t) ?? void 0,
        joinAttempts: null != n ? parseInt(n) : void 0,
        raidDatetime: null != r ? new Date(r) : void 0,
        dmsSent: null != i ? parseInt(i) : void 0,
        raidType: null != s ? s : void 0,
        resolvedReason: null != a ? a : void 0,
        decisionId: null != o ? o : void 0,
        suspiciousMentionActivityUntil: null != l ? new Date(l) : void 0,
    };
}
function V(e) {
    let t = R(e, l.G.CHANNEL_ID),
        n = R(e, l.G.ALERT_ACTIONS_EXECUTION),
        r = (0, A.v)(n);
    return {
        content: O(e),
        ruleName: R(e, l.G.RULE_NAME),
        decisionId: R(e, l.G.DECISION_ID),
        keyword: R(e, l.G.KEYWORD),
        keywordMatchedContent: R(e, l.G.KEYWORD_MATCHED_CONTENT),
        flaggedMessageId: R(e, l.G.FLAGGED_MESSAGE_ID),
        timeoutDuration: R(e, l.G.TIMEOUT_DURATION),
        quarantineType: R(e, l.G.QUARANTINE_USER),
        quarantineAction: R(e, l.G.QUARANTINE_USER_ACTION),
        decisionReason: R(e, l.G.DECISION_REASON),
        applicationName: R(e, l.G.APPLICATION_NAME),
        interactionUserId: R(e, l.G.INTERACTION_USER_ID),
        interactionCallbackType: R(e, l.G.INTERACTION_CALLBACK_TYPE),
        embedChannel: h.A.getChannel(t),
        embedChannelId: t,
        alertActionsExecution: r ?? void 0,
    };
}
function B(e) {
    let t = i.useMemo(() => V(e), [e]),
        n = (0, f.bG)([h.A], () => h.A.getChannel(t.embedChannelId), [t.embedChannelId]);
    return { ...t, embedChannel: n };
}
function H(e) {
    if (null == e) return null;
    let { alertActionsExecution: t } = V(e);
    return t ?? null;
}
function j(e) {
    if (null == e) return S.intl.string(S.t.Gh3A0O);
    switch (e) {
        case I.no.LEGITIMATE_ACTIVITY:
            return S.intl.string(S.t["riQ+HH"]);
        case I.no.DM_SPAM:
            return S.intl.string(S.t.j5V0ij);
        case I.no.JOIN_RAID:
            return S.intl.string(S.t.qhaRbG);
        default:
            return S.intl.string(S.t.GPg6JM);
    }
}
function Y(e) {
    return R(e, u.E.ACTION_BY_USER_ID);
}
