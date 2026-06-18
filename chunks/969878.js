s.d(a, { default: () => eR });
var l = s(627968),
    t = s(64700),
    i = s(562708),
    n = s(508425),
    r = s(559949),
    d = s(17928),
    o = s(52133),
    c = s(935462),
    m = s(534514),
    u = s(793574),
    N = s(688810),
    x = s(139286),
    f = s(919395),
    A = s(71393),
    g = s(287809),
    S = s(174459),
    p = s(871162),
    E = s(945810);
let h = (0, E.mj)({
    kind: "user",
    name: "2026-06-gummy-bears",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function C(e) {
    let a = h.useConfig({ location: e });
    return !!(0, d.bG)([g.default], () => g.default.getCurrentUser()?.isStaff() ?? !1) && a.enabled;
}
let L = [
        r.x.DEFAULT,
        r.x.ZILLA_SLAB,
        r.x.CHERRY_BOMB,
        r.x.CHICLE,
        r.x.MUSEO_MODERNO,
        r.x.NEO_CASTEL,
        r.x.PIXELIFY,
        r.x.SINISTRE,
    ],
    _ = [...L, r.x.PLAYPEN_SANS, r.x.ORBITRON, r.x.NEW_ROCKER, r.x.KALAM];
function j() {
    let e = C("font-order");
    return t.useMemo(() => (e ? _ : L), [e]);
}
var I = s(945096);
let T = (0, E.mj)({
    name: "2026-05-dns-surprise-me-weighted-randomizer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var v = s(383197),
    D = s(207803),
    y = s(84540),
    b = s(652215),
    k = s(836602),
    M = s(696451),
    O = s(427262),
    P = s(403581),
    R = s(661531),
    G = s(48736),
    Y = s(750656),
    w = s(864386),
    z = s(375708),
    U = s(250229),
    F = s(257170);
function H(e) {
    let { selectedColors: a, setSelectedColors: s, defaultColor: i, selectedEffectId: n, className: r } = e,
        d = (0, I.as)(n) > 1,
        o = (0, t.useMemo)(() => (0, Y.ii)(n).map((e) => ({ start: e[0], end: e[e.length - 1], name: "" })), [n]),
        c = (0, t.useCallback)(
            (e) => {
                s([e]), S.default.track(b.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === i, colors: [e] });
            },
            [s, i],
        ),
        u = (0, t.useCallback)(
            (e) => {
                s(e), S.default.track(b.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [s],
        );
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: F.s,
                children: [
                    z.intl.string(w.default.JOpi7z),
                    (0, l.jsx)(P.t, { size: "xs", color: R.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(G.default, {
                className: U.Ei,
                colorContainerClassName: U.rx,
                defaultColor: i,
                colors: d ? o : Y.Jl,
                value: a[0],
                secondaryValue: a[1] ?? void 0,
                onChange: c,
                onChangeGradientColors: u,
                isGradient: d,
                gradientButtonClassName: U.xr,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
var B = s(503698),
    J = s.n(B),
    K = s(331322),
    X = s(939249),
    V = s(922301),
    Q = s(660184),
    W = s(700090);
function $(e) {
    let { selectedEffectId: a, setSelectedEffectId: s, className: t } = e,
        i = C("DisplayNameStylesEffectSelection") ? [...Y.re, n.z.PRISM, n.z.GUMMY] : Y.re;
    return (0, l.jsxs)("div", {
        className: t,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: F.s,
                children: [
                    z.intl.string(w.default["1wilM1"]),
                    (0, l.jsx)(P.t, { size: "xs", color: R.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(K.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                gap: 8,
                children: i.map((e) => (0, l.jsx)(Z, { effectId: e, selected: e === a, onClick: () => s(e) }, e)),
            }),
        ],
    });
}
function Z(e) {
    let { effectId: a, selected: s, onClick: t } = e,
        i = (0, v._)(a);
    return (0, l.jsx)(
        X.D,
        {
            className: J()(W.Tw, { [W.wH]: s }),
            onClick: t,
            children: (0, l.jsx)(Q.A, {
                userName: i.name,
                effectDisplayType: V.G.STATIC,
                displayNameStyles: i.previewStyles,
                textClassName: W.tr,
                inProfile: !0,
            }),
        },
        a,
    );
}
var q = s(834730),
    ee = s(885574),
    ea = s(990078),
    es = s(73392),
    el = s(699006);
function et(e) {
    let { selectedFontId: a, setSelectedFontId: s, displayName: t, className: i } = e,
        n = j(),
        d = a !== r.x.DEFAULT,
        o = (0, I.Xr)(t);
    return (0, l.jsxs)("div", {
        className: i,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: F.s,
                children: [
                    z.intl.string(w.default.nP0ngb),
                    (0, l.jsx)(P.t, { size: "xs", color: R.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(K.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: n.map((e) => {
                    let t = (0, es.p)(e),
                        i = e === a;
                    return (0, l.jsx)(
                        ea.m,
                        {
                            text: z.intl.string(t.name),
                            asContainer: !0,
                            children: (0, l.jsx)(X.D, {
                                className: J()(el.SO, { [el.wH]: i }),
                                onClick: () => s(e),
                                "aria-label": z.intl.string(t.name),
                                children: (0, l.jsx)(q.E, {
                                    variant: "text-lg/semibold",
                                    color: i ? "text-strong" : "text-default",
                                    className: J()(el.FH, t.className),
                                    children: "Gg",
                                }),
                            }),
                        },
                        e,
                    );
                }),
            }),
            d &&
                o &&
                (0, l.jsxs)("div", {
                    className: el.Lb,
                    children: [
                        (0, l.jsx)(ee.m, { size: "lg" }),
                        (0, l.jsx)(q.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: z.intl.string(w.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
var ei = s(821609),
    en = s(908803),
    er = s(87719),
    ed = s(465794),
    eo = s(757036),
    ec = s(788868),
    em = s(277041);
function eu(e) {
    let { onApply: a, onSurpriseMe: s, onClose: t, canApply: i } = e,
        n = (0, eo.L)(ec.PremiumTypes.TIER_2),
        r = (0, l.jsx)(ei.$, {
            variant: "secondary",
            size: "md",
            onClick: s,
            icon: { type: "rive", asset: en.m, riveProps: { dataBinding: { fill: R.A.colors.ICON_STRONG } } },
            text: z.intl.string(w.default.NOGFds),
        }),
        d = (0, l.jsxs)("div", {
            className: em.k0,
            children: [
                r,
                (0, l.jsx)(ea.m, {
                    text: z.intl.string(w.default.cVTpnj),
                    shouldShow: !i,
                    children: (0, l.jsx)(ei.$, {
                        onClick: a,
                        disabled: !i,
                        text: z.intl.string(z.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        o = (0, l.jsxs)("div", {
            className: em.UX,
            children: [
                (0, l.jsxs)("div", {
                    className: em.iQ,
                    children: [
                        (0, l.jsx)(ea.m, {
                            text: z.intl.string(z.t["5AFxuK"]),
                            children: (0, l.jsx)(P.t, { size: "md", color: R.A.colors.ICON_STRONG }),
                        }),
                        (0, l.jsx)(q.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: em.h_,
                            children: z.intl.format(w.default.PWf0xS, {
                                onClickNitro: () => {
                                    S.default.track(b.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, er.x)(t);
                                },
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: em.UD,
                    children: [
                        r,
                        (0, l.jsx)(ed.A, {
                            premiumModalAnalyticsLocation: {
                                section: b.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: b.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: ec.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, l.jsx)(c.jl, { "data-migration-pending": !0, className: em.qr, children: n ? d : o });
}
var eN = s(366010),
    ex = s(43990),
    ef = s(629584),
    eA = s(943255),
    eg = s(575181),
    eS = s(736653),
    ep = s(780898),
    eE = s(344346),
    eh = s(320095),
    eC = s(963852),
    eL = s(763754),
    e_ = s(20851),
    ej = s(986687),
    eI = s(101058),
    eT = s(999291),
    ev = s(686189),
    eD = s(946356),
    ey = s(975571),
    eb = s(996988),
    ek = s(471260);
function eM(e) {
    let {
            user: a,
            guild: s,
            displayName: i,
            selectedFontId: n,
            selectedEffectId: r,
            selectedColors: o,
            onClose: m,
        } = e,
        u = (0, eS.Ay)(),
        N = (0, eN.M)(u),
        [x, A] = (0, t.useState)(N),
        g = (0, eT.Ay)(a.id, null),
        { bannerSrc: p } = (0, ev.A)({ displayProfile: g, size: 413, canAnimate: !1 }),
        E = (0, d.cf)([k.A], () => k.A.getPendingChanges(s?.id)),
        h = (0, eI.V7)({ userId: a.id, image: E.pendingAvatar }),
        { userNameplate: C, guildNameplate: L, pendingNameplate: _ } = (0, f.rv)(a, s?.id),
        j = (0, ep.WK)(L);
    x && !N ? (u = b.NJ8.DARK) : !x && N && (u = b.NJ8.LIGHT);
    let I = (0, t.useCallback)(() => {
            S.default.track(b.HAw.DISPLAY_NAME_STYLES_CLOSED), m();
        }, [m]),
        T = (0, t.useCallback)((e) => {
            A(e === b.NJ8.DARK), S.default.track(b.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === b.NJ8.DARK });
        }, []),
        v = (0, t.useMemo)(
            () => ({ ...(0, eL.FT)(a, null), nick: i, displayNameStyles: { fontId: n, effectId: r, colors: o } }),
            [a, n, r, o, i],
        );
    return (0, l.jsxs)("div", {
        className: ek._l,
        children: [
            (0, l.jsx)(c.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: ek.bV,
                children: (0, l.jsx)(c.s_, { "data-migration-pending": !0, onClick: I, innerClassName: ek.b }),
            }),
            null != p &&
                (0, l.jsx)(eD.A, {
                    user: a,
                    displayProfile: g,
                    themeType: eb.d.MODAL_V2,
                    className: ek.LX,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: ek.b8, style: { backgroundImage: `url(${p})` } }),
                }),
            (0, l.jsx)(ex.N, {
                theme: u,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: J()(ek.cq, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(ej.A, {
                                user: a,
                                guild: s,
                                ...E,
                                pendingAvatar: h,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: v.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: ek.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, l.jsx)(e_.A, {
                                author: v,
                                message: (0, eh.rh)({
                                    ...(0, eC.Ay)({ channelId: "1337", content: z.intl.string(w.default.h5Cuej) }),
                                    state: b.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: ek.OT,
                                previewGuildId: s?.id,
                            }),
                            (0, l.jsx)(eE.A, {
                                user: a,
                                guildId: s?.id,
                                nameplate: _,
                                nameplateData: null == _ ? (j ?? C) : void 0,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: v.displayNameStyles,
                                isHighlighted: !0,
                                className: ek.qF,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: ek.dI,
                children: [
                    (0, l.jsx)(q.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: z.intl.format(w.default.prQba8, {
                            helpArticleLink: ey.A.getArticleURL(b.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(eO, { darkPreview: x, onToggleTheme: T }),
                ],
            }),
        ],
    });
}
function eO(e) {
    let { darkPreview: a, onToggleTheme: s } = e,
        t = a ? b.NJ8.DARK : b.NJ8.LIGHT;
    return (0, l.jsx)(ef.I, {
        className: ek.xr,
        optionClassName: ek.$C,
        options: [
            {
                name: "",
                tooltip: z.intl.string(z.t.b8Cei3),
                value: b.NJ8.DARK,
                icon: eA.Z,
                className: t === b.NJ8.DARK ? ek.iB : void 0,
            },
            {
                name: "",
                tooltip: z.intl.string(z.t.K2sFfo),
                value: b.NJ8.LIGHT,
                icon: eg.F,
                className: t === b.NJ8.LIGHT ? ek.iB : void 0,
            },
        ],
        value: t,
        onChange: (e) => {
            let { value: a } = e;
            return s(a);
        },
        look: "pill",
    });
}
var eP = s(511698);
function eR(e) {
    let a,
        { transitionState: s, analyticsLocations: E, guildId: h, onClose: C, returnRef: L } = e,
        _ = (0, d.bG)([g.default], () => g.default.getCurrentUser()),
        P =
            ((a = O.Ay.useName(_)),
            (0, d.bG)([k.A, M.Ay], () => {
                let e = k.A.getPendingChanges(h);
                return null != h ? (e.pendingNickname ?? M.Ay.getNick(h, _?.id)) : e.pendingGlobalName;
            }, [h, _]) ??
                a ??
                ""),
        R = (0, d.bG)([A.A], () => A.A.getGuild(h)),
        { userDisplayNameStyles: G, guildDisplayNameStyles: Y, pendingDisplayNameStyles: U } = (0, f.B0)(_, h),
        F = void 0 !== U ? U : (Y ?? G),
        [B, J] = t.useState(F?.fontId ?? r.x.DEFAULT),
        [K, X] = t.useState(F?.effectId ?? n.z.SOLID),
        V = (0, I.as)(K) > 1,
        Q = (0, v._)(K),
        W = (0, v._)(n.z.GRADIENT),
        Z = F?.colors ?? [],
        [q, ee] = t.useState(Z.length > 0 && !V ? Z[0] : Q.defaultColors[0]),
        [ea, es] = t.useState(Z.length > 0 && V ? Z : W.defaultColors);
    (0, x.A)(
        { type: i.ImpressionTypes.POPOUT, name: i.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: el } = (0, N.Ay)(E, u.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        ei = t.useMemo(() => (V ? ea : [q]), [V, ea, q]),
        en = t.useMemo(() => B !== F?.fontId || K !== F?.effectId || !(0, o.v)(ei, F?.colors ?? []), [F, B, K, ei]),
        { enabled: er } = T.useConfig({ location: "DisplayNameStylesModal" }),
        ed = j(),
        eo = (function (e) {
            let {
                hasChanges: a,
                selectedFontId: s,
                selectedEffectId: l,
                selectedColors: i,
                defaultColor: d,
                guildId: o,
                isTryItOut: c,
                onClose: m,
            } = e;
            return t.useCallback(() => {
                if (a) {
                    let e = i;
                    l === n.z.SOLID && i.length > 0 && i[0] === d && (e = []);
                    let a = { fontId: s, effectId: l, colors: e };
                    c ? (0, D.EW)(a) : (0, y.p)({ guildId: o, displayNameStyles: a }),
                        S.default.track(b.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: r.x[s],
                            effect_name: n.z[l],
                            colors: i,
                        }),
                        m?.();
                }
            }, [a, s, l, i, d, m, o, c]);
        })({
            hasChanges: en,
            selectedFontId: B,
            selectedEffectId: K,
            selectedColors: ei,
            defaultColor: Q.defaultColors[0],
            guildId: h,
            onClose: C,
        }),
        ec = t.useCallback(() => {
            let { fontId: e, effectId: a, colors: s } = (0, I.gN)(ed, er);
            J(e), X(a), (0, I.as)(a) > 1 ? es(s) : ee(s[0]), S.default.track(b.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [ed, er, es, ee]),
        em = t.useCallback(
            (e) => {
                X(e);
            },
            [X],
        ),
        eN = t.useCallback(
            (e) => {
                V ? es(e) : ee(e[0]);
            },
            [V, es, ee],
        );
    return null == _
        ? null
        : (0, l.jsx)(N.f5, {
              value: el,
              children: (0, l.jsx)(p.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, l.jsxs)(c.EO, {
                      "data-migration-pending": !0,
                      transitionState: s,
                      size: c.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: eP.CR,
                      returnRef: L,
                      children: [
                          (0, l.jsxs)(c.$m, {
                              "data-migration-pending": !0,
                              className: eP.jE,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: eP.w1,
                                      children: [
                                          (0, l.jsx)(c.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: eP.bV,
                                              children: (0, l.jsx)(m.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: z.intl.string(w.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(et, {
                                              selectedFontId: B,
                                              setSelectedFontId: J,
                                              displayName: P,
                                              className: eP._,
                                          }),
                                          (0, l.jsx)($, {
                                              selectedEffectId: K,
                                              setSelectedEffectId: em,
                                              className: eP._,
                                          }),
                                          (0, l.jsx)(H, {
                                              selectedColors: ei,
                                              setSelectedColors: eN,
                                              selectedEffectId: K,
                                              className: eP._,
                                              defaultColor: Q.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(eM, {
                                      user: _,
                                      guild: R,
                                      displayName: P,
                                      selectedFontId: B,
                                      selectedEffectId: K,
                                      selectedColors: K === n.z.SOLID && (0, o.v)(ei, Q.defaultColors) ? [] : ei,
                                      onClose: C,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(eu, {
                              onApply: eo,
                              onSurpriseMe: ec,
                              onClose: C,
                              canApply: en,
                              analyticsLocations: el,
                          }),
                      ],
                  }),
              }),
          });
}
