i.d(t, { A: () => tf }), i(321073), i(667532);
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
    b = i(793574),
    O = i(688810),
    P = i(139286),
    G = i(713517),
    V = i(71393),
    k = i(576705),
    L = i(174459),
    R = i(284009),
    D = i.n(R),
    M = i(177953),
    U = i(133171),
    w = i(652215),
    z = i(778712),
    H = i(97808),
    W = i(863610),
    F = i(376728),
    Y = i(774300),
    B = i(566903),
    $ = i(714114),
    K = i(864436),
    q = i(835072),
    X = i(47167),
    J = i(854627),
    Z = i(10862),
    Q = i(164891),
    ee = i(135635),
    et = i(696451),
    ei = i(958590),
    el = i(290863),
    en = i(427262),
    es = i(420266),
    ea = i(375708),
    er = i(176277),
    ec = i(824078),
    eo = i(518229);
let ed = "VoiceInviteSuggestionsPopover";
function eu(e) {
    let { channel: t, onHoverOrFocus: s, setPopoutRef: r, closePopout: c } = e,
        o = n.useRef(null),
        d = (0, G.A)(o),
        u = (0, es.kt)({ channel: t }),
        { enabled: m } = Q.A.useExperiment({ guildId: t.guild_id, location: "VoiceInviteSuggestionsPopover" }),
        { analyticsLocations: A } = (0, O.Ay)(b.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, P.A)({
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
        let e = V.A.getGuild(t.guild_id);
        D()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, f.openModalLazy)(async () => {
                let { default: n } = await Promise.all([
                    i.e("57325"),
                    i.e("76664"),
                    i.e("59957"),
                    i.e("28136"),
                    i.e("16084"),
                    i.e("22547"),
                ]).then(i.bind(i, 1310));
                return (i) => (0, l.jsx)(n, { ...i, guild: e, channel: t, source: w.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            c();
    }, [t, c]);
    return (0, l.jsx)("div", {
        ref: o,
        "aria-label": ea.intl.string(ea.t.o53CL2),
        className: a()(ec.popover, er.oO),
        children: (0, l.jsxs)("div", {
            className: er.vW,
            children: [
                m &&
                    (0, l.jsx)(E.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: er.DD,
                        children: ea.intl.string(ea.t["EE+P0H"]),
                    }),
                (0, l.jsxs)("ul", {
                    className: er.p_,
                    children: [
                        u.map((e) => (0, l.jsx)(em, { channel: t, user: e, ringingEnabled: m }, e.id)),
                        (0, l.jsxs)(S.D, {
                            tag: "li",
                            onClick: h,
                            className: a()(er.nM, er.vk),
                            children: [
                                (0, l.jsx)("div", {
                                    className: er.R4,
                                    children: (0, l.jsx)(M.n, { size: "custom", className: er.Kk }),
                                }),
                                (0, l.jsx)(E.E, {
                                    variant: "text-sm/medium",
                                    className: er.UU,
                                    lineClamp: 1,
                                    children: ea.intl.string(ea.t.NOP3Ry),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function em(e) {
    let { channel: t, user: i, ringingEnabled: s } = e,
        c = t.guild_id,
        o = n.useRef(null),
        d = (0, r.bG)([et.Ay], () => et.Ay.getMember(c, i.id), [c, i.id]),
        { isHoveringOrFocusing: u } = (0, G.A)(o),
        [m, A] = n.useState(null),
        {
            icon: h,
            iconColor: p,
            tooltipText: g,
            disabled: x,
            shouldHideButton: I,
            onClick: f,
        } = (0, ee.A)({ user: i, channel: t, location: ed }),
        {
            status: N,
            isMobileOnline: y,
            activities: C,
        } = (0, r.cf)(
            [el.A],
            () => ({
                status: el.A.getStatus(i.id, c),
                isMobileOnline: el.A.isMobileOnline(i.id),
                activities: el.A.getActivities(i.id, c),
            }),
            [i.id, c],
        ),
        { activityStatusText: _, activityStatusIcon: T } = n.useMemo(() => {
            let e = C.find((e) => e.type !== w.$pd.CUSTOM_STATUS && e.type !== w.$pd.HANG_STATUS);
            return { activityStatusText: (0, B.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, q.f)(e) };
        }, [C]),
        { voiceChannel: b } = (0, $.A)({ userId: i.id }),
        O = (0, X.Ay)(b),
        P = (0, U.S3)(w.clD.ONLINE),
        V = "success" === m || "sending" === m,
        L = n.useCallback(
            (e) => {
                e.stopPropagation(), x || f();
            },
            [f, x],
        ),
        R = n.useCallback(async () => {
            if (V) return;
            async function e() {
                let e = ei.A.getInvite(t.id, {}) ?? null;
                if (null == e) {
                    if (!k.A.can(w.xBc.CREATE_INSTANT_INVITE, t)) return null;
                    try {
                        await F.Ay.createInvite(t.id, {}, ed);
                    } catch (e) {
                        return null;
                    }
                    e = ei.A.getInvite(t.id, {}) ?? null;
                }
                return e?.code ?? null;
            }
            A("sending");
            let l = await e();
            null == l
                ? A(null)
                : Y.A.enqueue(
                      {
                          type: Y.F.USER,
                          user: i,
                          inviteKey: l,
                          location: ed,
                          inviteAnalyticsMetadata: { source: w.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          A(e ? "success" : null);
                      },
                  );
        }, [V, i, t]),
        {
            avatarDecorationSrc: D,
            avatarSrc: M,
            eventHandlers: Q,
        } = (0, J.A)({ userId: i.id, size: z._3.SIZE_24, animateOnHover: !u, guildId: c });
    if (null == d) return null;
    let es = en.Ay.getName(i),
        ec = ea.intl.string(ea.t.jYnGPG),
        eu = N !== w.clD.OFFLINE ? N : void 0,
        em = null != _.text,
        eA = null != b && null != O;
    return (0, l.jsxs)(S.D, {
        innerRef: o,
        tag: "li",
        className: a()(er.nM, { [er.vk]: !V }),
        "aria-disabled": V,
        onClick: R,
        "aria-label": ec,
        children: [
            (0, l.jsx)(H.eu, {
                className: er.my,
                "aria-label": es,
                size: z._3.SIZE_24,
                src: M,
                avatarDecoration: D,
                status: eu,
                isMobile: y,
                ...Q,
            }),
            (0, l.jsxs)("div", {
                className: er.VW,
                children: [
                    (0, l.jsx)(E.E, { variant: "text-sm/medium", className: er.UU, lineClamp: 1, children: es }),
                    (eA || em) &&
                        (0, l.jsxs)("div", {
                            className: er.J2,
                            children: [
                                eA
                                    ? (0, l.jsx)(Z.A, { size: "custom", color: P, channel: b, className: er.RI })
                                    : null != T
                                      ? (0, l.jsx)(K.A, { icon: T, className: er.RI })
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
                (0, l.jsx)("div", { className: er.r$, children: (0, l.jsx)(W.n, { dotRadius: 2, themed: !0 }) }),
            "success" === m &&
                (0, l.jsx)(E.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: er.h5,
                    lineClamp: 1,
                    children: ea.intl.string(ea.t["8BEiNn"]),
                }),
            null == m &&
                !s &&
                (0, l.jsx)("div", {
                    className: er.SB,
                    children: (0, l.jsx)(j.R, { color: "currentColor", size: "sm", className: er.Kk }),
                }),
            s &&
                !I &&
                (0, l.jsx)(v.m, {
                    text: g,
                    children: (0, l.jsx)(S.D, {
                        className: a()(er.D9, eo.button, eo.secondary, { [er.r9]: x }),
                        onClick: L,
                        "aria-disabled": x,
                        children: (0, l.jsx)(h, { size: "xxs", color: p, className: er.Kk }),
                    }),
                }),
        ],
    });
}
i(281405);
var eA = i(89682),
    eh = i(80442);
let ep = (e) => 1 - Math.pow(1 - e, 4);
function eg(e) {
    let { channel: t, onClose: s } = e,
        c = n.useRef(null),
        o = n.useRef(null),
        [d, u] = n.useState(!1),
        m = n.useRef(null),
        A = n.useRef(null),
        [h, p] = n.useState(0),
        { analyticsLocations: g } = (0, O.Ay)(b.A.VOICE_INVITE_SUGGESTIONS);
    (0, P.A)({
        name: I.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: I.ImpressionTypes.VIEW,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: g },
    });
    let R = (0, r.bG)([k.A], () => k.A.can(w.xBc.CREATE_INSTANT_INVITE, t), [t]),
        D = (0, r.bG)([V.A], () => V.A.getGuild(t.guild_id)),
        [M, U] = n.useState(!1),
        z = n.useRef(null),
        { isHoveringOrFocusing: H } = (0, G.A)(R ? c : z),
        [W, F] = n.useState(!1),
        { isFocusing: Y } = (0, G.A)(o),
        B = H || W,
        $ = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                L.default.track(w.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
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
        K = n.useCallback(() => {
            null != D &&
                (0, f.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("57325"),
                        i.e("76664"),
                        i.e("59957"),
                        i.e("28136"),
                        i.e("16084"),
                        i.e("22547"),
                    ]).then(i.bind(i, 1310));
                    return (i) => (0, l.jsx)(e, { ...i, guild: D, channel: t, source: w.PE1.VOICE_INVITE_SUGGESTIONS });
                });
        }, [D, t]),
        [q, X] = (0, N.z)(() => ({
            from: { height: "0px" },
            to: { height: "32px" },
            config: { duration: 200, easing: ep, clamp: !0 },
        })),
        J = n.useCallback(
            (e) => {
                U(!0), X({ to: { height: "0px" }, onRest: () => $(e) });
            },
            [X, $],
        ),
        Z = n.useCallback(
            () => (
                null != m.current && clearTimeout(m.current),
                (m.current = setTimeout(() => J("timeout"), 1e4)),
                p((e) => e + 1),
                () => {
                    null != m.current && clearTimeout(m.current);
                }
            ),
            [J],
        ),
        Q = n.useCallback(
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
    (0, T.Ay)(Z),
        n.useEffect(() => {
            if (!B) {
                Z(), Q();
                return;
            }
            null != m.current && clearTimeout(m.current), null != A.current && clearTimeout(A.current), u(!0);
        }, [B, Z, Q]);
    let ee = n.useCallback(() => {
            u(!0);
        }, []),
        et = n.useCallback(() => {
            u(!1), F(!1);
        }, []);
    return R
        ? (0, l.jsx)(y.Y, {
              targetElementRef: c,
              shouldShow: d,
              position: "right",
              align: "top",
              spacing: 17,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) => (0, l.jsx)(eu, { channel: t, onHoverOrFocus: F, ...e }),
              onRequestOpen: ee,
              onRequestClose: et,
              children: (e) => {
                  let { onClick: t, ...i } = e;
                  return (0, l.jsx)(x.animated.div, {
                      className: eA.lY,
                      style: q,
                      children: (0, l.jsx)(S.D, {
                          innerRef: c,
                          className: a()({ [eA.vk]: !M }, eh.q7, eh.L9, eh.vk),
                          "aria-disabled": M,
                          "aria-label": ea.intl.string(ea.t.F3qiJr),
                          onClick: K,
                          ignoreKeyPress: Y,
                          ...i,
                          children: (0, l.jsxs)("div", {
                              className: a()(eA.Qs, eh.Qs),
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: eA.R4,
                                      style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                      children: [
                                          (0, l.jsxs)(
                                              "svg",
                                              {
                                                  className: a()(eA.O1, { [eA.Ft]: B }),
                                                  viewBox: "0 0 24 24",
                                                  style: { "--custom-voice-invite-suggestions-timer-duration": 1e4 },
                                                  children: [
                                                      (0, l.jsx)("circle", { className: eA.qB }),
                                                      (0, l.jsx)("circle", { className: eA.hN }),
                                                  ],
                                              },
                                              `voice-invite-suggestions-timer-${h}`,
                                          ),
                                          (0, l.jsx)(j.R, {
                                              size: "custom",
                                              width: 14,
                                              height: 14,
                                              color: "currentColor",
                                              className: a()(eA.Hk, eA.Kk),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(v.m, {
                                      text: ea.intl.string(ea.t["EE+P0H"]),
                                      overflowOnly: !0,
                                      children: (0, l.jsx)(E.E, {
                                          variant: "text-sm/medium",
                                          className: eA.Pf,
                                          lineClamp: 1,
                                          children: ea.intl.string(ea.t["EE+P0H"]),
                                      }),
                                  }),
                                  (0, l.jsx)("div", {
                                      ref: o,
                                      children: H
                                          ? (0, l.jsx)(S.D, {
                                                className: eA.VN,
                                                onClick: (e) => {
                                                    e.stopPropagation(), J("user_explicit");
                                                },
                                                "aria-label": ea.intl.string(ea.t.cpT0Cq),
                                                children: (0, l.jsx)(C.P, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: eA.Kk,
                                                }),
                                            })
                                          : (0, l.jsx)(_._, { size: "xs", color: "currentColor", className: eA.Kk }),
                                  }),
                              ],
                          }),
                      }),
                  });
              },
          })
        : null;
}
var ex = i(551826),
    eI = i(25528),
    ev = i(530804),
    ef = i(481947),
    eN = i(591346),
    ey = i(334885),
    eS = i(616356),
    ej = i(495544),
    eE = i(761853),
    eC = i(528767),
    e_ = i(485296),
    eT = i(977997),
    eb = i(406810),
    eO = i(442433),
    eP = i(609425),
    eG = i(252545),
    eV = i(769022),
    ek = i(287809),
    eL = i(562153),
    eR = i(850457),
    eD = i(601884);
function eM(e) {
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
    let u = (0, r.bG)([eV.A, ek.default], () => {
            let e = eV.A.getLastLeftUserId(t.id);
            return null != e ? ek.default.getUser(e) : null;
        }, [t.id]),
        m = eL.Ay.useName(t.guild_id, t.id, u),
        A = (0, eP.A)({ userId: u?.id, guildId: t.guild_id }),
        h = (0, eG.a)({ displayNameStyles: A }),
        p = (e) => {
            e.preventDefault(),
                null != u &&
                    (0, eO.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            i.e("26439"),
                            i.e("36697"),
                            i.e("50671"),
                            i.e("88667"),
                            i.e("17534"),
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
                  (0, l.jsx)(eR.A, { channel: t, source: "ghost_user", onMouseEnter: g, onMouseLeave: x }),
              children: (e) => {
                  let { onClick: i, ...n } = e;
                  return (0, l.jsxs)(S.D, {
                      innerRef: o,
                      className: eD.nM,
                      "aria-haspopup": "dialog",
                      onClick: g,
                      onContextMenu: p,
                      ...n,
                      onMouseLeave: x,
                      children: [
                          (0, l.jsxs)("div", {
                              className: eD.R3,
                              children: [
                                  (0, l.jsx)(H.eu, {
                                      src: u.getAvatarURL(t.guild_id, 24),
                                      size: z._3.SIZE_24,
                                      "aria-hidden": !0,
                                      status: w.clD.INVISIBLE,
                                      statusColor: "currentColor",
                                  }),
                                  (0, l.jsx)(eb.O, { className: eD.SM }),
                              ],
                          }),
                          (0, l.jsx)(E.E, {
                              variant: "text-sm/normal",
                              className: eD.Pf,
                              children: ea.intl.format(ea.t.TlVwqn, {
                                  user: m,
                                  userHook: (e, t) =>
                                      (0, l.jsx)(
                                          E.E,
                                          {
                                              variant: "text-sm/semibold",
                                              className: a()(eD.Xh, h),
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
var eU = i(597601),
    ew = i(367513),
    ez = i(730852),
    eH = i(401843),
    eW = i(296216),
    eF = i(480890),
    eY = i(643501),
    eB = i(544105),
    e$ = i(652896),
    eK = i(279250),
    eq = i(346846),
    eX = i(342296),
    eJ = i(364522),
    eZ = i(80682),
    eQ = i(461213),
    e0 = i(765379);
let e2 = (e) =>
    ([w.$pd.PLAYING, w.$pd.WATCHING].includes(e.type) &&
        [e.name, e.application_id, e.assets, e.state, e.details, e.party].some((e) => null != e)) ||
    e.type === w.$pd.LISTENING;
var e6 = i(685399),
    e1 = i(960076),
    e3 = i(323073),
    e7 = i(85451),
    e9 = i(268218),
    e5 = i(834757),
    e8 = i(566668),
    e4 = i(832163),
    te = i(565688),
    tt = i(533562),
    ti = i(927813),
    tl = i(329554);
let tn = (0, i(600975).C)({
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
var ts = i(699976),
    ta = i(415679);
let tr = (0, e9.Fe)({
    createPromise: () =>
        Promise.all([
            i.e("26439"),
            i.e("51402"),
            i.e("38123"),
            i.e("21177"),
            i.e("95369"),
            i.e("69953"),
            i.e("26105"),
            i.e("46461"),
            i.e("44657"),
            i.e("43147"),
            i.e("21929"),
            i.e("98193"),
            i.e("45650"),
            i.e("26963"),
            i.e("22169"),
            i.e("36697"),
            i.e("38666"),
            i.e("37144"),
            i.e("59590"),
            i.e("57325"),
            i.e("38376"),
            i.e("31460"),
            i.e("39501"),
            i.e("26837"),
            i.e("17534"),
            i.e("41853"),
            i.e("70682"),
            i.e("69977"),
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
            i.e("81210"),
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
            i.e("83255"),
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
            i.e("4193"),
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
            i.e("18489"),
            i.e("46430"),
            i.e("90779"),
            i.e("39808"),
            i.e("9763"),
            i.e("20667"),
        ]).then(i.bind(i, 963614)),
    webpackId: 963614,
});
function tc(e) {
    let { user: t, channel: i, activity: n, activityApplicationId: s, withGiftingBreadcrumb: a, onAction: r } = e,
        c = (0, l.jsx)(tl.A, { presenceActivity: n, channel: i, userId: t.id, onAction: r });
    return a && null != s
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  c,
                  (0, l.jsx)(tr, {
                      className: ta.L,
                      applicationId: s,
                      rewardOfferNoticeClassName: ta.Nh,
                      userIds: [t.id],
                      location: "voice_channel",
                      guildId: i.guild_id,
                      channelId: i.id,
                      numWishlistItems: 2,
                      cardSpec: ts.Z.SIZE_110,
                  }),
              ],
          })
        : c;
}
function to(e) {
    let { user: t, guildId: i, channelId: n } = e,
        s = (0, r.bG)([et.Ay], () => et.Ay.getMember(i, t.id)),
        a = en.Ay.useName(t),
        c = s?.nick ?? a,
        { avatarDecorationSrc: o, avatarSrc: d } = (0, J.A)({ userId: t.id, size: z._3.SIZE_32, guildId: i }),
        {
            status: u,
            isMobileOnline: m,
            activities: A,
        } = (0, r.cf)([el.A], () => ({
            status: el.A.getStatus(t.id, i),
            isMobileOnline: el.A.isMobileOnline(t.id),
            activities: el.A.getActivities(t.id, i),
        })),
        h = (0, r.bG)([eT.A], () => eT.A.getVoiceStateForChannel(n, t.id)?.connectedAt),
        p = null != h ? new Date(h * ti.A.Millis.SECOND).getTime() : null;
    return (0, l.jsxs)("div", {
        className: ta.aq,
        children: [
            (0, l.jsx)(H.eu, {
                src: d,
                size: z._3.SIZE_32,
                "aria-label": c,
                avatarDecoration: o,
                status: (0, e1.A)(A) ? w.clD.STREAMING : u === w.clD.OFFLINE ? void 0 : u,
                isMobile: m,
                className: ta.my,
            }),
            (0, l.jsxs)("div", {
                className: ta.Qq,
                children: [
                    (0, l.jsx)(E.E, { variant: "text-sm/medium", lineClamp: 1, children: c }),
                    null != p && (0, l.jsx)(e7.z, { textColor: "text-feedback-positive", entry: { start: p } }),
                ],
            }),
        ],
    });
}
function td(e) {
    let t,
        i,
        { channel: s, user: c, onAction: o, excludeActivity: d, onWatchStream: u } = e,
        m = n.useMemo(() => ({ [s.guild_id]: [c.id] }), [s.guild_id, c.id]);
    (0, eZ.Eq)(m, "VoiceUserActivities");
    let { enabled: A } = tn.useExperiment({ guildId: s.guild_id, location: "VoiceUserPopout" }),
        [h, p] = (0, r.yK)(
            [eS.A],
            () => [eS.A.getStreamForUser(c.id, s.getGuildId()), eS.A.getActiveStreamForUser(c.id, s.getGuildId())],
            [s, c.id],
        ),
        [g, x] = (0, r.yK)([eT.A, V.A, k.A, eY.default], () => (0, eK.eo)(s, eT.A, V.A, k.A, eY.default)),
        I = (0, r.bG)([ej.default], () => ej.default.getId()),
        v = (0, r.bG)([el.A], () => (0, e5.nr)(h, el.A), [h]),
        f = (0, e3.r9)() && (0, e3.UK)(s.id),
        N =
            ((t = (0, e6.Ay)(s)),
            (i = n.useMemo(() => t.filter((e) => e.embeddedActivity.userIds.has(c.id)), [t, c.id])),
            [...(0, e6.Rz)(i).values()]),
        y = (0, tt.W)(),
        S = (0, te.m)({ location: "voice_channel_activities" }),
        j = (0, r.bG)([e4.A], () => e4.A.getDetectableIdsToApplicationIds()),
        E = d ?? v,
        C = (0, r.yK)([eQ.A, el.A, ej.default], () => {
            let e = c.id === ej.default.getId() ? eQ.A.getActivities() : el.A.getActivities(c.id),
                t = new Map();
            for (let i of e) {
                if (
                    !e2(i) ||
                    (0, e0.A)(i) ||
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
                L.default.track(w.HAw.OPEN_POPOUT, {
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
                (0, l.jsx)(e8.P, {
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
                    tl.A,
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
                    tc,
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
              className: a()(ec.popover, ta.Db),
              children: [
                  (0, l.jsx)(to, { user: c, guildId: s.guild_id, channelId: s.id }),
                  T && (0, l.jsx)(eJ.Ip, { className: a()(ec.popover, ta.XG), children: O }),
              ],
          })
        : (0, l.jsx)(eJ.Ip, { className: a()(ec.popover, ta.kL), children: O });
}
var tu = i(325278),
    tm = i(976358);
function tA(e) {
    let { numUsers: t } = e;
    return (0, l.jsx)("div", {
        className: tm.BN,
        children: (0, l.jsxs)(E.E, { color: "text-muted", variant: "text-sm/medium", children: ["+", t] }),
    });
}
function th(e) {
    let { numAudience: t, collapsed: i } = e,
        n = i ? t : ea.intl.formatToPlainString(ea.t["+v2pN2"], { count: t });
    return (0, l.jsxs)("div", {
        className: a()(tm.yJ, { [tm.Nr]: i }),
        children: [
            (0, l.jsx)("div", {
                className: tm.$L,
                children: (0, l.jsx)(eU.L, { size: "md", color: "currentColor", className: tm.wG }),
            }),
            (0, l.jsx)(E.E, { color: "text-muted", variant: "text-sm/medium", children: n }),
        ],
    });
}
let tp = (0, eW.J)(function (e) {
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
            hidePreview: O,
            shouldShowHoverPopout: P,
            otherClientSessionType: G,
            voicePlatform: L,
            isSelfOnOtherClient: R = !1,
            tabIndex: D,
            isSelf: M,
            application: U,
            game: w,
        } = e,
        z = (0, X.Ay)(r),
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
            clearTimeout(Y.current), O?.(s.id);
        };
    n.useEffect(
        () => () => {
            clearTimeout(Y.current);
        },
        [],
    );
    let q = () => {
            if (!j || !(0, eK.eo)(r, eT.A, V.A, k.A, eY.default)[0]) return;
            let e = { streamType: tu.U4.GUILD, ownerId: s.id, channelId: r.id, guildId: r.guild_id };
            ej.default.getId() !== s.id && ez.default.selectVoiceChannel(r.id),
                E ? ((0, eq.A)(e), ew.A.selectParticipant(e.channelId, (0, e$._z)(e))) : (0, eH.Nl)(e),
                O?.(s.id);
        },
        J = (e) => {
            (0, eO.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    i.e("26439"),
                    i.e("36697"),
                    i.e("50671"),
                    i.e("88667"),
                    i.e("17534"),
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
                        onInteraction: (0, eF.s)("GuildChannelUserContextMenu", b.A.VOICE_USER, { targetUserId: s.id }),
                    });
            });
        },
        Z = (0, l.jsx)("div", {
            className: tm.kZ,
            "data-dnd-name": z,
            onMouseEnter: R
                ? void 0
                : () => {
                      W || (Y.current = setTimeout(() => T?.(s.id), 100));
                  },
            onMouseLeave: R ? void 0 : K,
            children: (0, l.jsx)(eX.A, {
                clickTrap: s?.id === ek.default.getCurrentUser()?.id && W,
                targetElementRef: H,
                user: s,
                guildId: r.guild_id,
                channelId: r.id,
                newAnalyticsLocations: [b.A.VOICE_USER],
                shouldShow: W,
                onRequestClose: () => F(!1),
                children: (e) => {
                    let i, n;
                    return (
                        (i = eB.hv.has(G ?? "")),
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
                            voicePlatform: L,
                            embeddedApplication: A,
                            avatarContainerClass: a()({ [tm.dj]: !0 }),
                            disabled: R && !i,
                            selected: W,
                            onClick: i ? void 0 : B,
                            onDoubleClick: q,
                            onContextMenu: J,
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
                                              case eB.f$.XBOX:
                                                  return ea.intl.string(ea.t.T0uYK9);
                                              case eB.f$.PLAYSTATION:
                                                  return ea.intl.string(ea.t.FWAzS6);
                                          }
                                      })(G) ?? ea.intl.string(ea.t.IyYqqY),
                                  children: (0, l.jsx)(ef.Ay, { ref: H, ...n }),
                              })
                            : (0, l.jsx)(y.Y, {
                                  targetElementRef: H,
                                  position: "right",
                                  renderPopout: () =>
                                      (0, l.jsx)(td, {
                                          channel: r,
                                          user: s,
                                          onAction: K,
                                          onWatchStream: j ? q : void 0,
                                      }),
                                  shouldShow: P && !W,
                                  onRequestClose: $,
                                  spacing: 17,
                                  children: () =>
                                      (0, l.jsx)(ef.Ay, {
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
var tg = i(31408),
    tx = i(588533);
let tI = n.memo((e) => {
    let { mute: t, deaf: i, user: n, channel: s, sessionId: a, nick: c } = e,
        g = n.id,
        x = (0, r.bG)([ej.default], () => ej.default.getId() === g, [g]),
        [I, v, f] = (0, r.yK)(
            [eE.Ay],
            () =>
                x
                    ? [
                          !eE.Ay.isSupported() || eE.Ay.isSelfMute() || eE.Ay.isSelfMutedTemporarily(),
                          eE.Ay.isSelfDeaf(),
                          !1,
                      ]
                    : [!eE.Ay.isSupported() || eE.Ay.isLocalMute(g), !1, eE.Ay.isLocalVideoDisabled(g)],
            [x, g],
        ),
        N = (0, r.bG)([e_.A], () => e_.A.isPrioritySpeaker(g)),
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
        _ = (0, eI.Ay)(g, s.guild_id)[0],
        T = (0, u.YY)(_?.application_id).data ?? void 0,
        { gameRecord: b } = (function (e) {
            let t = (0, m.h)(e),
                i = null != e && null == t,
                l = t?.getCanonicalGameId() ?? null,
                { data: n, isLoading: s } = (0, h.I)(l);
            return { gameId: l, gameRecord: n ?? null, isLoading: i || s };
        })(_?.application_id),
        [O, P] = (0, r.yK)(
            [eS.A],
            () => [eS.A.getStreamForUser(g, s.getGuildId()), eS.A.getActiveStreamForUser(g, s.getGuildId())],
            [s, g],
        ),
        G = (0, r.bG)([eC.A], () => eC.A.getSessionById(a)),
        V = en.Ay.useName(n),
        k = (0, r.bG)([eT.A], () => eT.A.getVoicePlatformForChannel(s.id, g), [s.id, g]),
        L = (0, ev.uy)(s.id, g);
    return (0, l.jsx)(ex.A, {
        shakeLocation: tg.uD.VOICE_USER,
        isShaking: y,
        children: (0, l.jsx)(tp, {
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
            isWatching: null != P && P.state !== w.XYD.ENDED,
            isGuest: S,
            isSelf: x,
            application: _?.session_id != null ? T : void 0,
            game: _?.session_id != null ? (b ?? void 0) : void 0,
        }),
    });
});
tI.displayName = "ConnectedVoiceUser";
let tv = [],
    tf = function (e) {
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
            E = (0, ev.$n)(s.id, o ?? tv),
            { showGhostUser: C } = (0, eN.G8)({ guildId: s.guild_id, location: "VoiceUsers" }),
            _ = (0, ey.A)({ guildId: s.guild_id, location: "VoiceUsers" }),
            { shouldShow: T, dismiss: b } = (0, es.Z0)(s, { collapsed: d, disabled: N }),
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
            L = n.useCallback(
                (e) => {
                    t && (P.current.cancel(), (j.current = null), G.current.delay());
                },
                [t],
            ),
            R = (0, r.bG)([k.A], () => k.A.can(w.xBc.MOVE_MEMBERS, s)),
            D = i && R,
            M = (0, r.yK)([el.A], () => {
                if (d) return [];
                let e = new Set();
                return (
                    E?.forEach((t) => {
                        let { user: i } = t;
                        el.A.getActivities(i.id, s.guild_id).forEach((t) => {
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
                        tI,
                        {
                            user: i,
                            nick: n,
                            isSelfOnOtherClient:
                                ej.default.getId() === i.id && a.sessionId !== ej.default.getSessionId(),
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
                            hidePreview: L,
                            shouldShowHoverPopout: y === i.id,
                            tabIndex: h,
                        },
                        `voice-user-${i.id}-${r}`,
                    );
                });
            return (
                null != p && p > 0
                    ? i.push((0, l.jsx)(th, { collapsed: d, numAudience: p }, "audience"))
                    : d && E.length > u + 1 && i.push((0, l.jsx)(tA, { numUsers: E.length - u }, "collapsed-users")),
                _ && C && !d && s.type === w.rbe.GUILD_VOICE && i.push((0, l.jsx)(eM, { channel: s }, "ghost-user")),
                T && "bottom" === O
                    ? i.push((0, l.jsx)(eg, { channel: s, onClose: b }, "voice-invite-suggestions-button"))
                    : T &&
                      "top" === O &&
                      i.unshift((0, l.jsx)(eg, { channel: s, onClose: b }, "voice-invite-suggestions-button")),
                i
            );
        })();
        return null == U && null == v
            ? null
            : (0, l.jsxs)(ef.Wr, {
                  className: a()(I, tx.p_, { [tx.yZ]: d, [tx.lY]: x, [tx.fT]: f }),
                  collapsed: d,
                  children: [U, v],
              });
    };
