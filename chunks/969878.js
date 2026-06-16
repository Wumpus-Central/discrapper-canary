s.d(a, { default: () => eO });
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
    h = s(945810);
let E = (0, h.mj)({
        kind: "user",
        name: "2026-06-gummy-bears",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    C = [
        r.x.DEFAULT,
        r.x.ZILLA_SLAB,
        r.x.CHERRY_BOMB,
        r.x.CHICLE,
        r.x.MUSEO_MODERNO,
        r.x.NEO_CASTEL,
        r.x.PIXELIFY,
        r.x.SINISTRE,
    ],
    L = [...C, r.x.PLAYPEN_SANS];
function _() {
    let e,
        a =
            ((e = E.useConfig({ location: "font-order" })),
            !!(0, d.bG)([g.default], () => g.default.getCurrentUser()?.isStaff() ?? !1) && e.enabled);
    return t.useMemo(() => (a ? L : C), [a]);
}
var j = s(945096);
let I = (0, h.mj)({
    name: "2026-05-dns-surprise-me-weighted-randomizer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var T = s(383197),
    v = s(207803),
    D = s(84540),
    y = s(652215),
    b = s(836602),
    k = s(696451),
    P = s(427262),
    M = s(403581),
    O = s(661531),
    G = s(48736),
    R = s(750656),
    Y = s(864386),
    w = s(375708),
    z = s(250229),
    U = s(257170);
function F(e) {
    let { selectedColors: a, setSelectedColors: s, defaultColor: i, selectedEffectId: n, className: r } = e,
        d = (0, j.as)(n) > 1,
        o = (0, t.useCallback)(
            (e) => {
                s([e]), S.default.track(y.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === i, colors: [e] });
            },
            [s, i],
        ),
        c = (0, t.useCallback)(
            (e) => {
                s(e), S.default.track(y.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [s],
        );
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: U.s,
                children: [
                    w.intl.string(Y.default.JOpi7z),
                    (0, l.jsx)(M.t, { size: "xs", color: O.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(G.default, {
                className: z.Ei,
                colorContainerClassName: z.rx,
                defaultColor: i,
                colors: d ? R.Wf : R.Jl,
                value: a[0],
                secondaryValue: a[1] ?? void 0,
                onChange: o,
                onChangeGradientColors: c,
                isGradient: d,
                gradientButtonClassName: z.xr,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
var H = s(503698),
    J = s.n(H),
    B = s(331322),
    K = s(939249),
    X = s(922301),
    V = s(660184),
    Q = s(700090);
function W(e) {
    let { selectedEffectId: a, setSelectedEffectId: s, className: t } = e;
    return (0, l.jsxs)("div", {
        className: t,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: U.s,
                children: [
                    w.intl.string(Y.default["1wilM1"]),
                    (0, l.jsx)(M.t, { size: "xs", color: O.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(B.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                gap: 8,
                children: R.re.map((e) => (0, l.jsx)($, { effectId: e, selected: e === a, onClick: () => s(e) }, e)),
            }),
        ],
    });
}
function $(e) {
    let { effectId: a, selected: s, onClick: t } = e,
        i = (0, T._)(a);
    return (0, l.jsx)(
        K.D,
        {
            className: J()(Q.Tw, { [Q.wH]: s }),
            onClick: t,
            children: (0, l.jsx)(V.A, {
                userName: i.name,
                effectDisplayType: X.G.STATIC,
                displayNameStyles: i.previewStyles,
                textClassName: Q.tr,
                inProfile: !0,
            }),
        },
        a,
    );
}
var Z = s(834730),
    q = s(885574),
    ee = s(990078),
    ea = s(73392),
    es = s(699006);
function el(e) {
    let { selectedFontId: a, setSelectedFontId: s, displayName: t, className: i } = e,
        n = _(),
        d = a !== r.x.DEFAULT,
        o = (0, j.Xr)(t);
    return (0, l.jsxs)("div", {
        className: i,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: U.s,
                children: [
                    w.intl.string(Y.default.nP0ngb),
                    (0, l.jsx)(M.t, { size: "xs", color: O.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(B.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: n.map((e) => {
                    let t = (0, ea.p)(e),
                        i = e === a;
                    return (0, l.jsx)(
                        ee.m,
                        {
                            text: w.intl.string(t.name),
                            asContainer: !0,
                            children: (0, l.jsx)(K.D, {
                                className: J()(es.SO, { [es.wH]: i }),
                                onClick: () => s(e),
                                "aria-label": w.intl.string(t.name),
                                children: (0, l.jsx)(Z.E, {
                                    variant: "text-lg/semibold",
                                    color: i ? "text-strong" : "text-default",
                                    className: J()(es.FH, t.className),
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
                    className: es.Lb,
                    children: [
                        (0, l.jsx)(q.m, { size: "lg" }),
                        (0, l.jsx)(Z.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: w.intl.string(Y.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
var et = s(821609),
    ei = s(908803),
    en = s(87719),
    er = s(465794),
    ed = s(757036),
    eo = s(788868),
    ec = s(277041);
function em(e) {
    let { onApply: a, onSurpriseMe: s, onClose: t, canApply: i } = e,
        n = (0, ed.L)(eo.PremiumTypes.TIER_2),
        r = (0, l.jsx)(et.$, {
            variant: "secondary",
            size: "md",
            onClick: s,
            icon: { type: "rive", asset: ei.m, riveProps: { dataBinding: { fill: O.A.colors.ICON_STRONG } } },
            text: w.intl.string(Y.default.NOGFds),
        }),
        d = (0, l.jsxs)("div", {
            className: ec.k0,
            children: [
                r,
                (0, l.jsx)(ee.m, {
                    text: w.intl.string(Y.default.cVTpnj),
                    shouldShow: !i,
                    children: (0, l.jsx)(et.$, {
                        onClick: a,
                        disabled: !i,
                        text: w.intl.string(w.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        o = (0, l.jsxs)("div", {
            className: ec.UX,
            children: [
                (0, l.jsxs)("div", {
                    className: ec.iQ,
                    children: [
                        (0, l.jsx)(ee.m, {
                            text: w.intl.string(w.t["5AFxuK"]),
                            children: (0, l.jsx)(M.t, { size: "md", color: O.A.colors.ICON_STRONG }),
                        }),
                        (0, l.jsx)(Z.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: ec.h_,
                            children: w.intl.format(Y.default.PWf0xS, {
                                onClickNitro: () => {
                                    S.default.track(y.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, en.x)(t);
                                },
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: ec.UD,
                    children: [
                        r,
                        (0, l.jsx)(er.A, {
                            premiumModalAnalyticsLocation: {
                                section: y.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: y.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: eo.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, l.jsx)(c.jl, { "data-migration-pending": !0, className: ec.qr, children: n ? d : o });
}
var eu = s(366010),
    eN = s(43990),
    ex = s(629584),
    ef = s(943255),
    eA = s(575181),
    eg = s(736653),
    eS = s(780898),
    ep = s(344346),
    eh = s(320095),
    eE = s(963852),
    eC = s(763754),
    eL = s(20851),
    e_ = s(986687),
    ej = s(101058),
    eI = s(999291),
    eT = s(686189),
    ev = s(946356),
    eD = s(975571),
    ey = s(996988),
    eb = s(471260);
function ek(e) {
    let {
            user: a,
            guild: s,
            displayName: i,
            selectedFontId: n,
            selectedEffectId: r,
            selectedColors: o,
            onClose: m,
        } = e,
        u = (0, eg.Ay)(),
        N = (0, eu.M)(u),
        [x, A] = (0, t.useState)(N),
        g = (0, eI.Ay)(a.id, null),
        { bannerSrc: p } = (0, eT.A)({ displayProfile: g, size: 413, canAnimate: !1 }),
        h = (0, d.cf)([b.A], () => b.A.getPendingChanges(s?.id)),
        E = (0, ej.V7)({ userId: a.id, image: h.pendingAvatar }),
        { userNameplate: C, guildNameplate: L, pendingNameplate: _ } = (0, f.rv)(a, s?.id),
        j = (0, eS.WK)(L);
    x && !N ? (u = y.NJ8.DARK) : !x && N && (u = y.NJ8.LIGHT);
    let I = (0, t.useCallback)(() => {
            S.default.track(y.HAw.DISPLAY_NAME_STYLES_CLOSED), m();
        }, [m]),
        T = (0, t.useCallback)((e) => {
            A(e === y.NJ8.DARK), S.default.track(y.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === y.NJ8.DARK });
        }, []),
        v = (0, t.useMemo)(
            () => ({ ...(0, eC.FT)(a, null), nick: i, displayNameStyles: { fontId: n, effectId: r, colors: o } }),
            [a, n, r, o, i],
        );
    return (0, l.jsxs)("div", {
        className: eb._l,
        children: [
            (0, l.jsx)(c.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: eb.bV,
                children: (0, l.jsx)(c.s_, { "data-migration-pending": !0, onClick: I, innerClassName: eb.b }),
            }),
            null != p &&
                (0, l.jsx)(ev.A, {
                    user: a,
                    displayProfile: g,
                    themeType: ey.d.MODAL_V2,
                    className: eb.LX,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: eb.b8, style: { backgroundImage: `url(${p})` } }),
                }),
            (0, l.jsx)(eN.N, {
                theme: u,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: J()(eb.cq, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(e_.A, {
                                user: a,
                                guild: s,
                                ...h,
                                pendingAvatar: E,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: v.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: eb.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, l.jsx)(eL.A, {
                                author: v,
                                message: (0, eh.rh)({
                                    ...(0, eE.Ay)({ channelId: "1337", content: w.intl.string(Y.default.h5Cuej) }),
                                    state: y.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: eb.OT,
                                previewGuildId: s?.id,
                            }),
                            (0, l.jsx)(ep.A, {
                                user: a,
                                guildId: s?.id,
                                nameplate: _,
                                nameplateData: null == _ ? (j ?? C) : void 0,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: v.displayNameStyles,
                                isHighlighted: !0,
                                className: eb.qF,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: eb.dI,
                children: [
                    (0, l.jsx)(Z.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: w.intl.format(Y.default.prQba8, {
                            helpArticleLink: eD.A.getArticleURL(y.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(eP, { darkPreview: x, onToggleTheme: T }),
                ],
            }),
        ],
    });
}
function eP(e) {
    let { darkPreview: a, onToggleTheme: s } = e,
        t = a ? y.NJ8.DARK : y.NJ8.LIGHT;
    return (0, l.jsx)(ex.I, {
        className: eb.xr,
        optionClassName: eb.$C,
        options: [
            {
                name: "",
                tooltip: w.intl.string(w.t.b8Cei3),
                value: y.NJ8.DARK,
                icon: ef.Z,
                className: t === y.NJ8.DARK ? eb.iB : void 0,
            },
            {
                name: "",
                tooltip: w.intl.string(w.t.K2sFfo),
                value: y.NJ8.LIGHT,
                icon: eA.F,
                className: t === y.NJ8.LIGHT ? eb.iB : void 0,
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
var eM = s(511698);
function eO(e) {
    let a,
        { transitionState: s, analyticsLocations: h, guildId: E, onClose: C, returnRef: L } = e,
        M = (0, d.bG)([g.default], () => g.default.getCurrentUser()),
        O =
            ((a = P.Ay.useName(M)),
            (0, d.bG)([b.A, k.Ay], () => {
                let e = b.A.getPendingChanges(E);
                return null != E ? (e.pendingNickname ?? k.Ay.getNick(E, M?.id)) : e.pendingGlobalName;
            }, [E, M]) ??
                a ??
                ""),
        G = (0, d.bG)([A.A], () => A.A.getGuild(E)),
        { userDisplayNameStyles: R, guildDisplayNameStyles: z, pendingDisplayNameStyles: U } = (0, f.B0)(M, E),
        H = void 0 !== U ? U : (z ?? R),
        [J, B] = t.useState(H?.fontId ?? r.x.DEFAULT),
        [K, X] = t.useState(H?.effectId ?? n.z.SOLID),
        V = (0, j.as)(K) > 1,
        Q = (0, T._)(K),
        $ = (0, T._)(n.z.GRADIENT),
        Z = H?.colors ?? [],
        [q, ee] = t.useState(Z.length > 0 && !V ? Z[0] : Q.defaultColors[0]),
        [ea, es] = t.useState(Z.length > 0 && V ? Z : $.defaultColors);
    (0, x.A)(
        { type: i.ImpressionTypes.POPOUT, name: i.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: et } = (0, N.Ay)(h, u.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        ei = t.useMemo(() => (V ? ea : [q]), [V, ea, q]),
        en = t.useMemo(() => J !== H?.fontId || K !== H?.effectId || !(0, o.v)(ei, H?.colors ?? []), [H, J, K, ei]),
        { enabled: er } = I.useConfig({ location: "DisplayNameStylesModal" }),
        ed = _(),
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
                    c ? (0, v.EW)(a) : (0, D.p)({ guildId: o, displayNameStyles: a }),
                        S.default.track(y.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: r.x[s],
                            effect_name: n.z[l],
                            colors: i,
                        }),
                        m?.();
                }
            }, [a, s, l, i, d, m, o, c]);
        })({
            hasChanges: en,
            selectedFontId: J,
            selectedEffectId: K,
            selectedColors: ei,
            defaultColor: Q.defaultColors[0],
            guildId: E,
            onClose: C,
        }),
        ec = t.useCallback(() => {
            let { fontId: e, effectId: a, colors: s } = (0, j.gN)(ed, er);
            B(e), X(a), (0, j.as)(a) > 1 ? es(s) : ee(s[0]), S.default.track(y.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [ed, er, es, ee]),
        eu = t.useCallback(
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
    return null == M
        ? null
        : (0, l.jsx)(N.f5, {
              value: et,
              children: (0, l.jsx)(p.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, l.jsxs)(c.EO, {
                      "data-migration-pending": !0,
                      transitionState: s,
                      size: c.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: eM.CR,
                      returnRef: L,
                      children: [
                          (0, l.jsxs)(c.$m, {
                              "data-migration-pending": !0,
                              className: eM.jE,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: eM.w1,
                                      children: [
                                          (0, l.jsx)(c.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: eM.bV,
                                              children: (0, l.jsx)(m.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: w.intl.string(Y.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(el, {
                                              selectedFontId: J,
                                              setSelectedFontId: B,
                                              displayName: O,
                                              className: eM._,
                                          }),
                                          (0, l.jsx)(W, {
                                              selectedEffectId: K,
                                              setSelectedEffectId: eu,
                                              className: eM._,
                                          }),
                                          (0, l.jsx)(F, {
                                              selectedColors: ei,
                                              setSelectedColors: eN,
                                              selectedEffectId: K,
                                              className: eM._,
                                              defaultColor: Q.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(ek, {
                                      user: M,
                                      guild: G,
                                      displayName: O,
                                      selectedFontId: J,
                                      selectedEffectId: K,
                                      selectedColors: K === n.z.SOLID && (0, o.v)(ei, Q.defaultColors) ? [] : ei,
                                      onClose: C,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(em, {
                              onApply: eo,
                              onSurpriseMe: ec,
                              onClose: C,
                              canApply: en,
                              analyticsLocations: et,
                          }),
                      ],
                  }),
              }),
          });
}
