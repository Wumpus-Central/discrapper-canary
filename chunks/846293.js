n.d(t, {
    Ay: () => ev,
    Pq: () => eA,
    he: () => eO,
    rq: () => ey,
}),
    n(938796),
    n(65821);
var r = n(481613),
    i = n.n(r),
    a = n(110259),
    s = n(821418),
    o = n(665260),
    l = n(400253),
    c = n(49485),
    u = n(80703),
    d = n(562465),
    f = n(205693),
    p = n(933681),
    _ = n(73153),
    h = n(181658),
    m = n(178253),
    g = n(811024),
    E = n(983057),
    b = n(612200),
    y = n(323073),
    O = n(392054),
    A = n(197111),
    v = n(507263),
    S = n(202384),
    I = n(51758),
    T = n(473529),
    C = n(707592),
    N = n(698441),
    R = n(610101),
    w = n(224536),
    P = n(21599),
    D = n(970163),
    x = n(700241),
    L = n(824865),
    j = n(976860),
    M = n(323443),
    k = n(95701),
    U = n(961350),
    G = n(734057),
    V = n(808728),
    F = n(696451),
    B = n(71393),
    H = n(958590),
    Y = n(576705),
    W = n(967198),
    K = n(287809),
    z = n(954571),
    q = n(927813),
    X = n(499785),
    Z = n(877062),
    Q = n(827343),
    $ = n(686956),
    J = n(401843),
    ee = n(652215),
    et = n(204925),
    en = n(746080),
    er = n(502075),
    ei = n(172799),
    ea = n(516607);

function es(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function eo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                es(e, t, n[t]);
            });
    }
    return e;
}

function el(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function ec(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : el(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eu = "invite",
    ed = null;

function ef(e) {
    var t, n, r, i, a, l;
    let c = {};
    switch (e.target_type) {
        case ei.yV.STREAM:
            (c.targetType = e.target_type), (c.targetUserId = null == (a = e.target_user) ? void 0 : a.id);
            break;
        case ei.yV.EMBEDDED_APPLICATION:
            (c.targetType = e.target_type),
                (c.targetApplicationId = null == (l = e.target_application) ? void 0 : l.id);
            break;
        case ei.yV.ROLE_SUBSCRIPTIONS_PURCHASE:
            c.targetType = e.target_type;
    }
    let u = null == B.A.getGuild(null == (r = e.guild) ? void 0 : r.id) || e.new_member;
    return (
        u && null != e.channel && (0, k.ke)(e.channel.type) && (c.welcomeModalChannelId = e.channel.id),
        null != e.guild_scheduled_event && (c.guildScheduledEvent = e.guild_scheduled_event),
        (c.isGuestInvite = (0, o.Lt)(null != (t = e.flags) ? t : 0, s.Q.IS_GUEST_INVITE)),
        (c.isApplicationBypassInvite = (0, o.Lt)(null != (n = e.flags) ? n : 0, s.Q.IS_APPLICATION_BYPASS)),
        (c.inviterUserId = null == (i = e.inviter) ? void 0 : i.id),
        u || (c.forceTransition = !0),
        c
    );
}

function ep(e, t) {
    return ec(eo({}, e), {
        invite_guild_scheduled_event_id: t.guildScheduledEventId,
    });
}

function e_(e, t, n) {
    var r, i;
    if ((null == n ? void 0 : n.targetType) === ei.yV.ROLE_SUBSCRIPTIONS_PURCHASE) return en.VV.ROLE_SUBSCRIPTIONS;
    if ((null == n ? void 0 : n.targetType) == null && !(0, k.QE)(t.type) && (0, T.K)(e)) return en.VV.GUILD_HOME;
    let a = G.A.getChannel(t.id);
    return Y.A.can(ee.xBc.VIEW_CHANNEL, a)
        ? t.id
        : null != (r = null == (i = V.Ay.getDefaultChannel(e, !0, ee.xBc.CREATE_INSTANT_INVITE)) ? void 0 : i.id)
          ? r
          : t.id;
}

function eh(e, t) {
    let { type: n } = e,
        { transitionTo: r, welcomeModalChannelId: i, guildScheduledEvent: a } = null != t ? t : {},
        s = n === ee.rbe.GUILD_STAGE_VOICE,
        o = {
            source: L.A.INVITE_ACCEPT,
            navigationReplace: !0,
        };
    return (
        null != i && (o.welcomeModalChannelId = i),
        s && (o.state = ea.J2),
        null != a && (o.guildScheduledEventId = a.id),
        (e) => (null != r ? r(e, o) : (0, j.pX)(e, o))
    );
}

function em(e) {
    let { guildId: t, channel: r, options: i, analyticsLocations: a = [] } = e,
        s = B.A.getGuild(t),
        o = null == s ? void 0 : s.features.has(ee.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        {
            targetUserId: l,
            targetType: c,
            targetApplicationId: u,
            isGuestInvite: d,
            isApplicationBypassInvite: p,
        } = null != i ? i : {};
    if (!d && !p && !(null == i ? void 0 : i.forceTransition) && o && W.A.getGuildId() !== t) return;
    let { type: _ } = r,
        h = G.A.getChannel(r.id),
        m = e_(t, r, i),
        b = _ === ee.rbe.GUILD_STAGE_VOICE,
        y = ee.BVt.CHANNEL(t, m);
    (0, k.QE)(_)
        ? (0, v.B)(() => {
              Promise.resolve()
                  .then(n.bind(n, 956793))
                  .then((e) => {
                      let { default: n } = e,
                          s = () => {
                              if (b) {
                                  (0, M.av)(r instanceof k.YB ? r : (0, k.createChannelRecord)(r)), (0, j.pX)(y);
                                  return;
                              }
                              (null == i ? void 0 : i.muteOnJoinVoiceChannel) && Q.A.setSelfMute(f.x.DEFAULT, !0),
                                  n.selectVoiceChannel(m),
                                  c === ei.yV.STREAM &&
                                      null != l &&
                                      J.Nl({
                                          streamType: er.U4.GUILD,
                                          ownerId: l,
                                          guildId: t,
                                          channelId: m,
                                      }),
                                  c === ei.yV.EMBEDDED_APPLICATION &&
                                      null != u &&
                                      ((0, j.pX)(ee.BVt.CHANNEL(null != t ? t : ee.ME, m)),
                                      (0, E.A)({
                                          channelId: m,
                                          applicationId: u,
                                          intent: null == i ? void 0 : i.intent,
                                          inviterUserId: null == i ? void 0 : i.inviterUserId,
                                          analyticsLocations: a,
                                          commandOrigin: O.iw.CHAT,
                                      }));
                          };
                      !d && (0, I.V)(t, [B.A, K.default, F.Ay]) ? (0, S.Ze)(t, s) : s();
                  });
          })
        : (0, g.AX)(h) &&
          c === ei.yV.EMBEDDED_APPLICATION &&
          null != u &&
          ((0, j.pX)(ee.BVt.CHANNEL(null != t ? t : ee.ME, m)),
          (0, E.A)({
              channelId: m,
              applicationId: u,
              intent: null == i ? void 0 : i.intent,
              inviterUserId: null == i ? void 0 : i.inviterUserId,
              analyticsLocations: a,
              commandOrigin: O.iw.CHAT,
          })),
        eh(r, i)(y);
}

function eg(e) {
    let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
    null != t &&
        (0, v.B)(() => {
            let e = {
                guildScheduledEventId: t.id,
            };
            null != n && (e.welcomeModalChannelId = n), (0, C.Ul)(t, e);
        });
}

function eE(e, t, n) {
    return _.h.isDispatching()
        ? Promise.resolve().then(() => eE(e, t, n))
        : (_.h.dispatch({
              type: "INVITE_RESOLVE",
              code: e,
          }),
          (0, D.A)(e, t, n).then((e) => {
              let { invite: t, code: n, banned: r } = e;
              return (
                  null != t
                      ? _.h.dispatch({
                            type: "INVITE_RESOLVE_SUCCESS",
                            invite: t,
                            code: n,
                        })
                      : _.h.dispatch({
                            type: "INVITE_RESOLVE_FAILURE",
                            code: n,
                            banned: r,
                        }),
                  {
                      invite: t,
                      code: n,
                  }
              );
          }));
}
let eb = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        G.A.addConditionalChangeListener(() => {
            var r;
            let i = G.A.getChannel(e),
                a = K.default.getCurrentUser();
            return (
                null == i ||
                null == a ||
                (!((i.nsfw && !a.nsfwAllowed) || (i.isGuildVocalOrThread() && (0, y.Tv)(e))) &&
                    ((null == t ? void 0 : t.guildScheduledEvent) != null
                        ? eg(t)
                        : em({
                              guildId: null != (r = i.getGuildId()) ? r : ee.ME,
                              channel: i,
                              options: t,
                              analyticsLocations: n,
                          }),
                    !1))
            );
        });
    },
    ey = async (e) => {
        let { guild_id: t, channel_id: n } = e;
        (0, N.Fd)(e) && null != n ? eb(n) : await $.A.transitionToGuildSync(t);
    };

function eO(e, t) {
    var n;
    let { invite: r, action: i, inviter_id: a, invite_message_id: s } = e;
    z.default.track(ee.HAw.INVITE_EMBED_ACTIONED, {
        action: i,
        invite_code: r.code,
        invite_type: null == (n = r.type) ? void 0 : n.toString(),
        inviter_id: null != a ? a : null,
        invite_message_id: null != s ? s : null,
        location_stack: null != t ? t : null,
    });
}

function eA(e, t, n) {
    z.default.track(ee.HAw.INVITE_SERVER_CLICKED, {
        guild_id: e,
        action: t,
        location_stack: null != n ? n : null,
    });
}
let ev = {
    resolveInvite: eE,
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
            var r;
            let i = eo({}, t);
            (null == (r = i.role_ids) ? void 0 : r.length) === 0 && delete i.role_ids;
            let { body: a } = await d.Bo.post({
                url: ee.Rsh.INSTANT_INVITES(e),
                body: i,
                context: {
                    location: n,
                },
                rejectWithError: !0,
            });
            return (
                _.h.dispatch({
                    type: "INSTANT_INVITE_CREATE_SUCCESS",
                    channelId: e,
                    invite: a,
                }),
                a
            );
        } catch (t) {
            throw (
                (_.h.dispatch({
                    type: "INSTANT_INVITE_CREATE_FAILURE",
                    channelId: e,
                }),
                new h.A(t))
            );
        }
    },
    async mobileCreateInvite(e, t) {
        let n = H.A.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let r = {
                max_age: q.A.Seconds.DAY,
            },
            i = await this.createInvite(e.id, r, t).catch(() =>
                _.h.dispatch({
                    type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED",
                }),
            );
        return null == i ? void 0 : i.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => _.h.wait(() => e(null))), H.A.getFriendInvitesFetching()))
            return null != ed ? ed.then((e) => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
        (ed = d.Bo.get({
            url: ee.Rsh.FRIEND_INVITES,
            context: {
                location: e,
            },
            rejectWithError: !1,
        })),
            _.h.dispatch({
                type: "FRIEND_INVITES_FETCH_REQUEST",
                requestedAt: new Date(),
            });
        let { body: t } = await ed;
        return (
            (ed = null),
            _.h.dispatch({
                type: "FRIEND_INVITES_FETCH_RESPONSE",
                receivedAt: new Date(),
                invites: t,
            }),
            t
        );
    },
    createFriendInvite: (e, t) => (
        _.h.dispatch({
            type: "FRIEND_INVITE_CREATE_REQUEST",
        }),
        d.Bo.post({
            url: ee.Rsh.FRIEND_INVITES,
            body: null != e ? e : {},
            context: {
                location: t,
            },
            rejectWithError: !1,
        }).then(
            (e) => {
                let { body: t } = e;
                return (
                    _.h.dispatch({
                        type: "FRIEND_INVITE_CREATE_SUCCESS",
                        invite: t,
                    }),
                    t
                );
            },
            (e) => {
                throw (
                    (_.h.dispatch({
                        type: "FRIEND_INVITE_CREATE_FAILURE",
                        error: e,
                    }),
                    e)
                );
            },
        )
    ),
    revokeFriendInvites: () => (
        _.h.dispatch({
            type: "FRIEND_INVITE_REVOKE_REQUEST",
        }),
        d.Bo.del({
            url: ee.Rsh.FRIEND_INVITES,
            context: {
                location,
            },
            rejectWithError: !1,
        }).then((e) => {
            let { body: t } = e;
            _.h.dispatch({
                type: "FRIEND_INVITE_REVOKE_SUCCESS",
                invites: t,
            });
        })
    ),
    revokeFriendInvite: (e) =>
        d.Bo.del({
            url: ee.Rsh.INVITE(e),
            rejectWithError: !1,
        }),
    async fetchFriendMembers(e) {
        try {
            let { body: t } = await X.A.get({
                url: ee.Rsh.INVITE_FRIEND_MEMBERS(e),
                trackedActionData: {
                    event: a.NetworkActionNames.INVITE_FRIEND_MEMBERS_FETCH,
                    properties: (t) => {
                        var n, r, i;
                        return (0, p.e0)({
                            code: e,
                            friend_count:
                                null !=
                                (n =
                                    null == t || null == (i = t.body) || null == (r = i.friend_member_ids)
                                        ? void 0
                                        : r.length)
                                    ? n
                                    : 0,
                        });
                    },
                },
                rejectWithError: !0,
            });
            _.h.dispatch({
                type: "INVITE_FRIEND_MEMBERS_FETCH_SUCCESS",
                code: e,
                friendMemberIds: t.friend_member_ids,
            });
        } catch (t) {
            _.h.dispatch({
                type: "INVITE_FRIEND_MEMBERS_FETCH_FAILURE",
                code: e,
            });
        }
    },
    clearInviteFromStore(e) {
        _.h.dispatch({
            type: "INSTANT_INVITE_CLEAR",
            channelId: e,
        });
    },
    revokeInvite(e) {
        let { code: t, channel: n } = e;
        return X.A.delete({
            url: ee.Rsh.INVITE(t),
            oldFormErrors: !0,
            trackedActionData: {
                event: a.NetworkActionNames.INVITE_REVOKE,
                properties: {
                    uses: e.uses,
                    max_uses: e.maxUses,
                    max_age: e.maxAge,
                    invite_type: e.type,
                },
            },
            rejectWithError: !1,
        }).then(() => {
            _.h.dispatch({
                type: "INSTANT_INVITE_REVOKE_SUCCESS",
                code: t,
                channelId: n.id,
            });
        });
    },
    acceptInvite(e) {
        var t;
        let { inviteKey: r, context: i, callback: a, skipOnboarding: s } = e,
            o = (0, P.y$)(r),
            l = o.baseCode,
            c = U.default.getSessionId(),
            u = ep(i, o),
            f = K.default.getCurrentUser();
        return null != (t = null == f ? void 0 : f.hasFlag(ee.nhx.QUARANTINED)) && t
            ? ((0, x.default)(), new Promise((e, t) => t(Error())))
            : (_.h.dispatch({
                  type: "INVITE_ACCEPT",
                  code: l,
              }),
              d.Bo.post({
                  url: ee.Rsh.INVITE(l),
                  context: u,
                  oldFormErrors: !0,
                  body: {
                      session_id: c,
                  },
                  rejectWithError: !1,
              }).then(
                  async (e) => {
                      var t, r;
                      _.h.dispatch({
                          type: "INVITE_ACCEPT_SUCCESS",
                          invite: e.body,
                          code: l,
                      });
                      let i = N.Ay.getGuildScheduledEvent(o.guildScheduledEventId),
                          c = ec(eo({}, e.body), {
                              guild_scheduled_event: i,
                          }),
                          u =
                              null != (t = null == c ? void 0 : c.guild_id)
                                  ? t
                                  : null == c || null == (r = c.guild)
                                    ? void 0
                                    : r.id;
                      if (!s && null != u && c.new_member && !c.show_verification_form) {
                          let { default: e } = await Promise.resolve().then(n.bind(n, 967305));
                          await e({
                              guildId: u,
                          });
                      }
                      return null == a || a(c), e.body;
                  },
                  (e) => {
                      var t, n, r;
                      throw (
                          ((null == (t = e.body) ? void 0 : t.code) ===
                              ee.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED &&
                              (0, b.yO)(et.w_.JOIN_LARGE_GUILD_UNDERAGE),
                          _.h.dispatch({
                              type: "INVITE_ACCEPT_FAILURE",
                              code: l,
                              error: {
                                  message: null == (n = e.body) ? void 0 : n.message,
                                  code: null == (r = e.body) ? void 0 : r.code,
                              },
                          }),
                          new m.A(e))
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
                    let t = ef(e);
                    eb(e.channel.id, t, null != r ? r : []);
                }
                null != i && i(e);
            },
        });
    },
    transitionToInvite(e, t, n) {
        var r, i;
        let { channel: a, guild: l } = e;
        if (null != l && (null == (i = l.features) ? void 0 : i.includes(ee.GuildFeatures.HUB)))
            return void w.A.onOpenHubInvite(e);
        let c = (0, o.Lt)(null != (r = e.flags) ? r : 0, s.Q.IS_APPLICATION_BYPASS);
        if (null != l && !c && e.new_member && (0, R.h)(l)) return void (0, R.W)(l.id);
        if (null == a) return;
        let u = ef(e);
        null != t && (u.transitionTo = t),
            null != n && (u.muteOnJoinVoiceChannel = n),
            em({
                guildId: null != l ? l.id : ee.ME,
                channel: a,
                options: u,
            });
    },
    transitionToInviteSync(e, t, n) {
        if (null != e.channel) {
            let r = ef(e);
            this.transitionToInviteChannelSync(
                e.channel.id,
                ec(eo({}, r), {
                    intent: n,
                    transitionTo: t,
                    forceTransition: !0,
                }),
            );
        }
    },
    openNativeAppModal(e) {
        A.A.openNativeAppModal(e, ee.e$_.INVITE_BROWSER);
    },
    openApp(e, t, n, r, a) {
        var s, o;
        let d,
            f = null != e ? (0, P.y$)(e) : null,
            p = null == f ? void 0 : f.baseCode;
        if (
            (_.h.dispatch({
                type: "INVITE_APP_OPENING",
                code: e,
            }),
            null != i().ua && i().ua.toLowerCase().indexOf("googlebot") > -1)
        )
            return void _.h.dispatch({
                type: "INVITE_APP_NOT_OPENED",
                code: e,
            });
        if (
            (null == (s = i().os) ? void 0 : s.family) === "Android" ||
            (null == (o = i().os) ? void 0 : o.family) === "iOS"
        ) {
            let e = null != p ? (0, l.jN)(p) : (0, l.BH)(),
                t = (0, c.I_)();
            (d = (0, c.Ay)(e, {
                utmSource: 2 === a ? "friend_invite" : eu,
                fingerprint: n,
                username: r,
                attemptId: t,
                event: null == f ? void 0 : f.guildScheduledEventId,
                iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(p),
            })),
                z.default.track(ee.HAw.DEEP_LINK_CLICKED, {
                    fingerprint: (0, u.v)(n),
                    attempt_id: t,
                    source: eu,
                    invite_code: p,
                });
        } else
            "#" === (d = null != t ? ee.BVt.INVITE_PROXY(t) : "")[0] && (d = d.slice(1)), (d = "discord://".concat(d));
        Z.A.launch(d, (t) => {
            _.h.dispatch(
                t
                    ? {
                          type: "INVITE_APP_OPENED",
                          code: e,
                      }
                    : {
                          type: "INVITE_APP_NOT_OPENED",
                          code: e,
                      },
            );
        });
    },
    transitionToInviteChannelSync: eb,
    trackInviteServerClicked: eA,
};
