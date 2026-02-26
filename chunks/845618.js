"use strict";
n.d(t, { cH: () => J, pD: () => ee }), n(321073);
var r = n(136722),
    i = n(311907),
    s = n(506774),
    a = n(73153),
    o = n(308528),
    l = n(367513),
    u = n(686956),
    c = n(264686),
    d = n(956793),
    _ = n(77729),
    f = n(883600),
    p = n(47167),
    h = n(435470),
    m = n(707592),
    E = n(22007),
    g = n(380335),
    A = n(141468),
    I = n(535586),
    T = n(742984),
    S = n(571524),
    y = n(277628),
    v = n(695515),
    N = n(976860),
    C = n(378570),
    b = n(323443),
    R = n(446600),
    O = n(747926),
    D = n(253932),
    L = n(260509),
    w = n(734057),
    x = n(71393),
    M = n(320501),
    P = n(803224),
    k = n(576705),
    U = n(222823),
    G = n(994500),
    F = n(309010),
    V = n(461213),
    B = n(351906),
    H = n(287809),
    j = n(977997),
    Y = n(954571),
    W = n(562153),
    K = n(723702),
    z = n(427262),
    $ = n(970061),
    q = n(652215),
    Z = n(988794),
    X = n(672396),
    Q = n(985018);
let J = "message1",
    ee = 0.4,
    et = "message3",
    en = 0.4,
    er = "message2",
    ei = 0.4,
    es = _.A?.features.supports("notifications") ? 20 : 1,
    ea = "discord_dismissed_notification_shown",
    eo = document.hasFocus(),
    el = null,
    eu = new Set(),
    ec = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    ed = new (class {
        _channels = {};
        track(e, t, n) {
            let r = this._channels[e];
            for (
                null == r && ((r = []), (this._channels[e] = r)), r.push({ notification: t, trackingProps: n });
                r.length > es;
            ) {
                let e = r.shift();
                e?.notification?.close != null &&
                    (e.notification.close(),
                    Y.default.track(q.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...e.trackingProps }));
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t &&
                (delete this._channels[e],
                t.forEach((e) => {
                    let { notification: t, trackingProps: n } = e;
                    t.close(), Y.default.track(q.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n });
                }));
        }
    })();
function e_(e) {
    if ((eo = e.focused)) {
        let e = F.A.getChannelId();
        null != e && ed.clearChannel(e);
    }
}
function ef(e) {
    let { voiceStates: t } = e;
    if (ep()) return;
    let n = H.default.getCurrentUser();
    if (null == n) return;
    let r = t.find((e) => e.userId === n.id);
    if (null == r) return;
    let { channelId: i, guildId: s, suppress: a, requestToSpeakTimestamp: o } = r,
        l = !a && null != o;
    if (null == i || null == s || !l) return;
    let u = x.A.getGuild(s),
        c = w.A.getChannel(i),
        d = R.A.getStageInstanceByChannel(i);
    null != u &&
        null != c &&
        null != d &&
        $.A.showNotification(
            (0, L.Iv)(u, 128),
            c.name,
            Q.intl.formatToPlainString(Q.t.sqnsSP, {
                channelName: (0, p.m1)(c, H.default, G.A),
                channelTopic: d?.topic,
            }),
            { notif_type: "Stage Speak Invite" },
            { isUserAvatar: !1 },
        );
}
function ep() {
    return !!(
        P.A.getDesktopType() === q.nRU.NEVER ||
        V.A.getStatus() === q.clD.DND ||
        D.NO.getSetting() ||
        v.A.isCurrentUserInRestrictedHours()
    );
}
function eh(e) {
    let { channelId: t, message: r, optimistic: i } = e;
    if (i) return !1;
    let s = w.A.getChannel(t),
        o = H.default.getUser(r.author?.id),
        u = H.default.getCurrentUser();
    if (null == s || null == o || null == u) return !1;
    let d = (0, T.lx)(r, t, !eo),
        _ = P.A.getNotifyMessagesInSelectedChannel() && (0, T.kY)(r, t);
    if (
        (!d && !_) ||
        (r.type === q.lAJ.CHANGELOG && (null == r.changelog_id || f.A.latestChangelogId() !== r.changelog_id))
    )
        return !1;
    let p = !P.A.isSoundDisabled(J);
    if ((_ && (p && $.A.playNotificationSound(et, en), !eo)) || !d) return !1;
    let h = n(242286).default,
        m = n(592598).A;
    if (null != h.getFocusedPID() && !m.isNotificationDisabled(X.KS.TextChat) && !B.A.disableNotifications) return !1;
    let { icon: E, title: g, body: S, emoji: v } = (0, T.TB)(s, r, o),
        N = !(0, y.Z)("NotificationStore.handleMessage", u?.id);
    if (
        (a.h.dispatch({ type: "RPC_NOTIFICATION_CREATE", channelId: s.id, message: r, icon: E, title: g, body: S }),
        (0, I.n)(r, s.guild_id),
        P.A.getDesktopType() === q.nRU.NEVER)
    )
        return p && $.A.playNotificationSound(J, ee), !1;
    let b = M.A.getMessage(t, r.id) ?? (0, A.rh)(r);
    $.A.showNotification(
        E,
        g,
        S,
        {
            notif_type: "MESSAGE_CREATE",
            notif_user_id: r.author?.id,
            message_id: r.id,
            message_type: r.type,
            channel_id: s.id,
            channel_type: s.type,
            guild_id: s.guild_id,
            badge: (0, U.Wm)(b, u),
        },
        {
            omitViewTracking: N,
            tag: r.id,
            sound: p ? J : void 0,
            volume: ee,
            onClick() {
                (0, C.iN)(s.id),
                    (s.type === q.rbe.GUILD_VOICE || s.type === q.rbe.GUILD_STAGE_VOICE) &&
                        l.A.updateChatOpen(s.id, !0),
                    c.default.clickedNotification();
            },
            isUserAvatar: !0,
            messageRecord: b,
            fallbackDeepLink: (0, $.I)(q.BVt.CHANNEL(s.guild_id, s.id, r.id)),
            emoji: v,
        },
    ).then((e) => {
        null != e && ed.track(s.id, e.notification, e.trackingProps);
    });
}
function em(e) {
    let { enabled: t } = e;
    t !== q.kCE.ENABLED ||
        K.isPlatformEmbedded ||
        $.A.showNotification(
            n(705194),
            Q.intl.string(Q.t.VSgOVg),
            Q.intl.string(Q.t["1UJvqc"]),
            { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
            {
                sound: J,
                volume: ee,
                tag: "hello",
                onClick: () => {
                    window.focus();
                },
                isUserAvatar: !1,
            },
        );
}
function eE(e) {
    let { channelId: t } = e;
    return null != t && ed.clearChannel(t), !1;
}
function eg(e) {
    let { channelId: t } = e;
    return ed.clearChannel(t), !1;
}
function eA(e) {
    let { userId: t, activity: n } = e;
    if (ep() || n.type !== q.$pd.PLAYING) return !1;
    {
        let e = H.default.getUser(t);
        if (null == e) return !1;
        let r = z.Ay.getName(e),
            i = n.name,
            s = e.getAvatarURL(void 0, 128),
            a = Q.intl.string(Q.t.XoTWsI),
            l = Q.intl.formatToPlainString(Q.t.o4Aipn, { username: r, gameName: i });
        return (
            $.A.showNotification(
                s,
                a,
                l,
                { notif_type: "ACTIVITY_START", activity_type: q.$pd.PLAYING, notif_user_id: t, activity_name: i },
                {
                    sound: er,
                    playSoundIfDisabled: !1,
                    volume: ei,
                    onClick() {
                        o.A.openPrivateChannel({ recipientIds: t });
                    },
                    isUserAvatar: !0,
                },
            ),
            !1
        );
    }
}
function eI(e) {
    let { channel: t, isNewlyCreated: n } = e;
    if (ep()) return !1;
    let r = w.A.getChannel(t.parent_id);
    if (null == r || !q.kvI.GUILD_THREADS_ONLY.has(r.type) || !n || !(0, T.q1)(t, r, !eo)) return !1;
    let { author: i, user: s } = (0, h.tY)(t);
    if (null == s) return !1;
    let a = x.A.getGuild(r.guild_id);
    if (null == a) return !1;
    let o = Q.intl.formatToPlainString(Q.t["2IGVl5"], { channelName: r.name, guildName: a.name }),
        l = Q.intl.formatToPlainString(Q.t.jPhTvT, { channelName: t.name, userUsername: i?.nick ?? s?.username }),
        u = s.getAvatarURL(void 0, 128);
    $.A.showNotification(
        u,
        o,
        l,
        { notif_type: "THREAD_CREATE", notif_user_id: s.id },
        {
            onClick() {
                (0, O.JA)(t);
            },
            isUserAvatar: !0,
        },
    );
}
function eT(e) {
    return null != j.A.getVoiceStateForChannel(e);
}
function eS(e) {
    if (ep()) return !1;
    let t = e.channel_id;
    if (null == t || eT(t)) return !1;
    let n = H.default.getCurrentUser(),
        i = x.A.getGuild(e.guild_id),
        s = w.A.getChannel(e.channel_id),
        a = H.default.getUser(e.host_id);
    if (null == n || null == s || null == i || null == a || !k.A.can(r.kg(q.xBc.CONNECT, q.xBc.VIEW_CHANNEL), s))
        return !1;
    $.A.showNotification(
        (0, L.Iv)(i, 128),
        Q.intl.formatToPlainString(Q.t.bOu6Wn, { guildName: i.name }),
        Q.intl.formatToPlainString(Q.t.GV9L8u, { topic: e.name, username: W.Ay.getName(i.id, s.id, a) }),
        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: i.id, channel_id: s.id },
        {
            onClick() {
                e.entity_type === Z.Ps.STAGE_INSTANCE && (0, b.av)(s),
                    e.entity_type === Z.Ps.VOICE && d.default.selectVoiceChannel(s.id);
            },
            isUserAvatar: !1,
        },
    );
}
function ey(e) {
    if (ep()) return !1;
    let t = H.default.getCurrentUser(),
        n = x.A.getGuild(e.guild_id);
    if (null == t || null == n) return !1;
    $.A.showNotification(
        (0, L.Iv)(n, 128),
        Q.intl.formatToPlainString(Q.t.bOu6Wn, { guildName: n.name }),
        Q.intl.formatToPlainString(Q.t.mYyaRB, { topic: e.name }),
        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: n.id },
        {
            onClick() {
                u.A.transitionToGuildSync(e.guild_id), (0, m.uR)({ eventId: e.id });
            },
            isUserAvatar: !1,
        },
    );
}
function ev(e) {
    let { guildScheduledEvent: t } = e;
    if (ep() || null == t.notification_type) return !1;
    t.notification_type === Z.b8.EVENT_START &&
        (t.entity_type === Z.Ps.STAGE_INSTANCE || t.entity_type === Z.Ps.VOICE
            ? eS(t)
            : t.entity_type === Z.Ps.EXTERNAL && ey(t));
}
function eN(e) {
    let { instance: t } = e;
    if (ep() || !t.send_start_notification || eT(t.channel_id)) return !1;
    let n = H.default.getCurrentUser(),
        i = x.A.getGuild(t.guild_id),
        s = w.A.getChannel(t.channel_id),
        a = H.default.getUser(t.host_id);
    if (
        null == n ||
        null == s ||
        null == i ||
        null == a ||
        !(0, T.Wv)(n, a, s) ||
        !k.A.can(r.kg(q.xBc.CONNECT, q.xBc.VIEW_CHANNEL), s) ||
        eu.has(t.id)
    )
        return !1;
    eu.add(t.id),
        $.A.showNotification(
            (0, L.Iv)(i, 128),
            Q.intl.formatToPlainString(Q.t.bZ4Okd, { guildName: i.name }),
            Q.intl.formatToPlainString(Q.t.qTelnO, { username: W.Ay.getName(i.id, s.id, a), topic: t.topic }),
            { notif_type: "STAGE_INSTANCE_CREATE", guild_id: i.id, channel_id: s.id },
            {
                onClick() {
                    (0, b.av)(s);
                },
                isUserAvatar: !1,
            },
        );
}
function eC(e) {
    let { instance: t } = e;
    eu.delete(t.id);
}
function eb(e) {
    let { savedMessage: t } = e;
    if (ep()) return !1;
    let n = t.message;
    if (null == n || null == n.author) return !1;
    let r = w.A.getChannel(t.saveData.channelId);
    if (null == r) return !1;
    let { icon: i, body: s } = (0, T.TB)(r, n, n.author);
    $.A.showNotification(
        i,
        Q.intl.string(Q.t.IjZJB5),
        s,
        { notif_type: "MESSAGE_REMINDER_DUE" },
        {
            onClick() {
                (0, E.A)(q.BVt.CHANNEL(r?.getGuildId(), r.id, n.id));
            },
            isUserAvatar: !0,
        },
    );
}
function eR(e) {
    let t,
        { icon: n, title: r, body: i, route: s, trackingType: a, tag: o } = e;
    if (ep() || null == r || null == i || null == a || "reactions_push_notification" === a.toLowerCase()) return !1;
    $.A.showNotification(
        n,
        r,
        i,
        { notif_type: a },
        {
            onClick() {
                null != s && ((0, E.A)(s), c.default.clickedNotification());
            },
            tag: o,
            isUserAvatar: !1,
        },
    ).then((e) => {
        null != e && null != t && ed.track(t, e.notification, e.trackingProps);
    });
}
function eO(e) {
    let { icon: t, title: n, body: r, route: i, trackingType: s, message: a, reactorUserId: o } = e;
    if (ep() || null == n || null == r || null == s) return !1;
    let l = a.channel_id;
    if (null == l || (F.A.getCurrentlySelectedChannelId() === l && eo)) return !1;
    let u = w.A.getChannel(l);
    if (null == u) return !1;
    if (u.type === q.rbe.GROUP_DM) {
        let e = H.default.getCurrentUser();
        if (a.author?.id !== e?.id && !S.A.getConfig({ location: "desktopNotification" }).showSettingsToggle) return !1;
    }
    $.A.showNotification(
        t,
        n,
        r,
        { notif_type: s, notif_user_id: o, message_id: a.id },
        {
            onClick() {
                null != i && ((0, E.A)(i), c.default.clickedNotification());
            },
            isUserAvatar: !0,
        },
    ).then((e) => {
        null != e && null != l && ed.track(l, e.notification, e.trackingProps);
    });
}
function eD(e) {
    let { icon: t, title: n, body: r, trackingProps: i, options: s } = e;
    return !ep() && ($.A.showNotification(t, n, r, i, s), !1);
}
function eL(e) {
    let { countryCode: t, guilds: n } = e;
    (el = t), eu.clear(), n.forEach((e) => e.stage_instances.forEach((e) => eu.add(e.id)));
}
function ew() {
    let e = (0, K.isWindows)(),
        t = (0, K.isLinux)();
    if (!(!s.w.get(ea, !1) && K.isPlatformEmbedded && (e || t))) return !1;
    let r = !1;
    return (
        null != el && (r = ec.includes(el)),
        !!r &&
            ($.A.showNotification(
                n(608598),
                Q.intl.string(Q.t.VSgOVg),
                Q.intl.string(Q.t["+J/F66"]),
                { notif_type: "WINDOW_HIDDEN" },
                {
                    overrideStreamerMode: !0,
                    onClick: () => {
                        (0, N.pX)(q.BVt.SETTINGS(e ? "windows" : "linux"));
                    },
                    onShown: () => {
                        s.w.set(ea, !0);
                    },
                    isUserAvatar: !1,
                },
            ),
            !1)
    );
}
function ex() {
    return s.w.remove(ea), !1;
}
class eM extends i.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(f.A, w.A, v.A, x.A, g.A, M.A, P.A, k.A, G.A, F.A, V.A, R.A, B.A, H.default, j.A);
    }
}
new eM(
    a.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: em,
              NOTIFICATION_CREATE: eD,
              WINDOW_FOCUS: e_,
              MESSAGE_CREATE: eh,
              CHANNEL_SELECT: eE,
              MESSAGE_ACK: eg,
              ACTIVITY_START: eA,
              VOICE_STATE_UPDATES: ef,
              STAGE_INSTANCE_UPDATE: eN,
              STAGE_INSTANCE_DELETE: eC,
              GUILD_SCHEDULED_EVENT_UPDATE: ev,
              THREAD_CREATE: eI,
              GENERIC_PUSH_NOTIFICATION_SENT: eR,
              REACTION_NOTIFICATION_SENT: eO,
              WINDOW_HIDDEN: ew,
              LOGOUT: ex,
              CONNECTION_OPEN: eL,
              MESSAGE_REMINDER_DUE: eb,
          },
);
