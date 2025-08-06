n.d(t, { Z: () => N }), n(388685), n(997841);
var l = n(255367),
    i = n(73800),
    r = n(442837),
    o = n(481060),
    a = n(91176),
    s = n(749210),
    u = n(616780),
    d = n(251794),
    c = n(386696),
    g = n(71619),
    Z = n(946273),
    f = n(910693),
    b = n(592125),
    m = n(271383),
    O = n(430824),
    h = n(496675),
    E = n(594174),
    j = n(979651),
    v = n(630388),
    P = n(5192),
    p = n(813872),
    y = n(981631),
    S = n(590433),
    C = n(372897),
    M = n(388032);
function x(e) {
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
function I(e, t) {
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
        U = null != _ ? [_] : [];
    (0, u.$)(T), (0, r.e7)([h.Z], () => h.Z.getGuildVersion(t), [t]);
    let D = (0, r.e7)([O.Z], () => O.Z.getGuild(t), [t]),
        L = (0, r.e7)([E.default], () => {
            var t;
            return (null == (t = E.default.getCurrentUser()) ? void 0 : t.id) === e.id;
        }, [e.id]),
        w = (0, r.e7)([m.ZP], () => m.ZP.isGuestOrLurker(t, e.id), [t, e.id]),
        k = (0, r.e7)([b.Z], () => b.Z.getChannel(N), [N]),
        [, R] = (0, g.ZP)(e.id, t),
        B = null == k ? void 0 : k.isGuildStageVoice(),
        {
            muted: q,
            deafened: V,
            suppressed: G,
            voiceChannelId: F,
        } = (0, r.cj)([j.Z], () => {
            var n, l, i;
            let r = j.Z.getVoiceState(t, e.id);
            return {
                muted: null != (n = null == r ? void 0 : r.mute) && n,
                deafened: null != (l = null == r ? void 0 : r.deaf) && l,
                suppressed: null != (i = null == r ? void 0 : r.suppress) && i,
                voiceChannelId: null == r ? void 0 : r.channelId,
            };
        }),
        Y = (0, r.e7)([m.ZP], () => m.ZP.getMember(t, e.id)),
        H = (0, p.Z)({
            userId: e.id,
            guildId: t,
            channelId: N,
            location: _,
            appContext: A,
        }),
        Q = (0, f.sE)(t, {
            location: _,
            targetUserId: e.id,
        }),
        K = (0, c.Z)(t, e.id),
        W =
            null != F && null != N && h.Z.canWithPartialContext(y.Plq.VIEW_CHANNEL, { channelId: F }) && !w
                ? [
                      (!B || (B && !G)) && h.Z.canWithPartialContext(y.Plq.MUTE_MEMBERS, { channelId: N })
                          ? (0, l.jsx)(
                                o.S89,
                                {
                                    id: "voice-mute",
                                    label: M.intl.string(M.t.e9e9UV),
                                    checked: q,
                                    color: "danger",
                                    action: () => {
                                        !1 === q && Q(f.jQ.MUTE), s.Z.setServerMute(t, e.id, !q);
                                    },
                                },
                                "voice-mute",
                            )
                          : null,
                      (!B || (B && !G)) && h.Z.canWithPartialContext(y.Plq.DEAFEN_MEMBERS, { channelId: N })
                          ? (0, l.jsx)(
                                o.S89,
                                {
                                    id: "voice-deafen",
                                    label: M.intl.string(M.t.hMA2GB),
                                    checked: V,
                                    color: "danger",
                                    action: () => s.Z.setServerDeaf(t, e.id, !V),
                                },
                                "voice-deafen",
                            )
                          : null,
                      !L && null != D && h.Z.canWithPartialContext(y.Plq.MOVE_MEMBERS, { channelId: N })
                          ? (0, l.jsx)(
                                o.sNh,
                                {
                                    id: "voice-disconnect",
                                    label: L ? M.intl.string(M.t["6vrfgo"]) : M.intl.string(M.t["/jERiI"]),
                                    color: "danger",
                                    action: () => s.Z.setChannel(t, e.id, null),
                                },
                                "voice-disconnect",
                            )
                          : null,
                  ]
                : [],
        J = async (t, n, l) => {
            if (t.ctrlKey || t.metaKey)
                try {
                    var i;
                    await a.Z.setCommunicationDisabledDuration(n, l, S.UK.DURATION_60_SEC, null, _),
                        Q(f.jQ.TIMEOUT),
                        (0, o.showToast)(
                            (0, o.createToast)(
                                M.intl.formatToPlainString(M.t.O9C3Nj, {
                                    user: null != (i = P.ZP.getName(n, null, e)) ? i : "",
                                }),
                                o.ToastType.SUCCESS,
                            ),
                        );
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(M.intl.string(M.t.epyCur), o.ToastType.FAILURE));
                }
        },
        X = null,
        z =
            null != D &&
            h.Z.canManageUser(y.Plq.MODERATE_MEMBERS, e, D) &&
            h.Z.canManageUser(y.Plq.KICK_MEMBERS, e, D) &&
            h.Z.canManageUser(y.Plq.BAN_MEMBERS, e, D),
        $ = null != D && (h.Z.canManageUser(y.Plq.MANAGE_GUILD, e, D) || h.Z.canManageUser(y.Plq.MANAGE_ROLES, e, D));
    if (
        !L &&
        null != D &&
        null != Y &&
        null != Y.joinedAt &&
        (z || $) &&
        D.features.has(y.oNc.GUILD_ONBOARDING_EVER_ENABLED)
    ) {
        var ee;
        X = (0, v.yE)(null != (ee = Y.flags) ? ee : 0, C.q.BYPASSES_VERIFICATION)
            ? (0, l.jsx)(
                  o.sNh,
                  {
                      id: "verify",
                      label: M.intl.string(M.t.NbhSIy),
                      action: () => {
                          var t;
                          return s.Z.setMemberFlags(
                              D.id,
                              e.id,
                              (0, v.mB)(null != (t = Y.flags) ? t : 0, C.q.BYPASSES_VERIFICATION, !1),
                          );
                      },
                  },
                  "verify",
              )
            : (0, l.jsx)(
                  o.sNh,
                  {
                      id: "verify",
                      label: M.intl.string(M.t["6QlTeH"]),
                      action: () => {
                          var t;
                          return s.Z.setMemberFlags(
                              D.id,
                              e.id,
                              (0, v.mB)(null != (t = Y.flags) ? t : 0, C.q.BYPASSES_VERIFICATION, !0),
                          );
                      },
                  },
                  "verify",
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
                                    id: "removetimeout",
                                    label: M.intl.formatToPlainString(M.t.csKetb, { user: e.username }),
                                    color: "danger",
                                    action: () => {
                                        (0, d.q)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: U,
                                        });
                                    },
                                },
                                "removetimeout",
                            )
                          : (0, l.jsx)(
                                o.sNh,
                                {
                                    id: "timeout",
                                    label: M.intl.formatToPlainString(M.t.OhsOy8, { user: e.username }),
                                    color: "danger",
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return J(n, t, e.id);
                                        (0, d.z)({
                                            guildId: t,
                                            userId: e.id,
                                            anaylticsLocations: U,
                                        });
                                    },
                                },
                                "timeout",
                            )
                      : null,
                  (0, Z.BK)(e, D)
                      ? (0, l.jsx)(
                            o.sNh,
                            {
                                id: "kick",
                                label: M.intl.formatToPlainString(M.t["9l/iTU"], { user: e.username }),
                                color: "danger",
                                action: () =>
                                    (0, o.ZDy)(async () => {
                                        let { default: i } = await n.e("5454").then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, l.jsx)(
                                                i,
                                                I(x({}, n), {
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
                  (0, Z.mm)(e, D)
                      ? (0, l.jsx)(
                            o.sNh,
                            {
                                id: "ban",
                                label: M.intl.formatToPlainString(M.t.WnpUBg, { user: e.username }),
                                color: "danger",
                                action: () =>
                                    (0, o.ZDy)(async () => {
                                        let { default: i } = await n.e("43350").then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, l.jsx)(
                                                i,
                                                I(x({}, n), {
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
