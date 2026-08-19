"use strict";
n.d(t, { Ay: () => Y, Vq: () => B, ux: () => k });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    d = n(989349),
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
    O = n(255438),
    R = n(158045),
    L = n(38405),
    y = n(292348),
    D = n(87719),
    v = n(732280),
    b = n(725807),
    M = n(774774),
    P = n(202541),
    U = n(652215),
    w = n(375708),
    G = n(479094),
    x = n(939383);
function k(e) {
    if (null == e) return null;
    let t = c()(e),
        n = t.diff(c()(), "h");
    if (n > 24) {
        let e = t.diff(c()(), "d");
        return w.intl.formatToPlainString(w.t.xs9VPm, { numDays: e });
    }
    if (n > 1) return w.intl.formatToPlainString(w.t.p7KX59, { numHours: n });
    let i = t.diff(c()(), "minutes");
    return w.intl.formatToPlainString(w.t["XtQ+Ap"], { numMinutes: i });
}
function F(e) {
    let { className: t, children: n, withBottomMargin: r, discountOffer: a, trialOffer: l } = e,
        o = l?.expiresAt?.toISOString() ?? a?.expiresAt?.toISOString(),
        d = l?.subscriptionTrial,
        c = e.subscriptionTier ?? d?.skuId ?? P.pe.TIER_2;
    return (0, i.jsxs)("div", {
        className: s()(t, G.J3, { [G.Vm]: c === P.pe.TIER_0, [G.hD]: c === P.pe.TIER_2, [G.ip]: r }),
        children: [
            (0, i.jsxs)("div", {
                className: G.wm,
                children: [
                    (0, i.jsx)(A.t, { size: "md", color: "currentColor", className: G.Xo }),
                    c === P.pe.TIER_0 && (0, i.jsx)(C.A, { className: G.Vn }),
                    c === P.pe.TIER_2 && (0, i.jsx)(N.A, { className: G.Vn }),
                ],
            }),
            (0, i.jsx)(h.E, { variant: "text-md/medium", className: G.C, color: "none", children: n }),
            (0, i.jsx)(M.HU, {
                text:
                    null != a
                        ? w.intl.formatToPlainString(w.t.iiLbvu, { percent: a.discount.amount })
                        : w.intl.string(w.t.IBYG5U),
                colorOptions: c === P.pe.TIER_0 ? M.at.PREMIUM_TIER_0_WHITE_FILL : M.at.PREMIUM_TIER_2_WHITE_FILL,
            }),
            (0, i.jsx)(h.E, { variant: "eyebrow", className: G.dt, children: k(o) }),
        ],
    });
}
function V(e) {
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
                ? w.intl.formatToPlainString(w.t.bkQ4bH, { percent: o.discount.amount })
                : (0, R.FY)({
                      intervalType: l?.subscriptionTrial?.interval,
                      intervalCount: l?.subscriptionTrial?.intervalCount,
                  });
    return (0, i.jsx)(b.A, {
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
            c(!1), e && n?.();
        },
        textOptions: { textOverride: u },
    });
}
function B(e) {
    let t = (0, v.V)()?.subscriptionTrial,
        n = t?.skuId ?? P.pe.TIER_2;
    return (0, i.jsx)(h.E, {
        variant: "text-xs/bold",
        className: s()(G.A6, e.className, { [G.kU]: n === P.pe.TIER_0, [G.y_]: n === P.pe.TIER_2 }),
        color: "none",
        children: (0, R.tS)({ intervalType: t?.interval, intervalCount: t?.intervalCount }),
    });
}
function H(e) {
    let { subscriptionTier: t, onClose: n, analyticsLocationObject: r, trialOffer: a, discountOffer: s } = e;
    return (0, i.jsxs)("div", {
        className: G.qr,
        children: [
            (0, i.jsx)(E.$n, {
                "data-migration-pending": !0,
                onClick: n,
                size: E.$n.Sizes.SMALL,
                look: E.pR.BLANK,
                className: G.x7,
                children: w.intl.string(w.t.cpT0Cq),
            }),
            (0, i.jsx)(V, {
                className: G.xF,
                subscriptionTier: t,
                analyticsLocationObject: r,
                onClose: n,
                discountOffer: s,
                trialOffer: a,
            }),
        ],
    });
}
function j(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        r = (0, v.V)();
    return (0, i.jsxs)("div", {
        className: G.ki,
        children: [
            (0, i.jsx)(M.HU, {
                className: G.LW,
                text: w.intl.string(w.t["8CVUrV"]),
                colorOptions: M.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
            }),
            (0, i.jsx)(I.D, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: w.intl.format(w.t["fF+cgd"], { onClick: () => (0, D.e)() }),
            }),
            (0, i.jsx)(V, {
                trialOffer: r,
                className: G.as,
                subscriptionTier: P.pe.TIER_2,
                analyticsLocationObject: n,
                onClose: t,
            }),
            (0, i.jsx)(h.E, { variant: "eyebrow", className: G.eg, children: k(r?.expiresAt?.toISOString()) }),
        ],
    });
}
function W(e) {
    let { headingText: t, context: n, children: r, trialOffer: a, discountOffer: s } = e;
    return (0, i.jsxs)("div", {
        className: G.hQ,
        children: [
            (0, i.jsx)(I.D, { variant: "heading-xl/semibold", children: t }),
            null != n && (0, i.jsx)(h.E, { className: G._O, variant: "text-md/normal", children: n }),
            (0, i.jsx)(F, { trialOffer: a, discountOffer: s, children: r }),
        ],
    });
}
function Y(e) {
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
        D = (0, T.Ay)(),
        v = (0, O.Xq)(y.eM / O.XF, { useKibibytes: !0 });
    switch (d) {
        case P.e.EMPTY_STICKER_PICKER_UPSELL:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.D, {
                        className: G.kz,
                        onClick: l,
                        children: (0, i.jsx)(p.P, { size: "md", color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: G.hQ,
                        children: [
                            (0, i.jsx)("img", { className: G.Tn, src: x, alt: w.intl.string(w.t.do7AoM) }),
                            (0, i.jsx)(I.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: w.intl.string(w.t.HEm04J),
                            }),
                            (0, i.jsx)(F, {
                                trialOffer: A,
                                discountOffer: N,
                                children: w.intl.format(w.t["2HoFKF"], {
                                    planName: (0, R.Zw)(c),
                                    onClick: () => (0, S.pX)(U.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(H, {
                        subscriptionTier: c,
                        onClose: l,
                        analyticsLocationObject: { section: U.JJy.EXPRESSION_PICKER, object: U.ZSU.BUTTON_CTA },
                        trialOffer: A,
                        discountOffer: N,
                    }),
                ],
            });
        case P.e.STICKER_PICKER_UPSELL:
            return (
                o()(null != a, "You must specify children for this upsell type"),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: G.hQ,
                            children: [
                                (0, i.jsx)("img", { className: G.Tn, src: x, alt: w.intl.string(w.t.do7AoM) }),
                                (0, i.jsx)(I.D, {
                                    variant: "heading-xl/bold",
                                    color: "text-strong",
                                    children: w.intl.string(w.t.jJG1pl),
                                }),
                                (0, i.jsx)(F, {
                                    trialOffer: A,
                                    discountOffer: N,
                                    children: w.intl.format(w.t["2HoFKF"], {
                                        planName: (0, R.Zw)(c),
                                        onClick: () => (0, S.pX)(U.BVt.APPLICATION_STORE),
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(H, {
                            subscriptionTier: c,
                            onClose: l,
                            analyticsLocationObject: { section: U.JJy.EXPRESSION_PICKER, object: U.ZSU.BUTTON_CTA },
                            trialOffer: A,
                            discountOffer: N,
                        }),
                    ],
                })
            );
        case P.e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            o()(null != a, "You must specify children for this upsell type");
            let b = (0, _.q)(D) ? n(454333) : n(674463);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)("div", {
                        className: G.hQ,
                        children: [
                            (0, i.jsx)("img", { alt: "", className: G.Tn, src: b }),
                            (0, i.jsx)(I.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: w.intl.string(w.t["1SsvhY"]),
                            }),
                            (0, i.jsx)(F, {
                                trialOffer: A,
                                discountOffer: N,
                                children: w.intl.format(w.t.md4nP5, {
                                    planName: (0, R.Zw)(c),
                                    onClick: () => (0, S.pX)(U.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(H, {
                        subscriptionTier: c,
                        onClose: l,
                        analyticsLocationObject: { section: U.JJy.EMOJI_PICKER_POPOUT, object: U.ZSU.BUTTON_CTA },
                        trialOffer: A,
                        discountOffer: N,
                    }),
                ],
            });
        case P.e.UPLOAD_ERROR_UPSELL:
        case P.e.BURST_REACTION_UPSELL:
        case P.e.MESSAGE_LENGTH_UPSELL:
            let M;
            switch (d) {
                case P.e.UPLOAD_ERROR_UPSELL:
                    M = w.intl.format(w.t.F4qoD7, {
                        planName: (0, R.Zw)(c),
                        premiumMaxSize: c === P.pe.TIER_0 ? w.intl.string(w.t["C/Rhb9"]) : v,
                        onClick: () => {
                            (0, S.pX)(U.BVt.APPLICATION_STORE), l?.();
                        },
                    });
                    break;
                case P.e.BURST_REACTION_UPSELL:
                    M = w.intl.format(w.t.poib9C, {
                        planName: (0, R.Zw)(c),
                        onClick: () => {
                            (0, S.pX)(U.BVt.APPLICATION_STORE), l?.();
                        },
                    });
                    break;
                case P.e.MESSAGE_LENGTH_UPSELL:
                    M = w.intl.format(w.t.GUHtE3, {
                        premiumMaxMessageLength: U.CS1,
                        onClick: () => {
                            (0, S.pX)(U.BVt.APPLICATION_STORE), l?.();
                        },
                    });
            }
            return (
                o()(null != M, "There must be some upsell context"),
                (0, i.jsxs)("div", {
                    className: G.hQ,
                    children: [
                        (0, i.jsx)(I.D, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                        (0, i.jsx)(h.E, { variant: "text-md/normal", children: r }),
                        (0, i.jsx)(F, { trialOffer: A, discountOffer: N, children: M }),
                    ],
                })
            );
        case P.e.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, i.jsxs)("div", {
                className: G.hQ,
                children: [
                    (0, i.jsx)(I.D, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                    (0, i.jsx)(h.E, { variant: "text-md/normal", children: r }),
                    (0, i.jsx)(F, {
                        trialOffer: A,
                        discountOffer: N,
                        children: w.intl.format(w.t.poib9C, {
                            planName: (0, R.Zw)(c),
                            onClick: () => (0, S.pX)(U.BVt.APPLICATION_STORE),
                        }),
                    }),
                    (0, i.jsx)(V, {
                        className: G.Oy,
                        subscriptionTier: c,
                        analyticsLocationObject: E,
                        onClose: l,
                        trialOffer: A,
                        discountOffer: N,
                    }),
                ],
            });
        case P.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                o()(null != a, "You must specify children for this upsell type"),
                (0, i.jsx)(F, {
                    trialOffer: A,
                    discountOffer: N,
                    children: w.intl.format(w.t["5KMAnK"], {
                        onClick: () => {
                            (0, S.pX)(U.BVt.APPLICATION_STORE), (0, g.D)();
                        },
                    }),
                })
            );
        case P.e.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, i.jsxs)("div", {
                className: s()(G.iW, { [G.WP]: !C }),
                children: [
                    (0, i.jsx)(h.E, { variant: "text-lg/bold", color: "text-feedback-critical", children: r }),
                    (0, i.jsx)(I.D, {
                        variant: "heading-lg/extrabold",
                        color: "text-strong",
                        className: G.Ed,
                        children: w.intl.string(w.t.ZvHg3N),
                    }),
                    (0, i.jsx)("div", { className: G.yF }),
                    (0, i.jsx)(F, {
                        trialOffer: A,
                        discountOffer: N,
                        className: G.ZH,
                        subscriptionTier: c,
                        children: w.intl.format(w.t.GUHtE3, {
                            premiumMaxMessageLength: U.CS1,
                            onClick: () => {
                                (0, S.pX)(U.BVt.APPLICATION_STORE), l?.();
                            },
                        }),
                    }),
                    (0, i.jsx)(V, {
                        subscriptionTier: c,
                        analyticsLocationObject: E,
                        onClose: l,
                        trialOffer: A,
                        discountOffer: N,
                    }),
                ],
            });
        case P.e.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case P.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, i.jsx)(j, {});
        case P.e.GUILD_CAP_MODAL_UPSELL:
        case P.e.PREMIUM_GUILD_IDENTITY_MODAL:
        case P.e.CUSTOM_PROFILE_UPSELL:
        case P.e.VIDEO_BACKGROUNDS_MODAL:
        case P.e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
        case P.e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
        case P.e.EMOJI_PICKER_EMOJI_CLICKED:
        case P.e.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
        case P.e.APP_ICON_UPSELL:
        case P.e.CLIENT_THEMES_UPSELL:
        case P.e.TRY_IT_OUT_MODAL_UPSELL:
            return (0, i.jsx)(W, { trialOffer: A, discountOffer: N, headingText: t, context: r, children: a });
        default:
            return (
                L.A.captureMessage(`Possible mishandling of a PremiumUpsellType: ${d}`),
                (0, i.jsx)(W, { headingText: t, context: r, children: a, trialOffer: A, discountOffer: N })
            );
    }
}
