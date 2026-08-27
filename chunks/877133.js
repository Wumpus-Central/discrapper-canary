"use strict";
let i;
n.d(t, {
    kZ: () => k,
    Oj: () => F,
    o2: () => U,
    fu: () => P,
    ER: () => v,
    Ay: () => x,
    ZD: () => V,
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
    E = (((a = {}).BLOCKED = "blocked"), (a.FLAGGED = "flagged"), a),
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
    I = n(385244),
    f =
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
    D = n(375708);
function v(e) {
    return e.type === y.lAJ.AUTO_MODERATION_ACTION;
}
function b(e) {
    return e.embeds?.some((e) => {
        let { type: t } = e;
        return t === y.Auw.AUTO_MODERATION_NOTIFICATION;
    });
}
function M(e, t) {
    let [n] = e.embeds ?? [];
    if (null != n && (n.type === y.Auw.AUTO_MODERATION_MESSAGE || n.type === y.Auw.AUTO_MODERATION_NOTIFICATION))
        return n?.fields?.find((e) => {
            let { rawName: n } = e;
            return n === t;
        })?.rawValue;
}
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y.FXj,
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 ? arguments[4] : void 0,
        a = null != t ? (0, g.m1)(t, O.default, C.A) : D.intl.string(D.t.J90oLW),
        s = (function (e) {
            let t = M(e, h.BLOCK_PROFILE_UPDATE_TYPE);
            if (null != t) return t;
        })(e),
        l = (function (e) {
            let t = M(e, h.QUARANTINE_USER_ACTION);
            if (null != t) return t;
        })(e),
        o = (function (e) {
            let t = M(e, h.QUARANTINE_EVENT);
            if (null != t) return t;
        })(e),
        d = (function (e) {
            let t = M(e, h.QUARANTINE_USER);
            if (null != t) return t;
        })(e),
        c = (function (e) {
            let t = M(e, h.DECISION_OUTCOME);
            if (null != t) return t;
        })(e),
        u = M(e, h.INTERACTION_CALLBACK_TYPE),
        I = M(e, h.APPLICATION_NAME);
    if (null != d) {
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
                        case f.MESSAGE_SEND:
                            return D.intl.string(D.t.PmSMMS);
                        case f.GUILD_JOIN:
                            return D.intl.string(D.t.m9wWzo);
                        case f.USERNAME_UPDATE:
                            return D.intl.string(D.t.KNSkC6);
                        case f.CLAN_TAG_UPDATE:
                            return D.intl.string(D.t.qV4K6j);
                        default:
                            return;
                    }
                case p.BLOCK_GUEST_JOIN:
                    return D.intl.string(D.t.MrYeyS);
            }
        })(s, l, o);
        if (null != e) return e;
    }
    let T = N.A.can(y.xBc.VIEW_CHANNEL, t),
        m = null != t && T ? n : y.FXj,
        S = (function (e, t, n) {
            let i = M(e, h.VOICE_CHANNEL_STATUS_OUTCOME);
            if (null == i) return null;
            let r = "blocked" === i ? D.t.cLQrqz : D.t.bma6cs;
            return D.intl.format(r, { channelName: t, channelHook: n });
        })(e, a, n);
    if (null != S) return S;
    let R = (function (e, t, n) {
        let i = M(e, h.GUILD_ROOM_NOTE_OUTCOME);
        if (null == i) return null;
        let r = "blocked" === i ? D.t["9x7Jdd"] : D.t["srla2+"];
        return D.intl.format(r, { channelName: t, channelHook: n });
    })(e, a, n);
    return null != R
        ? R
        : null != I
          ? u === A.MODAL && null != r
              ? c !== E.BLOCKED
                  ? D.intl.format(D.t["4xL9Sk"], {
                        applicationName: I,
                        interactionUserHook: r,
                        integrationOwnerHook: i,
                    })
                  : D.intl.format(D.t.S3lNIT, { applicationName: I, interactionUserHook: r, integrationOwnerHook: i })
              : c !== E.BLOCKED
                ? D.intl.format(D.t.AXQufN, {
                      applicationName: I,
                      channelName: a,
                      channelHook: m,
                      integrationOwnerHook: i,
                  })
                : D.intl.format(D.t.s3tjMN, {
                      applicationName: I,
                      channelName: a,
                      channelHook: m,
                      integrationOwnerHook: i,
                  })
          : c !== E.BLOCKED
            ? D.intl.format(D.t.IZg0VQ, { channelName: a, channelHook: m })
            : D.intl.format(D.t.lOIOSK, { channelName: a, channelHook: m });
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
    let t = M(e, I.E.NOTIFICATION_TYPE),
        n = M(e, I.E.JOIN_ATTEMPTS),
        i = M(e, I.E.RAID_DATETIME),
        r = M(e, I.E.DMS_SENT),
        a = M(e, I.E.RAID_TYPE),
        s = M(e, I.E.RESOLVED_REASON),
        l = M(e, I.E.DECISION_ID),
        o = M(e, I.E.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
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
    let t = M(e, h.CHANNEL_ID),
        n = M(e, h.ALERT_ACTIONS_EXECUTION),
        i = (0, R.v)(n);
    return {
        content: (function (e) {
            let [t] = e.embeds ?? [];
            return t?.rawDescription ?? "";
        })(e),
        ruleName: M(e, h.RULE_NAME),
        decisionId: M(e, h.DECISION_ID),
        keyword: M(e, h.KEYWORD),
        keywordMatchedContent: M(e, h.KEYWORD_MATCHED_CONTENT),
        flaggedMessageId: M(e, h.FLAGGED_MESSAGE_ID),
        timeoutDuration: M(e, h.TIMEOUT_DURATION),
        quarantineType: M(e, h.QUARANTINE_USER),
        quarantineAction: M(e, h.QUARANTINE_USER_ACTION),
        decisionReason: M(e, h.DECISION_REASON),
        applicationName: M(e, h.APPLICATION_NAME),
        interactionUserId: M(e, h.INTERACTION_USER_ID),
        interactionCallbackType: M(e, h.INTERACTION_CALLBACK_TYPE),
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
function V(e) {
    return M(e, I.E.ACTION_BY_USER_ID);
}
