n.d(t, { Z: () => N }), n(388685), n(997841);
var l = n(54381),
    i = n(473749),
    r = n(95015),
    a = n(442837),
    o = n(481060),
    s = n(91176),
    u = n(749210),
    d = n(616780),
    c = n(251794),
    g = n(386696),
    Z = n(71619),
    f = n(946273),
    b = n(910693),
    m = n(592125),
    O = n(271383),
    h = n(430824),
    E = n(496675),
    v = n(594174),
    j = n(979651),
    P = n(5192),
    p = n(813872),
    S = n(981631),
    y = n(590433),
    C = n(372897),
    I = n(388032);
function M(e) {
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
function N(e, t, N, _, A) {
    let T = i.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
        D = null != _ ? [_] : [];
    (0, d.$)(T, "useAdminActionItems"), (0, a.e7)([E.Z], () => E.Z.getGuildVersion(t), [t]);
    let U = (0, a.e7)([h.Z], () => h.Z.getGuild(t), [t]),
        L = (0, a.e7)([v.default], () => {
            var t;
            return (null == (t = v.default.getCurrentUser()) ? void 0 : t.id) === e.id;
        }, [e.id]),
        w = (0, a.e7)([O.ZP], () => O.ZP.isGuestOrLurker(t, e.id), [t, e.id]),
        k = (0, a.e7)([m.Z], () => m.Z.getChannel(N), [N]),
        [, R] = (0, Z.ZP)(e.id, t),
        B = null == k ? void 0 : k.isGuildStageVoice(),
        {
            muted: V,
            deafened: q,
            suppressed: G,
            voiceChannelId: F,
        } = (0, a.cj)([j.Z], () => {
            var n, l, i;
            let r = j.Z.getVoiceState(t, e.id);
            return {
                muted: null != (n = null == r ? void 0 : r.mute) && n,
                deafened: null != (l = null == r ? void 0 : r.deaf) && l,
                suppressed: null != (i = null == r ? void 0 : r.suppress) && i,
                voiceChannelId: null == r ? void 0 : r.channelId,
            };
        }),
        Y = (0, a.e7)([O.ZP], () => O.ZP.getMember(t, e.id)),
        K = (0, p.Z)({
            userId: e.id,
            guildId: t,
            channelId: N,
            location: _,
            appContext: A,
        }),
        Q = (0, b.sE)(t, {
            location: _,
            targetUserId: e.id,
        }),
        H = (0, g.Z)(t, e.id),
        W =
            null != F && null != N && E.Z.canWithPartialContext(S.Plq.VIEW_CHANNEL, { channelId: F }) && !w
                ? [
                      (!B || (B && !G)) && E.Z.canWithPartialContext(S.Plq.MUTE_MEMBERS, { channelId: N })
                          ? (0, l.jsx)(
                                o.S89,
                                {
                                    id: "voice-mute",
                                    label: I.intl.string(I.t.e9e9Ua),
                                    checked: V,
                                    color: "danger",
                                    action: () => {
                                        !1 === V && Q(b.jQ.MUTE), u.Z.setServerMute(t, e.id, !V);
                                    },
                                },
                                "voice-mute",
                            )
                          : null,
                      (!B || (B && !G)) && E.Z.canWithPartialContext(S.Plq.DEAFEN_MEMBERS, { channelId: N })
                          ? (0, l.jsx)(
                                o.S89,
                                {
                                    id: "voice-deafen",
                                    label: I.intl.string(I.t.hMA2GE),
                                    checked: q,
                                    color: "danger",
                                    action: () => u.Z.setServerDeaf(t, e.id, !q),
                                },
                                "voice-deafen",
                            )
                          : null,
                      !L && null != U && E.Z.canWithPartialContext(S.Plq.MOVE_MEMBERS, { channelId: N })
                          ? (0, l.jsx)(
                                o.sNh,
                                {
                                    id: "voice-disconnect",
                                    label: L ? I.intl.string(I.t["6vrfgt"]) : I.intl.string(I.t["/jERiG"]),
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
                    var i;
                    await s.Z.setCommunicationDisabledDuration(
                        n,
                        l,
                        y.DisableCommunicationDuration.DURATION_60_SEC,
                        null,
                        _,
                    ),
                        Q(b.jQ.TIMEOUT),
                        (0, o.showToast)(
                            (0, o.createToast)(
                                I.intl.formatToPlainString(I.t.O9C3Nt, {
                                    user: null != (i = P.ZP.getName(n, null, e)) ? i : "",
                                }),
                                o.ToastType.SUCCESS,
                            ),
                        );
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(I.intl.string(I.t.epyCuh), o.ToastType.FAILURE));
                }
        },
        J = null,
        z =
            null != U &&
            E.Z.canManageUser(S.Plq.MODERATE_MEMBERS, e, U) &&
            E.Z.canManageUser(S.Plq.KICK_MEMBERS, e, U) &&
            E.Z.canManageUser(S.Plq.BAN_MEMBERS, e, U),
        $ = null != U && (E.Z.canManageUser(S.Plq.MANAGE_GUILD, e, U) || E.Z.canManageUser(S.Plq.MANAGE_ROLES, e, U));
    if (
        !L &&
        null != U &&
        null != Y &&
        null != Y.joinedAt &&
        (z || $) &&
        U.features.has(S.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)
    ) {
        var ee;
        J = (0, r.yE)(null != (ee = Y.flags) ? ee : 0, C.q.BYPASSES_VERIFICATION)
            ? (0, l.jsx)(
                  o.sNh,
                  {
                      id: "verify",
                      label: I.intl.string(I.t.NbhSI7),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(
                              U.id,
                              e.id,
                              (0, r.mB)(null != (t = Y.flags) ? t : 0, C.q.BYPASSES_VERIFICATION, !1),
                          );
                      },
                  },
                  "verify",
              )
            : (0, l.jsx)(
                  o.sNh,
                  {
                      id: "verify",
                      label: I.intl.string(I.t["6QlTeK"]),
                      action: () => {
                          var t;
                          return u.Z.setMemberFlags(
                              U.id,
                              e.id,
                              (0, r.mB)(null != (t = Y.flags) ? t : 0, C.q.BYPASSES_VERIFICATION, !0),
                          );
                      },
                  },
                  "verify",
              );
    }
    return [
        K,
        ...W,
        ...(L || null == U
            ? []
            : [
                  J,
                  H && !w
                      ? R
                          ? (0, l.jsx)(
                                o.sNh,
                                {
                                    id: "removetimeout",
                                    label: I.intl.formatToPlainString(I.t.csKeta, { user: e.username }),
                                    color: "danger",
                                    action: () => {
                                        (0, c.q)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: D,
                                        });
                                    },
                                },
                                "removetimeout",
                            )
                          : (0, l.jsx)(
                                o.sNh,
                                {
                                    id: "timeout",
                                    label: I.intl.formatToPlainString(I.t.OhsOy0, { user: e.username }),
                                    color: "danger",
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return X(n, t, e.id);
                                        (0, c.z)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: D,
                                        });
                                    },
                                },
                                "timeout",
                            )
                      : null,
                  (0, f.BK)(e, U)
                      ? (0, l.jsx)(
                            o.sNh,
                            {
                                id: "kick",
                                label: I.intl.formatToPlainString(I.t["9l/iTS"], { user: e.username }),
                                color: "danger",
                                action: () =>
                                    (0, o.ZDy)(async () => {
                                        let { default: i } = await n.e("76826").then(n.bind(n, 495494));
                                        return (n) =>
                                            (0, l.jsx)(
                                                i,
                                                x(M({}, n), {
                                                    location: _,
                                                    guildId: t,
                                                    user: e,
                                                }),
                                            );
                                    }),
                            },
                            "kick",
                        )
                      : null,
                  (0, f.mm)(e, U)
                      ? (0, l.jsx)(
                            o.sNh,
                            {
                                id: "ban",
                                label: I.intl.formatToPlainString(I.t.WnpUBi, { user: e.username }),
                                color: "danger",
                                action: () =>
                                    (0, o.ZDy)(async () => {
                                        let { default: i } = await n.e("10533").then(n.bind(n, 497880));
                                        return (n) =>
                                            (0, l.jsx)(
                                                i,
                                                x(M({}, n), {
                                                    location: _,
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
