n.d(t, { Z: () => M }), n(388685), n(997841);
var l = n(200651),
    r = n(192379),
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
    P = n(372897),
    A = n(388032);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e, t, M, N, C) {
    let D = r.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        w = null != N ? [N] : [];
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
        R = (0, i.e7)([O.Z], () => O.Z.getChannel(M), [M]),
        [, L] = (0, f.ZP)(e.id, t),
        B = null == R ? void 0 : R.isGuildStageVoice(),
        {
            muted: V,
            deafened: G,
            suppressed: q,
            voiceChannelId: F
        } = (0, i.cj)([h.Z], () => {
            var n, l, r;
            let i = h.Z.getVoiceState(t, e.id);
            return {
                muted: null != (n = null == i ? void 0 : i.mute) && n,
                deafened: null != (l = null == i ? void 0 : i.deaf) && l,
                suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                voiceChannelId: null == i ? void 0 : i.channelId
            };
        }),
        W = (0, i.e7)([E.ZP], () => E.ZP.getMember(t, e.id)),
        K = (0, m.Z)({
            userId: e.id,
            guildId: t,
            channelId: M,
            location: N,
            appContext: C
        }),
        Y = (0, b.sE)(t, {
            location: N,
            targetUserId: e.id
        }),
        Q = (0, d.Z)(t, e.id),
        H =
            null != F && null != M && y.Z.canWithPartialContext(S.Plq.VIEW_CHANNEL, { channelId: F }) && !k
                ? [
                      (!B || (B && !q)) && y.Z.canWithPartialContext(S.Plq.MUTE_MEMBERS, { channelId: M })
                          ? (0, l.jsx)(
                                o.S89,
                                {
                                    id: 'voice-mute',
                                    label: A.intl.string(A.t.e9e9UV),
                                    checked: V,
                                    color: 'danger',
                                    action: () => {
                                        !1 === V && Y(b.jQ.MUTE), u.Z.setServerMute(t, e.id, !V);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!B || (B && !q)) && y.Z.canWithPartialContext(S.Plq.DEAFEN_MEMBERS, { channelId: M })
                          ? (0, l.jsx)(
                                o.S89,
                                {
                                    id: 'voice-deafen',
                                    label: A.intl.string(A.t.hMA2GB),
                                    checked: G,
                                    color: 'danger',
                                    action: () => u.Z.setServerDeaf(t, e.id, !G)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !U && null != x && y.Z.canWithPartialContext(S.Plq.MOVE_MEMBERS, { channelId: M })
                          ? (0, l.jsx)(
                                o.sNh,
                                {
                                    id: 'voice-disconnect',
                                    label: U ? A.intl.string(A.t['6vrfgo']) : A.intl.string(A.t['/jERiI']),
                                    color: 'danger',
                                    action: () => u.Z.setChannel(t, e.id, null)
                                },
                                'voice-disconnect'
                            )
                          : null
                  ]
                : [],
        J = async (t, n, l) => {
            if (t.ctrlKey || t.metaKey)
                try {
                    var r;
                    await a.Z.setCommunicationDisabledDuration(n, l, j.UK.DURATION_60_SEC, null, N), Y(b.jQ.TIMEOUT), (0, o.showToast)((0, o.createToast)(A.intl.formatToPlainString(A.t.O9C3Nj, { user: null != (r = p.ZP.getName(n, null, e)) ? r : '' }), o.ToastType.SUCCESS));
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(A.intl.string(A.t.epyCur), o.ToastType.FAILURE));
                }
        },
        X = null,
        z = null != x && y.Z.canManageUser(S.Plq.MODERATE_MEMBERS, e, x) && y.Z.canManageUser(S.Plq.KICK_MEMBERS, e, x) && y.Z.canManageUser(S.Plq.BAN_MEMBERS, e, x),
        $ = null != x && (y.Z.canManageUser(S.Plq.MANAGE_GUILD, e, x) || y.Z.canManageUser(S.Plq.MANAGE_ROLES, e, x));
    if (!U && null != x && null != W && null != W.joinedAt && (z || $) && x.hasFeature(S.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var ee;
        X = (0, Z.yE)(null != (ee = W.flags) ? ee : 0, P.q.BYPASSES_VERIFICATION)
            ? (0, l.jsx)(
                  o.sNh,
                  {
                      id: 'verify',
                      label: A.intl.string(A.t.NbhSIy),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(x.id, e.id, (0, Z.mB)(null != (t = W.flags) ? t : 0, P.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, l.jsx)(
                  o.sNh,
                  {
                      id: 'verify',
                      label: A.intl.string(A.t['6QlTeH']),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(x.id, e.id, (0, Z.mB)(null != (t = W.flags) ? t : 0, P.q.BYPASSES_VERIFICATION, !0));
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
                      ? L
                          ? (0, l.jsx)(
                                o.sNh,
                                {
                                    id: 'removetimeout',
                                    label: A.intl.formatToPlainString(A.t.csKetb, { user: e.username }),
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
                          : (0, l.jsx)(
                                o.sNh,
                                {
                                    id: 'timeout',
                                    label: A.intl.formatToPlainString(A.t.OhsOy8, { user: e.username }),
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
                      ? (0, l.jsx)(
                            o.sNh,
                            {
                                id: 'kick',
                                label: A.intl.formatToPlainString(A.t['9l/iTU'], { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, o.ZDy)(async () => {
                                        let { default: r } = await n.e('5454').then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, l.jsx)(
                                                r,
                                                I(T({}, n), {
                                                    location: N,
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
                      ? (0, l.jsx)(
                            o.sNh,
                            {
                                id: 'ban',
                                label: A.intl.formatToPlainString(A.t.WnpUBg, { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, o.ZDy)(async () => {
                                        let { default: r } = await n.e('4114').then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, l.jsx)(
                                                r,
                                                I(T({}, n), {
                                                    location: N,
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
