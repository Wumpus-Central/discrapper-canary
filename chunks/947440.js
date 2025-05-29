i.d(e, { Z: () => M }), i(388685), i(539854);
var n = i(255367);
i(73800);
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
    f = i(894344),
    y = i(203777),
    v = i(314897),
    Z = i(592125),
    j = i(650774),
    O = i(430824),
    h = i(496675),
    N = i(158776),
    g = i(699516),
    S = i(944486),
    m = i(885110),
    E = i(594174),
    _ = i(979651),
    P = i(181106),
    C = i(5192),
    x = i(566620),
    T = i(317381),
    A = i(638880),
    G = i(790920),
    L = i(255621),
    w = i(16609),
    U = i(527805),
    D = i(620662),
    Y = i(841784),
    k = i(275920),
    V = i(701488),
    F = i(981631),
    R = i(616922),
    J = i(388032);
function M(t, e) {
    let { analyticsLocations: M } = (0, c.ZP)(),
        W = (0, l.e7)([E.default], () => E.default.getCurrentUser()),
        X = (0, l.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities()),
        q = (0, l.Wu)([m.Z], () => m.Z.getActivities().filter((t) => null == t.application_id || !(null == X ? void 0 : X.has(t.application_id)))),
        $ = (0, l.Wu)([N.Z], () => (null != e ? N.Z.getActivities(e.id, null == t ? void 0 : t.getGuildId()) : []), [e, t]),
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
        H = (0, l.e7)([h.Z], () => null == t || t.isPrivate() || h.Z.can(F.Plq.SEND_MESSAGES, t), [t]),
        B = (0, l.Wu)([P.Z], () => [...$.map((t) => null != t.application_id && P.Z.getState(t.application_id, F.mFx.JOIN) === F.OcF.LOADING), ...z.map((t) => P.Z.getState(t.applicationId, F.mFx.JOIN) === F.OcF.LOADING)], [$, z]),
        K = (0, u.Z)([...$.filter((t) => (null == t ? void 0 : t.application_id) != null).map((t) => t.application_id), ...z.map((t) => t.applicationId)]),
        Q = null == t ? void 0 : t.id,
        tt = (0, l.Wu)(
            [Z.Z, O.Z, j.Z, g.Z, S.Z, _.Z, h.Z],
            () => [
                ...$.map((t) =>
                    (0, L.Z)({
                        user: null != e ? e : W,
                        activity: t,
                        application: K.find((e) => (null == e ? void 0 : e.id) === t.application_id),
                        channelId: Q,
                        currentUser: W,
                        isEmbedded: (0, Y.Z)(t),
                        ChannelStore: Z.Z,
                        GuildStore: O.Z,
                        GuildMemberCountStore: j.Z,
                        RelationshipStore: g.Z,
                        SelectedChannelStore: S.Z,
                        VoiceStateStore: _.Z,
                        PermissionStore: h.Z
                    })
                ),
                ...z.map((t) => {
                    let i = null != e ? e : W;
                    return (
                        null != i &&
                        (0, U.ZP)({
                            userId: i.id,
                            application: K.find((e) => (null == e ? void 0 : e.id) === t.applicationId),
                            channelId: Q,
                            currentUser: W,
                            isActivitiesEnabledForCurrentPlatform: (0, G.a)(),
                            ChannelStore: Z.Z,
                            GuildStore: O.Z,
                            VoiceStateStore: _.Z,
                            PermissionStore: h.Z
                        }) === U.Fw.CAN_JOIN
                    );
                })
            ],
            [$, K, Q, W, z, e]
        ),
        te = (0, l.Wu)([s.Z, v.default], () => $.map((t) => (t.type === F.IIU.LISTENING && null != e ? (0, b.Z)(s.Z, v.default, e, t) : void 0)), [e, $]),
        ti = (0, r.O)();
    if (!H && (null == t ? void 0 : t.type) !== F.d4z.GUILD_VOICE) return null;
    let tn = (i, n) => {
            null != t
                ? o.Z.sendActivityInvite({
                      type: i,
                      channelId: t.id,
                      activity: n,
                      location: F.Sbl.CONTEXT_MENU
                  })
                : null != e &&
                  o.Z.sendActivityInviteUser({
                      type: i,
                      userId: e.id,
                      activity: n,
                      location: F.Sbl.CONTEXT_MENU
                  });
        },
        tl = (l, o) => {
            let d = Z.Z.getChannel(l),
                r = null == d ? void 0 : O.Z.getGuild(d.guild_id);
            if (null != d && null != r) {
                if (null != e)
                    return x.pu({
                        channelId: d.id,
                        applicationId: o,
                        userId: e.id,
                        location: F.t4x.CONTEXT_MENU
                    });
                if (null != t && t.type === F.d4z.GUILD_VOICE)
                    return (0, a.ZDy)(
                        async () => {
                            let { default: e } = await Promise.all([i.e('7654'), i.e('49049'), i.e('47888')]).then(i.bind(i, 560114));
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
                                            analyticsLocation: t.type === F.d4z.GUILD_VOICE ? F.ZY5.GUILD_CHANNEL : F.ZY5.DM_CHANNEL,
                                            source: F.t4x.ACTIVITY_INVITE
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
                    );
                if ((null == t ? void 0 : t.id) != null)
                    return x.sN({
                        activityChannelId: d.id,
                        invitedChannelId: t.id,
                        applicationId: o,
                        location: F.t4x.CONTEXT_MENU
                    });
            }
        },
        ta = async (t) => {
            let i = (0, D.Z)(t, F.xjy.EMBEDDED),
                n = S.Z.getVoiceChannelId(),
                l = Z.Z.getChannel(n);
            if (
                (await d.Z.join({
                    userId: e.id,
                    sessionId: t.session_id,
                    applicationId: t.application_id,
                    channelId: n,
                    messageId: null,
                    intent: V.Ws.PLAY,
                    embedded: i,
                    locationObject: ti.location,
                    analyticsLocations: M
                }),
                !i)
            ) {
                var a;
                (0, k.Z)({
                    type: F.q5t.JOIN,
                    userId: e.id,
                    guildId: null == l ? void 0 : l.guild_id,
                    channelId: n,
                    channelType: null == l ? void 0 : l.type,
                    applicationId: t.application_id,
                    partyId: null == (a = t.party) ? void 0 : a.id,
                    locationObject: ti.location,
                    analyticsLocations: M
                });
            }
        },
        to = async (e) => {
            await (0, A.Z)({
                applicationId: e.applicationId,
                activityChannelId: null == t ? void 0 : t.id,
                locationObject: ti.location,
                analyticsLocations: M
            });
        },
        td = [];
    return (
        null == X ||
            X.forEach((i) => {
                let l = (null == e ? void 0 : e.id) != null && i.userIds.has(null == e ? void 0 : e.id),
                    o = h.Z.can(F.Plq.CREATE_INSTANT_INVITE, t),
                    d = K.find((t) => (null == t ? void 0 : t.id) === i.applicationId);
                null != i.launchId &&
                    !l &&
                    o &&
                    null != d &&
                    td.push(
                        (0, n.jsx)(
                            a.sNh,
                            {
                                id: 'invite-to-join-embedded',
                                label: J.intl.string(J.t['3fRyS0']),
                                subtext: d.name,
                                action: () => {
                                    tl((0, w.pY)(i.location), i.applicationId);
                                }
                            },
                            'self-embedded-'.concat(i.applicationId)
                        )
                    );
            }),
        q.forEach((t, i) => {
            (null == e ? void 0 : e.id) !== v.default.getId() &&
                (t.type === F.IIU.PLAYING && (0, D.Z)(t, F.xjy.JOIN)
                    ? td.push(
                          (0, n.jsx)(
                              a.sNh,
                              {
                                  id: 'invite-to-join',
                                  label: J.intl.string(J.t['3fRyS0']),
                                  subtext: t.name,
                                  action: () => tn(F.mFx.JOIN, t)
                              },
                              'self'.concat(i)
                          )
                      )
                    : t.type === F.IIU.LISTENING &&
                      (0, D.Z)(t, F.xjy.SYNC) &&
                      td.push(
                          (0, n.jsx)(
                              a.sNh,
                              {
                                  id: 'invite-to-listen',
                                  label: J.intl.string(J.t['5vvGpa']),
                                  subtext: t.name,
                                  action: () => tn(F.mFx.LISTEN, t)
                              },
                              'self'.concat(i)
                          )
                      ));
        }),
        td.length > 0 && td.push((0, n.jsx)(a.Clw, {}, 'menu-separator')),
        $.forEach((i, l) => {
            let o = (0, D.Z)(i, F.xjy.EMBEDDED),
                d = (0, D.Z)(i, F.xjy.CONTEXTLESS);
            if (i.type === F.IIU.PLAYING && (0, D.Z)(i, F.xjy.JOIN) && (!o || d) && null != i.session_id && null != i.application_id)
                if (tt[l]) {
                    let t = B[l];
                    td.push(
                        (0, n.jsx)(
                            a.sNh,
                            {
                                id: 'join',
                                label: t ? J.intl.string(J.t.bf6Ci4) : J.intl.string(J.t.VJlc0d),
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
                                label: J.intl.string(J.t.OKsSCQ),
                                subtext: i.name,
                                action: () => tn(F.mFx.JOIN_REQUEST, i)
                            },
                            l
                        )
                    );
            else if (i.type === F.IIU.LISTENING && (0, D.Z)(i, F.xjy.SYNC) && null != te[l]) {
                let o = te[l],
                    { playDisabled: d, syncDisabled: r } = o;
                td.push(
                    (0, n.jsx)(
                        a.sNh,
                        {
                            id: 'spotify-play-'.concat(i.session_id),
                            action: () => (0, y.Z)(o, R.kG.USER_ACTIVITY_PLAY),
                            label: (0, p.Z)(o, R.kG.USER_ACTIVITY_PLAY),
                            subtext: d ? (0, I.Z)(o, R.kG.USER_ACTIVITY_PLAY, null != t ? C.ZP.getNickname(t.guild_id, t.id, e) : void 0) : void 0,
                            disabled: d
                        },
                        'spotify-play-'.concat(i.session_id)
                    ),
                    (0, n.jsx)(
                        a.sNh,
                        {
                            id: 'spotify-sync-'.concat(i.session_id),
                            action: () => (0, f.Z)(o, R.kG.USER_ACTIVITY_SYNC),
                            label: J.intl.string(J.t.gXYoq6),
                            subtext: r ? (0, I.Z)(o, R.kG.USER_ACTIVITY_SYNC, null != t ? C.ZP.getNickname(t.guild_id, t.id, e) : void 0) : void 0,
                            disabled: r
                        },
                        'spotify-sync-'.concat(i.session_id)
                    )
                );
            }
        }),
        z.forEach((t, e) => {
            var i;
            let l = t.userIds.has(null != (i = null == W ? void 0 : W.id) ? i : F.lds),
                o = e + $.length,
                d = B[o] || l,
                r = J.intl.string(J.t['4i2vj4']);
            l ? (r = J.intl.string(J.t['0OiwfH'])) : B[o] && (r = J.intl.string(J.t.bf6Ci4));
            let c = K.find((e) => (null == e ? void 0 : e.id) === t.applicationId);
            tt[o] &&
                null != c &&
                td.push(
                    (0, n.jsx)(
                        a.sNh,
                        {
                            id: 'embedded-activity-join-'.concat(t.applicationId),
                            label: r,
                            disabled: d,
                            hint: B[o] ? (0, n.jsx)(a.$jN, { type: a.$jN.Type.PULSING_ELLIPSIS }) : null,
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
