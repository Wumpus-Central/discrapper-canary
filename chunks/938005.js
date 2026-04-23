"use strict";
n.d(t, { lx: () => K, TB: () => Z, Wv: () => Y, q1: () => $, kY: () => z }), n(938796);
var i = n(665260),
    r = n(155718),
    s = n(933958),
    a = n(551639),
    o = n(47167),
    l = n(626584),
    d = n(427930),
    _ = n(857071);
n(250953);
var u = n(380335),
    c = n(451909),
    E = n(465856),
    h = n(451919),
    m = n(143413);
n(622794);
var f = n(152007),
    g = n(607508),
    p = n(253932),
    A = n(265690),
    I = n(121894);
let T = (0, n(945810).mj)({
    kind: "user",
    name: "2026-03-stage-voice-panel",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var S = n(734057);
(0, A.h)((e, t) => ({
    channels: new Set(),
    isActivityFocused: !1,
    isVoicePanelFullscreen: () => t().voicePanelsFullscreen.size > 0,
    isAnyVoicePanelOpen: () => t().voicePanelsOpened.size > 0,
    voicePanelsFullscreen: new Set(),
    voicePanelsOpened: new Set(),
    voicePanelsPIP: new Set(),
    openChannel(n) {
        (!T.getConfig({ location: "voice_panel_store" }).enabled && S.A.getChannel(n)?.isGuildStageVoice() === !0) ||
            t().channels.has(n) ||
            (0, I.r)(() => {
                e((e) => ({
                    ...e,
                    channels: new Set([n, ...Array.from(e.channels)]),
                    voicePanelsOpened: new Set([n, ...Array.from(e.voicePanelsOpened)]),
                }));
            });
    },
    closeChannel(t) {
        (0, I.r)(() => {
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
        (0, I.r)(() => {
            e((e) => (e.isActivityFocused === t ? e : { ...e, isActivityFocused: t }));
        });
    },
    setChannelPanelFullscreen(t, n) {
        (0, I.r)(() => {
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
        (0, I.r)(() => {
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
        (0, I.r)(() => {
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
    C = n(761640),
    R = n(71393),
    O = n(763827),
    y = n(994500),
    v = n(309010),
    D = n(967198),
    L = n(461213),
    b = n(543465),
    w = n(287809),
    P = n(562153),
    k = n(861464),
    M = n(427262);
n(970931);
var U = n(17928),
    x = n(228366),
    G = n(495544);
let V = {};
class F extends U.Ay.Store {
    initialize() {
        this.waitFor(G.default);
    }
    static displayName = "RpcNotificationSettingsStore";
    areSlayerNotificationsSuppressed() {
        for (let e in V) if (V[e] === G.default.getId()) return !0;
        return !1;
    }
}
let B = new F(x.h, {
    RPC_APP_DISCONNECTED: function (e) {
        delete V[e.socketId];
    },
    SET_RPC_NOTIFICATION_SETTINGS: function (e) {
        delete V[e.socketId], e.suppressNotifications && (V[e.socketId] = e.targetUserId);
    },
});
var H = n(652215);
n(5867);
var j = n(37411),
    W = n(985018);
function Y(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(H.nhx.SPAMMER) || n.isManaged()) return !1;
    let r = n.getGuildId();
    return !(
        (null != r && _.A.isLurking(r)) ||
        (!i.ignoreSameUser && t.id === e.id) ||
        y.A.isBlockedOrIgnored(t.id) ||
        (!i.ignoreStatus && L.A.getStatus() === H.clD.DND) ||
        p.NO.getSetting() ||
        (!i.ignoreNoMessagesSetting && b.Ay.allowNoMessages(n))
    );
}
function K(e, t) {
    var n;
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, i.Lt)(e.flags, H.pr7.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = S.A.getChannel(t);
    e.type === H.lAJ.THREAD_STARTER_MESSAGE && (o = S.A.getChannel(o?.parent_id));
    let l = w.default.getCurrentUser(),
        d = w.default.getUser(e.author?.id);
    if (
        null == o ||
        null == l ||
        null == d ||
        (o.type === H.rbe.GROUP_DM && e.type === H.lAJ.RECIPIENT_REMOVE) ||
        (B.areSlayerNotificationsSuppressed() && ((n = o).type === H.rbe.DM || null != n.linkedLobby)) ||
        !Y(l, d, o, { ignoreStatus: a, ignoreSameUser: H.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type) }) ||
        u.A.isMessageRequest(t)
    )
        return !1;
    if (!r) {
        let e = v.A.getChannelId(D.A.getGuildId());
        if (e === o.id || C.Ay.getCurrentSidebarChannelId(e) === o.id) return !1;
    }
    if (
        y.A.isBlockedOrIgnoredForMessage(e) ||
        (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === l.id)
    )
        return !1;
    if (null != e.application_id) {
        let n = s.Ay.getCurrentEmbeddedActivity();
        if (n?.applicationId === e.application_id && n.location.channel_id === t) return !1;
    }
    if (N.Le.has(o.type)) {
        if (f.A.isMuted(o.id)) return !1;
        let t = (0, g.l)(o);
        return (
            t !== j.CP.NO_MESSAGES &&
            (t === j.CP.ALL_MESSAGES ||
                (0, h.bG)({ rawMessage: e, userId: l.id, suppressEveryone: !1, suppressRoles: !1 }))
        );
    }
    {
        let t = !N.OU.has(o.type) || O.A.getChannelId() === o.id;
        if (b.Ay.allowAllMessages(o) && t) return !0;
        let n = b.Ay.isSuppressEveryoneEnabled(o.getGuildId()),
            i = b.Ay.isSuppressRolesEnabled(o.getGuildId());
        return (0, h.bG)({ rawMessage: e, userId: l.id, suppressEveryone: n, suppressRoles: i });
    }
}
function z(e, t) {
    if (v.A.getChannelId(D.A.getGuildId()) !== t) return !1;
    let n = S.A.getChannel(t);
    e.type === H.lAJ.THREAD_STARTER_MESSAGE && (n = S.A.getChannel(n?.parent_id));
    let i = w.default.getCurrentUser(),
        r = w.default.getUser(e.author?.id);
    return !(
        null == n ||
        null == i ||
        null == r ||
        n.isManaged() ||
        r.hasFlag(H.nhx.SPAMMER) ||
        y.A.isBlockedOrIgnoredForMessage(e) ||
        r.id === i.id ||
        L.A.getStatus() === H.clD.DND ||
        p.NO.getSetting() ||
        b.Ay.allowNoMessages(n)
    );
}
function $(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = w.default.getCurrentUser(),
        s = w.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == r ||
            null == s ||
            !Y(r, s, t, { ignoreStatus: i, ignoreNoMessagesSetting: !0 }) ||
            b.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || v.A.getChannelId(D.A.getGuildId()) !== t.id) &&
        b.Ay.getNewForumThreadsCreated(t)
    );
}
let q = (e, t, n) =>
    `${(0, a.az)(e)} (${(0, a.az)((0, o.m1)(t, w.default, y.A, !0))}${null != n ? `, ${(0, a.az)((0, o.m1)(n, w.default, y.A))}` : ""})`;
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
    let s,
        a = P.Ay.getName(e.getGuildId(), e.id, n),
        _ = a;
    switch (e.type) {
        case H.rbe.GUILD_ANNOUNCEMENT:
        case H.rbe.GUILD_TEXT:
        case H.rbe.GUILD_VOICE:
        case H.rbe.ANNOUNCEMENT_THREAD:
        case H.rbe.PUBLIC_THREAD:
        case H.rbe.PRIVATE_THREAD:
            let u = S.A.getChannel(e.parent_id);
            t.type === H.lAJ.THREAD_STARTER_MESSAGE && null != u
                ? (_ = q(_, u, S.A.getChannel(u.parent_id)))
                : (0, m.A)(t)
                  ? null != R.A.getGuild(e.getGuildId()) && (_ = q(_, e, u))
                  : (_ = q(_, e, u));
            break;
        case H.rbe.GROUP_DM:
            (e.isManaged() && n.bot && _ === (0, o.m1)(e, w.default, y.A)) || (_ = q(_, e));
    }
    let h = t.content;
    if ((0, m.A)(t) && null == (h = k.A.stringify(t, e)))
        throw (
            (new l.A("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
                message: t,
            }),
            Error("failed to stringify system message"))
        );
    let f = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
        g = [];
    if ("message_reference" in t ? (0, d.m)(t) : (0, d.A)(t)) s = W.intl.string(W.t["9ddYKt"]);
    else if (null != t.activity && null != t.application)
        s =
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
        s = W.intl.formatToPlainString(t, { user: a });
    } else if (null != f && f.length > 0) s = W.intl.formatToPlainString(W.t.zY4v1B, { stickerName: f[0].name });
    else if (t.type === H.lAJ.PREMIUM_REFERRAL)
        s = W.intl.formatToPlainString(W.t.lieTqU, { username: M.Ay.getName(n) });
    else if (null != t.poll) s = W.intl.formatToPlainString(W.t.ImizdM, { question: t.poll.question.text });
    else if (t.type === H.lAJ.POLL_RESULT) {
        let e = t.embeds?.[0]?.fields?.find((e) => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
            n = null != e ? ("value" in e ? e.value : e.rawValue) : "";
        s = W.intl.formatToPlainString(W.t["9WrecI"], { question: n });
    } else if (null != t.components && t.components.length > 0 && t.components[0].type === r.I5.CHECKPOINT_CARD)
        s = W.intl.string(W.t.HWnMTQ);
    else if (
        (({ content: s, emoji: g } = c.Ay.unparseWithMeta(h, e.id, !0)),
        0 !== h.length && e.type === H.rbe.DM && !n.bot && h.startsWith("> -# *"))
    )
        for (let e of ((s = s.substring(0, 1) + s.substring(4)), g)) e.position -= 2;
    return (
        0 === s.length &&
            (s = (function (e) {
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
                    let t = (0, E.A)(e.attachments[0]);
                    return W.intl.formatToPlainString(W.t["51OkwL"], { filename: t });
                }
                return "";
            })(t)),
        { icon: n.getAvatarURL(e.guild_id, 128), title: _, body: s, emoji: g }
    );
}
