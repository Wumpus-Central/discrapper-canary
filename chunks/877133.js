"use strict";
let i;
n.d(t, {
    kZ: () => G,
    Oj: () => V,
    o2: () => k,
    fu: () => P,
    ER: () => L,
    Ay: () => x,
    ZD: () => F,
    de: () => b,
    Bk: () => M,
    ZA: () => i,
});
var r,
    s,
    a,
    o,
    l,
    d,
    _,
    u = n(64700),
    c = (((r = {}).NICKNAME_UPDATE = "nickname_update"), (r.NICKNAME_RESET = "nickname_reset"), r),
    E = (((s = {}).BLOCKED = "blocked"), (s.FLAGGED = "flagged"), s),
    h = (((a = {}).MODAL = "MODAL"), a),
    m =
        (((o = {}).RULE_NAME = "rule_name"),
        (o.CHANNEL_ID = "channel_id"),
        (o.DECISION_ID = "decision_id"),
        (o.KEYWORD = "keyword"),
        (o.KEYWORD_MATCHED_CONTENT = "keyword_matched_content"),
        (o.FLAGGED_MESSAGE_ID = "flagged_message_id"),
        (o.TIMEOUT_DURATION = "timeout_duration"),
        (o.QUARANTINE_USER = "quarantine_user"),
        (o.QUARANTINE_USER_ACTION = "quarantine_user_action"),
        (o.DECISION_REASON = "decision_reason"),
        (o.ALERT_ACTIONS_EXECUTION = "alert_actions_execution"),
        (o.QUARANTINE_EVENT = "quarantine_event"),
        (o.BLOCK_PROFILE_UPDATE_TYPE = "block_profile_update_type"),
        (o.VOICE_CHANNEL_STATUS_OUTCOME = "voice_channel_status_outcome"),
        (o.APPLICATION_NAME = "application_name"),
        (o.INTERACTION_USER_ID = "interaction_user_id"),
        (o.INTERACTION_CALLBACK_TYPE = "interaction_callback_type"),
        (o.DECISION_OUTCOME = "decision_outcome"),
        o),
    f = n(385244),
    g =
        (((l = {}).MESSAGE_SEND = "message_send"),
        (l.GUILD_JOIN = "guild_join"),
        (l.USERNAME_UPDATE = "username_update"),
        (l.CLAN_TAG_UPDATE = "clan_tag_update"),
        l),
    p =
        (((d = {}).BLOCK_PROFILE_UPDATE = "block_profile_update"),
        (d.QUARANTINE_USER = "quarantine_user"),
        (d.BLOCK_GUEST_JOIN = "block_guest_join"),
        d),
    A =
        (((_ = {}).BIO = "bio"),
        (_.USERNAME = "username"),
        (_.NICKNAME = "nickname"),
        (_.GLOBAL_NAME = "display_name"),
        (_.CLAN_TAG = "clan_tag"),
        _),
    I = n(17928),
    T = n(47167),
    S = n(734057),
    N = n(576705),
    C = n(994500),
    R = n(287809),
    O = n(845625),
    y = n(615550),
    v = n(652215),
    D = n(985018);
function L(e) {
    return e.type === v.lAJ.AUTO_MODERATION_ACTION;
}
function b(e) {
    return e.embeds?.some((e) => {
        let { type: t } = e;
        return t === v.Auw.AUTO_MODERATION_NOTIFICATION;
    });
}
function w(e, t) {
    let [n] = e.embeds ?? [];
    if (null != n && (n.type === v.Auw.AUTO_MODERATION_MESSAGE || n.type === v.Auw.AUTO_MODERATION_NOTIFICATION))
        return n?.fields?.find((e) => {
            let { rawName: n } = e;
            return n === t;
        })?.rawValue;
}
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v.FXj,
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 ? arguments[4] : void 0,
        s = null != t ? (0, T.m1)(t, R.default, C.A) : D.intl.string(D.t.J90oLW),
        a = (function (e) {
            let t = w(e, m.BLOCK_PROFILE_UPDATE_TYPE);
            if (null != t) return t;
        })(e),
        o = (function (e) {
            let t = w(e, m.QUARANTINE_USER_ACTION);
            if (null != t) return t;
        })(e),
        l = (function (e) {
            let t = w(e, m.QUARANTINE_EVENT);
            if (null != t) return t;
        })(e),
        d = (function (e) {
            let t = w(e, m.QUARANTINE_USER);
            if (null != t) return t;
        })(e),
        _ = (function (e) {
            let t = w(e, m.DECISION_OUTCOME);
            if (null != t) return t;
        })(e),
        u = w(e, m.INTERACTION_CALLBACK_TYPE),
        f = w(e, m.APPLICATION_NAME);
    if (null != d) {
        let e = (function (e, t, n) {
            switch (t) {
                case p.BLOCK_PROFILE_UPDATE:
                    var i = e;
                    switch (i) {
                        case c.NICKNAME_UPDATE:
                            return D.intl.string(D.t.t98DPb);
                        case c.NICKNAME_RESET:
                            return D.intl.string(D.t["7u/rlU"]);
                        default:
                            return;
                    }
                case p.QUARANTINE_USER:
                    var r = n;
                    switch (r) {
                        case g.MESSAGE_SEND:
                            return D.intl.string(D.t.PmSMMS);
                        case g.GUILD_JOIN:
                            return D.intl.string(D.t.m9wWzo);
                        case g.USERNAME_UPDATE:
                            return D.intl.string(D.t.KNSkC6);
                        case g.CLAN_TAG_UPDATE:
                            return D.intl.string(D.t.qV4K6j);
                        default:
                            return;
                    }
                case p.BLOCK_GUEST_JOIN:
                    return D.intl.string(D.t.MrYeyS);
            }
        })(a, o, l);
        if (null != e) return e;
    }
    let A = N.A.can(v.xBc.VIEW_CHANNEL, t),
        I = null != t && A ? n : v.FXj,
        S = (function (e, t, n) {
            let i = w(e, m.VOICE_CHANNEL_STATUS_OUTCOME);
            if (null == i) return null;
            let r = "blocked" === i ? D.t.cLQrqz : D.t.bma6cs;
            return D.intl.format(r, { channelName: t, channelHook: n });
        })(e, s, n);
    return null != S
        ? S
        : null != f
          ? u === h.MODAL && null != r
              ? _ !== E.BLOCKED
                  ? D.intl.format(D.t["4xL9Sk"], {
                        applicationName: f,
                        interactionUserHook: r,
                        integrationOwnerHook: i,
                    })
                  : D.intl.format(D.t.S3lNIT, { applicationName: f, interactionUserHook: r, integrationOwnerHook: i })
              : _ !== E.BLOCKED
                ? D.intl.format(D.t.AXQufN, {
                      applicationName: f,
                      channelName: s,
                      channelHook: I,
                      integrationOwnerHook: i,
                  })
                : D.intl.format(D.t.s3tjMN, {
                      applicationName: f,
                      channelName: s,
                      channelHook: I,
                      integrationOwnerHook: i,
                  })
          : _ !== E.BLOCKED
            ? D.intl.format(D.t.IZg0VQ, { channelName: s, channelHook: I })
            : D.intl.format(D.t.lOIOSK, { channelName: s, channelHook: I });
}
function k(e) {
    switch (e) {
        case A.NICKNAME:
            return D.intl.string(D.t["fkBQa/"]);
        case A.USERNAME:
            return D.intl.string(D.t.pJQVnr);
        case A.GLOBAL_NAME:
            return D.intl.string(D.t.V9eJ85);
        case A.CLAN_TAG:
            return D.intl.string(D.t.Rtum01);
        default:
            return D.intl.string(D.t.pJQVnr);
    }
}
function M(e) {
    let t = w(e, f.E.NOTIFICATION_TYPE),
        n = w(e, f.E.JOIN_ATTEMPTS),
        i = w(e, f.E.RAID_DATETIME),
        r = w(e, f.E.DMS_SENT),
        s = w(e, f.E.RAID_TYPE),
        a = w(e, f.E.RESOLVED_REASON),
        o = w(e, f.E.DECISION_ID),
        l = w(e, f.E.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
    return {
        notificationType: (null == t ? null : t) ?? void 0,
        joinAttempts: null != n ? parseInt(n) : void 0,
        raidDatetime: null != i ? new Date(i) : void 0,
        dmsSent: null != r ? parseInt(r) : void 0,
        raidType: null != s ? s : void 0,
        resolvedReason: null != a ? a : void 0,
        decisionId: null != o ? o : void 0,
        suspiciousMentionActivityUntil: null != l ? new Date(l) : void 0,
    };
}
function U(e) {
    let t = w(e, m.CHANNEL_ID),
        n = w(e, m.ALERT_ACTIONS_EXECUTION),
        i = (0, O.v)(n);
    return {
        content: (function (e) {
            let [t] = e.embeds ?? [];
            return t?.rawDescription ?? "";
        })(e),
        ruleName: w(e, m.RULE_NAME),
        decisionId: w(e, m.DECISION_ID),
        keyword: w(e, m.KEYWORD),
        keywordMatchedContent: w(e, m.KEYWORD_MATCHED_CONTENT),
        flaggedMessageId: w(e, m.FLAGGED_MESSAGE_ID),
        timeoutDuration: w(e, m.TIMEOUT_DURATION),
        quarantineType: w(e, m.QUARANTINE_USER),
        quarantineAction: w(e, m.QUARANTINE_USER_ACTION),
        decisionReason: w(e, m.DECISION_REASON),
        applicationName: w(e, m.APPLICATION_NAME),
        interactionUserId: w(e, m.INTERACTION_USER_ID),
        interactionCallbackType: w(e, m.INTERACTION_CALLBACK_TYPE),
        embedChannel: S.A.getChannel(t),
        embedChannelId: t,
        alertActionsExecution: i ?? void 0,
    };
}
function x(e) {
    let t = u.useMemo(() => U(e), [e]),
        n = (0, I.bG)([S.A], () => S.A.getChannel(t.embedChannelId), [t.embedChannelId]);
    return { ...t, embedChannel: n };
}
function G(e) {
    if (null == e) return null;
    let { alertActionsExecution: t } = U(e);
    return t ?? null;
}
function V(e) {
    if (null == e) return D.intl.string(D.t.Gh3A0O);
    switch (e) {
        case y.no.LEGITIMATE_ACTIVITY:
            return D.intl.string(D.t["riQ+HH"]);
        case y.no.DM_SPAM:
            return D.intl.string(D.t.j5V0ij);
        case y.no.JOIN_RAID:
            return D.intl.string(D.t.qhaRbG);
        default:
            return D.intl.string(D.t.GPg6JM);
    }
}
function F(e) {
    return w(e, f.E.ACTION_BY_USER_ID);
}
