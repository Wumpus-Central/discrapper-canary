"use strict";
n.d(t, { Ay: () => j, Vq: () => G, ux: () => M });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(989349),
    c = n.n(u),
    d = n(311907),
    _ = n(192308),
    f = n(582754),
    p = n(421380),
    h = n(397927),
    m = n(736653),
    g = n(775602),
    E = n(11029),
    A = n(976860),
    I = n(224016),
    T = n(217392),
    y = n(255438),
    S = n(927578),
    v = n(728458),
    C = n(292348),
    b = n(87719),
    N = n(234419),
    R = n(465794),
    O = n(795269),
    D = n(788868),
    L = n(652215),
    w = n(985018),
    x = n(514177),
    P = n(939383);
function M(e) {
    if (null == e) return null;
    let t = c()(e),
        n = t.diff(c()(), "h");
    if (n > 24) {
        let e = t.diff(c()(), "d");
        return w.intl.formatToPlainString(w.t.xs9VPm, { numDays: e });
    }
    if (n > 1) return w.intl.formatToPlainString(w.t.p7KX59, { numHours: n });
    let r = t.diff(c()(), "minutes");
    return w.intl.formatToPlainString(w.t["XtQ+Ap"], { numMinutes: r });
}
function k(e) {
    let { className: t, children: n, withBottomMargin: i, discountOffer: a, trialOffer: o } = e,
        l = o?.expires_at ?? a?.expires_at,
        u = o?.subscription_trial,
        c = e.subscriptionTier ?? u?.sku_id ?? D.pe.TIER_2;
    return (0, r.jsxs)("div", {
        className: s()(t, x.J3, { [x.Vm]: c === D.pe.TIER_0, [x.hD]: c === D.pe.TIER_2, [x.ip]: i }),
        children: [
            (0, r.jsxs)("div", {
                className: x.wm,
                children: [
                    (0, r.jsx)(h.tvc, { size: "md", color: "currentColor", className: x.Xo }),
                    c === D.pe.TIER_0 && (0, r.jsx)(T.A, { className: x.Vn }),
                    c === D.pe.TIER_2 && (0, r.jsx)(I.A, { className: x.Vn }),
                ],
            }),
            (0, r.jsx)(h.Text, { variant: "text-md/medium", className: x.C, color: "none", children: n }),
            (0, r.jsx)(O.ir, {
                text:
                    null != a
                        ? w.intl.formatToPlainString(w.t.iiLbvu, { percent: a.discount.amount })
                        : w.intl.string(w.t.IBYG5U),
                colorOptions: c === D.pe.TIER_0 ? O.at.PREMIUM_TIER_0_WHITE_FILL : O.at.PREMIUM_TIER_2_WHITE_FILL,
            }),
            (0, r.jsx)(h.Text, { variant: "eyebrow", className: x.dt, children: M(l) }),
        ],
    });
}
function U(e) {
    let {
            className: t,
            onClose: n,
            subscriptionTier: a,
            analyticsLocationObject: s,
            trialOffer: o,
            discountOffer: l,
        } = e,
        [u, c] = i.useState(!1),
        d =
            null != l
                ? w.intl.formatToPlainString(w.t.bkQ4bH, { percent: l.discount.amount })
                : (0, S.FY)({
                      intervalType: o?.subscription_trial?.interval,
                      intervalCount: o?.subscription_trial?.interval_count,
                  });
    return (0, r.jsx)(R.A, {
        className: t,
        subscriptionTier: a,
        submitting: u,
        premiumModalAnalyticsLocation: s,
        size: p.$n.Sizes.MEDIUM,
        color: p.$n.Colors.GREEN,
        onClick: () => {
            c(!0);
        },
        onSubscribeModalClose: (e) => {
            c(!1), e && n?.();
        },
        textOptions: { textOverride: d },
    });
}
function G(e) {
    let t = (0, N.V)()?.subscription_trial,
        n = t?.sku_id ?? D.pe.TIER_2;
    return (0, r.jsx)(h.Text, {
        variant: "text-xs/bold",
        className: s()(x.A6, e.className, { [x.kU]: n === D.pe.TIER_0, [x.y_]: n === D.pe.TIER_2 }),
        color: "none",
        children: (0, S.tS)({ intervalType: t?.interval, intervalCount: t?.interval_count }),
    });
}
function V(e) {
    let { subscriptionTier: t, onClose: n, analyticsLocationObject: i, trialOffer: a, discountOffer: s } = e;
    return (0, r.jsxs)("div", {
        className: x.qr,
        children: [
            (0, r.jsx)(p.$n, {
                "data-migration-pending": !0,
                onClick: n,
                size: p.$n.Sizes.SMALL,
                look: p.pR.BLANK,
                className: x.x7,
                children: w.intl.string(w.t.cpT0Cq),
            }),
            (0, r.jsx)(U, {
                className: x.xF,
                subscriptionTier: t,
                analyticsLocationObject: i,
                onClose: n,
                discountOffer: s,
                trialOffer: a,
            }),
        ],
    });
}
function F(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        i = (0, N.V)();
    return (0, r.jsxs)("div", {
        className: x.ki,
        children: [
            (0, r.jsx)(O.ir, {
                className: x.LW,
                text: w.intl.string(w.t["8CVUrV"]),
                colorOptions: O.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
            }),
            (0, r.jsx)(h.Heading, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: w.intl.format(w.t["fF+cgd"], { onClick: () => (0, b.e)() }),
            }),
            (0, r.jsx)(U, {
                trialOffer: i,
                className: x.as,
                subscriptionTier: D.pe.TIER_2,
                analyticsLocationObject: n,
                onClose: t,
            }),
            (0, r.jsx)(h.Text, { variant: "eyebrow", className: x.eg, children: M(i?.expires_at) }),
        ],
    });
}
function B(e) {
    let { headingText: t, context: n, children: i, trialOffer: a, discountOffer: s } = e;
    return (0, r.jsxs)("div", {
        className: x.hQ,
        children: [
            (0, r.jsx)(h.Heading, { variant: "heading-xl/semibold", children: t }),
            null != n && (0, r.jsx)(h.Text, { className: x._O, variant: "text-md/normal", children: n }),
            (0, r.jsx)(k, { trialOffer: a, discountOffer: s, children: i }),
        ],
    });
}
function j(e) {
    let {
            headingText: t,
            context: i,
            children: a,
            onClose: o,
            type: u,
            subscriptionTier: c,
            analyticsLocationObject: p,
            trialOffer: I,
            discountOffer: T,
        } = e,
        b = (0, d.bG)([g.A], () => g.A.useReducedMotion),
        N = (0, m.Ay)(),
        R = (0, y.Xq)(C.eM / y.XF, { useKibibytes: !0 });
    switch (u) {
        case D.e.EMPTY_STICKER_PICKER_UPSELL:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(h.DUT, {
                        className: x.kz,
                        onClick: o,
                        children: (0, r.jsx)(h.PGe, { size: "md", color: "currentColor" }),
                    }),
                    (0, r.jsxs)("div", {
                        className: x.hQ,
                        children: [
                            (0, r.jsx)("img", { className: x.Tn, src: P, alt: w.intl.string(w.t.do7AoM) }),
                            (0, r.jsx)(h.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: w.intl.string(w.t.HEm04J),
                            }),
                            (0, r.jsx)(k, {
                                trialOffer: I,
                                discountOffer: T,
                                children: w.intl.format(w.t["2HoFKF"], {
                                    planName: (0, S.Zw)(c),
                                    onClick: () => (0, A.pX)(L.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(V, {
                        subscriptionTier: c,
                        onClose: o,
                        analyticsLocationObject: { section: L.JJy.EXPRESSION_PICKER, object: L.ZSU.BUTTON_CTA },
                        trialOffer: I,
                        discountOffer: T,
                    }),
                ],
            });
        case D.e.STICKER_PICKER_UPSELL:
            return (
                l()(null != a, "You must specify children for this upsell type"),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: x.hQ,
                            children: [
                                (0, r.jsx)("img", { className: x.Tn, src: P, alt: w.intl.string(w.t.do7AoM) }),
                                (0, r.jsx)(h.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "text-strong",
                                    children: w.intl.string(w.t.jJG1pl),
                                }),
                                (0, r.jsx)(k, {
                                    trialOffer: I,
                                    discountOffer: T,
                                    children: w.intl.format(w.t["2HoFKF"], {
                                        planName: (0, S.Zw)(c),
                                        onClick: () => (0, A.pX)(L.BVt.APPLICATION_STORE),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(V, {
                            subscriptionTier: c,
                            onClose: o,
                            analyticsLocationObject: { section: L.JJy.EXPRESSION_PICKER, object: L.ZSU.BUTTON_CTA },
                            trialOffer: I,
                            discountOffer: T,
                        }),
                    ],
                })
            );
        case D.e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            l()(null != a, "You must specify children for this upsell type");
            let O = (0, f.qB)(N) ? n(454333) : n(674463);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: x.hQ,
                        children: [
                            (0, r.jsx)("img", { alt: "", className: x.Tn, src: O }),
                            (0, r.jsx)(h.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: w.intl.string(w.t["1SsvhY"]),
                            }),
                            (0, r.jsx)(k, {
                                trialOffer: I,
                                discountOffer: T,
                                children: w.intl.format(w.t.md4nP5, {
                                    planName: (0, S.Zw)(c),
                                    onClick: () => (0, A.pX)(L.BVt.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(V, {
                        subscriptionTier: c,
                        onClose: o,
                        analyticsLocationObject: { section: L.JJy.EMOJI_PICKER_POPOUT, object: L.ZSU.BUTTON_CTA },
                        trialOffer: I,
                        discountOffer: T,
                    }),
                ],
            });
        case D.e.UPLOAD_ERROR_UPSELL:
        case D.e.BURST_REACTION_UPSELL:
        case D.e.STREAM_QUALITY_UPSELL:
        case D.e.MESSAGE_LENGTH_UPSELL:
            let M;
            switch (u) {
                case D.e.UPLOAD_ERROR_UPSELL:
                    M = w.intl.format(w.t.F4qoD7, {
                        planName: (0, S.Zw)(c),
                        premiumMaxSize: c === D.pe.TIER_0 ? w.intl.string(w.t["C/Rhb9"]) : R,
                        onClick: () => {
                            (0, A.pX)(L.BVt.APPLICATION_STORE), o?.();
                        },
                    });
                    break;
                case D.e.BURST_REACTION_UPSELL:
                    M = w.intl.format(w.t.poib9C, {
                        planName: (0, S.Zw)(c),
                        onClick: () => {
                            (0, A.pX)(L.BVt.APPLICATION_STORE), o?.();
                        },
                    });
                    break;
                case D.e.STREAM_QUALITY_UPSELL:
                    M = w.intl.format(w.t.WspKp9, {
                        onClick: () => {
                            (0, A.pX)(L.BVt.APPLICATION_STORE), o?.(), (0, _.closeAllModals)();
                        },
                    });
                    break;
                case D.e.MESSAGE_LENGTH_UPSELL:
                    M = w.intl.format(w.t.GUHtE3, {
                        premiumMaxMessageLength: L.CS1,
                        onClick: () => {
                            (0, A.pX)(L.BVt.APPLICATION_STORE), o?.();
                        },
                    });
            }
            return (
                l()(null != M, "There must be some upsell context"),
                (0, r.jsxs)("div", {
                    className: x.hQ,
                    children: [
                        (0, r.jsx)(h.Heading, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                        (0, r.jsx)(h.Text, { variant: "text-md/normal", children: i }),
                        (0, r.jsx)(k, { trialOffer: I, discountOffer: T, children: M }),
                    ],
                })
            );
        case D.e.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, r.jsxs)("div", {
                className: x.hQ,
                children: [
                    (0, r.jsx)(h.Heading, { variant: "heading-xl/bold", color: "text-strong", children: t }),
                    (0, r.jsx)(h.Text, { variant: "text-md/normal", children: i }),
                    (0, r.jsx)(k, {
                        trialOffer: I,
                        discountOffer: T,
                        children: w.intl.format(w.t.poib9C, {
                            planName: (0, S.Zw)(c),
                            onClick: () => (0, A.pX)(L.BVt.APPLICATION_STORE),
                        }),
                    }),
                    (0, r.jsx)(U, {
                        className: x.Oy,
                        subscriptionTier: c,
                        analyticsLocationObject: p,
                        onClose: o,
                        trialOffer: I,
                        discountOffer: T,
                    }),
                ],
            });
        case D.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                l()(null != a, "You must specify children for this upsell type"),
                (0, r.jsx)(k, {
                    trialOffer: I,
                    discountOffer: T,
                    children: w.intl.format(w.t["5KMAnK"], {
                        onClick: () => {
                            (0, A.pX)(L.BVt.APPLICATION_STORE), (0, E.D)();
                        },
                    }),
                })
            );
        case D.e.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, r.jsxs)("div", {
                className: s()(x.iW, { [x.WP]: !b }),
                children: [
                    (0, r.jsx)(h.Text, { variant: "text-lg/bold", color: "text-feedback-critical", children: i }),
                    (0, r.jsx)(h.Heading, {
                        variant: "heading-lg/extrabold",
                        color: "text-strong",
                        className: x.Ed,
                        children: w.intl.string(w.t.ZvHg3N),
                    }),
                    (0, r.jsx)("div", { className: x.yF }),
                    (0, r.jsx)(k, {
                        trialOffer: I,
                        discountOffer: T,
                        className: x.ZH,
                        subscriptionTier: c,
                        children: w.intl.format(w.t.GUHtE3, {
                            premiumMaxMessageLength: L.CS1,
                            onClick: () => {
                                (0, A.pX)(L.BVt.APPLICATION_STORE), o?.();
                            },
                        }),
                    }),
                    (0, r.jsx)(U, {
                        subscriptionTier: c,
                        analyticsLocationObject: p,
                        onClose: o,
                        trialOffer: I,
                        discountOffer: T,
                    }),
                ],
            });
        case D.e.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case D.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, r.jsx)(F, {});
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
        case D.e.VOICE_FILTERS_UPSELL:
            return (0, r.jsx)(B, { trialOffer: I, discountOffer: T, headingText: t, context: i, children: a });
        default:
            return (
                v.A.captureMessage(`Possible mishandling of a PremiumUpsellType: ${u}`),
                (0, r.jsx)(B, { headingText: t, context: i, children: a, trialOffer: I, discountOffer: T })
            );
    }
}
