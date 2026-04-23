n.d(t, { Ay: () => j, Vq: () => k, ux: () => F });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(284009),
    l = n.n(_),
    o = n(989349),
    E = n.n(o),
    d = n(17928),
    c = n(462887),
    u = n(862482),
    I = n(403581),
    A = n(834730),
    T = n(534514),
    S = n(939249),
    N = n(789645),
    O = n(736653),
    R = n(775602),
    f = n(11029),
    C = n(976860),
    p = n(224016),
    m = n(217392),
    L = n(255438),
    D = n(927578),
    h = n(38405),
    g = n(292348),
    b = n(87719),
    U = n(234419),
    P = n(725807),
    M = n(774774),
    y = n(788868),
    G = n(652215),
    v = n(985018),
    B = n(540590),
    w = n(939383);
function F(e) {
    if (null == e) return null;
    let t = E()(e),
        n = t.diff(E()(), "h");
    if (n > 24) {
        let e = t.diff(E()(), "d");
        return v.intl.formatToPlainString(v.t.xs9VPm, { numDays: e });
    }
    if (n > 1) return v.intl.formatToPlainString(v.t.p7KX59, { numHours: n });
    let i = t.diff(E()(), "minutes");
    return v.intl.formatToPlainString(v.t["XtQ+Ap"], { numMinutes: i });
}
function V(e) {
    let { className: t, children: n, withBottomMargin: r, discountOffer: a, trialOffer: _ } = e,
        l = _?.expires_at ?? a?.expires_at,
        o = _?.subscription_trial,
        E = e.subscriptionTier ?? o?.sku_id ?? y.pe.TIER_2;
    return (0, i.jsxs)("div", {
        className: s()(t, B.J3, { [B.Vm]: E === y.pe.TIER_0, [B.hD]: E === y.pe.TIER_2, [B.ip]: r }),
        children: [
            (0, i.jsxs)("div", {
                className: B.wm,
                children: [
                    (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: B.Xo }),
                    E === y.pe.TIER_0 && (0, i.jsx)(m.A, { className: B.Vn }),
                    E === y.pe.TIER_2 && (0, i.jsx)(p.A, { className: B.Vn }),
                ],
            }),
            (0, i.jsx)(A.E, { variant: "text-md/medium", className: B.C, color: "none", children: n }),
            (0, i.jsx)(M.HU, {
                text:
                    null != a
                        ? v.intl.formatToPlainString(v.t.iiLbvu, { percent: a.discount.amount })
                        : v.intl.string(v.t.IBYG5U),
                colorOptions: E === y.pe.TIER_0 ? M.at.PREMIUM_TIER_0_WHITE_FILL : M.at.PREMIUM_TIER_2_WHITE_FILL,
            }),
            (0, i.jsx)(A.E, { variant: "eyebrow", className: B.dt, children: F(l) }),
        ],
    });
}
function H(e) {
    let {
            className: t,
            onClose: n,
            subscriptionTier: a,
            analyticsLocationObject: s,
            trialOffer: _,
            discountOffer: l,
        } = e,
        [o, E] = r.useState(!1),
        d =
            null != l
                ? v.intl.formatToPlainString(v.t.bkQ4bH, { percent: l.discount.amount })
                : (0, D.FY)({
                      intervalType: _?.subscription_trial?.interval,
                      intervalCount: _?.subscription_trial?.interval_count,
                  });
    return (0, i.jsx)(P.A, {
        className: t,
        subscriptionTier: a,
        submitting: o,
        premiumModalAnalyticsLocation: s,
        size: u.$n.Sizes.MEDIUM,
        color: u.$n.Colors.GREEN,
        onClick: () => {
            E(!0);
        },
        onSubscribeModalClose: (e) => {
            E(!1), e && n?.();
        },
        textOptions: { textOverride: d },
    });
}
function k(e) {
    let t = (0, U.V)()?.subscription_trial,
        n = t?.sku_id ?? y.pe.TIER_2;
    return (0, i.jsx)(A.E, {
        variant: "text-xs/bold",
        className: s()(B.A6, e.className, { [B.kU]: n === y.pe.TIER_0, [B.y_]: n === y.pe.TIER_2 }),
        color: "none",
        children: (0, D.tS)({ intervalType: t?.interval, intervalCount: t?.interval_count }),
    });
}
function x(e) {
    let { subscriptionTier: t, onClose: n, analyticsLocationObject: r, trialOffer: a, discountOffer: s } = e;
    return (0, i.jsxs)("div", {
        className: B.qr,
        children: [
            (0, i.jsx)(u.$n, {
                "data-migration-pending": !0,
                onClick: n,
                size: u.$n.Sizes.SMALL,
                look: u.pR.BLANK,
                className: B.x7,
                children: v.intl.string(v.t.cpT0Cq),
            }),
            (0, i.jsx)(H, {
                className: B.xF,
                subscriptionTier: t,
                analyticsLocationObject: r,
                onClose: n,
                discountOffer: s,
                trialOffer: a,
            }),
        ],
    });
}
function W(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        r = (0, U.V)();
    return (0, i.jsxs)("div", {
        className: B.ki,
        children: [
            (0, i.jsx)(M.HU, {
                className: B.LW,
                text: v.intl.string(v.t["8CVUrV"]),
                colorOptions: M.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
            }),
            (0, i.jsx)(T.D, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: v.intl.format(v.t["fF+cgd"], { onClick: () => (0, b.e)() }),
            }),
            (0, i.jsx)(H, {
                trialOffer: r,
                className: B.as,
                subscriptionTier: y.pe.TIER_2,
                analyticsLocationObject: n,
                onClose: t,
            }),
            (0, i.jsx)(A.E, { variant: "eyebrow", className: B.eg, children: F(r?.expires_at) }),
        ],
    });
}
function Y(e) {
    let { headingText: t, context: n, children: r, trialOffer: a, discountOffer: s } = e;
    return (0, i.jsxs)("div", {
        className: B.hQ,
        children: [
            (0, i.jsx)(T.D, { variant: "heading-xl/semibold", children: t }),
            null != n && (0, i.jsx)(A.E, { className: B._O, variant: "text-md/normal", children: n }),
            (0, i.jsx)(V, { trialOffer: a, discountOffer: s, children: r }),
        ],
    });
}
function j(e) {
    let {
            headingText: t,
            context: r,
            children: a,
            onClose: _,
            type: o,
            subscriptionTier: E,
            analyticsLocationObject: u,
            trialOffer: I,
            discountOffer: p,
        } = e,
        m = (0, d.bG)([R.A], () => R.A.useReducedMotion),
        b = (0, O.Ay)(),
        U = (0, L.Xq)(g.eM / L.XF, { useKibibytes: !0 });
    switch (o) {
        case y.e.EMPTY_STICKER_PICKER_UPSELL:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(S.D, {
                        className: B.kz,
                        onClick: _,
                        children: (0, i.jsx)(N.P, { size: "md", color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: B.hQ,
                        children: [
                            (0, i.jsx)("img", { className: B.Tn, src: w, alt: v.intl.string(v.t.do7AoM) }),
                            (0, i.jsx)(T.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: v.intl.string(v.t.HEm04J),
                            }),
                            (0, i.jsx)(V, {
                                trialOffer: I,
                                discountOffer: p,
                                children: v.intl.format(v.t["2HoFKF"], {
                                    planName: (0, D.Zw)(E),
                                    onClick: () => (0, C.pX)(G.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(x, {
                        subscriptionTier: E,
                        onClose: _,
                        analyticsLocationObject: { section: G.JJy.EXPRESSION_PICKER, object: G.ZSU.BUTTON_CTA },
                        trialOffer: I,
                        discountOffer: p,
                    }),
                ],
            });
        case y.e.STICKER_PICKER_UPSELL:
            return (
                l()(null != a, "You must specify children for this upsell type"),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: B.hQ,
                            children: [
                                (0, i.jsx)("img", { className: B.Tn, src: w, alt: v.intl.string(v.t.do7AoM) }),
                                (0, i.jsx)(T.D, {
                                    variant: "heading-xl/bold",
                                    color: "text-strong",
                                    children: v.intl.string(v.t.jJG1pl),
                                }),
                                (0, i.jsx)(V, {
                                    trialOffer: I,
                                    discountOffer: p,
                                    children: v.intl.format(v.t["2HoFKF"], {
                                        planName: (0, D.Zw)(E),
                                        onClick: () => (0, C.pX)(G.BVt.APPLICATION_STORE),
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(x, {
                            subscriptionTier: E,
                            onClose: _,
                            analyticsLocationObject: { section: G.JJy.EXPRESSION_PICKER, object: G.ZSU.BUTTON_CTA },
                            trialOffer: I,
                            discountOffer: p,
                        }),
                    ],
                })
            );
        case y.e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            l()(null != a, "You must specify children for this upsell type");
            let P = (0, c.q)(b) ? n(454333) : n(674463);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)("div", {
                        className: B.hQ,
                        children: [
                            (0, i.jsx)("img", { alt: "", className: B.Tn, src: P }),
                            (0, i.jsx)(T.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: v.intl.string(v.t["1SsvhY"]),
                            }),
                            (0, i.jsx)(V, {
                                trialOffer: I,
                                discountOffer: p,
                                children: v.intl.format(v.t.md4nP5, {
                                    planName: (0, D.Zw)(E),
                                    onClick: () => (0, C.pX)(G.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(x, {
                        subscriptionTier: E,
                        onClose: _,
                        analyticsLocationObject: { section: G.JJy.EMOJI_PICKER_POPOUT, object: G.ZSU.BUTTON_CTA },
                        trialOffer: I,
                        discountOffer: p,
                    }),
                ],
            });
        case y.e.UPLOAD_ERROR_UPSELL:
        case y.e.BURST_REACTION_UPSELL:
        case y.e.MESSAGE_LENGTH_UPSELL:
            let M;
            switch (o) {
                case y.e.UPLOAD_ERROR_UPSELL:
                    M = v.intl.format(v.t.F4qoD7, {
                        planName: (0, D.Zw)(E),
                        premiumMaxSize: E === y.pe.TIER_0 ? v.intl.string(v.t["C/Rhb9"]) : U,
                        onClick: () => {
                            (0, C.pX)(G.BVt.APPLICATION_STORE), _?.();
                        },
                    });
                    break;
                case y.e.BURST_REACTION_UPSELL:
                    M = v.intl.format(v.t.poib9C, {
                        planName: (0, D.Zw)(E),
                        onClick: () => {
                            (0, C.pX)(G.BVt.APPLICATION_STORE), _?.();
                        },
                    });
                    break;
                case y.e.MESSAGE_LENGTH_UPSELL:
                    M = v.intl.format(v.t.GUHtE3, {
                        premiumMaxMessageLength: G.CS1,
                        onClick: () => {
                            (0, C.pX)(G.BVt.APPLICATION_STORE), _?.();
                        },
                    });
            }
            return (
                l()(null != M, "There must be some upsell context"),
                (0, i.jsxs)("div", {
                    className: B.hQ,
                    children: [
                        (0, i.jsx)(T.D, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                        (0, i.jsx)(A.E, { variant: "text-md/normal", children: r }),
                        (0, i.jsx)(V, { trialOffer: I, discountOffer: p, children: M }),
                    ],
                })
            );
        case y.e.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, i.jsxs)("div", {
                className: B.hQ,
                children: [
                    (0, i.jsx)(T.D, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                    (0, i.jsx)(A.E, { variant: "text-md/normal", children: r }),
                    (0, i.jsx)(V, {
                        trialOffer: I,
                        discountOffer: p,
                        children: v.intl.format(v.t.poib9C, {
                            planName: (0, D.Zw)(E),
                            onClick: () => (0, C.pX)(G.BVt.APPLICATION_STORE),
                        }),
                    }),
                    (0, i.jsx)(H, {
                        className: B.Oy,
                        subscriptionTier: E,
                        analyticsLocationObject: u,
                        onClose: _,
                        trialOffer: I,
                        discountOffer: p,
                    }),
                ],
            });
        case y.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                l()(null != a, "You must specify children for this upsell type"),
                (0, i.jsx)(V, {
                    trialOffer: I,
                    discountOffer: p,
                    children: v.intl.format(v.t["5KMAnK"], {
                        onClick: () => {
                            (0, C.pX)(G.BVt.APPLICATION_STORE), (0, f.D)();
                        },
                    }),
                })
            );
        case y.e.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, i.jsxs)("div", {
                className: s()(B.iW, { [B.WP]: !m }),
                children: [
                    (0, i.jsx)(A.E, { variant: "text-lg/bold", color: "text-feedback-critical", children: r }),
                    (0, i.jsx)(T.D, {
                        variant: "heading-lg/extrabold",
                        color: "text-strong",
                        className: B.Ed,
                        children: v.intl.string(v.t.ZvHg3N),
                    }),
                    (0, i.jsx)("div", { className: B.yF }),
                    (0, i.jsx)(V, {
                        trialOffer: I,
                        discountOffer: p,
                        className: B.ZH,
                        subscriptionTier: E,
                        children: v.intl.format(v.t.GUHtE3, {
                            premiumMaxMessageLength: G.CS1,
                            onClick: () => {
                                (0, C.pX)(G.BVt.APPLICATION_STORE), _?.();
                            },
                        }),
                    }),
                    (0, i.jsx)(H, {
                        subscriptionTier: E,
                        analyticsLocationObject: u,
                        onClose: _,
                        trialOffer: I,
                        discountOffer: p,
                    }),
                ],
            });
        case y.e.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case y.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, i.jsx)(W, {});
        case y.e.GUILD_CAP_MODAL_UPSELL:
        case y.e.PREMIUM_GUILD_IDENTITY_MODAL:
        case y.e.CUSTOM_PROFILE_UPSELL:
        case y.e.VIDEO_BACKGROUNDS_MODAL:
        case y.e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
        case y.e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
        case y.e.EMOJI_PICKER_EMOJI_CLICKED:
        case y.e.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
        case y.e.APP_ICON_UPSELL:
        case y.e.CLIENT_THEMES_UPSELL:
        case y.e.TRY_IT_OUT_MODAL_UPSELL:
            return (0, i.jsx)(Y, { trialOffer: I, discountOffer: p, headingText: t, context: r, children: a });
        default:
            return (
                h.A.captureMessage(`Possible mishandling of a PremiumUpsellType: ${o}`),
                (0, i.jsx)(Y, { headingText: t, context: r, children: a, trialOffer: I, discountOffer: p })
            );
    }
}
