n.d(t, { A: () => ei });
var l = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    i = n(736819),
    o = n(323889),
    u = n(939249),
    c = n(43990),
    d = n(834730),
    m = n(290136),
    p = n(661531),
    x = n(365199),
    h = n(738822),
    f = n(31046),
    C = n(590202),
    v = n(971649),
    N = n(620954),
    y = n(557637),
    j = n(398025),
    g = n(617986),
    A = n(139210),
    E = n(568329),
    _ = n(980707),
    T = n(477782),
    R = n(743368),
    Q = n(265872),
    B = n(442433),
    b = n(507395),
    S = n(144779),
    M = n(494280),
    I = n(845890),
    U = n(963713),
    P = n(818348),
    w = n(105292);
function F(e) {
    let { onSelect: t, onClose: n } = e,
        s = (0, U.o5)(),
        a = (0, U.Q8)(s),
        r = (0, v.wW)(),
        i = (0, M.Yh)(a);
    return (0, l.jsxs)(_.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != t ? t() : (0, B.Z_)();
        },
        navId: "quest-bar-bounty",
        "aria-label": w.intl.string(w.t.ogxXGq),
        onClose: n ?? P.tE,
        children: [
            (0, l.jsx)(
                T.rX,
                {
                    children: (0, l.jsx)(T.Dr, {
                        id: "open-game-link",
                        label: s.cta.buttonLabel,
                        action: function () {
                            (0, N._Q)(
                                { adContentId: s.id, adCreativeType: o.p.BOUNTY, cta: s.cta },
                                {
                                    content: h.uF.QUEST_BAR_V2,
                                    ctaContent: C.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
                                    impressionId: r(),
                                    sourceQuestContent: h.uF.QUEST_BAR_V2,
                                },
                            );
                        },
                        icon: R.W,
                        leadingAccessory: { type: "icon", icon: R.W },
                    }),
                },
                "major-actions",
            ),
            (0, l.jsxs)(
                T.rX,
                {
                    children: [
                        (0, l.jsx)(T.Dr, {
                            id: "display-disclosure",
                            label: w.intl.string(w.t.GcsZKJ),
                            action: function () {
                                (0, g.Zc)(a, {
                                    content: h.uF.QUEST_BAR_V2,
                                    ctaContent: C.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                    impressionId: r(),
                                    sourceQuestContent: h.uF.QUEST_BAR_V2,
                                });
                            },
                        }),
                        (0, l.jsx)(T.Dr, {
                            id: "hide-entrypoint",
                            label: w.intl.string(w.t.NN79E9),
                            action: function () {
                                ((0, b.r)({
                                    type: S.F.CLICK_INTERNAL,
                                    ...i,
                                    questContentCTA: C.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                    surfaceId: h.uF.QUEST_BAR_V2,
                                    sourceQuestContent: h.uF.QUEST_BAR_V2,
                                    impressionId: r(),
                                }),
                                    (0, I.Xo)(i, h.uF.QUEST_BAR_V2));
                            },
                        }),
                    ],
                },
                "minor-actions",
            ),
        ],
    });
}
function O(e) {
    let { children: t, onOpen: n, onClose: a, onSelect: r } = e,
        i = (0, U.o5)(),
        o = (0, U.Q8)(i),
        u = (0, v.wW)(),
        c = s.useRef(null),
        d = s.useCallback(() => {
            ((0, b.r)({
                type: S.F.CLICK_INTERNAL,
                ...(0, M.Yh)(o),
                questContentCTA: C.Cy.OPEN_CONTEXT_MENU,
                surfaceId: h.uF.QUEST_BAR_V2,
                sourceQuestContent: h.uF.QUEST_BAR_V2,
                impressionId: u(),
            }),
                null != n && n());
        }, [o, u, n]);
    return (0, l.jsx)(Q.Y, {
        targetElementRef: c,
        onRequestOpen: d,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(F, { onSelect: r, onClose: t });
        },
        animation: Q.Y.Animation.NONE,
        children: (e) => (0, l.jsx)("div", { ref: c, children: t(e) }),
    });
}
var V = n(241762);
n(272111);
var k = n(652215),
    D = n(886030);
function L() {
    let e = (0, U.o5)(),
        t = (0, U.Q8)(e),
        n = (0, v.wW)(),
        { expansionSpring: a } = s.useContext(E.PW),
        {
            onCtxMenuOpen: _,
            onCtxMenuClose: T,
            onCtxMenuSelect: R,
            isExpanded: Q,
            isExpansionAnimationComplete: B,
            collapsedHeight: b,
        } = (0, V.H)(),
        { productIcon: S } = e,
        M = s.useCallback(() => {
            (0, g.Zc)(t, {
                content: h.uF.QUEST_BAR_V2,
                ctaContent: C.Cy.OPEN_DISCLOSURE,
                sourceQuestContent: h.uF.QUEST_BAR_V2,
            });
        }, [t]),
        I = s.useCallback(() => {
            (0, N._Q)(
                { adContentId: e.id, adCreativeType: o.p.BOUNTY, cta: e.cta },
                {
                    content: h.uF.QUEST_BAR_HEADER,
                    ctaContent: C.Cy.OPEN_GAME_LINK,
                    impressionId: n(),
                    sourceQuestContent: h.uF.QUEST_BAR_V2,
                },
            );
        }, [e.cta, e.id, n]);
    return (0, l.jsxs)(A.A, {
        className: D.bU,
        children: [
            (0, l.jsx)(A.h, { className: D.Tu }),
            (0, l.jsxs)(i.animated.div, {
                className: D.W2,
                style: {
                    transform: a.to({ range: [0, 1], output: [b / 2 - 24 - 6, 0] }).to((e) => `translateY(${e}px)`),
                },
                children: [
                    null != S &&
                        (0, l.jsx)(u.D, {
                            onClick: I,
                            className: r()(D.iY, D.vk, { [D.wm]: Q && B }),
                            children: (0, l.jsx)(i.animated.div, {
                                className: D.U$,
                                style: {
                                    transform: a.to({ range: [0, 1], output: [1, 0.75] }).to((e) => `scale(${e})`),
                                },
                                children: (0, l.jsx)(y._M, {
                                    id: "QuestBarBounty_productIcon",
                                    children: (t) =>
                                        (0, l.jsx)("img", {
                                            ref: t,
                                            src: (0, f.lR)({ assetUrl: S, width: 32, height: 32 }),
                                            alt: e.advertiserName,
                                            width: 32,
                                            height: 32,
                                            className: D.Q1,
                                        }),
                                }),
                            }),
                        }),
                    (0, l.jsxs)("div", {
                        className: D.cA,
                        children: [
                            (0, l.jsx)(c.N, {
                                theme: k.NJ8.DARK,
                                disableAdaptiveTheme: !0,
                                children: (t) =>
                                    (0, l.jsx)(i.animated.div, {
                                        "aria-hidden": !0,
                                        className: r()(t, D.it),
                                        style: { opacity: (0, j.a)(a.to({ range: [0, 1], output: [1, 0] })) },
                                        children: (0, l.jsx)(d.E, {
                                            variant: "body-sm/medium",
                                            color: "text-strong",
                                            lineClamp: 2,
                                            children: e.productName ?? "",
                                        }),
                                    }),
                            }),
                            (0, l.jsx)(A.h, {
                                className: D.OO,
                                children: (0, l.jsxs)(u.D, {
                                    className: r()(D.y8, D.RK),
                                    onClick: M,
                                    children: [
                                        (0, l.jsx)(d.E, {
                                            color: "text-overlay-light",
                                            variant: "body-xs/normal",
                                            children: w.intl.string(w.t.o6FLcF),
                                        }),
                                        (0, l.jsx)(m.CircleQuestionIcon, { color: p.A.colors.WHITE, className: D.P$ }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(A.h, {
                className: D.jd,
                children: (0, l.jsx)(O, {
                    onOpen: _,
                    onClose: T,
                    onSelect: R,
                    children: (e) =>
                        (0, l.jsx)(u.D, {
                            ...e,
                            className: r()(D.oz, D.rb),
                            "aria-label": w.intl.string(w.t.DEoVWZ),
                            children: (0, l.jsx)(x.MoreHorizontalIcon, {
                                size: "md",
                                color: "currentColor",
                                className: r()(D.Bx, D.ON),
                            }),
                        }),
                }),
            }),
        ],
    });
}
var W = n(17928),
    Y = n(133825),
    q = n(534514),
    H = n(821609),
    X = n(775602),
    G = n(546121),
    K = n(792620),
    $ = n(192308),
    z = n(415441),
    Z = n(419403);
function J(e) {
    let { isAnimated: t, className: n } = e,
        s = (0, W.bG)([X.Ay], () => X.Ay.useReducedMotion);
    return (0, l.jsx)("img", {
        className: r()(Z.Q, n),
        src:
            t && !s
                ? "https://cdn.discordapp.com/assets/content/64e328defbecc228c5ed250346b964b80c3fcdc293982496962fc482f917864c.webp"
                : "https://cdn.discordapp.com/assets/content/25e4c0e14022dd904f8f6d86d209f40ed0ca5d8df56f01b81296f40871336fdc.png",
        alt: "",
        "aria-hidden": !0,
    });
}
var ee = n(783569),
    et = n(333949),
    en = n(632036),
    el = n(53440);
let es = { url: n(970908).A, mimetype: "video/webm", isAnimated: !0 };
function ea() {
    let e = (0, U.o5)(),
        { imagePreview: t, videoPreview: a, productName: u, videoDurationSeconds: m } = e,
        { isExpanded: p, isExpansionAnimationComplete: x, collapsedHeight: N } = (0, V.H)(),
        { expansionSpring: g } = s.useContext(E.PW),
        A = (0, v.wW)(),
        _ = (0, W.bG)([X.Ay], () => X.Ay.useReducedMotion),
        [T, R] = s.useState(!1),
        Q = s.useRef(null);
    s.useEffect(() => {
        p && Q.current?.pause();
    }, [p]);
    let B = s.useMemo(() => (null == a ? null : { url: a, mimetype: (0, f.vm)(a), isAnimated: !0 }), [a]),
        M = !_ || T,
        I = s.useMemo(() => {
            let e = m ?? 0;
            return e <= 0 ? w.intl.string(w.t.kfks9Y) : (0, G.AF)((0, K.X3)({ progressSeconds: 0, targetSeconds: e }));
        }, [m]),
        P = s.useCallback(() => {
            ((0, b.r)({
                type: S.F.CLICK_INTERNAL,
                adCreativeType: o.p.BOUNTY,
                adCreativeId: e.id,
                questContentCTA: C.Cy.START_BOUNTY,
                surfaceId: h.uF.QUEST_BAR_V2,
                sourceQuestContent: h.uF.QUEST_BAR_V2,
                impressionId: A(),
            }),
                (function (e) {
                    let { bounty: t, sourceQuestContent: s } = e,
                        a = performance.now();
                    (0, $.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("974119"),
                                n.e("651585"),
                                n.e("145010"),
                                n.e("955628"),
                                n.e("572388"),
                                n.e("602078"),
                                n.e("664973"),
                                n.e("182045"),
                                n.e("115314"),
                            ]).then(n.bind(n, 932745));
                            return (n) => (0, l.jsx)(e, { ...n, bounty: t, sourceQuestContent: s, openedAtMs: a });
                        },
                        { modalKey: "BOUNTY_VIDEO_MODAL" },
                    );
                })({ bounty: e, sourceQuestContent: h.uF.QUEST_BAR_V2 }));
        }, [e, A]),
        F = p && x,
        O = !p || x;
    return (0, l.jsxs)("div", {
        className: el.rf,
        onMouseEnter: () => {
            _ && !T && R(!0);
        },
        onMouseLeave: () => {
            _ && T && R(!1);
        },
        children: [
            (0, l.jsxs)("div", {
                className: el.xX,
                children: [
                    (0, l.jsxs)(i.animated.div, {
                        className: el.Tj,
                        style: { opacity: (0, j.a)(g.to({ range: [0, 1], output: [0, 1] })) },
                        children: [
                            null != t &&
                                (0, l.jsx)(y._M, {
                                    id: "QuestBarBounty_previewImage",
                                    children: (e) => (0, l.jsx)("img", { ref: e, src: t, alt: "", className: el.$_ }),
                                }),
                            null != B &&
                                (0, l.jsx)(y._M, {
                                    id: "QuestBarBounty_previewVideo",
                                    children: (e) =>
                                        (0, l.jsx)(et.X, {
                                            ref: e,
                                            isHovered: T,
                                            asset: B,
                                            poster: t,
                                            className: r()(el.$_, null != t && el.Ki, { [el.mv]: M || null == t }),
                                        }),
                                }),
                        ],
                    }),
                    (0, l.jsx)(i.animated.div, {
                        className: el.PY,
                        style: { top: N, opacity: (0, j.a)(g.to({ range: [0, 1], output: [1, 0] })) },
                        children: (0, l.jsx)(J, { isAnimated: !F }),
                    }),
                    (0, l.jsx)(i.animated.div, {
                        className: el.ch,
                        style: { opacity: (0, j.a)(g.to({ range: [0, 1], output: [1, 0] })) },
                        children: (0, l.jsx)(Y.a, {
                            ref: Q,
                            autoplay: !p,
                            stateMachine: "State Machine 1",
                            fit: "contain",
                            className: el.QF,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: el.tV }),
            (p || !x) && (0, l.jsx)(J, { className: el.dq, isAnimated: !0 }),
            (0, l.jsx)(ee.T, {
                children: (0, l.jsx)(c.N, {
                    theme: k.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, l.jsxs)("div", {
                            className: r()(e, el.Qs),
                            children: [
                                (0, l.jsx)("div", {
                                    className: r()(en.al, en.Yi, el.Qq),
                                    children: (0, l.jsx)(z.N, {
                                        showVideo: F,
                                        imageAsset: {
                                            asset: es,
                                            assetId: "QuestBarBounty_rewardTileStatic",
                                            alt: w.intl.string(w.t.UMclVN),
                                            className: en.XM,
                                        },
                                        videoAsset: {
                                            asset: es,
                                            assetId: "QuestBarBounty_rewardTileAnimated",
                                            className: r()(en.eB, en.WY),
                                        },
                                        imageSize: { width: 64, height: 64 },
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: el.C,
                                    children: [
                                        (0, l.jsx)(q.D, {
                                            color: "text-strong",
                                            variant: "heading-sm/medium",
                                            lineClamp: 2,
                                            children: u ?? "",
                                        }),
                                        (0, l.jsx)(d.E, {
                                            variant: "body-xs/normal",
                                            children: w.intl.string(w.t["1uzE2S"]),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: r()({ [el._o]: !O }),
                                    children: (0, l.jsx)(H.$, {
                                        variant: "primary",
                                        size: "md",
                                        fullWidth: !0,
                                        text: I,
                                        onClick: P,
                                    }),
                                }),
                            ],
                        }),
                }),
            }),
        ],
    });
}
var er = n(742860);
function ei() {
    return (0, l.jsx)(er.A, { layoutVariant: "inset", header: (0, l.jsx)(L, {}), children: (0, l.jsx)(ea, {}) });
}
