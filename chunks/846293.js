"use strict";
n.d(t, { Ay: () => eh, Pq: () => eE, he: () => ef, rq: () => e_ }), n(938796);
var r = n(481613),
    i = n.n(r),
    s = n(110259),
    a = n(821418),
    o = n(665260),
    l = n(400253),
    u = n(49485),
    d = n(80703),
    c = n(562465),
    _ = n(205693),
    f = n(933681),
    E = n(73153),
    h = n(181658),
    p = n(178253),
    m = n(811024),
    g = n(983057),
    A = n(612200),
    I = n(323073),
    T = n(392054),
    S = n(197111),
    y = n(507263),
    N = n(202384),
    O = n(51758),
    R = n(473529),
    v = n(707592),
    C = n(698441),
    b = n(610101),
    D = n(224536),
    L = n(21599),
    w = n(970163),
    M = n(700241),
    P = n(824865),
    U = n(976860),
    k = n(422815),
    x = n(323443),
    G = n(95701),
    V = n(961350),
    F = n(734057),
    B = n(808728),
    H = n(696451),
    Y = n(71393),
    W = n(958590),
    j = n(576705),
    K = n(967198),
    $ = n(287809),
    z = n(954571),
    q = n(927813),
    X = n(499785),
    Q = n(877062),
    J = n(827343),
    Z = n(686956),
    ee = n(401843),
    et = n(652215),
    en = n(204925),
    er = n(746080),
    ei = n(502075),
    es = n(172799),
    ea = n(516607);
let eo = "invite",
    el = null;
function eu(e) {
    let t = {};
    switch (e.target_type) {
        case es.yV.STREAM:
            (t.targetType = e.target_type), (t.targetUserId = e.target_user?.id);
            break;
        case es.yV.EMBEDDED_APPLICATION:
            (t.targetType = e.target_type), (t.targetApplicationId = e.target_application?.id);
            break;
        case es.yV.ROLE_SUBSCRIPTIONS_PURCHASE:
            t.targetType = e.target_type;
    }
    let n = null == Y.A.getGuild(e.guild?.id) || e.new_member;
    return (
        n && null != e.channel && (0, G.ke)(e.channel.type) && (t.welcomeModalChannelId = e.channel.id),
        null != e.guild_scheduled_event && (t.guildScheduledEvent = e.guild_scheduled_event),
        (t.isGuestInvite = (0, o.Lt)(e.flags ?? 0, a.Q.IS_GUEST_INVITE)),
        (t.isApplicationBypassInvite = (0, o.Lt)(e.flags ?? 0, a.Q.IS_APPLICATION_BYPASS)),
        (t.inviterUserId = e.inviter?.id),
        n || (t.forceTransition = !0),
        t
    );
}
function ed(e) {
    let { guildId: t, channel: r, options: i, analyticsLocations: s = [] } = e,
        a = Y.A.getGuild(t),
        o = a?.features.has(et.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        {
            targetUserId: l,
            targetType: u,
            targetApplicationId: d,
            isGuestInvite: c,
            isApplicationBypassInvite: f,
        } = i ?? {};
    if (!c && !f && !i?.forceTransition && o && K.A.getGuildId() !== t) return;
    let { type: E } = r,
        h = F.A.getChannel(r.id),
        p = (function (e, t, n) {
            if (n?.targetType === es.yV.ROLE_SUBSCRIPTIONS_PURCHASE) return er.VV.ROLE_SUBSCRIPTIONS;
            if (n?.targetType == null && !(0, G.QE)(t.type) && (0, R.K)(e)) return er.VV.GUILD_HOME;
            let r = F.A.getChannel(t.id),
                i = (0, G.TA)(t.type);
            return j.A.can(i, r) ? t.id : (B.Ay.getDefaultChannel(e, !0, et.xBc.CREATE_INSTANT_INVITE)?.id ?? t.id);
        })(t, r, i),
        A = E === et.rbe.GUILD_STAGE_VOICE,
        I = et.BVt.CHANNEL(t, p);
    p === r.id && (0, G.QE)(E) && i?.autoJoin !== !1
        ? (0, y.B)(() => {
              Promise.resolve()
                  .then(n.bind(n, 956793))
                  .then((e) => {
                      let { default: n } = e,
                          a = () => {
                              if (A) {
                                  (0, x.av)(r instanceof G.YB ? r : (0, G.createChannelRecord)(r)), (0, U.pX)(I);
                                  return;
                              }
                              i?.muteOnJoinVoiceChannel && J.A.setSelfMute(_.x.DEFAULT, !0),
                                  n.selectVoiceChannel(p),
                                  u === es.yV.STREAM &&
                                      null != l &&
                                      ee.Nl({ streamType: ei.U4.GUILD, ownerId: l, guildId: t, channelId: p }),
                                  u === es.yV.EMBEDDED_APPLICATION &&
                                      null != d &&
                                      ((0, U.pX)(et.BVt.CHANNEL(t ?? et.ME, p)),
                                      (0, g.A)({
                                          channelId: p,
                                          applicationId: d,
                                          intent: i?.intent,
                                          inviterUserId: i?.inviterUserId,
                                          analyticsLocations: s,
                                          commandOrigin: T.iw.CHAT,
                                      }));
                          };
                      !c && (0, O.V)(t, [Y.A, $.default, H.Ay]) ? (0, N.Ze)(t, a) : a();
                  });
          })
        : (0, m.AX)(h) &&
          u === es.yV.EMBEDDED_APPLICATION &&
          null != d &&
          ((0, U.pX)(et.BVt.CHANNEL(t ?? et.ME, p)),
          (0, g.A)({
              channelId: p,
              applicationId: d,
              intent: i?.intent,
              inviterUserId: i?.inviterUserId,
              analyticsLocations: s,
              commandOrigin: T.iw.CHAT,
          })),
        (function (e, t) {
            let { type: n } = e,
                { transitionTo: r, welcomeModalChannelId: i, guildScheduledEvent: s } = t ?? {},
                a = n === et.rbe.GUILD_STAGE_VOICE,
                o = { source: P.A.INVITE_ACCEPT, navigationReplace: !0 };
            return (
                null != i && (o.welcomeModalChannelId = i),
                a && (o.state = { stageInviteKey: ea.J2 }),
                null != s && (o.guildScheduledEventId = s.id),
                (e) => (null != r ? r(e, o) : (0, U.pX)(e, o))
            );
        })(
            r,
            i,
        )(I);
}
let ec = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        F.A.addConditionalChangeListener(() => {
            let r = F.A.getChannel(e),
                i = $.default.getCurrentUser();
            return (
                null == r ||
                null == i ||
                (!(
                    (r.nsfw && !i.nsfwAllowed) ||
                    (r.isGuildVocalOrThread() && (0, I.Tv)(e)) ||
                    (r.isGuildVocalOrThread() && (0, k.M)(e))
                ) &&
                    (t?.guildScheduledEvent != null
                        ? !(function (e) {
                              let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
                              null != t &&
                                  (0, y.B)(() => {
                                      let e = { guildScheduledEventId: t.id };
                                      null != n && (e.welcomeModalChannelId = n), (0, v.Ul)(t, e);
                                  });
                          })(t)
                        : ed({ guildId: r.getGuildId() ?? et.ME, channel: r, options: t, analyticsLocations: n }),
                    !1))
            );
        });
    },
    e_ = async (e) => {
        let { guild_id: t, channel_id: n } = e;
        (0, C.Fd)(e) && null != n ? ec(n) : await Z.A.transitionToGuildSync(t);
    };
function ef(e, t) {
    let {
        invite: n,
        action: r,
        inviter_id: i,
        invite_message_id: s,
        invite_instance_id: a,
        application_id: o,
        stream_key: l,
        number_of_users_in_channel: u,
    } = e;
    z.default.track(et.HAw.INVITE_EMBED_ACTIONED, {
        action: r,
        invite_code: n.code,
        invite_type: n.type?.toString(),
        inviter_id: i ?? null,
        invite_message_id: s ?? null,
        invite_instance_id: a ?? null,
        application_id: o ?? null,
        stream_key: l ?? null,
        number_of_users_in_channel: u ?? null,
        location_stack: t ?? null,
    });
}
function eE(e, t, n) {
    z.default.track(et.HAw.INVITE_SERVER_CLICKED, { guild_id: e, action: t, location_stack: n ?? null });
}
let eh = {
    resolveInvite: function e(t, n, r) {
        return E.h.isDispatching()
            ? Promise.resolve().then(() => e(t, n, r))
            : (E.h.dispatch({ type: "INVITE_RESOLVE", code: t }),
              (0, w.A)(t, n, r).then((e) => {
                  let { invite: t, code: n, banned: r } = e;
                  return (
                      null != t
                          ? E.h.dispatch({ type: "INVITE_RESOLVE_SUCCESS", invite: t, code: n })
                          : E.h.dispatch({ type: "INVITE_RESOLVE_FAILURE", code: n, banned: r }),
                      { invite: t, code: n }
                  );
              }));
    },
    getInviteContext: (e, t) => ({
        location: e,
        location_guild_id: t?.guild != null ? t.guild.id : void 0,
        location_channel_id: t?.channel != null ? t.channel.id : void 0,
        location_channel_type: t?.channel != null ? t.channel.type : void 0,
    }),
    async createInvite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
        try {
            let r = { ...t };
            r.role_ids?.length === 0 && delete r.role_ids;
            let { body: i } = await c.Bo.post({
                url: et.Rsh.INSTANT_INVITES(e),
                body: r,
                context: { location: n },
                rejectWithError: !0,
            });
            return E.h.dispatch({ type: "INSTANT_INVITE_CREATE_SUCCESS", channelId: e, invite: i }), i;
        } catch (t) {
            throw (E.h.dispatch({ type: "INSTANT_INVITE_CREATE_FAILURE", channelId: e }), new h.A(t));
        }
    },
    async mobileCreateInvite(e, t) {
        let n = W.A.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let r = { max_age: q.A.Seconds.DAY },
            i = await this.createInvite(e.id, r, t).catch(() =>
                E.h.dispatch({ type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED" }),
            );
        return i?.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => E.h.wait(() => e(null))), W.A.getFriendInvitesFetching()))
            return null != el ? el.then((e) => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
        (el = c.Bo.get({ url: et.Rsh.FRIEND_INVITES, context: { location: e }, rejectWithError: !1 })),
            E.h.dispatch({ type: "FRIEND_INVITES_FETCH_REQUEST", requestedAt: new Date() });
        let { body: t } = await el;
        return (
            (el = null), E.h.dispatch({ type: "FRIEND_INVITES_FETCH_RESPONSE", receivedAt: new Date(), invites: t }), t
        );
    },
    createFriendInvite: (e, t) => (
        E.h.dispatch({ type: "FRIEND_INVITE_CREATE_REQUEST" }),
        c.Bo.post({ url: et.Rsh.FRIEND_INVITES, body: e ?? {}, context: { location: t }, rejectWithError: !1 }).then(
            (e) => {
                let { body: t } = e;
                return E.h.dispatch({ type: "FRIEND_INVITE_CREATE_SUCCESS", invite: t }), t;
            },
            (e) => {
                throw (E.h.dispatch({ type: "FRIEND_INVITE_CREATE_FAILURE", error: e }), e);
            },
        )
    ),
    revokeFriendInvites: () => (
        E.h.dispatch({ type: "FRIEND_INVITE_REVOKE_REQUEST" }),
        c.Bo.del({ url: et.Rsh.FRIEND_INVITES, context: { location }, rejectWithError: !1 }).then((e) => {
            let { body: t } = e;
            E.h.dispatch({ type: "FRIEND_INVITE_REVOKE_SUCCESS", invites: t });
        })
    ),
    revokeFriendInvite: (e) => c.Bo.del({ url: et.Rsh.INVITE(e), rejectWithError: !1 }),
    async fetchFriendMembers(e) {
        try {
            let { body: t } = await X.A.get({
                url: et.Rsh.INVITE_FRIEND_MEMBERS(e),
                trackedActionData: {
                    event: s.NetworkActionNames.INVITE_FRIEND_MEMBERS_FETCH,
                    properties: (t) => (0, f.e0)({ code: e, friend_count: t?.body?.friend_member_ids?.length ?? 0 }),
                },
                rejectWithError: !0,
            });
            E.h.dispatch({
                type: "INVITE_FRIEND_MEMBERS_FETCH_SUCCESS",
                code: e,
                friendMemberIds: t.friend_member_ids,
            });
        } catch (t) {
            E.h.dispatch({ type: "INVITE_FRIEND_MEMBERS_FETCH_FAILURE", code: e });
        }
    },
    clearInviteFromStore(e) {
        E.h.dispatch({ type: "INSTANT_INVITE_CLEAR", channelId: e });
    },
    revokeInvite(e) {
        let { code: t, channel: n } = e;
        return X.A.delete({
            url: et.Rsh.INVITE(t),
            oldFormErrors: !0,
            trackedActionData: {
                event: s.NetworkActionNames.INVITE_REVOKE,
                properties: { uses: e.uses, max_uses: e.maxUses, max_age: e.maxAge, invite_type: e.type },
            },
            rejectWithError: !1,
        }).then(() => {
            E.h.dispatch({ type: "INSTANT_INVITE_REVOKE_SUCCESS", code: t, channelId: n.id });
        });
    },
    acceptInvite(e) {
        let { inviteKey: t, context: r, callback: i, skipOnboarding: s } = e,
            a = (0, L.y$)(t),
            o = a.baseCode,
            l = V.default.getSessionId(),
            u = W.A.getReceivedInstallationIdForInviteCode(o),
            d = { ...r, invite_guild_scheduled_event_id: a.guildScheduledEventId },
            _ = $.default.getCurrentUser();
        return _?.hasFlag(et.nhx.QUARANTINED)
            ? ((0, M.default)(), new Promise((e, t) => t(Error())))
            : (E.h.dispatch({ type: "INVITE_ACCEPT", code: t }),
              c.Bo.post({
                  url: et.Rsh.INVITE(o),
                  context: d,
                  oldFormErrors: !0,
                  body: { session_id: l, invite_instance_id: r.invite_instance_id, received_installation_id: u },
                  rejectWithError: !1,
              }).then(
                  async (e) => {
                      null != u && this.clearReceivedInstallationIdForInviteCode(o),
                          E.h.dispatch({ type: "INVITE_ACCEPT_SUCCESS", invite: e.body, code: t });
                      let r = C.Ay.getGuildScheduledEvent(a.guildScheduledEventId),
                          l = { ...e.body, guild_scheduled_event: r },
                          d = l?.guild_id ?? l?.guild?.id;
                      if (!s && null != d && l.new_member && !l.show_verification_form) {
                          let { default: e } = await Promise.resolve().then(n.bind(n, 967305));
                          await e({ guildId: d });
                      }
                      return i?.(l), e.body;
                  },
                  (e) => {
                      throw (
                          (e.body?.code === et.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED &&
                              (0, A.yO)(en.w_.JOIN_LARGE_GUILD_UNDERAGE),
                          E.h.dispatch({
                              type: "INVITE_ACCEPT_FAILURE",
                              code: t,
                              error: { message: e.body?.message, code: e.body?.code },
                          }),
                          new p.A(e))
                      );
                  },
              ));
    },
    acceptInviteAndTransitionToInviteChannel(e) {
        let { inviteKey: t, context: n, analyticsLocations: r, callback: i, skipOnboarding: s, autoJoin: a } = e;
        return this.acceptInvite({
            inviteKey: t,
            context: n,
            skipOnboarding: s,
            callback: (e) => {
                if (null != e.channel) {
                    let t = { ...eu(e), autoJoin: a };
                    ec(e.channel.id, t, r ?? []);
                }
                null != i && i(e);
            },
        });
    },
    transitionToInvite(e, t, n) {
        let { channel: r, guild: i } = e;
        if (null != i && i.features?.includes(et.GuildFeatures.HUB)) return void D.A.onOpenHubInvite(e);
        let s = (0, o.Lt)(e.flags ?? 0, a.Q.IS_APPLICATION_BYPASS);
        if (null != i && !s && e.new_member && (0, b.h)(i)) return void (0, b.W)(i.id);
        if (null == r) return;
        let l = eu(e);
        null != t && (l.transitionTo = t),
            null != n && (l.muteOnJoinVoiceChannel = n),
            ed({ guildId: null != i ? i.id : et.ME, channel: r, options: l });
    },
    transitionToInviteSync(e, t, n) {
        if (null != e.channel) {
            let r = eu(e);
            this.transitionToInviteChannelSync(e.channel.id, { ...r, intent: n, transitionTo: t, forceTransition: !0 });
        }
    },
    openNativeAppModal(e) {
        let t = { installationId: V.default.getInstallationForTracking() };
        S.A.openNativeAppModal(e, et.e$_.INVITE_BROWSER, t);
    },
    openApp(e, t, n, r, s) {
        let a,
            o = null != e ? (0, L.y$)(e) : null,
            c = o?.baseCode;
        if (
            (E.h.dispatch({ type: "INVITE_APP_OPENING", code: e }),
            null != i().ua && i().ua.toLowerCase().indexOf("googlebot") > -1)
        )
            return void E.h.dispatch({ type: "INVITE_APP_NOT_OPENED", code: e });
        if (i().os?.family === "Android" || i().os?.family === "iOS") {
            let e = null != c ? (0, l.jN)(c) : (0, l.BH)(),
                t = (0, u.I_)();
            (a = (0, u.Ay)(e, {
                utmSource: 2 === s ? "friend_invite" : eo,
                fingerprint: n,
                installationId: V.default.getInstallationForTracking(),
                username: r,
                attemptId: t,
                event: o?.guildScheduledEventId,
                iosFallbackLink: `https://discord.com/api/download/mobile?invite_code=${c}`,
            })),
                z.default.track(et.HAw.DEEP_LINK_CLICKED, {
                    fingerprint: (0, d.v)(n),
                    attempt_id: t,
                    source: eo,
                    invite_code: c,
                });
        } else "#" === (a = null != t ? et.BVt.INVITE_PROXY(t) : "")[0] && (a = a.slice(1)), (a = `discord://${a}`);
        Q.A.launch(a, (t) => {
            E.h.dispatch(t ? { type: "INVITE_APP_OPENED", code: e } : { type: "INVITE_APP_NOT_OPENED", code: e });
        });
    },
    setReceivedInstallationIdForInviteCode(e, t) {
        E.h.dispatch({ type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET", inviteCode: e, receivedInstallationId: t });
    },
    clearReceivedInstallationIdForInviteCode(e) {
        E.h.dispatch({ type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR", inviteCode: e });
    },
    transitionToInviteChannelSync: ec,
    trackInviteServerClicked: eE,
};
