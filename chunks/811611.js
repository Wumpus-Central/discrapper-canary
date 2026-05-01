n.d(t, { Ay: () => W, Vq: () => k, ux: () => V });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(284009),
    o = n.n(l),
    d = n(989349),
    c = n.n(d),
    _ = n(17928),
    E = n(462887),
    u = n(862482),
    A = n(403581),
    I = n(834730),
    T = n(534514),
    h = n(939249),
    S = n(789645),
    N = n(736653),
    f = n(775602),
    p = n(11029),
    m = n(976860),
    O = n(224016),
    C = n(217392),
    R = n(255438),
    g = n(927578),
    L = n(38405),
    D = n(292348),
    b = n(87719),
    M = n(234419),
    P = n(725807),
    U = n(774774),
    v = n(788868),
    y = n(652215),
    G = n(985018),
    w = n(540590),
    x = n(939383);
function V(e) {
    if (null == e) return null;
    let t = c()(e),
        n = t.diff(c()(), "h");
    if (n > 24) {
        let e = t.diff(c()(), "d");
        return G.intl.formatToPlainString(G.t.xs9VPm, { numDays: e });
    }
    if (n > 1) return G.intl.formatToPlainString(G.t.p7KX59, { numHours: n });
    let i = t.diff(c()(), "minutes");
    return G.intl.formatToPlainString(G.t["XtQ+Ap"], { numMinutes: i });
}
function B(e) {
    let { className: t, children: n, withBottomMargin: a, discountOffer: r, trialOffer: l } = e,
        o = l?.expires_at ?? r?.expires_at,
        d = l?.subscription_trial,
        c = e.subscriptionTier ?? d?.sku_id ?? v.pe.TIER_2;
    return (0, i.jsxs)("div", {
        className: s()(t, w.J3, { [w.Vm]: c === v.pe.TIER_0, [w.hD]: c === v.pe.TIER_2, [w.ip]: a }),
        children: [
            (0, i.jsxs)("div", {
                className: w.wm,
                children: [
                    (0, i.jsx)(A.t, { size: "md", color: "currentColor", className: w.Xo }),
                    c === v.pe.TIER_0 && (0, i.jsx)(C.A, { className: w.Vn }),
                    c === v.pe.TIER_2 && (0, i.jsx)(O.A, { className: w.Vn }),
                ],
            }),
            (0, i.jsx)(I.E, { variant: "text-md/medium", className: w.C, color: "none", children: n }),
            (0, i.jsx)(U.HU, {
                text:
                    null != r
                        ? G.intl.formatToPlainString(G.t.iiLbvu, { percent: r.discount.amount })
                        : G.intl.string(G.t.IBYG5U),
                colorOptions: c === v.pe.TIER_0 ? U.at.PREMIUM_TIER_0_WHITE_FILL : U.at.PREMIUM_TIER_2_WHITE_FILL,
            }),
            (0, i.jsx)(I.E, { variant: "eyebrow", className: w.dt, children: V(o) }),
        ],
    });
}
function F(e) {
    let {
            className: t,
            onClose: n,
            subscriptionTier: r,
            analyticsLocationObject: s,
            trialOffer: l,
            discountOffer: o,
        } = e,
        [d, c] = a.useState(!1),
        _ =
            null != o
                ? G.intl.formatToPlainString(G.t.bkQ4bH, { percent: o.discount.amount })
                : (0, g.FY)({
                      intervalType: l?.subscription_trial?.interval,
                      intervalCount: l?.subscription_trial?.interval_count,
                  });
    return (0, i.jsx)(P.A, {
        className: t,
        subscriptionTier: r,
        submitting: d,
        premiumModalAnalyticsLocation: s,
        size: u.$n.Sizes.MEDIUM,
        color: u.$n.Colors.GREEN,
        onClick: () => {
            c(!0);
        },
        onSubscribeModalClose: (e) => {
            c(!1), e && n?.();
        },
        textOptions: { textOverride: _ },
    });
}
function k(e) {
    let t = (0, M.V)()?.subscription_trial,
        n = t?.sku_id ?? v.pe.TIER_2;
    return (0, i.jsx)(I.E, {
        variant: "text-xs/bold",
        className: s()(w.A6, e.className, { [w.kU]: n === v.pe.TIER_0, [w.y_]: n === v.pe.TIER_2 }),
        color: "none",
        children: (0, g.tS)({ intervalType: t?.interval, intervalCount: t?.interval_count }),
    });
}
function H(e) {
    let { subscriptionTier: t, onClose: n, analyticsLocationObject: a, trialOffer: r, discountOffer: s } = e;
    return (0, i.jsxs)("div", {
        className: w.qr,
        children: [
            (0, i.jsx)(u.$n, {
                "data-migration-pending": !0,
                onClick: n,
                size: u.$n.Sizes.SMALL,
                look: u.pR.BLANK,
                className: w.x7,
                children: G.intl.string(G.t.cpT0Cq),
            }),
            (0, i.jsx)(F, {
                className: w.xF,
                subscriptionTier: t,
                analyticsLocationObject: a,
                onClose: n,
                discountOffer: s,
                trialOffer: r,
            }),
        ],
    });
}
function j(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        a = (0, M.V)();
    return (0, i.jsxs)("div", {
        className: w.ki,
        children: [
            (0, i.jsx)(U.HU, {
                className: w.LW,
                text: G.intl.string(G.t["8CVUrV"]),
                colorOptions: U.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
            }),
            (0, i.jsx)(T.D, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: G.intl.format(G.t["fF+cgd"], { onClick: () => (0, b.e)() }),
            }),
            (0, i.jsx)(F, {
                trialOffer: a,
                className: w.as,
                subscriptionTier: v.pe.TIER_2,
                analyticsLocationObject: n,
                onClose: t,
            }),
            (0, i.jsx)(I.E, { variant: "eyebrow", className: w.eg, children: V(a?.expires_at) }),
        ],
    });
}
function Y(e) {
    let { headingText: t, context: n, children: a, trialOffer: r, discountOffer: s } = e;
    return (0, i.jsxs)("div", {
        className: w.hQ,
        children: [
            (0, i.jsx)(T.D, { variant: "heading-xl/semibold", children: t }),
            null != n && (0, i.jsx)(I.E, { className: w._O, variant: "text-md/normal", children: n }),
            (0, i.jsx)(B, { trialOffer: r, discountOffer: s, children: a }),
        ],
    });
}
function W(e) {
    let {
            headingText: t,
            context: a,
            children: r,
            onClose: l,
            type: d,
            subscriptionTier: c,
            analyticsLocationObject: u,
            trialOffer: A,
            discountOffer: O,
        } = e,
        C = (0, _.bG)([f.A], () => f.A.useReducedMotion),
        b = (0, N.Ay)(),
        M = (0, R.Xq)(D.eM / R.XF, { useKibibytes: !0 });
    switch (d) {
        case v.e.EMPTY_STICKER_PICKER_UPSELL:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(h.D, {
                        className: w.kz,
                        onClick: l,
                        children: (0, i.jsx)(S.P, { size: "md", color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: w.hQ,
                        children: [
                            (0, i.jsx)("img", { className: w.Tn, src: x, alt: G.intl.string(G.t.do7AoM) }),
                            (0, i.jsx)(T.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: G.intl.string(G.t.HEm04J),
                            }),
                            (0, i.jsx)(B, {
                                trialOffer: A,
                                discountOffer: O,
                                children: G.intl.format(G.t["2HoFKF"], {
                                    planName: (0, g.Zw)(c),
                                    onClick: () => (0, m.pX)(y.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(H, {
                        subscriptionTier: c,
                        onClose: l,
                        analyticsLocationObject: { section: y.JJy.EXPRESSION_PICKER, object: y.ZSU.BUTTON_CTA },
                        trialOffer: A,
                        discountOffer: O,
                    }),
                ],
            });
        case v.e.STICKER_PICKER_UPSELL:
            return (
                o()(null != r, "You must specify children for this upsell type"),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: w.hQ,
                            children: [
                                (0, i.jsx)("img", { className: w.Tn, src: x, alt: G.intl.string(G.t.do7AoM) }),
                                (0, i.jsx)(T.D, {
                                    variant: "heading-xl/bold",
                                    color: "text-strong",
                                    children: G.intl.string(G.t.jJG1pl),
                                }),
                                (0, i.jsx)(B, {
                                    trialOffer: A,
                                    discountOffer: O,
                                    children: G.intl.format(G.t["2HoFKF"], {
                                        planName: (0, g.Zw)(c),
                                        onClick: () => (0, m.pX)(y.BVt.APPLICATION_STORE),
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(H, {
                            subscriptionTier: c,
                            onClose: l,
                            analyticsLocationObject: { section: y.JJy.EXPRESSION_PICKER, object: y.ZSU.BUTTON_CTA },
                            trialOffer: A,
                            discountOffer: O,
                        }),
                    ],
                })
            );
        case v.e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            o()(null != r, "You must specify children for this upsell type");
            let P = (0, E.q)(b) ? n(454333) : n(674463);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)("div", {
                        className: w.hQ,
                        children: [
                            (0, i.jsx)("img", { alt: "", className: w.Tn, src: P }),
                            (0, i.jsx)(T.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: G.intl.string(G.t["1SsvhY"]),
                            }),
                            (0, i.jsx)(B, {
                                trialOffer: A,
                                discountOffer: O,
                                children: G.intl.format(G.t.md4nP5, {
                                    planName: (0, g.Zw)(c),
                                    onClick: () => (0, m.pX)(y.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(H, {
                        subscriptionTier: c,
                        onClose: l,
                        analyticsLocationObject: { section: y.JJy.EMOJI_PICKER_POPOUT, object: y.ZSU.BUTTON_CTA },
                        trialOffer: A,
                        discountOffer: O,
                    }),
                ],
            });
        case v.e.UPLOAD_ERROR_UPSELL:
        case v.e.BURST_REACTION_UPSELL:
        case v.e.MESSAGE_LENGTH_UPSELL:
            let U;
            switch (d) {
                case v.e.UPLOAD_ERROR_UPSELL:
                    U = G.intl.format(G.t.F4qoD7, {
                        planName: (0, g.Zw)(c),
                        premiumMaxSize: c === v.pe.TIER_0 ? G.intl.string(G.t["C/Rhb9"]) : M,
                        onClick: () => {
                            (0, m.pX)(y.BVt.APPLICATION_STORE), l?.();
                        },
                    });
                    break;
                case v.e.BURST_REACTION_UPSELL:
                    U = G.intl.format(G.t.poib9C, {
                        planName: (0, g.Zw)(c),
                        onClick: () => {
                            (0, m.pX)(y.BVt.APPLICATION_STORE), l?.();
                        },
                    });
                    break;
                case v.e.MESSAGE_LENGTH_UPSELL:
                    U = G.intl.format(G.t.GUHtE3, {
                        premiumMaxMessageLength: y.CS1,
                        onClick: () => {
                            (0, m.pX)(y.BVt.APPLICATION_STORE), l?.();
                        },
                    });
            }
            return (
                o()(null != U, "There must be some upsell context"),
                (0, i.jsxs)("div", {
                    className: w.hQ,
                    children: [
                        (0, i.jsx)(T.D, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                        (0, i.jsx)(I.E, { variant: "text-md/normal", children: a }),
                        (0, i.jsx)(B, { trialOffer: A, discountOffer: O, children: U }),
                    ],
                })
            );
        case v.e.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, i.jsxs)("div", {
                className: w.hQ,
                children: [
                    (0, i.jsx)(T.D, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                    (0, i.jsx)(I.E, { variant: "text-md/normal", children: a }),
                    (0, i.jsx)(B, {
                        trialOffer: A,
                        discountOffer: O,
                        children: G.intl.format(G.t.poib9C, {
                            planName: (0, g.Zw)(c),
                            onClick: () => (0, m.pX)(y.BVt.APPLICATION_STORE),
                        }),
                    }),
                    (0, i.jsx)(F, {
                        className: w.Oy,
                        subscriptionTier: c,
                        analyticsLocationObject: u,
                        onClose: l,
                        trialOffer: A,
                        discountOffer: O,
                    }),
                ],
            });
        case v.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                o()(null != r, "You must specify children for this upsell type"),
                (0, i.jsx)(B, {
                    trialOffer: A,
                    discountOffer: O,
                    children: G.intl.format(G.t["5KMAnK"], {
                        onClick: () => {
                            (0, m.pX)(y.BVt.APPLICATION_STORE), (0, p.D)();
                        },
                    }),
                })
            );
        case v.e.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, i.jsxs)("div", {
                className: s()(w.iW, { [w.WP]: !C }),
                children: [
                    (0, i.jsx)(I.E, { variant: "text-lg/bold", color: "text-feedback-critical", children: a }),
                    (0, i.jsx)(T.D, {
                        variant: "heading-lg/extrabold",
                        color: "text-strong",
                        className: w.Ed,
                        children: G.intl.string(G.t.ZvHg3N),
                    }),
                    (0, i.jsx)("div", { className: w.yF }),
                    (0, i.jsx)(B, {
                        trialOffer: A,
                        discountOffer: O,
                        className: w.ZH,
                        subscriptionTier: c,
                        children: G.intl.format(G.t.GUHtE3, {
                            premiumMaxMessageLength: y.CS1,
                            onClick: () => {
                                (0, m.pX)(y.BVt.APPLICATION_STORE), l?.();
                            },
                        }),
                    }),
                    (0, i.jsx)(F, {
                        subscriptionTier: c,
                        analyticsLocationObject: u,
                        onClose: l,
                        trialOffer: A,
                        discountOffer: O,
                    }),
                ],
            });
        case v.e.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case v.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, i.jsx)(j, {});
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
            return (0, i.jsx)(Y, { trialOffer: A, discountOffer: O, headingText: t, context: a, children: r });
        default:
            return (
                L.A.captureMessage(`Possible mishandling of a PremiumUpsellType: ${d}`),
                (0, i.jsx)(Y, { headingText: t, context: a, children: r, trialOffer: A, discountOffer: O })
            );
    }
}
