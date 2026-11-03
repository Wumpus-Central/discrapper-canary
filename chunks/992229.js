n.d(t, { A: () => eu });
var l = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    i = n(29477),
    o = n(323889),
    u = n(939249),
    c = n(43990),
    d = n(834730),
    p = n(290136),
    m = n(661531),
    x = n(365199),
    f = n(738822),
    h = n(291749),
    C = n(590202),
    v = n(971649),
    y = n(620954),
    N = n(557637),
    g = n(398025),
    j = n(617986),
    A = n(139210),
    E = n(568329),
    _ = n(980707),
    T = n(477782),
    R = n(743368),
    b = n(265872),
    Q = n(442433),
    B = n(507395),
    S = n(144779),
    I = n(494280),
    M = n(845890),
    U = n(963713),
    w = n(818348),
    P = n(105292);
function F(e) {
    let { onSelect: t, onClose: n } = e,
        s = (0, U.o5)(),
        a = (0, U.Q8)(s),
        r = (0, v.wW)(),
        i = (0, I.Yh)(a);
    return (0, l.jsxs)(_.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != t ? t() : (0, Q.Z_)();
        },
        navId: "quest-bar-bounty",
        "aria-label": P.intl.string(P.t.ogxXGq),
        onClose: n ?? w.tE,
        children: [
            (0, l.jsx)(
                T.rX,
                {
                    children: (0, l.jsx)(T.Dr, {
                        id: "open-game-link",
                        label: s.cta.buttonLabel,
                        action: function () {
                            (0, y._Q)(
                                { adContentId: s.id, adCreativeType: o.p.BOUNTY, cta: s.cta },
                                {
                                    content: f.uF.QUEST_BAR_V2,
                                    ctaContent: C.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
                                    impressionId: r(),
                                    sourceQuestContent: f.uF.QUEST_BAR_V2,
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
                            label: P.intl.string(P.t.GcsZKJ),
                            action: function () {
                                (0, j.Zc)(a, {
                                    content: f.uF.QUEST_BAR_V2,
                                    ctaContent: C.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                    impressionId: r(),
                                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                                });
                            },
                        }),
                        (0, l.jsx)(T.Dr, {
                            id: "hide-entrypoint",
                            label: P.intl.string(P.t.NN79E9),
                            action: function () {
                                ((0, B.r)({
                                    type: S.F.CLICK_INTERNAL,
                                    ...i,
                                    questContentCTA: C.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                    surfaceId: f.uF.QUEST_BAR_V2,
                                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                                    impressionId: r(),
                                }),
                                    (0, M.Xo)(i, f.uF.QUEST_BAR_V2));
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
            ((0, B.r)({
                type: S.F.CLICK_INTERNAL,
                ...(0, I.Yh)(o),
                questContentCTA: C.Cy.OPEN_CONTEXT_MENU,
                surfaceId: f.uF.QUEST_BAR_V2,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                impressionId: u(),
            }),
                null != n && n());
        }, [o, u, n]);
    return (0, l.jsx)(b.Y, {
        targetElementRef: c,
        onRequestOpen: d,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(F, { onSelect: r, onClose: t });
        },
        animation: b.Y.Animation.NONE,
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
            isExpanded: b,
            isExpansionAnimationComplete: Q,
            collapsedHeight: B,
        } = (0, V.H)(),
        { productIcon: S } = e,
        I = s.useCallback(() => {
            (0, j.Zc)(t, {
                content: f.uF.QUEST_BAR_V2,
                ctaContent: C.Cy.OPEN_DISCLOSURE,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
            });
        }, [t]),
        M = s.useCallback(() => {
            (0, y._Q)(
                { adContentId: e.id, adCreativeType: o.p.BOUNTY, cta: e.cta },
                {
                    content: f.uF.QUEST_BAR_HEADER,
                    ctaContent: C.Cy.OPEN_GAME_LINK,
                    impressionId: n(),
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
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
                    transform: a.to({ range: [0, 1], output: [B / 2 - 24 - 6, 0] }).to((e) => `translateY(${e}px)`),
                },
                children: [
                    null != S &&
                        (0, l.jsx)(u.D, {
                            onClick: M,
                            className: r()(D.iY, D.vk, { [D.wm]: b && Q }),
                            children: (0, l.jsx)(i.animated.div, {
                                className: D.U$,
                                style: {
                                    transform: a.to({ range: [0, 1], output: [1, 0.75] }).to((e) => `scale(${e})`),
                                },
                                children: (0, l.jsx)(N._M, {
                                    id: "QuestBarBounty_productIcon",
                                    children: (t) =>
                                        (0, l.jsx)("img", {
                                            ref: t,
                                            src: (0, h.lR)({ assetUrl: S, width: 32, height: 32 }),
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
                                        style: { opacity: (0, g.a)(a.to({ range: [0, 1], output: [1, 0] })) },
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
                                    onClick: I,
                                    children: [
                                        (0, l.jsx)(d.E, {
                                            color: "text-overlay-light",
                                            variant: "body-xs/normal",
                                            children: P.intl.string(P.t.o6FLcF),
                                        }),
                                        (0, l.jsx)(p.CircleQuestionIcon, { color: m.A.colors.WHITE, className: D.P$ }),
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
                            "aria-label": P.intl.string(P.t.DEoVWZ),
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
    G = n(775602),
    K = n(546121),
    X = n(792620),
    $ = n(192308),
    z = n(415441),
    Z = n(419403);
function J(e) {
    let { isAnimated: t, className: n } = e,
        s = (0, W.bG)([G.Ay], () => G.Ay.useReducedMotion);
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
    en = n(53440),
    el = n(427483),
    es = n(337611);
let ea = { url: el.A, mimetype: "video/webm", isAnimated: !0 },
    er = { url: es.A, mimetype: "image/webp", isAnimated: !1 };
function ei() {
    let e = (0, U.o5)(),
        { imagePreview: t, videoPreview: a, productName: u, videoDurationSeconds: p } = e,
        { isExpanded: m, isExpansionAnimationComplete: x, collapsedHeight: y } = (0, V.H)(),
        { expansionSpring: j } = s.useContext(E.PW),
        A = (0, v.wW)(),
        _ = (0, W.bG)([G.Ay], () => G.Ay.useReducedMotion),
        [T, R] = s.useState(!1),
        b = s.useRef(null);
    s.useEffect(() => {
        m && b.current?.pause();
    }, [m]);
    let Q = s.useMemo(() => (null == a ? null : { url: a, mimetype: (0, h.vm)(a), isAnimated: !0 }), [a]),
        I = !_ || T,
        M = s.useMemo(() => {
            let e = p ?? 0;
            return e <= 0 ? P.intl.string(P.t.kfks9Y) : (0, K.AF)((0, X.X3)({ progressSeconds: 0, targetSeconds: e }));
        }, [p]),
        w = s.useCallback(() => {
            ((0, B.r)({
                type: S.F.CLICK_INTERNAL,
                adCreativeType: o.p.BOUNTY,
                adCreativeId: e.id,
                questContentCTA: C.Cy.START_BOUNTY,
                surfaceId: f.uF.QUEST_BAR_V2,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
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
                                n.e("430165"),
                            ]).then(n.bind(n, 869172));
                            return (n) => (0, l.jsx)(e, { ...n, bounty: t, sourceQuestContent: s, openedAtMs: a });
                        },
                        { modalKey: "BOUNTY_VIDEO_MODAL" },
                    );
                })({ bounty: e, sourceQuestContent: f.uF.QUEST_BAR_V2 }));
        }, [e, A]),
        F = m && x,
        O = !m || x;
    return (0, l.jsxs)("div", {
        className: en.rf,
        onMouseEnter: () => {
            _ && !T && R(!0);
        },
        onMouseLeave: () => {
            _ && T && R(!1);
        },
        children: [
            (0, l.jsxs)("div", {
                className: en.xX,
                children: [
                    (0, l.jsxs)(i.animated.div, {
                        className: en.Tj,
                        style: { opacity: (0, g.a)(j.to({ range: [0, 1], output: [0, 1] })) },
                        children: [
                            null != t &&
                                (0, l.jsx)(N._M, {
                                    id: "QuestBarBounty_previewImage",
                                    children: (e) => (0, l.jsx)("img", { ref: e, src: t, alt: "", className: en.$_ }),
                                }),
                            null != Q &&
                                (0, l.jsx)(N._M, {
                                    id: "QuestBarBounty_previewVideo",
                                    children: (e) =>
                                        (0, l.jsx)(et.X, {
                                            ref: e,
                                            isHovered: T,
                                            asset: Q,
                                            poster: t,
                                            className: r()(en.$_, null != t && en.Ki, { [en.mv]: I || null == t }),
                                        }),
                                }),
                        ],
                    }),
                    (0, l.jsx)(i.animated.div, {
                        className: en.PY,
                        style: { top: y, opacity: (0, g.a)(j.to({ range: [0, 1], output: [1, 0] })) },
                        children: (0, l.jsx)(J, { isAnimated: !F }),
                    }),
                    (0, l.jsx)(i.animated.div, {
                        className: en.ch,
                        style: { opacity: (0, g.a)(j.to({ range: [0, 1], output: [1, 0] })) },
                        children: (0, l.jsx)(Y.a, {
                            ref: b,
                            autoplay: !m,
                            stateMachine: "State Machine 1",
                            fit: "contain",
                            className: en.QF,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: en.tV }),
            (m || !x) && (0, l.jsx)(J, { className: en.dq, isAnimated: !0 }),
            (0, l.jsx)(ee.T, {
                children: (0, l.jsx)(c.N, {
                    theme: k.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, l.jsxs)("div", {
                            className: r()(e, en.Qs),
                            children: [
                                (0, l.jsx)("div", {
                                    className: en.Qq,
                                    children: (0, l.jsx)(z.N, {
                                        showVideo: F,
                                        imageAsset: {
                                            asset: er,
                                            assetId: "QuestBarBounty_rewardTileStatic",
                                            alt: P.intl.string(P.t.UMclVN),
                                            className: en.Ag,
                                        },
                                        videoAsset: {
                                            asset: ea,
                                            assetId: "QuestBarBounty_rewardTileAnimated",
                                            className: en.Ag,
                                        },
                                        imageSize: { width: 64, height: 64 },
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: en.C,
                                    children: [
                                        (0, l.jsx)(q.D, {
                                            color: "text-strong",
                                            variant: "heading-sm/medium",
                                            lineClamp: 2,
                                            children: u ?? "",
                                        }),
                                        (0, l.jsx)(d.E, {
                                            variant: "body-xs/normal",
                                            children: P.intl.string(P.t["1uzE2S"]),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: r()({ [en._o]: !O }),
                                    children: (0, l.jsx)(H.$, {
                                        variant: "primary",
                                        size: "md",
                                        fullWidth: !0,
                                        text: M,
                                        onClick: w,
                                    }),
                                }),
                            ],
                        }),
                }),
            }),
        ],
    });
}
var eo = n(742860);
function eu() {
    return (0, l.jsx)(eo.A, { layoutVariant: "inset", header: (0, l.jsx)(L, {}), children: (0, l.jsx)(ei, {}) });
}
