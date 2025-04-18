n.d(t, { Z: () => D }), n(388685), n(997841);
var l = n(200651),
    r = n(192379),
    i = n(442837),
    a = n(481060),
    o = n(91176),
    s = n(749210),
    u = n(616780),
    c = n(251794),
    d = n(386696),
    g = n(71619),
    f = n(946273),
    b = n(910693),
    m = n(592125),
    O = n(271383),
    Z = n(430824),
    v = n(496675),
    N = n(594174),
    E = n(979651),
    y = n(630388),
    P = n(5192),
    h = n(813872),
    p = n(981631),
    j = n(590433),
    S = n(372897),
    M = n(388032);
function C(e) {
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
function D(e, t, D, A, _) {
    let x = r.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        T = null != A ? [A] : [];
    (0, u.$)(x), (0, i.e7)([v.Z], () => v.Z.getGuildVersion(t), [t]);
    let U = (0, i.e7)([Z.Z], () => Z.Z.getGuild(t), [t]),
        W = (0, i.e7)(
            [N.default],
            () => {
                var t;
                return (null == (t = N.default.getCurrentUser()) ? void 0 : t.id) === e.id;
            },
            [e.id]
        ),
        L = (0, i.e7)([O.ZP], () => O.ZP.isGuestOrLurker(t, e.id), [t, e.id]),
        w = (0, i.e7)([m.Z], () => m.Z.getChannel(D), [D]),
        [, k] = (0, g.ZP)(e.id, t),
        B = null == w ? void 0 : w.isGuildStageVoice(),
        {
            muted: R,
            deafened: V,
            suppressed: q,
            voiceChannelId: F
        } = (0, i.cj)([E.Z], () => {
            var n, l, r;
            let i = E.Z.getVoiceState(t, e.id);
            return {
                muted: null != (n = null == i ? void 0 : i.mute) && n,
                deafened: null != (l = null == i ? void 0 : i.deaf) && l,
                suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                voiceChannelId: null == i ? void 0 : i.channelId
            };
        }),
        G = (0, i.e7)([O.ZP], () => O.ZP.getMember(t, e.id)),
        K = (0, h.Z)({
            userId: e.id,
            guildId: t,
            channelId: D,
            location: A,
            appContext: _
        }),
        J = (0, b.sE)(t, {
            location: A,
            targetUserId: e.id
        }),
        Y = (0, d.Z)(t, e.id),
        H =
            null != F && null != D && v.Z.canWithPartialContext(p.Plq.VIEW_CHANNEL, { channelId: F }) && !L
                ? [
                      (!B || (B && !q)) && v.Z.canWithPartialContext(p.Plq.MUTE_MEMBERS, { channelId: D })
                          ? (0, l.jsx)(
                                a.S89,
                                {
                                    id: 'voice-mute',
                                    label: M.NW.string(M.t.e9e9UV),
                                    checked: R,
                                    color: 'danger',
                                    action: () => {
                                        !1 === R && J(b.jQ.MUTE), s.Z.setServerMute(t, e.id, !R);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!B || (B && !q)) && v.Z.canWithPartialContext(p.Plq.DEAFEN_MEMBERS, { channelId: D })
                          ? (0, l.jsx)(
                                a.S89,
                                {
                                    id: 'voice-deafen',
                                    label: M.NW.string(M.t.hMA2GB),
                                    checked: V,
                                    color: 'danger',
                                    action: () => s.Z.setServerDeaf(t, e.id, !V)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !W && null != U && v.Z.canWithPartialContext(p.Plq.MOVE_MEMBERS, { channelId: D })
                          ? (0, l.jsx)(
                                a.sNh,
                                {
                                    id: 'voice-disconnect',
                                    label: W ? M.NW.string(M.t['6vrfgo']) : M.NW.string(M.t['/jERiI']),
                                    color: 'danger',
                                    action: () => s.Z.setChannel(t, e.id, null)
                                },
                                'voice-disconnect'
                            )
                          : null
                  ]
                : [],
        z = async (t, n, l) => {
            if (t.ctrlKey || t.metaKey)
                try {
                    var r;
                    await o.Z.setCommunicationDisabledDuration(n, l, j.UK.DURATION_60_SEC, null, A), J(b.jQ.TIMEOUT), (0, a.showToast)((0, a.createToast)(M.NW.formatToPlainString(M.t.O9C3Nj, { user: null != (r = P.ZP.getName(n, null, e)) ? r : '' }), a.ToastType.SUCCESS));
                } catch (e) {
                    (0, a.showToast)((0, a.createToast)(M.NW.string(M.t.epyCur), a.ToastType.FAILURE));
                }
        },
        Q = null,
        $ = null != U && v.Z.canManageUser(p.Plq.MODERATE_MEMBERS, e, U) && v.Z.canManageUser(p.Plq.KICK_MEMBERS, e, U) && v.Z.canManageUser(p.Plq.BAN_MEMBERS, e, U),
        X = null != U && (v.Z.canManageUser(p.Plq.MANAGE_GUILD, e, U) || v.Z.canManageUser(p.Plq.MANAGE_ROLES, e, U));
    if (!W && null != U && null != G && null != G.joinedAt && ($ || X) && U.hasFeature(p.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var ee;
        Q = (0, y.yE)(null != (ee = G.flags) ? ee : 0, S.q.BYPASSES_VERIFICATION)
            ? (0, l.jsx)(
                  a.sNh,
                  {
                      id: 'verify',
                      label: M.NW.string(M.t.NbhSIy),
                      action: () => {
                          var t;
                          return s.Z.setMemberFlags(U.id, e.id, (0, y.mB)(null != (t = G.flags) ? t : 0, S.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, l.jsx)(
                  a.sNh,
                  {
                      id: 'verify',
                      label: M.NW.string(M.t['6QlTeH']),
                      action: () => {
                          var t;
                          return s.Z.setMemberFlags(U.id, e.id, (0, y.mB)(null != (t = G.flags) ? t : 0, S.q.BYPASSES_VERIFICATION, !0));
                      }
                  },
                  'verify'
              );
    }
    return [
        K,
        ...H,
        ...(W || null == U
            ? []
            : [
                  Q,
                  Y && !L
                      ? k
                          ? (0, l.jsx)(
                                a.sNh,
                                {
                                    id: 'removetimeout',
                                    label: M.NW.formatToPlainString(M.t.csKetb, { user: e.username }),
                                    color: 'danger',
                                    action: () => {
                                        (0, c.q)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: T
                                        });
                                    }
                                },
                                'removetimeout'
                            )
                          : (0, l.jsx)(
                                a.sNh,
                                {
                                    id: 'timeout',
                                    label: M.NW.formatToPlainString(M.t.OhsOy8, { user: e.username }),
                                    color: 'danger',
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return z(n, t, e.id);
                                        (0, c.z)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: T
                                        });
                                    }
                                },
                                'timeout'
                            )
                      : null,
                  (0, f.BK)(e, U)
                      ? (0, l.jsx)(
                            a.sNh,
                            {
                                id: 'kick',
                                label: M.NW.formatToPlainString(M.t['9l/iTU'], { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, a.ZDy)(async () => {
                                        let { default: r } = await n.e('5454').then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, l.jsx)(
                                                r,
                                                I(C({}, n), {
                                                    location: A,
                                                    guildId: t,
                                                    user: e
                                                })
                                            );
                                    })
                            },
                            'kick'
                        )
                      : null,
                  (0, f.mm)(e, U)
                      ? (0, l.jsx)(
                            a.sNh,
                            {
                                id: 'ban',
                                label: M.NW.formatToPlainString(M.t.WnpUBg, { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, a.ZDy)(async () => {
                                        let { default: r } = await n.e('4114').then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, l.jsx)(
                                                r,
                                                I(C({}, n), {
                                                    location: A,
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
