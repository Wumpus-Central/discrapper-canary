t.d(n, { Z: () => x }), t(47120), t(789020);
var i = t(200651),
    l = t(192379),
    a = t(442837),
    r = t(481060),
    d = t(91176),
    u = t(749210),
    o = t(616780),
    s = t(251794),
    c = t(386696),
    _ = t(71619),
    E = t(946273),
    g = t(910693),
    f = t(592125),
    h = t(271383),
    v = t(430824),
    Z = t(496675),
    A = t(594174),
    S = t(979651),
    T = t(630388),
    I = t(5192),
    M = t(813872),
    m = t(981631),
    C = t(590433),
    N = t(372897),
    b = t(388032);
function x(e, n, x, P) {
    let y = l.useMemo(() => ({ [n]: [e.id] }), [n, e.id]),
        D = null != P ? [P] : [];
    (0, o.$)(y), (0, a.e7)([Z.Z], () => Z.Z.getGuildVersion(n), [n]);
    let O = (0, a.e7)([v.Z], () => v.Z.getGuild(n), [n]),
        j = (0, a.e7)(
            [A.default],
            () => {
                var n;
                return (null === (n = A.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id;
            },
            [e.id]
        ),
        U = (0, a.e7)([h.ZP], () => h.ZP.isGuestOrLurker(n, e.id), [n, e.id]),
        p = (0, a.e7)([f.Z], () => f.Z.getChannel(x), [x]),
        [, R] = (0, _.ZP)(e.id, n),
        k = null == p ? void 0 : p.isGuildStageVoice(),
        {
            muted: L,
            deafened: V,
            suppressed: B,
            voiceChannelId: G
        } = (0, a.cj)([S.Z], () => {
            var t, i, l;
            let a = S.Z.getVoiceState(n, e.id);
            return {
                muted: null !== (t = null == a ? void 0 : a.mute) && void 0 !== t && t,
                deafened: null !== (i = null == a ? void 0 : a.deaf) && void 0 !== i && i,
                suppressed: null !== (l = null == a ? void 0 : a.suppress) && void 0 !== l && l,
                voiceChannelId: null == a ? void 0 : a.channelId
            };
        }),
        w = (0, a.e7)([h.ZP], () => h.ZP.getMember(n, e.id)),
        W = (0, M.Z)({
            userId: e.id,
            guildId: n,
            channelId: x,
            location: P
        }),
        q = (0, g.sE)(n, {
            location: P,
            targetUserId: e.id
        }),
        F = (0, c.Z)(n, e.id),
        K =
            null != G && null != x && Z.Z.canWithPartialContext(m.Plq.VIEW_CHANNEL, { channelId: G }) && !U
                ? [
                      (!k || (k && !B)) && Z.Z.canWithPartialContext(m.Plq.MUTE_MEMBERS, { channelId: x })
                          ? (0, i.jsx)(
                                r.S89,
                                {
                                    id: 'voice-mute',
                                    label: b.intl.string(b.t.e9e9UV),
                                    checked: L,
                                    color: 'danger',
                                    action: () => {
                                        !1 === L && q(g.jQ.MUTE), u.Z.setServerMute(n, e.id, !L);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!k || (k && !B)) && Z.Z.canWithPartialContext(m.Plq.DEAFEN_MEMBERS, { channelId: x })
                          ? (0, i.jsx)(
                                r.S89,
                                {
                                    id: 'voice-deafen',
                                    label: b.intl.string(b.t.hMA2GB),
                                    checked: V,
                                    color: 'danger',
                                    action: () => u.Z.setServerDeaf(n, e.id, !V)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !j && null != O && Z.Z.canWithPartialContext(m.Plq.MOVE_MEMBERS, { channelId: x })
                          ? (0, i.jsx)(
                                r.sNh,
                                {
                                    id: 'voice-disconnect',
                                    label: j ? b.intl.string(b.t['6vrfgo']) : b.intl.string(b.t['/jERiI']),
                                    color: 'danger',
                                    action: () => u.Z.setChannel(n, e.id, null)
                                },
                                'voice-disconnect'
                            )
                          : null
                  ]
                : [],
        H = async (n, t, i) => {
            if (n.ctrlKey || n.metaKey)
                try {
                    var l;
                    await d.Z.setCommunicationDisabledDuration(t, i, C.UK.DURATION_60_SEC, null, P), q(g.jQ.TIMEOUT), (0, r.showToast)((0, r.createToast)(b.intl.formatToPlainString(b.t.O9C3Nj, { user: null !== (l = I.ZP.getName(t, null, e)) && void 0 !== l ? l : '' }), r.ToastType.SUCCESS));
                } catch (e) {
                    (0, r.showToast)((0, r.createToast)(b.intl.string(b.t.epyCur), r.ToastType.FAILURE));
                }
        },
        Q = null,
        Y = null != O && Z.Z.canManageUser(m.Plq.MODERATE_MEMBERS, e, O) && Z.Z.canManageUser(m.Plq.KICK_MEMBERS, e, O) && Z.Z.canManageUser(m.Plq.BAN_MEMBERS, e, O),
        z = null != O && (Z.Z.canManageUser(m.Plq.MANAGE_GUILD, e, O) || Z.Z.canManageUser(m.Plq.MANAGE_ROLES, e, O));
    if (!j && null != O && null != w && null != w.joinedAt && (Y || z) && O.hasFeature(m.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var J;
        Q = (0, T.yE)(null !== (J = w.flags) && void 0 !== J ? J : 0, N.q.BYPASSES_VERIFICATION)
            ? (0, i.jsx)(
                  r.sNh,
                  {
                      id: 'verify',
                      label: b.intl.string(b.t.NbhSIy),
                      action: () => {
                          var n;
                          return u.Z.setMemberFlags(O.id, e.id, (0, T.mB)(null !== (n = w.flags) && void 0 !== n ? n : 0, N.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, i.jsx)(
                  r.sNh,
                  {
                      id: 'verify',
                      label: b.intl.string(b.t['6QlTeH']),
                      action: () => {
                          var n;
                          return u.Z.setMemberFlags(O.id, e.id, (0, T.mB)(null !== (n = w.flags) && void 0 !== n ? n : 0, N.q.BYPASSES_VERIFICATION, !0));
                      }
                  },
                  'verify'
              );
    }
    return [
        ...K,
        ...(j || null == O
            ? []
            : [
                  W,
                  Q,
                  F && !U
                      ? R
                          ? (0, i.jsx)(
                                r.sNh,
                                {
                                    id: 'removetimeout',
                                    label: b.intl.formatToPlainString(b.t.csKetb, { user: e.username }),
                                    color: 'danger',
                                    action: () => {
                                        (0, s.q)({
                                            guildId: n,
                                            userId: e.id,
                                            anaylticsLocations: D
                                        });
                                    }
                                },
                                'removetimeout'
                            )
                          : (0, i.jsx)(
                                r.sNh,
                                {
                                    id: 'timeout',
                                    label: b.intl.formatToPlainString(b.t.OhsOy8, { user: e.username }),
                                    color: 'danger',
                                    action: (t) => {
                                        if (t.ctrlKey || t.metaKey) return H(t, n, e.id);
                                        (0, s.z)({
                                            guildId: n,
                                            userId: e.id,
                                            anaylticsLocations: D
                                        });
                                    }
                                },
                                'timeout'
                            )
                      : null,
                  (0, E.BK)(e, O)
                      ? (0, i.jsx)(
                            r.sNh,
                            {
                                id: 'kick',
                                label: b.intl.formatToPlainString(b.t['9l/iTU'], { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, r.ZDy)(async () => {
                                        let { default: l } = await t.e('5454').then(t.bind(t, 854360));
                                        return (t) =>
                                            (0, i.jsx)(l, {
                                                ...t,
                                                location: P,
                                                guildId: n,
                                                user: e
                                            });
                                    })
                            },
                            'kick'
                        )
                      : null,
                  (0, E.mm)(e, O)
                      ? (0, i.jsx)(
                            r.sNh,
                            {
                                id: 'ban',
                                label: b.intl.formatToPlainString(b.t.WnpUBg, { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, r.ZDy)(async () => {
                                        let { default: l } = await t.e('43350').then(t.bind(t, 98746));
                                        return (t) =>
                                            (0, i.jsx)(l, {
                                                ...t,
                                                location: P,
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
