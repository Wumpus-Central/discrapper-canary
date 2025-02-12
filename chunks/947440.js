l.d(t, { Z: () => M }), l(47120), l(653041);
var n = l(200651);
l(192379);
var e = l(442837),
    d = l(481060),
    a = l(278323),
    o = l(224706),
    s = l(2052),
    c = l(906732),
    u = l(835473),
    p = l(768419),
    I = l(300020),
    r = l(456190),
    Z = l(239470),
    v = l(894344),
    N = l(203777),
    h = l(314897),
    y = l(592125),
    _ = l(650774),
    S = l(430824),
    b = l(496675),
    E = l(158776),
    f = l(699516),
    C = l(944486),
    j = l(885110),
    m = l(594174),
    x = l(979651),
    g = l(181106),
    T = l(5192),
    A = l(566620),
    G = l(317381),
    P = l(638880),
    L = l(782769),
    O = l(255621),
    U = l(16609),
    Y = l(527805),
    V = l(620662),
    k = l(841784),
    D = l(275920),
    F = l(701488),
    R = l(981631),
    J = l(616922),
    w = l(388032);
function M(i, t) {
    let { analyticsLocations: M } = (0, c.ZP)(),
        W = (0, e.e7)([m.default], () => m.default.getCurrentUser()),
        X = (0, e.e7)([G.ZP], () => G.ZP.getSelfEmbeddedActivities()),
        q = (0, e.Wu)([j.Z], () => j.Z.getActivities().filter((i) => null == i.application_id || !(null == X ? void 0 : X.has(i.application_id)))),
        $ = (0, e.Wu)([E.Z], () => (null != t ? E.Z.getActivities(t.id, null == i ? void 0 : i.getGuildId()) : []), [t, i]),
        z = (0, e.Wu)(
            [G.ZP],
            () => {
                let l = (null == i ? void 0 : i.id) != null ? G.ZP.getEmbeddedActivitiesForChannel(i.id) : G.i6;
                return null != t
                    ? l.filter((i) => {
                          let { userIds: l } = i;
                          return l.has(t.id);
                      })
                    : l;
            },
            [t, i]
        ),
        H = (0, e.e7)([b.Z], () => null == i || i.isPrivate() || b.Z.can(R.Plq.SEND_MESSAGES, i), [i]),
        K = (0, e.Wu)([g.Z], () => [...$.map((i) => null != i.application_id && g.Z.getState(i.application_id, R.mFx.JOIN) === R.OcF.LOADING), ...z.map((i) => g.Z.getState(i.applicationId, R.mFx.JOIN) === R.OcF.LOADING)], [$, z]),
        Q = (0, u.Z)([...$.filter((i) => (null == i ? void 0 : i.application_id) != null).map((i) => i.application_id), ...z.map((i) => i.applicationId)]),
        B = null == i ? void 0 : i.id,
        ii = (0, e.Wu)(
            [y.Z, S.Z, _.Z, f.Z, C.Z, x.Z, b.Z],
            () => [
                ...$.map((i) =>
                    (0, O.Z)({
                        user: null != t ? t : W,
                        activity: i,
                        application: Q.find((t) => (null == t ? void 0 : t.id) === i.application_id),
                        channelId: B,
                        currentUser: W,
                        isEmbedded: (0, k.Z)(i),
                        ChannelStore: y.Z,
                        GuildStore: S.Z,
                        GuildMemberCountStore: _.Z,
                        RelationshipStore: f.Z,
                        SelectedChannelStore: C.Z,
                        VoiceStateStore: x.Z,
                        PermissionStore: b.Z
                    })
                ),
                ...z.map((i) => {
                    let l = null != t ? t : W;
                    return (
                        null != l &&
                        (0, Y.ZP)({
                            userId: l.id,
                            application: Q.find((t) => (null == t ? void 0 : t.id) === i.applicationId),
                            channelId: B,
                            currentUser: W,
                            isActivitiesEnabledForCurrentPlatform: (0, L.a)(),
                            ChannelStore: y.Z,
                            GuildStore: S.Z,
                            VoiceStateStore: x.Z,
                            PermissionStore: b.Z
                        }) === Y.Fw.CAN_JOIN
                    );
                })
            ],
            [$, Q, B, W, z, t]
        ),
        it = (0, e.Wu)([p.Z, h.default], () => $.map((i) => (i.type === R.IIU.LISTENING && null != t ? (0, Z.Z)(p.Z, h.default, t, i) : void 0)), [t, $]),
        il = (0, s.O)();
    if (!H && (null == i ? void 0 : i.type) !== R.d4z.GUILD_VOICE) return null;
    let ie = (l, n) => {
            null != i
                ? a.Z.sendActivityInvite({
                      type: l,
                      channelId: i.id,
                      activity: n,
                      location: R.Sbl.CONTEXT_MENU
                  })
                : null != t &&
                  a.Z.sendActivityInviteUser({
                      type: l,
                      userId: t.id,
                      activity: n,
                      location: R.Sbl.CONTEXT_MENU
                  });
        },
        id = (e, a) => {
            let o = y.Z.getChannel(e),
                s = null == o ? void 0 : S.Z.getGuild(o.guild_id);
            return null == o || null == s
                ? void 0
                : null != t
                  ? A.pu({
                        channelId: o.id,
                        applicationId: a,
                        userId: t.id,
                        location: R.t4x.CONTEXT_MENU
                    })
                  : null != i && i.type === R.d4z.GUILD_VOICE
                    ? (0, d.ZDy)(
                          async () => {
                              let { default: t } = await Promise.all([l.e('7654'), l.e('60775')]).then(l.bind(l, 560114));
                              return (l) =>
                                  (0, n.jsx)(t, {
                                      ...l,
                                      guild: s,
                                      channel: o,
                                      applicationId: a,
                                      analyticsLocation: i.type === R.d4z.GUILD_VOICE ? R.ZY5.GUILD_CHANNEL : R.ZY5.DM_CHANNEL,
                                      source: R.t4x.ACTIVITY_INVITE
                                  });
                          },
                          { modalKey: 'use-activity-items-embedded-invite-modal' }
                      )
                    : (null == i ? void 0 : i.id) != null
                      ? A.sN({
                            activityChannelId: o.id,
                            invitedChannelId: i.id,
                            applicationId: a,
                            location: R.t4x.CONTEXT_MENU
                        })
                      : void 0;
        },
        ia = async (i) => {
            var l, n;
            let e = (0, V.Z)(i, R.xjy.EMBEDDED),
                d = C.Z.getVoiceChannelId(),
                a = y.Z.getChannel(d);
            await o.Z.join({
                userId: t.id,
                sessionId: i.session_id,
                applicationId: i.application_id,
                channelId: d,
                messageId: null,
                intent: F.Ws.PLAY,
                embedded: e,
                partyId: null === (l = i.party) || void 0 === l ? void 0 : l.id,
                locationObject: il.location,
                analyticsLocations: M
            }),
                e ||
                    (0, D.Z)({
                        type: R.q5t.JOIN,
                        userId: t.id,
                        guildId: null == a ? void 0 : a.guild_id,
                        channelId: d,
                        channelType: null == a ? void 0 : a.type,
                        applicationId: i.application_id,
                        partyId: null === (n = i.party) || void 0 === n ? void 0 : n.id,
                        locationObject: il.location,
                        analyticsLocations: M
                    });
        },
        io = async (t) => {
            await (0, P.Z)({
                applicationId: t.applicationId,
                activityChannelId: null == i ? void 0 : i.id,
                locationObject: il.location,
                analyticsLocations: M
            });
        },
        is = [];
    return (
        null == X ||
            X.forEach((l) => {
                let e = (null == t ? void 0 : t.id) != null && l.userIds.has(null == t ? void 0 : t.id),
                    a = b.Z.can(R.Plq.CREATE_INSTANT_INVITE, i),
                    o = Q.find((i) => (null == i ? void 0 : i.id) === l.applicationId);
                null != l.launchId &&
                    !e &&
                    a &&
                    null != o &&
                    is.push(
                        (0, n.jsx)(
                            d.sNh,
                            {
                                id: 'invite-to-join-embedded',
                                label: w.intl.string(w.t['3fRyS0']),
                                subtext: o.name,
                                action: () => {
                                    id((0, U.pY)(l.location), l.applicationId);
                                }
                            },
                            'self-embedded-'.concat(l.applicationId)
                        )
                    );
            }),
        q.forEach((i, t) => {
            i.type === R.IIU.PLAYING && (0, V.Z)(i, R.xjy.JOIN)
                ? is.push(
                      (0, n.jsx)(
                          d.sNh,
                          {
                              id: 'invite-to-join',
                              label: w.intl.string(w.t['3fRyS0']),
                              subtext: i.name,
                              action: () => ie(R.mFx.JOIN, i)
                          },
                          'self'.concat(t)
                      )
                  )
                : i.type === R.IIU.LISTENING &&
                  (0, V.Z)(i, R.xjy.SYNC) &&
                  is.push(
                      (0, n.jsx)(
                          d.sNh,
                          {
                              id: 'invite-to-listen',
                              label: w.intl.string(w.t['5vvGpa']),
                              subtext: i.name,
                              action: () => ie(R.mFx.LISTEN, i)
                          },
                          'self'.concat(t)
                      )
                  );
        }),
        is.length > 0 && is.push((0, n.jsx)(d.Clw, {})),
        $.forEach((l, e) => {
            if (l.type === R.IIU.PLAYING && (0, V.Z)(l, R.xjy.JOIN) && null != l.session_id && null != l.application_id) {
                if (ii[e]) {
                    let i = K[e];
                    is.push(
                        (0, n.jsx)(
                            d.sNh,
                            {
                                id: 'join',
                                label: i ? w.intl.string(w.t.bf6Ci4) : w.intl.string(w.t.VJlc0d),
                                disabled: i,
                                hint: i ? (0, n.jsx)(d.$jN, { type: d.$jN.Type.PULSING_ELLIPSIS }) : null,
                                subtext: l.name,
                                action: () => ia(l)
                            },
                            e
                        )
                    );
                } else
                    is.push(
                        (0, n.jsx)(
                            d.sNh,
                            {
                                id: 'ask-to-join',
                                label: w.intl.string(w.t.OKsSCQ),
                                subtext: l.name,
                                action: () => ie(R.mFx.JOIN_REQUEST, l)
                            },
                            e
                        )
                    );
            } else if (l.type === R.IIU.LISTENING && (0, V.Z)(l, R.xjy.SYNC) && null != it[e]) {
                let a = it[e],
                    { playDisabled: o, syncDisabled: s } = a;
                is.push(
                    (0, n.jsx)(
                        d.sNh,
                        {
                            id: 'spotify-play-'.concat(l.session_id),
                            action: () => (0, N.Z)(a, J.kG.USER_ACTIVITY_PLAY),
                            label: (0, I.Z)(a, J.kG.USER_ACTIVITY_PLAY),
                            subtext: o ? (0, r.Z)(a, J.kG.USER_ACTIVITY_PLAY, null != i ? T.ZP.getNickname(i.guild_id, i.id, t) : void 0) : void 0,
                            disabled: o
                        },
                        'spotify-play-'.concat(l.session_id)
                    ),
                    (0, n.jsx)(
                        d.sNh,
                        {
                            id: 'spotify-sync-'.concat(l.session_id),
                            action: () => (0, v.Z)(a, J.kG.USER_ACTIVITY_SYNC),
                            label: w.intl.string(w.t.gXYoq6),
                            subtext: s ? (0, r.Z)(a, J.kG.USER_ACTIVITY_SYNC, null != i ? T.ZP.getNickname(i.guild_id, i.id, t) : void 0) : void 0,
                            disabled: s
                        },
                        'spotify-sync-'.concat(l.session_id)
                    )
                );
            }
        }),
        z.forEach((i, t) => {
            var l;
            let e = i.userIds.has(null !== (l = null == W ? void 0 : W.id) && void 0 !== l ? l : R.lds),
                a = t + $.length,
                o = K[a] || e,
                s = w.intl.string(w.t['4i2vj4']);
            e ? (s = w.intl.string(w.t['0OiwfH'])) : K[a] && (s = w.intl.string(w.t.bf6Ci4));
            let c = Q.find((t) => (null == t ? void 0 : t.id) === i.applicationId);
            ii[a] &&
                null != c &&
                is.push(
                    (0, n.jsx)(
                        d.sNh,
                        {
                            id: 'embedded-activity-join-'.concat(i.applicationId),
                            label: s,
                            disabled: o,
                            hint: K[a] ? (0, n.jsx)(d.$jN, { type: d.$jN.Type.PULSING_ELLIPSIS }) : null,
                            subtext: c.name,
                            action: () => io(i)
                        },
                        'embedded-activity-'.concat(i.applicationId)
                    )
                );
        }),
        is
    );
}
