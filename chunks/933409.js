n.d(t, { Z: () => I }), n(388685), n(997841);
var l = n(951288),
    r = n(647438),
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
    y = n(430824),
    p = n(496675),
    Z = n(594174),
    P = n(979651),
    m = n(630388),
    j = n(5192),
    v = n(813872),
    h = n(981631),
    _ = n(590433),
    S = n(372897),
    M = n(388032);
function C(e) {
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
function I(e, t, I, A, T) {
    let D = r.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        w = null != A ? [A] : [];
    (0, c.$)(D, "useAdminActionItems"), (0, i.e7)([p.Z], () => p.Z.getGuildVersion(t), [t]);
    let x = (0, i.e7)([y.Z], () => y.Z.getGuild(t), [t]),
        U = (0, i.e7)([Z.default], () => {
            var t;
            return (null == (t = Z.default.getCurrentUser()) ? void 0 : t.id) === e.id;
        }, [e.id]),
        R = (0, i.e7)([E.ZP], () => E.ZP.isGuestOrLurker(t, e.id), [t, e.id]),
        k = (0, i.e7)([O.Z], () => O.Z.getChannel(I), [I]),
        [, L] = (0, f.ZP)(e.id, t),
        q = null == k ? void 0 : k.isGuildStageVoice(),
        {
            muted: B,
            deafened: G,
            suppressed: V,
            voiceChannelId: F,
        } = (0, i.cj)([P.Z], () => {
            var n, l, r;
            let i = P.Z.getVoiceState(t, e.id);
            return {
                muted: null != (n = null == i ? void 0 : i.mute) && n,
                deafened: null != (l = null == i ? void 0 : i.deaf) && l,
                suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                voiceChannelId: null == i ? void 0 : i.channelId,
            };
        }),
        Y = (0, i.e7)([E.ZP], () => E.ZP.getMember(t, e.id)),
        K = (0, v.Z)({
            userId: e.id,
            guildId: t,
            channelId: I,
            location: A,
            appContext: T,
        }),
        Q = (0, g.sE)(t, {
            location: A,
            targetUserId: e.id,
        }),
        H = (0, d.Z)(t, e.id),
        W =
            null != F && null != I && p.Z.canWithPartialContext(h.Plq.VIEW_CHANNEL, { channelId: F }) && !R
                ? [
                      (!q || (q && !V)) && p.Z.canWithPartialContext(h.Plq.MUTE_MEMBERS, { channelId: I })
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
                      (!q || (q && !V)) && p.Z.canWithPartialContext(h.Plq.DEAFEN_MEMBERS, { channelId: I })
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
                      !U && null != x && p.Z.canWithPartialContext(h.Plq.MOVE_MEMBERS, { channelId: I })
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
                    await o.Z.setCommunicationDisabledDuration(
                        n,
                        l,
                        _.DisableCommunicationDuration.DURATION_60_SEC,
                        null,
                        A,
                    ),
                        Q(g.jQ.TIMEOUT),
                        (0, a.showToast)(
                            (0, a.createToast)(
                                M.intl.formatToPlainString(M.t.O9C3Nj, {
                                    user: null != (r = j.ZP.getName(n, null, e)) ? r : "",
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
            null != x &&
            p.Z.canManageUser(h.Plq.MODERATE_MEMBERS, e, x) &&
            p.Z.canManageUser(h.Plq.KICK_MEMBERS, e, x) &&
            p.Z.canManageUser(h.Plq.BAN_MEMBERS, e, x),
        $ = null != x && (p.Z.canManageUser(h.Plq.MANAGE_GUILD, e, x) || p.Z.canManageUser(h.Plq.MANAGE_ROLES, e, x));
    if (
        !U &&
        null != x &&
        null != Y &&
        null != Y.joinedAt &&
        (J || $) &&
        x.features.has(h.oNc.GUILD_ONBOARDING_EVER_ENABLED)
    ) {
        var ee;
        z = (0, m.yE)(null != (ee = Y.flags) ? ee : 0, S.q.BYPASSES_VERIFICATION)
            ? (0, l.jsx)(
                  a.sNh,
                  {
                      id: "verify",
                      label: M.intl.string(M.t.NbhSIy),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(
                              x.id,
                              e.id,
                              (0, m.mB)(null != (t = Y.flags) ? t : 0, S.q.BYPASSES_VERIFICATION, !1),
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
                              x.id,
                              e.id,
                              (0, m.mB)(null != (t = Y.flags) ? t : 0, S.q.BYPASSES_VERIFICATION, !0),
                          );
                      },
                  },
                  "verify",
              );
    }
    return [
        K,
        ...W,
        ...(U || null == x
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
                                            anaylticsLocations: w,
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
                                            anaylticsLocations: w,
                                        });
                                    },
                                },
                                "timeout",
                            )
                      : null,
                  (0, b.BK)(e, x)
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
                                                N(C({}, n), {
                                                    location: A,
                                                    guildId: t,
                                                    user: e,
                                                }),
                                            );
                                    }),
                            },
                            "kick",
                        )
                      : null,
                  (0, b.mm)(e, x)
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
                                                N(C({}, n), {
                                                    location: A,
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
