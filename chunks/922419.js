i.d(t, { A: () => tN }), i(321073), i(667532);
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    c = i(451988),
    o = i(717558),
    d = i(933958),
    u = i(627363),
    m = i(429913),
    A = i(313961);
i(403362), i(311043);
var h = i(569926),
    p = i(550946),
    g = i(962392),
    x = i(873174),
    I = i(562708),
    v = i(990078),
    f = i(192308),
    N = i(717421),
    y = i(922016),
    S = i(939249),
    j = i(283973),
    E = i(834730),
    C = i(789645),
    _ = i(320448),
    T = i(964486),
    b = i(775602),
    O = i(793574),
    P = i(688810),
    G = i(139286),
    V = i(713517),
    k = i(71393),
    L = i(576705),
    R = i(174459),
    D = i(284009),
    M = i.n(D),
    U = i(177953),
    w = i(133171),
    z = i(652215),
    H = i(778712),
    W = i(97808),
    F = i(863610),
    Y = i(376728),
    B = i(774300),
    $ = i(566903),
    K = i(714114),
    q = i(864436),
    X = i(835072),
    J = i(47167),
    Z = i(854627),
    Q = i(10862),
    ee = i(164891),
    et = i(135635),
    ei = i(696451),
    el = i(958590),
    en = i(290863),
    es = i(427262),
    ea = i(420266),
    er = i(375708),
    ec = i(176277),
    eo = i(824078),
    ed = i(518229);
let eu = "VoiceInviteSuggestionsPopover";
function em(e) {
    let { channel: t, onHoverOrFocus: s, setPopoutRef: r, closePopout: c } = e,
        o = n.useRef(null),
        d = (0, V.A)(o),
        u = (0, ea.kt)({ channel: t }),
        { enabled: m } = ee.A.useExperiment({ guildId: t.guild_id, location: "VoiceInviteSuggestionsPopover" }),
        { analyticsLocations: A } = (0, P.Ay)(O.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, G.A)({
        name: I.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
        type: I.ImpressionTypes.POPOUT,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: A },
    }),
        n.useEffect(() => {
            r?.(o.current);
        }, [r]),
        n.useEffect(() => {
            s?.(d.isHoveringOrFocusing);
        }, [s, d]);
    let h = n.useCallback(() => {
        let e = k.A.getGuild(t.guild_id);
        M()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, f.openModalLazy)(async () => {
                let { default: n } = await Promise.all([
                    i.e("24813"),
                    i.e("59957"),
                    i.e("28136"),
                    i.e("16084"),
                    i.e("22547"),
                ]).then(i.bind(i, 1310));
                return (i) => (0, l.jsx)(n, { ...i, guild: e, channel: t, source: z.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            c();
    }, [t, c]);
    return (0, l.jsx)("div", {
        ref: o,
        "aria-label": er.intl.string(er.t.o53CL2),
        className: a()(eo.popover, ec.oO),
        children: (0, l.jsxs)("div", {
            className: ec.vW,
            children: [
                m &&
                    (0, l.jsx)(E.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: ec.DD,
                        children: er.intl.string(er.t["EE+P0H"]),
                    }),
                (0, l.jsxs)("ul", {
                    className: ec.p_,
                    children: [
                        u.map((e) => (0, l.jsx)(eA, { channel: t, user: e, ringingEnabled: m }, e.id)),
                        (0, l.jsxs)(S.D, {
                            tag: "li",
                            onClick: h,
                            className: a()(ec.nM, ec.vk),
                            children: [
                                (0, l.jsx)("div", {
                                    className: ec.R4,
                                    children: (0, l.jsx)(U.n, { size: "custom", className: ec.Kk }),
                                }),
                                (0, l.jsx)(E.E, {
                                    variant: "text-sm/medium",
                                    className: ec.UU,
                                    lineClamp: 1,
                                    children: er.intl.string(er.t.NOP3Ry),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function eA(e) {
    let { channel: t, user: i, ringingEnabled: s } = e,
        c = t.guild_id,
        o = n.useRef(null),
        d = (0, r.bG)([ei.Ay], () => ei.Ay.getMember(c, i.id), [c, i.id]),
        { isHoveringOrFocusing: u } = (0, V.A)(o),
        [m, A] = n.useState(null),
        {
            icon: h,
            iconColor: p,
            tooltipText: g,
            disabled: x,
            shouldHideButton: I,
            onClick: f,
        } = (0, et.A)({ user: i, channel: t, location: eu }),
        {
            status: N,
            isMobileOnline: y,
            activities: C,
        } = (0, r.cf)(
            [en.A],
            () => ({
                status: en.A.getStatus(i.id, c),
                isMobileOnline: en.A.isMobileOnline(i.id),
                activities: en.A.getActivities(i.id, c),
            }),
            [i.id, c],
        ),
        { activityStatusText: _, activityStatusIcon: T } = n.useMemo(() => {
            let e = C.find((e) => e.type !== z.$pd.CUSTOM_STATUS && e.type !== z.$pd.HANG_STATUS);
            return { activityStatusText: (0, $.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, X.f)(e) };
        }, [C]),
        { voiceChannel: b } = (0, K.A)({ userId: i.id }),
        O = (0, J.Ay)(b),
        P = (0, w.S3)(z.clD.ONLINE),
        G = "success" === m || "sending" === m,
        k = n.useCallback(
            (e) => {
                e.stopPropagation(), x || f();
            },
            [f, x],
        ),
        R = n.useCallback(async () => {
            if (G) return;
            async function e() {
                let e = el.A.getInvite(t.id, {}) ?? null;
                if (null == e) {
                    if (!L.A.can(z.xBc.CREATE_INSTANT_INVITE, t)) return null;
                    try {
                        await Y.Ay.createInvite(t.id, {}, eu);
                    } catch (e) {
                        return null;
                    }
                    e = el.A.getInvite(t.id, {}) ?? null;
                }
                return e?.code ?? null;
            }
            A("sending");
            let l = await e();
            null == l
                ? A(null)
                : B.A.enqueue(
                      {
                          type: B.F.USER,
                          user: i,
                          inviteKey: l,
                          location: eu,
                          inviteAnalyticsMetadata: { source: z.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          A(e ? "success" : null);
                      },
                  );
        }, [G, i, t]),
        {
            avatarDecorationSrc: D,
            avatarSrc: M,
            eventHandlers: U,
        } = (0, Z.A)({ userId: i.id, size: H._3.SIZE_24, animateOnHover: !u, guildId: c });
    if (null == d) return null;
    let ee = es.Ay.getName(i),
        ea = er.intl.string(er.t.jYnGPG),
        eo = N !== z.clD.OFFLINE ? N : void 0,
        em = null != _.text,
        eA = null != b && null != O;
    return (0, l.jsxs)(S.D, {
        innerRef: o,
        tag: "li",
        className: a()(ec.nM, { [ec.vk]: !G }),
        "aria-disabled": G,
        onClick: R,
        "aria-label": ea,
        children: [
            (0, l.jsx)(W.eu, {
                className: ec.my,
                "aria-label": ee,
                size: H._3.SIZE_24,
                src: M,
                avatarDecoration: D,
                status: eo,
                isMobile: y,
                ...U,
            }),
            (0, l.jsxs)("div", {
                className: ec.VW,
                children: [
                    (0, l.jsx)(E.E, { variant: "text-sm/medium", className: ec.UU, lineClamp: 1, children: ee }),
                    (eA || em) &&
                        (0, l.jsxs)("div", {
                            className: ec.J2,
                            children: [
                                eA
                                    ? (0, l.jsx)(Q.A, { size: "custom", color: P, channel: b, className: ec.RI })
                                    : null != T
                                      ? (0, l.jsx)(q.A, { icon: T, className: ec.RI })
                                      : null,
                                (0, l.jsx)(E.E, {
                                    variant: "text-xs/medium",
                                    color: "text-status-online",
                                    lineClamp: 1,
                                    children: eA ? O : _.text,
                                }),
                            ],
                        }),
                ],
            }),
            "sending" === m &&
                (0, l.jsx)("div", { className: ec.r$, children: (0, l.jsx)(F.n, { dotRadius: 2, themed: !0 }) }),
            "success" === m &&
                (0, l.jsx)(E.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: ec.h5,
                    lineClamp: 1,
                    children: er.intl.string(er.t["8BEiNn"]),
                }),
            null == m &&
                !s &&
                (0, l.jsx)("div", {
                    className: ec.SB,
                    children: (0, l.jsx)(j.R, { color: "currentColor", size: "sm", className: ec.Kk }),
                }),
            s &&
                !I &&
                (0, l.jsx)(v.m, {
                    text: g,
                    children: (0, l.jsx)(S.D, {
                        className: a()(ec.D9, ed.button, ed.secondary, { [ec.r9]: x }),
                        onClick: k,
                        "aria-disabled": x,
                        children: (0, l.jsx)(h, { size: "xxs", color: p, className: ec.Kk }),
                    }),
                }),
        ],
    });
}
i(281405);
var eh = i(89682),
    ep = i(80442);
let eg = (e) => 1 - Math.pow(1 - e, 4);
function ex(e) {
    let { channel: t, onClose: s } = e,
        c = n.useRef(null),
        o = n.useRef(null),
        [d, u] = n.useState(!1),
        m = n.useRef(null),
        A = n.useRef(null),
        [h, p] = n.useState(0),
        { analyticsLocations: g } = (0, P.Ay)(O.A.VOICE_INVITE_SUGGESTIONS);
    (0, G.A)({
        name: I.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: I.ImpressionTypes.VIEW,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: g },
    });
    let D = (0, r.bG)([L.A], () => L.A.can(z.xBc.CREATE_INSTANT_INVITE, t), [t]),
        M = (0, r.bG)([k.A], () => k.A.getGuild(t.guild_id)),
        U = (0, r.bG)([b.A], () => b.A.useReducedMotion),
        [w, H] = n.useState(!1),
        W = n.useRef(null),
        { isHoveringOrFocusing: F } = (0, V.A)(D ? c : W),
        [Y, B] = n.useState(!1),
        { isFocusing: $ } = (0, V.A)(o),
        K = F || Y,
        q = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                R.default.track(z.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: g,
                }),
                    u(!1),
                    s?.();
            },
            [t, s, g],
        ),
        X = n.useCallback(() => {
            null != M &&
                (0, f.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("24813"),
                        i.e("59957"),
                        i.e("28136"),
                        i.e("16084"),
                        i.e("22547"),
                    ]).then(i.bind(i, 1310));
                    return (i) => (0, l.jsx)(e, { ...i, guild: M, channel: t, source: z.PE1.VOICE_INVITE_SUGGESTIONS });
                });
        }, [M, t]),
        [J, Z] = (0, N.z)(() => ({
            from: { height: "0px" },
            to: { height: "32px" },
            config: { duration: 200, easing: eg, clamp: !0 },
        })),
        Q = n.useCallback(
            (e) => {
                H(!0), Z({ to: { height: "0px" }, onRest: () => q(e) });
            },
            [Z, q],
        ),
        ee = n.useCallback(() => {
            null != m.current && clearTimeout(m.current);
            let e = () => {
                null != m.current && clearTimeout(m.current);
            };
            return U || ((m.current = setTimeout(() => Q("timeout"), 1e4)), p((e) => e + 1)), e;
        }, [Q, U]),
        et = n.useCallback(
            () => (
                null != A.current && clearTimeout(A.current),
                (A.current = setTimeout(() => {
                    u(!1);
                }, 150)),
                () => {
                    null != A.current && clearTimeout(A.current);
                }
            ),
            [],
        );
    (0, T.Ay)(ee),
        n.useEffect(() => {
            if (!K) {
                let e = ee(),
                    t = et();
                return () => {
                    e?.(), t?.();
                };
            }
            null != m.current && clearTimeout(m.current), null != A.current && clearTimeout(A.current), u(!0);
        }, [K, ee, et]);
    let ei = n.useCallback(() => {
            u(!0);
        }, []),
        el = n.useCallback(() => {
            u(!1), B(!1);
        }, []);
    return D
        ? (0, l.jsx)(y.Y, {
              targetElementRef: c,
              shouldShow: d,
              position: "right",
              align: "top",
              spacing: 17,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) => (0, l.jsx)(em, { channel: t, onHoverOrFocus: B, ...e }),
              onRequestOpen: ei,
              onRequestClose: el,
              children: (e) => {
                  let { onClick: t, ...i } = e;
                  return (0, l.jsx)(x.animated.div, {
                      className: eh.lY,
                      style: J,
                      children: (0, l.jsx)(S.D, {
                          innerRef: c,
                          className: a()({ [eh.vk]: !w }, ep.q7, ep.L9, ep.vk),
                          "aria-disabled": w,
                          "aria-label": er.intl.string(er.t.F3qiJr),
                          onClick: X,
                          ignoreKeyPress: $,
                          ...i,
                          children: (0, l.jsxs)("div", {
                              className: a()(eh.Qs, ep.Qs),
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: eh.R4,
                                      style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                      children: [
                                          U
                                              ? null
                                              : (0, l.jsxs)(
                                                    "svg",
                                                    {
                                                        className: a()(eh.O1, { [eh.Ft]: K }),
                                                        viewBox: "0 0 24 24",
                                                        style: {
                                                            "--custom-voice-invite-suggestions-timer-duration": 1e4,
                                                        },
                                                        children: [
                                                            (0, l.jsx)("circle", { className: eh.qB }),
                                                            (0, l.jsx)("circle", { className: eh.hN }),
                                                        ],
                                                    },
                                                    `voice-invite-suggestions-timer-${h}`,
                                                ),
                                          (0, l.jsx)(j.R, {
                                              size: "custom",
                                              width: 14,
                                              height: 14,
                                              color: "currentColor",
                                              className: a()(eh.Hk, eh.Kk),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(v.m, {
                                      text: er.intl.string(er.t["EE+P0H"]),
                                      overflowOnly: !0,
                                      children: (0, l.jsx)(E.E, {
                                          variant: "text-sm/medium",
                                          className: eh.Pf,
                                          lineClamp: 1,
                                          children: er.intl.string(er.t["EE+P0H"]),
                                      }),
                                  }),
                                  (0, l.jsx)("div", {
                                      ref: o,
                                      children: F
                                          ? (0, l.jsx)(S.D, {
                                                className: eh.VN,
                                                onClick: (e) => {
                                                    e.stopPropagation(), Q("user_explicit");
                                                },
                                                "aria-label": er.intl.string(er.t.cpT0Cq),
                                                children: (0, l.jsx)(C.P, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: eh.Kk,
                                                }),
                                            })
                                          : (0, l.jsx)(_._, { size: "xs", color: "currentColor", className: eh.Kk }),
                                  }),
                              ],
                          }),
                      }),
                  });
              },
          })
        : null;
}
var eI = i(551826),
    ev = i(25528),
    ef = i(530804),
    eN = i(481947),
    ey = i(591346),
    eS = i(334885),
    ej = i(616356),
    eE = i(495544),
    eC = i(761853),
    e_ = i(528767),
    eT = i(485296),
    eb = i(977997),
    eO = i(406810),
    eP = i(442433),
    eG = i(609425),
    eV = i(252545),
    ek = i(769022),
    eL = i(287809),
    eR = i(562153),
    eD = i(850457),
    eM = i(601884);
function eU(e) {
    let { channel: t } = e,
        [s, c] = n.useState(!1),
        o = n.useRef(null),
        d = n.useRef(null);
    n.useEffect(
        () => () => {
            clearTimeout(d.current);
        },
        [],
    );
    let u = (0, r.bG)([ek.A, eL.default], () => {
            let e = ek.A.getLastLeftUserId(t.id);
            return null != e ? eL.default.getUser(e) : null;
        }, [t.id]),
        m = eR.Ay.useName(t.guild_id, t.id, u),
        A = (0, eG.A)({ userId: u?.id, guildId: t.guild_id }),
        h = (0, eV.a)({ displayNameStyles: A }),
        p = (e) => {
            e.preventDefault(),
                null != u &&
                    (0, eP.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            i.e("51776"),
                            i.e("52887"),
                            i.e("58466"),
                            i.e("94881"),
                            i.e("26132"),
                            i.e("46652"),
                            i.e("93190"),
                            i.e("34552"),
                            i.e("93103"),
                            i.e("8757"),
                            i.e("89673"),
                            i.e("21921"),
                            i.e("68403"),
                            i.e("85968"),
                            i.e("76418"),
                            i.e("60195"),
                            i.e("71210"),
                            i.e("66495"),
                            i.e("29787"),
                            i.e("88342"),
                            i.e("97558"),
                            i.e("94000"),
                            i.e("91994"),
                            i.e("42451"),
                            i.e("98965"),
                            i.e("76665"),
                            i.e("35313"),
                            i.e("24198"),
                            i.e("39171"),
                            i.e("36564"),
                            i.e("52229"),
                            i.e("792"),
                            i.e("45996"),
                            i.e("92822"),
                            i.e("23427"),
                            i.e("49145"),
                            i.e("29422"),
                            i.e("9291"),
                            i.e("7059"),
                            i.e("43116"),
                            i.e("70314"),
                            i.e("70515"),
                            i.e("27435"),
                            i.e("66939"),
                            i.e("17334"),
                            i.e("84841"),
                        ]).then(i.bind(i, 107632));
                        return (i) => (0, l.jsx)(e, { ...i, user: u, guildId: t.guild_id, channel: t });
                    });
        },
        g = () => {
            clearTimeout(d.current), (d.current = setTimeout(() => c(!0), 100));
        },
        x = () => {
            clearTimeout(d.current), (d.current = setTimeout(() => c(!1), 100));
        };
    return null == u
        ? null
        : (0, l.jsx)(y.Y, {
              targetElementRef: o,
              position: "right",
              shouldShow: s,
              onRequestOpen: g,
              onRequestClose: x,
              useMouseEnter: !0,
              spacing: 17,
              renderPopout: () =>
                  (0, l.jsx)(eD.A, { channel: t, source: "ghost_user", onMouseEnter: g, onMouseLeave: x }),
              children: (e) => {
                  let { onClick: i, ...n } = e;
                  return (0, l.jsxs)(S.D, {
                      innerRef: o,
                      className: eM.nM,
                      "aria-haspopup": "dialog",
                      onClick: g,
                      onContextMenu: p,
                      ...n,
                      onMouseLeave: x,
                      children: [
                          (0, l.jsxs)("div", {
                              className: eM.R3,
                              children: [
                                  (0, l.jsx)(W.eu, {
                                      src: u.getAvatarURL(t.guild_id, 24),
                                      size: H._3.SIZE_24,
                                      "aria-hidden": !0,
                                      status: z.clD.INVISIBLE,
                                      statusColor: "currentColor",
                                  }),
                                  (0, l.jsx)(eO.O, { className: eM.SM }),
                              ],
                          }),
                          (0, l.jsx)(E.E, {
                              variant: "text-sm/normal",
                              className: eM.Pf,
                              children: er.intl.format(er.t.TlVwqn, {
                                  user: m,
                                  userHook: (e, t) =>
                                      (0, l.jsx)(
                                          E.E,
                                          {
                                              variant: "text-sm/semibold",
                                              className: a()(eM.Xh, h),
                                              color: "text-muted",
                                              children: e,
                                          },
                                          t,
                                      ),
                              }),
                          }),
                      ],
                  });
              },
          });
}
var ew = i(597601),
    ez = i(367513),
    eH = i(730852),
    eW = i(401843),
    eF = i(296216),
    eY = i(480890),
    eB = i(643501),
    e$ = i(544105),
    eK = i(652896),
    eq = i(279250),
    eX = i(346846),
    eJ = i(342296),
    eZ = i(364522),
    eQ = i(80682),
    e0 = i(461213),
    e2 = i(765379);
let e6 = (e) =>
    ([z.$pd.PLAYING, z.$pd.WATCHING].includes(e.type) &&
        [e.name, e.application_id, e.assets, e.state, e.details, e.party].some((e) => null != e)) ||
    e.type === z.$pd.LISTENING;
var e1 = i(685399),
    e7 = i(960076),
    e9 = i(323073),
    e3 = i(85451),
    e5 = i(268218),
    e8 = i(834757),
    e4 = i(566668),
    te = i(832163),
    tt = i(565688),
    ti = i(533562),
    tl = i(927813),
    tn = i(329554);
let ts = (0, i(600975).C)({
    kind: "guild",
    id: "2026-04_voice_user_duration",
    label: "Voice User Duration",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Allow guild members to see each others duration in the channel list",
            config: { enabled: !0 },
        },
    ],
});
var ta = i(699976),
    tr = i(415679);
let tc = (0, e5.Fe)({
    createPromise: () =>
        Promise.all([
            i.e("51776"),
            i.e("61097"),
            i.e("82647"),
            i.e("29939"),
            i.e("50128"),
            i.e("29761"),
            i.e("26105"),
            i.e("46461"),
            i.e("58466"),
            i.e("9225"),
            i.e("35316"),
            i.e("90081"),
            i.e("45650"),
            i.e("52887"),
            i.e("57016"),
            i.e("28743"),
            i.e("96449"),
            i.e("32264"),
            i.e("55990"),
            i.e("66609"),
            i.e("24813"),
            i.e("79705"),
            i.e("69279"),
            i.e("23924"),
            i.e("42205"),
            i.e("71091"),
            i.e("28367"),
            i.e("10471"),
            i.e("35429"),
            i.e("63232"),
            i.e("11301"),
            i.e("60235"),
            i.e("64827"),
            i.e("30938"),
            i.e("96643"),
            i.e("94493"),
            i.e("92789"),
            i.e("47834"),
            i.e("74016"),
            i.e("19551"),
            i.e("84569"),
            i.e("6338"),
            i.e("3178"),
            i.e("7743"),
            i.e("45959"),
            i.e("60658"),
            i.e("8304"),
            i.e("18573"),
            i.e("55936"),
            i.e("31988"),
            i.e("39667"),
            i.e("5812"),
            i.e("26073"),
            i.e("34303"),
            i.e("28866"),
            i.e("1368"),
            i.e("58038"),
            i.e("93159"),
            i.e("31716"),
            i.e("8751"),
            i.e("62931"),
            i.e("81987"),
            i.e("50417"),
            i.e("45679"),
            i.e("34530"),
            i.e("9233"),
            i.e("54975"),
            i.e("20287"),
            i.e("71133"),
            i.e("77084"),
            i.e("54625"),
            i.e("49697"),
            i.e("80230"),
            i.e("37687"),
            i.e("48900"),
            i.e("95093"),
            i.e("63645"),
            i.e("71234"),
            i.e("27773"),
            i.e("96137"),
            i.e("5636"),
            i.e("87196"),
            i.e("834"),
            i.e("60177"),
            i.e("21570"),
            i.e("69933"),
            i.e("26728"),
            i.e("1354"),
            i.e("20282"),
            i.e("54282"),
            i.e("23276"),
            i.e("78412"),
            i.e("63213"),
            i.e("9662"),
            i.e("80239"),
            i.e("75016"),
            i.e("29354"),
            i.e("95444"),
            i.e("76087"),
            i.e("48720"),
            i.e("33134"),
            i.e("80112"),
            i.e("59880"),
            i.e("6723"),
            i.e("54791"),
            i.e("25279"),
            i.e("54819"),
            i.e("21574"),
            i.e("31445"),
            i.e("77473"),
            i.e("69747"),
            i.e("35996"),
            i.e("77467"),
            i.e("21856"),
            i.e("11133"),
            i.e("8694"),
            i.e("49013"),
            i.e("42324"),
            i.e("93461"),
            i.e("46430"),
            i.e("90779"),
            i.e("18489"),
            i.e("39808"),
            i.e("9763"),
            i.e("20667"),
        ]).then(i.bind(i, 963614)),
    webpackId: 963614,
});
function to(e) {
    let { user: t, channel: i, activity: n, activityApplicationId: s, withGiftingBreadcrumb: a, onAction: r } = e,
        c = (0, l.jsx)(tn.A, { presenceActivity: n, channel: i, userId: t.id, onAction: r });
    return a && null != s
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  c,
                  (0, l.jsx)(tc, {
                      className: tr.L,
                      applicationId: s,
                      rewardOfferNoticeClassName: tr.Nh,
                      userIds: [t.id],
                      location: "voice_channel",
                      guildId: i.guild_id,
                      channelId: i.id,
                      numWishlistItems: 2,
                      cardSpec: ta.Z.SIZE_110,
                  }),
              ],
          })
        : c;
}
function td(e) {
    let { user: t, guildId: i, channelId: n } = e,
        s = (0, r.bG)([ei.Ay], () => ei.Ay.getMember(i, t.id)),
        a = es.Ay.useName(t),
        c = s?.nick ?? a,
        { avatarDecorationSrc: o, avatarSrc: d } = (0, Z.A)({ userId: t.id, size: H._3.SIZE_32, guildId: i }),
        {
            status: u,
            isMobileOnline: m,
            activities: A,
        } = (0, r.cf)([en.A], () => ({
            status: en.A.getStatus(t.id, i),
            isMobileOnline: en.A.isMobileOnline(t.id),
            activities: en.A.getActivities(t.id, i),
        })),
        h = (0, r.bG)([eb.A], () => eb.A.getVoiceStateForChannel(n, t.id)?.connectedAt),
        p = null != h ? new Date(h * tl.A.Millis.SECOND).getTime() : null;
    return (0, l.jsxs)("div", {
        className: tr.aq,
        children: [
            (0, l.jsx)(W.eu, {
                src: d,
                size: H._3.SIZE_32,
                "aria-label": c,
                avatarDecoration: o,
                status: (0, e7.A)(A) ? z.clD.STREAMING : u === z.clD.OFFLINE ? void 0 : u,
                isMobile: m,
                className: tr.my,
            }),
            (0, l.jsxs)("div", {
                className: tr.Qq,
                children: [
                    (0, l.jsx)(E.E, { variant: "text-sm/medium", lineClamp: 1, children: c }),
                    null != p && (0, l.jsx)(e3.z, { textColor: "text-feedback-positive", entry: { start: p } }),
                ],
            }),
        ],
    });
}
function tu(e) {
    let t,
        i,
        { channel: s, user: c, onAction: o, excludeActivity: d, onWatchStream: u } = e,
        m = n.useMemo(() => ({ [s.guild_id]: [c.id] }), [s.guild_id, c.id]);
    (0, eQ.Eq)(m, "VoiceUserActivities");
    let { enabled: A } = ts.useExperiment({ guildId: s.guild_id, location: "VoiceUserPopout" }),
        [h, p] = (0, r.yK)(
            [ej.A],
            () => [ej.A.getStreamForUser(c.id, s.getGuildId()), ej.A.getActiveStreamForUser(c.id, s.getGuildId())],
            [s, c.id],
        ),
        [g, x] = (0, r.yK)([eb.A, k.A, L.A, eB.default], () => (0, eq.eo)(s, eb.A, k.A, L.A, eB.default)),
        I = (0, r.bG)([eE.default], () => eE.default.getId()),
        v = (0, r.bG)([en.A], () => (0, e8.nr)(h, en.A), [h]),
        f = (0, e9.r9)() && (0, e9.UK)(s.id),
        N =
            ((t = (0, e1.Ay)(s)),
            (i = n.useMemo(() => t.filter((e) => e.embeddedActivity.userIds.has(c.id)), [t, c.id])),
            [...(0, e1.Rz)(i).values()]),
        y = (0, ti.W)(),
        S = (0, tt.m)({ location: "voice_channel_activities" }),
        j = (0, r.bG)([te.A], () => te.A.getDetectableIdsToApplicationIds()),
        E = d ?? v,
        C = (0, r.yK)([e0.A, en.A, eE.default], () => {
            let e = c.id === eE.default.getId() ? e0.A.getActivities() : en.A.getActivities(c.id),
                t = new Map();
            for (let i of e) {
                if (
                    !e6(i) ||
                    (0, e2.A)(i) ||
                    (null != E &&
                        ((null != E.application_id && i.application_id === E.application_id) ||
                            (null != E.name && i.name === E.name)))
                )
                    continue;
                let e = i.application_id ?? i.name;
                null == e || t.has(e) || t.set(e, i);
            }
            return Array.from(t.values());
        }, [c.id, E]),
        _ = null != h && null != u && !f,
        T = _ || C.length > 0 || N.length > 0,
        b = T || A;
    if (
        (n.useEffect(() => {
            b &&
                R.default.track(z.HAw.OPEN_POPOUT, {
                    type: "Voice User Activities",
                    channel_id: s.id,
                    other_user_id: c.id,
                });
        }, [b, s.id, c.id]),
        !b)
    )
        return null;
    let O = (0, l.jsxs)(l.Fragment, {
        children: [
            _ &&
                (0, l.jsx)(e4.P, {
                    stream: h,
                    activeStream: p,
                    streamActivity: v,
                    user: c,
                    currentUserId: I,
                    canWatch: g,
                    unavailableReason: x,
                    onWatchStream: u,
                    onAction: o,
                    showHeader: !0,
                }),
            N.map((e) =>
                (0, l.jsx)(
                    tn.A,
                    {
                        userId: c.id,
                        embeddedApp: e,
                        presenceActivity: e.presenceActivity ?? void 0,
                        channel: s,
                        onAction: o,
                    },
                    e.application.id,
                ),
            ),
            C.map((e) => {
                let t = y ?? e.application_id;
                return (0, l.jsx)(
                    to,
                    {
                        user: c,
                        channel: s,
                        activityApplicationId: t,
                        activity: e,
                        withGiftingBreadcrumb: S && null != t && null != j[t],
                        onAction: o,
                    },
                    e.application_id,
                );
            }),
        ],
    });
    return A
        ? (0, l.jsxs)("div", {
              className: a()(eo.popover, tr.Db),
              children: [
                  (0, l.jsx)(td, { user: c, guildId: s.guild_id, channelId: s.id }),
                  T && (0, l.jsx)(eZ.Ip, { className: a()(eo.popover, tr.XG), children: O }),
              ],
          })
        : (0, l.jsx)(eZ.Ip, { className: a()(eo.popover, tr.kL), children: O });
}
var tm = i(325278),
    tA = i(976358);
function th(e) {
    let { numUsers: t } = e;
    return (0, l.jsx)("div", {
        className: tA.BN,
        children: (0, l.jsxs)(E.E, { color: "text-muted", variant: "text-sm/medium", children: ["+", t] }),
    });
}
function tp(e) {
    let { numAudience: t, collapsed: i } = e,
        n = i ? t : er.intl.formatToPlainString(er.t["+v2pN2"], { count: t });
    return (0, l.jsxs)("div", {
        className: a()(tA.yJ, { [tA.Nr]: i }),
        children: [
            (0, l.jsx)("div", {
                className: tA.$L,
                children: (0, l.jsx)(ew.L, { size: "md", color: "currentColor", className: tA.wG }),
            }),
            (0, l.jsx)(E.E, { color: "text-muted", variant: "text-sm/medium", children: n }),
        ],
    });
}
let tg = (0, eF.J)(function (e) {
    let {
            collapsed: t,
            user: s,
            channel: r,
            mute: c,
            localMute: o,
            localVideoDisabled: d,
            deaf: u,
            video: m,
            embeddedApplication: A,
            serverMute: h,
            serverDeaf: p,
            nick: g,
            ringing: x,
            speaking: I,
            disconnected: f,
            connectUserDragSource: N,
            canDrag: S,
            isStreaming: j,
            isWatching: E,
            isGuest: C,
            priority: _,
            showPreview: T,
            hidePreview: b,
            shouldShowHoverPopout: P,
            otherClientSessionType: G,
            voicePlatform: V,
            isSelfOnOtherClient: R = !1,
            tabIndex: D,
            isSelf: M,
            application: U,
            game: w,
        } = e,
        z = (0, J.Ay)(r),
        H = n.useRef(null),
        [W, F] = n.useState(!1),
        Y = n.useRef(null),
        B = () => {
            F(!W);
        },
        $ = (e) => {
            K();
        },
        K = () => {
            clearTimeout(Y.current), b?.(s.id);
        };
    n.useEffect(
        () => () => {
            clearTimeout(Y.current);
        },
        [],
    );
    let q = () => {
            if (!j || !(0, eq.eo)(r, eb.A, k.A, L.A, eB.default)[0]) return;
            let e = { streamType: tm.U4.GUILD, ownerId: s.id, channelId: r.id, guildId: r.guild_id };
            eE.default.getId() !== s.id && eH.default.selectVoiceChannel(r.id),
                E ? ((0, eX.A)(e), ez.A.selectParticipant(e.channelId, (0, eK._z)(e))) : (0, eW.Nl)(e),
                b?.(s.id);
        },
        X = (e) => {
            (0, eP.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    i.e("51776"),
                    i.e("52887"),
                    i.e("58466"),
                    i.e("94881"),
                    i.e("26132"),
                    i.e("46652"),
                    i.e("93190"),
                    i.e("34552"),
                    i.e("93103"),
                    i.e("8757"),
                    i.e("89673"),
                    i.e("21921"),
                    i.e("68403"),
                    i.e("85968"),
                    i.e("76418"),
                    i.e("60195"),
                    i.e("71210"),
                    i.e("66495"),
                    i.e("29787"),
                    i.e("88342"),
                    i.e("97558"),
                    i.e("94000"),
                    i.e("91994"),
                    i.e("42451"),
                    i.e("98965"),
                    i.e("76665"),
                    i.e("35313"),
                    i.e("24198"),
                    i.e("39171"),
                    i.e("36564"),
                    i.e("52229"),
                    i.e("792"),
                    i.e("45996"),
                    i.e("92822"),
                    i.e("23427"),
                    i.e("49145"),
                    i.e("29422"),
                    i.e("9291"),
                    i.e("7059"),
                    i.e("43116"),
                    i.e("70314"),
                    i.e("70515"),
                    i.e("27435"),
                    i.e("66939"),
                    i.e("17334"),
                    i.e("84841"),
                ]).then(i.bind(i, 107632));
                return (t) =>
                    (0, l.jsx)(e, {
                        ...t,
                        user: s,
                        guildId: r.guild_id,
                        channel: r,
                        showMediaItems: !0,
                        showStageChannelItems: r.isGuildStageVoice(),
                        onInteraction: (0, eY.s)("GuildChannelUserContextMenu", O.A.VOICE_USER, { targetUserId: s.id }),
                    });
            });
        },
        Z = (0, l.jsx)("div", {
            className: tA.kZ,
            "data-dnd-name": z,
            onMouseEnter: R
                ? void 0
                : () => {
                      W || (Y.current = setTimeout(() => T?.(s.id), 100));
                  },
            onMouseLeave: R ? void 0 : K,
            children: (0, l.jsx)(eJ.A, {
                clickTrap: s?.id === eL.default.getCurrentUser()?.id && W,
                targetElementRef: H,
                user: s,
                guildId: r.guild_id,
                channelId: r.id,
                newAnalyticsLocations: [O.A.VOICE_USER],
                shouldShow: W,
                onRequestClose: () => F(!1),
                children: (e) => {
                    let i, n;
                    return (
                        (i = e$.hv.has(G ?? "")),
                        (n = {
                            user: s,
                            speaking: I,
                            disconnected: f,
                            mute: c,
                            localMute: o,
                            localVideoDisabled: d,
                            isStreaming: j,
                            isGuest: C,
                            video: m,
                            priority: _,
                            ringing: x,
                            deaf: u,
                            nick: g,
                            collapsed: t,
                            overlap: t,
                            serverMute: h,
                            serverDeaf: p,
                            tabIndex: D,
                            otherClientSessionType: G,
                            voicePlatform: V,
                            embeddedApplication: A,
                            avatarContainerClass: a()({ [tA.dj]: !0 }),
                            disabled: R && !i,
                            selected: W,
                            onClick: i ? void 0 : B,
                            onDoubleClick: q,
                            onContextMenu: X,
                            guildId: r.guild_id,
                            isSelf: M,
                            application: U,
                            game: w,
                            channelId: r.id,
                        }),
                        R
                            ? (0, l.jsx)(v.m, {
                                  text:
                                      (function (e) {
                                          switch (e) {
                                              case e$.f$.XBOX:
                                                  return er.intl.string(er.t.T0uYK9);
                                              case e$.f$.PLAYSTATION:
                                                  return er.intl.string(er.t.FWAzS6);
                                          }
                                      })(G) ?? er.intl.string(er.t.IyYqqY),
                                  children: (0, l.jsx)(eN.Ay, { ref: H, ...n }),
                              })
                            : (0, l.jsx)(y.Y, {
                                  targetElementRef: H,
                                  position: "right",
                                  renderPopout: () =>
                                      (0, l.jsx)(tu, {
                                          channel: r,
                                          user: s,
                                          onAction: K,
                                          onWatchStream: j ? q : void 0,
                                      }),
                                  shouldShow: P && !W,
                                  onRequestClose: $,
                                  spacing: 17,
                                  children: () =>
                                      (0, l.jsx)(eN.Ay, {
                                          ...n,
                                          ref: H,
                                          onMouseDown: e.onMouseDown,
                                          onKeyDown: e.onKeyDown,
                                      }),
                              })
                    );
                },
            }),
        });
    return S ? N(Z) : Z;
});
var tx = i(31408),
    tI = i(588533);
let tv = n.memo((e) => {
    let { mute: t, deaf: i, user: n, channel: s, sessionId: a, nick: c } = e,
        g = n.id,
        x = (0, r.bG)([eE.default], () => eE.default.getId() === g, [g]),
        [I, v, f] = (0, r.yK)(
            [eC.Ay],
            () =>
                x
                    ? [
                          !eC.Ay.isSupported() || eC.Ay.isSelfMute() || eC.Ay.isSelfMutedTemporarily(),
                          eC.Ay.isSelfDeaf(),
                          !1,
                      ]
                    : [!eC.Ay.isSupported() || eC.Ay.isLocalMute(g), !1, eC.Ay.isLocalVideoDisabled(g)],
            [x, g],
        ),
        N = (0, r.bG)([eT.A], () => eT.A.isPrioritySpeaker(g)),
        y = (0, o.A)({ userId: g, checkSoundSharing: !0 }),
        S = (0, p.A)(s.guild_id, g),
        j = (0, r.bG)([A.A], () => A.A.getGuildRingingUsers(s.id).has(g)),
        E = (0, r.bG)(
            [d.Ay],
            () =>
                d.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(g);
                }),
            [g, s.id],
        ),
        C = (0, m.A)(null != E ? [E.applicationId] : []),
        _ = (0, ev.Ay)(g, s.guild_id)[0],
        T = (0, u.YY)(_?.application_id).data ?? void 0,
        { gameRecord: b } = (function (e) {
            let t = (0, m.h)(e),
                i = null != e && null == t,
                l = t?.getCanonicalGameId() ?? null,
                { data: n, isLoading: s } = (0, h.I)(l);
            return { gameId: l, gameRecord: n ?? null, isLoading: i || s };
        })(_?.application_id),
        [O, P] = (0, r.yK)(
            [ej.A],
            () => [ej.A.getStreamForUser(g, s.getGuildId()), ej.A.getActiveStreamForUser(g, s.getGuildId())],
            [s, g],
        ),
        G = (0, r.bG)([e_.A], () => e_.A.getSessionById(a)),
        V = es.Ay.useName(n),
        k = (0, r.bG)([eb.A], () => eb.A.getVoicePlatformForChannel(s.id, g), [s.id, g]),
        L = (0, ef.uy)(s.id, g);
    return (0, l.jsx)(eI.A, {
        shakeLocation: tx.uD.VOICE_USER,
        isShaking: y,
        children: (0, l.jsx)(tg, {
            ...e,
            nick: c ?? V,
            canDrag: e.canDrag && !S,
            disconnected: L,
            otherClientSessionType: G?.clientInfo?.os,
            voicePlatform: k,
            localMute: I && !x,
            localVideoDisabled: f,
            mute: t || I,
            deaf: i || v,
            speaking: y,
            ringing: j,
            priority: N,
            embeddedApplication: C[0],
            isStreaming: null != O && O.channelId === s.id,
            isWatching: null != P && P.state !== z.XYD.ENDED,
            isGuest: S,
            isSelf: x,
            application: _?.session_id != null ? T : void 0,
            game: _?.session_id != null ? (b ?? void 0) : void 0,
        }),
    });
});
tv.displayName = "ConnectedVoiceUser";
let tf = [],
    tN = function (e) {
        let {
                allowPreviews: t = !0,
                allowDragging: i = !0,
                channel: s,
                voiceStates: o,
                collapsed: d,
                collapsedMax: u = 6,
                tabIndex: h,
                numAudience: p,
                withGuildIcon: x = !1,
                className: I,
                children: v,
                isThread: f = !1,
                hideInviteSuggestions: N = !1,
            } = e,
            [y, S] = n.useState(null),
            j = n.useRef(null),
            E = (0, ef.$n)(s.id, o ?? tf),
            { showGhostUser: C } = (0, ey.G8)({ guildId: s.guild_id, location: "VoiceUsers" }),
            _ = (0, eS.A)({ guildId: s.guild_id, location: "VoiceUsers" }),
            { shouldShow: T, dismiss: b } = (0, ea.Z0)(s, { collapsed: d, disabled: N }),
            { placement: O } = (0, g.h)({ guildId: s.guild_id, location: "VoiceUsers" }, { autoTrackExposure: !0 }),
            P = n.useRef(
                new c.J_(50, () => {
                    S(j.current), (j.current = null);
                }),
            ),
            G = n.useRef(
                new c.J_(175, () => {
                    S(null);
                }),
            ),
            V = n.useCallback(
                (e) => {
                    t && (G.current.cancel(), (j.current = e), P.current.delay());
                },
                [t],
            ),
            k = n.useCallback(
                (e) => {
                    t && (P.current.cancel(), (j.current = null), G.current.delay());
                },
                [t],
            ),
            R = (0, r.bG)([L.A], () => L.A.can(z.xBc.MOVE_MEMBERS, s)),
            D = i && R,
            M = (0, r.yK)([en.A], () => {
                if (d) return [];
                let e = new Set();
                return (
                    E?.forEach((t) => {
                        let { user: i } = t;
                        en.A.getActivities(i.id, s.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, m.A)(M);
        let U = (() => {
            if (null == E || 0 === E.length) return null;
            let e = d && E.length > u + 1 ? E.slice(0, u) : E,
                t = A.A.getGuildRingingUsers(s.id),
                i = e.map((e) => {
                    let { user: i, nick: n, voiceState: a } = e,
                        r = t.has(i.id);
                    return (0, l.jsx)(
                        tv,
                        {
                            user: i,
                            nick: n,
                            isSelfOnOtherClient:
                                eE.default.getId() === i.id && a.sessionId !== eE.default.getSessionId(),
                            mute: a.isVoiceMuted(),
                            deaf: a.isVoiceDeafened(),
                            video: a.selfVideo,
                            serverMute: a.mute,
                            serverDeaf: a.deaf,
                            sessionId: a.sessionId ?? "",
                            channel: s,
                            collapsed: d,
                            canDrag: D,
                            showPreview: V,
                            hidePreview: k,
                            shouldShowHoverPopout: y === i.id,
                            tabIndex: h,
                        },
                        `voice-user-${i.id}-${r}`,
                    );
                });
            return (
                null != p && p > 0
                    ? i.push((0, l.jsx)(tp, { collapsed: d, numAudience: p }, "audience"))
                    : d && E.length > u + 1 && i.push((0, l.jsx)(th, { numUsers: E.length - u }, "collapsed-users")),
                _ && C && !d && s.type === z.rbe.GUILD_VOICE && i.push((0, l.jsx)(eU, { channel: s }, "ghost-user")),
                T && "bottom" === O
                    ? i.push((0, l.jsx)(ex, { channel: s, onClose: b }, "voice-invite-suggestions-button"))
                    : T &&
                      "top" === O &&
                      i.unshift((0, l.jsx)(ex, { channel: s, onClose: b }, "voice-invite-suggestions-button")),
                i
            );
        })();
        return null == U && null == v
            ? null
            : (0, l.jsxs)(eN.Wr, {
                  className: a()(I, tI.p_, { [tI.yZ]: d, [tI.lY]: x, [tI.fT]: f }),
                  collapsed: d,
                  children: [U, v],
              });
    };
