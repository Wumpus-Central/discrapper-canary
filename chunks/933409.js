n.d(t, { Z: () => M }), n(388685), n(997841);
var l = n(54381),
    r = n(473749),
    i = n(95015),
    o = n(442837),
    a = n(481060),
    u = n(91176),
    c = n(749210),
    s = n(616780),
    d = n(251794),
    f = n(386696),
    b = n(71619),
    g = n(946273),
    O = n(910693),
    y = n(592125),
    Z = n(271383),
    v = n(430824),
    E = n(496675),
    m = n(594174),
    j = n(979651),
    p = n(5192),
    S = n(813872),
    h = n(981631),
    _ = n(590433),
    P = n(372897),
    A = n(388032);
function I(e) {
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
function M(e, t, M, x, D) {
    let w = r.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        N = null != x ? [x] : [];
    (0, s.$)(w, "useAdminActionItems"), (0, o.e7)([E.Z], () => E.Z.getGuildVersion(t), [t]);
    let T = (0, o.e7)([v.Z], () => v.Z.getGuild(t), [t]),
        k = (0, o.e7)([m.default], () => {
            var t;
            return (null == (t = m.default.getCurrentUser()) ? void 0 : t.id) === e.id;
        }, [e.id]),
        U = (0, o.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(t, e.id), [t, e.id]),
        L = (0, o.e7)([y.Z], () => y.Z.getChannel(M), [M]),
        [, R] = (0, b.ZP)(e.id, t),
        B = null == L ? void 0 : L.isGuildStageVoice(),
        {
            muted: V,
            deafened: F,
            suppressed: G,
            voiceChannelId: q,
        } = (0, o.cj)([j.Z], () => {
            var n, l, r;
            let i = j.Z.getVoiceState(t, e.id);
            return {
                muted: null != (n = null == i ? void 0 : i.mute) && n,
                deafened: null != (l = null == i ? void 0 : i.deaf) && l,
                suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                voiceChannelId: null == i ? void 0 : i.channelId,
            };
        }),
        Y = (0, o.e7)([Z.ZP], () => Z.ZP.getMember(t, e.id)),
        Q = (0, S.Z)({
            userId: e.id,
            guildId: t,
            channelId: M,
            location: x,
            appContext: D,
        }),
        K = (0, O.sE)(t, {
            location: x,
            targetUserId: e.id,
        }),
        W = (0, f.Z)(t, e.id),
        H =
            null != q && null != M && E.Z.canWithPartialContext(h.Plq.VIEW_CHANNEL, { channelId: q }) && !U
                ? [
                      (!B || (B && !G)) && E.Z.canWithPartialContext(h.Plq.MUTE_MEMBERS, { channelId: M })
                          ? (0, l.jsx)(
                                a.S89,
                                {
                                    id: "voice-mute",
                                    label: A.intl.string(A.t.e9e9Ua),
                                    checked: V,
                                    color: "danger",
                                    action: () => {
                                        !1 === V && K(O.jQ.MUTE), c.Z.setServerMute(t, e.id, !V);
                                    },
                                },
                                "voice-mute",
                            )
                          : null,
                      (!B || (B && !G)) && E.Z.canWithPartialContext(h.Plq.DEAFEN_MEMBERS, { channelId: M })
                          ? (0, l.jsx)(
                                a.S89,
                                {
                                    id: "voice-deafen",
                                    label: A.intl.string(A.t.hMA2GE),
                                    checked: F,
                                    color: "danger",
                                    action: () => c.Z.setServerDeaf(t, e.id, !F),
                                },
                                "voice-deafen",
                            )
                          : null,
                      !k && null != T && E.Z.canWithPartialContext(h.Plq.MOVE_MEMBERS, { channelId: M })
                          ? (0, l.jsx)(
                                a.sNh,
                                {
                                    id: "voice-disconnect",
                                    label: k ? A.intl.string(A.t["6vrfgt"]) : A.intl.string(A.t["/jERiG"]),
                                    color: "danger",
                                    action: () => c.Z.setChannel(t, e.id, null),
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
                    await u.Z.setCommunicationDisabledDuration(
                        n,
                        l,
                        _.DisableCommunicationDuration.DURATION_60_SEC,
                        null,
                        x,
                    ),
                        K(O.jQ.TIMEOUT),
                        (0, a.showToast)(
                            (0, a.createToast)(
                                A.intl.formatToPlainString(A.t.O9C3Nt, {
                                    user: null != (r = p.ZP.getName(n, null, e)) ? r : "",
                                }),
                                a.ToastType.SUCCESS,
                            ),
                        );
                } catch (e) {
                    (0, a.showToast)((0, a.createToast)(A.intl.string(A.t.epyCuh), a.ToastType.FAILURE));
                }
        },
        X = null,
        z =
            null != T &&
            E.Z.canManageUser(h.Plq.MODERATE_MEMBERS, e, T) &&
            E.Z.canManageUser(h.Plq.KICK_MEMBERS, e, T) &&
            E.Z.canManageUser(h.Plq.BAN_MEMBERS, e, T),
        $ = null != T && (E.Z.canManageUser(h.Plq.MANAGE_GUILD, e, T) || E.Z.canManageUser(h.Plq.MANAGE_ROLES, e, T));
    if (
        !k &&
        null != T &&
        null != Y &&
        null != Y.joinedAt &&
        (z || $) &&
        T.features.has(h.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)
    ) {
        var ee;
        X = (0, i.yE)(null != (ee = Y.flags) ? ee : 0, P.q.BYPASSES_VERIFICATION)
            ? (0, l.jsx)(
                  a.sNh,
                  {
                      id: "verify",
                      label: A.intl.string(A.t.NbhSI7),
                      action: () => {
                          var t;
                          return c.Z.setMemberFlags(
                              T.id,
                              e.id,
                              (0, i.mB)(null != (t = Y.flags) ? t : 0, P.q.BYPASSES_VERIFICATION, !1),
                          );
                      },
                  },
                  "verify",
              )
            : (0, l.jsx)(
                  a.sNh,
                  {
                      id: "verify",
                      label: A.intl.string(A.t["6QlTeK"]),
                      action: () => {
                          var t;
                          return c.Z.setMemberFlags(
                              T.id,
                              e.id,
                              (0, i.mB)(null != (t = Y.flags) ? t : 0, P.q.BYPASSES_VERIFICATION, !0),
                          );
                      },
                  },
                  "verify",
              );
    }
    return [
        Q,
        ...H,
        ...(k || null == T
            ? []
            : [
                  X,
                  W && !U
                      ? R
                          ? (0, l.jsx)(
                                a.sNh,
                                {
                                    id: "removetimeout",
                                    label: A.intl.formatToPlainString(A.t.csKeta, { user: e.username }),
                                    color: "danger",
                                    action: () => {
                                        (0, d.q)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: N,
                                        });
                                    },
                                },
                                "removetimeout",
                            )
                          : (0, l.jsx)(
                                a.sNh,
                                {
                                    id: "timeout",
                                    label: A.intl.formatToPlainString(A.t.OhsOy0, { user: e.username }),
                                    color: "danger",
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return J(n, t, e.id);
                                        (0, d.z)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: N,
                                        });
                                    },
                                },
                                "timeout",
                            )
                      : null,
                  (0, g.BK)(e, T)
                      ? (0, l.jsx)(
                            a.sNh,
                            {
                                id: "kick",
                                label: A.intl.formatToPlainString(A.t["9l/iTS"], { user: e.username }),
                                color: "danger",
                                action: () =>
                                    (0, a.ZDy)(async () => {
                                        let { default: r } = await n.e("76826").then(n.bind(n, 495494));
                                        return (n) =>
                                            (0, l.jsx)(
                                                r,
                                                C(I({}, n), {
                                                    location: x,
                                                    guildId: t,
                                                    user: e,
                                                }),
                                            );
                                    }),
                            },
                            "kick",
                        )
                      : null,
                  (0, g.mm)(e, T)
                      ? (0, l.jsx)(
                            a.sNh,
                            {
                                id: "ban",
                                label: A.intl.formatToPlainString(A.t.WnpUBi, { user: e.username }),
                                color: "danger",
                                action: () =>
                                    (0, a.ZDy)(async () => {
                                        let { default: r } = await n.e("10533").then(n.bind(n, 497880));
                                        return (n) =>
                                            (0, l.jsx)(
                                                r,
                                                C(I({}, n), {
                                                    location: x,
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
