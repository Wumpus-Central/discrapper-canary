"use strict";
n.d(t, { cH: () => et, pD: () => en }), n(321073);
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
    R = n(323443),
    O = n(446600),
    b = n(747926),
    D = n(253932),
    L = n(718446),
    w = n(260509),
    M = n(734057),
    P = n(71393),
    x = n(320501),
    k = n(803224),
    U = n(576705),
    G = n(222823),
    F = n(994500),
    V = n(309010),
    B = n(461213),
    H = n(351906),
    j = n(287809),
    Y = n(977997),
    W = n(954571),
    K = n(562153),
    $ = n(723702),
    z = n(427262),
    q = n(970061),
    Z = n(652215),
    X = n(988794),
    Q = n(672396),
    J = n(355097),
    ee = n(985018);
let et = "message1",
    en = 0.4,
    er = "message3",
    ei = 0.4,
    es = "message2",
    ea = 0.4,
    eo = _.A?.features.supports("notifications") ? 20 : 1,
    el = "discord_dismissed_notification_shown",
    eu = document.hasFocus(),
    ec = null,
    ed = new Set(),
    e_ = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    ef = new (class {
        _channels = {};
        track(e, t, n) {
            let r = this._channels[e];
            for (
                null == r && ((r = []), (this._channels[e] = r)), r.push({ notification: t, trackingProps: n });
                r.length > eo;
            ) {
                let e = r.shift();
                e?.notification?.close != null &&
                    (e.notification.close(),
                    W.default.track(Z.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...e.trackingProps }));
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t &&
                (delete this._channels[e],
                t.forEach((e) => {
                    let { notification: t, trackingProps: n } = e;
                    t.close(), W.default.track(Z.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n });
                }));
        }
    })();
function ep(e) {
    if ((eu = e.focused)) {
        let e = V.A.getChannelId();
        null != e && ef.clearChannel(e);
    }
}
function eh(e) {
    let { voiceStates: t } = e;
    if (em()) return;
    let n = j.default.getCurrentUser();
    if (null == n) return;
    let r = t.find((e) => e.userId === n.id);
    if (null == r) return;
    let { channelId: i, guildId: s, suppress: a, requestToSpeakTimestamp: o } = r,
        l = !a && null != o;
    if (null == i || null == s || !l) return;
    let u = P.A.getGuild(s),
        c = M.A.getChannel(i),
        d = O.A.getStageInstanceByChannel(i);
    null != u &&
        null != c &&
        null != d &&
        q.A.showNotification(
            (0, w.Iv)(u, 128),
            (0, p.m1)(c, j.default, F.A),
            ee.intl.formatToPlainString(ee.t.sqnsSP, {
                channelName: (0, p.m1)(c, j.default, F.A),
                channelTopic: d?.topic,
            }),
            { notif_type: "Stage Speak Invite" },
            { isUserAvatar: !1 },
        );
}
function em() {
    return !!(
        k.A.getDesktopType() === Z.nRU.NEVER ||
        B.A.getStatus() === Z.clD.DND ||
        D.NO.getSetting() ||
        v.A.isCurrentUserInRestrictedHours()
    );
}
function eE(e) {
    let { channelId: t, message: r, optimistic: i } = e;
    if (i) return !1;
    let s = M.A.getChannel(t),
        o = j.default.getUser(r.author?.id),
        u = j.default.getCurrentUser();
    if (null == s || null == o || null == u) return !1;
    let d = (0, T.lx)(r, t, !eu),
        _ = k.A.getNotifyMessagesInSelectedChannel() && (0, T.kY)(r, t);
    if (
        (!d && !_) ||
        em() ||
        (r.type === Z.lAJ.CHANGELOG && (null == r.changelog_id || f.A.latestChangelogId() !== r.changelog_id))
    )
        return !1;
    let p = !k.A.isSoundDisabled(et);
    if ((_ && (p && q.A.playNotificationSound(er, ei), !eu)) || !d) return !1;
    let h = n(242286).default,
        m = n(592598).A;
    if (null != h.getFocusedPID() && !m.isNotificationDisabled(Q.KS.TextChat) && !H.A.disableNotifications) return !1;
    let { icon: E, title: g, body: S, emoji: v } = (0, T.TB)(s, r, o),
        N = !(0, y.Z)("NotificationStore.handleMessage", u?.id);
    if (
        (a.h.dispatch({ type: "RPC_NOTIFICATION_CREATE", channelId: s.id, message: r, icon: E, title: g, body: S }),
        (0, I.n)(r, s.guild_id),
        k.A.getDesktopType() === Z.nRU.NEVER)
    )
        return p && q.A.playNotificationSound(et, en), !1;
    let R = x.A.getMessage(t, r.id) ?? (0, A.rh)(r);
    q.A.showNotification(
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
            badge: (0, G.Wm)(R, u),
        },
        {
            omitViewTracking: N,
            tag: r.id,
            sound: p ? et : void 0,
            volume: en,
            onClick() {
                (0, C.iN)(s.id),
                    (s.type === Z.rbe.GUILD_VOICE || s.type === Z.rbe.GUILD_STAGE_VOICE) &&
                        l.A.updateChatOpen(s.id, !0),
                    c.default.clickedNotification();
            },
            isUserAvatar: !0,
            messageRecord: R,
            fallbackDeepLink: (0, q.I)(Z.BVt.CHANNEL(s.guild_id, s.id, r.id)),
            emoji: v,
        },
    ).then((e) => {
        null != e && ef.track(s.id, e.notification, e.trackingProps);
    });
}
function eg(e) {
    let { enabled: t } = e;
    t !== Z.kCE.ENABLED ||
        $.isPlatformEmbedded ||
        q.A.showNotification(
            n(705194),
            ee.intl.string(ee.t.VSgOVg),
            ee.intl.string(ee.t["1UJvqc"]),
            { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
            {
                sound: et,
                volume: en,
                tag: "hello",
                onClick: () => {
                    window.focus();
                },
                isUserAvatar: !1,
            },
        );
}
function eA(e) {
    let { channelId: t } = e;
    return null != t && ef.clearChannel(t), !1;
}
function eI(e) {
    let { channelId: t } = e;
    return ef.clearChannel(t), !1;
}
function eT(e) {
    let { userId: t, activity: n } = e;
    if (em() || n.type !== Z.$pd.PLAYING) return !1;
    {
        let e = j.default.getUser(t);
        if (null == e) return !1;
        let r = z.Ay.getName(e),
            i = n.name,
            s = e.getAvatarURL(void 0, 128),
            a = ee.intl.string(ee.t.XoTWsI),
            l = ee.intl.formatToPlainString(ee.t.o4Aipn, { username: r, gameName: i });
        return (
            q.A.showNotification(
                s,
                a,
                l,
                { notif_type: "ACTIVITY_START", activity_type: Z.$pd.PLAYING, notif_user_id: t, activity_name: i },
                {
                    sound: es,
                    playSoundIfDisabled: !1,
                    volume: ea,
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
function eS(e) {
    let { channel: t, isNewlyCreated: n } = e;
    if (em()) return !1;
    let r = M.A.getChannel(t.parent_id);
    if (null == r || !Z.kvI.GUILD_THREADS_ONLY.has(r.type) || !n || !(0, T.q1)(t, r, !eu)) return !1;
    let { author: i, user: s } = (0, h.tY)(t);
    if (null == s) return !1;
    let a = P.A.getGuild(r.guild_id);
    if (null == a) return !1;
    let o = ee.intl.formatToPlainString(ee.t["2IGVl5"], {
            channelName: (0, p.m1)(r, j.default, F.A),
            guildName: a.name,
        }),
        l = ee.intl.formatToPlainString(ee.t.jPhTvT, {
            channelName: (0, p.m1)(t, j.default, F.A),
            userUsername: i?.nick ?? s?.username,
        }),
        u = s.getAvatarURL(void 0, 128);
    q.A.showNotification(
        u,
        o,
        l,
        { notif_type: "THREAD_CREATE", notif_user_id: s.id },
        {
            onClick() {
                (0, b.JA)(t);
            },
            isUserAvatar: !0,
        },
    );
}
function ey(e) {
    return null != Y.A.getVoiceStateForChannel(e);
}
function ev(e) {
    if (em()) return !1;
    let t = e.channel_id;
    if (null == t || ey(t)) return !1;
    let n = j.default.getCurrentUser(),
        i = P.A.getGuild(e.guild_id),
        s = M.A.getChannel(e.channel_id),
        a = j.default.getUser(e.host_id);
    if (null == n || null == s || null == i || null == a || !U.A.can(r.kg(Z.xBc.CONNECT, Z.xBc.VIEW_CHANNEL), s))
        return !1;
    q.A.showNotification(
        (0, w.Iv)(i, 128),
        ee.intl.formatToPlainString(ee.t.bOu6Wn, { guildName: i.name }),
        ee.intl.formatToPlainString(ee.t.GV9L8u, { topic: e.name, username: K.Ay.getName(i.id, s.id, a) }),
        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: i.id, channel_id: s.id },
        {
            onClick() {
                e.entity_type === X.Ps.STAGE_INSTANCE && (0, R.av)(s),
                    e.entity_type === X.Ps.VOICE && d.default.selectVoiceChannel(s.id);
            },
            isUserAvatar: !1,
        },
    );
}
function eN(e) {
    if (em()) return !1;
    let t = j.default.getCurrentUser(),
        n = P.A.getGuild(e.guild_id);
    if (null == t || null == n) return !1;
    q.A.showNotification(
        (0, w.Iv)(n, 128),
        ee.intl.formatToPlainString(ee.t.bOu6Wn, { guildName: n.name }),
        ee.intl.formatToPlainString(ee.t.mYyaRB, { topic: e.name }),
        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: n.id },
        {
            onClick() {
                u.A.transitionToGuildSync(e.guild_id), (0, m.uR)({ eventId: e.id });
            },
            isUserAvatar: !1,
        },
    );
}
function eC(e) {
    let { guildScheduledEvent: t } = e;
    if (em() || null == t.notification_type) return !1;
    t.notification_type === X.b8.EVENT_START &&
        (t.entity_type === X.Ps.STAGE_INSTANCE || t.entity_type === X.Ps.VOICE
            ? ev(t)
            : t.entity_type === X.Ps.EXTERNAL && eN(t));
}
function eR(e) {
    let { instance: t } = e;
    if (em() || !t.send_start_notification || ey(t.channel_id)) return !1;
    let n = j.default.getCurrentUser(),
        i = P.A.getGuild(t.guild_id),
        s = M.A.getChannel(t.channel_id),
        a = j.default.getUser(t.host_id);
    if (
        null == n ||
        null == s ||
        null == i ||
        null == a ||
        !(0, T.Wv)(n, a, s) ||
        !U.A.can(r.kg(Z.xBc.CONNECT, Z.xBc.VIEW_CHANNEL), s) ||
        ed.has(t.id)
    )
        return !1;
    ed.add(t.id),
        q.A.showNotification(
            (0, w.Iv)(i, 128),
            ee.intl.formatToPlainString(ee.t.bZ4Okd, { guildName: i.name }),
            ee.intl.formatToPlainString(ee.t.qTelnO, { username: K.Ay.getName(i.id, s.id, a), topic: t.topic }),
            { notif_type: "STAGE_INSTANCE_CREATE", guild_id: i.id, channel_id: s.id },
            {
                onClick() {
                    (0, R.av)(s);
                },
                isUserAvatar: !1,
            },
        );
}
function eO(e) {
    let { instance: t } = e;
    ed.delete(t.id);
}
function eb(e) {
    let { savedMessage: t } = e;
    if (em()) return !1;
    let n = t.message;
    if (null == n || null == n.author) return !1;
    let r = M.A.getChannel(t.saveData.channelId);
    if (null == r) return !1;
    let { icon: i, body: s } = (0, T.TB)(r, n, n.author);
    q.A.showNotification(
        i,
        ee.intl.string(ee.t.IjZJB5),
        s,
        { notif_type: "MESSAGE_REMINDER_DUE" },
        {
            onClick() {
                (0, E.A)(Z.BVt.CHANNEL(r?.getGuildId(), r.id, n.id));
            },
            isUserAvatar: !0,
        },
    );
}
function eD(e) {
    let { title: t, subtitle: r } = e;
    if (em()) return !1;
    q.A.showNotification(n(608598), t, r, { notif_type: "RESTRICTED_HOURS_WARNING" }, { isUserAvatar: !1 });
}
function eL(e) {
    let t,
        { icon: n, title: r, body: i, route: s, trackingType: a, tag: o } = e;
    if (em() || null == r || null == i || null == a || "reactions_push_notification" === a.toLowerCase()) return !1;
    q.A.showNotification(
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
        null != e && null != t && ef.track(t, e.notification, e.trackingProps);
    });
}
function ew(e) {
    let { icon: t, title: n, body: r, route: i, trackingType: s, message: a, reactorUserId: o } = e;
    if (em() || null == n || null == r || null == s) return !1;
    let l = a.channel_id;
    if (null == l || (V.A.getCurrentlySelectedChannelId() === l && eu)) return !1;
    let u = M.A.getChannel(l);
    if (null == u) return !1;
    if (u.type === Z.rbe.GROUP_DM) {
        let e = j.default.getCurrentUser();
        if (a.author?.id !== e?.id && !S.A.getConfig({ location: "desktopNotification" }).showSettingsToggle) return !1;
    }
    q.A.showNotification(
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
        null != e && null != l && ef.track(l, e.notification, e.trackingProps);
    });
}
function eM(e) {
    let { icon: t, title: n, body: r, trackingProps: i, options: s } = e;
    return !em() && (q.A.showNotification(t, n, r, i, s), !1);
}
function eP(e) {
    let { countryCode: t, guilds: n } = e;
    (ec = t), ed.clear(), n.forEach((e) => e.stage_instances.forEach((e) => ed.add(e.id)));
}
function ex() {
    let e = (0, $.isWindows)(),
        t = (0, $.isLinux)();
    if (!(!s.w.get(el, !1) && $.isPlatformEmbedded && (e || t))) return !1;
    let r = !1;
    return (
        null != ec && (r = e_.includes(ec)),
        !!r &&
            (q.A.showNotification(
                n(608598),
                ee.intl.string(ee.t.VSgOVg),
                ee.intl.string(ee.t["+J/F66"]),
                { notif_type: "WINDOW_HIDDEN" },
                {
                    overrideStreamerMode: !0,
                    onClick: () => {
                        (0, N.pX)((0, L.settingsPathToRoute)(e ? J.od.WINDOWS : J.od.LINUX));
                    },
                    onShown: () => {
                        s.w.set(el, !0);
                    },
                    isUserAvatar: !1,
                },
            ),
            !1)
    );
}
function ek() {
    return s.w.remove(el), !1;
}
class eU extends i.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(f.A, M.A, v.A, P.A, g.A, x.A, k.A, U.A, F.A, V.A, B.A, O.A, H.A, j.default, Y.A);
    }
}
new eU(
    a.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: eg,
              NOTIFICATION_CREATE: eM,
              WINDOW_FOCUS: ep,
              MESSAGE_CREATE: eE,
              CHANNEL_SELECT: eA,
              MESSAGE_ACK: eI,
              ACTIVITY_START: eT,
              VOICE_STATE_UPDATES: eh,
              STAGE_INSTANCE_UPDATE: eR,
              STAGE_INSTANCE_DELETE: eO,
              GUILD_SCHEDULED_EVENT_UPDATE: eC,
              THREAD_CREATE: eS,
              GENERIC_PUSH_NOTIFICATION_SENT: eL,
              REACTION_NOTIFICATION_SENT: ew,
              WINDOW_HIDDEN: ex,
              LOGOUT: ek,
              CONNECTION_OPEN: eP,
              MESSAGE_REMINDER_DUE: eb,
              RESTRICTED_HOURS_WARNING: eD,
          },
);
