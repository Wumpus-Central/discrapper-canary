t.d(n, { Z: () => P }), t(47120), t(789020);
var i = t(200651),
    l = t(192379),
    r = t(442837),
    a = t(481060),
    u = t(91176),
    d = t(749210),
    o = t(616780),
    s = t(251794),
    c = t(386696),
    E = t(71619),
    _ = t(946273),
    g = t(910693),
    f = t(592125),
    v = t(271383),
    Z = t(430824),
    h = t(496675),
    A = t(594174),
    S = t(979651),
    T = t(630388),
    M = t(5192),
    m = t(813872),
    I = t(981631),
    C = t(590433),
    b = t(372897),
    N = t(388032);
function P(e, n, P, D, U) {
    let x = l.useMemo(() => ({ [n]: [e.id] }), [n, e.id]),
        y = null != D ? [D] : [];
    (0, o.$)(x), (0, r.e7)([h.Z], () => h.Z.getGuildVersion(n), [n]);
    let O = (0, r.e7)([Z.Z], () => Z.Z.getGuild(n), [n]),
        j = (0, r.e7)(
            [A.default],
            () => {
                var n;
                return (null === (n = A.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id;
            },
            [e.id]
        ),
        p = (0, r.e7)([v.ZP], () => v.ZP.isGuestOrLurker(n, e.id), [n, e.id]),
        R = (0, r.e7)([f.Z], () => f.Z.getChannel(P), [P]),
        [, k] = (0, E.ZP)(e.id, n),
        B = null == R ? void 0 : R.isGuildStageVoice(),
        {
            muted: L,
            deafened: V,
            suppressed: w,
            voiceChannelId: G
        } = (0, r.cj)([S.Z], () => {
            var t, i, l;
            let r = S.Z.getVoiceState(n, e.id);
            return {
                muted: null !== (t = null == r ? void 0 : r.mute) && void 0 !== t && t,
                deafened: null !== (i = null == r ? void 0 : r.deaf) && void 0 !== i && i,
                suppressed: null !== (l = null == r ? void 0 : r.suppress) && void 0 !== l && l,
                voiceChannelId: null == r ? void 0 : r.channelId
            };
        }),
        q = (0, r.e7)([v.ZP], () => v.ZP.getMember(n, e.id)),
        W = (0, m.Z)({
            userId: e.id,
            guildId: n,
            channelId: P,
            location: D,
            appContext: U
        }),
        F = (0, g.sE)(n, {
            location: D,
            targetUserId: e.id
        }),
        K = (0, c.Z)(n, e.id),
        H =
            null != G && null != P && h.Z.canWithPartialContext(I.Plq.VIEW_CHANNEL, { channelId: G }) && !p
                ? [
                      (!B || (B && !w)) && h.Z.canWithPartialContext(I.Plq.MUTE_MEMBERS, { channelId: P })
                          ? (0, i.jsx)(
                                a.S89,
                                {
                                    id: 'voice-mute',
                                    label: N.intl.string(N.t.e9e9UV),
                                    checked: L,
                                    color: 'danger',
                                    action: () => {
                                        !1 === L && F(g.jQ.MUTE), d.Z.setServerMute(n, e.id, !L);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!B || (B && !w)) && h.Z.canWithPartialContext(I.Plq.DEAFEN_MEMBERS, { channelId: P })
                          ? (0, i.jsx)(
                                a.S89,
                                {
                                    id: 'voice-deafen',
                                    label: N.intl.string(N.t.hMA2GB),
                                    checked: V,
                                    color: 'danger',
                                    action: () => d.Z.setServerDeaf(n, e.id, !V)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !j && null != O && h.Z.canWithPartialContext(I.Plq.MOVE_MEMBERS, { channelId: P })
                          ? (0, i.jsx)(
                                a.sNh,
                                {
                                    id: 'voice-disconnect',
                                    label: j ? N.intl.string(N.t['6vrfgo']) : N.intl.string(N.t['/jERiI']),
                                    color: 'danger',
                                    action: () => d.Z.setChannel(n, e.id, null)
                                },
                                'voice-disconnect'
                            )
                          : null
                  ]
                : [],
        Q = async (n, t, i) => {
            if (n.ctrlKey || n.metaKey)
                try {
                    var l;
                    await u.Z.setCommunicationDisabledDuration(t, i, C.UK.DURATION_60_SEC, null, D), F(g.jQ.TIMEOUT), (0, a.showToast)((0, a.createToast)(N.intl.formatToPlainString(N.t.O9C3Nj, { user: null !== (l = M.ZP.getName(t, null, e)) && void 0 !== l ? l : '' }), a.ToastType.SUCCESS));
                } catch (e) {
                    (0, a.showToast)((0, a.createToast)(N.intl.string(N.t.epyCur), a.ToastType.FAILURE));
                }
        },
        Y = null,
        z = null != O && h.Z.canManageUser(I.Plq.MODERATE_MEMBERS, e, O) && h.Z.canManageUser(I.Plq.KICK_MEMBERS, e, O) && h.Z.canManageUser(I.Plq.BAN_MEMBERS, e, O),
        J = null != O && (h.Z.canManageUser(I.Plq.MANAGE_GUILD, e, O) || h.Z.canManageUser(I.Plq.MANAGE_ROLES, e, O));
    if (!j && null != O && null != q && null != q.joinedAt && (z || J) && O.hasFeature(I.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var X;
        Y = (0, T.yE)(null !== (X = q.flags) && void 0 !== X ? X : 0, b.q.BYPASSES_VERIFICATION)
            ? (0, i.jsx)(
                  a.sNh,
                  {
                      id: 'verify',
                      label: N.intl.string(N.t.NbhSIy),
                      action: () => {
                          var n;
                          return d.Z.setMemberFlags(O.id, e.id, (0, T.mB)(null !== (n = q.flags) && void 0 !== n ? n : 0, b.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, i.jsx)(
                  a.sNh,
                  {
                      id: 'verify',
                      label: N.intl.string(N.t['6QlTeH']),
                      action: () => {
                          var n;
                          return d.Z.setMemberFlags(O.id, e.id, (0, T.mB)(null !== (n = q.flags) && void 0 !== n ? n : 0, b.q.BYPASSES_VERIFICATION, !0));
                      }
                  },
                  'verify'
              );
    }
    return [
        ...H,
        ...(j || null == O
            ? []
            : [
                  W,
                  Y,
                  K && !p
                      ? k
                          ? (0, i.jsx)(
                                a.sNh,
                                {
                                    id: 'removetimeout',
                                    label: N.intl.formatToPlainString(N.t.csKetb, { user: e.username }),
                                    color: 'danger',
                                    action: () => {
                                        (0, s.q)({
                                            guildId: n,
                                            userId: e.id,
                                            anaylticsLocations: y
                                        });
                                    }
                                },
                                'removetimeout'
                            )
                          : (0, i.jsx)(
                                a.sNh,
                                {
                                    id: 'timeout',
                                    label: N.intl.formatToPlainString(N.t.OhsOy8, { user: e.username }),
                                    color: 'danger',
                                    action: (t) => {
                                        if (t.ctrlKey || t.metaKey) return Q(t, n, e.id);
                                        (0, s.z)({
                                            guildId: n,
                                            userId: e.id,
                                            anaylticsLocations: y
                                        });
                                    }
                                },
                                'timeout'
                            )
                      : null,
                  (0, _.BK)(e, O)
                      ? (0, i.jsx)(
                            a.sNh,
                            {
                                id: 'kick',
                                label: N.intl.formatToPlainString(N.t['9l/iTU'], { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, a.ZDy)(async () => {
                                        let { default: l } = await t.e('5454').then(t.bind(t, 854360));
                                        return (t) =>
                                            (0, i.jsx)(l, {
                                                ...t,
                                                location: D,
                                                guildId: n,
                                                user: e
                                            });
                                    })
                            },
                            'kick'
                        )
                      : null,
                  (0, _.mm)(e, O)
                      ? (0, i.jsx)(
                            a.sNh,
                            {
                                id: 'ban',
                                label: N.intl.formatToPlainString(N.t.WnpUBg, { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, a.ZDy)(async () => {
                                        let { default: l } = await t.e('43350').then(t.bind(t, 98746));
                                        return (t) =>
                                            (0, i.jsx)(l, {
                                                ...t,
                                                location: D,
                                                guildId: n,
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
