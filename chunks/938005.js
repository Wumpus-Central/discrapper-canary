"use strict";
n.d(t, { lx: () => K, TB: () => Z, Wv: () => W, q1: () => z, kY: () => $ }), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(155718),
    a = n(933958),
    o = n(551639),
    l = n(47167),
    u = n(626584),
    c = n(427930),
    d = n(857071);
n(250953);
var _ = n(380335),
    h = n(451909),
    f = n(465856),
    p = n(451919),
    E = n(143413);
n(622794);
var m = n(152007),
    g = n(607508),
    A = n(885386),
    I = n(265690),
    T = n(121894);
let S = (0, n(945810).mj)({
    kind: "user",
    name: "2026-03-stage-voice-panel",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var y = n(734057);
(0, I.h)((e, t) => ({
    channels: new Set(),
    isActivityFocused: !1,
    isVoicePanelFullscreen: () => t().voicePanelsFullscreen.size > 0,
    isAnyVoicePanelOpen: () => t().voicePanelsOpened.size > 0,
    voicePanelsFullscreen: new Set(),
    voicePanelsOpened: new Set(),
    voicePanelsPIP: new Set(),
    openChannel(n) {
        (!S.getConfig({ location: "voice_panel_store" }).enabled && y.A.getChannel(n)?.isGuildStageVoice() === !0) ||
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
var N = n(95701),
    v = n(761640),
    C = n(71393),
    R = n(763827),
    O = n(994500),
    b = n(309010),
    D = n(967198),
    L = n(461213),
    w = n(543465);
n(870570);
var M = n(287809),
    P = n(562153),
    x = n(861464),
    k = n(427262);
n(970931);
var U = n(228366),
    G = n(495544);
let F = {};
class V extends r.Ay.Store {
    initialize() {
        this.waitFor(G.default);
    }
    static displayName = "RpcNotificationSettingsStore";
    areSlayerNotificationsSuppressed() {
        for (let e in F) if (F[e] === G.default.getId()) return !0;
        return !1;
    }
}
let B = new V(U.h, {
    RPC_APP_DISCONNECTED: function (e) {
        delete F[e.socketId];
    },
    SET_RPC_NOTIFICATION_SETTINGS: function (e) {
        delete F[e.socketId], e.suppressNotifications && (F[e.socketId] = e.targetUserId);
    },
});
var H = n(652215);
n(5867);
var j = n(37411),
    Y = n(375708);
function W(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(H.nhx.SPAMMER) || n.isManaged()) return !1;
    let r = n.getGuildId();
    return !(
        (null != r && d.A.isLurking(r)) ||
        (!i.ignoreSameUser && t.id === e.id) ||
        O.A.isBlockedOrIgnored(t.id) ||
        (!i.ignoreStatus && L.A.getStatus() === H.clD.DND) ||
        A.NO.getSetting() ||
        (!i.ignoreNoMessagesSetting && w.Ay.allowNoMessages(n))
    );
}
function K(e, t) {
    var n;
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, i.Lt)(e.flags, H.pr7.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = y.A.getChannel(t);
    e.type === H.lAJ.THREAD_STARTER_MESSAGE && (o = y.A.getChannel(o?.parent_id));
    let l = M.default.getCurrentUser(),
        u = M.default.getUser(e.author?.id);
    if (
        null == o ||
        null == l ||
        null == u ||
        (o.type === H.rbe.GROUP_DM && e.type === H.lAJ.RECIPIENT_REMOVE) ||
        (B.areSlayerNotificationsSuppressed() && ((n = o).type === H.rbe.DM || null != n.linkedLobby)) ||
        !W(l, u, o, { ignoreStatus: s, ignoreSameUser: H.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type) }) ||
        _.A.isMessageRequest(t)
    )
        return !1;
    if (!r) {
        let e = b.A.getChannelId(D.A.getGuildId());
        if (e === o.id || v.Ay.getCurrentSidebarChannelId(e) === o.id) return !1;
    }
    if (
        O.A.isBlockedOrIgnoredForMessage(e) ||
        (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === l.id)
    )
        return !1;
    if (null != e.application_id) {
        let n = a.Ay.getCurrentEmbeddedActivity();
        if (n?.applicationId === e.application_id && n.location.channel_id === t) return !1;
    }
    if (N.Le.has(o.type)) {
        if (m.A.isMuted(o.id)) return !1;
        let t = (0, g.l)(o);
        return (
            t !== j.CP.NO_MESSAGES &&
            (t === j.CP.ALL_MESSAGES ||
                (0, p.bG)({ rawMessage: e, userId: l.id, suppressEveryone: !1, suppressRoles: !1 }))
        );
    }
    {
        let t = !N.OU.has(o.type) || R.A.getChannelId() === o.id;
        if (w.Ay.allowAllMessages(o) && t) return !0;
        let n = w.Ay.isSuppressEveryoneEnabled(o.getGuildId()),
            i = w.Ay.isSuppressRolesEnabled(o.getGuildId());
        return (0, p.bG)({ rawMessage: e, userId: l.id, suppressEveryone: n, suppressRoles: i });
    }
}
function $(e, t) {
    if (b.A.getChannelId(D.A.getGuildId()) !== t) return !1;
    let n = y.A.getChannel(t);
    e.type === H.lAJ.THREAD_STARTER_MESSAGE && (n = y.A.getChannel(n?.parent_id));
    let i = M.default.getCurrentUser(),
        r = M.default.getUser(e.author?.id);
    return !(
        null == n ||
        null == i ||
        null == r ||
        n.isManaged() ||
        r.hasFlag(H.nhx.SPAMMER) ||
        O.A.isBlockedOrIgnoredForMessage(e) ||
        r.id === i.id ||
        L.A.getStatus() === H.clD.DND ||
        A.NO.getSetting() ||
        w.Ay.allowNoMessages(n)
    );
}
function z(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = M.default.getCurrentUser(),
        s = M.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == r ||
            null == s ||
            !W(r, s, t, { ignoreStatus: i, ignoreNoMessagesSetting: !0 }) ||
            w.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || b.A.getChannelId(D.A.getGuildId()) !== t.id) &&
        w.Ay.getNewForumThreadsCreated(t)
    );
}
let q = (e, t, n) =>
    `${(0, o.az)(e)} (${(0, o.az)((0, l.m1)(t, M.default, O.A, !0))}${null != n ? `, ${(0, o.az)((0, l.m1)(n, M.default, O.A))}` : ""})`;
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
function Z(e, t, n) {
    let r,
        a = P.Ay.getName(e.getGuildId(), e.id, n),
        o = a;
    switch (e.type) {
        case H.rbe.GUILD_ANNOUNCEMENT:
        case H.rbe.GUILD_TEXT:
        case H.rbe.GUILD_VOICE:
        case H.rbe.ANNOUNCEMENT_THREAD:
        case H.rbe.PUBLIC_THREAD:
        case H.rbe.PRIVATE_THREAD:
            let d = y.A.getChannel(e.parent_id);
            t.type === H.lAJ.THREAD_STARTER_MESSAGE && null != d
                ? (o = q(o, d, y.A.getChannel(d.parent_id)))
                : (0, E.A)(t)
                  ? null != C.A.getGuild(e.getGuildId()) && (o = q(o, e, d))
                  : (o = q(o, e, d));
            break;
        case H.rbe.GROUP_DM:
            (e.isManaged() && n.bot && o === (0, l.m1)(e, M.default, O.A)) || (o = q(o, e));
    }
    let _ = t.content;
    if ((0, E.A)(t) && null == (_ = x.A.stringify(t, e)))
        throw (
            (new u.A("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
                message: t,
            }),
            Error("failed to stringify system message"))
        );
    let p = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
        m = [];
    if ("message_reference" in t ? (0, c.m)(t) : (0, c.A)(t)) r = Y.intl.string(Y.t["9ddYKt"]);
    else if (null != t.activity && null != t.application)
        r =
            t.activity.type === H.xL.JOIN
                ? Y.intl.formatToPlainString(X(e, Y.t.E8CgCh, Y.t.c6KHWJ, Y.t.Fy7rJN), {
                      user: a,
                      game: t.application.name,
                  })
                : t.activity.type === H.xL.JOIN_REQUEST
                  ? Y.intl.formatToPlainString(X(e, Y.t["/TD0la"], Y.t["/TD0la"], Y.t["/TD0la"]), {
                        user: a,
                        game: t.application.name,
                    })
                  : "";
    else if (null != t.activity && t.activity.type === H.xL.LISTEN) {
        let t = X(e, Y.t.SaDdmN, Y.t.qsODhp, Y.t.WeiMTW);
        r = Y.intl.formatToPlainString(t, { user: a });
    } else if (null != p && p.length > 0) r = Y.intl.formatToPlainString(Y.t.zY4v1B, { stickerName: p[0].name });
    else if (t.type === H.lAJ.PREMIUM_REFERRAL)
        r = Y.intl.formatToPlainString(Y.t.lieTqU, { username: k.Ay.getName(n) });
    else if (null != t.poll) r = Y.intl.formatToPlainString(Y.t.ImizdM, { question: t.poll.question.text });
    else if (t.type === H.lAJ.POLL_RESULT) {
        let e = t.embeds?.[0]?.fields?.find((e) => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
            n = null != e ? ("value" in e ? e.value : e.rawValue) : "";
        r = Y.intl.formatToPlainString(Y.t["9WrecI"], { question: n });
    } else if (null != t.components && t.components.length > 0 && t.components[0].type === s.I5.CHECKPOINT_CARD)
        r = Y.intl.string(Y.t.HWnMTQ);
    else if (
        (({ content: r, emoji: m } = h.Ay.unparseWithMeta(_, e.id, !0)),
        0 !== _.length && e.type === H.rbe.DM && !n.bot && _.startsWith("> -# *"))
    )
        for (let e of ((r = r.substring(0, 1) + r.substring(4)), m)) e.position -= 2;
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
                if ((0, i.Lt)(e.flags ?? 0, H.pr7.IS_VOICE_MESSAGE)) return Y.intl.string(Y.t.slFYgi);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, f.A)(e.attachments[0]);
                    return Y.intl.formatToPlainString(Y.t["51OkwL"], { filename: t });
                }
                return "";
            })(t)),
        { icon: n.getAvatarURL(e.guild_id, 128), title: o, body: r, emoji: m }
    );
}
