"use strict";
n.d(t, { lx: () => $, kY: () => z, TB: () => J, Wv: () => K, q1: () => q, nR: () => Z }), n(938796);
var i = n(665260),
    r = n(17928),
    a = n(155718),
    s = n(933958),
    l = n(551639),
    o = n(761640),
    d = n(309010),
    c = n(967198);
function u(e) {
    let t = d.Ay.getChannelId(c.A.getGuildId());
    return t === e || o.Ay.getCurrentSidebarChannelId(t) === e;
}
var _ = n(47167),
    E = n(626584),
    A = n(427930),
    h = n(857071);
n(250953);
var I = n(380335),
    f = n(451909),
    p = n(465856),
    T = n(451919),
    m = n(143413);
n(622794);
var g = n(152007),
    S = n(607508),
    N = n(885386),
    C = n(265690),
    R = n(121894);
let O = (0, n(945810).mj)({
    kind: "user",
    name: "2026-03-stage-voice-panel",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var L = n(734057);
(0, C.h)((e, t) => ({
    channels: new Set(),
    isActivityFocused: !1,
    isVoicePanelFullscreen: () => t().voicePanelsFullscreen.size > 0,
    isAnyVoicePanelOpen: () => t().voicePanelsOpened.size > 0,
    voicePanelsFullscreen: new Set(),
    voicePanelsOpened: new Set(),
    voicePanelsPIP: new Set(),
    openChannel(n) {
        (!O.getConfig({ location: "voice_panel_store" }).enabled && L.A.getChannel(n)?.isGuildStageVoice() === !0) ||
            t().channels.has(n) ||
            (0, R.r)(() => {
                e((e) => ({
                    ...e,
                    channels: new Set([n, ...Array.from(e.channels)]),
                    voicePanelsOpened: new Set([n, ...Array.from(e.voicePanelsOpened)]),
                }));
            });
    },
    closeChannel(t) {
        (0, R.r)(() => {
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
        (0, R.r)(() => {
            e((e) => (e.isActivityFocused === t ? e : { ...e, isActivityFocused: t }));
        });
    },
    setChannelPanelFullscreen(t, n) {
        (0, R.r)(() => {
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
        (0, R.r)(() => {
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
        (0, R.r)(() => {
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
var y = n(95701),
    D = n(71393),
    v = n(763827),
    b = n(994500),
    M = n(461213),
    P = n(543465);
n(870570);
var U = n(287809),
    w = n(562153),
    G = n(861464),
    x = n(427262);
n(970931);
var k = n(228366),
    F = n(280450);
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
let H = new B(k.h, {
    RPC_APP_DISCONNECTED: function (e) {
        delete V[e.socketId];
    },
    SET_RPC_NOTIFICATION_SETTINGS: function (e) {
        delete V[e.socketId], e.suppressNotifications && (V[e.socketId] = e.targetUserId);
    },
});
var j = n(652215);
n(5867);
var W = n(37411),
    Y = n(375708);
function K(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(j.nhx.SPAMMER) || n.isManaged()) return !1;
    let r = n.getGuildId();
    return !(
        (null != r && h.A.isLurking(r)) ||
        (!i.ignoreSameUser && t.id === e.id) ||
        b.A.isBlockedOrIgnored(t.id) ||
        (!i.ignoreStatus && M.A.getStatus() === j.clD.DND) ||
        N.NO.getSetting() ||
        (!i.ignoreNoMessagesSetting && P.Ay.allowNoMessages(n))
    );
}
function $(e, t) {
    var n;
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, i.Lt)(e.flags, j.pr7.SUPPRESS_NOTIFICATIONS)) return !1;
    let l = L.A.getChannel(t);
    e.type === j.lAJ.THREAD_STARTER_MESSAGE && (l = L.A.getChannel(l?.parent_id));
    let o = U.default.getCurrentUser(),
        d = U.default.getUser(e.author?.id);
    if (
        null == l ||
        null == o ||
        null == d ||
        (l.type === j.rbe.GROUP_DM && e.type === j.lAJ.RECIPIENT_REMOVE) ||
        (H.areSlayerNotificationsSuppressed() && ((n = l).type === j.rbe.DM || null != n.linkedLobby)) ||
        !K(o, d, l, { ignoreStatus: a, ignoreSameUser: j.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type) }) ||
        I.A.isMessageRequest(t) ||
        (!r && u(l.id)) ||
        b.A.isBlockedOrIgnoredForMessage(e) ||
        (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === o.id)
    )
        return !1;
    if (null != e.application_id) {
        let n = s.Ay.getCurrentEmbeddedActivity();
        if (n?.applicationId === e.application_id && n.location.channel_id === t) return !1;
    }
    if (y.Le.has(l.type)) {
        if (g.A.isMuted(l.id)) return !1;
        let t = (0, S.l)(l);
        return (
            t !== W.CP.NO_MESSAGES &&
            (t === W.CP.ALL_MESSAGES ||
                (0, T.bG)({ rawMessage: e, userId: o.id, suppressEveryone: !1, suppressRoles: !1 }))
        );
    }
    {
        let t = !y.OU.has(l.type) || v.A.getChannelId() === l.id;
        if (P.Ay.allowAllMessages(l) && t) return !0;
        let n = P.Ay.isSuppressEveryoneEnabled(l.getGuildId()),
            i = P.Ay.isSuppressRolesEnabled(l.getGuildId());
        return (0, T.bG)({ rawMessage: e, userId: o.id, suppressEveryone: n, suppressRoles: i });
    }
}
function z(e, t) {
    if (d.Ay.getChannelId(c.A.getGuildId()) !== t) return !1;
    let n = L.A.getChannel(t);
    e.type === j.lAJ.THREAD_STARTER_MESSAGE && (n = L.A.getChannel(n?.parent_id));
    let i = U.default.getCurrentUser(),
        r = U.default.getUser(e.author?.id);
    return !(
        null == n ||
        null == i ||
        null == r ||
        n.isManaged() ||
        r.hasFlag(j.nhx.SPAMMER) ||
        b.A.isBlockedOrIgnoredForMessage(e) ||
        r.id === i.id ||
        M.A.getStatus() === j.clD.DND ||
        N.NO.getSetting() ||
        P.Ay.allowNoMessages(n)
    );
}
function q(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = U.default.getCurrentUser(),
        a = U.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == r ||
            null == a ||
            !K(r, a, t, { ignoreStatus: i, ignoreNoMessagesSetting: !0 }) ||
            P.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
            (!n && u(t.id))
        ) && P.Ay.getNewForumThreadsCreated(t)
    );
}
function Z(e) {
    let { message: t, channel: n, reactor: i, includeSelectedChannel: r } = e,
        a = U.default.getCurrentUser(),
        s = U.default.getUser(t.author?.id);
    return !(
        null == a ||
        null == s ||
        !K(a, s, n, { ignoreSameUser: !0 }) ||
        (null != i && b.A.isBlockedOrIgnored(i.id)) ||
        (!r && u(n.id))
    );
}
function X(e, t, n) {
    return `${(0, l.az)(e)} (${(0, l.az)((0, _.m1)(t, U.default, b.A, !0))}${null != n ? `, ${(0, l.az)((0, _.m1)(n, U.default, b.A))}` : ""})`;
}
function Q(e, t, n, i) {
    switch (e.type) {
        case j.rbe.GUILD_ANNOUNCEMENT:
        case j.rbe.GUILD_TEXT:
            return t;
        case j.rbe.GROUP_DM:
            return n;
        case j.rbe.DM:
        default:
            return i;
    }
}
function J(e, t, n) {
    let r,
        s = w.Ay.getName(e.getGuildId(), e.id, n),
        l = s;
    switch (e.type) {
        case j.rbe.GUILD_ANNOUNCEMENT:
        case j.rbe.GUILD_TEXT:
        case j.rbe.GUILD_VOICE:
        case j.rbe.ANNOUNCEMENT_THREAD:
        case j.rbe.PUBLIC_THREAD:
        case j.rbe.PRIVATE_THREAD:
            let o = L.A.getChannel(e.parent_id);
            t.type === j.lAJ.THREAD_STARTER_MESSAGE && null != o
                ? (l = X(l, o, L.A.getChannel(o.parent_id)))
                : (0, m.A)(t)
                  ? null != D.A.getGuild(e.getGuildId()) && (l = X(l, e, o))
                  : (l = X(l, e, o));
            break;
        case j.rbe.GROUP_DM:
            (e.isManaged() && n.bot && l === (0, _.m1)(e, U.default, b.A)) || (l = X(l, e));
    }
    let d = t.content;
    if ((0, m.A)(t) && null == (d = G.A.stringify(t, e)))
        throw (
            (new E.A("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
                message: t,
            }),
            Error("failed to stringify system message"))
        );
    let c = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
        u = [];
    if ("message_reference" in t ? (0, A.m)(t) : (0, A.A)(t)) r = Y.intl.string(Y.t["9ddYKt"]);
    else if (null != t.activity && null != t.application)
        r =
            t.activity.type === j.xL.JOIN
                ? Y.intl.formatToPlainString(Q(e, Y.t.E8CgCh, Y.t.c6KHWJ, Y.t.Fy7rJN), {
                      user: s,
                      game: t.application.name,
                  })
                : t.activity.type === j.xL.JOIN_REQUEST
                  ? Y.intl.formatToPlainString(Q(e, Y.t["/TD0la"], Y.t["/TD0la"], Y.t["/TD0la"]), {
                        user: s,
                        game: t.application.name,
                    })
                  : "";
    else if (null != t.activity && t.activity.type === j.xL.LISTEN) {
        let t = Q(e, Y.t.SaDdmN, Y.t.qsODhp, Y.t.WeiMTW);
        r = Y.intl.formatToPlainString(t, { user: s });
    } else if (null != c && c.length > 0) r = Y.intl.formatToPlainString(Y.t.zY4v1B, { stickerName: c[0].name });
    else if (t.type === j.lAJ.PREMIUM_REFERRAL)
        r = Y.intl.formatToPlainString(Y.t.lieTqU, { username: x.Ay.getName(n) });
    else if (null != t.poll) r = Y.intl.formatToPlainString(Y.t.ImizdM, { question: t.poll.question.text });
    else if (t.type === j.lAJ.POLL_RESULT) {
        let e = t.embeds?.[0]?.fields?.find((e) => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
            n = null != e ? ("value" in e ? e.value : e.rawValue) : "";
        r = Y.intl.formatToPlainString(Y.t["9WrecI"], { question: n });
    } else if (null != t.components && t.components.length > 0 && t.components[0].type === a.I5.CHECKPOINT_CARD)
        r = Y.intl.string(Y.t.HWnMTQ);
    else if (
        (({ content: r, emoji: u } = f.Ay.unparseWithMeta(d, e.id, !0)),
        0 !== d.length && e.type === j.rbe.DM && !n.bot && d.startsWith("> -# *"))
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
                if ((0, i.Lt)(e.flags ?? 0, j.pr7.IS_VOICE_MESSAGE)) return Y.intl.string(Y.t.slFYgi);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, p.A)(e.attachments[0]);
                    return Y.intl.formatToPlainString(Y.t["51OkwL"], { filename: t });
                }
                return "";
            })(t)),
        { icon: n.getAvatarURL(e.guild_id, 128), title: l, body: r, emoji: u }
    );
}
