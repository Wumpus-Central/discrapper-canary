"use strict";
n.d(t, { lx: () => $, kY: () => z, TB: () => J, Wv: () => K, q1: () => q, nR: () => Z }), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(155718),
    a = n(933958),
    o = n(551639),
    l = n(761640),
    u = n(309010),
    c = n(967198);
function d(e) {
    let t = u.A.getChannelId(c.A.getGuildId());
    return t === e || l.Ay.getCurrentSidebarChannelId(t) === e;
}
var _ = n(47167),
    h = n(626584),
    f = n(427930),
    p = n(857071);
n(250953);
var E = n(380335),
    m = n(451909),
    g = n(465856),
    A = n(451919),
    I = n(143413);
n(622794);
var T = n(152007),
    S = n(607508),
    y = n(885386),
    C = n(265690),
    N = n(121894);
let v = (0, n(945810).mj)({
    kind: "user",
    name: "2026-03-stage-voice-panel",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var R = n(734057);
(0, C.h)((e, t) => ({
    channels: new Set(),
    isActivityFocused: !1,
    isVoicePanelFullscreen: () => t().voicePanelsFullscreen.size > 0,
    isAnyVoicePanelOpen: () => t().voicePanelsOpened.size > 0,
    voicePanelsFullscreen: new Set(),
    voicePanelsOpened: new Set(),
    voicePanelsPIP: new Set(),
    openChannel(n) {
        (!v.getConfig({ location: "voice_panel_store" }).enabled && R.A.getChannel(n)?.isGuildStageVoice() === !0) ||
            t().channels.has(n) ||
            (0, N.r)(() => {
                e((e) => ({
                    ...e,
                    channels: new Set([n, ...Array.from(e.channels)]),
                    voicePanelsOpened: new Set([n, ...Array.from(e.voicePanelsOpened)]),
                }));
            });
    },
    closeChannel(t) {
        (0, N.r)(() => {
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
        (0, N.r)(() => {
            e((e) => (e.isActivityFocused === t ? e : { ...e, isActivityFocused: t }));
        });
    },
    setChannelPanelFullscreen(t, n) {
        (0, N.r)(() => {
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
        (0, N.r)(() => {
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
        (0, N.r)(() => {
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
var O = n(95701),
    b = n(71393),
    D = n(763827),
    L = n(994500),
    w = n(461213),
    M = n(543465);
n(870570);
var P = n(287809),
    x = n(562153),
    k = n(861464),
    U = n(427262);
n(970931);
var G = n(228366),
    F = n(495544);
let V = {};
class B extends r.Ay.Store {
    initialize() {
        this.waitFor(F.default);
    }
    static displayName = "RpcNotificationSettingsStore";
    areSlayerNotificationsSuppressed() {
        for (let e in V) if (V[e] === F.default.getId()) return !0;
        return !1;
    }
}
let j = new B(G.h, {
    RPC_APP_DISCONNECTED: function (e) {
        delete V[e.socketId];
    },
    SET_RPC_NOTIFICATION_SETTINGS: function (e) {
        delete V[e.socketId], e.suppressNotifications && (V[e.socketId] = e.targetUserId);
    },
});
var H = n(652215);
n(5867);
var Y = n(37411),
    W = n(375708);
function K(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(H.nhx.SPAMMER) || n.isManaged()) return !1;
    let r = n.getGuildId();
    return !(
        (null != r && p.A.isLurking(r)) ||
        (!i.ignoreSameUser && t.id === e.id) ||
        L.A.isBlockedOrIgnored(t.id) ||
        (!i.ignoreStatus && w.A.getStatus() === H.clD.DND) ||
        y.NO.getSetting() ||
        (!i.ignoreNoMessagesSetting && M.Ay.allowNoMessages(n))
    );
}
function $(e, t) {
    var n;
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, i.Lt)(e.flags, H.pr7.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = R.A.getChannel(t);
    e.type === H.lAJ.THREAD_STARTER_MESSAGE && (o = R.A.getChannel(o?.parent_id));
    let l = P.default.getCurrentUser(),
        u = P.default.getUser(e.author?.id);
    if (
        null == o ||
        null == l ||
        null == u ||
        (o.type === H.rbe.GROUP_DM && e.type === H.lAJ.RECIPIENT_REMOVE) ||
        (j.areSlayerNotificationsSuppressed() && ((n = o).type === H.rbe.DM || null != n.linkedLobby)) ||
        !K(l, u, o, { ignoreStatus: s, ignoreSameUser: H.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type) }) ||
        E.A.isMessageRequest(t) ||
        (!r && d(o.id)) ||
        L.A.isBlockedOrIgnoredForMessage(e) ||
        (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === l.id)
    )
        return !1;
    if (null != e.application_id) {
        let n = a.Ay.getCurrentEmbeddedActivity();
        if (n?.applicationId === e.application_id && n.location.channel_id === t) return !1;
    }
    if (O.Le.has(o.type)) {
        if (T.A.isMuted(o.id)) return !1;
        let t = (0, S.l)(o);
        return (
            t !== Y.CP.NO_MESSAGES &&
            (t === Y.CP.ALL_MESSAGES ||
                (0, A.bG)({ rawMessage: e, userId: l.id, suppressEveryone: !1, suppressRoles: !1 }))
        );
    }
    {
        let t = !O.OU.has(o.type) || D.A.getChannelId() === o.id;
        if (M.Ay.allowAllMessages(o) && t) return !0;
        let n = M.Ay.isSuppressEveryoneEnabled(o.getGuildId()),
            i = M.Ay.isSuppressRolesEnabled(o.getGuildId());
        return (0, A.bG)({ rawMessage: e, userId: l.id, suppressEveryone: n, suppressRoles: i });
    }
}
function z(e, t) {
    if (u.A.getChannelId(c.A.getGuildId()) !== t) return !1;
    let n = R.A.getChannel(t);
    e.type === H.lAJ.THREAD_STARTER_MESSAGE && (n = R.A.getChannel(n?.parent_id));
    let i = P.default.getCurrentUser(),
        r = P.default.getUser(e.author?.id);
    return !(
        null == n ||
        null == i ||
        null == r ||
        n.isManaged() ||
        r.hasFlag(H.nhx.SPAMMER) ||
        L.A.isBlockedOrIgnoredForMessage(e) ||
        r.id === i.id ||
        w.A.getStatus() === H.clD.DND ||
        y.NO.getSetting() ||
        M.Ay.allowNoMessages(n)
    );
}
function q(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = P.default.getCurrentUser(),
        s = P.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == r ||
            null == s ||
            !K(r, s, t, { ignoreStatus: i, ignoreNoMessagesSetting: !0 }) ||
            M.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
            (!n && d(t.id))
        ) && M.Ay.getNewForumThreadsCreated(t)
    );
}
function Z(e) {
    let { message: t, channel: n, reactor: i, includeSelectedChannel: r } = e,
        s = P.default.getCurrentUser(),
        a = P.default.getUser(t.author?.id);
    return !(
        null == s ||
        null == a ||
        !K(s, a, n, { ignoreSameUser: !0 }) ||
        (null != i && L.A.isBlockedOrIgnored(i.id)) ||
        (!r && d(n.id))
    );
}
function X(e, t, n) {
    return `${(0, o.az)(e)} (${(0, o.az)((0, _.m1)(t, P.default, L.A, !0))}${null != n ? `, ${(0, o.az)((0, _.m1)(n, P.default, L.A))}` : ""})`;
}
function Q(e, t, n, i) {
    switch (e.type) {
        case H.rbe.GUILD_ANNOUNCEMENT:
        case H.rbe.GUILD_TEXT:
            return t;
        case H.rbe.GROUP_DM:
            return n;
        case H.rbe.DM:
        default:
            return i;
    }
}
function J(e, t, n) {
    let r,
        a = x.Ay.getName(e.getGuildId(), e.id, n),
        o = a;
    switch (e.type) {
        case H.rbe.GUILD_ANNOUNCEMENT:
        case H.rbe.GUILD_TEXT:
        case H.rbe.GUILD_VOICE:
        case H.rbe.ANNOUNCEMENT_THREAD:
        case H.rbe.PUBLIC_THREAD:
        case H.rbe.PRIVATE_THREAD:
            let l = R.A.getChannel(e.parent_id);
            t.type === H.lAJ.THREAD_STARTER_MESSAGE && null != l
                ? (o = X(o, l, R.A.getChannel(l.parent_id)))
                : (0, I.A)(t)
                  ? null != b.A.getGuild(e.getGuildId()) && (o = X(o, e, l))
                  : (o = X(o, e, l));
            break;
        case H.rbe.GROUP_DM:
            (e.isManaged() && n.bot && o === (0, _.m1)(e, P.default, L.A)) || (o = X(o, e));
    }
    let u = t.content;
    if ((0, I.A)(t) && null == (u = k.A.stringify(t, e)))
        throw (
            (new h.A("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
                message: t,
            }),
            Error("failed to stringify system message"))
        );
    let c = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
        d = [];
    if ("message_reference" in t ? (0, f.m)(t) : (0, f.A)(t)) r = W.intl.string(W.t["9ddYKt"]);
    else if (null != t.activity && null != t.application)
        r =
            t.activity.type === H.xL.JOIN
                ? W.intl.formatToPlainString(Q(e, W.t.E8CgCh, W.t.c6KHWJ, W.t.Fy7rJN), {
                      user: a,
                      game: t.application.name,
                  })
                : t.activity.type === H.xL.JOIN_REQUEST
                  ? W.intl.formatToPlainString(Q(e, W.t["/TD0la"], W.t["/TD0la"], W.t["/TD0la"]), {
                        user: a,
                        game: t.application.name,
                    })
                  : "";
    else if (null != t.activity && t.activity.type === H.xL.LISTEN) {
        let t = Q(e, W.t.SaDdmN, W.t.qsODhp, W.t.WeiMTW);
        r = W.intl.formatToPlainString(t, { user: a });
    } else if (null != c && c.length > 0) r = W.intl.formatToPlainString(W.t.zY4v1B, { stickerName: c[0].name });
    else if (t.type === H.lAJ.PREMIUM_REFERRAL)
        r = W.intl.formatToPlainString(W.t.lieTqU, { username: U.Ay.getName(n) });
    else if (null != t.poll) r = W.intl.formatToPlainString(W.t.ImizdM, { question: t.poll.question.text });
    else if (t.type === H.lAJ.POLL_RESULT) {
        let e = t.embeds?.[0]?.fields?.find((e) => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
            n = null != e ? ("value" in e ? e.value : e.rawValue) : "";
        r = W.intl.formatToPlainString(W.t["9WrecI"], { question: n });
    } else if (null != t.components && t.components.length > 0 && t.components[0].type === s.I5.CHECKPOINT_CARD)
        r = W.intl.string(W.t.HWnMTQ);
    else if (
        (({ content: r, emoji: d } = m.Ay.unparseWithMeta(u, e.id, !0)),
        0 !== u.length && e.type === H.rbe.DM && !n.bot && u.startsWith("> -# *"))
    )
        for (let e of ((r = r.substring(0, 1) + r.substring(4)), d)) e.position -= 2;
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
                if ((0, i.Lt)(e.flags ?? 0, H.pr7.IS_VOICE_MESSAGE)) return W.intl.string(W.t.slFYgi);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, g.A)(e.attachments[0]);
                    return W.intl.formatToPlainString(W.t["51OkwL"], { filename: t });
                }
                return "";
            })(t)),
        { icon: n.getAvatarURL(e.guild_id, 128), title: o, body: r, emoji: d }
    );
}
