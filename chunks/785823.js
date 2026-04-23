"use strict";
let r;
n.d(t, {
    Ay: () => D,
    Bk: () => R,
    ER: () => y,
    Oj: () => w,
    ZA: () => r,
    ZD: () => M,
    de: () => N,
    fu: () => C,
    kZ: () => L,
    o2: () => O,
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
    E = n(576705),
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
function v(e, t) {
    let [n] = e.embeds ?? [];
    if (null != n && (n.type === T.Auw.AUTO_MODERATION_MESSAGE || n.type === T.Auw.AUTO_MODERATION_NOTIFICATION))
        return n?.fields?.find((e) => {
            let { rawName: n } = e;
            return n === t;
        })?.rawValue;
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.FXj,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = arguments.length > 4 ? arguments[4] : void 0,
        u = null != t ? (0, p.m1)(t, g.default, m.A) : S.intl.string(S.t.J90oLW),
        _ = (function (e) {
            let t = v(e, l.G.BLOCK_PROFILE_UPDATE_TYPE);
            if (null != t) return t;
        })(e),
        f = (function (e) {
            let t = v(e, l.G.QUARANTINE_USER_ACTION);
            if (null != t) return t;
        })(e),
        h = (function (e) {
            let t = v(e, l.G.QUARANTINE_EVENT);
            if (null != t) return t;
        })(e),
        A = (function (e) {
            let t = v(e, l.G.QUARANTINE_USER);
            if (null != t) return t;
        })(e),
        I = (function (e) {
            let t = v(e, l.G.DECISION_OUTCOME);
            if (null != t) return t;
        })(e),
        y = v(e, l.G.INTERACTION_CALLBACK_TYPE),
        N = v(e, l.G.APPLICATION_NAME);
    if (null != A) {
        let e = (function (e, t, n) {
            switch (t) {
                case d.t.BLOCK_PROFILE_UPDATE:
                    var r = e;
                    switch (r) {
                        case s.d.NICKNAME_UPDATE:
                            return S.intl.string(S.t.t98DPb);
                        case s.d.NICKNAME_RESET:
                            return S.intl.string(S.t["7u/rlU"]);
                        default:
                            return;
                    }
                case d.t.QUARANTINE_USER:
                    var i = n;
                    switch (i) {
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
                case d.t.BLOCK_GUEST_JOIN:
                    return S.intl.string(S.t.MrYeyS);
            }
        })(_, f, h);
        if (null != e) return e;
    }
    let C = E.A.can(T.xBc.VIEW_CHANNEL, t),
        O = null != t && C ? n : T.FXj,
        R = (function (e, t, n) {
            let r = v(e, l.G.VOICE_CHANNEL_STATUS_OUTCOME);
            if (null == r) return null;
            let i = "blocked" === r ? S.t.cLQrqz : S.t.bma6cs;
            return S.intl.format(i, { channelName: t, channelHook: n });
        })(e, u, n);
    return null != R
        ? R
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
                      channelHook: O,
                      integrationOwnerHook: r,
                  })
                : S.intl.format(S.t.s3tjMN, {
                      applicationName: N,
                      channelName: u,
                      channelHook: O,
                      integrationOwnerHook: r,
                  })
          : I !== a.z.BLOCKED
            ? S.intl.format(S.t.IZg0VQ, { channelName: u, channelHook: O })
            : S.intl.format(S.t.lOIOSK, { channelName: u, channelHook: O });
}
function O(e) {
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
function R(e) {
    let t = v(e, u.E.NOTIFICATION_TYPE),
        n = v(e, u.E.JOIN_ATTEMPTS),
        r = v(e, u.E.RAID_DATETIME),
        i = v(e, u.E.DMS_SENT),
        s = v(e, u.E.RAID_TYPE),
        a = v(e, u.E.RESOLVED_REASON),
        o = v(e, u.E.DECISION_ID),
        l = v(e, u.E.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
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
    let t = v(e, l.G.CHANNEL_ID),
        n = v(e, l.G.ALERT_ACTIONS_EXECUTION),
        r = (0, A.v)(n);
    return {
        content: (function (e) {
            let [t] = e.embeds ?? [];
            return t?.rawDescription ?? "";
        })(e),
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
    return v(e, u.E.ACTION_BY_USER_ID);
}
