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
    f = n(834730),
    h = n(534514),
    I = n(736653),
    p = n(775602),
    m = n(11029),
    g = n(976860),
    T = n(224016),
    S = n(217392),
    N = n(448645),
    C = n(856383),
    O = n(87719),
    R = n(77528),
    L = n(725807),
    y = n(774774),
    D = n(682901),
    b = n(652215),
    v = n(792996),
    P = n(100523);
function M(e) {
    if (null == e) return null;
    let t = c()(e),
        n = t.diff(c()(), "h");
    if (n > 24) {
        let e = t.diff(c()(), "d");
        return v.intl.formatToPlainString(v.t.xs9VPm, { numDays: e });
    }
    if (n > 1) return v.intl.formatToPlainString(v.t.p7KX59, { numHours: n });
    let i = t.diff(c()(), "minutes");
    return v.intl.formatToPlainString(v.t["XtQ+Ap"], { numMinutes: i });
}
function U(e) {
    let { className: t, children: n, withBottomMargin: r, discountOffer: a, trialOffer: l } = e,
        o = l?.expiresAt?.toISOString() ?? a?.expiresAt?.toISOString(),
        d = l?.subscriptionTrial,
        c = e.subscriptionTier ?? d?.skuId ?? D.pe.TIER_2;
    return (0, i.jsxs)("div", {
        className: s()(t, P.J3, { [P.Vm]: c === D.pe.TIER_0, [P.hD]: c === D.pe.TIER_2, [P.ip]: r }),
        children: [
            (0, i.jsxs)("div", {
                className: P.wm,
                children: [
                    (0, i.jsx)(A.NitroWheelIcon, { size: "md", color: "currentColor", className: P.Xo }),
                    c === D.pe.TIER_0 && (0, i.jsx)(S.A, { className: P.Vn }),
                    c === D.pe.TIER_2 && (0, i.jsx)(T.A, { className: P.Vn }),
                ],
            }),
            (0, i.jsx)(f.E, { variant: "body-md/medium", className: P.C, color: "none", children: n }),
            (0, i.jsx)(y.HU, {
                text:
                    null != a
                        ? v.intl.formatToPlainString(v.t.iiLbvu, { percent: a.discount.amount })
                        : v.intl.string(v.t.IBYG5U),
                colorOptions: c === D.pe.TIER_0 ? y.at.PREMIUM_TIER_0_WHITE_FILL : y.at.PREMIUM_TIER_2_WHITE_FILL,
            }),
            (0, i.jsx)(f.E, { variant: "body-sm/medium", className: P.dt, children: M(o) }),
        ],
    });
}
function w(e) {
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
                ? v.intl.formatToPlainString(v.t.bkQ4bH, { percent: o.discount.amount })
                : (0, N.FY)({
                      intervalType: l?.subscriptionTrial?.interval,
                      intervalCount: l?.subscriptionTrial?.intervalCount,
                  });
    return (0, i.jsx)(L.A, {
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
function G(e) {
    let { subscriptionTier: t, onClose: n, analyticsLocationObject: r, trialOffer: a, discountOffer: s } = e;
    return (0, i.jsxs)("div", {
        className: P.qr,
        children: [
            (0, i.jsx)(E.$n, {
                "data-migration-pending": !0,
                onClick: n,
                size: E.$n.Sizes.SMALL,
                look: E.pR.BLANK,
                className: P.x7,
                children: v.intl.string(v.t.cpT0Cq),
            }),
            (0, i.jsx)(w, {
                className: P.xF,
                subscriptionTier: t,
                analyticsLocationObject: r,
                onClose: n,
                discountOffer: s,
                trialOffer: a,
            }),
        ],
    });
}
function x(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        r = (0, R.V)();
    return (0, i.jsxs)("div", {
        className: P.ki,
        children: [
            (0, i.jsx)(y.HU, {
                className: P.LW,
                text: v.intl.string(v.t["8CVUrV"]),
                colorOptions: y.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
            }),
            (0, i.jsx)(h.D, {
                variant: "heading-sm/semibold",
                color: "text-default",
                children: v.intl.format(v.t["fF+cgd"], { onClick: () => (0, O.e)() }),
            }),
            (0, i.jsx)(w, {
                trialOffer: r,
                className: P.as,
                subscriptionTier: D.pe.TIER_2,
                analyticsLocationObject: n,
                onClose: t,
            }),
            (0, i.jsx)(f.E, { variant: "body-sm/medium", className: P.eg, children: M(r?.expiresAt?.toISOString()) }),
        ],
    });
}
function k(e) {
    let { headingText: t, context: n, children: r, trialOffer: a, discountOffer: s } = e;
    return (0, i.jsxs)("div", {
        className: P.hQ,
        children: [
            (0, i.jsx)(h.D, { variant: "heading-xl/semibold", children: t }),
            null != n && (0, i.jsx)(f.E, { className: P._O, variant: "body-md/normal", children: n }),
            (0, i.jsx)(U, { trialOffer: a, discountOffer: s, children: r }),
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
                    discountOffer: T,
                } = e,
                S = (0, u.bG)([p.Ay], () => p.Ay.useReducedMotion),
                O = (0, I.Ay)(),
                R = (0, N.EJ)(D.PremiumTypes.TIER_2, { useSpace: !1 });
            switch (d) {
                case D.e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
                    o()(null != a, "You must specify children for this upsell type");
                    let L = (0, _.q)(O) ? n(454333) : n(674463);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)("div", {
                                className: P.hQ,
                                children: [
                                    (0, i.jsx)("img", { alt: "", className: P.Tn, src: L }),
                                    (0, i.jsx)(h.D, {
                                        variant: "heading-xl/semibold",
                                        color: "text-strong",
                                        children: v.intl.string(v.t["1SsvhY"]),
                                    }),
                                    (0, i.jsx)(U, {
                                        trialOffer: A,
                                        discountOffer: T,
                                        children: v.intl.format(v.t.md4nP5, {
                                            planName: (0, N.Zw)(c),
                                            onClick: () => (0, g.pX)(b.BVt.APPLICATION_STORE),
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(G, {
                                subscriptionTier: c,
                                onClose: l,
                                analyticsLocationObject: {
                                    section: b.JJy.EMOJI_PICKER_POPOUT,
                                    object: b.ZSU.BUTTON_CTA,
                                },
                                trialOffer: A,
                                discountOffer: T,
                            }),
                        ],
                    });
                case D.e.UPLOAD_ERROR_UPSELL:
                case D.e.BURST_REACTION_UPSELL:
                case D.e.MESSAGE_LENGTH_UPSELL:
                    let y;
                    switch (d) {
                        case D.e.UPLOAD_ERROR_UPSELL:
                            y = v.intl.format(v.t.F4qoD7, {
                                planName: (0, N.Zw)(c),
                                premiumMaxSize: c === D.pe.TIER_0 ? v.intl.string(v.t["C/Rhb9"]) : R,
                                onClick: () => {
                                    ((0, g.pX)(b.BVt.APPLICATION_STORE), l?.());
                                },
                            });
                            break;
                        case D.e.BURST_REACTION_UPSELL:
                            y = v.intl.format(v.t.poib9C, {
                                planName: (0, N.Zw)(c),
                                onClick: () => {
                                    ((0, g.pX)(b.BVt.APPLICATION_STORE), l?.());
                                },
                            });
                            break;
                        case D.e.MESSAGE_LENGTH_UPSELL:
                            y = v.intl.format(v.t.GUHtE3, {
                                premiumMaxMessageLength: 4e3,
                                onClick: () => {
                                    ((0, g.pX)(b.BVt.APPLICATION_STORE), l?.());
                                },
                            });
                    }
                    return (
                        o()(null != y, "There must be some upsell context"),
                        (0, i.jsxs)("div", {
                            className: P.hQ,
                            children: [
                                (0, i.jsx)(h.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                                (0, i.jsx)(f.E, { variant: "body-md/normal", children: r }),
                                (0, i.jsx)(U, { trialOffer: A, discountOffer: T, children: y }),
                            ],
                        })
                    );
                case D.e.BURST_REACTION_QUICK_ACTION_UPSELL:
                    return (0, i.jsxs)("div", {
                        className: P.hQ,
                        children: [
                            (0, i.jsx)(h.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            null != r && (0, i.jsx)(f.E, { variant: "body-md/normal", children: r }),
                            (0, i.jsx)(U, {
                                trialOffer: A,
                                discountOffer: T,
                                children: v.intl.format(v.t.poib9C, {
                                    planName: (0, N.Zw)(c),
                                    onClick: () => (0, g.pX)(b.BVt.APPLICATION_STORE),
                                }),
                            }),
                            (0, i.jsx)(w, {
                                className: P.Oy,
                                subscriptionTier: c,
                                analyticsLocationObject: E,
                                onClose: l,
                                trialOffer: A,
                                discountOffer: T,
                            }),
                        ],
                    });
                case D.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
                    return (
                        o()(null != a, "You must specify children for this upsell type"),
                        (0, i.jsx)(U, {
                            trialOffer: A,
                            discountOffer: T,
                            children: v.intl.format(v.t["5KMAnK"], {
                                onClick: () => {
                                    ((0, g.pX)(b.BVt.APPLICATION_STORE), (0, m.DS)());
                                },
                            }),
                        })
                    );
                case D.e.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
                    return (0, i.jsxs)("div", {
                        className: s()(P.iW, { [P.WP]: !S }),
                        children: [
                            (0, i.jsx)(f.E, {
                                variant: "body-lg/semibold",
                                color: "text-feedback-critical",
                                children: r,
                            }),
                            (0, i.jsx)(h.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: P.Ed,
                                children: v.intl.string(v.t.ZvHg3N),
                            }),
                            (0, i.jsx)("div", { className: P.yF }),
                            (0, i.jsx)(U, {
                                trialOffer: A,
                                discountOffer: T,
                                className: P.ZH,
                                subscriptionTier: c,
                                children: v.intl.format(v.t.GUHtE3, {
                                    premiumMaxMessageLength: 4e3,
                                    onClick: () => {
                                        ((0, g.pX)(b.BVt.APPLICATION_STORE), l?.());
                                    },
                                }),
                            }),
                            (0, i.jsx)(w, {
                                subscriptionTier: c,
                                analyticsLocationObject: E,
                                onClose: l,
                                trialOffer: A,
                                discountOffer: T,
                            }),
                        ],
                    });
                case D.e.CUSTOM_PROFILE_TRY_OUT_UPSELL:
                case D.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
                    return (0, i.jsx)(x, {});
                case D.e.GUILD_CAP_MODAL_UPSELL:
                case D.e.PREMIUM_GUILD_IDENTITY_MODAL:
                case D.e.CUSTOM_PROFILE_UPSELL:
                case D.e.VIDEO_BACKGROUNDS_MODAL:
                case D.e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
                case D.e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
                case D.e.EMOJI_PICKER_EMOJI_CLICKED:
                case D.e.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
                case D.e.APP_ICON_UPSELL:
                case D.e.CLIENT_THEMES_UPSELL:
                case D.e.TRY_IT_OUT_MODAL_UPSELL:
                    return (0, i.jsx)(k, { trialOffer: A, discountOffer: T, headingText: t, context: r, children: a });
                default:
                    return (
                        C.A.captureMessage(`Possible mishandling of a PremiumUpsellType: ${d}`),
                        (0, i.jsx)(k, { headingText: t, context: r, children: a, trialOffer: A, discountOffer: T })
                    );
            }
        },
        Vq: function (e) {
            let t = (0, R.V)()?.subscriptionTrial,
                n = t?.skuId ?? D.pe.TIER_2;
            return (0, i.jsx)(f.E, {
                variant: "body-xs/semibold",
                className: s()(P.A6, e.className, { [P.kU]: n === D.pe.TIER_0, [P.y_]: n === D.pe.TIER_2 }),
                color: "none",
                children: (0, N.tS)({ intervalType: t?.interval, intervalCount: t?.intervalCount }),
            });
        },
        ux: M,
    },
);
