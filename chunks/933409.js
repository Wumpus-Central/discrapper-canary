n.d(t, { Z: () => I }), n(388685), n(997841);
var l = n(200651),
    i = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(91176),
    s = n(749210),
    u = n(616780),
    d = n(251794),
    c = n(386696),
    f = n(71619),
    g = n(946273),
    Z = n(910693),
    b = n(592125),
    O = n(271383),
    m = n(430824),
    N = n(496675),
    h = n(594174),
    j = n(979651),
    E = n(630388),
    v = n(5192),
    p = n(813872),
    P = n(981631),
    y = n(590433),
    S = n(372897),
    C = n(388032);
function M(e) {
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
function x(e, t) {
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
function I(e, t, I, A, T) {
    let U = i.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        _ = null != A ? [A] : [];
    (0, u.$)(U), (0, r.e7)([N.Z], () => N.Z.getGuildVersion(t), [t]);
    let D = (0, r.e7)([m.Z], () => m.Z.getGuild(t), [t]),
        L = (0, r.e7)(
            [h.default],
            () => {
                var t;
                return (null == (t = h.default.getCurrentUser()) ? void 0 : t.id) === e.id;
            },
            [e.id]
        ),
        W = (0, r.e7)([O.ZP], () => O.ZP.isGuestOrLurker(t, e.id), [t, e.id]),
        w = (0, r.e7)([b.Z], () => b.Z.getChannel(I), [I]),
        [, k] = (0, f.ZP)(e.id, t),
        R = null == w ? void 0 : w.isGuildStageVoice(),
        {
            muted: B,
            deafened: V,
            suppressed: q,
            voiceChannelId: G
        } = (0, r.cj)([j.Z], () => {
            var n, l, i;
            let r = j.Z.getVoiceState(t, e.id);
            return {
                muted: null != (n = null == r ? void 0 : r.mute) && n,
                deafened: null != (l = null == r ? void 0 : r.deaf) && l,
                suppressed: null != (i = null == r ? void 0 : r.suppress) && i,
                voiceChannelId: null == r ? void 0 : r.channelId
            };
        }),
        F = (0, r.e7)([O.ZP], () => O.ZP.getMember(t, e.id)),
        Y = (0, p.Z)({
            userId: e.id,
            guildId: t,
            channelId: I,
            location: A,
            appContext: T
        }),
        H = (0, Z.sE)(t, {
            location: A,
            targetUserId: e.id
        }),
        Q = (0, c.Z)(t, e.id),
        K =
            null != G && null != I && N.Z.canWithPartialContext(P.Plq.VIEW_CHANNEL, { channelId: G }) && !W
                ? [
                      (!R || (R && !q)) && N.Z.canWithPartialContext(P.Plq.MUTE_MEMBERS, { channelId: I })
                          ? (0, l.jsx)(
                                o.S89,
                                {
                                    id: 'voice-mute',
                                    label: C.NW.string(C.t.e9e9UV),
                                    checked: B,
                                    color: 'danger',
                                    action: () => {
                                        !1 === B && H(Z.jQ.MUTE), s.Z.setServerMute(t, e.id, !B);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!R || (R && !q)) && N.Z.canWithPartialContext(P.Plq.DEAFEN_MEMBERS, { channelId: I })
                          ? (0, l.jsx)(
                                o.S89,
                                {
                                    id: 'voice-deafen',
                                    label: C.NW.string(C.t.hMA2GB),
                                    checked: V,
                                    color: 'danger',
                                    action: () => s.Z.setServerDeaf(t, e.id, !V)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !L && null != D && N.Z.canWithPartialContext(P.Plq.MOVE_MEMBERS, { channelId: I })
                          ? (0, l.jsx)(
                                o.sNh,
                                {
                                    id: 'voice-disconnect',
                                    label: L ? C.NW.string(C.t['6vrfgo']) : C.NW.string(C.t['/jERiI']),
                                    color: 'danger',
                                    action: () => s.Z.setChannel(t, e.id, null)
                                },
                                'voice-disconnect'
                            )
                          : null
                  ]
                : [],
        J = async (t, n, l) => {
            if (t.ctrlKey || t.metaKey)
                try {
                    var i;
                    await a.Z.setCommunicationDisabledDuration(n, l, y.UK.DURATION_60_SEC, null, A), H(Z.jQ.TIMEOUT), (0, o.showToast)((0, o.createToast)(C.NW.formatToPlainString(C.t.O9C3Nj, { user: null != (i = v.ZP.getName(n, null, e)) ? i : '' }), o.ToastType.SUCCESS));
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(C.NW.string(C.t.epyCur), o.ToastType.FAILURE));
                }
        },
        X = null,
        z = null != D && N.Z.canManageUser(P.Plq.MODERATE_MEMBERS, e, D) && N.Z.canManageUser(P.Plq.KICK_MEMBERS, e, D) && N.Z.canManageUser(P.Plq.BAN_MEMBERS, e, D),
        $ = null != D && (N.Z.canManageUser(P.Plq.MANAGE_GUILD, e, D) || N.Z.canManageUser(P.Plq.MANAGE_ROLES, e, D));
    if (!L && null != D && null != F && null != F.joinedAt && (z || $) && D.hasFeature(P.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var ee;
        X = (0, E.yE)(null != (ee = F.flags) ? ee : 0, S.q.BYPASSES_VERIFICATION)
            ? (0, l.jsx)(
                  o.sNh,
                  {
                      id: 'verify',
                      label: C.NW.string(C.t.NbhSIy),
                      action: () => {
                          var t;
                          return s.Z.setMemberFlags(D.id, e.id, (0, E.mB)(null != (t = F.flags) ? t : 0, S.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, l.jsx)(
                  o.sNh,
                  {
                      id: 'verify',
                      label: C.NW.string(C.t['6QlTeH']),
                      action: () => {
                          var t;
                          return s.Z.setMemberFlags(D.id, e.id, (0, E.mB)(null != (t = F.flags) ? t : 0, S.q.BYPASSES_VERIFICATION, !0));
                      }
                  },
                  'verify'
              );
    }
    return [
        Y,
        ...K,
        ...(L || null == D
            ? []
            : [
                  X,
                  Q && !W
                      ? k
                          ? (0, l.jsx)(
                                o.sNh,
                                {
                                    id: 'removetimeout',
                                    label: C.NW.formatToPlainString(C.t.csKetb, { user: e.username }),
                                    color: 'danger',
                                    action: () => {
                                        (0, d.q)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: _
                                        });
                                    }
                                },
                                'removetimeout'
                            )
                          : (0, l.jsx)(
                                o.sNh,
                                {
                                    id: 'timeout',
                                    label: C.NW.formatToPlainString(C.t.OhsOy8, { user: e.username }),
                                    color: 'danger',
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return J(n, t, e.id);
                                        (0, d.z)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: _
                                        });
                                    }
                                },
                                'timeout'
                            )
                      : null,
                  (0, g.BK)(e, D)
                      ? (0, l.jsx)(
                            o.sNh,
                            {
                                id: 'kick',
                                label: C.NW.formatToPlainString(C.t['9l/iTU'], { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, o.ZDy)(async () => {
                                        let { default: i } = await n.e('5454').then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, l.jsx)(
                                                i,
                                                x(M({}, n), {
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
                  (0, g.mm)(e, D)
                      ? (0, l.jsx)(
                            o.sNh,
                            {
                                id: 'ban',
                                label: C.NW.formatToPlainString(C.t.WnpUBg, { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, o.ZDy)(async () => {
                                        let { default: i } = await n.e('43350').then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, l.jsx)(
                                                i,
                                                x(M({}, n), {
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
