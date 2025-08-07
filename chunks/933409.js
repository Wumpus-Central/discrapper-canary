n.d(t, { Z: () => A }), n(388685), n(997841);
var l = n(255367),
    r = n(73800),
    i = n(442837),
    a = n(481060),
    o = n(91176),
    u = n(749210),
    c = n(616780),
    s = n(251794),
    d = n(386696),
    f = n(71619),
    b = n(946273),
    g = n(910693),
    O = n(592125),
    E = n(271383),
    Z = n(430824),
    P = n(496675),
    p = n(594174),
    y = n(979651),
    j = n(630388),
    m = n(5192),
    h = n(813872),
    v = n(981631),
    _ = n(590433),
    S = n(372897),
    M = n(388032);
function N(e) {
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
function C(e, t) {
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
function A(e, t, A, I, T) {
    let D = r.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        x = null != I ? [I] : [];
    (0, c.$)(D), (0, i.e7)([P.Z], () => P.Z.getGuildVersion(t), [t]);
    let w = (0, i.e7)([Z.Z], () => Z.Z.getGuild(t), [t]),
        U = (0, i.e7)([p.default], () => {
            var t;
            return (null == (t = p.default.getCurrentUser()) ? void 0 : t.id) === e.id;
        }, [e.id]),
        R = (0, i.e7)([E.ZP], () => E.ZP.isGuestOrLurker(t, e.id), [t, e.id]),
        k = (0, i.e7)([O.Z], () => O.Z.getChannel(A), [A]),
        [, L] = (0, f.ZP)(e.id, t),
        q = null == k ? void 0 : k.isGuildStageVoice(),
        {
            muted: B,
            deafened: G,
            suppressed: V,
            voiceChannelId: F,
        } = (0, i.cj)([y.Z], () => {
            var n, l, r;
            let i = y.Z.getVoiceState(t, e.id);
            return {
                muted: null != (n = null == i ? void 0 : i.mute) && n,
                deafened: null != (l = null == i ? void 0 : i.deaf) && l,
                suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                voiceChannelId: null == i ? void 0 : i.channelId,
            };
        }),
        K = (0, i.e7)([E.ZP], () => E.ZP.getMember(t, e.id)),
        Y = (0, h.Z)({
            userId: e.id,
            guildId: t,
            channelId: A,
            location: I,
            appContext: T,
        }),
        Q = (0, g.sE)(t, {
            location: I,
            targetUserId: e.id,
        }),
        H = (0, d.Z)(t, e.id),
        W =
            null != F && null != A && P.Z.canWithPartialContext(v.Plq.VIEW_CHANNEL, { channelId: F }) && !R
                ? [
                      (!q || (q && !V)) && P.Z.canWithPartialContext(v.Plq.MUTE_MEMBERS, { channelId: A })
                          ? (0, l.jsx)(
                                a.S89,
                                {
                                    id: "voice-mute",
                                    label: M.intl.string(M.t.e9e9UV),
                                    checked: B,
                                    color: "danger",
                                    action: () => {
                                        !1 === B && Q(g.jQ.MUTE), u.Z.setServerMute(t, e.id, !B);
                                    },
                                },
                                "voice-mute",
                            )
                          : null,
                      (!q || (q && !V)) && P.Z.canWithPartialContext(v.Plq.DEAFEN_MEMBERS, { channelId: A })
                          ? (0, l.jsx)(
                                a.S89,
                                {
                                    id: "voice-deafen",
                                    label: M.intl.string(M.t.hMA2GB),
                                    checked: G,
                                    color: "danger",
                                    action: () => u.Z.setServerDeaf(t, e.id, !G),
                                },
                                "voice-deafen",
                            )
                          : null,
                      !U && null != w && P.Z.canWithPartialContext(v.Plq.MOVE_MEMBERS, { channelId: A })
                          ? (0, l.jsx)(
                                a.sNh,
                                {
                                    id: "voice-disconnect",
                                    label: U ? M.intl.string(M.t["6vrfgo"]) : M.intl.string(M.t["/jERiI"]),
                                    color: "danger",
                                    action: () => u.Z.setChannel(t, e.id, null),
                                },
                                "voice-disconnect",
                            )
                          : null,
                  ]
                : [],
        X = async (t, n, l) => {
            if (t.ctrlKey || t.metaKey)
                try {
                    var r;
                    await o.Z.setCommunicationDisabledDuration(n, l, _.UK.DURATION_60_SEC, null, I),
                        Q(g.jQ.TIMEOUT),
                        (0, a.showToast)(
                            (0, a.createToast)(
                                M.intl.formatToPlainString(M.t.O9C3Nj, {
                                    user: null != (r = m.ZP.getName(n, null, e)) ? r : "",
                                }),
                                a.ToastType.SUCCESS,
                            ),
                        );
                } catch (e) {
                    (0, a.showToast)((0, a.createToast)(M.intl.string(M.t.epyCur), a.ToastType.FAILURE));
                }
        },
        z = null,
        J =
            null != w &&
            P.Z.canManageUser(v.Plq.MODERATE_MEMBERS, e, w) &&
            P.Z.canManageUser(v.Plq.KICK_MEMBERS, e, w) &&
            P.Z.canManageUser(v.Plq.BAN_MEMBERS, e, w),
        $ = null != w && (P.Z.canManageUser(v.Plq.MANAGE_GUILD, e, w) || P.Z.canManageUser(v.Plq.MANAGE_ROLES, e, w));
    if (
        !U &&
        null != w &&
        null != K &&
        null != K.joinedAt &&
        (J || $) &&
        w.features.has(v.oNc.GUILD_ONBOARDING_EVER_ENABLED)
    ) {
        var ee;
        z = (0, j.yE)(null != (ee = K.flags) ? ee : 0, S.q.BYPASSES_VERIFICATION)
            ? (0, l.jsx)(
                  a.sNh,
                  {
                      id: "verify",
                      label: M.intl.string(M.t.NbhSIy),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(
                              w.id,
                              e.id,
                              (0, j.mB)(null != (t = K.flags) ? t : 0, S.q.BYPASSES_VERIFICATION, !1),
                          );
                      },
                  },
                  "verify",
              )
            : (0, l.jsx)(
                  a.sNh,
                  {
                      id: "verify",
                      label: M.intl.string(M.t["6QlTeH"]),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(
                              w.id,
                              e.id,
                              (0, j.mB)(null != (t = K.flags) ? t : 0, S.q.BYPASSES_VERIFICATION, !0),
                          );
                      },
                  },
                  "verify",
              );
    }
    return [
        Y,
        ...W,
        ...(U || null == w
            ? []
            : [
                  z,
                  H && !R
                      ? L
                          ? (0, l.jsx)(
                                a.sNh,
                                {
                                    id: "removetimeout",
                                    label: M.intl.formatToPlainString(M.t.csKetb, { user: e.username }),
                                    color: "danger",
                                    action: () => {
                                        (0, s.q)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: x,
                                        });
                                    },
                                },
                                "removetimeout",
                            )
                          : (0, l.jsx)(
                                a.sNh,
                                {
                                    id: "timeout",
                                    label: M.intl.formatToPlainString(M.t.OhsOy8, { user: e.username }),
                                    color: "danger",
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return X(n, t, e.id);
                                        (0, s.z)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: x,
                                        });
                                    },
                                },
                                "timeout",
                            )
                      : null,
                  (0, b.BK)(e, w)
                      ? (0, l.jsx)(
                            a.sNh,
                            {
                                id: "kick",
                                label: M.intl.formatToPlainString(M.t["9l/iTU"], { user: e.username }),
                                color: "danger",
                                action: () =>
                                    (0, a.ZDy)(async () => {
                                        let { default: r } = await n.e("5454").then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, l.jsx)(
                                                r,
                                                C(N({}, n), {
                                                    location: I,
                                                    guildId: t,
                                                    user: e,
                                                }),
                                            );
                                    }),
                            },
                            "kick",
                        )
                      : null,
                  (0, b.mm)(e, w)
                      ? (0, l.jsx)(
                            a.sNh,
                            {
                                id: "ban",
                                label: M.intl.formatToPlainString(M.t.WnpUBg, { user: e.username }),
                                color: "danger",
                                action: () =>
                                    (0, a.ZDy)(async () => {
                                        let { default: r } = await n.e("43350").then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, l.jsx)(
                                                r,
                                                C(N({}, n), {
                                                    location: I,
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
