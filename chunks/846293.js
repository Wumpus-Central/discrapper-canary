"use strict";
n.d(t, { Ay: () => eA, Pq: () => eg, he: () => eE, rq: () => em }), n(938796);
var r = n(481613),
    i = n.n(r),
    s = n(110259),
    a = n(821418),
    o = n(665260),
    l = n(400253),
    u = n(49485),
    c = n(80703),
    d = n(562465),
    _ = n(205693),
    f = n(933681),
    p = n(73153),
    h = n(181658),
    m = n(178253),
    E = n(811024),
    g = n(983057),
    A = n(612200),
    I = n(323073),
    T = n(392054),
    S = n(197111),
    y = n(507263),
    v = n(202384),
    N = n(51758),
    C = n(473529),
    R = n(707592),
    O = n(698441),
    b = n(610101),
    D = n(224536),
    L = n(21599),
    w = n(970163),
    M = n(700241),
    x = n(824865),
    P = n(976860),
    k = n(323443),
    U = n(95701),
    G = n(961350),
    F = n(734057),
    V = n(808728),
    B = n(696451),
    H = n(71393),
    j = n(958590),
    Y = n(576705),
    W = n(967198),
    K = n(287809),
    $ = n(954571),
    z = n(927813),
    q = n(499785),
    Z = n(877062),
    X = n(827343),
    Q = n(686956),
    J = n(401843),
    ee = n(652215),
    et = n(204925),
    en = n(746080),
    er = n(502075),
    ei = n(172799),
    es = n(516607);
let ea = "invite",
    eo = null;
function el(e) {
    let t = {};
    switch (e.target_type) {
        case ei.yV.STREAM:
            (t.targetType = e.target_type), (t.targetUserId = e.target_user?.id);
            break;
        case ei.yV.EMBEDDED_APPLICATION:
            (t.targetType = e.target_type), (t.targetApplicationId = e.target_application?.id);
            break;
        case ei.yV.ROLE_SUBSCRIPTIONS_PURCHASE:
            t.targetType = e.target_type;
    }
    let n = null == H.A.getGuild(e.guild?.id) || e.new_member;
    return (
        n && null != e.channel && (0, U.ke)(e.channel.type) && (t.welcomeModalChannelId = e.channel.id),
        null != e.guild_scheduled_event && (t.guildScheduledEvent = e.guild_scheduled_event),
        (t.isGuestInvite = (0, o.Lt)(e.flags ?? 0, a.Q.IS_GUEST_INVITE)),
        (t.isApplicationBypassInvite = (0, o.Lt)(e.flags ?? 0, a.Q.IS_APPLICATION_BYPASS)),
        (t.inviterUserId = e.inviter?.id),
        n || (t.forceTransition = !0),
        t
    );
}
function eu(e, t) {
    return { ...e, invite_guild_scheduled_event_id: t.guildScheduledEventId };
}
function ec(e, t, n) {
    if (n?.targetType === ei.yV.ROLE_SUBSCRIPTIONS_PURCHASE) return en.VV.ROLE_SUBSCRIPTIONS;
    if (n?.targetType == null && !(0, U.QE)(t.type) && (0, C.K)(e)) return en.VV.GUILD_HOME;
    let r = F.A.getChannel(t.id),
        i = (0, U.TA)(t.type);
    return Y.A.can(i, r) ? t.id : (V.Ay.getDefaultChannel(e, !0, ee.xBc.CREATE_INSTANT_INVITE)?.id ?? t.id);
}
function ed(e, t) {
    let { type: n } = e,
        { transitionTo: r, welcomeModalChannelId: i, guildScheduledEvent: s } = t ?? {},
        a = n === ee.rbe.GUILD_STAGE_VOICE,
        o = { source: x.A.INVITE_ACCEPT, navigationReplace: !0 };
    return (
        null != i && (o.welcomeModalChannelId = i),
        a && (o.state = { stageInviteKey: es.J2 }),
        null != s && (o.guildScheduledEventId = s.id),
        (e) => (null != r ? r(e, o) : (0, P.pX)(e, o))
    );
}
function e_(e) {
    let { guildId: t, channel: r, options: i, analyticsLocations: s = [] } = e,
        a = H.A.getGuild(t),
        o = a?.features.has(ee.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        {
            targetUserId: l,
            targetType: u,
            targetApplicationId: c,
            isGuestInvite: d,
            isApplicationBypassInvite: f,
        } = i ?? {};
    if (!d && !f && !i?.forceTransition && o && W.A.getGuildId() !== t) return;
    let { type: p } = r,
        h = F.A.getChannel(r.id),
        m = ec(t, r, i),
        A = p === ee.rbe.GUILD_STAGE_VOICE,
        I = ee.BVt.CHANNEL(t, m);
    m === r.id && (0, U.QE)(p) && i?.autoJoin !== !1
        ? (0, y.B)(() => {
              Promise.resolve()
                  .then(n.bind(n, 956793))
                  .then((e) => {
                      let { default: n } = e,
                          a = () => {
                              if (A) {
                                  (0, k.av)(r instanceof U.YB ? r : (0, U.createChannelRecord)(r)), (0, P.pX)(I);
                                  return;
                              }
                              i?.muteOnJoinVoiceChannel && X.A.setSelfMute(_.x.DEFAULT, !0),
                                  n.selectVoiceChannel(m),
                                  u === ei.yV.STREAM &&
                                      null != l &&
                                      J.Nl({ streamType: er.U4.GUILD, ownerId: l, guildId: t, channelId: m }),
                                  u === ei.yV.EMBEDDED_APPLICATION &&
                                      null != c &&
                                      ((0, P.pX)(ee.BVt.CHANNEL(t ?? ee.ME, m)),
                                      (0, g.A)({
                                          channelId: m,
                                          applicationId: c,
                                          intent: i?.intent,
                                          inviterUserId: i?.inviterUserId,
                                          analyticsLocations: s,
                                          commandOrigin: T.iw.CHAT,
                                      }));
                          };
                      !d && (0, N.V)(t, [H.A, K.default, B.Ay]) ? (0, v.Ze)(t, a) : a();
                  });
          })
        : (0, E.AX)(h) &&
          u === ei.yV.EMBEDDED_APPLICATION &&
          null != c &&
          ((0, P.pX)(ee.BVt.CHANNEL(t ?? ee.ME, m)),
          (0, g.A)({
              channelId: m,
              applicationId: c,
              intent: i?.intent,
              inviterUserId: i?.inviterUserId,
              analyticsLocations: s,
              commandOrigin: T.iw.CHAT,
          })),
        ed(r, i)(I);
}
function ef(e) {
    let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
    null != t &&
        (0, y.B)(() => {
            let e = { guildScheduledEventId: t.id };
            null != n && (e.welcomeModalChannelId = n), (0, R.Ul)(t, e);
        });
}
function ep(e, t, n) {
    return p.h.isDispatching()
        ? Promise.resolve().then(() => ep(e, t, n))
        : (p.h.dispatch({ type: "INVITE_RESOLVE", code: e }),
          (0, w.A)(e, t, n).then((e) => {
              let { invite: t, code: n, banned: r } = e;
              return (
                  null != t
                      ? p.h.dispatch({ type: "INVITE_RESOLVE_SUCCESS", invite: t, code: n })
                      : p.h.dispatch({ type: "INVITE_RESOLVE_FAILURE", code: n, banned: r }),
                  { invite: t, code: n }
              );
          }));
}
let eh = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        F.A.addConditionalChangeListener(() => {
            let r = F.A.getChannel(e),
                i = K.default.getCurrentUser();
            return (
                null == r ||
                null == i ||
                (!((r.nsfw && !i.nsfwAllowed) || (r.isGuildVocalOrThread() && (0, I.Tv)(e))) &&
                    (t?.guildScheduledEvent != null
                        ? ef(t)
                        : e_({ guildId: r.getGuildId() ?? ee.ME, channel: r, options: t, analyticsLocations: n }),
                    !1))
            );
        });
    },
    em = async (e) => {
        let { guild_id: t, channel_id: n } = e;
        (0, O.Fd)(e) && null != n ? eh(n) : await Q.A.transitionToGuildSync(t);
    };
function eE(e, t) {
    let { invite: n, action: r, inviter_id: i, invite_message_id: s } = e;
    $.default.track(ee.HAw.INVITE_EMBED_ACTIONED, {
        action: r,
        invite_code: n.code,
        invite_type: n.type?.toString(),
        inviter_id: i ?? null,
        invite_message_id: s ?? null,
        location_stack: t ?? null,
    });
}
function eg(e, t, n) {
    $.default.track(ee.HAw.INVITE_SERVER_CLICKED, { guild_id: e, action: t, location_stack: n ?? null });
}
let eA = {
    resolveInvite: ep,
    getInviteContext: (e, t) => ({
        location: e,
        location_guild_id: null != t.guild ? t.guild.id : void 0,
        location_channel_id: null != t.channel ? t.channel.id : void 0,
        location_channel_type: null != t.channel ? t.channel.type : void 0,
    }),
    async createInvite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
        try {
            let r = { ...t };
            r.role_ids?.length === 0 && delete r.role_ids;
            let { body: i } = await d.Bo.post({
                url: ee.Rsh.INSTANT_INVITES(e),
                body: r,
                context: { location: n },
                rejectWithError: !0,
            });
            return p.h.dispatch({ type: "INSTANT_INVITE_CREATE_SUCCESS", channelId: e, invite: i }), i;
        } catch (t) {
            throw (p.h.dispatch({ type: "INSTANT_INVITE_CREATE_FAILURE", channelId: e }), new h.A(t));
        }
    },
    async mobileCreateInvite(e, t) {
        let n = j.A.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let r = { max_age: z.A.Seconds.DAY },
            i = await this.createInvite(e.id, r, t).catch(() =>
                p.h.dispatch({ type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED" }),
            );
        return i?.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => p.h.wait(() => e(null))), j.A.getFriendInvitesFetching()))
            return null != eo ? eo.then((e) => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
        (eo = d.Bo.get({ url: ee.Rsh.FRIEND_INVITES, context: { location: e }, rejectWithError: !1 })),
            p.h.dispatch({ type: "FRIEND_INVITES_FETCH_REQUEST", requestedAt: new Date() });
        let { body: t } = await eo;
        return (
            (eo = null), p.h.dispatch({ type: "FRIEND_INVITES_FETCH_RESPONSE", receivedAt: new Date(), invites: t }), t
        );
    },
    createFriendInvite: (e, t) => (
        p.h.dispatch({ type: "FRIEND_INVITE_CREATE_REQUEST" }),
        d.Bo.post({ url: ee.Rsh.FRIEND_INVITES, body: e ?? {}, context: { location: t }, rejectWithError: !1 }).then(
            (e) => {
                let { body: t } = e;
                return p.h.dispatch({ type: "FRIEND_INVITE_CREATE_SUCCESS", invite: t }), t;
            },
            (e) => {
                throw (p.h.dispatch({ type: "FRIEND_INVITE_CREATE_FAILURE", error: e }), e);
            },
        )
    ),
    revokeFriendInvites: () => (
        p.h.dispatch({ type: "FRIEND_INVITE_REVOKE_REQUEST" }),
        d.Bo.del({ url: ee.Rsh.FRIEND_INVITES, context: { location }, rejectWithError: !1 }).then((e) => {
            let { body: t } = e;
            p.h.dispatch({ type: "FRIEND_INVITE_REVOKE_SUCCESS", invites: t });
        })
    ),
    revokeFriendInvite: (e) => d.Bo.del({ url: ee.Rsh.INVITE(e), rejectWithError: !1 }),
    async fetchFriendMembers(e) {
        try {
            let { body: t } = await q.A.get({
                url: ee.Rsh.INVITE_FRIEND_MEMBERS(e),
                trackedActionData: {
                    event: s.NetworkActionNames.INVITE_FRIEND_MEMBERS_FETCH,
                    properties: (t) => (0, f.e0)({ code: e, friend_count: t?.body?.friend_member_ids?.length ?? 0 }),
                },
                rejectWithError: !0,
            });
            p.h.dispatch({
                type: "INVITE_FRIEND_MEMBERS_FETCH_SUCCESS",
                code: e,
                friendMemberIds: t.friend_member_ids,
            });
        } catch (t) {
            p.h.dispatch({ type: "INVITE_FRIEND_MEMBERS_FETCH_FAILURE", code: e });
        }
    },
    clearInviteFromStore(e) {
        p.h.dispatch({ type: "INSTANT_INVITE_CLEAR", channelId: e });
    },
    revokeInvite(e) {
        let { code: t, channel: n } = e;
        return q.A.delete({
            url: ee.Rsh.INVITE(t),
            oldFormErrors: !0,
            trackedActionData: {
                event: s.NetworkActionNames.INVITE_REVOKE,
                properties: { uses: e.uses, max_uses: e.maxUses, max_age: e.maxAge, invite_type: e.type },
            },
            rejectWithError: !1,
        }).then(() => {
            p.h.dispatch({ type: "INSTANT_INVITE_REVOKE_SUCCESS", code: t, channelId: n.id });
        });
    },
    acceptInvite(e) {
        let { inviteKey: t, context: r, callback: i, skipOnboarding: s } = e,
            a = (0, L.y$)(t),
            o = a.baseCode,
            l = G.default.getSessionId(),
            u = eu(r, a),
            c = K.default.getCurrentUser();
        return c?.hasFlag(ee.nhx.QUARANTINED)
            ? ((0, M.default)(), new Promise((e, t) => t(Error())))
            : (p.h.dispatch({ type: "INVITE_ACCEPT", code: o }),
              d.Bo.post({
                  url: ee.Rsh.INVITE(o),
                  context: u,
                  oldFormErrors: !0,
                  body: { session_id: l },
                  rejectWithError: !1,
              }).then(
                  async (e) => {
                      p.h.dispatch({ type: "INVITE_ACCEPT_SUCCESS", invite: e.body, code: o });
                      let t = O.Ay.getGuildScheduledEvent(a.guildScheduledEventId),
                          r = { ...e.body, guild_scheduled_event: t },
                          l = r?.guild_id ?? r?.guild?.id;
                      if (!s && null != l && r.new_member && !r.show_verification_form) {
                          let { default: e } = await Promise.resolve().then(n.bind(n, 967305));
                          await e({ guildId: l });
                      }
                      return i?.(r), e.body;
                  },
                  (e) => {
                      throw (
                          (e.body?.code === ee.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED &&
                              (0, A.yO)(et.w_.JOIN_LARGE_GUILD_UNDERAGE),
                          p.h.dispatch({
                              type: "INVITE_ACCEPT_FAILURE",
                              code: o,
                              error: { message: e.body?.message, code: e.body?.code },
                          }),
                          new m.A(e))
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
                    let t = { ...el(e), autoJoin: a };
                    eh(e.channel.id, t, r ?? []);
                }
                null != i && i(e);
            },
        });
    },
    transitionToInvite(e, t, n) {
        let { channel: r, guild: i } = e;
        if (null != i && i.features?.includes(ee.GuildFeatures.HUB)) return void D.A.onOpenHubInvite(e);
        let s = (0, o.Lt)(e.flags ?? 0, a.Q.IS_APPLICATION_BYPASS);
        if (null != i && !s && e.new_member && (0, b.h)(i)) return void (0, b.W)(i.id);
        if (null == r) return;
        let l = el(e);
        null != t && (l.transitionTo = t),
            null != n && (l.muteOnJoinVoiceChannel = n),
            e_({ guildId: null != i ? i.id : ee.ME, channel: r, options: l });
    },
    transitionToInviteSync(e, t, n) {
        if (null != e.channel) {
            let r = el(e);
            this.transitionToInviteChannelSync(e.channel.id, { ...r, intent: n, transitionTo: t, forceTransition: !0 });
        }
    },
    openNativeAppModal(e) {
        let t = { installationId: G.default.getInstallationForTracking() };
        S.A.openNativeAppModal(e, ee.e$_.INVITE_BROWSER, t);
    },
    openApp(e, t, n, r, s) {
        let a,
            o = null != e ? (0, L.y$)(e) : null,
            d = o?.baseCode;
        if (
            (p.h.dispatch({ type: "INVITE_APP_OPENING", code: e }),
            null != i().ua && i().ua.toLowerCase().indexOf("googlebot") > -1)
        )
            return void p.h.dispatch({ type: "INVITE_APP_NOT_OPENED", code: e });
        if (i().os?.family === "Android" || i().os?.family === "iOS") {
            let e = null != d ? (0, l.jN)(d) : (0, l.BH)(),
                t = (0, u.I_)();
            (a = (0, u.Ay)(e, {
                utmSource: 2 === s ? "friend_invite" : ea,
                fingerprint: n,
                installationId: G.default.getInstallationForTracking(),
                username: r,
                attemptId: t,
                event: o?.guildScheduledEventId,
                iosFallbackLink: `https://discord.com/api/download/mobile?invite_code=${d}`,
            })),
                $.default.track(ee.HAw.DEEP_LINK_CLICKED, {
                    fingerprint: (0, c.v)(n),
                    attempt_id: t,
                    source: ea,
                    invite_code: d,
                });
        } else "#" === (a = null != t ? ee.BVt.INVITE_PROXY(t) : "")[0] && (a = a.slice(1)), (a = `discord://${a}`);
        Z.A.launch(a, (t) => {
            p.h.dispatch(t ? { type: "INVITE_APP_OPENED", code: e } : { type: "INVITE_APP_NOT_OPENED", code: e });
        });
    },
    transitionToInviteChannelSync: eh,
    trackInviteServerClicked: eg,
};
