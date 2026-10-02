n.d(t, { Ay: () => j, Vq: () => F, ux: () => G });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    d = n(536637),
    c = n.n(d),
    u = n(17928),
    _ = n(462887),
    E = n(862482),
    A = n(403581),
    h = n(834730),
    I = n(297264),
    f = n(939249),
    p = n(789645),
    T = n(736653),
    m = n(775602),
    g = n(11029),
    S = n(976860),
    N = n(224016),
    C = n(217392),
    O = n(158045),
    R = n(38405),
    L = n(87719),
    y = n(732280),
    D = n(725807),
    v = n(774774),
    b = n(202541),
    M = n(652215),
    P = n(375708),
    U = n(100523),
    w = n(939383);
function G(e) {
    if (null == e) return null;
    let t = c()(e),
        n = t.diff(c()(), "h");
    if (n > 24) {
        let e = t.diff(c()(), "d");
        return P.intl.formatToPlainString(P.t.xs9VPm, { numDays: e });
    }
    if (n > 1) return P.intl.formatToPlainString(P.t.p7KX59, { numHours: n });
    let i = t.diff(c()(), "minutes");
    return P.intl.formatToPlainString(P.t["XtQ+Ap"], { numMinutes: i });
}
function x(e) {
    let { className: t, children: n, withBottomMargin: r, discountOffer: a, trialOffer: l } = e,
        o = l?.expiresAt?.toISOString() ?? a?.expiresAt?.toISOString(),
        d = l?.subscriptionTrial,
        c = e.subscriptionTier ?? d?.skuId ?? b.pe.TIER_2;
    return (0, i.jsxs)("div", {
        className: s()(t, U.J3, { [U.Vm]: c === b.pe.TIER_0, [U.hD]: c === b.pe.TIER_2, [U.ip]: r }),
        children: [
            (0, i.jsxs)("div", {
                className: U.wm,
                children: [
                    (0, i.jsx)(A.t, { size: "md", color: "currentColor", className: U.Xo }),
                    c === b.pe.TIER_0 && (0, i.jsx)(C.A, { className: U.Vn }),
                    c === b.pe.TIER_2 && (0, i.jsx)(N.A, { className: U.Vn }),
                ],
            }),
            (0, i.jsx)(h.E, { variant: "text-md/medium", className: U.C, color: "none", children: n }),
            (0, i.jsx)(v.HU, {
                text:
                    null != a
                        ? P.intl.formatToPlainString(P.t.iiLbvu, { percent: a.discount.amount })
                        : P.intl.string(P.t.IBYG5U),
                colorOptions: c === b.pe.TIER_0 ? v.at.PREMIUM_TIER_0_WHITE_FILL : v.at.PREMIUM_TIER_2_WHITE_FILL,
            }),
            (0, i.jsx)(h.E, { variant: "eyebrow", className: U.dt, children: G(o) }),
        ],
    });
}
function k(e) {
    let {
            className: t,
            onClose: n,
            subscriptionTier: a,
            analyticsLocationObject: s,
            trialOffer: l,
            discountOffer: o,
        } = e,
        [d, c] = r.useState(!1),
        u =
            null != o
                ? P.intl.formatToPlainString(P.t.bkQ4bH, { percent: o.discount.amount })
                : (0, O.FY)({
                      intervalType: l?.subscriptionTrial?.interval,
                      intervalCount: l?.subscriptionTrial?.intervalCount,
                  });
    return (0, i.jsx)(D.A, {
        className: t,
        subscriptionTier: a,
        submitting: d,
        premiumModalAnalyticsLocation: s,
        size: E.$n.Sizes.MEDIUM,
        color: E.$n.Colors.GREEN,
        onClick: () => {
            c(!0);
        },
        onSubscribeModalClose: (e) => {
            (c(!1), e && n?.());
        },
        textOptions: { textOverride: u },
    });
}
function F(e) {
    let t = (0, y.V)()?.subscriptionTrial,
        n = t?.skuId ?? b.pe.TIER_2;
    return (0, i.jsx)(h.E, {
        variant: "text-xs/bold",
        className: s()(U.A6, e.className, { [U.kU]: n === b.pe.TIER_0, [U.y_]: n === b.pe.TIER_2 }),
        color: "none",
        children: (0, O.tS)({ intervalType: t?.interval, intervalCount: t?.intervalCount }),
    });
}
function B(e) {
    let { subscriptionTier: t, onClose: n, analyticsLocationObject: r, trialOffer: a, discountOffer: s } = e;
    return (0, i.jsxs)("div", {
        className: U.qr,
        children: [
            (0, i.jsx)(E.$n, {
                "data-migration-pending": !0,
                onClick: n,
                size: E.$n.Sizes.SMALL,
                look: E.pR.BLANK,
                className: U.x7,
                children: P.intl.string(P.t.cpT0Cq),
            }),
            (0, i.jsx)(k, {
                className: U.xF,
                subscriptionTier: t,
                analyticsLocationObject: r,
                onClose: n,
                discountOffer: s,
                trialOffer: a,
            }),
        ],
    });
}
function V(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        r = (0, y.V)();
    return (0, i.jsxs)("div", {
        className: U.ki,
        children: [
            (0, i.jsx)(v.HU, {
                className: U.LW,
                text: P.intl.string(P.t["8CVUrV"]),
                colorOptions: v.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
            }),
            (0, i.jsx)(I.D, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: P.intl.format(P.t["fF+cgd"], { onClick: () => (0, L.e)() }),
            }),
            (0, i.jsx)(k, {
                trialOffer: r,
                className: U.as,
                subscriptionTier: b.pe.TIER_2,
                analyticsLocationObject: n,
                onClose: t,
            }),
            (0, i.jsx)(h.E, { variant: "eyebrow", className: U.eg, children: G(r?.expiresAt?.toISOString()) }),
        ],
    });
}
function H(e) {
    let { headingText: t, context: n, children: r, trialOffer: a, discountOffer: s } = e;
    return (0, i.jsxs)("div", {
        className: U.hQ,
        children: [
            (0, i.jsx)(I.D, { variant: "heading-xl/semibold", children: t }),
            null != n && (0, i.jsx)(h.E, { className: U._O, variant: "text-md/normal", children: n }),
            (0, i.jsx)(x, { trialOffer: a, discountOffer: s, children: r }),
        ],
    });
}
function j(e) {
    let {
            headingText: t,
            context: r,
            children: a,
            onClose: l,
            type: d,
            subscriptionTier: c,
            analyticsLocationObject: E,
            trialOffer: A,
            discountOffer: N,
        } = e,
        C = (0, u.bG)([m.Ay], () => m.Ay.useReducedMotion),
        L = (0, T.Ay)(),
        y = (0, O.EJ)(b.PremiumTypes.TIER_2, { useSpace: !1 });
    switch (d) {
        case b.e.EMPTY_STICKER_PICKER_UPSELL:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.D, {
                        className: U.kz,
                        onClick: l,
                        children: (0, i.jsx)(p.P, { size: "md", color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: U.hQ,
                        children: [
                            (0, i.jsx)("img", { className: U.Tn, src: w, alt: P.intl.string(P.t.do7AoM) }),
                            (0, i.jsx)(I.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: P.intl.string(P.t.HEm04J),
                            }),
                            (0, i.jsx)(x, {
                                trialOffer: A,
                                discountOffer: N,
                                children: P.intl.format(P.t["2HoFKF"], {
                                    planName: (0, O.Zw)(c),
                                    onClick: () => (0, S.pX)(M.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(B, {
                        subscriptionTier: c,
                        onClose: l,
                        analyticsLocationObject: { section: M.JJy.EXPRESSION_PICKER, object: M.ZSU.BUTTON_CTA },
                        trialOffer: A,
                        discountOffer: N,
                    }),
                ],
            });
        case b.e.STICKER_PICKER_UPSELL:
            return (
                o()(null != a, "You must specify children for this upsell type"),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: U.hQ,
                            children: [
                                (0, i.jsx)("img", { className: U.Tn, src: w, alt: P.intl.string(P.t.do7AoM) }),
                                (0, i.jsx)(I.D, {
                                    variant: "heading-xl/bold",
                                    color: "text-strong",
                                    children: P.intl.string(P.t.jJG1pl),
                                }),
                                (0, i.jsx)(x, {
                                    trialOffer: A,
                                    discountOffer: N,
                                    children: P.intl.format(P.t["2HoFKF"], {
                                        planName: (0, O.Zw)(c),
                                        onClick: () => (0, S.pX)(M.BVt.APPLICATION_STORE),
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(B, {
                            subscriptionTier: c,
                            onClose: l,
                            analyticsLocationObject: { section: M.JJy.EXPRESSION_PICKER, object: M.ZSU.BUTTON_CTA },
                            trialOffer: A,
                            discountOffer: N,
                        }),
                    ],
                })
            );
        case b.e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            o()(null != a, "You must specify children for this upsell type");
            let D = (0, _.q)(L) ? n(454333) : n(674463);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)("div", {
                        className: U.hQ,
                        children: [
                            (0, i.jsx)("img", { alt: "", className: U.Tn, src: D }),
                            (0, i.jsx)(I.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: P.intl.string(P.t["1SsvhY"]),
                            }),
                            (0, i.jsx)(x, {
                                trialOffer: A,
                                discountOffer: N,
                                children: P.intl.format(P.t.md4nP5, {
                                    planName: (0, O.Zw)(c),
                                    onClick: () => (0, S.pX)(M.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(B, {
                        subscriptionTier: c,
                        onClose: l,
                        analyticsLocationObject: { section: M.JJy.EMOJI_PICKER_POPOUT, object: M.ZSU.BUTTON_CTA },
                        trialOffer: A,
                        discountOffer: N,
                    }),
                ],
            });
        case b.e.UPLOAD_ERROR_UPSELL:
        case b.e.BURST_REACTION_UPSELL:
        case b.e.MESSAGE_LENGTH_UPSELL:
            let v;
            switch (d) {
                case b.e.UPLOAD_ERROR_UPSELL:
                    v = P.intl.format(P.t.F4qoD7, {
                        planName: (0, O.Zw)(c),
                        premiumMaxSize: c === b.pe.TIER_0 ? P.intl.string(P.t["C/Rhb9"]) : y,
                        onClick: () => {
                            ((0, S.pX)(M.BVt.APPLICATION_STORE), l?.());
                        },
                    });
                    break;
                case b.e.BURST_REACTION_UPSELL:
                    v = P.intl.format(P.t.poib9C, {
                        planName: (0, O.Zw)(c),
                        onClick: () => {
                            ((0, S.pX)(M.BVt.APPLICATION_STORE), l?.());
                        },
                    });
                    break;
                case b.e.MESSAGE_LENGTH_UPSELL:
                    v = P.intl.format(P.t.GUHtE3, {
                        premiumMaxMessageLength: M.CS1,
                        onClick: () => {
                            ((0, S.pX)(M.BVt.APPLICATION_STORE), l?.());
                        },
                    });
            }
            return (
                o()(null != v, "There must be some upsell context"),
                (0, i.jsxs)("div", {
                    className: U.hQ,
                    children: [
                        (0, i.jsx)(I.D, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                        (0, i.jsx)(h.E, { variant: "text-md/normal", children: r }),
                        (0, i.jsx)(x, { trialOffer: A, discountOffer: N, children: v }),
                    ],
                })
            );
        case b.e.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, i.jsxs)("div", {
                className: U.hQ,
                children: [
                    (0, i.jsx)(I.D, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                    null != r && (0, i.jsx)(h.E, { variant: "text-md/normal", children: r }),
                    (0, i.jsx)(x, {
                        trialOffer: A,
                        discountOffer: N,
                        children: P.intl.format(P.t.poib9C, {
                            planName: (0, O.Zw)(c),
                            onClick: () => (0, S.pX)(M.BVt.APPLICATION_STORE),
                        }),
                    }),
                    (0, i.jsx)(k, {
                        className: U.Oy,
                        subscriptionTier: c,
                        analyticsLocationObject: E,
                        onClose: l,
                        trialOffer: A,
                        discountOffer: N,
                    }),
                ],
            });
        case b.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                o()(null != a, "You must specify children for this upsell type"),
                (0, i.jsx)(x, {
                    trialOffer: A,
                    discountOffer: N,
                    children: P.intl.format(P.t["5KMAnK"], {
                        onClick: () => {
                            ((0, S.pX)(M.BVt.APPLICATION_STORE), (0, g.D)());
                        },
                    }),
                })
            );
        case b.e.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, i.jsxs)("div", {
                className: s()(U.iW, { [U.WP]: !C }),
                children: [
                    (0, i.jsx)(h.E, { variant: "text-lg/bold", color: "text-feedback-critical", children: r }),
                    (0, i.jsx)(I.D, {
                        variant: "heading-lg/extrabold",
                        color: "text-strong",
                        className: U.Ed,
                        children: P.intl.string(P.t.ZvHg3N),
                    }),
                    (0, i.jsx)("div", { className: U.yF }),
                    (0, i.jsx)(x, {
                        trialOffer: A,
                        discountOffer: N,
                        className: U.ZH,
                        subscriptionTier: c,
                        children: P.intl.format(P.t.GUHtE3, {
                            premiumMaxMessageLength: M.CS1,
                            onClick: () => {
                                ((0, S.pX)(M.BVt.APPLICATION_STORE), l?.());
                            },
                        }),
                    }),
                    (0, i.jsx)(k, {
                        subscriptionTier: c,
                        analyticsLocationObject: E,
                        onClose: l,
                        trialOffer: A,
                        discountOffer: N,
                    }),
                ],
            });
        case b.e.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case b.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, i.jsx)(V, {});
        case b.e.GUILD_CAP_MODAL_UPSELL:
        case b.e.PREMIUM_GUILD_IDENTITY_MODAL:
        case b.e.CUSTOM_PROFILE_UPSELL:
        case b.e.VIDEO_BACKGROUNDS_MODAL:
        case b.e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
        case b.e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
        case b.e.EMOJI_PICKER_EMOJI_CLICKED:
        case b.e.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
        case b.e.APP_ICON_UPSELL:
        case b.e.CLIENT_THEMES_UPSELL:
        case b.e.TRY_IT_OUT_MODAL_UPSELL:
            return (0, i.jsx)(H, { trialOffer: A, discountOffer: N, headingText: t, context: r, children: a });
        default:
            return (
                R.A.captureMessage(`Possible mishandling of a PremiumUpsellType: ${d}`),
                (0, i.jsx)(H, { headingText: t, context: r, children: a, trialOffer: A, discountOffer: N })
            );
    }
}
