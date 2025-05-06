n.d(t, { Z: () => h }), n(388685), n(997841);
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(481060),
    o = n(91176),
    u = n(749210),
    c = n(616780),
    s = n(251794),
    d = n(386696),
    f = n(71619),
    O = n(946273),
    E = n(910693),
    g = n(592125),
    b = n(271383),
    y = n(430824),
    _ = n(496675),
    p = n(594174),
    m = n(979651),
    j = n(630388),
    M = n(5192),
    P = n(813872),
    S = n(981631),
    A = n(590433),
    v = n(372897),
    Z = n(388032);
function N(e) {
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
function I(e, t) {
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
function h(e, t, h, T, D) {
    let C = l.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        U = null != T ? [T] : [];
    (0, c.$)(C), (0, i.e7)([_.Z], () => _.Z.getGuildVersion(t), [t]);
    let R = (0, i.e7)([y.Z], () => y.Z.getGuild(t), [t]),
        L = (0, i.e7)(
            [p.default],
            () => {
                var t;
                return (null == (t = p.default.getCurrentUser()) ? void 0 : t.id) === e.id;
            },
            [e.id]
        ),
        w = (0, i.e7)([b.ZP], () => b.ZP.isGuestOrLurker(t, e.id), [t, e.id]),
        x = (0, i.e7)([g.Z], () => g.Z.getChannel(h), [h]),
        [, k] = (0, f.ZP)(e.id, t),
        G = null == x ? void 0 : x.isGuildStageVoice(),
        {
            muted: B,
            deafened: q,
            suppressed: F,
            voiceChannelId: K
        } = (0, i.cj)([m.Z], () => {
            var n, r, l;
            let i = m.Z.getVoiceState(t, e.id);
            return {
                muted: null != (n = null == i ? void 0 : i.mute) && n,
                deafened: null != (r = null == i ? void 0 : i.deaf) && r,
                suppressed: null != (l = null == i ? void 0 : i.suppress) && l,
                voiceChannelId: null == i ? void 0 : i.channelId
            };
        }),
        V = (0, i.e7)([b.ZP], () => b.ZP.getMember(t, e.id)),
        W = (0, P.Z)({
            userId: e.id,
            guildId: t,
            channelId: h,
            location: T,
            appContext: D
        }),
        Y = (0, E.sE)(t, {
            location: T,
            targetUserId: e.id
        }),
        H = (0, d.Z)(t, e.id),
        Q =
            null != K && null != h && _.Z.canWithPartialContext(S.Plq.VIEW_CHANNEL, { channelId: K }) && !w
                ? [
                      (!G || (G && !F)) && _.Z.canWithPartialContext(S.Plq.MUTE_MEMBERS, { channelId: h })
                          ? (0, r.jsx)(
                                a.S89,
                                {
                                    id: 'voice-mute',
                                    label: Z.intl.string(Z.t.e9e9UV),
                                    checked: B,
                                    color: 'danger',
                                    action: () => {
                                        !1 === B && Y(E.jQ.MUTE), u.Z.setServerMute(t, e.id, !B);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!G || (G && !F)) && _.Z.canWithPartialContext(S.Plq.DEAFEN_MEMBERS, { channelId: h })
                          ? (0, r.jsx)(
                                a.S89,
                                {
                                    id: 'voice-deafen',
                                    label: Z.intl.string(Z.t.hMA2GB),
                                    checked: q,
                                    color: 'danger',
                                    action: () => u.Z.setServerDeaf(t, e.id, !q)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !L && null != R && _.Z.canWithPartialContext(S.Plq.MOVE_MEMBERS, { channelId: h })
                          ? (0, r.jsx)(
                                a.sNh,
                                {
                                    id: 'voice-disconnect',
                                    label: L ? Z.intl.string(Z.t['6vrfgo']) : Z.intl.string(Z.t['/jERiI']),
                                    color: 'danger',
                                    action: () => u.Z.setChannel(t, e.id, null)
                                },
                                'voice-disconnect'
                            )
                          : null
                  ]
                : [],
        X = async (t, n, r) => {
            if (t.ctrlKey || t.metaKey)
                try {
                    var l;
                    await o.Z.setCommunicationDisabledDuration(n, r, A.UK.DURATION_60_SEC, null, T), Y(E.jQ.TIMEOUT), (0, a.showToast)((0, a.createToast)(Z.intl.formatToPlainString(Z.t.O9C3Nj, { user: null != (l = M.ZP.getName(n, null, e)) ? l : '' }), a.ToastType.SUCCESS));
                } catch (e) {
                    (0, a.showToast)((0, a.createToast)(Z.intl.string(Z.t.epyCur), a.ToastType.FAILURE));
                }
        },
        J = null,
        z = null != R && _.Z.canManageUser(S.Plq.MODERATE_MEMBERS, e, R) && _.Z.canManageUser(S.Plq.KICK_MEMBERS, e, R) && _.Z.canManageUser(S.Plq.BAN_MEMBERS, e, R),
        $ = null != R && (_.Z.canManageUser(S.Plq.MANAGE_GUILD, e, R) || _.Z.canManageUser(S.Plq.MANAGE_ROLES, e, R));
    if (!L && null != R && null != V && null != V.joinedAt && (z || $) && R.hasFeature(S.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var ee;
        J = (0, j.yE)(null != (ee = V.flags) ? ee : 0, v.q.BYPASSES_VERIFICATION)
            ? (0, r.jsx)(
                  a.sNh,
                  {
                      id: 'verify',
                      label: Z.intl.string(Z.t.NbhSIy),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(R.id, e.id, (0, j.mB)(null != (t = V.flags) ? t : 0, v.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, r.jsx)(
                  a.sNh,
                  {
                      id: 'verify',
                      label: Z.intl.string(Z.t['6QlTeH']),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(R.id, e.id, (0, j.mB)(null != (t = V.flags) ? t : 0, v.q.BYPASSES_VERIFICATION, !0));
                      }
                  },
                  'verify'
              );
    }
    return [
        W,
        ...Q,
        ...(L || null == R
            ? []
            : [
                  J,
                  H && !w
                      ? k
                          ? (0, r.jsx)(
                                a.sNh,
                                {
                                    id: 'removetimeout',
                                    label: Z.intl.formatToPlainString(Z.t.csKetb, { user: e.username }),
                                    color: 'danger',
                                    action: () => {
                                        (0, s.q)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: U
                                        });
                                    }
                                },
                                'removetimeout'
                            )
                          : (0, r.jsx)(
                                a.sNh,
                                {
                                    id: 'timeout',
                                    label: Z.intl.formatToPlainString(Z.t.OhsOy8, { user: e.username }),
                                    color: 'danger',
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return X(n, t, e.id);
                                        (0, s.z)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: U
                                        });
                                    }
                                },
                                'timeout'
                            )
                      : null,
                  (0, O.BK)(e, R)
                      ? (0, r.jsx)(
                            a.sNh,
                            {
                                id: 'kick',
                                label: Z.intl.formatToPlainString(Z.t['9l/iTU'], { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, a.ZDy)(async () => {
                                        let { default: l } = await n.e('5454').then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, r.jsx)(
                                                l,
                                                I(N({}, n), {
                                                    location: T,
                                                    guildId: t,
                                                    user: e
                                                })
                                            );
                                    })
                            },
                            'kick'
                        )
                      : null,
                  (0, O.mm)(e, R)
                      ? (0, r.jsx)(
                            a.sNh,
                            {
                                id: 'ban',
                                label: Z.intl.formatToPlainString(Z.t.WnpUBg, { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, a.ZDy)(async () => {
                                        let { default: l } = await n.e('4114').then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, r.jsx)(
                                                l,
                                                I(N({}, n), {
                                                    location: T,
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
