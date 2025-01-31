n.d(l, { Z: () => T }), n(47120), n(789020);
var t = n(200651),
    i = n(192379),
    a = n(442837),
    r = n(481060),
    d = n(91176),
    o = n(749210),
    s = n(616780),
    u = n(251794),
    c = n(386696),
    Z = n(71619),
    g = n(946273),
    E = n(910693),
    h = n(592125),
    m = n(271383),
    v = n(430824),
    f = n(496675),
    P = n(594174),
    M = n(979651),
    C = n(630388),
    S = n(5192),
    N = n(813872),
    O = n(981631),
    b = n(590433),
    I = n(372897),
    R = n(388032);
function T(e, l, T, j) {
    let p = i.useMemo(() => ({ [l]: [e.id] }), [l, e.id]),
        x = null != j ? [j] : [];
    (0, s.$)(p), (0, a.e7)([f.Z], () => f.Z.getGuildVersion(l), [l]);
    let _ = (0, a.e7)([v.Z], () => v.Z.getGuild(l), [l]),
        A = (0, a.e7)(
            [P.default],
            () => {
                var l;
                return (null === (l = P.default.getCurrentUser()) || void 0 === l ? void 0 : l.id) === e.id;
            },
            [e.id]
        ),
        U = (0, a.e7)([m.ZP], () => m.ZP.isGuestOrLurker(l, e.id), [l, e.id]),
        y = (0, a.e7)([h.Z], () => h.Z.getChannel(T), [T]),
        [, q] = (0, Z.ZP)(e.id, l),
        B = null == y ? void 0 : y.isGuildStageVoice(),
        {
            muted: k,
            deafened: D,
            suppressed: L,
            voiceChannelId: V
        } = (0, a.cj)([M.Z], () => {
            var n, t, i;
            let a = M.Z.getVoiceState(l, e.id);
            return {
                muted: null !== (n = null == a ? void 0 : a.mute) && void 0 !== n && n,
                deafened: null !== (t = null == a ? void 0 : a.deaf) && void 0 !== t && t,
                suppressed: null !== (i = null == a ? void 0 : a.suppress) && void 0 !== i && i,
                voiceChannelId: null == a ? void 0 : a.channelId
            };
        }),
        G = (0, a.e7)([m.ZP], () => m.ZP.getMember(l, e.id)),
        F = (0, N.Z)({
            userId: e.id,
            guildId: l,
            channelId: T,
            location: j
        }),
        w = (0, E.sE)(l, {
            location: j,
            targetUserId: e.id
        }),
        K = (0, c.Z)(l, e.id),
        Y =
            null != V && null != T && f.Z.canWithPartialContext(O.Plq.VIEW_CHANNEL, { channelId: V }) && !U
                ? [
                      (!B || (B && !L)) && f.Z.canWithPartialContext(O.Plq.MUTE_MEMBERS, { channelId: T })
                          ? (0, t.jsx)(
                                r.S89,
                                {
                                    id: 'voice-mute',
                                    label: R.intl.string(R.t.e9e9UV),
                                    checked: k,
                                    color: 'danger',
                                    action: () => {
                                        !1 === k && w(E.jQ.MUTE), o.Z.setServerMute(l, e.id, !k);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!B || (B && !L)) && f.Z.canWithPartialContext(O.Plq.DEAFEN_MEMBERS, { channelId: T })
                          ? (0, t.jsx)(
                                r.S89,
                                {
                                    id: 'voice-deafen',
                                    label: R.intl.string(R.t.hMA2GB),
                                    checked: D,
                                    color: 'danger',
                                    action: () => o.Z.setServerDeaf(l, e.id, !D)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !A && null != _ && f.Z.canWithPartialContext(O.Plq.MOVE_MEMBERS, { channelId: T })
                          ? (0, t.jsx)(
                                r.sNh,
                                {
                                    id: 'voice-disconnect',
                                    label: A ? R.intl.string(R.t['6vrfgo']) : R.intl.string(R.t['/jERiI']),
                                    color: 'danger',
                                    action: () => o.Z.setChannel(l, e.id, null)
                                },
                                'voice-disconnect'
                            )
                          : null
                  ]
                : [],
        Q = async (l, n, t) => {
            if (l.ctrlKey || l.metaKey)
                try {
                    var i;
                    await d.Z.setCommunicationDisabledDuration(n, t, b.UK.DURATION_60_SEC, null, j), w(E.jQ.TIMEOUT), (0, r.showToast)((0, r.createToast)(R.intl.formatToPlainString(R.t.O9C3Nj, { user: null !== (i = S.ZP.getName(n, null, e)) && void 0 !== i ? i : '' }), r.ToastType.SUCCESS));
                } catch (e) {
                    (0, r.showToast)((0, r.createToast)(R.intl.string(R.t.epyCur), r.ToastType.FAILURE));
                }
        },
        W = null,
        H = null != _ && f.Z.canManageUser(O.Plq.MODERATE_MEMBERS, e, _) && f.Z.canManageUser(O.Plq.KICK_MEMBERS, e, _) && f.Z.canManageUser(O.Plq.BAN_MEMBERS, e, _),
        z = null != _ && (f.Z.canManageUser(O.Plq.MANAGE_GUILD, e, _) || f.Z.canManageUser(O.Plq.MANAGE_ROLES, e, _));
    if (!A && null != _ && null != G && null != G.joinedAt && (H || z) && _.hasFeature(O.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var J;
        W = (0, C.yE)(null !== (J = G.flags) && void 0 !== J ? J : 0, I.q.BYPASSES_VERIFICATION)
            ? (0, t.jsx)(
                  r.sNh,
                  {
                      id: 'verify',
                      label: R.intl.string(R.t.NbhSIy),
                      action: () => {
                          var l;
                          return o.Z.setMemberFlags(_.id, e.id, (0, C.mB)(null !== (l = G.flags) && void 0 !== l ? l : 0, I.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, t.jsx)(
                  r.sNh,
                  {
                      id: 'verify',
                      label: R.intl.string(R.t['6QlTeH']),
                      action: () => {
                          var l;
                          return o.Z.setMemberFlags(_.id, e.id, (0, C.mB)(null !== (l = G.flags) && void 0 !== l ? l : 0, I.q.BYPASSES_VERIFICATION, !0));
                      }
                  },
                  'verify'
              );
    }
    return [
        ...Y,
        ...(A || null == _
            ? []
            : [
                  F,
                  W,
                  K && !U
                      ? q
                          ? (0, t.jsx)(
                                r.sNh,
                                {
                                    id: 'removetimeout',
                                    label: R.intl.formatToPlainString(R.t.csKetb, { user: e.username }),
                                    color: 'danger',
                                    action: () => {
                                        (0, u.q)({
                                            guildId: l,
                                            userId: e.id,
                                            anaylticsLocations: x
                                        });
                                    }
                                },
                                'removetimeout'
                            )
                          : (0, t.jsx)(
                                r.sNh,
                                {
                                    id: 'timeout',
                                    label: R.intl.formatToPlainString(R.t.OhsOy8, { user: e.username }),
                                    color: 'danger',
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return Q(n, l, e.id);
                                        (0, u.z)({
                                            guildId: l,
                                            userId: e.id,
                                            anaylticsLocations: x
                                        });
                                    }
                                },
                                'timeout'
                            )
                      : null,
                  (0, g.BK)(e, _)
                      ? (0, t.jsx)(
                            r.sNh,
                            {
                                id: 'kick',
                                label: R.intl.formatToPlainString(R.t['9l/iTU'], { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, r.ZDy)(async () => {
                                        let { default: i } = await n.e('5454').then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, t.jsx)(i, {
                                                ...n,
                                                location: j,
                                                guildId: l,
                                                user: e
                                            });
                                    })
                            },
                            'kick'
                        )
                      : null,
                  (0, g.mm)(e, _)
                      ? (0, t.jsx)(
                            r.sNh,
                            {
                                id: 'ban',
                                label: R.intl.formatToPlainString(R.t.WnpUBg, { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, r.ZDy)(async () => {
                                        let { default: i } = await n.e('43350').then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, t.jsx)(i, {
                                                ...n,
                                                location: j,
                                                guildId: l,
                                                user: e
                                            });
                                    })
                            },
                            'ban'
                        )
                      : null
              ])
    ];
}
