i.d(e, { Z: () => J }), i(47120), i(653041);
var n = i(200651);
i(192379);
var l = i(442837),
    a = i(481060),
    o = i(278323),
    d = i(224706),
    r = i(2052),
    c = i(906732),
    u = i(835473),
    s = i(768419),
    p = i(300020),
    I = i(456190),
    b = i(239470),
    y = i(894344),
    f = i(203777),
    v = i(314897),
    Z = i(592125),
    N = i(650774),
    j = i(430824),
    O = i(496675),
    h = i(158776),
    g = i(699516),
    S = i(944486),
    m = i(885110),
    _ = i(594174),
    E = i(979651),
    P = i(181106),
    C = i(5192),
    x = i(566620),
    T = i(317381),
    A = i(638880),
    G = i(782769),
    w = i(255621),
    L = i(16609),
    U = i(527805),
    Y = i(620662),
    D = i(841784),
    W = i(275920),
    k = i(701488),
    V = i(981631),
    F = i(616922),
    R = i(388032);
function J(t, e) {
    let { analyticsLocations: J } = (0, c.ZP)(),
        M = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
        X = (0, l.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities()),
        q = (0, l.Wu)([m.Z], () => m.Z.getActivities().filter((t) => null == t.application_id || !(null == X ? void 0 : X.has(t.application_id)))),
        $ = (0, l.Wu)([h.Z], () => (null != e ? h.Z.getActivities(e.id, null == t ? void 0 : t.getGuildId()) : []), [e, t]),
        z = (0, l.Wu)(
            [T.ZP],
            () => {
                let i = (null == t ? void 0 : t.id) != null ? T.ZP.getEmbeddedActivitiesForChannel(t.id) : T.i6;
                return null != e
                    ? i.filter((t) => {
                          let { userIds: i } = t;
                          return i.has(e.id);
                      })
                    : i;
            },
            [e, t]
        ),
        H = (0, l.e7)([O.Z], () => null == t || t.isPrivate() || O.Z.can(V.Plq.SEND_MESSAGES, t), [t]),
        K = (0, l.Wu)([P.Z], () => [...$.map((t) => null != t.application_id && P.Z.getState(t.application_id, V.mFx.JOIN) === V.OcF.LOADING), ...z.map((t) => P.Z.getState(t.applicationId, V.mFx.JOIN) === V.OcF.LOADING)], [$, z]),
        Q = (0, u.Z)([...$.filter((t) => (null == t ? void 0 : t.application_id) != null).map((t) => t.application_id), ...z.map((t) => t.applicationId)]),
        B = null == t ? void 0 : t.id,
        tt = (0, l.Wu)(
            [Z.Z, j.Z, N.Z, g.Z, S.Z, E.Z, O.Z],
            () => [
                ...$.map((t) =>
                    (0, w.Z)({
                        user: null != e ? e : M,
                        activity: t,
                        application: Q.find((e) => (null == e ? void 0 : e.id) === t.application_id),
                        channelId: B,
                        currentUser: M,
                        isEmbedded: (0, D.Z)(t),
                        ChannelStore: Z.Z,
                        GuildStore: j.Z,
                        GuildMemberCountStore: N.Z,
                        RelationshipStore: g.Z,
                        SelectedChannelStore: S.Z,
                        VoiceStateStore: E.Z,
                        PermissionStore: O.Z
                    })
                ),
                ...z.map((t) => {
                    let i = null != e ? e : M;
                    return (
                        null != i &&
                        (0, U.ZP)({
                            userId: i.id,
                            application: Q.find((e) => (null == e ? void 0 : e.id) === t.applicationId),
                            channelId: B,
                            currentUser: M,
                            isActivitiesEnabledForCurrentPlatform: (0, G.a)(),
                            ChannelStore: Z.Z,
                            GuildStore: j.Z,
                            VoiceStateStore: E.Z,
                            PermissionStore: O.Z
                        }) === U.Fw.CAN_JOIN
                    );
                })
            ],
            [$, Q, B, M, z, e]
        ),
        te = (0, l.Wu)([s.Z, v.default], () => $.map((t) => (t.type === V.IIU.LISTENING && null != e ? (0, b.Z)(s.Z, v.default, e, t) : void 0)), [e, $]),
        ti = (0, r.O)();
    if (!H && (null == t ? void 0 : t.type) !== V.d4z.GUILD_VOICE) return null;
    let tn = (i, n) => {
            null != t
                ? o.Z.sendActivityInvite({
                      type: i,
                      channelId: t.id,
                      activity: n,
                      location: V.Sbl.CONTEXT_MENU
                  })
                : null != e &&
                  o.Z.sendActivityInviteUser({
                      type: i,
                      userId: e.id,
                      activity: n,
                      location: V.Sbl.CONTEXT_MENU
                  });
        },
        tl = (l, o) => {
            let d = Z.Z.getChannel(l),
                r = null == d ? void 0 : j.Z.getGuild(d.guild_id);
            return null == d || null == r
                ? void 0
                : null != e
                  ? x.pu({
                        channelId: d.id,
                        applicationId: o,
                        userId: e.id,
                        location: V.t4x.CONTEXT_MENU
                    })
                  : null != t && t.type === V.d4z.GUILD_VOICE
                    ? (0, a.ZDy)(
                          async () => {
                              let { default: e } = await Promise.all([i.e('7654'), i.e('49049'), i.e('90067')]).then(i.bind(i, 560114));
                              return (i) => {
                                  var l, a;
                                  return (0, n.jsx)(
                                      e,
                                      ((l = (function (t) {
                                          for (var e = 1; e < arguments.length; e++) {
                                              var i = null != arguments[e] ? arguments[e] : {},
                                                  n = Object.keys(i);
                                              'function' == typeof Object.getOwnPropertySymbols &&
                                                  (n = n.concat(
                                                      Object.getOwnPropertySymbols(i).filter(function (t) {
                                                          return Object.getOwnPropertyDescriptor(i, t).enumerable;
                                                      })
                                                  )),
                                                  n.forEach(function (e) {
                                                      var n;
                                                      (n = i[e]),
                                                          e in t
                                                              ? Object.defineProperty(t, e, {
                                                                    value: n,
                                                                    enumerable: !0,
                                                                    configurable: !0,
                                                                    writable: !0
                                                                })
                                                              : (t[e] = n);
                                                  });
                                          }
                                          return t;
                                      })({}, i)),
                                      (a = a =
                                          {
                                              guild: r,
                                              channel: d,
                                              applicationId: o,
                                              analyticsLocation: t.type === V.d4z.GUILD_VOICE ? V.ZY5.GUILD_CHANNEL : V.ZY5.DM_CHANNEL,
                                              source: V.t4x.ACTIVITY_INVITE
                                          }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                                          : (function (t, e) {
                                                var i = Object.keys(t);
                                                if (Object.getOwnPropertySymbols) {
                                                    var n = Object.getOwnPropertySymbols(t);
                                                    i.push.apply(i, n);
                                                }
                                                return i;
                                            })(Object(a)).forEach(function (t) {
                                                Object.defineProperty(l, t, Object.getOwnPropertyDescriptor(a, t));
                                            }),
                                      l)
                                  );
                              };
                          },
                          { modalKey: 'use-activity-items-embedded-invite-modal' }
                      )
                    : (null == t ? void 0 : t.id) != null
                      ? x.sN({
                            activityChannelId: d.id,
                            invitedChannelId: t.id,
                            applicationId: o,
                            location: V.t4x.CONTEXT_MENU
                        })
                      : void 0;
        },
        ta = async (t) => {
            var i, n;
            let l = (0, Y.Z)(t, V.xjy.EMBEDDED),
                a = S.Z.getVoiceChannelId(),
                o = Z.Z.getChannel(a);
            await d.Z.join({
                userId: e.id,
                sessionId: t.session_id,
                applicationId: t.application_id,
                channelId: a,
                messageId: null,
                intent: k.Ws.PLAY,
                embedded: l,
                partyId: null === (i = t.party) || void 0 === i ? void 0 : i.id,
                locationObject: ti.location,
                analyticsLocations: J
            }),
                l ||
                    (0, W.Z)({
                        type: V.q5t.JOIN,
                        userId: e.id,
                        guildId: null == o ? void 0 : o.guild_id,
                        channelId: a,
                        channelType: null == o ? void 0 : o.type,
                        applicationId: t.application_id,
                        partyId: null === (n = t.party) || void 0 === n ? void 0 : n.id,
                        locationObject: ti.location,
                        analyticsLocations: J
                    });
        },
        to = async (e) => {
            await (0, A.Z)({
                applicationId: e.applicationId,
                activityChannelId: null == t ? void 0 : t.id,
                locationObject: ti.location,
                analyticsLocations: J
            });
        },
        td = [];
    return (
        null == X ||
            X.forEach((i) => {
                let l = (null == e ? void 0 : e.id) != null && i.userIds.has(null == e ? void 0 : e.id),
                    o = O.Z.can(V.Plq.CREATE_INSTANT_INVITE, t),
                    d = Q.find((t) => (null == t ? void 0 : t.id) === i.applicationId);
                null != i.launchId &&
                    !l &&
                    o &&
                    null != d &&
                    td.push(
                        (0, n.jsx)(
                            a.sNh,
                            {
                                id: 'invite-to-join-embedded',
                                label: R.NW.string(R.t['3fRyS0']),
                                subtext: d.name,
                                action: () => {
                                    tl((0, L.pY)(i.location), i.applicationId);
                                }
                            },
                            'self-embedded-'.concat(i.applicationId)
                        )
                    );
            }),
        q.forEach((t, e) => {
            t.type === V.IIU.PLAYING && (0, Y.Z)(t, V.xjy.JOIN)
                ? td.push(
                      (0, n.jsx)(
                          a.sNh,
                          {
                              id: 'invite-to-join',
                              label: R.NW.string(R.t['3fRyS0']),
                              subtext: t.name,
                              action: () => tn(V.mFx.JOIN, t)
                          },
                          'self'.concat(e)
                      )
                  )
                : t.type === V.IIU.LISTENING &&
                  (0, Y.Z)(t, V.xjy.SYNC) &&
                  td.push(
                      (0, n.jsx)(
                          a.sNh,
                          {
                              id: 'invite-to-listen',
                              label: R.NW.string(R.t['5vvGpa']),
                              subtext: t.name,
                              action: () => tn(V.mFx.LISTEN, t)
                          },
                          'self'.concat(e)
                      )
                  );
        }),
        td.length > 0 && td.push((0, n.jsx)(a.Clw, {})),
        $.forEach((i, l) => {
            if (i.type === V.IIU.PLAYING && (0, Y.Z)(i, V.xjy.JOIN) && null != i.session_id && null != i.application_id) {
                if (tt[l]) {
                    let t = K[l];
                    td.push(
                        (0, n.jsx)(
                            a.sNh,
                            {
                                id: 'join',
                                label: t ? R.NW.string(R.t.bf6Ci4) : R.NW.string(R.t.VJlc0d),
                                disabled: t,
                                hint: t ? (0, n.jsx)(a.$jN, { type: a.$jN.Type.PULSING_ELLIPSIS }) : null,
                                subtext: i.name,
                                action: () => ta(i)
                            },
                            l
                        )
                    );
                } else
                    td.push(
                        (0, n.jsx)(
                            a.sNh,
                            {
                                id: 'ask-to-join',
                                label: R.NW.string(R.t.OKsSCQ),
                                subtext: i.name,
                                action: () => tn(V.mFx.JOIN_REQUEST, i)
                            },
                            l
                        )
                    );
            } else if (i.type === V.IIU.LISTENING && (0, Y.Z)(i, V.xjy.SYNC) && null != te[l]) {
                let o = te[l],
                    { playDisabled: d, syncDisabled: r } = o;
                td.push(
                    (0, n.jsx)(
                        a.sNh,
                        {
                            id: 'spotify-play-'.concat(i.session_id),
                            action: () => (0, f.Z)(o, F.kG.USER_ACTIVITY_PLAY),
                            label: (0, p.Z)(o, F.kG.USER_ACTIVITY_PLAY),
                            subtext: d ? (0, I.Z)(o, F.kG.USER_ACTIVITY_PLAY, null != t ? C.ZP.getNickname(t.guild_id, t.id, e) : void 0) : void 0,
                            disabled: d
                        },
                        'spotify-play-'.concat(i.session_id)
                    ),
                    (0, n.jsx)(
                        a.sNh,
                        {
                            id: 'spotify-sync-'.concat(i.session_id),
                            action: () => (0, y.Z)(o, F.kG.USER_ACTIVITY_SYNC),
                            label: R.NW.string(R.t.gXYoq6),
                            subtext: r ? (0, I.Z)(o, F.kG.USER_ACTIVITY_SYNC, null != t ? C.ZP.getNickname(t.guild_id, t.id, e) : void 0) : void 0,
                            disabled: r
                        },
                        'spotify-sync-'.concat(i.session_id)
                    )
                );
            }
        }),
        z.forEach((t, e) => {
            var i;
            let l = t.userIds.has(null !== (i = null == M ? void 0 : M.id) && void 0 !== i ? i : V.lds),
                o = e + $.length,
                d = K[o] || l,
                r = R.NW.string(R.t['4i2vj4']);
            l ? (r = R.NW.string(R.t['0OiwfH'])) : K[o] && (r = R.NW.string(R.t.bf6Ci4));
            let c = Q.find((e) => (null == e ? void 0 : e.id) === t.applicationId);
            tt[o] &&
                null != c &&
                td.push(
                    (0, n.jsx)(
                        a.sNh,
                        {
                            id: 'embedded-activity-join-'.concat(t.applicationId),
                            label: r,
                            disabled: d,
                            hint: K[o] ? (0, n.jsx)(a.$jN, { type: a.$jN.Type.PULSING_ELLIPSIS }) : null,
                            subtext: c.name,
                            action: () => to(t)
                        },
                        'embedded-activity-'.concat(t.applicationId)
                    )
                );
        }),
        td
    );
}
