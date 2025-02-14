t.d(l, { Z: () => O }), t(47120), t(789020);
var n = t(200651),
    i = t(192379),
    a = t(442837),
    r = t(481060),
    d = t(91176),
    o = t(749210),
    s = t(616780),
    u = t(251794),
    c = t(386696),
    Z = t(71619),
    g = t(946273),
    f = t(910693),
    E = t(592125),
    m = t(271383),
    h = t(430824),
    v = t(496675),
    b = t(594174),
    C = t(979651),
    S = t(630388),
    x = t(5192),
    M = t(813872),
    N = t(981631),
    I = t(590433),
    P = t(372897),
    j = t(388032);
function O(e, l, O, A, T) {
    let _ = i.useMemo(() => ({ [l]: [e.id] }), [l, e.id]),
        U = null != A ? [A] : [];
    (0, s.$)(_), (0, a.e7)([v.Z], () => v.Z.getGuildVersion(l), [l]);
    let L = (0, a.e7)([h.Z], () => h.Z.getGuild(l), [l]),
        D = (0, a.e7)(
            [b.default],
            () => {
                var l;
                return (null === (l = b.default.getCurrentUser()) || void 0 === l ? void 0 : l.id) === e.id;
            },
            [e.id]
        ),
        p = (0, a.e7)([m.ZP], () => m.ZP.isGuestOrLurker(l, e.id), [l, e.id]),
        R = (0, a.e7)([E.Z], () => E.Z.getChannel(O), [O]),
        [, y] = (0, Z.ZP)(e.id, l),
        k = null == R ? void 0 : R.isGuildStageVoice(),
        {
            muted: B,
            deafened: V,
            suppressed: q,
            voiceChannelId: G
        } = (0, a.cj)([C.Z], () => {
            var t, n, i;
            let a = C.Z.getVoiceState(l, e.id);
            return {
                muted: null !== (t = null == a ? void 0 : a.mute) && void 0 !== t && t,
                deafened: null !== (n = null == a ? void 0 : a.deaf) && void 0 !== n && n,
                suppressed: null !== (i = null == a ? void 0 : a.suppress) && void 0 !== i && i,
                voiceChannelId: null == a ? void 0 : a.channelId
            };
        }),
        w = (0, a.e7)([m.ZP], () => m.ZP.getMember(l, e.id)),
        F = (0, M.Z)({
            userId: e.id,
            guildId: l,
            channelId: O,
            location: A,
            appContext: T
        }),
        Y = (0, f.sE)(l, {
            location: A,
            targetUserId: e.id
        }),
        H = (0, c.Z)(l, e.id),
        Q =
            null != G && null != O && v.Z.canWithPartialContext(N.Plq.VIEW_CHANNEL, { channelId: G }) && !p
                ? [
                      (!k || (k && !q)) && v.Z.canWithPartialContext(N.Plq.MUTE_MEMBERS, { channelId: O })
                          ? (0, n.jsx)(
                                r.S89,
                                {
                                    id: 'voice-mute',
                                    label: j.intl.string(j.t.e9e9UV),
                                    checked: B,
                                    color: 'danger',
                                    action: () => {
                                        !1 === B && Y(f.jQ.MUTE), o.Z.setServerMute(l, e.id, !B);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!k || (k && !q)) && v.Z.canWithPartialContext(N.Plq.DEAFEN_MEMBERS, { channelId: O })
                          ? (0, n.jsx)(
                                r.S89,
                                {
                                    id: 'voice-deafen',
                                    label: j.intl.string(j.t.hMA2GB),
                                    checked: V,
                                    color: 'danger',
                                    action: () => o.Z.setServerDeaf(l, e.id, !V)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !D && null != L && v.Z.canWithPartialContext(N.Plq.MOVE_MEMBERS, { channelId: O })
                          ? (0, n.jsx)(
                                r.sNh,
                                {
                                    id: 'voice-disconnect',
                                    label: D ? j.intl.string(j.t['6vrfgo']) : j.intl.string(j.t['/jERiI']),
                                    color: 'danger',
                                    action: () => o.Z.setChannel(l, e.id, null)
                                },
                                'voice-disconnect'
                            )
                          : null
                  ]
                : [],
        K = async (l, t, n) => {
            if (l.ctrlKey || l.metaKey)
                try {
                    var i;
                    await d.Z.setCommunicationDisabledDuration(t, n, I.UK.DURATION_60_SEC, null, A), Y(f.jQ.TIMEOUT), (0, r.showToast)((0, r.createToast)(j.intl.formatToPlainString(j.t.O9C3Nj, { user: null !== (i = x.ZP.getName(t, null, e)) && void 0 !== i ? i : '' }), r.ToastType.SUCCESS));
                } catch (e) {
                    (0, r.showToast)((0, r.createToast)(j.intl.string(j.t.epyCur), r.ToastType.FAILURE));
                }
        },
        W = null,
        J = null != L && v.Z.canManageUser(N.Plq.MODERATE_MEMBERS, e, L) && v.Z.canManageUser(N.Plq.KICK_MEMBERS, e, L) && v.Z.canManageUser(N.Plq.BAN_MEMBERS, e, L),
        X = null != L && (v.Z.canManageUser(N.Plq.MANAGE_GUILD, e, L) || v.Z.canManageUser(N.Plq.MANAGE_ROLES, e, L));
    if (!D && null != L && null != w && null != w.joinedAt && (J || X) && L.hasFeature(N.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var z;
        W = (0, S.yE)(null !== (z = w.flags) && void 0 !== z ? z : 0, P.q.BYPASSES_VERIFICATION)
            ? (0, n.jsx)(
                  r.sNh,
                  {
                      id: 'verify',
                      label: j.intl.string(j.t.NbhSIy),
                      action: () => {
                          var l;
                          return o.Z.setMemberFlags(L.id, e.id, (0, S.mB)(null !== (l = w.flags) && void 0 !== l ? l : 0, P.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, n.jsx)(
                  r.sNh,
                  {
                      id: 'verify',
                      label: j.intl.string(j.t['6QlTeH']),
                      action: () => {
                          var l;
                          return o.Z.setMemberFlags(L.id, e.id, (0, S.mB)(null !== (l = w.flags) && void 0 !== l ? l : 0, P.q.BYPASSES_VERIFICATION, !0));
                      }
                  },
                  'verify'
              );
    }
    return [
        ...Q,
        ...(D || null == L
            ? []
            : [
                  F,
                  W,
                  H && !p
                      ? y
                          ? (0, n.jsx)(
                                r.sNh,
                                {
                                    id: 'removetimeout',
                                    label: j.intl.formatToPlainString(j.t.csKetb, { user: e.username }),
                                    color: 'danger',
                                    action: () => {
                                        (0, u.q)({
                                            guildId: l,
                                            userId: e.id,
                                            anaylticsLocations: U
                                        });
                                    }
                                },
                                'removetimeout'
                            )
                          : (0, n.jsx)(
                                r.sNh,
                                {
                                    id: 'timeout',
                                    label: j.intl.formatToPlainString(j.t.OhsOy8, { user: e.username }),
                                    color: 'danger',
                                    action: (t) => {
                                        if (t.ctrlKey || t.metaKey) return K(t, l, e.id);
                                        (0, u.z)({
                                            guildId: l,
                                            userId: e.id,
                                            anaylticsLocations: U
                                        });
                                    }
                                },
                                'timeout'
                            )
                      : null,
                  (0, g.BK)(e, L)
                      ? (0, n.jsx)(
                            r.sNh,
                            {
                                id: 'kick',
                                label: j.intl.formatToPlainString(j.t['9l/iTU'], { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, r.ZDy)(async () => {
                                        let { default: i } = await t.e('5454').then(t.bind(t, 854360));
                                        return (t) =>
                                            (0, n.jsx)(i, {
                                                ...t,
                                                location: A,
                                                guildId: l,
                                                user: e
                                            });
                                    })
                            },
                            'kick'
                        )
                      : null,
                  (0, g.mm)(e, L)
                      ? (0, n.jsx)(
                            r.sNh,
                            {
                                id: 'ban',
                                label: j.intl.formatToPlainString(j.t.WnpUBg, { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, r.ZDy)(async () => {
                                        let { default: i } = await t.e('43350').then(t.bind(t, 98746));
                                        return (t) =>
                                            (0, n.jsx)(i, {
                                                ...t,
                                                location: A,
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
