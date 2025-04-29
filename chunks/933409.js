n.d(t, { Z: () => N }), n(388685), n(997841);
var l = n(255367),
    i = n(73800),
    r = n(442837),
    a = n(481060),
    o = n(91176),
    u = n(749210),
    s = n(616780),
    c = n(251794),
    d = n(386696),
    g = n(71619),
    f = n(946273),
    P = n(910693),
    E = n(592125),
    Z = n(271383),
    b = n(430824),
    m = n(496675),
    O = n(594174),
    h = n(979651),
    v = n(630388),
    y = n(5192),
    S = n(813872),
    p = n(981631),
    C = n(590433),
    j = n(372897),
    M = n(388032);
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
function T(e, t) {
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
function N(e, t, N, U, A) {
    let _ = i.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        x = null != U ? [U] : [];
    (0, s.$)(_), (0, r.e7)([m.Z], () => m.Z.getGuildVersion(t), [t]);
    let w = (0, r.e7)([b.Z], () => b.Z.getGuild(t), [t]),
        B = (0, r.e7)(
            [O.default],
            () => {
                var t;
                return (null == (t = O.default.getCurrentUser()) ? void 0 : t.id) === e.id;
            },
            [e.id]
        ),
        D = (0, r.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(t, e.id), [t, e.id]),
        k = (0, r.e7)([E.Z], () => E.Z.getChannel(N), [N]),
        [, R] = (0, g.ZP)(e.id, t),
        q = null == k ? void 0 : k.isGuildStageVoice(),
        {
            muted: L,
            deafened: V,
            suppressed: F,
            voiceChannelId: G
        } = (0, r.cj)([h.Z], () => {
            var n, l, i;
            let r = h.Z.getVoiceState(t, e.id);
            return {
                muted: null != (n = null == r ? void 0 : r.mute) && n,
                deafened: null != (l = null == r ? void 0 : r.deaf) && l,
                suppressed: null != (i = null == r ? void 0 : r.suppress) && i,
                voiceChannelId: null == r ? void 0 : r.channelId
            };
        }),
        K = (0, r.e7)([Z.ZP], () => Z.ZP.getMember(t, e.id)),
        W = (0, S.Z)({
            userId: e.id,
            guildId: t,
            channelId: N,
            location: U,
            appContext: A
        }),
        Q = (0, P.sE)(t, {
            location: U,
            targetUserId: e.id
        }),
        Y = (0, d.Z)(t, e.id),
        z =
            null != G && null != N && m.Z.canWithPartialContext(p.Plq.VIEW_CHANNEL, { channelId: G }) && !D
                ? [
                      (!q || (q && !F)) && m.Z.canWithPartialContext(p.Plq.MUTE_MEMBERS, { channelId: N })
                          ? (0, l.jsx)(
                                a.S89,
                                {
                                    id: 'voice-mute',
                                    label: M.intl.string(M.t.e9e9UV),
                                    checked: L,
                                    color: 'danger',
                                    action: () => {
                                        !1 === L && Q(P.jQ.MUTE), u.Z.setServerMute(t, e.id, !L);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!q || (q && !F)) && m.Z.canWithPartialContext(p.Plq.DEAFEN_MEMBERS, { channelId: N })
                          ? (0, l.jsx)(
                                a.S89,
                                {
                                    id: 'voice-deafen',
                                    label: M.intl.string(M.t.hMA2GB),
                                    checked: V,
                                    color: 'danger',
                                    action: () => u.Z.setServerDeaf(t, e.id, !V)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !B && null != w && m.Z.canWithPartialContext(p.Plq.MOVE_MEMBERS, { channelId: N })
                          ? (0, l.jsx)(
                                a.sNh,
                                {
                                    id: 'voice-disconnect',
                                    label: B ? M.intl.string(M.t['6vrfgo']) : M.intl.string(M.t['/jERiI']),
                                    color: 'danger',
                                    action: () => u.Z.setChannel(t, e.id, null)
                                },
                                'voice-disconnect'
                            )
                          : null
                  ]
                : [],
        H = async (t, n, l) => {
            if (t.ctrlKey || t.metaKey)
                try {
                    var i;
                    await o.Z.setCommunicationDisabledDuration(n, l, C.UK.DURATION_60_SEC, null, U), Q(P.jQ.TIMEOUT), (0, a.showToast)((0, a.createToast)(M.intl.formatToPlainString(M.t.O9C3Nj, { user: null != (i = y.ZP.getName(n, null, e)) ? i : '' }), a.ToastType.SUCCESS));
                } catch (e) {
                    (0, a.showToast)((0, a.createToast)(M.intl.string(M.t.epyCur), a.ToastType.FAILURE));
                }
        },
        J = null,
        $ = null != w && m.Z.canManageUser(p.Plq.MODERATE_MEMBERS, e, w) && m.Z.canManageUser(p.Plq.KICK_MEMBERS, e, w) && m.Z.canManageUser(p.Plq.BAN_MEMBERS, e, w),
        X = null != w && (m.Z.canManageUser(p.Plq.MANAGE_GUILD, e, w) || m.Z.canManageUser(p.Plq.MANAGE_ROLES, e, w));
    if (!B && null != w && null != K && null != K.joinedAt && ($ || X) && w.hasFeature(p.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var ee;
        J = (0, v.yE)(null != (ee = K.flags) ? ee : 0, j.q.BYPASSES_VERIFICATION)
            ? (0, l.jsx)(
                  a.sNh,
                  {
                      id: 'verify',
                      label: M.intl.string(M.t.NbhSIy),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(w.id, e.id, (0, v.mB)(null != (t = K.flags) ? t : 0, j.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, l.jsx)(
                  a.sNh,
                  {
                      id: 'verify',
                      label: M.intl.string(M.t['6QlTeH']),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(w.id, e.id, (0, v.mB)(null != (t = K.flags) ? t : 0, j.q.BYPASSES_VERIFICATION, !0));
                      }
                  },
                  'verify'
              );
    }
    return [
        W,
        ...z,
        ...(B || null == w
            ? []
            : [
                  J,
                  Y && !D
                      ? R
                          ? (0, l.jsx)(
                                a.sNh,
                                {
                                    id: 'removetimeout',
                                    label: M.intl.formatToPlainString(M.t.csKetb, { user: e.username }),
                                    color: 'danger',
                                    action: () => {
                                        (0, c.q)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: x
                                        });
                                    }
                                },
                                'removetimeout'
                            )
                          : (0, l.jsx)(
                                a.sNh,
                                {
                                    id: 'timeout',
                                    label: M.intl.formatToPlainString(M.t.OhsOy8, { user: e.username }),
                                    color: 'danger',
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return H(n, t, e.id);
                                        (0, c.z)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: x
                                        });
                                    }
                                },
                                'timeout'
                            )
                      : null,
                  (0, f.BK)(e, w)
                      ? (0, l.jsx)(
                            a.sNh,
                            {
                                id: 'kick',
                                label: M.intl.formatToPlainString(M.t['9l/iTU'], { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, a.ZDy)(async () => {
                                        let { default: i } = await n.e('5454').then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, l.jsx)(
                                                i,
                                                T(I({}, n), {
                                                    location: U,
                                                    guildId: t,
                                                    user: e
                                                })
                                            );
                                    })
                            },
                            'kick'
                        )
                      : null,
                  (0, f.mm)(e, w)
                      ? (0, l.jsx)(
                            a.sNh,
                            {
                                id: 'ban',
                                label: M.intl.formatToPlainString(M.t.WnpUBg, { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, a.ZDy)(async () => {
                                        let { default: i } = await n.e('4114').then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, l.jsx)(
                                                i,
                                                T(I({}, n), {
                                                    location: U,
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
