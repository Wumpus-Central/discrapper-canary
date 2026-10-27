n.d(t, { A: () => H });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    s = n(323889),
    i = n(939249),
    u = n(834730),
    c = n(290136),
    d = n(661531),
    p = n(365199),
    m = n(738822),
    x = n(291749),
    h = n(590202),
    C = n(971649),
    f = n(620954),
    v = n(617986),
    N = n(139210),
    E = n(980707),
    _ = n(477782),
    j = n(743368),
    g = n(265872),
    y = n(442433),
    A = n(507395),
    R = n(144779),
    T = n(494280),
    B = n(845890),
    Q = n(963713),
    S = n(818348),
    I = n(105292);
function b(e) {
    let { onSelect: t, onClose: n } = e,
        r = (0, Q.o5)(),
        a = (0, Q.Q8)(r),
        o = (0, C.wW)(),
        i = (0, T.Yh)(a);
    return (0, l.jsxs)(E.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != t ? t() : (0, y.Z_)();
        },
        navId: "quest-bar-bounty",
        "aria-label": I.intl.string(I.t.ogxXGq),
        onClose: n ?? S.tE,
        children: [
            (0, l.jsx)(
                _.rX,
                {
                    children: (0, l.jsx)(_.Dr, {
                        id: "open-game-link",
                        label: r.cta.buttonLabel,
                        action: function () {
                            (0, f._Q)(
                                { adContentId: r.id, adCreativeType: s.p.BOUNTY, cta: r.cta },
                                {
                                    content: m.uF.QUEST_BAR_V2,
                                    ctaContent: h.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
                                    impressionId: o(),
                                    sourceQuestContent: m.uF.QUEST_BAR_V2,
                                },
                            );
                        },
                        icon: j.W,
                        leadingAccessory: { type: "icon", icon: j.W },
                    }),
                },
                "major-actions",
            ),
            (0, l.jsxs)(
                _.rX,
                {
                    children: [
                        (0, l.jsx)(_.Dr, {
                            id: "display-disclosure",
                            label: I.intl.string(I.t.GcsZKJ),
                            action: function () {
                                (0, v.Zc)(a, {
                                    content: m.uF.QUEST_BAR_V2,
                                    ctaContent: h.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                    impressionId: o(),
                                    sourceQuestContent: m.uF.QUEST_BAR_V2,
                                });
                            },
                        }),
                        (0, l.jsx)(_.Dr, {
                            id: "hide-entrypoint",
                            label: I.intl.string(I.t.NN79E9),
                            action: function () {
                                ((0, A.r)({
                                    type: R.F.CLICK_INTERNAL,
                                    ...i,
                                    questContentCTA: h.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                    surfaceId: m.uF.QUEST_BAR_V2,
                                    sourceQuestContent: m.uF.QUEST_BAR_V2,
                                    impressionId: o(),
                                }),
                                    (0, B.Xo)(i, m.uF.QUEST_BAR_V2));
                            },
                        }),
                    ],
                },
                "minor-actions",
            ),
        ],
    });
}
function M(e) {
    let { children: t, onOpen: n, onClose: a, onSelect: o } = e,
        s = (0, Q.o5)(),
        i = (0, Q.Q8)(s),
        u = (0, C.wW)(),
        c = r.useRef(null),
        d = r.useCallback(() => {
            ((0, A.r)({
                type: R.F.CLICK_INTERNAL,
                ...(0, T.Yh)(i),
                questContentCTA: h.Cy.OPEN_CONTEXT_MENU,
                surfaceId: m.uF.QUEST_BAR_V2,
                sourceQuestContent: m.uF.QUEST_BAR_V2,
                impressionId: u(),
            }),
                null != n && n());
        }, [i, u, n]);
    return (0, l.jsx)(g.Y, {
        targetElementRef: c,
        onRequestOpen: d,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(b, { onSelect: o, onClose: t });
        },
        animation: g.Y.Animation.NONE,
        children: (e) => (0, l.jsx)("div", { ref: c, children: t(e) }),
    });
}
var U = n(241762);
n(272111);
var P = n(886030);
function F() {
    let e = (0, Q.o5)(),
        t = (0, Q.Q8)(e),
        n = (0, C.wW)(),
        {
            onCtxMenuOpen: a,
            onCtxMenuClose: E,
            onCtxMenuSelect: _,
            isExpanded: j,
            isExpansionAnimationComplete: g,
        } = (0, U.H)(),
        { productIcon: y } = e,
        A = r.useCallback(() => {
            (0, v.Zc)(t, {
                content: m.uF.QUEST_BAR_V2,
                ctaContent: h.Cy.OPEN_DISCLOSURE,
                sourceQuestContent: m.uF.QUEST_BAR_V2,
            });
        }, [t]),
        R = r.useCallback(() => {
            (0, f._Q)(
                { adContentId: e.id, adCreativeType: s.p.BOUNTY, cta: e.cta },
                {
                    content: m.uF.QUEST_BAR_HEADER,
                    ctaContent: h.Cy.OPEN_GAME_LINK,
                    impressionId: n(),
                    sourceQuestContent: m.uF.QUEST_BAR_V2,
                },
            );
        }, [e.cta, e.id, n]);
    return (0, l.jsxs)(N.A, {
        className: P.bU,
        children: [
            (0, l.jsx)(N.h, { className: P.Tu }),
            (0, l.jsxs)(N.h, {
                className: P.W2,
                children: [
                    null != y &&
                        (0, l.jsx)(i.D, {
                            onClick: R,
                            className: o()(P.iY, P.vk, { [P.wm]: j && g }),
                            children: (0, l.jsx)("img", {
                                src: (0, x.lR)({ assetUrl: y, width: 24, height: 24 }),
                                alt: e.advertiserName,
                                width: 24,
                                height: 24,
                                className: P.Q1,
                            }),
                        }),
                    (0, l.jsxs)(i.D, {
                        className: o()(P.y8, P.RK),
                        onClick: A,
                        children: [
                            (0, l.jsx)(u.E, {
                                color: "text-overlay-light",
                                variant: "text-xs/normal",
                                children: I.intl.string(I.t.o6FLcF),
                            }),
                            (0, l.jsx)(c.CircleQuestionIcon, { color: d.A.colors.WHITE, className: P.P$ }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(N.h, {
                className: P.jd,
                children: (0, l.jsx)(M, {
                    onOpen: a,
                    onClose: E,
                    onSelect: _,
                    children: (e) =>
                        (0, l.jsx)(i.D, {
                            ...e,
                            className: o()(P.oz, P.rb),
                            "aria-label": I.intl.string(I.t.DEoVWZ),
                            children: (0, l.jsx)(p.MoreHorizontalIcon, {
                                size: "md",
                                color: "currentColor",
                                className: o()(P.Bx, P.ON),
                            }),
                        }),
                }),
            }),
        ],
    });
}
var w = n(17928),
    k = n(775602),
    O = n(557637),
    V = n(333949),
    D = n(53440);
function L() {
    let { imagePreview: e, videoPreview: t } = (0, Q.o5)(),
        n = (0, w.bG)([k.Ay], () => k.Ay.useReducedMotion),
        [a, s] = r.useState(!1),
        i = r.useMemo(() => (null == t ? null : { url: t, mimetype: (0, x.vm)(t), isAnimated: !0 }), [t]),
        u = !n || a;
    return (0, l.jsxs)("div", {
        className: D.rf,
        onMouseEnter: () => {
            n && !a && s(!0);
        },
        onMouseLeave: () => {
            n && a && s(!1);
        },
        children: [
            null != e &&
                (0, l.jsx)(O._M, {
                    id: "QuestBarBounty_previewImage",
                    children: (t) => (0, l.jsx)("img", { ref: t, src: e, alt: "", className: D.$_ }),
                }),
            null != i &&
                (0, l.jsx)(O._M, {
                    id: "QuestBarBounty_previewVideo",
                    children: (t) =>
                        (0, l.jsx)(V.X, {
                            ref: t,
                            isHovered: a,
                            asset: i,
                            poster: e,
                            className: o()(D.$_, null != e && D.Ki, { [D.mv]: u || null == e }),
                        }),
                }),
        ],
    });
}
var W = n(742860);
function H() {
    return (0, l.jsx)(W.A, { layoutVariant: "flush", header: (0, l.jsx)(F, {}), children: (0, l.jsx)(L, {}) });
}
