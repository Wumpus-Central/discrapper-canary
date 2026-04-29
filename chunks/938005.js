"use strict";
n.d(t, { lx: () => j, TB: () => Q, Wv: () => K, q1: () => z, kY: () => $ }), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(155718),
    a = n(933958),
    o = n(551639),
    l = n(47167),
    _ = n(626584),
    d = n(427930),
    u = n(857071);
n(250953);
var c = n(380335),
    E = n(451909),
    h = n(465856),
    m = n(451919),
    f = n(143413);
n(622794);
var g = n(152007),
    A = n(607508),
    I = n(253932),
    p = n(265690),
    T = n(121894);
let S = (0, n(945810).mj)({
    kind: "user",
    name: "2026-03-stage-voice-panel",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var N = n(734057);
(0, p.h)((e, t) => ({
    channels: new Set(),
    isActivityFocused: !1,
    isVoicePanelFullscreen: () => t().voicePanelsFullscreen.size > 0,
    isAnyVoicePanelOpen: () => t().voicePanelsOpened.size > 0,
    voicePanelsFullscreen: new Set(),
    voicePanelsOpened: new Set(),
    voicePanelsPIP: new Set(),
    openChannel(n) {
        (!S.getConfig({ location: "voice_panel_store" }).enabled && N.A.getChannel(n)?.isGuildStageVoice() === !0) ||
            t().channels.has(n) ||
            (0, T.r)(() => {
                e((e) => ({
                    ...e,
                    channels: new Set([n, ...Array.from(e.channels)]),
                    voicePanelsOpened: new Set([n, ...Array.from(e.voicePanelsOpened)]),
                }));
            });
    },
    closeChannel(t) {
        (0, T.r)(() => {
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
        (0, T.r)(() => {
            e((e) => (e.isActivityFocused === t ? e : { ...e, isActivityFocused: t }));
        });
    },
    setChannelPanelFullscreen(t, n) {
        (0, T.r)(() => {
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
        (0, T.r)(() => {
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
        (0, T.r)(() => {
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
    R = n(761640),
    C = n(71393),
    y = n(763827),
    D = n(994500),
    L = n(309010),
    v = n(967198),
    w = n(461213),
    P = n(543465);
n(870570);
var b = n(287809),
    k = n(562153),
    U = n(861464),
    M = n(427262);
n(970931);
var G = n(228366),
    x = n(495544);
let V = {};
class F extends r.Ay.Store {
    initialize() {
        this.waitFor(x.default);
    }
    static displayName = "RpcNotificationSettingsStore";
    areSlayerNotificationsSuppressed() {
        for (let e in V) if (V[e] === x.default.getId()) return !0;
        return !1;
    }
}
let B = new F(G.h, {
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
    W = n(985018);
function K(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(H.nhx.SPAMMER) || n.isManaged()) return !1;
    let r = n.getGuildId();
    return !(
        (null != r && u.A.isLurking(r)) ||
        (!i.ignoreSameUser && t.id === e.id) ||
        D.A.isBlockedOrIgnored(t.id) ||
        (!i.ignoreStatus && w.A.getStatus() === H.clD.DND) ||
        I.NO.getSetting() ||
        (!i.ignoreNoMessagesSetting && P.Ay.allowNoMessages(n))
    );
}
function j(e, t) {
    var n;
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, i.Lt)(e.flags, H.pr7.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = N.A.getChannel(t);
    e.type === H.lAJ.THREAD_STARTER_MESSAGE && (o = N.A.getChannel(o?.parent_id));
    let l = b.default.getCurrentUser(),
        _ = b.default.getUser(e.author?.id);
    if (
        null == o ||
        null == l ||
        null == _ ||
        (o.type === H.rbe.GROUP_DM && e.type === H.lAJ.RECIPIENT_REMOVE) ||
        (B.areSlayerNotificationsSuppressed() && ((n = o).type === H.rbe.DM || null != n.linkedLobby)) ||
        !K(l, _, o, { ignoreStatus: s, ignoreSameUser: H.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type) }) ||
        c.A.isMessageRequest(t)
    )
        return !1;
    if (!r) {
        let e = L.A.getChannelId(v.A.getGuildId());
        if (e === o.id || R.Ay.getCurrentSidebarChannelId(e) === o.id) return !1;
    }
    if (
        D.A.isBlockedOrIgnoredForMessage(e) ||
        (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === l.id)
    )
        return !1;
    if (null != e.application_id) {
        let n = a.Ay.getCurrentEmbeddedActivity();
        if (n?.applicationId === e.application_id && n.location.channel_id === t) return !1;
    }
    if (O.Le.has(o.type)) {
        if (g.A.isMuted(o.id)) return !1;
        let t = (0, A.l)(o);
        return (
            t !== Y.CP.NO_MESSAGES &&
            (t === Y.CP.ALL_MESSAGES ||
                (0, m.bG)({ rawMessage: e, userId: l.id, suppressEveryone: !1, suppressRoles: !1 }))
        );
    }
    {
        let t = !O.OU.has(o.type) || y.A.getChannelId() === o.id;
        if (P.Ay.allowAllMessages(o) && t) return !0;
        let n = P.Ay.isSuppressEveryoneEnabled(o.getGuildId()),
            i = P.Ay.isSuppressRolesEnabled(o.getGuildId());
        return (0, m.bG)({ rawMessage: e, userId: l.id, suppressEveryone: n, suppressRoles: i });
    }
}
function $(e, t) {
    if (L.A.getChannelId(v.A.getGuildId()) !== t) return !1;
    let n = N.A.getChannel(t);
    e.type === H.lAJ.THREAD_STARTER_MESSAGE && (n = N.A.getChannel(n?.parent_id));
    let i = b.default.getCurrentUser(),
        r = b.default.getUser(e.author?.id);
    return !(
        null == n ||
        null == i ||
        null == r ||
        n.isManaged() ||
        r.hasFlag(H.nhx.SPAMMER) ||
        D.A.isBlockedOrIgnoredForMessage(e) ||
        r.id === i.id ||
        w.A.getStatus() === H.clD.DND ||
        I.NO.getSetting() ||
        P.Ay.allowNoMessages(n)
    );
}
function z(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = b.default.getCurrentUser(),
        s = b.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == r ||
            null == s ||
            !K(r, s, t, { ignoreStatus: i, ignoreNoMessagesSetting: !0 }) ||
            P.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || L.A.getChannelId(v.A.getGuildId()) !== t.id) &&
        P.Ay.getNewForumThreadsCreated(t)
    );
}
let q = (e, t, n) =>
    `${(0, o.az)(e)} (${(0, o.az)((0, l.m1)(t, b.default, D.A, !0))}${null != n ? `, ${(0, o.az)((0, l.m1)(n, b.default, D.A))}` : ""})`;
function X(e, t, n, i) {
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
function Q(e, t, n) {
    let r,
        a = k.Ay.getName(e.getGuildId(), e.id, n),
        o = a;
    switch (e.type) {
        case H.rbe.GUILD_ANNOUNCEMENT:
        case H.rbe.GUILD_TEXT:
        case H.rbe.GUILD_VOICE:
        case H.rbe.ANNOUNCEMENT_THREAD:
        case H.rbe.PUBLIC_THREAD:
        case H.rbe.PRIVATE_THREAD:
            let u = N.A.getChannel(e.parent_id);
            t.type === H.lAJ.THREAD_STARTER_MESSAGE && null != u
                ? (o = q(o, u, N.A.getChannel(u.parent_id)))
                : (0, f.A)(t)
                  ? null != C.A.getGuild(e.getGuildId()) && (o = q(o, e, u))
                  : (o = q(o, e, u));
            break;
        case H.rbe.GROUP_DM:
            (e.isManaged() && n.bot && o === (0, l.m1)(e, b.default, D.A)) || (o = q(o, e));
    }
    let c = t.content;
    if ((0, f.A)(t) && null == (c = U.A.stringify(t, e)))
        throw (
            (new _.A("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
                message: t,
            }),
            Error("failed to stringify system message"))
        );
    let m = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
        g = [];
    if ("message_reference" in t ? (0, d.m)(t) : (0, d.A)(t)) r = W.intl.string(W.t["9ddYKt"]);
    else if (null != t.activity && null != t.application)
        r =
            t.activity.type === H.xL.JOIN
                ? W.intl.formatToPlainString(X(e, W.t.E8CgCh, W.t.c6KHWJ, W.t.Fy7rJN), {
                      user: a,
                      game: t.application.name,
                  })
                : t.activity.type === H.xL.JOIN_REQUEST
                  ? W.intl.formatToPlainString(X(e, W.t["/TD0la"], W.t["/TD0la"], W.t["/TD0la"]), {
                        user: a,
                        game: t.application.name,
                    })
                  : "";
    else if (null != t.activity && t.activity.type === H.xL.LISTEN) {
        let t = X(e, W.t.SaDdmN, W.t.qsODhp, W.t.WeiMTW);
        r = W.intl.formatToPlainString(t, { user: a });
    } else if (null != m && m.length > 0) r = W.intl.formatToPlainString(W.t.zY4v1B, { stickerName: m[0].name });
    else if (t.type === H.lAJ.PREMIUM_REFERRAL)
        r = W.intl.formatToPlainString(W.t.lieTqU, { username: M.Ay.getName(n) });
    else if (null != t.poll) r = W.intl.formatToPlainString(W.t.ImizdM, { question: t.poll.question.text });
    else if (t.type === H.lAJ.POLL_RESULT) {
        let e = t.embeds?.[0]?.fields?.find((e) => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
            n = null != e ? ("value" in e ? e.value : e.rawValue) : "";
        r = W.intl.formatToPlainString(W.t["9WrecI"], { question: n });
    } else if (null != t.components && t.components.length > 0 && t.components[0].type === s.I5.CHECKPOINT_CARD)
        r = W.intl.string(W.t.HWnMTQ);
    else if (
        (({ content: r, emoji: g } = E.Ay.unparseWithMeta(c, e.id, !0)),
        0 !== c.length && e.type === H.rbe.DM && !n.bot && c.startsWith("> -# *"))
    )
        for (let e of ((r = r.substring(0, 1) + r.substring(4)), g)) e.position -= 2;
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
                    let t = (0, h.A)(e.attachments[0]);
                    return W.intl.formatToPlainString(W.t["51OkwL"], { filename: t });
                }
                return "";
            })(t)),
        { icon: n.getAvatarURL(e.guild_id, 128), title: o, body: r, emoji: g }
    );
}
