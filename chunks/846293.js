"use strict";
n.d(t, { Ay: () => eT, Pq: () => eI, he: () => eA, rq: () => eE }), n(938796);
var r = n(481613),
    i = n.n(r),
    a = n(110259),
    s = n(821418),
    o = n(665260),
    l = n(400253),
    u = n(49485),
    c = n(80703),
    d = n(562465),
    _ = n(205693),
    f = n(933681),
    h = n(73153),
    p = n(181658),
    g = n(178253),
    E = n(811024),
    A = n(983057),
    I = n(612200),
    T = n(323073),
    y = n(392054),
    S = n(394681),
    v = n(197111),
    C = n(507263),
    b = n(202384),
    N = n(51758),
    R = n(473529),
    O = n(707592),
    D = n(698441),
    L = n(610101),
    w = n(224536),
    x = n(21599),
    P = n(970163),
    M = n(700241),
    k = n(824865),
    U = n(976860),
    G = n(323443),
    F = n(95701),
    V = n(961350),
    B = n(734057),
    j = n(808728),
    H = n(696451),
    Y = n(71393),
    W = n(958590),
    K = n(576705),
    $ = n(967198),
    z = n(287809),
    q = n(954571),
    X = n(927813),
    Z = n(499785),
    Q = n(877062),
    J = n(827343),
    ee = n(686956),
    et = n(401843),
    en = n(652215),
    er = n(204925),
    ei = n(746080),
    ea = n(502075),
    es = n(172799),
    eo = n(516607);
let el = "invite",
    eu = null;
function ec(e) {
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
        n && null != e.channel && (0, F.ke)(e.channel.type) && (t.welcomeModalChannelId = e.channel.id),
        null != e.guild_scheduled_event && (t.guildScheduledEvent = e.guild_scheduled_event),
        (t.isGuestInvite = (0, o.Lt)(e.flags ?? 0, s.Q.IS_GUEST_INVITE)),
        (t.isApplicationBypassInvite = (0, o.Lt)(e.flags ?? 0, s.Q.IS_APPLICATION_BYPASS)),
        (t.inviterUserId = e.inviter?.id),
        n || (t.forceTransition = !0),
        t
    );
}
function ed(e, t) {
    return { ...e, invite_guild_scheduled_event_id: t.guildScheduledEventId };
}
function e_(e, t, n) {
    if (n?.targetType === es.yV.ROLE_SUBSCRIPTIONS_PURCHASE) return ei.VV.ROLE_SUBSCRIPTIONS;
    if (n?.targetType == null && !(0, F.QE)(t.type) && (0, R.K)(e)) return ei.VV.GUILD_HOME;
    let r = B.A.getChannel(t.id);
    return K.A.can(en.xBc.VIEW_CHANNEL, r)
        ? t.id
        : (j.Ay.getDefaultChannel(e, !0, en.xBc.CREATE_INSTANT_INVITE)?.id ?? t.id);
}
function ef(e, t) {
    let { type: n } = e,
        { transitionTo: r, welcomeModalChannelId: i, guildScheduledEvent: a } = t ?? {},
        s = n === en.rbe.GUILD_STAGE_VOICE,
        o = { source: k.A.INVITE_ACCEPT, navigationReplace: !0 };
    return (
        null != i && (o.welcomeModalChannelId = i),
        s && (o.state = { stageInviteKey: eo.J2 }),
        null != a && (o.guildScheduledEventId = a.id),
        (e) => (null != r ? r(e, o) : (0, U.pX)(e, o))
    );
}
function eh(e) {
    let { guildId: t, channel: r, options: i, analyticsLocations: a = [] } = e,
        s = Y.A.getGuild(t),
        o = s?.features.has(en.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        {
            targetUserId: l,
            targetType: u,
            targetApplicationId: c,
            isGuestInvite: d,
            isApplicationBypassInvite: f,
        } = i ?? {};
    if (!d && !f && !i?.forceTransition && o && $.A.getGuildId() !== t) return;
    let { type: h } = r,
        p = B.A.getChannel(r.id),
        g = e_(t, r, i),
        I = h === en.rbe.GUILD_STAGE_VOICE,
        T = en.BVt.CHANNEL(t, g);
    (0, F.QE)(h)
        ? (0, C.B)(() => {
              Promise.resolve()
                  .then(n.bind(n, 956793))
                  .then((e) => {
                      let { default: n } = e,
                          s = () => {
                              if (I) {
                                  (0, G.av)(r instanceof F.YB ? r : (0, F.createChannelRecord)(r)), (0, U.pX)(T);
                                  return;
                              }
                              i?.muteOnJoinVoiceChannel && J.A.setSelfMute(_.x.DEFAULT, !0),
                                  n.selectVoiceChannel(g),
                                  u === es.yV.STREAM &&
                                      null != l &&
                                      et.Nl({ streamType: ea.U4.GUILD, ownerId: l, guildId: t, channelId: g }),
                                  u === es.yV.EMBEDDED_APPLICATION &&
                                      null != c &&
                                      ((0, U.pX)(en.BVt.CHANNEL(t ?? en.ME, g)),
                                      (0, A.A)({
                                          channelId: g,
                                          applicationId: c,
                                          intent: i?.intent,
                                          inviterUserId: i?.inviterUserId,
                                          analyticsLocations: a,
                                          commandOrigin: y.iw.CHAT,
                                      }));
                          };
                      !d && (0, N.V)(t, [Y.A, z.default, H.Ay]) ? (0, b.Ze)(t, s) : s();
                  });
          })
        : (0, E.AX)(p) &&
          u === es.yV.EMBEDDED_APPLICATION &&
          null != c &&
          ((0, U.pX)(en.BVt.CHANNEL(t ?? en.ME, g)),
          (0, A.A)({
              channelId: g,
              applicationId: c,
              intent: i?.intent,
              inviterUserId: i?.inviterUserId,
              analyticsLocations: a,
              commandOrigin: y.iw.CHAT,
          })),
        ef(r, i)(T);
}
function ep(e) {
    let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
    null != t &&
        (0, C.B)(() => {
            let e = { guildScheduledEventId: t.id };
            null != n && (e.welcomeModalChannelId = n), (0, O.Ul)(t, e);
        });
}
function em(e, t, n) {
    return h.h.isDispatching()
        ? Promise.resolve().then(() => em(e, t, n))
        : (h.h.dispatch({ type: "INVITE_RESOLVE", code: e }),
          (0, P.A)(e, t, n).then((e) => {
              let { invite: t, code: n, banned: r } = e;
              return (
                  null != t
                      ? h.h.dispatch({ type: "INVITE_RESOLVE_SUCCESS", invite: t, code: n })
                      : h.h.dispatch({ type: "INVITE_RESOLVE_FAILURE", code: n, banned: r }),
                  { invite: t, code: n }
              );
          }));
}
let eg = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        B.A.addConditionalChangeListener(() => {
            let r = B.A.getChannel(e),
                i = z.default.getCurrentUser();
            return (
                null == r ||
                null == i ||
                (!((r.nsfw && !i.nsfwAllowed) || (r.isGuildVocalOrThread() && (0, T.Tv)(e))) &&
                    (t?.guildScheduledEvent != null
                        ? ep(t)
                        : eh({ guildId: r.getGuildId() ?? en.ME, channel: r, options: t, analyticsLocations: n }),
                    !1))
            );
        });
    },
    eE = async (e) => {
        let { guild_id: t, channel_id: n } = e;
        (0, D.Fd)(e) && null != n ? eg(n) : await ee.A.transitionToGuildSync(t);
    };
function eA(e, t) {
    let { invite: n, action: r, inviter_id: i, invite_message_id: a } = e;
    q.default.track(en.HAw.INVITE_EMBED_ACTIONED, {
        action: r,
        invite_code: n.code,
        invite_type: n.type?.toString(),
        inviter_id: i ?? null,
        invite_message_id: a ?? null,
        location_stack: t ?? null,
    });
}
function eI(e, t, n) {
    q.default.track(en.HAw.INVITE_SERVER_CLICKED, { guild_id: e, action: t, location_stack: n ?? null });
}
let eT = {
    resolveInvite: em,
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
                url: en.Rsh.INSTANT_INVITES(e),
                body: r,
                context: { location: n },
                rejectWithError: !0,
            });
            return h.h.dispatch({ type: "INSTANT_INVITE_CREATE_SUCCESS", channelId: e, invite: i }), i;
        } catch (t) {
            throw (h.h.dispatch({ type: "INSTANT_INVITE_CREATE_FAILURE", channelId: e }), new p.A(t));
        }
    },
    async mobileCreateInvite(e, t) {
        let n = W.A.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let r = { max_age: X.A.Seconds.DAY },
            i = await this.createInvite(e.id, r, t).catch(() =>
                h.h.dispatch({ type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED" }),
            );
        return i?.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => h.h.wait(() => e(null))), W.A.getFriendInvitesFetching()))
            return null != eu ? eu.then((e) => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
        (eu = d.Bo.get({ url: en.Rsh.FRIEND_INVITES, context: { location: e }, rejectWithError: !1 })),
            h.h.dispatch({ type: "FRIEND_INVITES_FETCH_REQUEST", requestedAt: new Date() });
        let { body: t } = await eu;
        return (
            (eu = null), h.h.dispatch({ type: "FRIEND_INVITES_FETCH_RESPONSE", receivedAt: new Date(), invites: t }), t
        );
    },
    createFriendInvite: (e, t) => (
        h.h.dispatch({ type: "FRIEND_INVITE_CREATE_REQUEST" }),
        d.Bo.post({ url: en.Rsh.FRIEND_INVITES, body: e ?? {}, context: { location: t }, rejectWithError: !1 }).then(
            (e) => {
                let { body: t } = e;
                return h.h.dispatch({ type: "FRIEND_INVITE_CREATE_SUCCESS", invite: t }), t;
            },
            (e) => {
                throw (h.h.dispatch({ type: "FRIEND_INVITE_CREATE_FAILURE", error: e }), e);
            },
        )
    ),
    revokeFriendInvites: () => (
        h.h.dispatch({ type: "FRIEND_INVITE_REVOKE_REQUEST" }),
        d.Bo.del({ url: en.Rsh.FRIEND_INVITES, context: { location }, rejectWithError: !1 }).then((e) => {
            let { body: t } = e;
            h.h.dispatch({ type: "FRIEND_INVITE_REVOKE_SUCCESS", invites: t });
        })
    ),
    revokeFriendInvite: (e) => d.Bo.del({ url: en.Rsh.INVITE(e), rejectWithError: !1 }),
    async fetchFriendMembers(e) {
        try {
            let { body: t } = await Z.A.get({
                url: en.Rsh.INVITE_FRIEND_MEMBERS(e),
                trackedActionData: {
                    event: a.NetworkActionNames.INVITE_FRIEND_MEMBERS_FETCH,
                    properties: (t) => (0, f.e0)({ code: e, friend_count: t?.body?.friend_member_ids?.length ?? 0 }),
                },
                rejectWithError: !0,
            });
            h.h.dispatch({
                type: "INVITE_FRIEND_MEMBERS_FETCH_SUCCESS",
                code: e,
                friendMemberIds: t.friend_member_ids,
            });
        } catch (t) {
            h.h.dispatch({ type: "INVITE_FRIEND_MEMBERS_FETCH_FAILURE", code: e });
        }
    },
    clearInviteFromStore(e) {
        h.h.dispatch({ type: "INSTANT_INVITE_CLEAR", channelId: e });
    },
    revokeInvite(e) {
        let { code: t, channel: n } = e;
        return Z.A.delete({
            url: en.Rsh.INVITE(t),
            oldFormErrors: !0,
            trackedActionData: {
                event: a.NetworkActionNames.INVITE_REVOKE,
                properties: { uses: e.uses, max_uses: e.maxUses, max_age: e.maxAge, invite_type: e.type },
            },
            rejectWithError: !1,
        }).then(() => {
            h.h.dispatch({ type: "INSTANT_INVITE_REVOKE_SUCCESS", code: t, channelId: n.id });
        });
    },
    acceptInvite(e) {
        let { inviteKey: t, context: r, callback: i, skipOnboarding: a } = e,
            s = (0, x.y$)(t),
            o = s.baseCode,
            l = V.default.getSessionId(),
            u = ed(r, s),
            c = z.default.getCurrentUser();
        return c?.hasFlag(en.nhx.QUARANTINED)
            ? ((0, M.default)(), new Promise((e, t) => t(Error())))
            : (h.h.dispatch({ type: "INVITE_ACCEPT", code: o }),
              d.Bo.post({
                  url: en.Rsh.INVITE(o),
                  context: u,
                  oldFormErrors: !0,
                  body: { session_id: l },
                  rejectWithError: !1,
              }).then(
                  async (e) => {
                      h.h.dispatch({ type: "INVITE_ACCEPT_SUCCESS", invite: e.body, code: o });
                      let t = D.Ay.getGuildScheduledEvent(s.guildScheduledEventId),
                          r = { ...e.body, guild_scheduled_event: t },
                          l = r?.guild_id ?? r?.guild?.id;
                      if (!a && null != l && r.new_member && !r.show_verification_form) {
                          let { default: e } = await Promise.resolve().then(n.bind(n, 967305));
                          await e({ guildId: l });
                      }
                      return i?.(r), e.body;
                  },
                  (e) => {
                      throw (
                          (e.body?.code === en.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED &&
                              (0, I.yO)(er.w_.JOIN_LARGE_GUILD_UNDERAGE),
                          h.h.dispatch({
                              type: "INVITE_ACCEPT_FAILURE",
                              code: o,
                              error: { message: e.body?.message, code: e.body?.code },
                          }),
                          new g.A(e))
                      );
                  },
              ));
    },
    acceptInviteAndTransitionToInviteChannel(e) {
        let { inviteKey: t, context: n, analyticsLocations: r, callback: i, skipOnboarding: a } = e;
        return this.acceptInvite({
            inviteKey: t,
            context: n,
            skipOnboarding: a,
            callback: (e) => {
                if (null != e.channel) {
                    let t = ec(e);
                    eg(e.channel.id, t, r ?? []);
                }
                null != i && i(e);
            },
        });
    },
    transitionToInvite(e, t, n) {
        let { channel: r, guild: i } = e;
        if (null != i && i.features?.includes(en.GuildFeatures.HUB)) return void w.A.onOpenHubInvite(e);
        let a = (0, o.Lt)(e.flags ?? 0, s.Q.IS_APPLICATION_BYPASS);
        if (null != i && !a && e.new_member && (0, L.h)(i)) return void (0, L.W)(i.id);
        if (null == r) return;
        let l = ec(e);
        null != t && (l.transitionTo = t),
            null != n && (l.muteOnJoinVoiceChannel = n),
            eh({ guildId: null != i ? i.id : en.ME, channel: r, options: l });
    },
    transitionToInviteSync(e, t, n) {
        if (null != e.channel) {
            let r = ec(e);
            this.transitionToInviteChannelSync(e.channel.id, { ...r, intent: n, transitionTo: t, forceTransition: !0 });
        }
    },
    openNativeAppModal(e) {
        let t = { experiments: [S.R.definition.id] };
        v.A.openNativeAppModal(e, en.e$_.INVITE_BROWSER, t);
    },
    openApp(e, t, n, r, a) {
        let s,
            o = null != e ? (0, x.y$)(e) : null,
            d = o?.baseCode;
        if (
            (h.h.dispatch({ type: "INVITE_APP_OPENING", code: e }),
            null != i().ua && i().ua.toLowerCase().indexOf("googlebot") > -1)
        )
            return void h.h.dispatch({ type: "INVITE_APP_NOT_OPENED", code: e });
        if (i().os?.family === "Android" || i().os?.family === "iOS") {
            let e = null != d ? (0, l.jN)(d) : (0, l.BH)(),
                t = (0, u.I_)();
            (s = (0, u.Ay)(e, {
                utmSource: 2 === a ? "friend_invite" : el,
                fingerprint: n,
                username: r,
                attemptId: t,
                event: o?.guildScheduledEventId,
                iosFallbackLink: `https://discord.com/api/download/mobile?invite_code=${d}`,
            })),
                q.default.track(en.HAw.DEEP_LINK_CLICKED, {
                    fingerprint: (0, c.v)(n),
                    attempt_id: t,
                    source: el,
                    invite_code: d,
                });
        } else "#" === (s = null != t ? en.BVt.INVITE_PROXY(t) : "")[0] && (s = s.slice(1)), (s = `discord://${s}`);
        Q.A.launch(s, (t) => {
            h.h.dispatch(t ? { type: "INVITE_APP_OPENED", code: e } : { type: "INVITE_APP_NOT_OPENED", code: e });
        });
    },
    transitionToInviteChannelSync: eg,
    trackInviteServerClicked: eI,
};
