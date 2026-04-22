"use strict";
let r;
n.d(t, {
    Ay: () => D,
    Bk: () => C,
    ER: () => y,
    Oj: () => w,
    ZA: () => r,
    ZD: () => M,
    de: () => N,
    fu: () => R,
    kZ: () => L,
    o2: () => v,
});
var i = n(64700),
    s = n(856491),
    a = n(952987),
    o = n(692942),
    l = n(889310),
    u = n(385244),
    d = n(688064),
    c = n(649201),
    _ = n(329475),
    f = n(311907),
    E = n(47167),
    h = n(734057),
    p = n(576705),
    m = n(994500),
    g = n(287809),
    A = n(845625),
    I = n(615550),
    T = n(652215),
    S = n(985018);
function y(e) {
    return e.type === T.lAJ.AUTO_MODERATION_ACTION;
}
function N(e) {
    return e.embeds?.some((e) => {
        let { type: t } = e;
        return t === T.Auw.AUTO_MODERATION_NOTIFICATION;
    });
}
function O(e, t) {
    let [n] = e.embeds ?? [];
    if (null != n && (n.type === T.Auw.AUTO_MODERATION_MESSAGE || n.type === T.Auw.AUTO_MODERATION_NOTIFICATION))
        return n?.fields?.find((e) => {
            let { rawName: n } = e;
            return n === t;
        })?.rawValue;
}
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.FXj,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = arguments.length > 4 ? arguments[4] : void 0,
        u = null != t ? (0, E.m1)(t, g.default, m.A) : S.intl.string(S.t.J90oLW),
        _ = (function (e) {
            let t = O(e, l.G.BLOCK_PROFILE_UPDATE_TYPE);
            if (null != t) return t;
        })(e),
        f = (function (e) {
            let t = O(e, l.G.QUARANTINE_USER_ACTION);
            if (null != t) return t;
        })(e),
        h = (function (e) {
            let t = O(e, l.G.QUARANTINE_EVENT);
            if (null != t) return t;
        })(e),
        A = (function (e) {
            let t = O(e, l.G.QUARANTINE_USER);
            if (null != t) return t;
        })(e),
        I = (function (e) {
            let t = O(e, l.G.DECISION_OUTCOME);
            if (null != t) return t;
        })(e),
        y = O(e, l.G.INTERACTION_CALLBACK_TYPE),
        N = O(e, l.G.APPLICATION_NAME);
    if (null != A) {
        let e = (function (e, t, n) {
            switch (t) {
                case c.t.BLOCK_PROFILE_UPDATE:
                    var r = e;
                    switch (r) {
                        case s.d.NICKNAME_UPDATE:
                            return S.intl.string(S.t.t98DPb);
                        case s.d.NICKNAME_RESET:
                            return S.intl.string(S.t["7u/rlU"]);
                        default:
                            return;
                    }
                case c.t.QUARANTINE_USER:
                    var i = n;
                    switch (i) {
                        case d.c.MESSAGE_SEND:
                            return S.intl.string(S.t.PmSMMS);
                        case d.c.GUILD_JOIN:
                            return S.intl.string(S.t.m9wWzo);
                        case d.c.USERNAME_UPDATE:
                            return S.intl.string(S.t.KNSkC6);
                        case d.c.CLAN_TAG_UPDATE:
                            return S.intl.string(S.t.qV4K6j);
                        default:
                            return;
                    }
                case c.t.BLOCK_GUEST_JOIN:
                    return S.intl.string(S.t.MrYeyS);
            }
        })(_, f, h);
        if (null != e) return e;
    }
    let R = p.A.can(T.xBc.VIEW_CHANNEL, t),
        v = null != t && R ? n : T.FXj,
        C = (function (e, t, n) {
            let r = O(e, l.G.VOICE_CHANNEL_STATUS_OUTCOME);
            if (null == r) return null;
            let i = "blocked" === r ? S.t.cLQrqz : S.t.bma6cs;
            return S.intl.format(i, { channelName: t, channelHook: n });
        })(e, u, n);
    return null != C
        ? C
        : null != N
          ? y === o.i.MODAL && null != i
              ? I !== a.z.BLOCKED
                  ? S.intl.format(S.t["4xL9Sk"], {
                        applicationName: N,
                        interactionUserHook: i,
                        integrationOwnerHook: r,
                    })
                  : S.intl.format(S.t.S3lNIT, { applicationName: N, interactionUserHook: i, integrationOwnerHook: r })
              : I !== a.z.BLOCKED
                ? S.intl.format(S.t.AXQufN, {
                      applicationName: N,
                      channelName: u,
                      channelHook: v,
                      integrationOwnerHook: r,
                  })
                : S.intl.format(S.t.s3tjMN, {
                      applicationName: N,
                      channelName: u,
                      channelHook: v,
                      integrationOwnerHook: r,
                  })
          : I !== a.z.BLOCKED
            ? S.intl.format(S.t.IZg0VQ, { channelName: u, channelHook: v })
            : S.intl.format(S.t.lOIOSK, { channelName: u, channelHook: v });
}
function v(e) {
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
function C(e) {
    let t = O(e, u.E.NOTIFICATION_TYPE),
        n = O(e, u.E.JOIN_ATTEMPTS),
        r = O(e, u.E.RAID_DATETIME),
        i = O(e, u.E.DMS_SENT),
        s = O(e, u.E.RAID_TYPE),
        a = O(e, u.E.RESOLVED_REASON),
        o = O(e, u.E.DECISION_ID),
        l = O(e, u.E.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
    return {
        notificationType: (null == t ? null : t) ?? void 0,
        joinAttempts: null != n ? parseInt(n) : void 0,
        raidDatetime: null != r ? new Date(r) : void 0,
        dmsSent: null != i ? parseInt(i) : void 0,
        raidType: null != s ? s : void 0,
        resolvedReason: null != a ? a : void 0,
        decisionId: null != o ? o : void 0,
        suspiciousMentionActivityUntil: null != l ? new Date(l) : void 0,
    };
}
function b(e) {
    let t = O(e, l.G.CHANNEL_ID),
        n = O(e, l.G.ALERT_ACTIONS_EXECUTION),
        r = (0, A.v)(n);
    return {
        content: (function (e) {
            let [t] = e.embeds ?? [];
            return t?.rawDescription ?? "";
        })(e),
        ruleName: O(e, l.G.RULE_NAME),
        decisionId: O(e, l.G.DECISION_ID),
        keyword: O(e, l.G.KEYWORD),
        keywordMatchedContent: O(e, l.G.KEYWORD_MATCHED_CONTENT),
        flaggedMessageId: O(e, l.G.FLAGGED_MESSAGE_ID),
        timeoutDuration: O(e, l.G.TIMEOUT_DURATION),
        quarantineType: O(e, l.G.QUARANTINE_USER),
        quarantineAction: O(e, l.G.QUARANTINE_USER_ACTION),
        decisionReason: O(e, l.G.DECISION_REASON),
        applicationName: O(e, l.G.APPLICATION_NAME),
        interactionUserId: O(e, l.G.INTERACTION_USER_ID),
        interactionCallbackType: O(e, l.G.INTERACTION_CALLBACK_TYPE),
        embedChannel: h.A.getChannel(t),
        embedChannelId: t,
        alertActionsExecution: r ?? void 0,
    };
}
function D(e) {
    let t = i.useMemo(() => b(e), [e]),
        n = (0, f.bG)([h.A], () => h.A.getChannel(t.embedChannelId), [t.embedChannelId]);
    return { ...t, embedChannel: n };
}
function L(e) {
    if (null == e) return null;
    let { alertActionsExecution: t } = b(e);
    return t ?? null;
}
function w(e) {
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
function M(e) {
    return O(e, u.E.ACTION_BY_USER_ID);
}
