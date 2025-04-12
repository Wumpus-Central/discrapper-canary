n.d(t, { Z: () => h }), n(388685), n(997841);
var r = n(200651),
    l = n(192379),
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
    N = n(630388),
    j = n(5192),
    M = n(813872),
    P = n(981631),
    S = n(590433),
    A = n(372897),
    v = n(388032);
function Z(e) {
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
        [, W] = (0, f.ZP)(e.id, t),
        k = null == x ? void 0 : x.isGuildStageVoice(),
        {
            muted: G,
            deafened: B,
            suppressed: q,
            voiceChannelId: F
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
        K = (0, i.e7)([b.ZP], () => b.ZP.getMember(t, e.id)),
        V = (0, M.Z)({
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
            null != F && null != h && _.Z.canWithPartialContext(P.Plq.VIEW_CHANNEL, { channelId: F }) && !w
                ? [
                      (!k || (k && !q)) && _.Z.canWithPartialContext(P.Plq.MUTE_MEMBERS, { channelId: h })
                          ? (0, r.jsx)(
                                a.S89,
                                {
                                    id: 'voice-mute',
                                    label: v.NW.string(v.t.e9e9UV),
                                    checked: G,
                                    color: 'danger',
                                    action: () => {
                                        !1 === G && Y(E.jQ.MUTE), u.Z.setServerMute(t, e.id, !G);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!k || (k && !q)) && _.Z.canWithPartialContext(P.Plq.DEAFEN_MEMBERS, { channelId: h })
                          ? (0, r.jsx)(
                                a.S89,
                                {
                                    id: 'voice-deafen',
                                    label: v.NW.string(v.t.hMA2GB),
                                    checked: B,
                                    color: 'danger',
                                    action: () => u.Z.setServerDeaf(t, e.id, !B)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !L && null != R && _.Z.canWithPartialContext(P.Plq.MOVE_MEMBERS, { channelId: h })
                          ? (0, r.jsx)(
                                a.sNh,
                                {
                                    id: 'voice-disconnect',
                                    label: L ? v.NW.string(v.t['6vrfgo']) : v.NW.string(v.t['/jERiI']),
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
                    await o.Z.setCommunicationDisabledDuration(n, r, S.UK.DURATION_60_SEC, null, T), Y(E.jQ.TIMEOUT), (0, a.showToast)((0, a.createToast)(v.NW.formatToPlainString(v.t.O9C3Nj, { user: null != (l = j.ZP.getName(n, null, e)) ? l : '' }), a.ToastType.SUCCESS));
                } catch (e) {
                    (0, a.showToast)((0, a.createToast)(v.NW.string(v.t.epyCur), a.ToastType.FAILURE));
                }
        },
        J = null,
        z = null != R && _.Z.canManageUser(P.Plq.MODERATE_MEMBERS, e, R) && _.Z.canManageUser(P.Plq.KICK_MEMBERS, e, R) && _.Z.canManageUser(P.Plq.BAN_MEMBERS, e, R),
        $ = null != R && (_.Z.canManageUser(P.Plq.MANAGE_GUILD, e, R) || _.Z.canManageUser(P.Plq.MANAGE_ROLES, e, R));
    if (!L && null != R && null != K && null != K.joinedAt && (z || $) && R.hasFeature(P.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var ee;
        J = (0, N.yE)(null != (ee = K.flags) ? ee : 0, A.q.BYPASSES_VERIFICATION)
            ? (0, r.jsx)(
                  a.sNh,
                  {
                      id: 'verify',
                      label: v.NW.string(v.t.NbhSIy),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(R.id, e.id, (0, N.mB)(null != (t = K.flags) ? t : 0, A.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, r.jsx)(
                  a.sNh,
                  {
                      id: 'verify',
                      label: v.NW.string(v.t['6QlTeH']),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(R.id, e.id, (0, N.mB)(null != (t = K.flags) ? t : 0, A.q.BYPASSES_VERIFICATION, !0));
                      }
                  },
                  'verify'
              );
    }
    return [
        V,
        ...Q,
        ...(L || null == R
            ? []
            : [
                  J,
                  H && !w
                      ? W
                          ? (0, r.jsx)(
                                a.sNh,
                                {
                                    id: 'removetimeout',
                                    label: v.NW.formatToPlainString(v.t.csKetb, { user: e.username }),
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
                                    label: v.NW.formatToPlainString(v.t.OhsOy8, { user: e.username }),
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
                                label: v.NW.formatToPlainString(v.t['9l/iTU'], { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, a.ZDy)(async () => {
                                        let { default: l } = await n.e('5454').then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, r.jsx)(
                                                l,
                                                I(Z({}, n), {
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
                                label: v.NW.formatToPlainString(v.t.WnpUBg, { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, a.ZDy)(async () => {
                                        let { default: l } = await n.e('43350').then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, r.jsx)(
                                                l,
                                                I(Z({}, n), {
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
