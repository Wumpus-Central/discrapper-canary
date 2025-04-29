i.d(e, { Z: () => W }), i(388685), i(539854);
var n = i(255367);
i(73800);
var l = i(252258),
    a = i(442837),
    o = i(481060),
    d = i(278323),
    r = i(224706),
    c = i(2052),
    u = i(906732),
    s = i(835473),
    p = i(768419),
    I = i(300020),
    b = i(456190),
    y = i(239470),
    f = i(894344),
    v = i(203777),
    Z = i(314897),
    j = i(592125),
    O = i(650774),
    h = i(430824),
    N = i(496675),
    S = i(158776),
    g = i(699516),
    E = i(944486),
    m = i(885110),
    _ = i(594174),
    P = i(979651),
    C = i(181106),
    x = i(5192),
    T = i(566620),
    A = i(317381),
    L = i(638880),
    G = i(782769),
    w = i(255621),
    U = i(16609),
    D = i(527805),
    Y = i(620662),
    k = i(841784),
    V = i(275920),
    F = i(701488),
    R = i(981631),
    J = i(616922),
    M = i(388032);
function W(t, e) {
    let { analyticsLocations: W } = (0, u.ZP)(),
        X = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        q = (0, a.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivities()),
        $ = (0, a.Wu)([m.Z], () => m.Z.getActivities().filter((t) => null == t.application_id || !(null == q ? void 0 : q.has(t.application_id)))),
        z = (0, a.Wu)([S.Z], () => (null != e ? S.Z.getActivities(e.id, null == t ? void 0 : t.getGuildId()) : []), [e, t]),
        H = (0, a.Wu)(
            [A.ZP],
            () => {
                let i = (null == t ? void 0 : t.id) != null ? A.ZP.getEmbeddedActivitiesForChannel(t.id) : A.i6;
                return null != e
                    ? i.filter((t) => {
                          let { userIds: i } = t;
                          return i.has(e.id);
                      })
                    : i;
            },
            [e, t]
        ),
        B = (0, a.e7)([N.Z], () => null == t || t.isPrivate() || N.Z.can(R.Plq.SEND_MESSAGES, t), [t]),
        K = (0, a.Wu)([C.Z], () => [...z.map((t) => null != t.application_id && C.Z.getState(t.application_id, R.mFx.JOIN) === R.OcF.LOADING), ...H.map((t) => C.Z.getState(t.applicationId, R.mFx.JOIN) === R.OcF.LOADING)], [z, H]),
        Q = (0, s.Z)([...z.filter((t) => (null == t ? void 0 : t.application_id) != null).map((t) => t.application_id), ...H.map((t) => t.applicationId)]),
        tt = null == t ? void 0 : t.id,
        te = (0, a.Wu)(
            [j.Z, h.Z, O.Z, g.Z, E.Z, P.Z, N.Z],
            () => [
                ...z.map((t) =>
                    (0, w.Z)({
                        user: null != e ? e : X,
                        activity: t,
                        application: Q.find((e) => (null == e ? void 0 : e.id) === t.application_id),
                        channelId: tt,
                        currentUser: X,
                        isEmbedded: (0, k.Z)(t),
                        ChannelStore: j.Z,
                        GuildStore: h.Z,
                        GuildMemberCountStore: O.Z,
                        RelationshipStore: g.Z,
                        SelectedChannelStore: E.Z,
                        VoiceStateStore: P.Z,
                        PermissionStore: N.Z
                    })
                ),
                ...H.map((t) => {
                    let i = null != e ? e : X;
                    return (
                        null != i &&
                        (0, D.ZP)({
                            userId: i.id,
                            application: Q.find((e) => (null == e ? void 0 : e.id) === t.applicationId),
                            channelId: tt,
                            currentUser: X,
                            isActivitiesEnabledForCurrentPlatform: (0, G.a)(),
                            ChannelStore: j.Z,
                            GuildStore: h.Z,
                            VoiceStateStore: P.Z,
                            PermissionStore: N.Z
                        }) === D.Fw.CAN_JOIN
                    );
                })
            ],
            [z, Q, tt, X, H, e]
        ),
        ti = (0, a.Wu)([p.Z, Z.default], () => z.map((t) => (t.type === R.IIU.LISTENING && null != e ? (0, y.Z)(p.Z, Z.default, e, t) : void 0)), [e, z]),
        tn = (0, c.O)();
    if (!B && (null == t ? void 0 : t.type) !== R.d4z.GUILD_VOICE) return null;
    let tl = (i, n) => {
            null != t
                ? d.Z.sendActivityInvite({
                      type: i,
                      channelId: t.id,
                      activity: n,
                      location: R.Sbl.CONTEXT_MENU
                  })
                : null != e &&
                  d.Z.sendActivityInviteUser({
                      type: i,
                      userId: e.id,
                      activity: n,
                      location: R.Sbl.CONTEXT_MENU
                  });
        },
        ta = (l, a) => {
            let d = j.Z.getChannel(l),
                r = null == d ? void 0 : h.Z.getGuild(d.guild_id);
            if (null != d && null != r) {
                if (null != e)
                    return T.pu({
                        channelId: d.id,
                        applicationId: a,
                        userId: e.id,
                        location: R.t4x.CONTEXT_MENU
                    });
                if (null != t && t.type === R.d4z.GUILD_VOICE)
                    return (0, o.ZDy)(
                        async () => {
                            let { default: e } = await Promise.all([i.e('7654'), i.e('49049'), i.e('47888')]).then(i.bind(i, 560114));
                            return (i) => {
                                var l, o;
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
                                    (o = o =
                                        {
                                            guild: r,
                                            channel: d,
                                            applicationId: a,
                                            analyticsLocation: t.type === R.d4z.GUILD_VOICE ? R.ZY5.GUILD_CHANNEL : R.ZY5.DM_CHANNEL,
                                            source: R.t4x.ACTIVITY_INVITE
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                        : (function (t, e) {
                                              var i = Object.keys(t);
                                              if (Object.getOwnPropertySymbols) {
                                                  var n = Object.getOwnPropertySymbols(t);
                                                  i.push.apply(i, n);
                                              }
                                              return i;
                                          })(Object(o)).forEach(function (t) {
                                              Object.defineProperty(l, t, Object.getOwnPropertyDescriptor(o, t));
                                          }),
                                    l)
                                );
                            };
                        },
                        { modalKey: 'use-activity-items-embedded-invite-modal' }
                    );
                if ((null == t ? void 0 : t.id) != null)
                    return T.sN({
                        activityChannelId: d.id,
                        invitedChannelId: t.id,
                        applicationId: a,
                        location: R.t4x.CONTEXT_MENU
                    });
            }
        },
        to = async (t) => {
            var i, n;
            let l = (0, Y.Z)(t, R.xjy.EMBEDDED),
                a = E.Z.getVoiceChannelId(),
                o = j.Z.getChannel(a);
            await r.Z.join({
                userId: e.id,
                sessionId: t.session_id,
                applicationId: t.application_id,
                channelId: a,
                messageId: null,
                intent: F.Ws.PLAY,
                embedded: l,
                partyId: null == (i = t.party) ? void 0 : i.id,
                locationObject: tn.location,
                analyticsLocations: W,
                activity: t
            }),
                l ||
                    (0, V.Z)({
                        type: R.q5t.JOIN,
                        userId: e.id,
                        guildId: null == o ? void 0 : o.guild_id,
                        channelId: a,
                        channelType: null == o ? void 0 : o.type,
                        applicationId: t.application_id,
                        partyId: null == (n = t.party) ? void 0 : n.id,
                        locationObject: tn.location,
                        analyticsLocations: W
                    });
        },
        td = async (e) => {
            await (0, L.Z)({
                applicationId: e.applicationId,
                activityChannelId: null == t ? void 0 : t.id,
                locationObject: tn.location,
                analyticsLocations: W,
                instanceId: e.compositeInstanceId,
                isContextlessActivity: e.location.kind === l.E.CONTEXTLESS
            });
        },
        tr = [];
    return (
        null == q ||
            q.forEach((i) => {
                let l = (null == e ? void 0 : e.id) != null && i.userIds.has(null == e ? void 0 : e.id),
                    a = N.Z.can(R.Plq.CREATE_INSTANT_INVITE, t),
                    d = Q.find((t) => (null == t ? void 0 : t.id) === i.applicationId);
                null != i.launchId &&
                    !l &&
                    a &&
                    null != d &&
                    tr.push(
                        (0, n.jsx)(
                            o.sNh,
                            {
                                id: 'invite-to-join-embedded',
                                label: M.intl.string(M.t['3fRyS0']),
                                subtext: d.name,
                                action: () => {
                                    ta((0, U.pY)(i.location), i.applicationId);
                                }
                            },
                            'self-embedded-'.concat(i.applicationId)
                        )
                    );
            }),
        $.forEach((t, i) => {
            (null == e ? void 0 : e.id) !== Z.default.getId() &&
                (t.type === R.IIU.PLAYING && (0, Y.Z)(t, R.xjy.JOIN)
                    ? tr.push(
                          (0, n.jsx)(
                              o.sNh,
                              {
                                  id: 'invite-to-join',
                                  label: M.intl.string(M.t['3fRyS0']),
                                  subtext: t.name,
                                  action: () => tl(R.mFx.JOIN, t)
                              },
                              'self'.concat(i)
                          )
                      )
                    : t.type === R.IIU.LISTENING &&
                      (0, Y.Z)(t, R.xjy.SYNC) &&
                      tr.push(
                          (0, n.jsx)(
                              o.sNh,
                              {
                                  id: 'invite-to-listen',
                                  label: M.intl.string(M.t['5vvGpa']),
                                  subtext: t.name,
                                  action: () => tl(R.mFx.LISTEN, t)
                              },
                              'self'.concat(i)
                          )
                      ));
        }),
        tr.length > 0 && tr.push((0, n.jsx)(o.Clw, {})),
        z.forEach((i, l) => {
            let a = (0, Y.Z)(i, R.xjy.EMBEDDED),
                d = (0, Y.Z)(i, R.xjy.CONTEXTLESS);
            if (i.type === R.IIU.PLAYING && (0, Y.Z)(i, R.xjy.JOIN) && (!a || d) && null != i.session_id && null != i.application_id)
                if (te[l]) {
                    let t = K[l];
                    tr.push(
                        (0, n.jsx)(
                            o.sNh,
                            {
                                id: 'join',
                                label: t ? M.intl.string(M.t.bf6Ci4) : M.intl.string(M.t.VJlc0d),
                                disabled: t,
                                hint: t ? (0, n.jsx)(o.$jN, { type: o.$jN.Type.PULSING_ELLIPSIS }) : null,
                                subtext: i.name,
                                action: () => to(i)
                            },
                            l
                        )
                    );
                } else
                    tr.push(
                        (0, n.jsx)(
                            o.sNh,
                            {
                                id: 'ask-to-join',
                                label: M.intl.string(M.t.OKsSCQ),
                                subtext: i.name,
                                action: () => tl(R.mFx.JOIN_REQUEST, i)
                            },
                            l
                        )
                    );
            else if (i.type === R.IIU.LISTENING && (0, Y.Z)(i, R.xjy.SYNC) && null != ti[l]) {
                let a = ti[l],
                    { playDisabled: d, syncDisabled: r } = a;
                tr.push(
                    (0, n.jsx)(
                        o.sNh,
                        {
                            id: 'spotify-play-'.concat(i.session_id),
                            action: () => (0, v.Z)(a, J.kG.USER_ACTIVITY_PLAY),
                            label: (0, I.Z)(a, J.kG.USER_ACTIVITY_PLAY),
                            subtext: d ? (0, b.Z)(a, J.kG.USER_ACTIVITY_PLAY, null != t ? x.ZP.getNickname(t.guild_id, t.id, e) : void 0) : void 0,
                            disabled: d
                        },
                        'spotify-play-'.concat(i.session_id)
                    ),
                    (0, n.jsx)(
                        o.sNh,
                        {
                            id: 'spotify-sync-'.concat(i.session_id),
                            action: () => (0, f.Z)(a, J.kG.USER_ACTIVITY_SYNC),
                            label: M.intl.string(M.t.gXYoq6),
                            subtext: r ? (0, b.Z)(a, J.kG.USER_ACTIVITY_SYNC, null != t ? x.ZP.getNickname(t.guild_id, t.id, e) : void 0) : void 0,
                            disabled: r
                        },
                        'spotify-sync-'.concat(i.session_id)
                    )
                );
            }
        }),
        H.forEach((t, e) => {
            var i;
            let l = t.userIds.has(null != (i = null == X ? void 0 : X.id) ? i : R.lds),
                a = e + z.length,
                d = K[a] || l,
                r = M.intl.string(M.t['4i2vj4']);
            l ? (r = M.intl.string(M.t['0OiwfH'])) : K[a] && (r = M.intl.string(M.t.bf6Ci4));
            let c = Q.find((e) => (null == e ? void 0 : e.id) === t.applicationId);
            te[a] &&
                null != c &&
                tr.push(
                    (0, n.jsx)(
                        o.sNh,
                        {
                            id: 'embedded-activity-join-'.concat(t.applicationId),
                            label: r,
                            disabled: d,
                            hint: K[a] ? (0, n.jsx)(o.$jN, { type: o.$jN.Type.PULSING_ELLIPSIS }) : null,
                            subtext: c.name,
                            action: () => td(t)
                        },
                        'embedded-activity-'.concat(t.applicationId)
                    )
                );
        }),
        tr
    );
}
