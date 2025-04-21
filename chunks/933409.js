n.d(t, { Z: () => A }), n(388685), n(997841);
var l = n(200651),
    i = n(192379),
    r = n(442837),
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
    E = n(594174),
    y = n(979651),
    P = n(630388),
    h = n(5192),
    p = n(813872),
    j = n(981631),
    S = n(590433),
    M = n(372897),
    C = n(388032);
function I(e) {
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
function D(e, t) {
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
function A(e, t, A, _, x) {
    let N = i.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        T = null != _ ? [_] : [];
    (0, u.$)(N), (0, r.e7)([v.Z], () => v.Z.getGuildVersion(t), [t]);
    let U = (0, r.e7)([Z.Z], () => Z.Z.getGuild(t), [t]),
        L = (0, r.e7)(
            [E.default],
            () => {
                var t;
                return (null == (t = E.default.getCurrentUser()) ? void 0 : t.id) === e.id;
            },
            [e.id]
        ),
        w = (0, r.e7)([O.ZP], () => O.ZP.isGuestOrLurker(t, e.id), [t, e.id]),
        k = (0, r.e7)([m.Z], () => m.Z.getChannel(A), [A]),
        [, B] = (0, g.ZP)(e.id, t),
        R = null == k ? void 0 : k.isGuildStageVoice(),
        {
            muted: V,
            deafened: q,
            suppressed: F,
            voiceChannelId: G
        } = (0, r.cj)([y.Z], () => {
            var n, l, i;
            let r = y.Z.getVoiceState(t, e.id);
            return {
                muted: null != (n = null == r ? void 0 : r.mute) && n,
                deafened: null != (l = null == r ? void 0 : r.deaf) && l,
                suppressed: null != (i = null == r ? void 0 : r.suppress) && i,
                voiceChannelId: null == r ? void 0 : r.channelId
            };
        }),
        K = (0, r.e7)([O.ZP], () => O.ZP.getMember(t, e.id)),
        W = (0, p.Z)({
            userId: e.id,
            guildId: t,
            channelId: A,
            location: _,
            appContext: x
        }),
        J = (0, b.sE)(t, {
            location: _,
            targetUserId: e.id
        }),
        Y = (0, d.Z)(t, e.id),
        H =
            null != G && null != A && v.Z.canWithPartialContext(j.Plq.VIEW_CHANNEL, { channelId: G }) && !w
                ? [
                      (!R || (R && !F)) && v.Z.canWithPartialContext(j.Plq.MUTE_MEMBERS, { channelId: A })
                          ? (0, l.jsx)(
                                a.S89,
                                {
                                    id: 'voice-mute',
                                    label: C.intl.string(C.t.e9e9UV),
                                    checked: V,
                                    color: 'danger',
                                    action: () => {
                                        !1 === V && J(b.jQ.MUTE), s.Z.setServerMute(t, e.id, !V);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!R || (R && !F)) && v.Z.canWithPartialContext(j.Plq.DEAFEN_MEMBERS, { channelId: A })
                          ? (0, l.jsx)(
                                a.S89,
                                {
                                    id: 'voice-deafen',
                                    label: C.intl.string(C.t.hMA2GB),
                                    checked: q,
                                    color: 'danger',
                                    action: () => s.Z.setServerDeaf(t, e.id, !q)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !L && null != U && v.Z.canWithPartialContext(j.Plq.MOVE_MEMBERS, { channelId: A })
                          ? (0, l.jsx)(
                                a.sNh,
                                {
                                    id: 'voice-disconnect',
                                    label: L ? C.intl.string(C.t['6vrfgo']) : C.intl.string(C.t['/jERiI']),
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
                    var i;
                    await o.Z.setCommunicationDisabledDuration(n, l, S.UK.DURATION_60_SEC, null, _), J(b.jQ.TIMEOUT), (0, a.showToast)((0, a.createToast)(C.intl.formatToPlainString(C.t.O9C3Nj, { user: null != (i = h.ZP.getName(n, null, e)) ? i : '' }), a.ToastType.SUCCESS));
                } catch (e) {
                    (0, a.showToast)((0, a.createToast)(C.intl.string(C.t.epyCur), a.ToastType.FAILURE));
                }
        },
        Q = null,
        $ = null != U && v.Z.canManageUser(j.Plq.MODERATE_MEMBERS, e, U) && v.Z.canManageUser(j.Plq.KICK_MEMBERS, e, U) && v.Z.canManageUser(j.Plq.BAN_MEMBERS, e, U),
        X = null != U && (v.Z.canManageUser(j.Plq.MANAGE_GUILD, e, U) || v.Z.canManageUser(j.Plq.MANAGE_ROLES, e, U));
    if (!L && null != U && null != K && null != K.joinedAt && ($ || X) && U.hasFeature(j.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var ee;
        Q = (0, P.yE)(null != (ee = K.flags) ? ee : 0, M.q.BYPASSES_VERIFICATION)
            ? (0, l.jsx)(
                  a.sNh,
                  {
                      id: 'verify',
                      label: C.intl.string(C.t.NbhSIy),
                      action: () => {
                          var t;
                          return s.Z.setMemberFlags(U.id, e.id, (0, P.mB)(null != (t = K.flags) ? t : 0, M.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, l.jsx)(
                  a.sNh,
                  {
                      id: 'verify',
                      label: C.intl.string(C.t['6QlTeH']),
                      action: () => {
                          var t;
                          return s.Z.setMemberFlags(U.id, e.id, (0, P.mB)(null != (t = K.flags) ? t : 0, M.q.BYPASSES_VERIFICATION, !0));
                      }
                  },
                  'verify'
              );
    }
    return [
        W,
        ...H,
        ...(L || null == U
            ? []
            : [
                  Q,
                  Y && !w
                      ? B
                          ? (0, l.jsx)(
                                a.sNh,
                                {
                                    id: 'removetimeout',
                                    label: C.intl.formatToPlainString(C.t.csKetb, { user: e.username }),
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
                                    label: C.intl.formatToPlainString(C.t.OhsOy8, { user: e.username }),
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
                                label: C.intl.formatToPlainString(C.t['9l/iTU'], { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, a.ZDy)(async () => {
                                        let { default: i } = await n.e('5454').then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, l.jsx)(
                                                i,
                                                D(I({}, n), {
                                                    location: _,
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
                                label: C.intl.formatToPlainString(C.t.WnpUBg, { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, a.ZDy)(async () => {
                                        let { default: i } = await n.e('4114').then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, l.jsx)(
                                                i,
                                                D(I({}, n), {
                                                    location: _,
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
