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
    g = n(71619),
    f = n(946273),
    Z = n(910693),
    b = n(592125),
    O = n(271383),
    m = n(430824),
    h = n(496675),
    j = n(594174),
    v = n(979651),
    E = n(630388),
    p = n(5192),
    P = n(813872),
    y = n(981631),
    S = n(590433),
    C = n(372897),
    M = n(388032);
function x(e) {
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
function N(e, t) {
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
function I(e, t, I, T, U) {
    let _ = i.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        A = null != T ? [T] : [];
    (0, u.$)(_), (0, r.e7)([h.Z], () => h.Z.getGuildVersion(t), [t]);
    let D = (0, r.e7)([m.Z], () => m.Z.getGuild(t), [t]),
        L = (0, r.e7)(
            [j.default],
            () => {
                var t;
                return (null == (t = j.default.getCurrentUser()) ? void 0 : t.id) === e.id;
            },
            [e.id]
        ),
        w = (0, r.e7)([O.ZP], () => O.ZP.isGuestOrLurker(t, e.id), [t, e.id]),
        k = (0, r.e7)([b.Z], () => b.Z.getChannel(I), [I]),
        [, R] = (0, g.ZP)(e.id, t),
        B = null == k ? void 0 : k.isGuildStageVoice(),
        {
            muted: V,
            deafened: q,
            suppressed: G,
            voiceChannelId: F
        } = (0, r.cj)([v.Z], () => {
            var n, l, i;
            let r = v.Z.getVoiceState(t, e.id);
            return {
                muted: null != (n = null == r ? void 0 : r.mute) && n,
                deafened: null != (l = null == r ? void 0 : r.deaf) && l,
                suppressed: null != (i = null == r ? void 0 : r.suppress) && i,
                voiceChannelId: null == r ? void 0 : r.channelId
            };
        }),
        Y = (0, r.e7)([O.ZP], () => O.ZP.getMember(t, e.id)),
        H = (0, P.Z)({
            userId: e.id,
            guildId: t,
            channelId: I,
            location: T,
            appContext: U
        }),
        Q = (0, Z.sE)(t, {
            location: T,
            targetUserId: e.id
        }),
        K = (0, c.Z)(t, e.id),
        W =
            null != F && null != I && h.Z.canWithPartialContext(y.Plq.VIEW_CHANNEL, { channelId: F }) && !w
                ? [
                      (!B || (B && !G)) && h.Z.canWithPartialContext(y.Plq.MUTE_MEMBERS, { channelId: I })
                          ? (0, l.jsx)(
                                o.S89,
                                {
                                    id: 'voice-mute',
                                    label: M.intl.string(M.t.e9e9UV),
                                    checked: V,
                                    color: 'danger',
                                    action: () => {
                                        !1 === V && Q(Z.jQ.MUTE), s.Z.setServerMute(t, e.id, !V);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!B || (B && !G)) && h.Z.canWithPartialContext(y.Plq.DEAFEN_MEMBERS, { channelId: I })
                          ? (0, l.jsx)(
                                o.S89,
                                {
                                    id: 'voice-deafen',
                                    label: M.intl.string(M.t.hMA2GB),
                                    checked: q,
                                    color: 'danger',
                                    action: () => s.Z.setServerDeaf(t, e.id, !q)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !L && null != D && h.Z.canWithPartialContext(y.Plq.MOVE_MEMBERS, { channelId: I })
                          ? (0, l.jsx)(
                                o.sNh,
                                {
                                    id: 'voice-disconnect',
                                    label: L ? M.intl.string(M.t['6vrfgo']) : M.intl.string(M.t['/jERiI']),
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
                    await a.Z.setCommunicationDisabledDuration(n, l, S.UK.DURATION_60_SEC, null, T), Q(Z.jQ.TIMEOUT), (0, o.showToast)((0, o.createToast)(M.intl.formatToPlainString(M.t.O9C3Nj, { user: null != (i = p.ZP.getName(n, null, e)) ? i : '' }), o.ToastType.SUCCESS));
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(M.intl.string(M.t.epyCur), o.ToastType.FAILURE));
                }
        },
        X = null,
        z = null != D && h.Z.canManageUser(y.Plq.MODERATE_MEMBERS, e, D) && h.Z.canManageUser(y.Plq.KICK_MEMBERS, e, D) && h.Z.canManageUser(y.Plq.BAN_MEMBERS, e, D),
        $ = null != D && (h.Z.canManageUser(y.Plq.MANAGE_GUILD, e, D) || h.Z.canManageUser(y.Plq.MANAGE_ROLES, e, D));
    if (!L && null != D && null != Y && null != Y.joinedAt && (z || $) && D.hasFeature(y.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var ee;
        X = (0, E.yE)(null != (ee = Y.flags) ? ee : 0, C.q.BYPASSES_VERIFICATION)
            ? (0, l.jsx)(
                  o.sNh,
                  {
                      id: 'verify',
                      label: M.intl.string(M.t.NbhSIy),
                      action: () => {
                          var t;
                          return s.Z.setMemberFlags(D.id, e.id, (0, E.mB)(null != (t = Y.flags) ? t : 0, C.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, l.jsx)(
                  o.sNh,
                  {
                      id: 'verify',
                      label: M.intl.string(M.t['6QlTeH']),
                      action: () => {
                          var t;
                          return s.Z.setMemberFlags(D.id, e.id, (0, E.mB)(null != (t = Y.flags) ? t : 0, C.q.BYPASSES_VERIFICATION, !0));
                      }
                  },
                  'verify'
              );
    }
    return [
        H,
        ...W,
        ...(L || null == D
            ? []
            : [
                  X,
                  K && !w
                      ? R
                          ? (0, l.jsx)(
                                o.sNh,
                                {
                                    id: 'removetimeout',
                                    label: M.intl.formatToPlainString(M.t.csKetb, { user: e.username }),
                                    color: 'danger',
                                    action: () => {
                                        (0, d.q)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: A
                                        });
                                    }
                                },
                                'removetimeout'
                            )
                          : (0, l.jsx)(
                                o.sNh,
                                {
                                    id: 'timeout',
                                    label: M.intl.formatToPlainString(M.t.OhsOy8, { user: e.username }),
                                    color: 'danger',
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return J(n, t, e.id);
                                        (0, d.z)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: A
                                        });
                                    }
                                },
                                'timeout'
                            )
                      : null,
                  (0, f.BK)(e, D)
                      ? (0, l.jsx)(
                            o.sNh,
                            {
                                id: 'kick',
                                label: M.intl.formatToPlainString(M.t['9l/iTU'], { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, o.ZDy)(async () => {
                                        let { default: i } = await n.e('5454').then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, l.jsx)(
                                                i,
                                                N(x({}, n), {
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
                  (0, f.mm)(e, D)
                      ? (0, l.jsx)(
                            o.sNh,
                            {
                                id: 'ban',
                                label: M.intl.formatToPlainString(M.t.WnpUBg, { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, o.ZDy)(async () => {
                                        let { default: i } = await n.e('4114').then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, l.jsx)(
                                                i,
                                                N(x({}, n), {
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
