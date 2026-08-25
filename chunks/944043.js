"use strict";
n.d(t, { lx: () => z, kY: () => Z, TB: () => ee, Wv: () => $, q1: () => q, nR: () => X }), n(938796);
var i = n(665260),
    r = n(17928),
    a = n(155718),
    s = n(933958),
    l = n(323073),
    o = n(551639),
    d = n(761640),
    c = n(309010),
    u = n(967198);
function _(e) {
    let t = c.Ay.getChannelId(u.A.getGuildId());
    return t === e || d.Ay.getCurrentSidebarChannelId(t) === e;
}
var E = n(47167),
    A = n(626584),
    h = n(427930),
    I = n(857071);
n(250953);
var f = n(380335),
    p = n(451909),
    T = n(465856),
    m = n(451919),
    g = n(143413);
n(622794);
var S = n(152007),
    N = n(607508),
    C = n(885386),
    R = n(882035),
    O = n(121894);
let L = (0, n(945810).mj)({
    kind: "user",
    name: "2026-03-stage-voice-panel",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var y = n(734057);
(0, R.h)((e, t) => ({
    channels: new Set(),
    isActivityFocused: !1,
    isVoicePanelFullscreen: () => t().voicePanelsFullscreen.size > 0,
    isAnyVoicePanelOpen: () => t().voicePanelsOpened.size > 0,
    voicePanelsFullscreen: new Set(),
    voicePanelsOpened: new Set(),
    voicePanelsPIP: new Set(),
    openChannel(n) {
        (!L.getConfig({ location: "voice_panel_store" }).enabled && y.A.getChannel(n)?.isGuildStageVoice() === !0) ||
            t().channels.has(n) ||
            (0, O.r)(() => {
                e((e) => ({
                    ...e,
                    channels: new Set([n, ...Array.from(e.channels)]),
                    voicePanelsOpened: new Set([n, ...Array.from(e.voicePanelsOpened)]),
                }));
            });
    },
    closeChannel(t) {
        (0, O.r)(() => {
            e((e) => {
                let { channels: n, voicePanelsFullscreen: i, voicePanelsOpened: r } = e;
                return n.has(t) || i.has(t) || r.has(t)
                    ? (n.has(t) && (n = new Set(n)).delete(t),
                      i.has(t) && (i = new Set(i)).delete(t),
                      r.has(t) && (r = new Set(r)).delete(t),
                      { ...e, channels: n, voicePanelsFullscreen: i, voicePanelsOpened: r })
                    : e;
            });
        });
    },
    isMounted: (e) => t().channels.has(e),
    setIsActivityFocused(t) {
        (0, O.r)(() => {
            e((e) => (e.isActivityFocused === t ? e : { ...e, isActivityFocused: t }));
        });
    },
    setChannelPanelFullscreen(t, n) {
        (0, O.r)(() => {
            e((e) => {
                let i = new Set(e.voicePanelsFullscreen);
                if (n) {
                    if (i.has(t)) return e;
                    i.add(t);
                } else {
                    if (!i.has(t)) return e;
                    i.delete(t);
                }
                return { ...e, voicePanelsFullscreen: i };
            });
        });
    },
    setChannelPanelOpen(t, n) {
        (0, O.r)(() => {
            e((e) => {
                if (!e.channels.has(t)) return e;
                let i = new Set(e.voicePanelsOpened);
                if (n) {
                    if (i.has(t)) return e;
                    i.add(t);
                } else {
                    if (!i.has(t)) return e;
                    i.delete(t);
                }
                return { ...e, voicePanelsOpened: i };
            });
        });
    },
    isChannelOpen: (e) => t().voicePanelsOpened.has(e),
    setChannelPanelPIP(t, n) {
        (0, O.r)(() => {
            e((e) => {
                let i = new Set(e.voicePanelsPIP);
                if (n) {
                    if (i.has(t)) return e;
                    i.add(t);
                } else {
                    if (!i.has(t)) return e;
                    i.delete(t);
                }
                return { ...e, voicePanelsPIP: i };
            });
        });
    },
}));
var D = n(95701),
    v = n(71393),
    b = n(763827),
    M = n(994500),
    P = n(461213),
    U = n(543465);
n(870570);
var w = n(287809),
    G = n(562153),
    x = n(861464),
    k = n(427262);
n(970931);
var F = n(228366),
    V = n(280450);
let B = {};
class H extends r.Ay.Store {
    initialize() {
        this.waitFor(V.default);
    }
    static displayName = "RpcNotificationSettingsStore";
    areSlayerNotificationsSuppressed() {
        for (let e in B) if (B[e] === V.default.getId()) return !0;
        return !1;
    }
}
let j = new H(F.h, {
    RPC_APP_DISCONNECTED: function (e) {
        delete B[e.socketId];
    },
    SET_RPC_NOTIFICATION_SETTINGS: function (e) {
        delete B[e.socketId], e.suppressNotifications && (B[e.socketId] = e.targetUserId);
    },
});
var W = n(652215);
n(5867);
var Y = n(37411),
    K = n(375708);
function $(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(W.nhx.SPAMMER) || n.isManaged() || (0, l.qR)(n)) return !1;
    let r = n.getGuildId();
    return !(
        (null != r && I.A.isLurking(r)) ||
        (!i.ignoreSameUser && t.id === e.id) ||
        M.A.isBlockedOrIgnored(t.id) ||
        (!i.ignoreStatus && P.A.getStatus() === W.clD.DND) ||
        C.NO.getSetting() ||
        (!i.ignoreNoMessagesSetting && U.Ay.allowNoMessages(n))
    );
}
function z(e, t) {
    var n;
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, i.Lt)(e.flags, W.pr7.SUPPRESS_NOTIFICATIONS)) return !1;
    let l = y.A.getChannel(t);
    e.type === W.lAJ.THREAD_STARTER_MESSAGE && (l = y.A.getChannel(l?.parent_id));
    let o = w.default.getCurrentUser(),
        d = w.default.getUser(e.author?.id);
    if (
        null == l ||
        null == o ||
        null == d ||
        (l.type === W.rbe.GROUP_DM && e.type === W.lAJ.RECIPIENT_REMOVE) ||
        (j.areSlayerNotificationsSuppressed() && ((n = l).type === W.rbe.DM || null != n.linkedLobby)) ||
        !$(o, d, l, { ignoreStatus: a, ignoreSameUser: W.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type) }) ||
        f.A.isMessageRequest(t) ||
        (!r && _(l.id)) ||
        M.A.isBlockedOrIgnoredForMessage(e) ||
        (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === o.id)
    )
        return !1;
    if (null != e.application_id) {
        let n = s.Ay.getCurrentEmbeddedActivity();
        if (n?.applicationId === e.application_id && n.location.channel_id === t) return !1;
    }
    if (D.Le.has(l.type)) {
        if (S.A.isMuted(l.id)) return !1;
        let t = (0, N.l)(l);
        return (
            t !== Y.CP.NO_MESSAGES &&
            (t === Y.CP.ALL_MESSAGES ||
                (0, m.bG)({ rawMessage: e, userId: o.id, suppressEveryone: !1, suppressRoles: !1 }))
        );
    }
    {
        let t = !D.OU.has(l.type) || b.A.getChannelId() === l.id;
        if (U.Ay.allowAllMessages(l) && t) return !0;
        let n = U.Ay.isSuppressEveryoneEnabled(l.getGuildId()),
            i = U.Ay.isSuppressRolesEnabled(l.getGuildId());
        return (0, m.bG)({ rawMessage: e, userId: o.id, suppressEveryone: n, suppressRoles: i });
    }
}
function Z(e, t) {
    if (c.Ay.getChannelId(u.A.getGuildId()) !== t) return !1;
    let n = y.A.getChannel(t);
    e.type === W.lAJ.THREAD_STARTER_MESSAGE && (n = y.A.getChannel(n?.parent_id));
    let i = w.default.getCurrentUser(),
        r = w.default.getUser(e.author?.id);
    return !(
        null == n ||
        null == i ||
        null == r ||
        n.isManaged() ||
        r.hasFlag(W.nhx.SPAMMER) ||
        M.A.isBlockedOrIgnoredForMessage(e) ||
        r.id === i.id ||
        P.A.getStatus() === W.clD.DND ||
        C.NO.getSetting() ||
        U.Ay.allowNoMessages(n)
    );
}
function q(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = w.default.getCurrentUser(),
        a = w.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == r ||
            null == a ||
            !$(r, a, t, { ignoreStatus: i, ignoreNoMessagesSetting: !0 }) ||
            U.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
            (!n && _(t.id))
        ) && U.Ay.getNewForumThreadsCreated(t)
    );
}
function X(e) {
    let { message: t, channel: n, reactor: i, includeSelectedChannel: r } = e,
        a = w.default.getCurrentUser(),
        s = w.default.getUser(t.author?.id);
    return !(
        null == a ||
        null == s ||
        !$(a, s, n, { ignoreSameUser: !0 }) ||
        (null != i && M.A.isBlockedOrIgnored(i.id)) ||
        (!r && _(n.id))
    );
}
function Q(e, t, n) {
    return `${(0, o.az)(e)} (${(0, o.az)((0, E.m1)(t, w.default, M.A, !0))}${null != n ? `, ${(0, o.az)((0, E.m1)(n, w.default, M.A))}` : ""})`;
}
function J(e, t, n, i) {
    switch (e.type) {
        case W.rbe.GUILD_ANNOUNCEMENT:
        case W.rbe.GUILD_TEXT:
            return t;
        case W.rbe.GROUP_DM:
            return n;
        case W.rbe.DM:
        default:
            return i;
    }
}
function ee(e, t, n) {
    let r,
        s = G.Ay.getName(e.getGuildId(), e.id, n),
        l = s;
    switch (e.type) {
        case W.rbe.GUILD_ANNOUNCEMENT:
        case W.rbe.GUILD_TEXT:
        case W.rbe.GUILD_VOICE:
        case W.rbe.ANNOUNCEMENT_THREAD:
        case W.rbe.PUBLIC_THREAD:
        case W.rbe.PRIVATE_THREAD:
            let o = y.A.getChannel(e.parent_id);
            t.type === W.lAJ.THREAD_STARTER_MESSAGE && null != o
                ? (l = Q(l, o, y.A.getChannel(o.parent_id)))
                : (0, g.A)(t)
                  ? null != v.A.getGuild(e.getGuildId()) && (l = Q(l, e, o))
                  : (l = Q(l, e, o));
            break;
        case W.rbe.GROUP_DM:
            (e.isManaged() && n.bot && l === (0, E.m1)(e, w.default, M.A)) || (l = Q(l, e));
    }
    let d = t.content;
    if ((0, g.A)(t) && null == (d = x.A.stringify(t, e)))
        throw (
            (new A.A("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
                message: t,
            }),
            Error("failed to stringify system message"))
        );
    let c = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
        u = [];
    if ("message_reference" in t ? (0, h.m)(t) : (0, h.A)(t)) r = K.intl.string(K.t["9ddYKt"]);
    else if (null != t.activity && null != t.application)
        r =
            t.activity.type === W.xL.JOIN
                ? K.intl.formatToPlainString(J(e, K.t.E8CgCh, K.t.c6KHWJ, K.t.Fy7rJN), {
                      user: s,
                      game: t.application.name,
                  })
                : t.activity.type === W.xL.JOIN_REQUEST
                  ? K.intl.formatToPlainString(J(e, K.t["/TD0la"], K.t["/TD0la"], K.t["/TD0la"]), {
                        user: s,
                        game: t.application.name,
                    })
                  : "";
    else if (null != t.activity && t.activity.type === W.xL.LISTEN) {
        let t = J(e, K.t.SaDdmN, K.t.qsODhp, K.t.WeiMTW);
        r = K.intl.formatToPlainString(t, { user: s });
    } else if (null != c && c.length > 0) r = K.intl.formatToPlainString(K.t.zY4v1B, { stickerName: c[0].name });
    else if (t.type === W.lAJ.PREMIUM_REFERRAL)
        r = K.intl.formatToPlainString(K.t.lieTqU, { username: k.Ay.getName(n) });
    else if (null != t.poll) r = K.intl.formatToPlainString(K.t.ImizdM, { question: t.poll.question.text });
    else if (t.type === W.lAJ.POLL_RESULT) {
        let e = t.embeds?.[0]?.fields?.find((e) => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
            n = null != e ? ("value" in e ? e.value : e.rawValue) : "";
        r = K.intl.formatToPlainString(K.t["9WrecI"], { question: n });
    } else if (null != t.components && t.components.length > 0 && t.components[0].type === a.I5.CHECKPOINT_CARD)
        r = K.intl.string(K.t.HWnMTQ);
    else if (
        (({ content: r, emoji: u } = p.Ay.unparseWithMeta(d, e.id, !0)),
        0 !== d.length && e.type === W.rbe.DM && !n.bot && d.startsWith("> -# *"))
    )
        for (let e of ((r = r.substring(0, 1) + r.substring(4)), u)) e.position -= 2;
    return (
        0 === r.length &&
            (r = (function (e) {
                if (void 0 !== e.embeds && e.embeds.length > 0) {
                    let t = e.embeds[0],
                        n = "description" in t ? t.description : t.rawDescription,
                        i = "title" in t ? t.title : t.rawTitle;
                    if (null != n) return null != i ? `${i} ${n}` : n;
                    if (null != i) return i;
                    if (null != t.fields && t.fields.length > 0) {
                        let e = t.fields[0],
                            n = "name" in e ? e.name : e.rawName,
                            i = "value" in e ? e.value : e.rawValue;
                        return `${n} ${i}`;
                    }
                }
                if ((0, i.Lt)(e.flags ?? 0, W.pr7.IS_VOICE_MESSAGE)) return K.intl.string(K.t.slFYgi);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, T.A)(e.attachments[0]);
                    return K.intl.formatToPlainString(K.t["51OkwL"], { filename: t });
                }
                return "";
            })(t)),
        { icon: n.getAvatarURL(e.guild_id, 128), title: l, body: r, emoji: u }
    );
}
