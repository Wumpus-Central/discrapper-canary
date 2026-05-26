i.d(t, { A: () => tu }), i(321073), i(667532);
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
    f = i(562708),
    v = i(990078),
    I = i(192308),
    y = i(717421),
    S = i(922016),
    N = i(939249),
    j = i(283973),
    T = i(834730),
    C = i(789645),
    E = i(320448),
    _ = i(964486),
    b = i(775602),
    P = i(793574),
    O = i(688810),
    G = i(139286),
    k = i(713517),
    V = i(71393),
    D = i(576705),
    R = i(174459),
    L = i(284009),
    U = i.n(L),
    M = i(177953),
    w = i(133171),
    z = i(652215),
    W = i(778712),
    F = i(97808),
    $ = i(863610),
    H = i(376728),
    Y = i(774300),
    B = i(566903),
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
    ec = i(869397),
    eo = i(77006),
    ed = i(813013);
let eu = "VoiceInviteSuggestionsPopover";
function em(e) {
    let { channel: t, onHoverOrFocus: s, setPopoutRef: r, closePopout: c } = e,
        o = n.useRef(null),
        d = (0, k.A)(o),
        u = (0, ea.kt)({ channel: t }),
        { enabled: m } = ee.A.useExperiment({ guildId: t.guild_id, location: "VoiceInviteSuggestionsPopover" }),
        { analyticsLocations: A } = (0, O.Ay)(P.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, G.A)({
        name: f.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
        type: f.ImpressionTypes.POPOUT,
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
        U()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, I.openModalLazy)(async () => {
                let { default: n } = await Promise.all([
                    i.e("17393"),
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
                    (0, l.jsx)(T.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: ec.DD,
                        children: er.intl.string(er.t["EE+P0H"]),
                    }),
                (0, l.jsxs)("ul", {
                    className: ec.p_,
                    children: [
                        u.map((e) => (0, l.jsx)(eA, { channel: t, user: e, ringingEnabled: m }, e.id)),
                        (0, l.jsxs)(N.D, {
                            tag: "li",
                            onClick: h,
                            className: a()(ec.nM, ec.vk),
                            children: [
                                (0, l.jsx)("div", {
                                    className: ec.R4,
                                    children: (0, l.jsx)(M.n, { size: "custom", className: ec.Kk }),
                                }),
                                (0, l.jsx)(T.E, {
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
        { isHoveringOrFocusing: u } = (0, k.A)(o),
        [m, A] = n.useState(null),
        {
            icon: h,
            iconColor: p,
            tooltipText: g,
            disabled: x,
            shouldHideButton: f,
            onClick: I,
        } = (0, et.A)({ user: i, channel: t, location: eu }),
        {
            status: y,
            isMobileOnline: S,
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
        { activityStatusText: E, activityStatusIcon: _ } = n.useMemo(() => {
            let e = C.find((e) => e.type !== z.$pd.CUSTOM_STATUS && e.type !== z.$pd.HANG_STATUS);
            return { activityStatusText: (0, B.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, X.f)(e) };
        }, [C]),
        { voiceChannel: b } = (0, K.A)({ userId: i.id }),
        P = (0, J.Ay)(b),
        O = (0, w.S3)(z.clD.ONLINE),
        G = "success" === m || "sending" === m,
        V = n.useCallback(
            (e) => {
                e.stopPropagation(), x || I();
            },
            [I, x],
        ),
        R = n.useCallback(async () => {
            if (G) return;
            async function e() {
                let e = el.A.getInvite(t.id, {}) ?? null;
                if (null == e) {
                    if (!D.A.can(z.xBc.CREATE_INSTANT_INVITE, t)) return null;
                    try {
                        await H.Ay.createInvite(t.id, {}, eu);
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
                : Y.A.enqueue(
                      {
                          type: Y.F.USER,
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
            avatarDecorationSrc: L,
            avatarSrc: U,
            eventHandlers: M,
        } = (0, Z.A)({ userId: i.id, size: W._3.SIZE_24, animateOnHover: !u, guildId: c });
    if (null == d) return null;
    let ee = es.Ay.getName(i),
        ea = er.intl.string(er.t.jYnGPG),
        eo = y !== z.clD.OFFLINE ? y : void 0,
        em = null != E.text,
        eA = null != b && null != P;
    return (0, l.jsxs)(N.D, {
        innerRef: o,
        tag: "li",
        className: a()(ec.nM, { [ec.vk]: !G }),
        "aria-disabled": G,
        onClick: R,
        "aria-label": ea,
        children: [
            (0, l.jsx)(F.eu, {
                className: ec.my,
                "aria-label": ee,
                size: W._3.SIZE_24,
                src: U,
                avatarDecoration: L,
                status: eo,
                isMobile: S,
                ...M,
            }),
            (0, l.jsxs)("div", {
                className: ec.VW,
                children: [
                    (0, l.jsx)(T.E, { variant: "text-sm/medium", className: ec.UU, lineClamp: 1, children: ee }),
                    (eA || em) &&
                        (0, l.jsxs)("div", {
                            className: ec.J2,
                            children: [
                                eA
                                    ? (0, l.jsx)(Q.A, { size: "custom", color: O, channel: b, className: ec.RI })
                                    : null != _
                                      ? (0, l.jsx)(q.A, { icon: _, className: ec.RI })
                                      : null,
                                (0, l.jsx)(T.E, {
                                    variant: "text-xs/medium",
                                    color: "text-status-online",
                                    lineClamp: 1,
                                    children: eA ? P : E.text,
                                }),
                            ],
                        }),
                ],
            }),
            "sending" === m &&
                (0, l.jsx)("div", { className: ec.r$, children: (0, l.jsx)($.n, { dotRadius: 2, themed: !0 }) }),
            "success" === m &&
                (0, l.jsx)(T.E, {
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
                !f &&
                (0, l.jsx)(v.m, {
                    text: g,
                    children: (0, l.jsx)(N.D, {
                        className: a()(ec.D9, ed.button, ed.secondary, { [ec.r9]: x }),
                        onClick: V,
                        "aria-disabled": x,
                        children: (0, l.jsx)(h, { size: "xxs", color: p, className: ec.Kk }),
                    }),
                }),
        ],
    });
}
i(281405);
var eh = i(793042),
    ep = i(58298);
let eg = (e) => 1 - Math.pow(1 - e, 4);
function ex(e) {
    let { channel: t, onClose: s } = e,
        c = n.useRef(null),
        o = n.useRef(null),
        [d, u] = n.useState(!1),
        m = n.useRef(null),
        A = n.useRef(null),
        [h, p] = n.useState(0),
        { analyticsLocations: g } = (0, O.Ay)(P.A.VOICE_INVITE_SUGGESTIONS);
    (0, G.A)({
        name: f.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: f.ImpressionTypes.VIEW,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: g },
    });
    let L = (0, r.bG)([D.A], () => D.A.can(z.xBc.CREATE_INSTANT_INVITE, t), [t]),
        U = (0, r.bG)([V.A], () => V.A.getGuild(t.guild_id)),
        M = (0, r.bG)([b.A], () => b.A.useReducedMotion),
        [w, W] = n.useState(!1),
        F = n.useRef(null),
        { isHoveringOrFocusing: $ } = (0, k.A)(L ? c : F),
        [H, Y] = n.useState(!1),
        { isFocusing: B } = (0, k.A)(o),
        K = $ || H,
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
            null != U &&
                (0, I.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("17393"),
                        i.e("59957"),
                        i.e("28136"),
                        i.e("16084"),
                        i.e("22547"),
                    ]).then(i.bind(i, 1310));
                    return (i) => (0, l.jsx)(e, { ...i, guild: U, channel: t, source: z.PE1.VOICE_INVITE_SUGGESTIONS });
                });
        }, [U, t]),
        [J, Z] = (0, y.z)(() => ({
            from: { height: "0px" },
            to: { height: "32px" },
            config: { duration: 200, easing: eg, clamp: !0 },
        })),
        Q = n.useCallback(
            (e) => {
                W(!0), Z({ to: { height: "0px" }, onRest: () => q(e) });
            },
            [Z, q],
        ),
        ee = n.useCallback(() => {
            null != m.current && clearTimeout(m.current);
            let e = () => {
                null != m.current && clearTimeout(m.current);
            };
            return M || ((m.current = setTimeout(() => Q("timeout"), 1e4)), p((e) => e + 1)), e;
        }, [Q, M]),
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
    (0, _.Ay)(ee),
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
            u(!1), Y(!1);
        }, []);
    return L
        ? (0, l.jsx)(S.Y, {
              targetElementRef: c,
              shouldShow: d,
              position: "right",
              align: "top",
              spacing: 17,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) => (0, l.jsx)(em, { channel: t, onHoverOrFocus: Y, ...e }),
              onRequestOpen: ei,
              onRequestClose: el,
              children: (e) => {
                  let { onClick: t, ...i } = e;
                  return (0, l.jsx)(x.animated.div, {
                      className: eh.lY,
                      style: J,
                      children: (0, l.jsx)(N.D, {
                          innerRef: c,
                          className: a()({ [eh.vk]: !w }, ep.q7, ep.L9, ep.vk),
                          "aria-disabled": w,
                          "aria-label": er.intl.string(er.t.F3qiJr),
                          onClick: X,
                          ignoreKeyPress: B,
                          ...i,
                          children: (0, l.jsxs)("div", {
                              className: a()(eh.Qs, ep.Qs),
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: eh.R4,
                                      style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                      children: [
                                          M
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
                                      children: (0, l.jsx)(T.E, {
                                          variant: "text-sm/medium",
                                          className: eh.Pf,
                                          lineClamp: 1,
                                          children: er.intl.string(er.t["EE+P0H"]),
                                      }),
                                  }),
                                  (0, l.jsx)("div", {
                                      ref: o,
                                      children: $
                                          ? (0, l.jsx)(N.D, {
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
                                          : (0, l.jsx)(E._, { size: "xs", color: "currentColor", className: eh.Kk }),
                                  }),
                              ],
                          }),
                      }),
                  });
              },
          })
        : null;
}
var ef = i(551826),
    ev = i(25528),
    eI = i(530804),
    ey = i(481947),
    eS = i(616356),
    eN = i(495544),
    ej = i(761853),
    eT = i(528767),
    eC = i(485296),
    eE = i(977997),
    e_ = i(597601),
    eb = i(367513),
    eP = i(442433),
    eO = i(730852),
    eG = i(401843),
    ek = i(296216),
    eV = i(480890),
    eD = i(643501),
    eR = i(544105),
    eL = i(652896),
    eU = i(279250),
    eM = i(346846),
    ew = i(342296),
    ez = i(287809),
    eW = i(364522),
    eF = i(80682),
    e$ = i(461213),
    eH = i(765379);
let eY = (e) =>
    ([z.$pd.PLAYING, z.$pd.WATCHING].includes(e.type) &&
        [e.name, e.application_id, e.assets, e.state, e.details, e.party].some((e) => null != e)) ||
    e.type === z.$pd.LISTENING;
var eB = i(685399),
    eK = i(960076),
    eq = i(323073),
    eX = i(85451),
    eJ = i(268218),
    eZ = i(834757),
    eQ = i(566668),
    e0 = i(832163),
    e1 = i(565688),
    e6 = i(533562),
    e2 = i(927813),
    e3 = i(329554);
let e9 = (0, i(600975).C)({
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
var e7 = i(699976),
    e4 = i(713983);
let e5 = (0, eJ.Fe)({
    createPromise: () =>
        Promise.all([
            i.e("48424"),
            i.e("24769"),
            i.e("92267"),
            i.e("85934"),
            i.e("35304"),
            i.e("32637"),
            i.e("40965"),
            i.e("96413"),
            i.e("69117"),
            i.e("44549"),
            i.e("31880"),
            i.e("3040"),
            i.e("32106"),
            i.e("93814"),
            i.e("20248"),
            i.e("46475"),
            i.e("96217"),
            i.e("92060"),
            i.e("75370"),
            i.e("43902"),
            i.e("17393"),
            i.e("67965"),
            i.e("81055"),
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
            i.e("2773"),
            i.e("74016"),
            i.e("19551"),
            i.e("84569"),
            i.e("36845"),
            i.e("3178"),
            i.e("7743"),
            i.e("45959"),
            i.e("45587"),
            i.e("95569"),
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
            i.e("86026"),
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
function e8(e) {
    let { user: t, channel: i, activity: n, activityApplicationId: s, withGiftingBreadcrumb: a, onAction: r } = e,
        c = (0, l.jsx)(e3.A, { presenceActivity: n, channel: i, userId: t.id, onAction: r });
    return a && null != s
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  c,
                  (0, l.jsx)(e5, {
                      className: e4.L,
                      applicationId: s,
                      rewardOfferNoticeClassName: e4.Nh,
                      userIds: [t.id],
                      location: "voice_channel",
                      guildId: i.guild_id,
                      channelId: i.id,
                      numWishlistItems: 2,
                      cardSpec: e7.Z.SIZE_110,
                  }),
              ],
          })
        : c;
}
function te(e) {
    let { user: t, guildId: i, channelId: n } = e,
        s = (0, r.bG)([ei.Ay], () => ei.Ay.getMember(i, t.id)),
        a = es.Ay.useName(t),
        c = s?.nick ?? a,
        { avatarDecorationSrc: o, avatarSrc: d } = (0, Z.A)({ userId: t.id, size: W._3.SIZE_32, guildId: i }),
        {
            status: u,
            isMobileOnline: m,
            activities: A,
        } = (0, r.cf)([en.A], () => ({
            status: en.A.getStatus(t.id, i),
            isMobileOnline: en.A.isMobileOnline(t.id),
            activities: en.A.getActivities(t.id, i),
        })),
        h = (0, r.bG)([eE.A], () => eE.A.getVoiceStateForChannel(n, t.id)?.connectedAt),
        p = null != h ? new Date(h * e2.A.Millis.SECOND).getTime() : null;
    return (0, l.jsxs)("div", {
        className: e4.aq,
        children: [
            (0, l.jsx)(F.eu, {
                src: d,
                size: W._3.SIZE_32,
                "aria-label": c,
                avatarDecoration: o,
                status: (0, eK.A)(A) ? z.clD.STREAMING : u === z.clD.OFFLINE ? void 0 : u,
                isMobile: m,
                className: e4.my,
            }),
            (0, l.jsxs)("div", {
                className: e4.Qq,
                children: [
                    (0, l.jsx)(T.E, { variant: "text-sm/medium", lineClamp: 1, children: c }),
                    null != p && (0, l.jsx)(eX.z, { textColor: "text-feedback-positive", entry: { start: p } }),
                ],
            }),
        ],
    });
}
function tt(e) {
    let t,
        i,
        { channel: s, user: c, onAction: o, excludeActivity: d, onWatchStream: u } = e,
        m = n.useMemo(() => ({ [s.guild_id]: [c.id] }), [s.guild_id, c.id]);
    (0, eF.Eq)(m, "VoiceUserActivities");
    let { enabled: A } = e9.useExperiment({ guildId: s.guild_id, location: "VoiceUserPopout" }),
        [h, p] = (0, r.yK)(
            [eS.A],
            () => [eS.A.getStreamForUser(c.id, s.getGuildId()), eS.A.getActiveStreamForUser(c.id, s.getGuildId())],
            [s, c.id],
        ),
        [g, x] = (0, r.yK)([eE.A, V.A, D.A, eD.default], () => (0, eU.eo)(s, eE.A, V.A, D.A, eD.default)),
        f = (0, r.bG)([eN.default], () => eN.default.getId()),
        v = (0, r.bG)([en.A], () => (0, eZ.nr)(h, en.A), [h]),
        I = (0, eq.r9)() && (0, eq.UK)(s.id),
        y =
            ((t = (0, eB.Ay)(s)),
            (i = n.useMemo(() => t.filter((e) => e.embeddedActivity.userIds.has(c.id)), [t, c.id])),
            [...(0, eB.Rz)(i).values()]),
        S = (0, e6.W)(),
        N = (0, e1.m)({ location: "voice_channel_activities" }),
        j = (0, r.bG)([e0.A], () => e0.A.getDetectableIdsToApplicationIds()),
        T = d ?? v,
        C = (0, r.yK)([e$.A, en.A, eN.default], () => {
            let e = c.id === eN.default.getId() ? e$.A.getActivities() : en.A.getActivities(c.id),
                t = new Map();
            for (let i of e) {
                if (
                    !eY(i) ||
                    (0, eH.A)(i) ||
                    (null != T &&
                        ((null != T.application_id && i.application_id === T.application_id) ||
                            (null != T.name && i.name === T.name)))
                )
                    continue;
                let e = i.application_id ?? i.name;
                null == e || t.has(e) || t.set(e, i);
            }
            return Array.from(t.values());
        }, [c.id, T]),
        E = null != h && null != u && !I,
        _ = E || C.length > 0 || y.length > 0,
        b = _ || A;
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
    let P = (0, l.jsxs)(l.Fragment, {
        children: [
            E &&
                (0, l.jsx)(eQ.P, {
                    stream: h,
                    activeStream: p,
                    streamActivity: v,
                    user: c,
                    currentUserId: f,
                    canWatch: g,
                    unavailableReason: x,
                    onWatchStream: u,
                    onAction: o,
                    showHeader: !0,
                }),
            y.map((e) =>
                (0, l.jsx)(
                    e3.A,
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
                let t = S ?? e.application_id;
                return (0, l.jsx)(
                    e8,
                    {
                        user: c,
                        channel: s,
                        activityApplicationId: t,
                        activity: e,
                        withGiftingBreadcrumb: N && null != t && null != j[t],
                        onAction: o,
                    },
                    e.application_id,
                );
            }),
        ],
    });
    return A
        ? (0, l.jsxs)("div", {
              className: a()(eo.popover, e4.Db),
              children: [
                  (0, l.jsx)(te, { user: c, guildId: s.guild_id, channelId: s.id }),
                  _ && (0, l.jsx)(eW.Ip, { className: a()(eo.popover, e4.XG), children: P }),
              ],
          })
        : (0, l.jsx)(eW.Ip, { className: a()(eo.popover, e4.kL), children: P });
}
var ti = i(325278),
    tl = i(598694);
function tn(e) {
    let { numUsers: t } = e;
    return (0, l.jsx)("div", {
        className: tl.BN,
        children: (0, l.jsxs)(T.E, { color: "text-muted", variant: "text-sm/medium", children: ["+", t] }),
    });
}
function ts(e) {
    let { numAudience: t, collapsed: i } = e,
        n = i ? t : er.intl.formatToPlainString(er.t["+v2pN2"], { count: t });
    return (0, l.jsxs)("div", {
        className: a()(tl.yJ, { [tl.Nr]: i }),
        children: [
            (0, l.jsx)("div", {
                className: tl.$L,
                children: (0, l.jsx)(e_.L, { size: "md", color: "currentColor", className: tl.wG }),
            }),
            (0, l.jsx)(T.E, { color: "text-muted", variant: "text-sm/medium", children: n }),
        ],
    });
}
let ta = (0, ek.J)(function (e) {
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
            speaking: f,
            disconnected: I,
            connectUserDragSource: y,
            canDrag: N,
            isStreaming: j,
            isWatching: T,
            isGuest: C,
            priority: E,
            showPreview: _,
            hidePreview: b,
            shouldShowHoverPopout: O,
            otherClientSessionType: G,
            voicePlatform: k,
            isSelfOnOtherClient: R = !1,
            tabIndex: L,
            isSelf: U,
            application: M,
            game: w,
        } = e,
        z = (0, J.Ay)(r),
        W = n.useRef(null),
        [F, $] = n.useState(!1),
        H = n.useRef(null),
        Y = () => {
            $(!F);
        },
        B = (e) => {
            K();
        },
        K = () => {
            clearTimeout(H.current), b?.(s.id);
        };
    n.useEffect(
        () => () => {
            clearTimeout(H.current);
        },
        [],
    );
    let q = () => {
            if (!j || !(0, eU.eo)(r, eE.A, V.A, D.A, eD.default)[0]) return;
            let e = { streamType: ti.U4.GUILD, ownerId: s.id, channelId: r.id, guildId: r.guild_id };
            eN.default.getId() !== s.id && eO.default.selectVoiceChannel(r.id),
                T ? ((0, eM.A)(e), eb.A.selectParticipant(e.channelId, (0, eL._z)(e))) : (0, eG.Nl)(e),
                b?.(s.id);
        },
        X = (e) => {
            (0, eP.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    i.e("48424"),
                    i.e("93814"),
                    i.e("69117"),
                    i.e("98273"),
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
                    i.e("52168"),
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
                        onInteraction: (0, eV.s)("GuildChannelUserContextMenu", P.A.VOICE_USER, { targetUserId: s.id }),
                    });
            });
        },
        Z = (0, l.jsx)("div", {
            className: tl.kZ,
            "data-dnd-name": z,
            onMouseEnter: R
                ? void 0
                : () => {
                      F || (H.current = setTimeout(() => _?.(s.id), 100));
                  },
            onMouseLeave: R ? void 0 : K,
            children: (0, l.jsx)(ew.A, {
                clickTrap: s?.id === ez.default.getCurrentUser()?.id && F,
                targetElementRef: W,
                user: s,
                guildId: r.guild_id,
                channelId: r.id,
                newAnalyticsLocations: [P.A.VOICE_USER],
                shouldShow: F,
                onRequestClose: () => $(!1),
                children: (e) => {
                    let i, n;
                    return (
                        (i = eR.hv.has(G ?? "")),
                        (n = {
                            user: s,
                            speaking: f,
                            disconnected: I,
                            mute: c,
                            localMute: o,
                            localVideoDisabled: d,
                            isStreaming: j,
                            isGuest: C,
                            video: m,
                            priority: E,
                            ringing: x,
                            deaf: u,
                            nick: g,
                            collapsed: t,
                            overlap: t,
                            serverMute: h,
                            serverDeaf: p,
                            tabIndex: L,
                            otherClientSessionType: G,
                            voicePlatform: k,
                            embeddedApplication: A,
                            avatarContainerClass: a()({ [tl.dj]: !0 }),
                            disabled: R && !i,
                            selected: F,
                            onClick: i ? void 0 : Y,
                            onDoubleClick: q,
                            onContextMenu: X,
                            guildId: r.guild_id,
                            isSelf: U,
                            application: M,
                            game: w,
                            channelId: r.id,
                        }),
                        R
                            ? (0, l.jsx)(v.m, {
                                  text:
                                      (function (e) {
                                          switch (e) {
                                              case eR.f$.XBOX:
                                                  return er.intl.string(er.t.T0uYK9);
                                              case eR.f$.PLAYSTATION:
                                                  return er.intl.string(er.t.FWAzS6);
                                          }
                                      })(G) ?? er.intl.string(er.t.IyYqqY),
                                  children: (0, l.jsx)(ey.Ay, { ref: W, ...n }),
                              })
                            : (0, l.jsx)(S.Y, {
                                  targetElementRef: W,
                                  position: "right",
                                  renderPopout: () =>
                                      (0, l.jsx)(tt, {
                                          channel: r,
                                          user: s,
                                          onAction: K,
                                          onWatchStream: j ? q : void 0,
                                      }),
                                  shouldShow: O && !F,
                                  onRequestClose: B,
                                  spacing: 17,
                                  children: () =>
                                      (0, l.jsx)(ey.Ay, {
                                          ...n,
                                          ref: W,
                                          onMouseDown: e.onMouseDown,
                                          onKeyDown: e.onKeyDown,
                                      }),
                              })
                    );
                },
            }),
        });
    return N ? y(Z) : Z;
});
var tr = i(31408),
    tc = i(176181);
let to = n.memo((e) => {
    let { mute: t, deaf: i, user: n, channel: s, sessionId: a, nick: c } = e,
        g = n.id,
        x = (0, r.bG)([eN.default], () => eN.default.getId() === g, [g]),
        [f, v, I] = (0, r.yK)(
            [ej.Ay],
            () =>
                x
                    ? [
                          !ej.Ay.isSupported() || ej.Ay.isSelfMute() || ej.Ay.isSelfMutedTemporarily(),
                          ej.Ay.isSelfDeaf(),
                          !1,
                      ]
                    : [!ej.Ay.isSupported() || ej.Ay.isLocalMute(g), !1, ej.Ay.isLocalVideoDisabled(g)],
            [x, g],
        ),
        y = (0, r.bG)([eC.A], () => eC.A.isPrioritySpeaker(g)),
        S = (0, o.A)({ userId: g, checkSoundSharing: !0 }),
        N = (0, p.A)(s.guild_id, g),
        j = (0, r.bG)([A.A], () => A.A.getGuildRingingUsers(s.id).has(g)),
        T = (0, r.bG)(
            [d.Ay],
            () =>
                d.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(g);
                }),
            [g, s.id],
        ),
        C = (0, m.A)(null != T ? [T.applicationId] : []),
        E = (0, ev.Ay)(g, s.guild_id)[0],
        _ = (0, u.YY)(E?.application_id).data ?? void 0,
        { gameRecord: b } = (function (e) {
            let t = (0, m.h)(e),
                i = null != e && null == t,
                l = t?.getCanonicalGameId() ?? null,
                { data: n, isLoading: s } = (0, h.I)(l);
            return { gameId: l, gameRecord: n ?? null, isLoading: i || s };
        })(E?.application_id),
        [P, O] = (0, r.yK)(
            [eS.A],
            () => [eS.A.getStreamForUser(g, s.getGuildId()), eS.A.getActiveStreamForUser(g, s.getGuildId())],
            [s, g],
        ),
        G = (0, r.bG)([eT.A], () => eT.A.getSessionById(a)),
        k = es.Ay.useName(n),
        V = (0, r.bG)([eE.A], () => eE.A.getVoicePlatformForChannel(s.id, g), [s.id, g]),
        D = (0, eI.uy)(s.id, g);
    return (0, l.jsx)(ef.A, {
        shakeLocation: tr.uD.VOICE_USER,
        isShaking: S,
        children: (0, l.jsx)(ta, {
            ...e,
            nick: c ?? k,
            canDrag: e.canDrag && !N,
            disconnected: D,
            otherClientSessionType: G?.clientInfo?.os,
            voicePlatform: V,
            localMute: f && !x,
            localVideoDisabled: I,
            mute: t || f,
            deaf: i || v,
            speaking: S,
            ringing: j,
            priority: y,
            embeddedApplication: C[0],
            isStreaming: null != P && P.channelId === s.id,
            isWatching: null != O && O.state !== z.XYD.ENDED,
            isGuest: N,
            isSelf: x,
            application: E?.session_id != null ? _ : void 0,
            game: E?.session_id != null ? (b ?? void 0) : void 0,
        }),
    });
});
to.displayName = "ConnectedVoiceUser";
let td = [],
    tu = function (e) {
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
                className: f,
                children: v,
                isThread: I = !1,
                hideInviteSuggestions: y = !1,
            } = e,
            [S, N] = n.useState(null),
            j = n.useRef(null),
            T = (0, eI.$n)(s.id, o ?? td),
            { shouldShow: C, dismiss: E } = (0, ea.Z0)(s, { collapsed: d, disabled: y }),
            { placement: _ } = (0, g.h)({ guildId: s.guild_id, location: "VoiceUsers" }, { autoTrackExposure: !0 }),
            b = n.useRef(
                new c.J_(50, () => {
                    N(j.current), (j.current = null);
                }),
            ),
            P = n.useRef(
                new c.J_(175, () => {
                    N(null);
                }),
            ),
            O = n.useCallback(
                (e) => {
                    t && (P.current.cancel(), (j.current = e), b.current.delay());
                },
                [t],
            ),
            G = n.useCallback(
                (e) => {
                    t && (b.current.cancel(), (j.current = null), P.current.delay());
                },
                [t],
            ),
            k = (0, r.bG)([D.A], () => D.A.can(z.xBc.MOVE_MEMBERS, s)),
            V = i && k,
            R = (0, r.yK)([en.A], () => {
                if (d) return [];
                let e = new Set();
                return (
                    T?.forEach((t) => {
                        let { user: i } = t;
                        en.A.getActivities(i.id, s.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, m.A)(R);
        let L = (() => {
            if (null == T || 0 === T.length) return null;
            let e = d && T.length > u + 1 ? T.slice(0, u) : T,
                t = A.A.getGuildRingingUsers(s.id),
                i = e.map((e) => {
                    let { user: i, nick: n, voiceState: a } = e,
                        r = t.has(i.id);
                    return (0, l.jsx)(
                        to,
                        {
                            user: i,
                            nick: n,
                            isSelfOnOtherClient:
                                eN.default.getId() === i.id && a.sessionId !== eN.default.getSessionId(),
                            mute: a.isVoiceMuted(),
                            deaf: a.isVoiceDeafened(),
                            video: a.selfVideo,
                            serverMute: a.mute,
                            serverDeaf: a.deaf,
                            sessionId: a.sessionId ?? "",
                            channel: s,
                            collapsed: d,
                            canDrag: V,
                            showPreview: O,
                            hidePreview: G,
                            shouldShowHoverPopout: S === i.id,
                            tabIndex: h,
                        },
                        `voice-user-${i.id}-${r}`,
                    );
                });
            return (
                null != p && p > 0
                    ? i.push((0, l.jsx)(ts, { collapsed: d, numAudience: p }, "audience"))
                    : d && T.length > u + 1 && i.push((0, l.jsx)(tn, { numUsers: T.length - u }, "collapsed-users")),
                C && "bottom" === _
                    ? i.push((0, l.jsx)(ex, { channel: s, onClose: E }, "voice-invite-suggestions-button"))
                    : C &&
                      "top" === _ &&
                      i.unshift((0, l.jsx)(ex, { channel: s, onClose: E }, "voice-invite-suggestions-button")),
                i
            );
        })();
        return null == L && null == v
            ? null
            : (0, l.jsxs)(ey.Wr, {
                  className: a()(f, tc.p_, { [tc.yZ]: d, [tc.lY]: x, [tc.fT]: I }),
                  collapsed: d,
                  children: [L, v],
              });
    };
