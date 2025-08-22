n.d(t, { Z: () => x }), n(388685), n(997841);
var l = n(951288),
    r = n(647438),
    i = n(442837),
    o = n(481060),
    a = n(91176),
    u = n(749210),
    c = n(616780),
    s = n(251794),
    d = n(386696),
    f = n(71619),
    b = n(946273),
    g = n(910693),
    O = n(592125),
    y = n(271383),
    Z = n(430824),
    j = n(496675),
    v = n(594174),
    m = n(979651),
    E = n(630388),
    p = n(5192),
    S = n(813872),
    _ = n(981631),
    h = n(590433),
    P = n(372897),
    I = n(388032);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function M(e, t) {
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
function x(e, t, x, C, D) {
    let w = r.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        N = null != C ? [C] : [];
    (0, c.$)(w), (0, i.e7)([j.Z], () => j.Z.getGuildVersion(t), [t]);
    let T = (0, i.e7)([Z.Z], () => Z.Z.getGuild(t), [t]),
        U = (0, i.e7)([v.default], () => {
            var t;
            return (null == (t = v.default.getCurrentUser()) ? void 0 : t.id) === e.id;
        }, [e.id]),
        k = (0, i.e7)([y.ZP], () => y.ZP.isGuestOrLurker(t, e.id), [t, e.id]),
        L = (0, i.e7)([O.Z], () => O.Z.getChannel(x), [x]),
        [, R] = (0, f.ZP)(e.id, t),
        B = null == L ? void 0 : L.isGuildStageVoice(),
        {
            muted: V,
            deafened: F,
            suppressed: G,
            voiceChannelId: q,
        } = (0, i.cj)([m.Z], () => {
            var n, l, r;
            let i = m.Z.getVoiceState(t, e.id);
            return {
                muted: null != (n = null == i ? void 0 : i.mute) && n,
                deafened: null != (l = null == i ? void 0 : i.deaf) && l,
                suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                voiceChannelId: null == i ? void 0 : i.channelId,
            };
        }),
        Y = (0, i.e7)([y.ZP], () => y.ZP.getMember(t, e.id)),
        Q = (0, S.Z)({
            userId: e.id,
            guildId: t,
            channelId: x,
            location: C,
            appContext: D,
        }),
        K = (0, g.sE)(t, {
            location: C,
            targetUserId: e.id,
        }),
        W = (0, d.Z)(t, e.id),
        H =
            null != q && null != x && j.Z.canWithPartialContext(_.Plq.VIEW_CHANNEL, { channelId: q }) && !k
                ? [
                      (!B || (B && !G)) && j.Z.canWithPartialContext(_.Plq.MUTE_MEMBERS, { channelId: x })
                          ? (0, l.jsx)(
                                o.S89,
                                {
                                    id: "voice-mute",
                                    label: I.intl.string(I.t.e9e9UV),
                                    checked: V,
                                    color: "danger",
                                    action: () => {
                                        !1 === V && K(g.jQ.MUTE), u.Z.setServerMute(t, e.id, !V);
                                    },
                                },
                                "voice-mute",
                            )
                          : null,
                      (!B || (B && !G)) && j.Z.canWithPartialContext(_.Plq.DEAFEN_MEMBERS, { channelId: x })
                          ? (0, l.jsx)(
                                o.S89,
                                {
                                    id: "voice-deafen",
                                    label: I.intl.string(I.t.hMA2GB),
                                    checked: F,
                                    color: "danger",
                                    action: () => u.Z.setServerDeaf(t, e.id, !F),
                                },
                                "voice-deafen",
                            )
                          : null,
                      !U && null != T && j.Z.canWithPartialContext(_.Plq.MOVE_MEMBERS, { channelId: x })
                          ? (0, l.jsx)(
                                o.sNh,
                                {
                                    id: "voice-disconnect",
                                    label: U ? I.intl.string(I.t["6vrfgo"]) : I.intl.string(I.t["/jERiI"]),
                                    color: "danger",
                                    action: () => u.Z.setChannel(t, e.id, null),
                                },
                                "voice-disconnect",
                            )
                          : null,
                  ]
                : [],
        J = async (t, n, l) => {
            if (t.ctrlKey || t.metaKey)
                try {
                    var r;
                    await a.Z.setCommunicationDisabledDuration(n, l, h.UK.DURATION_60_SEC, null, C),
                        K(g.jQ.TIMEOUT),
                        (0, o.showToast)(
                            (0, o.createToast)(
                                I.intl.formatToPlainString(I.t.O9C3Nj, {
                                    user: null != (r = p.ZP.getName(n, null, e)) ? r : "",
                                }),
                                o.ToastType.SUCCESS,
                            ),
                        );
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(I.intl.string(I.t.epyCur), o.ToastType.FAILURE));
                }
        },
        X = null,
        z =
            null != T &&
            j.Z.canManageUser(_.Plq.MODERATE_MEMBERS, e, T) &&
            j.Z.canManageUser(_.Plq.KICK_MEMBERS, e, T) &&
            j.Z.canManageUser(_.Plq.BAN_MEMBERS, e, T),
        $ = null != T && (j.Z.canManageUser(_.Plq.MANAGE_GUILD, e, T) || j.Z.canManageUser(_.Plq.MANAGE_ROLES, e, T));
    if (
        !U &&
        null != T &&
        null != Y &&
        null != Y.joinedAt &&
        (z || $) &&
        T.features.has(_.oNc.GUILD_ONBOARDING_EVER_ENABLED)
    ) {
        var ee;
        X = (0, E.yE)(null != (ee = Y.flags) ? ee : 0, P.q.BYPASSES_VERIFICATION)
            ? (0, l.jsx)(
                  o.sNh,
                  {
                      id: "verify",
                      label: I.intl.string(I.t.NbhSIy),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(
                              T.id,
                              e.id,
                              (0, E.mB)(null != (t = Y.flags) ? t : 0, P.q.BYPASSES_VERIFICATION, !1),
                          );
                      },
                  },
                  "verify",
              )
            : (0, l.jsx)(
                  o.sNh,
                  {
                      id: "verify",
                      label: I.intl.string(I.t["6QlTeH"]),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(
                              T.id,
                              e.id,
                              (0, E.mB)(null != (t = Y.flags) ? t : 0, P.q.BYPASSES_VERIFICATION, !0),
                          );
                      },
                  },
                  "verify",
              );
    }
    return [
        Q,
        ...H,
        ...(U || null == T
            ? []
            : [
                  X,
                  W && !k
                      ? R
                          ? (0, l.jsx)(
                                o.sNh,
                                {
                                    id: "removetimeout",
                                    label: I.intl.formatToPlainString(I.t.csKetb, { user: e.username }),
                                    color: "danger",
                                    action: () => {
                                        (0, s.q)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: N,
                                        });
                                    },
                                },
                                "removetimeout",
                            )
                          : (0, l.jsx)(
                                o.sNh,
                                {
                                    id: "timeout",
                                    label: I.intl.formatToPlainString(I.t.OhsOy8, { user: e.username }),
                                    color: "danger",
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return J(n, t, e.id);
                                        (0, s.z)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: N,
                                        });
                                    },
                                },
                                "timeout",
                            )
                      : null,
                  (0, b.BK)(e, T)
                      ? (0, l.jsx)(
                            o.sNh,
                            {
                                id: "kick",
                                label: I.intl.formatToPlainString(I.t["9l/iTU"], { user: e.username }),
                                color: "danger",
                                action: () =>
                                    (0, o.ZDy)(async () => {
                                        let { default: r } = await n.e("5454").then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, l.jsx)(
                                                r,
                                                M(A({}, n), {
                                                    location: C,
                                                    guildId: t,
                                                    user: e,
                                                }),
                                            );
                                    }),
                            },
                            "kick",
                        )
                      : null,
                  (0, b.mm)(e, T)
                      ? (0, l.jsx)(
                            o.sNh,
                            {
                                id: "ban",
                                label: I.intl.formatToPlainString(I.t.WnpUBg, { user: e.username }),
                                color: "danger",
                                action: () =>
                                    (0, o.ZDy)(async () => {
                                        let { default: r } = await n.e("43350").then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, l.jsx)(
                                                r,
                                                M(A({}, n), {
                                                    location: C,
                                                    guildId: t,
                                                    user: e,
                                                }),
                                            );
                                    }),
                            },
                            "ban",
                        )
                      : null,
              ]),
    ];
}
