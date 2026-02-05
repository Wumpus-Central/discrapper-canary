"use strict";
let r;
n.d(t, {
    Ay: () => V,
    Bk: () => U,
    ER: () => I,
    Oj: () => B,
    ZA: () => r,
    ZD: () => j,
    de: () => T,
    fu: () => P,
    kZ: () => F,
    o2: () => M,
});
var i = n(64700),
    a = n(856491),
    s = n(952987),
    o = n(692942),
    l = n(889310),
    u = n(385244),
    c = n(688064),
    d = n(649201),
    _ = n(329475),
    f = n(311907),
    p = n(734057),
    h = n(576705);
n(287809);
var m = n(845625),
    g = n(615550),
    E = n(652215),
    A = n(985018);
function I(e) {
    return e.type === E.lAJ.AUTO_MODERATION_ACTION;
}
function T(e) {
    return e.embeds?.some((e) => {
        let { type: t } = e;
        return t === E.Auw.AUTO_MODERATION_NOTIFICATION;
    });
}
function y(e) {
    return e.type === E.Auw.AUTO_MODERATION_NOTIFICATION;
}
function S(e) {
    return e.type === E.Auw.AUTO_MODERATION_MESSAGE;
}
function v(e, t) {
    let [n] = e.embeds ?? [];
    if (null != n && (S(n) || y(n)))
        return n?.fields?.find((e) => {
            let { rawName: n } = e;
            return n === t;
        })?.rawValue;
}
function C(e) {
    let [t] = e.embeds ?? [];
    return t?.rawDescription ?? "";
}
function b(e) {
    let t = v(e, l.G.DECISION_OUTCOME);
    if (null != t) return t;
}
function N(e) {
    let t = v(e, l.G.QUARANTINE_USER);
    if (null != t) return t;
}
function R(e) {
    let t = v(e, l.G.QUARANTINE_USER_ACTION);
    if (null != t) return t;
}
function O(e) {
    let t = v(e, l.G.BLOCK_PROFILE_UPDATE_TYPE);
    if (null != t) return t;
}
function D(e) {
    let t = v(e, l.G.QUARANTINE_EVENT);
    if (null != t) return t;
}
function L(e, t, n) {
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
                return A.intl.string(A.t.t98DPb);
            case a.d.NICKNAME_RESET:
                return A.intl.string(A.t["7u/rlU"]);
            default:
                return;
        }
    }
    function i() {
        return A.intl.string(A.t.MrYeyS);
    }
    function s(e) {
        switch (e) {
            case c.c.MESSAGE_SEND:
                return A.intl.string(A.t.PmSMMS);
            case c.c.GUILD_JOIN:
                return A.intl.string(A.t.m9wWzo);
            case c.c.USERNAME_UPDATE:
                return A.intl.string(A.t.KNSkC6);
            case c.c.CLAN_TAG_UPDATE:
                return A.intl.string(A.t.qV4K6j);
            default:
                return;
        }
    }
}
function w(e, t) {
    return t ? (e?.name ?? A.intl.string(A.t.J90oLW)) : A.intl.string(A.t["/YzI63"]);
}
function x(e, t, n) {
    let r = v(e, l.G.VOICE_CHANNEL_STATUS_OUTCOME);
    if (null == r) return null;
    let i = "blocked" === r ? A.t.cLQrqz : A.t.bma6cs;
    return A.intl.format(i, { channelName: t, channelHook: n });
}
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.FXj,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = arguments.length > 4 ? arguments[4] : void 0,
        a = O(e),
        u = R(e),
        c = D(e),
        d = N(e),
        _ = b(e),
        f = v(e, l.G.INTERACTION_CALLBACK_TYPE),
        p = v(e, l.G.APPLICATION_NAME);
    if (null != d) {
        let e = L(a, u, c);
        if (null != e) return e;
    }
    let m = h.A.can(E.xBc.VIEW_CHANNEL, t),
        g = w(t, m),
        I = null != t && m ? n : E.FXj,
        T = x(e, g, n);
    return null != T
        ? T
        : null != p
          ? f === o.i.MODAL && null != i
              ? _ !== s.z.BLOCKED
                  ? A.intl.format(A.t["4xL9Sk"], {
                        applicationName: p,
                        interactionUserHook: i,
                        integrationOwnerHook: r,
                    })
                  : A.intl.format(A.t.S3lNIT, { applicationName: p, interactionUserHook: i, integrationOwnerHook: r })
              : _ !== s.z.BLOCKED
                ? A.intl.format(A.t.AXQufN, {
                      applicationName: p,
                      channelName: g,
                      channelHook: I,
                      integrationOwnerHook: r,
                  })
                : A.intl.format(A.t.s3tjMN, {
                      applicationName: p,
                      channelName: g,
                      channelHook: I,
                      integrationOwnerHook: r,
                  })
          : _ !== s.z.BLOCKED
            ? A.intl.format(A.t.IZg0VQ, { channelName: g, channelHook: I })
            : A.intl.format(A.t.lOIOSK, { channelName: g, channelHook: I });
}
function M(e) {
    switch (e) {
        case _.d.NICKNAME:
            return A.intl.string(A.t["fkBQa/"]);
        case _.d.USERNAME:
            return A.intl.string(A.t.pJQVnr);
        case _.d.GLOBAL_NAME:
            return A.intl.string(A.t.V9eJ85);
        case _.d.CLAN_TAG:
            return A.intl.string(A.t.Rtum01);
        default:
            return A.intl.string(A.t.pJQVnr);
    }
}
function k(e) {
    return null == e ? null : e;
}
function U(e) {
    let t = v(e, u.E.NOTIFICATION_TYPE),
        n = v(e, u.E.JOIN_ATTEMPTS),
        r = v(e, u.E.RAID_DATETIME),
        i = v(e, u.E.DMS_SENT),
        a = v(e, u.E.RAID_TYPE),
        s = v(e, u.E.RESOLVED_REASON),
        o = v(e, u.E.DECISION_ID),
        l = v(e, u.E.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
    return {
        notificationType: k(t) ?? void 0,
        joinAttempts: null != n ? parseInt(n) : void 0,
        raidDatetime: null != r ? new Date(r) : void 0,
        dmsSent: null != i ? parseInt(i) : void 0,
        raidType: null != a ? a : void 0,
        resolvedReason: null != s ? s : void 0,
        decisionId: null != o ? o : void 0,
        suspiciousMentionActivityUntil: null != l ? new Date(l) : void 0,
    };
}
function G(e) {
    let t = v(e, l.G.CHANNEL_ID),
        n = v(e, l.G.ALERT_ACTIONS_EXECUTION),
        r = (0, m.v)(n);
    return {
        content: C(e),
        ruleName: v(e, l.G.RULE_NAME),
        decisionId: v(e, l.G.DECISION_ID),
        keyword: v(e, l.G.KEYWORD),
        keywordMatchedContent: v(e, l.G.KEYWORD_MATCHED_CONTENT),
        flaggedMessageId: v(e, l.G.FLAGGED_MESSAGE_ID),
        timeoutDuration: v(e, l.G.TIMEOUT_DURATION),
        quarantineType: v(e, l.G.QUARANTINE_USER),
        quarantineAction: v(e, l.G.QUARANTINE_USER_ACTION),
        decisionReason: v(e, l.G.DECISION_REASON),
        applicationName: v(e, l.G.APPLICATION_NAME),
        interactionUserId: v(e, l.G.INTERACTION_USER_ID),
        interactionCallbackType: v(e, l.G.INTERACTION_CALLBACK_TYPE),
        embedChannel: p.A.getChannel(t),
        embedChannelId: t,
        alertActionsExecution: r ?? void 0,
    };
}
function V(e) {
    let t = i.useMemo(() => G(e), [e]),
        n = (0, f.bG)([p.A], () => p.A.getChannel(t.embedChannelId), [t.embedChannelId]);
    return { ...t, embedChannel: n };
}
function F(e) {
    if (null == e) return null;
    let { alertActionsExecution: t } = G(e);
    return t ?? null;
}
function B(e) {
    if (null == e) return A.intl.string(A.t.Gh3A0O);
    switch (e) {
        case g.no.LEGITIMATE_ACTIVITY:
            return A.intl.string(A.t["riQ+HH"]);
        case g.no.DM_SPAM:
            return A.intl.string(A.t.j5V0ij);
        case g.no.JOIN_RAID:
            return A.intl.string(A.t.qhaRbG);
        default:
            return A.intl.string(A.t.GPg6JM);
    }
}
function j(e) {
    return v(e, u.E.ACTION_BY_USER_ID);
}
