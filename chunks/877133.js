let i;
n.d(t, {
    kZ: () => k,
    Oj: () => F,
    o2: () => U,
    fu: () => M,
    ER: () => v,
    Ay: () => x,
    ZD: () => B,
    de: () => b,
    Bk: () => w,
    ZA: () => i,
});
var r,
    a,
    s,
    l,
    o,
    d,
    c,
    u = n(582128),
    _ = (((r = {}).NICKNAME_UPDATE = "nickname_update"), (r.NICKNAME_RESET = "nickname_reset"), r),
    E =
        (((a = {}).BLOCKED = "blocked"),
        (a.FLAGGED = "flagged"),
        (a.DELETED = "deleted"),
        (a.NOT_BLOCKED = "not_blocked"),
        a),
    A = (((s = {}).MODAL = "MODAL"), s),
    h =
        (((l = {}).RULE_NAME = "rule_name"),
        (l.CHANNEL_ID = "channel_id"),
        (l.DECISION_ID = "decision_id"),
        (l.KEYWORD = "keyword"),
        (l.KEYWORD_MATCHED_CONTENT = "keyword_matched_content"),
        (l.FLAGGED_MESSAGE_ID = "flagged_message_id"),
        (l.TIMEOUT_DURATION = "timeout_duration"),
        (l.QUARANTINE_USER = "quarantine_user"),
        (l.QUARANTINE_USER_ACTION = "quarantine_user_action"),
        (l.DECISION_REASON = "decision_reason"),
        (l.ALERT_ACTIONS_EXECUTION = "alert_actions_execution"),
        (l.QUARANTINE_EVENT = "quarantine_event"),
        (l.BLOCK_PROFILE_UPDATE_TYPE = "block_profile_update_type"),
        (l.VOICE_CHANNEL_STATUS_OUTCOME = "voice_channel_status_outcome"),
        (l.APPLICATION_NAME = "application_name"),
        (l.INTERACTION_USER_ID = "interaction_user_id"),
        (l.INTERACTION_CALLBACK_TYPE = "interaction_callback_type"),
        (l.DECISION_OUTCOME = "decision_outcome"),
        (l.GUILD_ROOM_NOTE_OUTCOME = "guild_room_note_outcome"),
        l),
    f = n(385244),
    I =
        (((o = {}).MESSAGE_SEND = "message_send"),
        (o.GUILD_JOIN = "guild_join"),
        (o.USERNAME_UPDATE = "username_update"),
        (o.CLAN_TAG_UPDATE = "clan_tag_update"),
        o),
    p =
        (((d = {}).BLOCK_PROFILE_UPDATE = "block_profile_update"),
        (d.QUARANTINE_USER = "quarantine_user"),
        (d.BLOCK_GUEST_JOIN = "block_guest_join"),
        d),
    T =
        (((c = {}).BIO = "bio"),
        (c.USERNAME = "username"),
        (c.NICKNAME = "nickname"),
        (c.GLOBAL_NAME = "display_name"),
        (c.CLAN_TAG = "clan_tag"),
        c),
    m = n(17928),
    g = n(47167),
    S = n(734057),
    N = n(576705),
    C = n(994500),
    O = n(287809),
    R = n(845625),
    L = n(615550),
    y = n(652215),
    D = n(105292);
function v(e) {
    return e.type === y.lAJ.AUTO_MODERATION_ACTION;
}
function b(e) {
    return e.embeds?.some((e) => {
        let { type: t } = e;
        return t === y.Auw.AUTO_MODERATION_NOTIFICATION;
    });
}
function P(e, t) {
    let [n] = e.embeds ?? [];
    if (null != n && (n.type === y.Auw.AUTO_MODERATION_MESSAGE || n.type === y.Auw.AUTO_MODERATION_NOTIFICATION))
        return n?.fields?.find((e) => {
            let { rawName: n } = e;
            return n === t;
        })?.rawValue;
}
function M(e, t) {
    let n,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y.FXj,
        r = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0,
        s = null != t ? (0, g.m1)(t, O.default, C.A) : D.intl.string(D.t.J90oLW),
        l = (function (e) {
            let t = P(e, h.BLOCK_PROFILE_UPDATE_TYPE);
            if (null != t) return t;
        })(e),
        o = (function (e) {
            let t = P(e, h.QUARANTINE_USER_ACTION);
            if (null != t) return t;
        })(e),
        d = (function (e) {
            let t = P(e, h.QUARANTINE_EVENT);
            if (null != t) return t;
        })(e),
        c = (function (e) {
            let t = P(e, h.QUARANTINE_USER);
            if (null != t) return t;
        })(e),
        u = (function (e) {
            let t = P(e, h.DECISION_OUTCOME);
            if (null != t) return t;
        })(e),
        f = P(e, h.INTERACTION_CALLBACK_TYPE),
        T = P(e, h.APPLICATION_NAME);
    if (null != c) {
        let e = (function (e, t, n) {
            switch (t) {
                case p.BLOCK_PROFILE_UPDATE:
                    var i = e;
                    switch (i) {
                        case _.NICKNAME_UPDATE:
                            return D.intl.string(D.t.t98DPb);
                        case _.NICKNAME_RESET:
                            return D.intl.string(D.t["7u/rlU"]);
                        default:
                            return;
                    }
                case p.QUARANTINE_USER:
                    var r = n;
                    switch (r) {
                        case I.MESSAGE_SEND:
                            return D.intl.string(D.t.PmSMMS);
                        case I.GUILD_JOIN:
                            return D.intl.string(D.t.m9wWzo);
                        case I.USERNAME_UPDATE:
                            return D.intl.string(D.t.KNSkC6);
                        case I.CLAN_TAG_UPDATE:
                            return D.intl.string(D.t.qV4K6j);
                        default:
                            return;
                    }
                case p.BLOCK_GUEST_JOIN:
                    return D.intl.string(D.t.MrYeyS);
            }
        })(l, o, d);
        if (null != e) return e;
    }
    let m = N.A.can(y.xBc.VIEW_CHANNEL, t);
    n = null == t ? (e) => e : m ? i : y.FXj;
    let S = (function (e, t, n) {
        let i = P(e, h.VOICE_CHANNEL_STATUS_OUTCOME);
        if (null == i) return null;
        let r = "blocked" === i ? D.t.cLQrqz : D.t.bma6cs;
        return D.intl.format(r, { channelName: t, channelHook: n });
    })(e, s, i);
    if (null != S) return S;
    let R = (function (e, t, n) {
        let i = P(e, h.GUILD_ROOM_NOTE_OUTCOME);
        if (null == i) return null;
        let r = "blocked" === i ? D.t["9x7Jdd"] : D.t["srla2+"];
        return D.intl.format(r, { channelName: t, channelHook: n });
    })(e, s, i);
    return null != R
        ? R
        : null != T
          ? f === A.MODAL && null != a
              ? u !== E.BLOCKED
                  ? D.intl.format(D.t["4xL9Sk"], {
                        applicationName: T,
                        interactionUserHook: a,
                        integrationOwnerHook: r,
                    })
                  : D.intl.format(D.t.S3lNIT, { applicationName: T, interactionUserHook: a, integrationOwnerHook: r })
              : u !== E.BLOCKED
                ? D.intl.format(D.t.AXQufN, {
                      applicationName: T,
                      channelName: s,
                      channelHook: n,
                      integrationOwnerHook: r,
                  })
                : D.intl.format(D.t.s3tjMN, {
                      applicationName: T,
                      channelName: s,
                      channelHook: n,
                      integrationOwnerHook: r,
                  })
          : u !== E.BLOCKED
            ? D.intl.format(D.t.IZg0VQ, { channelName: s, channelHook: n })
            : D.intl.format(D.t.lOIOSK, { channelName: s, channelHook: n });
}
function U(e) {
    switch (e) {
        case T.NICKNAME:
            return D.intl.string(D.t["fkBQa/"]);
        case T.USERNAME:
            return D.intl.string(D.t.pJQVnr);
        case T.GLOBAL_NAME:
            return D.intl.string(D.t.V9eJ85);
        case T.CLAN_TAG:
            return D.intl.string(D.t.Rtum01);
        default:
            return D.intl.string(D.t.pJQVnr);
    }
}
function w(e) {
    let t = P(e, f.E.NOTIFICATION_TYPE),
        n = P(e, f.E.JOIN_ATTEMPTS),
        i = P(e, f.E.RAID_DATETIME),
        r = P(e, f.E.DMS_SENT),
        a = P(e, f.E.RAID_TYPE),
        s = P(e, f.E.RESOLVED_REASON),
        l = P(e, f.E.DECISION_ID),
        o = P(e, f.E.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
    return {
        notificationType: (null == t ? null : t) ?? void 0,
        joinAttempts: null != n ? parseInt(n) : void 0,
        raidDatetime: null != i ? new Date(i) : void 0,
        dmsSent: null != r ? parseInt(r) : void 0,
        raidType: null != a ? a : void 0,
        resolvedReason: null != s ? s : void 0,
        decisionId: null != l ? l : void 0,
        suspiciousMentionActivityUntil: null != o ? new Date(o) : void 0,
    };
}
function G(e) {
    let t = P(e, h.CHANNEL_ID),
        n = P(e, h.ALERT_ACTIONS_EXECUTION),
        i = (0, R.v)(n);
    return {
        content: (function (e) {
            let [t] = e.embeds ?? [];
            return t?.rawDescription ?? "";
        })(e),
        ruleName: P(e, h.RULE_NAME),
        decisionId: P(e, h.DECISION_ID),
        keyword: P(e, h.KEYWORD),
        keywordMatchedContent: P(e, h.KEYWORD_MATCHED_CONTENT),
        flaggedMessageId: P(e, h.FLAGGED_MESSAGE_ID),
        timeoutDuration: P(e, h.TIMEOUT_DURATION),
        quarantineType: P(e, h.QUARANTINE_USER),
        quarantineAction: P(e, h.QUARANTINE_USER_ACTION),
        decisionReason: P(e, h.DECISION_REASON),
        applicationName: P(e, h.APPLICATION_NAME),
        interactionUserId: P(e, h.INTERACTION_USER_ID),
        interactionCallbackType: P(e, h.INTERACTION_CALLBACK_TYPE),
        embedChannel: S.A.getChannel(t),
        embedChannelId: t,
        alertActionsExecution: i ?? void 0,
    };
}
function x(e) {
    let t = u.useMemo(() => G(e), [e]),
        n = (0, m.bG)([S.A], () => S.A.getChannel(t.embedChannelId), [t.embedChannelId]);
    return { ...t, embedChannel: n };
}
function k(e) {
    if (null == e) return null;
    let { alertActionsExecution: t } = G(e);
    return t ?? null;
}
function F(e) {
    if (null == e) return D.intl.string(D.t.Gh3A0O);
    switch (e) {
        case L.no.LEGITIMATE_ACTIVITY:
            return D.intl.string(D.t["riQ+HH"]);
        case L.no.DM_SPAM:
            return D.intl.string(D.t.j5V0ij);
        case L.no.JOIN_RAID:
            return D.intl.string(D.t.qhaRbG);
        default:
            return D.intl.string(D.t.GPg6JM);
    }
}
function B(e) {
    return P(e, f.E.ACTION_BY_USER_ID);
}
