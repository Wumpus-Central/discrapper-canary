"use strict";
n.d(t, { Ay: () => B, Vq: () => U, ux: () => x });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(989349),
    c = n.n(u),
    d = n(311907),
    _ = n(582754),
    f = n(421380),
    p = n(397927),
    h = n(736653),
    m = n(775602),
    E = n(11029),
    g = n(976860),
    A = n(224016),
    I = n(217392),
    T = n(255438),
    S = n(927578),
    y = n(728458),
    v = n(292348),
    N = n(87719),
    C = n(234419),
    R = n(725807),
    O = n(774774),
    b = n(788868),
    D = n(652215),
    L = n(985018),
    w = n(146878),
    M = n(939383);
function x(e) {
    if (null == e) return null;
    let t = c()(e),
        n = t.diff(c()(), "h");
    if (n > 24) {
        let e = t.diff(c()(), "d");
        return L.intl.formatToPlainString(L.t.xs9VPm, { numDays: e });
    }
    if (n > 1) return L.intl.formatToPlainString(L.t.p7KX59, { numHours: n });
    let r = t.diff(c()(), "minutes");
    return L.intl.formatToPlainString(L.t["XtQ+Ap"], { numMinutes: r });
}
function P(e) {
    let { className: t, children: n, withBottomMargin: i, discountOffer: s, trialOffer: o } = e,
        l = o?.expires_at ?? s?.expires_at,
        u = o?.subscription_trial,
        c = e.subscriptionTier ?? u?.sku_id ?? b.pe.TIER_2;
    return (0, r.jsxs)("div", {
        className: a()(t, w.J3, { [w.Vm]: c === b.pe.TIER_0, [w.hD]: c === b.pe.TIER_2, [w.ip]: i }),
        children: [
            (0, r.jsxs)("div", {
                className: w.wm,
                children: [
                    (0, r.jsx)(p.tvc, { size: "md", color: "currentColor", className: w.Xo }),
                    c === b.pe.TIER_0 && (0, r.jsx)(I.A, { className: w.Vn }),
                    c === b.pe.TIER_2 && (0, r.jsx)(A.A, { className: w.Vn }),
                ],
            }),
            (0, r.jsx)(p.Text, { variant: "text-md/medium", className: w.C, color: "none", children: n }),
            (0, r.jsx)(O.HU, {
                text:
                    null != s
                        ? L.intl.formatToPlainString(L.t.iiLbvu, { percent: s.discount.amount })
                        : L.intl.string(L.t.IBYG5U),
                colorOptions: c === b.pe.TIER_0 ? O.at.PREMIUM_TIER_0_WHITE_FILL : O.at.PREMIUM_TIER_2_WHITE_FILL,
            }),
            (0, r.jsx)(p.Text, { variant: "eyebrow", className: w.dt, children: x(l) }),
        ],
    });
}
function k(e) {
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
                ? L.intl.formatToPlainString(L.t.bkQ4bH, { percent: l.discount.amount })
                : (0, S.FY)({
                      intervalType: o?.subscription_trial?.interval,
                      intervalCount: o?.subscription_trial?.interval_count,
                  });
    return (0, r.jsx)(R.A, {
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
function U(e) {
    let t = (0, C.V)()?.subscription_trial,
        n = t?.sku_id ?? b.pe.TIER_2;
    return (0, r.jsx)(p.Text, {
        variant: "text-xs/bold",
        className: a()(w.A6, e.className, { [w.kU]: n === b.pe.TIER_0, [w.y_]: n === b.pe.TIER_2 }),
        color: "none",
        children: (0, S.tS)({ intervalType: t?.interval, intervalCount: t?.interval_count }),
    });
}
function G(e) {
    let { subscriptionTier: t, onClose: n, analyticsLocationObject: i, trialOffer: s, discountOffer: a } = e;
    return (0, r.jsxs)("div", {
        className: w.qr,
        children: [
            (0, r.jsx)(f.$n, {
                "data-migration-pending": !0,
                onClick: n,
                size: f.$n.Sizes.SMALL,
                look: f.pR.BLANK,
                className: w.x7,
                children: L.intl.string(L.t.cpT0Cq),
            }),
            (0, r.jsx)(k, {
                className: w.xF,
                subscriptionTier: t,
                analyticsLocationObject: i,
                onClose: n,
                discountOffer: a,
                trialOffer: s,
            }),
        ],
    });
}
function F(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        i = (0, C.V)();
    return (0, r.jsxs)("div", {
        className: w.ki,
        children: [
            (0, r.jsx)(O.HU, {
                className: w.LW,
                text: L.intl.string(L.t["8CVUrV"]),
                colorOptions: O.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
            }),
            (0, r.jsx)(p.Heading, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: L.intl.format(L.t["fF+cgd"], { onClick: () => (0, N.e)() }),
            }),
            (0, r.jsx)(k, {
                trialOffer: i,
                className: w.as,
                subscriptionTier: b.pe.TIER_2,
                analyticsLocationObject: n,
                onClose: t,
            }),
            (0, r.jsx)(p.Text, { variant: "eyebrow", className: w.eg, children: x(i?.expires_at) }),
        ],
    });
}
function V(e) {
    let { headingText: t, context: n, children: i, trialOffer: s, discountOffer: a } = e;
    return (0, r.jsxs)("div", {
        className: w.hQ,
        children: [
            (0, r.jsx)(p.Heading, { variant: "heading-xl/semibold", children: t }),
            null != n && (0, r.jsx)(p.Text, { className: w._O, variant: "text-md/normal", children: n }),
            (0, r.jsx)(P, { trialOffer: s, discountOffer: a, children: i }),
        ],
    });
}
function B(e) {
    let {
            headingText: t,
            context: i,
            children: s,
            onClose: o,
            type: u,
            subscriptionTier: c,
            analyticsLocationObject: f,
            trialOffer: A,
            discountOffer: I,
        } = e,
        N = (0, d.bG)([m.A], () => m.A.useReducedMotion),
        C = (0, h.Ay)(),
        R = (0, T.Xq)(v.eM / T.XF, { useKibibytes: !0 });
    switch (u) {
        case b.e.EMPTY_STICKER_PICKER_UPSELL:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(p.DUT, {
                        className: w.kz,
                        onClick: o,
                        children: (0, r.jsx)(p.PGe, { size: "md", color: "currentColor" }),
                    }),
                    (0, r.jsxs)("div", {
                        className: w.hQ,
                        children: [
                            (0, r.jsx)("img", { className: w.Tn, src: M, alt: L.intl.string(L.t.do7AoM) }),
                            (0, r.jsx)(p.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: L.intl.string(L.t.HEm04J),
                            }),
                            (0, r.jsx)(P, {
                                trialOffer: A,
                                discountOffer: I,
                                children: L.intl.format(L.t["2HoFKF"], {
                                    planName: (0, S.Zw)(c),
                                    onClick: () => (0, g.pX)(D.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(G, {
                        subscriptionTier: c,
                        onClose: o,
                        analyticsLocationObject: { section: D.JJy.EXPRESSION_PICKER, object: D.ZSU.BUTTON_CTA },
                        trialOffer: A,
                        discountOffer: I,
                    }),
                ],
            });
        case b.e.STICKER_PICKER_UPSELL:
            return (
                l()(null != s, "You must specify children for this upsell type"),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: w.hQ,
                            children: [
                                (0, r.jsx)("img", { className: w.Tn, src: M, alt: L.intl.string(L.t.do7AoM) }),
                                (0, r.jsx)(p.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "text-strong",
                                    children: L.intl.string(L.t.jJG1pl),
                                }),
                                (0, r.jsx)(P, {
                                    trialOffer: A,
                                    discountOffer: I,
                                    children: L.intl.format(L.t["2HoFKF"], {
                                        planName: (0, S.Zw)(c),
                                        onClick: () => (0, g.pX)(D.BVt.APPLICATION_STORE),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(G, {
                            subscriptionTier: c,
                            onClose: o,
                            analyticsLocationObject: { section: D.JJy.EXPRESSION_PICKER, object: D.ZSU.BUTTON_CTA },
                            trialOffer: A,
                            discountOffer: I,
                        }),
                    ],
                })
            );
        case b.e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            l()(null != s, "You must specify children for this upsell type");
            let O = (0, _.qB)(C) ? n(454333) : n(674463);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: w.hQ,
                        children: [
                            (0, r.jsx)("img", { alt: "", className: w.Tn, src: O }),
                            (0, r.jsx)(p.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: L.intl.string(L.t["1SsvhY"]),
                            }),
                            (0, r.jsx)(P, {
                                trialOffer: A,
                                discountOffer: I,
                                children: L.intl.format(L.t.md4nP5, {
                                    planName: (0, S.Zw)(c),
                                    onClick: () => (0, g.pX)(D.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(G, {
                        subscriptionTier: c,
                        onClose: o,
                        analyticsLocationObject: { section: D.JJy.EMOJI_PICKER_POPOUT, object: D.ZSU.BUTTON_CTA },
                        trialOffer: A,
                        discountOffer: I,
                    }),
                ],
            });
        case b.e.UPLOAD_ERROR_UPSELL:
        case b.e.BURST_REACTION_UPSELL:
        case b.e.MESSAGE_LENGTH_UPSELL:
            let x;
            switch (u) {
                case b.e.UPLOAD_ERROR_UPSELL:
                    x = L.intl.format(L.t.F4qoD7, {
                        planName: (0, S.Zw)(c),
                        premiumMaxSize: c === b.pe.TIER_0 ? L.intl.string(L.t["C/Rhb9"]) : R,
                        onClick: () => {
                            (0, g.pX)(D.BVt.APPLICATION_STORE), o?.();
                        },
                    });
                    break;
                case b.e.BURST_REACTION_UPSELL:
                    x = L.intl.format(L.t.poib9C, {
                        planName: (0, S.Zw)(c),
                        onClick: () => {
                            (0, g.pX)(D.BVt.APPLICATION_STORE), o?.();
                        },
                    });
                    break;
                case b.e.MESSAGE_LENGTH_UPSELL:
                    x = L.intl.format(L.t.GUHtE3, {
                        premiumMaxMessageLength: D.CS1,
                        onClick: () => {
                            (0, g.pX)(D.BVt.APPLICATION_STORE), o?.();
                        },
                    });
            }
            return (
                l()(null != x, "There must be some upsell context"),
                (0, r.jsxs)("div", {
                    className: w.hQ,
                    children: [
                        (0, r.jsx)(p.Heading, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                        (0, r.jsx)(p.Text, { variant: "text-md/normal", children: i }),
                        (0, r.jsx)(P, { trialOffer: A, discountOffer: I, children: x }),
                    ],
                })
            );
        case b.e.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, r.jsxs)("div", {
                className: w.hQ,
                children: [
                    (0, r.jsx)(p.Heading, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                    (0, r.jsx)(p.Text, { variant: "text-md/normal", children: i }),
                    (0, r.jsx)(P, {
                        trialOffer: A,
                        discountOffer: I,
                        children: L.intl.format(L.t.poib9C, {
                            planName: (0, S.Zw)(c),
                            onClick: () => (0, g.pX)(D.BVt.APPLICATION_STORE),
                        }),
                    }),
                    (0, r.jsx)(k, {
                        className: w.Oy,
                        subscriptionTier: c,
                        analyticsLocationObject: f,
                        onClose: o,
                        trialOffer: A,
                        discountOffer: I,
                    }),
                ],
            });
        case b.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                l()(null != s, "You must specify children for this upsell type"),
                (0, r.jsx)(P, {
                    trialOffer: A,
                    discountOffer: I,
                    children: L.intl.format(L.t["5KMAnK"], {
                        onClick: () => {
                            (0, g.pX)(D.BVt.APPLICATION_STORE), (0, E.D)();
                        },
                    }),
                })
            );
        case b.e.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, r.jsxs)("div", {
                className: a()(w.iW, { [w.WP]: !N }),
                children: [
                    (0, r.jsx)(p.Text, { variant: "text-lg/bold", color: "text-feedback-critical", children: i }),
                    (0, r.jsx)(p.Heading, {
                        variant: "heading-lg/extrabold",
                        color: "text-strong",
                        className: w.Ed,
                        children: L.intl.string(L.t.ZvHg3N),
                    }),
                    (0, r.jsx)("div", { className: w.yF }),
                    (0, r.jsx)(P, {
                        trialOffer: A,
                        discountOffer: I,
                        className: w.ZH,
                        subscriptionTier: c,
                        children: L.intl.format(L.t.GUHtE3, {
                            premiumMaxMessageLength: D.CS1,
                            onClick: () => {
                                (0, g.pX)(D.BVt.APPLICATION_STORE), o?.();
                            },
                        }),
                    }),
                    (0, r.jsx)(k, {
                        subscriptionTier: c,
                        analyticsLocationObject: f,
                        onClose: o,
                        trialOffer: A,
                        discountOffer: I,
                    }),
                ],
            });
        case b.e.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case b.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, r.jsx)(F, {});
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
            return (0, r.jsx)(V, { trialOffer: A, discountOffer: I, headingText: t, context: i, children: s });
        default:
            return (
                y.A.captureMessage(`Possible mishandling of a PremiumUpsellType: ${u}`),
                (0, r.jsx)(V, { headingText: t, context: i, children: s, trialOffer: A, discountOffer: I })
            );
    }
}
