"use strict";
n.d(t, { Ay: () => j, Vq: () => B, ux: () => G });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(989349),
    d = n.n(u),
    c = n(311907),
    _ = n(462887),
    f = n(862482),
    E = n(403581),
    h = n(834730),
    p = n(534514),
    m = n(939249),
    g = n(789645),
    A = n(736653),
    I = n(775602),
    T = n(11029),
    S = n(976860),
    y = n(224016),
    N = n(217392),
    O = n(255438),
    R = n(927578),
    v = n(728458),
    C = n(292348),
    b = n(87719),
    D = n(234419),
    L = n(725807),
    w = n(774774),
    M = n(788868),
    P = n(652215),
    U = n(985018),
    k = n(540590),
    x = n(939383);
function G(e) {
    if (null == e) return null;
    let t = d()(e),
        n = t.diff(d()(), "h");
    if (n > 24) {
        let e = t.diff(d()(), "d");
        return U.intl.formatToPlainString(U.t.xs9VPm, { numDays: e });
    }
    if (n > 1) return U.intl.formatToPlainString(U.t.p7KX59, { numHours: n });
    let r = t.diff(d()(), "minutes");
    return U.intl.formatToPlainString(U.t["XtQ+Ap"], { numMinutes: r });
}
function V(e) {
    let { className: t, children: n, withBottomMargin: i, discountOffer: s, trialOffer: o } = e,
        l = o?.expires_at ?? s?.expires_at,
        u = o?.subscription_trial,
        d = e.subscriptionTier ?? u?.sku_id ?? M.pe.TIER_2;
    return (0, r.jsxs)("div", {
        className: a()(t, k.J3, { [k.Vm]: d === M.pe.TIER_0, [k.hD]: d === M.pe.TIER_2, [k.ip]: i }),
        children: [
            (0, r.jsxs)("div", {
                className: k.wm,
                children: [
                    (0, r.jsx)(E.t, { size: "md", color: "currentColor", className: k.Xo }),
                    d === M.pe.TIER_0 && (0, r.jsx)(N.A, { className: k.Vn }),
                    d === M.pe.TIER_2 && (0, r.jsx)(y.A, { className: k.Vn }),
                ],
            }),
            (0, r.jsx)(h.E, { variant: "text-md/medium", className: k.C, color: "none", children: n }),
            (0, r.jsx)(w.HU, {
                text:
                    null != s
                        ? U.intl.formatToPlainString(U.t.iiLbvu, { percent: s.discount.amount })
                        : U.intl.string(U.t.IBYG5U),
                colorOptions: d === M.pe.TIER_0 ? w.at.PREMIUM_TIER_0_WHITE_FILL : w.at.PREMIUM_TIER_2_WHITE_FILL,
            }),
            (0, r.jsx)(h.E, { variant: "eyebrow", className: k.dt, children: G(l) }),
        ],
    });
}
function F(e) {
    let {
            className: t,
            onClose: n,
            subscriptionTier: s,
            analyticsLocationObject: a,
            trialOffer: o,
            discountOffer: l,
        } = e,
        [u, d] = i.useState(!1),
        c =
            null != l
                ? U.intl.formatToPlainString(U.t.bkQ4bH, { percent: l.discount.amount })
                : (0, R.FY)({
                      intervalType: o?.subscription_trial?.interval,
                      intervalCount: o?.subscription_trial?.interval_count,
                  });
    return (0, r.jsx)(L.A, {
        className: t,
        subscriptionTier: s,
        submitting: u,
        premiumModalAnalyticsLocation: a,
        size: f.$n.Sizes.MEDIUM,
        color: f.$n.Colors.GREEN,
        onClick: () => {
            d(!0);
        },
        onSubscribeModalClose: (e) => {
            d(!1), e && n?.();
        },
        textOptions: { textOverride: c },
    });
}
function B(e) {
    let t = (0, D.V)()?.subscription_trial,
        n = t?.sku_id ?? M.pe.TIER_2;
    return (0, r.jsx)(h.E, {
        variant: "text-xs/bold",
        className: a()(k.A6, e.className, { [k.kU]: n === M.pe.TIER_0, [k.y_]: n === M.pe.TIER_2 }),
        color: "none",
        children: (0, R.tS)({ intervalType: t?.interval, intervalCount: t?.interval_count }),
    });
}
function H(e) {
    let { subscriptionTier: t, onClose: n, analyticsLocationObject: i, trialOffer: s, discountOffer: a } = e;
    return (0, r.jsxs)("div", {
        className: k.qr,
        children: [
            (0, r.jsx)(f.$n, {
                "data-migration-pending": !0,
                onClick: n,
                size: f.$n.Sizes.SMALL,
                look: f.pR.BLANK,
                className: k.x7,
                children: U.intl.string(U.t.cpT0Cq),
            }),
            (0, r.jsx)(F, {
                className: k.xF,
                subscriptionTier: t,
                analyticsLocationObject: i,
                onClose: n,
                discountOffer: a,
                trialOffer: s,
            }),
        ],
    });
}
function Y(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        i = (0, D.V)();
    return (0, r.jsxs)("div", {
        className: k.ki,
        children: [
            (0, r.jsx)(w.HU, {
                className: k.LW,
                text: U.intl.string(U.t["8CVUrV"]),
                colorOptions: w.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
            }),
            (0, r.jsx)(p.D, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: U.intl.format(U.t["fF+cgd"], { onClick: () => (0, b.e)() }),
            }),
            (0, r.jsx)(F, {
                trialOffer: i,
                className: k.as,
                subscriptionTier: M.pe.TIER_2,
                analyticsLocationObject: n,
                onClose: t,
            }),
            (0, r.jsx)(h.E, { variant: "eyebrow", className: k.eg, children: G(i?.expires_at) }),
        ],
    });
}
function W(e) {
    let { headingText: t, context: n, children: i, trialOffer: s, discountOffer: a } = e;
    return (0, r.jsxs)("div", {
        className: k.hQ,
        children: [
            (0, r.jsx)(p.D, { variant: "heading-xl/semibold", children: t }),
            null != n && (0, r.jsx)(h.E, { className: k._O, variant: "text-md/normal", children: n }),
            (0, r.jsx)(V, { trialOffer: s, discountOffer: a, children: i }),
        ],
    });
}
function j(e) {
    let {
            headingText: t,
            context: i,
            children: s,
            onClose: o,
            type: u,
            subscriptionTier: d,
            analyticsLocationObject: f,
            trialOffer: E,
            discountOffer: y,
        } = e,
        N = (0, c.bG)([I.A], () => I.A.useReducedMotion),
        b = (0, A.Ay)(),
        D = (0, O.Xq)(C.eM / O.XF, { useKibibytes: !0 });
    switch (u) {
        case M.e.EMPTY_STICKER_PICKER_UPSELL:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(m.D, {
                        className: k.kz,
                        onClick: o,
                        children: (0, r.jsx)(g.P, { size: "md", color: "currentColor" }),
                    }),
                    (0, r.jsxs)("div", {
                        className: k.hQ,
                        children: [
                            (0, r.jsx)("img", { className: k.Tn, src: x, alt: U.intl.string(U.t.do7AoM) }),
                            (0, r.jsx)(p.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: U.intl.string(U.t.HEm04J),
                            }),
                            (0, r.jsx)(V, {
                                trialOffer: E,
                                discountOffer: y,
                                children: U.intl.format(U.t["2HoFKF"], {
                                    planName: (0, R.Zw)(d),
                                    onClick: () => (0, S.pX)(P.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(H, {
                        subscriptionTier: d,
                        onClose: o,
                        analyticsLocationObject: { section: P.JJy.EXPRESSION_PICKER, object: P.ZSU.BUTTON_CTA },
                        trialOffer: E,
                        discountOffer: y,
                    }),
                ],
            });
        case M.e.STICKER_PICKER_UPSELL:
            return (
                l()(null != s, "You must specify children for this upsell type"),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: k.hQ,
                            children: [
                                (0, r.jsx)("img", { className: k.Tn, src: x, alt: U.intl.string(U.t.do7AoM) }),
                                (0, r.jsx)(p.D, {
                                    variant: "heading-xl/bold",
                                    color: "text-strong",
                                    children: U.intl.string(U.t.jJG1pl),
                                }),
                                (0, r.jsx)(V, {
                                    trialOffer: E,
                                    discountOffer: y,
                                    children: U.intl.format(U.t["2HoFKF"], {
                                        planName: (0, R.Zw)(d),
                                        onClick: () => (0, S.pX)(P.BVt.APPLICATION_STORE),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(H, {
                            subscriptionTier: d,
                            onClose: o,
                            analyticsLocationObject: { section: P.JJy.EXPRESSION_PICKER, object: P.ZSU.BUTTON_CTA },
                            trialOffer: E,
                            discountOffer: y,
                        }),
                    ],
                })
            );
        case M.e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            l()(null != s, "You must specify children for this upsell type");
            let L = (0, _.q)(b) ? n(454333) : n(674463);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: k.hQ,
                        children: [
                            (0, r.jsx)("img", { alt: "", className: k.Tn, src: L }),
                            (0, r.jsx)(p.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: U.intl.string(U.t["1SsvhY"]),
                            }),
                            (0, r.jsx)(V, {
                                trialOffer: E,
                                discountOffer: y,
                                children: U.intl.format(U.t.md4nP5, {
                                    planName: (0, R.Zw)(d),
                                    onClick: () => (0, S.pX)(P.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(H, {
                        subscriptionTier: d,
                        onClose: o,
                        analyticsLocationObject: { section: P.JJy.EMOJI_PICKER_POPOUT, object: P.ZSU.BUTTON_CTA },
                        trialOffer: E,
                        discountOffer: y,
                    }),
                ],
            });
        case M.e.UPLOAD_ERROR_UPSELL:
        case M.e.BURST_REACTION_UPSELL:
        case M.e.MESSAGE_LENGTH_UPSELL:
            let w;
            switch (u) {
                case M.e.UPLOAD_ERROR_UPSELL:
                    w = U.intl.format(U.t.F4qoD7, {
                        planName: (0, R.Zw)(d),
                        premiumMaxSize: d === M.pe.TIER_0 ? U.intl.string(U.t["C/Rhb9"]) : D,
                        onClick: () => {
                            (0, S.pX)(P.BVt.APPLICATION_STORE), o?.();
                        },
                    });
                    break;
                case M.e.BURST_REACTION_UPSELL:
                    w = U.intl.format(U.t.poib9C, {
                        planName: (0, R.Zw)(d),
                        onClick: () => {
                            (0, S.pX)(P.BVt.APPLICATION_STORE), o?.();
                        },
                    });
                    break;
                case M.e.MESSAGE_LENGTH_UPSELL:
                    w = U.intl.format(U.t.GUHtE3, {
                        premiumMaxMessageLength: P.CS1,
                        onClick: () => {
                            (0, S.pX)(P.BVt.APPLICATION_STORE), o?.();
                        },
                    });
            }
            return (
                l()(null != w, "There must be some upsell context"),
                (0, r.jsxs)("div", {
                    className: k.hQ,
                    children: [
                        (0, r.jsx)(p.D, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                        (0, r.jsx)(h.E, { variant: "text-md/normal", children: i }),
                        (0, r.jsx)(V, { trialOffer: E, discountOffer: y, children: w }),
                    ],
                })
            );
        case M.e.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, r.jsxs)("div", {
                className: k.hQ,
                children: [
                    (0, r.jsx)(p.D, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                    (0, r.jsx)(h.E, { variant: "text-md/normal", children: i }),
                    (0, r.jsx)(V, {
                        trialOffer: E,
                        discountOffer: y,
                        children: U.intl.format(U.t.poib9C, {
                            planName: (0, R.Zw)(d),
                            onClick: () => (0, S.pX)(P.BVt.APPLICATION_STORE),
                        }),
                    }),
                    (0, r.jsx)(F, {
                        className: k.Oy,
                        subscriptionTier: d,
                        analyticsLocationObject: f,
                        onClose: o,
                        trialOffer: E,
                        discountOffer: y,
                    }),
                ],
            });
        case M.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                l()(null != s, "You must specify children for this upsell type"),
                (0, r.jsx)(V, {
                    trialOffer: E,
                    discountOffer: y,
                    children: U.intl.format(U.t["5KMAnK"], {
                        onClick: () => {
                            (0, S.pX)(P.BVt.APPLICATION_STORE), (0, T.D)();
                        },
                    }),
                })
            );
        case M.e.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, r.jsxs)("div", {
                className: a()(k.iW, { [k.WP]: !N }),
                children: [
                    (0, r.jsx)(h.E, { variant: "text-lg/bold", color: "text-feedback-critical", children: i }),
                    (0, r.jsx)(p.D, {
                        variant: "heading-lg/extrabold",
                        color: "text-strong",
                        className: k.Ed,
                        children: U.intl.string(U.t.ZvHg3N),
                    }),
                    (0, r.jsx)("div", { className: k.yF }),
                    (0, r.jsx)(V, {
                        trialOffer: E,
                        discountOffer: y,
                        className: k.ZH,
                        subscriptionTier: d,
                        children: U.intl.format(U.t.GUHtE3, {
                            premiumMaxMessageLength: P.CS1,
                            onClick: () => {
                                (0, S.pX)(P.BVt.APPLICATION_STORE), o?.();
                            },
                        }),
                    }),
                    (0, r.jsx)(F, {
                        subscriptionTier: d,
                        analyticsLocationObject: f,
                        onClose: o,
                        trialOffer: E,
                        discountOffer: y,
                    }),
                ],
            });
        case M.e.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case M.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, r.jsx)(Y, {});
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
            return (0, r.jsx)(W, { trialOffer: E, discountOffer: y, headingText: t, context: i, children: s });
        default:
            return (
                v.A.captureMessage(`Possible mishandling of a PremiumUpsellType: ${u}`),
                (0, r.jsx)(W, { headingText: t, context: i, children: s, trialOffer: E, discountOffer: y })
            );
    }
}
