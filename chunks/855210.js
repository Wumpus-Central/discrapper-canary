i.d(t, { default: () => D });
var s = i(477900),
    r = i(582128),
    l = i(70283),
    a = i(297264),
    n = i(834730),
    c = i(189213),
    d = i(17928),
    o = i(597770),
    u = i(793574),
    x = i(688810),
    m = i(982240),
    h = i(402860),
    g = i(287809),
    f = i(38423),
    j = i(788833),
    v = i(503698),
    T = i.n(v),
    N = i(914410),
    p = i(556427),
    b = i(375708),
    M = i(304958);
function w(e) {
    let { progress: t, currentTier: i, newTier: r, className: l } = e,
        a = (0, m.rL)(i ?? void 0),
        c = (0, m.rL)(r),
        d = c > 0 ? Math.min(Math.max((t / c) * 100, 0), 100) : 100,
        o = (0, f.b9)("GiftingBadgeLevelUpProgress"),
        u = (0, f.Se)(i ?? void 0, o),
        x = (0, f.Se)(r, o);
    return (0, s.jsxs)("div", {
        className: T()(M.kL, l),
        children: [
            (0, s.jsxs)("div", {
                className: M.O3,
                children: [
                    null != u && (0, s.jsx)("img", { src: u, alt: "", width: 24, height: 24, className: M.w5 }),
                    (0, s.jsx)("div", {
                        className: M.hr,
                        children: (0, s.jsx)(N.Ay, { variant: N.qP.BLUE, weight: N.fh.MEDIUM, progress: d }),
                    }),
                    null != x && (0, s.jsx)("img", { src: x, alt: "", width: 24, height: 24, className: M.w5 }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: M.WD,
                children: [
                    (0, s.jsx)(n.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: b.intl.format(p.default.QsbVMM, { count: a }),
                    }),
                    (0, s.jsx)(n.E, {
                        variant: "text-xs/normal",
                        color: "text-strong",
                        children: b.intl.format(p.default.QsbVMM, { count: c }),
                    }),
                ],
            }),
        ],
    });
}
var y = i(803691);
function B(e) {
    let { progress: t, currentTier: i, nextTier: r, iconSize: l = 24, title: c } = e,
        d = (0, m.rL)(r),
        o = (0, f.b9)("GiftingBadgeProgress"),
        u = (0, f.Se)(i, o),
        x = (0, f.Se)(r, o),
        h = 100;
    return (
        null != r && d > 0 && (h = Math.min(Math.max((t / d) * 100, 0), 100)),
        (0, s.jsxs)("div", {
            className: y.nM,
            children: [
                null != u && (0, s.jsx)("img", { src: u, alt: "", width: l, height: l, className: y.w5 }),
                (0, s.jsxs)("div", {
                    className: y.Qs,
                    children: [
                        null != c && (0, s.jsx)(a.D, { variant: "heading-md/semibold", children: c }),
                        (0, s.jsx)(N.Ay, { variant: N.qP.BLUE, weight: N.fh.MEDIUM, progress: h }),
                        (0, s.jsx)("div", {
                            className: y.WD,
                            children:
                                null != r &&
                                (0, s.jsx)(n.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: b.intl.format(p.default.iIpfQe, { count: t, threshold: d }),
                                }),
                        }),
                    ],
                }),
                null != x && (0, s.jsx)("img", { src: x, alt: "", width: l, height: l, className: y.w5 }),
            ],
        })
    );
}
var P = i(315693),
    k = i(652215),
    A = i(254013);
function E(e) {
    let { progress: t, title: i, progressBarTitle: r, description: l, currentTier: c, nextTier: d } = e;
    return (0, s.jsxs)("div", {
        className: A.Qs,
        children: [
            (0, s.jsx)("div", {
                className: A.qB,
                children: (0, s.jsx)(B, { progress: t, currentTier: c, nextTier: d, iconSize: 48, title: r }),
            }),
            (0, s.jsxs)("div", {
                className: A.TA,
                children: [
                    (0, s.jsx)(a.D, { variant: "heading-xxl/bold", children: i }),
                    (0, s.jsx)(n.E, { variant: "text-sm/normal", color: "text-subtle", className: A.h_, children: l }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { simulatedProgress: t, currentTier: i, newTier: r, nextTier: l, giftsToNextTier: c } = e,
        d = null != l && null != c && c > 0,
        o = (0, f.b9)("GiftingBadgePostPurchase"),
        u = (0, f.Se)(r, o);
    return (0, s.jsxs)("div", {
        className: A.Qs,
        children: [
            null != u && (0, s.jsx)("img", { src: u, alt: "", width: 140, height: 140, className: A.rF }),
            (0, s.jsxs)("div", {
                className: A.Mr,
                children: [
                    (0, s.jsx)(a.D, {
                        variant: "heading-xxl/bold",
                        children: b.intl.format(p.default.k8MmO8, { tierName: r.name ?? "" }),
                    }),
                    (0, s.jsx)(w, { progress: t, currentTier: i, newTier: r, className: A.$c }),
                    d &&
                        (0, s.jsx)(n.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: A.kA,
                            children: b.intl.format(p.default["6QVlxw"], { count: c, nextTierName: l.name ?? "" }),
                        }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { currentProgress: t, quantity: i } = e,
        r = (0, d.bG)([m.Ay], () => m.Ay.getBadgeById(l.$.GIFTING)?.tiers);
    if (null == r) return null;
    let a = (0, P.XX)(r, t),
        n = t + i,
        c = (0, P.XX)(r, n),
        o = c?.key !== a?.key,
        u = (0, P.aZ)(r, n),
        x = (0, P.cz)(r, n),
        h = 1 === x;
    return o && null != c
        ? (0, s.jsx)(I, { simulatedProgress: n, currentTier: a, newTier: c, nextTier: u, giftsToNextTier: x })
        : h
          ? (0, s.jsx)(E, {
                title: b.intl.formatToPlainString(p.default.KjdBPz, { nextTier: u?.name ?? "" }),
                description: b.intl.string(p.default.oqDrEM),
                progressBarTitle: b.intl.string(p.default["Ka5s+Q"]),
                progress: n,
                currentTier: c ?? void 0,
                nextTier: u ?? void 0,
            })
          : (0, s.jsx)(E, {
                title: b.intl.string(p.default["/rBQud"]),
                description: b.intl.string(p.default.DDQMlx),
                progressBarTitle:
                    a?.name != null ? b.intl.formatToPlainString(p.default.bwyQt8, { tierName: a?.name }) : "",
                progress: n,
                currentTier: c ?? void 0,
                nextTier: u ?? void 0,
            });
}
function D(e) {
    let { transitionState: t, onClose: i, currentProgress: l, quantity: a } = e,
        { analyticsLocations: n } = (0, x.Ay)(u.A.GIFTING_BADGE_POST_PURCHASE),
        { openGiftModal: d } = (0, j.$)({
            giftRecipient: void 0,
            analyticsLocations: n,
            analyticsObject: { object: k.ZSU.BUTTON_CTA, objectType: k.AnalyticsObjectTypes.GIFT },
            location: "gifting-badge-post-purchase",
        }),
        m = r.useCallback(() => {
            i();
            let e = g.default.getCurrentUser();
            null != e && (0, h.openUserProfileModal)({ userId: e.id });
        }, [i]),
        f = r.useCallback(() => {
            (i(), d());
        }, [i, d]);
    return (0, s.jsx)(c.Modal, {
        transitionState: t,
        size: "sm",
        onClose: i,
        title: void 0,
        actions: [
            { variant: "secondary", text: b.intl.string(p.default["sa/cfM"]), onClick: m },
            { variant: "primary", text: b.intl.string(p.default.g86YiI), icon: o.GiftIcon, onClick: f },
        ],
        children: (0, s.jsx)(S, { currentProgress: l, quantity: a }),
    });
}
