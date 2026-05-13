"use strict";
n.d(t, { Ay: () => W, Vq: () => B, ux: () => G });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(989349),
    c = n.n(u),
    d = n(17928),
    _ = n(462887),
    f = n(862482),
    h = n(403581),
    p = n(834730),
    E = n(534514),
    m = n(939249),
    g = n(789645),
    A = n(736653),
    I = n(775602),
    T = n(11029),
    S = n(976860),
    N = n(224016),
    y = n(217392),
    C = n(255438),
    v = n(927578),
    O = n(38405),
    R = n(292348),
    b = n(87719),
    D = n(234419),
    L = n(725807),
    w = n(774774),
    M = n(788868),
    P = n(652215),
    x = n(375708),
    U = n(540590),
    k = n(939383);
function G(e) {
    if (null == e) return null;
    let t = c()(e),
        n = t.diff(c()(), "h");
    if (n > 24) {
        let e = t.diff(c()(), "d");
        return x.intl.formatToPlainString(x.t.xs9VPm, { numDays: e });
    }
    if (n > 1) return x.intl.formatToPlainString(x.t.p7KX59, { numHours: n });
    let i = t.diff(c()(), "minutes");
    return x.intl.formatToPlainString(x.t["XtQ+Ap"], { numMinutes: i });
}
function F(e) {
    let { className: t, children: n, withBottomMargin: r, discountOffer: s, trialOffer: o } = e,
        l = o?.expires_at ?? s?.expiresAt?.toISOString(),
        u = o?.subscription_trial,
        c = e.subscriptionTier ?? u?.sku_id ?? M.pe.TIER_2;
    return (0, i.jsxs)("div", {
        className: a()(t, U.J3, { [U.Vm]: c === M.pe.TIER_0, [U.hD]: c === M.pe.TIER_2, [U.ip]: r }),
        children: [
            (0, i.jsxs)("div", {
                className: U.wm,
                children: [
                    (0, i.jsx)(h.t, { size: "md", color: "currentColor", className: U.Xo }),
                    c === M.pe.TIER_0 && (0, i.jsx)(y.A, { className: U.Vn }),
                    c === M.pe.TIER_2 && (0, i.jsx)(N.A, { className: U.Vn }),
                ],
            }),
            (0, i.jsx)(p.E, { variant: "text-md/medium", className: U.C, color: "none", children: n }),
            (0, i.jsx)(w.HU, {
                text:
                    null != s
                        ? x.intl.formatToPlainString(x.t.iiLbvu, { percent: s.discount.amount })
                        : x.intl.string(x.t.IBYG5U),
                colorOptions: c === M.pe.TIER_0 ? w.at.PREMIUM_TIER_0_WHITE_FILL : w.at.PREMIUM_TIER_2_WHITE_FILL,
            }),
            (0, i.jsx)(p.E, { variant: "eyebrow", className: U.dt, children: G(l) }),
        ],
    });
}
function V(e) {
    let {
            className: t,
            onClose: n,
            subscriptionTier: s,
            analyticsLocationObject: a,
            trialOffer: o,
            discountOffer: l,
        } = e,
        [u, c] = r.useState(!1),
        d =
            null != l
                ? x.intl.formatToPlainString(x.t.bkQ4bH, { percent: l.discount.amount })
                : (0, v.FY)({
                      intervalType: o?.subscription_trial?.interval,
                      intervalCount: o?.subscription_trial?.interval_count,
                  });
    return (0, i.jsx)(L.A, {
        className: t,
        subscriptionTier: s,
        submitting: u,
        premiumModalAnalyticsLocation: a,
        size: f.$n.Sizes.MEDIUM,
        color: f.$n.Colors.GREEN,
        onClick: () => {
            c(!0);
        },
        onSubscribeModalClose: (e) => {
            c(!1), e && n?.();
        },
        textOptions: { textOverride: d },
    });
}
function B(e) {
    let t = (0, D.V)()?.subscription_trial,
        n = t?.sku_id ?? M.pe.TIER_2;
    return (0, i.jsx)(p.E, {
        variant: "text-xs/bold",
        className: a()(U.A6, e.className, { [U.kU]: n === M.pe.TIER_0, [U.y_]: n === M.pe.TIER_2 }),
        color: "none",
        children: (0, v.tS)({ intervalType: t?.interval, intervalCount: t?.interval_count }),
    });
}
function H(e) {
    let { subscriptionTier: t, onClose: n, analyticsLocationObject: r, trialOffer: s, discountOffer: a } = e;
    return (0, i.jsxs)("div", {
        className: U.qr,
        children: [
            (0, i.jsx)(f.$n, {
                "data-migration-pending": !0,
                onClick: n,
                size: f.$n.Sizes.SMALL,
                look: f.pR.BLANK,
                className: U.x7,
                children: x.intl.string(x.t.cpT0Cq),
            }),
            (0, i.jsx)(V, {
                className: U.xF,
                subscriptionTier: t,
                analyticsLocationObject: r,
                onClose: n,
                discountOffer: a,
                trialOffer: s,
            }),
        ],
    });
}
function j(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        r = (0, D.V)();
    return (0, i.jsxs)("div", {
        className: U.ki,
        children: [
            (0, i.jsx)(w.HU, {
                className: U.LW,
                text: x.intl.string(x.t["8CVUrV"]),
                colorOptions: w.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
            }),
            (0, i.jsx)(E.D, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: x.intl.format(x.t["fF+cgd"], { onClick: () => (0, b.e)() }),
            }),
            (0, i.jsx)(V, {
                trialOffer: r,
                className: U.as,
                subscriptionTier: M.pe.TIER_2,
                analyticsLocationObject: n,
                onClose: t,
            }),
            (0, i.jsx)(p.E, { variant: "eyebrow", className: U.eg, children: G(r?.expires_at) }),
        ],
    });
}
function Y(e) {
    let { headingText: t, context: n, children: r, trialOffer: s, discountOffer: a } = e;
    return (0, i.jsxs)("div", {
        className: U.hQ,
        children: [
            (0, i.jsx)(E.D, { variant: "heading-xl/semibold", children: t }),
            null != n && (0, i.jsx)(p.E, { className: U._O, variant: "text-md/normal", children: n }),
            (0, i.jsx)(F, { trialOffer: s, discountOffer: a, children: r }),
        ],
    });
}
function W(e) {
    let {
            headingText: t,
            context: r,
            children: s,
            onClose: o,
            type: u,
            subscriptionTier: c,
            analyticsLocationObject: f,
            trialOffer: h,
            discountOffer: N,
        } = e,
        y = (0, d.bG)([I.A], () => I.A.useReducedMotion),
        b = (0, A.Ay)(),
        D = (0, C.Xq)(R.eM / C.XF, { useKibibytes: !0 });
    switch (u) {
        case M.e.EMPTY_STICKER_PICKER_UPSELL:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(m.D, {
                        className: U.kz,
                        onClick: o,
                        children: (0, i.jsx)(g.P, { size: "md", color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: U.hQ,
                        children: [
                            (0, i.jsx)("img", { className: U.Tn, src: k, alt: x.intl.string(x.t.do7AoM) }),
                            (0, i.jsx)(E.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: x.intl.string(x.t.HEm04J),
                            }),
                            (0, i.jsx)(F, {
                                trialOffer: h,
                                discountOffer: N,
                                children: x.intl.format(x.t["2HoFKF"], {
                                    planName: (0, v.Zw)(c),
                                    onClick: () => (0, S.pX)(P.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(H, {
                        subscriptionTier: c,
                        onClose: o,
                        analyticsLocationObject: { section: P.JJy.EXPRESSION_PICKER, object: P.ZSU.BUTTON_CTA },
                        trialOffer: h,
                        discountOffer: N,
                    }),
                ],
            });
        case M.e.STICKER_PICKER_UPSELL:
            return (
                l()(null != s, "You must specify children for this upsell type"),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: U.hQ,
                            children: [
                                (0, i.jsx)("img", { className: U.Tn, src: k, alt: x.intl.string(x.t.do7AoM) }),
                                (0, i.jsx)(E.D, {
                                    variant: "heading-xl/bold",
                                    color: "text-strong",
                                    children: x.intl.string(x.t.jJG1pl),
                                }),
                                (0, i.jsx)(F, {
                                    trialOffer: h,
                                    discountOffer: N,
                                    children: x.intl.format(x.t["2HoFKF"], {
                                        planName: (0, v.Zw)(c),
                                        onClick: () => (0, S.pX)(P.BVt.APPLICATION_STORE),
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(H, {
                            subscriptionTier: c,
                            onClose: o,
                            analyticsLocationObject: { section: P.JJy.EXPRESSION_PICKER, object: P.ZSU.BUTTON_CTA },
                            trialOffer: h,
                            discountOffer: N,
                        }),
                    ],
                })
            );
        case M.e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            l()(null != s, "You must specify children for this upsell type");
            let L = (0, _.q)(b) ? n(454333) : n(674463);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)("div", {
                        className: U.hQ,
                        children: [
                            (0, i.jsx)("img", { alt: "", className: U.Tn, src: L }),
                            (0, i.jsx)(E.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: x.intl.string(x.t["1SsvhY"]),
                            }),
                            (0, i.jsx)(F, {
                                trialOffer: h,
                                discountOffer: N,
                                children: x.intl.format(x.t.md4nP5, {
                                    planName: (0, v.Zw)(c),
                                    onClick: () => (0, S.pX)(P.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(H, {
                        subscriptionTier: c,
                        onClose: o,
                        analyticsLocationObject: { section: P.JJy.EMOJI_PICKER_POPOUT, object: P.ZSU.BUTTON_CTA },
                        trialOffer: h,
                        discountOffer: N,
                    }),
                ],
            });
        case M.e.UPLOAD_ERROR_UPSELL:
        case M.e.BURST_REACTION_UPSELL:
        case M.e.MESSAGE_LENGTH_UPSELL:
            let w;
            switch (u) {
                case M.e.UPLOAD_ERROR_UPSELL:
                    w = x.intl.format(x.t.F4qoD7, {
                        planName: (0, v.Zw)(c),
                        premiumMaxSize: c === M.pe.TIER_0 ? x.intl.string(x.t["C/Rhb9"]) : D,
                        onClick: () => {
                            (0, S.pX)(P.BVt.APPLICATION_STORE), o?.();
                        },
                    });
                    break;
                case M.e.BURST_REACTION_UPSELL:
                    w = x.intl.format(x.t.poib9C, {
                        planName: (0, v.Zw)(c),
                        onClick: () => {
                            (0, S.pX)(P.BVt.APPLICATION_STORE), o?.();
                        },
                    });
                    break;
                case M.e.MESSAGE_LENGTH_UPSELL:
                    w = x.intl.format(x.t.GUHtE3, {
                        premiumMaxMessageLength: P.CS1,
                        onClick: () => {
                            (0, S.pX)(P.BVt.APPLICATION_STORE), o?.();
                        },
                    });
            }
            return (
                l()(null != w, "There must be some upsell context"),
                (0, i.jsxs)("div", {
                    className: U.hQ,
                    children: [
                        (0, i.jsx)(E.D, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                        (0, i.jsx)(p.E, { variant: "text-md/normal", children: r }),
                        (0, i.jsx)(F, { trialOffer: h, discountOffer: N, children: w }),
                    ],
                })
            );
        case M.e.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, i.jsxs)("div", {
                className: U.hQ,
                children: [
                    (0, i.jsx)(E.D, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                    (0, i.jsx)(p.E, { variant: "text-md/normal", children: r }),
                    (0, i.jsx)(F, {
                        trialOffer: h,
                        discountOffer: N,
                        children: x.intl.format(x.t.poib9C, {
                            planName: (0, v.Zw)(c),
                            onClick: () => (0, S.pX)(P.BVt.APPLICATION_STORE),
                        }),
                    }),
                    (0, i.jsx)(V, {
                        className: U.Oy,
                        subscriptionTier: c,
                        analyticsLocationObject: f,
                        onClose: o,
                        trialOffer: h,
                        discountOffer: N,
                    }),
                ],
            });
        case M.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                l()(null != s, "You must specify children for this upsell type"),
                (0, i.jsx)(F, {
                    trialOffer: h,
                    discountOffer: N,
                    children: x.intl.format(x.t["5KMAnK"], {
                        onClick: () => {
                            (0, S.pX)(P.BVt.APPLICATION_STORE), (0, T.D)();
                        },
                    }),
                })
            );
        case M.e.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, i.jsxs)("div", {
                className: a()(U.iW, { [U.WP]: !y }),
                children: [
                    (0, i.jsx)(p.E, { variant: "text-lg/bold", color: "text-feedback-critical", children: r }),
                    (0, i.jsx)(E.D, {
                        variant: "heading-lg/extrabold",
                        color: "text-strong",
                        className: U.Ed,
                        children: x.intl.string(x.t.ZvHg3N),
                    }),
                    (0, i.jsx)("div", { className: U.yF }),
                    (0, i.jsx)(F, {
                        trialOffer: h,
                        discountOffer: N,
                        className: U.ZH,
                        subscriptionTier: c,
                        children: x.intl.format(x.t.GUHtE3, {
                            premiumMaxMessageLength: P.CS1,
                            onClick: () => {
                                (0, S.pX)(P.BVt.APPLICATION_STORE), o?.();
                            },
                        }),
                    }),
                    (0, i.jsx)(V, {
                        subscriptionTier: c,
                        analyticsLocationObject: f,
                        onClose: o,
                        trialOffer: h,
                        discountOffer: N,
                    }),
                ],
            });
        case M.e.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case M.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, i.jsx)(j, {});
        case M.e.GUILD_CAP_MODAL_UPSELL:
        case M.e.PREMIUM_GUILD_IDENTITY_MODAL:
        case M.e.CUSTOM_PROFILE_UPSELL:
        case M.e.VIDEO_BACKGROUNDS_MODAL:
        case M.e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
        case M.e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
        case M.e.EMOJI_PICKER_EMOJI_CLICKED:
        case M.e.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
        case M.e.APP_ICON_UPSELL:
        case M.e.CLIENT_THEMES_UPSELL:
        case M.e.TRY_IT_OUT_MODAL_UPSELL:
            return (0, i.jsx)(Y, { trialOffer: h, discountOffer: N, headingText: t, context: r, children: s });
        default:
            return (
                O.A.captureMessage(`Possible mishandling of a PremiumUpsellType: ${u}`),
                (0, i.jsx)(Y, { headingText: t, context: r, children: s, trialOffer: h, discountOffer: N })
            );
    }
}
