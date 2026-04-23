"use strict";
n.d(t, { Ay: () => W, Vq: () => B, ux: () => G });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(989349),
    c = n.n(u),
    d = n(311907),
    _ = n(462887),
    f = n(862482),
    p = n(403581),
    h = n(834730),
    E = n(534514),
    m = n(939249),
    g = n(789645),
    A = n(736653),
    I = n(775602),
    T = n(11029),
    S = n(976860),
    y = n(224016),
    N = n(217392),
    v = n(255438),
    C = n(927578),
    O = n(728458),
    R = n(292348),
    b = n(87719),
    D = n(234419),
    L = n(725807),
    w = n(774774),
    M = n(788868),
    P = n(652215),
    x = n(985018),
    k = n(540590),
    U = n(939383);
function G(e) {
    if (null == e) return null;
    let t = c()(e),
        n = t.diff(c()(), "h");
    if (n > 24) {
        let e = t.diff(c()(), "d");
        return x.intl.formatToPlainString(x.t.xs9VPm, { numDays: e });
    }
    if (n > 1) return x.intl.formatToPlainString(x.t.p7KX59, { numHours: n });
    let r = t.diff(c()(), "minutes");
    return x.intl.formatToPlainString(x.t["XtQ+Ap"], { numMinutes: r });
}
function F(e) {
    let { className: t, children: n, withBottomMargin: i, discountOffer: s, trialOffer: o } = e,
        l = o?.expires_at ?? s?.expires_at,
        u = o?.subscription_trial,
        c = e.subscriptionTier ?? u?.sku_id ?? M.pe.TIER_2;
    return (0, r.jsxs)("div", {
        className: a()(t, k.J3, { [k.Vm]: c === M.pe.TIER_0, [k.hD]: c === M.pe.TIER_2, [k.ip]: i }),
        children: [
            (0, r.jsxs)("div", {
                className: k.wm,
                children: [
                    (0, r.jsx)(p.t, { size: "md", color: "currentColor", className: k.Xo }),
                    c === M.pe.TIER_0 && (0, r.jsx)(N.A, { className: k.Vn }),
                    c === M.pe.TIER_2 && (0, r.jsx)(y.A, { className: k.Vn }),
                ],
            }),
            (0, r.jsx)(h.E, { variant: "text-md/medium", className: k.C, color: "none", children: n }),
            (0, r.jsx)(w.HU, {
                text:
                    null != s
                        ? x.intl.formatToPlainString(x.t.iiLbvu, { percent: s.discount.amount })
                        : x.intl.string(x.t.IBYG5U),
                colorOptions: c === M.pe.TIER_0 ? w.at.PREMIUM_TIER_0_WHITE_FILL : w.at.PREMIUM_TIER_2_WHITE_FILL,
            }),
            (0, r.jsx)(h.E, { variant: "eyebrow", className: k.dt, children: G(l) }),
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
        [u, c] = i.useState(!1),
        d =
            null != l
                ? x.intl.formatToPlainString(x.t.bkQ4bH, { percent: l.discount.amount })
                : (0, C.FY)({
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
    return (0, r.jsx)(h.E, {
        variant: "text-xs/bold",
        className: a()(k.A6, e.className, { [k.kU]: n === M.pe.TIER_0, [k.y_]: n === M.pe.TIER_2 }),
        color: "none",
        children: (0, C.tS)({ intervalType: t?.interval, intervalCount: t?.interval_count }),
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
                children: x.intl.string(x.t.cpT0Cq),
            }),
            (0, r.jsx)(V, {
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
function j(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        i = (0, D.V)();
    return (0, r.jsxs)("div", {
        className: k.ki,
        children: [
            (0, r.jsx)(w.HU, {
                className: k.LW,
                text: x.intl.string(x.t["8CVUrV"]),
                colorOptions: w.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
            }),
            (0, r.jsx)(E.D, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: x.intl.format(x.t["fF+cgd"], { onClick: () => (0, b.e)() }),
            }),
            (0, r.jsx)(V, {
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
function Y(e) {
    let { headingText: t, context: n, children: i, trialOffer: s, discountOffer: a } = e;
    return (0, r.jsxs)("div", {
        className: k.hQ,
        children: [
            (0, r.jsx)(E.D, { variant: "heading-xl/semibold", children: t }),
            null != n && (0, r.jsx)(h.E, { className: k._O, variant: "text-md/normal", children: n }),
            (0, r.jsx)(F, { trialOffer: s, discountOffer: a, children: i }),
        ],
    });
}
function W(e) {
    let {
            headingText: t,
            context: i,
            children: s,
            onClose: o,
            type: u,
            subscriptionTier: c,
            analyticsLocationObject: f,
            trialOffer: p,
            discountOffer: y,
        } = e,
        N = (0, d.bG)([I.A], () => I.A.useReducedMotion),
        b = (0, A.Ay)(),
        D = (0, v.Xq)(R.eM / v.XF, { useKibibytes: !0 });
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
                            (0, r.jsx)("img", { className: k.Tn, src: U, alt: x.intl.string(x.t.do7AoM) }),
                            (0, r.jsx)(E.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: x.intl.string(x.t.HEm04J),
                            }),
                            (0, r.jsx)(F, {
                                trialOffer: p,
                                discountOffer: y,
                                children: x.intl.format(x.t["2HoFKF"], {
                                    planName: (0, C.Zw)(c),
                                    onClick: () => (0, S.pX)(P.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(H, {
                        subscriptionTier: c,
                        onClose: o,
                        analyticsLocationObject: { section: P.JJy.EXPRESSION_PICKER, object: P.ZSU.BUTTON_CTA },
                        trialOffer: p,
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
                                (0, r.jsx)("img", { className: k.Tn, src: U, alt: x.intl.string(x.t.do7AoM) }),
                                (0, r.jsx)(E.D, {
                                    variant: "heading-xl/bold",
                                    color: "text-strong",
                                    children: x.intl.string(x.t.jJG1pl),
                                }),
                                (0, r.jsx)(F, {
                                    trialOffer: p,
                                    discountOffer: y,
                                    children: x.intl.format(x.t["2HoFKF"], {
                                        planName: (0, C.Zw)(c),
                                        onClick: () => (0, S.pX)(P.BVt.APPLICATION_STORE),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(H, {
                            subscriptionTier: c,
                            onClose: o,
                            analyticsLocationObject: { section: P.JJy.EXPRESSION_PICKER, object: P.ZSU.BUTTON_CTA },
                            trialOffer: p,
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
                            (0, r.jsx)(E.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: x.intl.string(x.t["1SsvhY"]),
                            }),
                            (0, r.jsx)(F, {
                                trialOffer: p,
                                discountOffer: y,
                                children: x.intl.format(x.t.md4nP5, {
                                    planName: (0, C.Zw)(c),
                                    onClick: () => (0, S.pX)(P.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(H, {
                        subscriptionTier: c,
                        onClose: o,
                        analyticsLocationObject: { section: P.JJy.EMOJI_PICKER_POPOUT, object: P.ZSU.BUTTON_CTA },
                        trialOffer: p,
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
                    w = x.intl.format(x.t.F4qoD7, {
                        planName: (0, C.Zw)(c),
                        premiumMaxSize: c === M.pe.TIER_0 ? x.intl.string(x.t["C/Rhb9"]) : D,
                        onClick: () => {
                            (0, S.pX)(P.BVt.APPLICATION_STORE), o?.();
                        },
                    });
                    break;
                case M.e.BURST_REACTION_UPSELL:
                    w = x.intl.format(x.t.poib9C, {
                        planName: (0, C.Zw)(c),
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
                (0, r.jsxs)("div", {
                    className: k.hQ,
                    children: [
                        (0, r.jsx)(E.D, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                        (0, r.jsx)(h.E, { variant: "text-md/normal", children: i }),
                        (0, r.jsx)(F, { trialOffer: p, discountOffer: y, children: w }),
                    ],
                })
            );
        case M.e.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, r.jsxs)("div", {
                className: k.hQ,
                children: [
                    (0, r.jsx)(E.D, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                    (0, r.jsx)(h.E, { variant: "text-md/normal", children: i }),
                    (0, r.jsx)(F, {
                        trialOffer: p,
                        discountOffer: y,
                        children: x.intl.format(x.t.poib9C, {
                            planName: (0, C.Zw)(c),
                            onClick: () => (0, S.pX)(P.BVt.APPLICATION_STORE),
                        }),
                    }),
                    (0, r.jsx)(V, {
                        className: k.Oy,
                        subscriptionTier: c,
                        analyticsLocationObject: f,
                        onClose: o,
                        trialOffer: p,
                        discountOffer: y,
                    }),
                ],
            });
        case M.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                l()(null != s, "You must specify children for this upsell type"),
                (0, r.jsx)(F, {
                    trialOffer: p,
                    discountOffer: y,
                    children: x.intl.format(x.t["5KMAnK"], {
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
                    (0, r.jsx)(E.D, {
                        variant: "heading-lg/extrabold",
                        color: "text-strong",
                        className: k.Ed,
                        children: x.intl.string(x.t.ZvHg3N),
                    }),
                    (0, r.jsx)("div", { className: k.yF }),
                    (0, r.jsx)(F, {
                        trialOffer: p,
                        discountOffer: y,
                        className: k.ZH,
                        subscriptionTier: c,
                        children: x.intl.format(x.t.GUHtE3, {
                            premiumMaxMessageLength: P.CS1,
                            onClick: () => {
                                (0, S.pX)(P.BVt.APPLICATION_STORE), o?.();
                            },
                        }),
                    }),
                    (0, r.jsx)(V, {
                        subscriptionTier: c,
                        analyticsLocationObject: f,
                        onClose: o,
                        trialOffer: p,
                        discountOffer: y,
                    }),
                ],
            });
        case M.e.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case M.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, r.jsx)(j, {});
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
            return (0, r.jsx)(Y, { trialOffer: p, discountOffer: y, headingText: t, context: i, children: s });
        default:
            return (
                O.A.captureMessage(`Possible mishandling of a PremiumUpsellType: ${u}`),
                (0, r.jsx)(Y, { headingText: t, context: i, children: s, trialOffer: p, discountOffer: y })
            );
    }
}
