var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    d = n(536637),
    c = n.n(d),
    u = n(855986),
    _ = n(462887),
    E = n(862482),
    A = n(403581),
    h = n(834730),
    f = n(534514),
    I = n(939249),
    p = n(789645),
    m = n(736653),
    T = n(775602),
    g = n(11029),
    S = n(976860),
    N = n(224016),
    C = n(217392),
    O = n(879610),
    R = n(856383),
    L = n(87719),
    y = n(77528),
    D = n(725807),
    b = n(774774),
    v = n(682901),
    P = n(652215),
    M = n(792996),
    U = n(100523),
    w = n(939383);
function G(e) {
    if (null == e) return null;
    let t = c()(e),
        n = t.diff(c()(), "h");
    if (n > 24) {
        let e = t.diff(c()(), "d");
        return M.intl.formatToPlainString(M.t.xs9VPm, { numDays: e });
    }
    if (n > 1) return M.intl.formatToPlainString(M.t.p7KX59, { numHours: n });
    let i = t.diff(c()(), "minutes");
    return M.intl.formatToPlainString(M.t["XtQ+Ap"], { numMinutes: i });
}
function x(e) {
    let { className: t, children: n, withBottomMargin: r, discountOffer: a, trialOffer: l } = e,
        o = l?.expiresAt?.toISOString() ?? a?.expiresAt?.toISOString(),
        d = l?.subscriptionTrial,
        c = e.subscriptionTier ?? d?.skuId ?? v.pe.TIER_2;
    return (0, i.jsxs)("div", {
        className: s()(t, U.J3, { [U.Vm]: c === v.pe.TIER_0, [U.hD]: c === v.pe.TIER_2, [U.ip]: r }),
        children: [
            (0, i.jsxs)("div", {
                className: U.wm,
                children: [
                    (0, i.jsx)(A.t, { size: "md", color: "currentColor", className: U.Xo }),
                    c === v.pe.TIER_0 && (0, i.jsx)(C.A, { className: U.Vn }),
                    c === v.pe.TIER_2 && (0, i.jsx)(N.A, { className: U.Vn }),
                ],
            }),
            (0, i.jsx)(h.E, { variant: "body-md/medium", className: U.C, color: "none", children: n }),
            (0, i.jsx)(b.HU, {
                text:
                    null != a
                        ? M.intl.formatToPlainString(M.t.iiLbvu, { percent: a.discount.amount })
                        : M.intl.string(M.t.IBYG5U),
                colorOptions: c === v.pe.TIER_0 ? b.at.PREMIUM_TIER_0_WHITE_FILL : b.at.PREMIUM_TIER_2_WHITE_FILL,
            }),
            (0, i.jsx)(h.E, { variant: "body-sm/medium", className: U.dt, children: G(o) }),
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
                ? M.intl.formatToPlainString(M.t.bkQ4bH, { percent: o.discount.amount })
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
                children: M.intl.string(M.t.cpT0Cq),
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
function B(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        r = (0, y.V)();
    return (0, i.jsxs)("div", {
        className: U.ki,
        children: [
            (0, i.jsx)(b.HU, {
                className: U.LW,
                text: M.intl.string(M.t["8CVUrV"]),
                colorOptions: b.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
            }),
            (0, i.jsx)(f.D, {
                variant: "heading-sm/semibold",
                color: "text-default",
                children: M.intl.format(M.t["fF+cgd"], { onClick: () => (0, L.e)() }),
            }),
            (0, i.jsx)(k, {
                trialOffer: r,
                className: U.as,
                subscriptionTier: v.pe.TIER_2,
                analyticsLocationObject: n,
                onClose: t,
            }),
            (0, i.jsx)(h.E, { variant: "body-sm/medium", className: U.eg, children: G(r?.expiresAt?.toISOString()) }),
        ],
    });
}
function V(e) {
    let { headingText: t, context: n, children: r, trialOffer: a, discountOffer: s } = e;
    return (0, i.jsxs)("div", {
        className: U.hQ,
        children: [
            (0, i.jsx)(f.D, { variant: "heading-xl/semibold", children: t }),
            null != n && (0, i.jsx)(h.E, { className: U._O, variant: "body-md/normal", children: n }),
            (0, i.jsx)(x, { trialOffer: a, discountOffer: s, children: r }),
        ],
    });
}
n.d(
    t,
    {},
    {
        Ay: function (e) {
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
                C = (0, u.bG)([T.Ay], () => T.Ay.useReducedMotion),
                L = (0, m.Ay)(),
                y = (0, O.EJ)(v.PremiumTypes.TIER_2, { useSpace: !1 });
            switch (d) {
                case v.e.EMPTY_STICKER_PICKER_UPSELL:
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(I.D, {
                                className: U.kz,
                                onClick: l,
                                children: (0, i.jsx)(p.P, { size: "md", color: "currentColor" }),
                            }),
                            (0, i.jsxs)("div", {
                                className: U.hQ,
                                children: [
                                    (0, i.jsx)("img", { className: U.Tn, src: w, alt: M.intl.string(M.t.do7AoM) }),
                                    (0, i.jsx)(f.D, {
                                        variant: "heading-xl/semibold",
                                        color: "text-strong",
                                        children: M.intl.string(M.t.HEm04J),
                                    }),
                                    (0, i.jsx)(x, {
                                        trialOffer: A,
                                        discountOffer: N,
                                        children: M.intl.format(M.t["2HoFKF"], {
                                            planName: (0, O.Zw)(c),
                                            onClick: () => (0, S.pX)(P.BVt.APPLICATION_STORE),
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(F, {
                                subscriptionTier: c,
                                onClose: l,
                                analyticsLocationObject: { section: P.JJy.EXPRESSION_PICKER, object: P.ZSU.BUTTON_CTA },
                                trialOffer: A,
                                discountOffer: N,
                            }),
                        ],
                    });
                case v.e.STICKER_PICKER_UPSELL:
                    return (
                        o()(null != a, "You must specify children for this upsell type"),
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: U.hQ,
                                    children: [
                                        (0, i.jsx)("img", { className: U.Tn, src: w, alt: M.intl.string(M.t.do7AoM) }),
                                        (0, i.jsx)(f.D, {
                                            variant: "heading-xl/semibold",
                                            color: "text-strong",
                                            children: M.intl.string(M.t.jJG1pl),
                                        }),
                                        (0, i.jsx)(x, {
                                            trialOffer: A,
                                            discountOffer: N,
                                            children: M.intl.format(M.t["2HoFKF"], {
                                                planName: (0, O.Zw)(c),
                                                onClick: () => (0, S.pX)(P.BVt.APPLICATION_STORE),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(F, {
                                    subscriptionTier: c,
                                    onClose: l,
                                    analyticsLocationObject: {
                                        section: P.JJy.EXPRESSION_PICKER,
                                        object: P.ZSU.BUTTON_CTA,
                                    },
                                    trialOffer: A,
                                    discountOffer: N,
                                }),
                            ],
                        })
                    );
                case v.e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
                    o()(null != a, "You must specify children for this upsell type");
                    let D = (0, _.q)(L) ? n(454333) : n(674463);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)("div", {
                                className: U.hQ,
                                children: [
                                    (0, i.jsx)("img", { alt: "", className: U.Tn, src: D }),
                                    (0, i.jsx)(f.D, {
                                        variant: "heading-xl/semibold",
                                        color: "text-strong",
                                        children: M.intl.string(M.t["1SsvhY"]),
                                    }),
                                    (0, i.jsx)(x, {
                                        trialOffer: A,
                                        discountOffer: N,
                                        children: M.intl.format(M.t.md4nP5, {
                                            planName: (0, O.Zw)(c),
                                            onClick: () => (0, S.pX)(P.BVt.APPLICATION_STORE),
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(F, {
                                subscriptionTier: c,
                                onClose: l,
                                analyticsLocationObject: {
                                    section: P.JJy.EMOJI_PICKER_POPOUT,
                                    object: P.ZSU.BUTTON_CTA,
                                },
                                trialOffer: A,
                                discountOffer: N,
                            }),
                        ],
                    });
                case v.e.UPLOAD_ERROR_UPSELL:
                case v.e.BURST_REACTION_UPSELL:
                case v.e.MESSAGE_LENGTH_UPSELL:
                    let b;
                    switch (d) {
                        case v.e.UPLOAD_ERROR_UPSELL:
                            b = M.intl.format(M.t.F4qoD7, {
                                planName: (0, O.Zw)(c),
                                premiumMaxSize: c === v.pe.TIER_0 ? M.intl.string(M.t["C/Rhb9"]) : y,
                                onClick: () => {
                                    ((0, S.pX)(P.BVt.APPLICATION_STORE), l?.());
                                },
                            });
                            break;
                        case v.e.BURST_REACTION_UPSELL:
                            b = M.intl.format(M.t.poib9C, {
                                planName: (0, O.Zw)(c),
                                onClick: () => {
                                    ((0, S.pX)(P.BVt.APPLICATION_STORE), l?.());
                                },
                            });
                            break;
                        case v.e.MESSAGE_LENGTH_UPSELL:
                            b = M.intl.format(M.t.GUHtE3, {
                                premiumMaxMessageLength: 4e3,
                                onClick: () => {
                                    ((0, S.pX)(P.BVt.APPLICATION_STORE), l?.());
                                },
                            });
                    }
                    return (
                        o()(null != b, "There must be some upsell context"),
                        (0, i.jsxs)("div", {
                            className: U.hQ,
                            children: [
                                (0, i.jsx)(f.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                                (0, i.jsx)(h.E, { variant: "body-md/normal", children: r }),
                                (0, i.jsx)(x, { trialOffer: A, discountOffer: N, children: b }),
                            ],
                        })
                    );
                case v.e.BURST_REACTION_QUICK_ACTION_UPSELL:
                    return (0, i.jsxs)("div", {
                        className: U.hQ,
                        children: [
                            (0, i.jsx)(f.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            null != r && (0, i.jsx)(h.E, { variant: "body-md/normal", children: r }),
                            (0, i.jsx)(x, {
                                trialOffer: A,
                                discountOffer: N,
                                children: M.intl.format(M.t.poib9C, {
                                    planName: (0, O.Zw)(c),
                                    onClick: () => (0, S.pX)(P.BVt.APPLICATION_STORE),
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
                case v.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
                    return (
                        o()(null != a, "You must specify children for this upsell type"),
                        (0, i.jsx)(x, {
                            trialOffer: A,
                            discountOffer: N,
                            children: M.intl.format(M.t["5KMAnK"], {
                                onClick: () => {
                                    ((0, S.pX)(P.BVt.APPLICATION_STORE), (0, g.DS)());
                                },
                            }),
                        })
                    );
                case v.e.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
                    return (0, i.jsxs)("div", {
                        className: s()(U.iW, { [U.WP]: !C }),
                        children: [
                            (0, i.jsx)(h.E, {
                                variant: "body-lg/semibold",
                                color: "text-feedback-critical",
                                children: r,
                            }),
                            (0, i.jsx)(f.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: U.Ed,
                                children: M.intl.string(M.t.ZvHg3N),
                            }),
                            (0, i.jsx)("div", { className: U.yF }),
                            (0, i.jsx)(x, {
                                trialOffer: A,
                                discountOffer: N,
                                className: U.ZH,
                                subscriptionTier: c,
                                children: M.intl.format(M.t.GUHtE3, {
                                    premiumMaxMessageLength: 4e3,
                                    onClick: () => {
                                        ((0, S.pX)(P.BVt.APPLICATION_STORE), l?.());
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
                case v.e.CUSTOM_PROFILE_TRY_OUT_UPSELL:
                case v.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
                    return (0, i.jsx)(B, {});
                case v.e.GUILD_CAP_MODAL_UPSELL:
                case v.e.PREMIUM_GUILD_IDENTITY_MODAL:
                case v.e.CUSTOM_PROFILE_UPSELL:
                case v.e.VIDEO_BACKGROUNDS_MODAL:
                case v.e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
                case v.e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
                case v.e.EMOJI_PICKER_EMOJI_CLICKED:
                case v.e.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
                case v.e.APP_ICON_UPSELL:
                case v.e.CLIENT_THEMES_UPSELL:
                case v.e.TRY_IT_OUT_MODAL_UPSELL:
                    return (0, i.jsx)(V, { trialOffer: A, discountOffer: N, headingText: t, context: r, children: a });
                default:
                    return (
                        R.A.captureMessage(`Possible mishandling of a PremiumUpsellType: ${d}`),
                        (0, i.jsx)(V, { headingText: t, context: r, children: a, trialOffer: A, discountOffer: N })
                    );
            }
        },
        Vq: function (e) {
            let t = (0, y.V)()?.subscriptionTrial,
                n = t?.skuId ?? v.pe.TIER_2;
            return (0, i.jsx)(h.E, {
                variant: "body-xs/semibold",
                className: s()(U.A6, e.className, { [U.kU]: n === v.pe.TIER_0, [U.y_]: n === v.pe.TIER_2 }),
                color: "none",
                children: (0, O.tS)({ intervalType: t?.interval, intervalCount: t?.intervalCount }),
            });
        },
        ux: G,
    },
);
