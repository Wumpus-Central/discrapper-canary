n.d(t, { Z: () => I }), n(388685), n(997841);
var r = n(200651),
    l = n(192379),
    i = n(442837),
    o = n(481060),
    a = n(91176),
    u = n(749210),
    c = n(616780),
    s = n(251794),
    d = n(386696),
    f = n(71619),
    g = n(946273),
    b = n(910693),
    O = n(592125),
    E = n(271383),
    _ = n(430824),
    y = n(496675),
    v = n(594174),
    h = n(979651),
    Z = n(630388),
    p = n(5192),
    m = n(813872),
    S = n(981631),
    j = n(590433),
    N = n(372897),
    P = n(388032);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t, I, M, C) {
    let D = l.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        w = null != M ? [M] : [];
    (0, c.$)(D), (0, i.e7)([y.Z], () => y.Z.getGuildVersion(t), [t]);
    let x = (0, i.e7)([_.Z], () => _.Z.getGuild(t), [t]),
        U = (0, i.e7)(
            [v.default],
            () => {
                var t;
                return (null == (t = v.default.getCurrentUser()) ? void 0 : t.id) === e.id;
            },
            [e.id]
        ),
        k = (0, i.e7)([E.ZP], () => E.ZP.isGuestOrLurker(t, e.id), [t, e.id]),
        W = (0, i.e7)([O.Z], () => O.Z.getChannel(I), [I]),
        [, R] = (0, f.ZP)(e.id, t),
        L = null == W ? void 0 : W.isGuildStageVoice(),
        {
            muted: B,
            deafened: V,
            suppressed: G,
            voiceChannelId: q
        } = (0, i.cj)([h.Z], () => {
            var n, r, l;
            let i = h.Z.getVoiceState(t, e.id);
            return {
                muted: null != (n = null == i ? void 0 : i.mute) && n,
                deafened: null != (r = null == i ? void 0 : i.deaf) && r,
                suppressed: null != (l = null == i ? void 0 : i.suppress) && l,
                voiceChannelId: null == i ? void 0 : i.channelId
            };
        }),
        F = (0, i.e7)([E.ZP], () => E.ZP.getMember(t, e.id)),
        K = (0, m.Z)({
            userId: e.id,
            guildId: t,
            channelId: I,
            location: M,
            appContext: C
        }),
        Y = (0, b.sE)(t, {
            location: M,
            targetUserId: e.id
        }),
        Q = (0, d.Z)(t, e.id),
        H =
            null != q && null != I && y.Z.canWithPartialContext(S.Plq.VIEW_CHANNEL, { channelId: q }) && !k
                ? [
                      (!L || (L && !G)) && y.Z.canWithPartialContext(S.Plq.MUTE_MEMBERS, { channelId: I })
                          ? (0, r.jsx)(
                                o.S89,
                                {
                                    id: 'voice-mute',
                                    label: P.NW.string(P.t.e9e9UV),
                                    checked: B,
                                    color: 'danger',
                                    action: () => {
                                        !1 === B && Y(b.jQ.MUTE), u.Z.setServerMute(t, e.id, !B);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!L || (L && !G)) && y.Z.canWithPartialContext(S.Plq.DEAFEN_MEMBERS, { channelId: I })
                          ? (0, r.jsx)(
                                o.S89,
                                {
                                    id: 'voice-deafen',
                                    label: P.NW.string(P.t.hMA2GB),
                                    checked: V,
                                    color: 'danger',
                                    action: () => u.Z.setServerDeaf(t, e.id, !V)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !U && null != x && y.Z.canWithPartialContext(S.Plq.MOVE_MEMBERS, { channelId: I })
                          ? (0, r.jsx)(
                                o.sNh,
                                {
                                    id: 'voice-disconnect',
                                    label: U ? P.NW.string(P.t['6vrfgo']) : P.NW.string(P.t['/jERiI']),
                                    color: 'danger',
                                    action: () => u.Z.setChannel(t, e.id, null)
                                },
                                'voice-disconnect'
                            )
                          : null
                  ]
                : [],
        J = async (t, n, r) => {
            if (t.ctrlKey || t.metaKey)
                try {
                    var l;
                    await a.Z.setCommunicationDisabledDuration(n, r, j.UK.DURATION_60_SEC, null, M), Y(b.jQ.TIMEOUT), (0, o.showToast)((0, o.createToast)(P.NW.formatToPlainString(P.t.O9C3Nj, { user: null != (l = p.ZP.getName(n, null, e)) ? l : '' }), o.ToastType.SUCCESS));
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(P.NW.string(P.t.epyCur), o.ToastType.FAILURE));
                }
        },
        X = null,
        z = null != x && y.Z.canManageUser(S.Plq.MODERATE_MEMBERS, e, x) && y.Z.canManageUser(S.Plq.KICK_MEMBERS, e, x) && y.Z.canManageUser(S.Plq.BAN_MEMBERS, e, x),
        $ = null != x && (y.Z.canManageUser(S.Plq.MANAGE_GUILD, e, x) || y.Z.canManageUser(S.Plq.MANAGE_ROLES, e, x));
    if (!U && null != x && null != F && null != F.joinedAt && (z || $) && x.hasFeature(S.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var ee;
        X = (0, Z.yE)(null != (ee = F.flags) ? ee : 0, N.q.BYPASSES_VERIFICATION)
            ? (0, r.jsx)(
                  o.sNh,
                  {
                      id: 'verify',
                      label: P.NW.string(P.t.NbhSIy),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(x.id, e.id, (0, Z.mB)(null != (t = F.flags) ? t : 0, N.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, r.jsx)(
                  o.sNh,
                  {
                      id: 'verify',
                      label: P.NW.string(P.t['6QlTeH']),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(x.id, e.id, (0, Z.mB)(null != (t = F.flags) ? t : 0, N.q.BYPASSES_VERIFICATION, !0));
                      }
                  },
                  'verify'
              );
    }
    return [
        K,
        ...H,
        ...(U || null == x
            ? []
            : [
                  X,
                  Q && !k
                      ? R
                          ? (0, r.jsx)(
                                o.sNh,
                                {
                                    id: 'removetimeout',
                                    label: P.NW.formatToPlainString(P.t.csKetb, { user: e.username }),
                                    color: 'danger',
                                    action: () => {
                                        (0, s.q)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: w
                                        });
                                    }
                                },
                                'removetimeout'
                            )
                          : (0, r.jsx)(
                                o.sNh,
                                {
                                    id: 'timeout',
                                    label: P.NW.formatToPlainString(P.t.OhsOy8, { user: e.username }),
                                    color: 'danger',
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return J(n, t, e.id);
                                        (0, s.z)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: w
                                        });
                                    }
                                },
                                'timeout'
                            )
                      : null,
                  (0, g.BK)(e, x)
                      ? (0, r.jsx)(
                            o.sNh,
                            {
                                id: 'kick',
                                label: P.NW.formatToPlainString(P.t['9l/iTU'], { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, o.ZDy)(async () => {
                                        let { default: l } = await n.e('5454').then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, r.jsx)(
                                                l,
                                                T(A({}, n), {
                                                    location: M,
                                                    guildId: t,
                                                    user: e
                                                })
                                            );
                                    })
                            },
                            'kick'
                        )
                      : null,
                  (0, g.mm)(e, x)
                      ? (0, r.jsx)(
                            o.sNh,
                            {
                                id: 'ban',
                                label: P.NW.formatToPlainString(P.t.WnpUBg, { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, o.ZDy)(async () => {
                                        let { default: l } = await n.e('43350').then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, r.jsx)(
                                                l,
                                                T(A({}, n), {
                                                    location: M,
                                                    guildId: t,
                                                    user: e
                                                })
                                            );
                                    })
                            },
                            'ban'
                        )
                      : null
              ])
    ];
}
