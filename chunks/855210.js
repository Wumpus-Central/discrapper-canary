i.d(t, { default: () => D });
var l = i(477900),
    s = i(582128),
    r = i(70283),
    n = i(297264),
    a = i(834730),
    c = i(189213),
    o = i(17928),
    d = i(597770),
    u = i(793574),
    m = i(688810),
    x = i(982240),
    h = i(402860),
    g = i(287809),
    j = i(788833),
    f = i(503698),
    p = i.n(f),
    v = i(914410),
    T = i(556427),
    N = i(375708),
    _ = i(304958);
function M(e) {
    let { progress: t, currentTier: i, newTier: s, className: r } = e,
        n = (0, x.rL)(i ?? void 0),
        c = (0, x.rL)(s),
        o = c > 0 ? Math.min(Math.max((t / c) * 100, 0), 100) : 100;
    return (0, l.jsxs)("div", {
        className: p()(_.kL, r),
        children: [
            (0, l.jsxs)("div", {
                className: _.O3,
                children: [
                    i?.simple_icon_url != null &&
                        (0, l.jsx)("img", { src: i.simple_icon_url, alt: "", width: 24, height: 24, className: _.w5 }),
                    (0, l.jsx)("div", {
                        className: _.hr,
                        children: (0, l.jsx)(v.Ay, { variant: v.qP.BLUE, weight: v.fh.MEDIUM, progress: o }),
                    }),
                    null != s.simple_icon_url &&
                        (0, l.jsx)("img", { src: s.simple_icon_url, alt: "", width: 24, height: 24, className: _.w5 }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: _.WD,
                children: [
                    (0, l.jsx)(a.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: N.intl.format(T.default.QsbVMM, { count: n }),
                    }),
                    (0, l.jsx)(a.E, {
                        variant: "text-xs/normal",
                        color: "text-strong",
                        children: N.intl.format(T.default.QsbVMM, { count: c }),
                    }),
                ],
            }),
        ],
    });
}
var b = i(803691);
function w(e) {
    let { progress: t, currentTier: i, nextTier: s, iconSize: r = 24, title: c } = e,
        o = (0, x.rL)(s),
        d = 100;
    return (
        null != s && o > 0 && (d = Math.min(Math.max((t / o) * 100, 0), 100)),
        (0, l.jsxs)("div", {
            className: b.nM,
            children: [
                i?.simple_icon_url != null &&
                    (0, l.jsx)("img", { src: i.simple_icon_url, alt: "", width: r, height: r, className: b.w5 }),
                (0, l.jsxs)("div", {
                    className: b.Qs,
                    children: [
                        null != c && (0, l.jsx)(n.D, { variant: "heading-md/semibold", children: c }),
                        (0, l.jsx)(v.Ay, { variant: v.qP.BLUE, weight: v.fh.MEDIUM, progress: d }),
                        (0, l.jsx)("div", {
                            className: b.WD,
                            children:
                                null != s &&
                                (0, l.jsx)(a.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: N.intl.format(T.default.iIpfQe, { count: t, threshold: o }),
                                }),
                        }),
                    ],
                }),
                s?.simple_icon_url != null &&
                    (0, l.jsx)("img", { src: s.simple_icon_url, alt: "", width: r, height: r, className: b.w5 }),
            ],
        })
    );
}
var y = i(315693),
    k = i(652215),
    A = i(254013);
function E(e) {
    let { progress: t, title: i, progressBarTitle: s, description: r, currentTier: c, nextTier: o } = e;
    return (0, l.jsxs)("div", {
        className: A.Qs,
        children: [
            (0, l.jsx)("div", {
                className: A.qB,
                children: (0, l.jsx)(w, { progress: t, currentTier: c, nextTier: o, iconSize: 48, title: s }),
            }),
            (0, l.jsxs)("div", {
                className: A.TA,
                children: [
                    (0, l.jsx)(n.D, { variant: "heading-xxl/bold", children: i }),
                    (0, l.jsx)(a.E, { variant: "text-sm/normal", color: "text-subtle", className: A.h_, children: r }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { simulatedProgress: t, currentTier: i, newTier: s, nextTier: r, giftsToNextTier: c } = e,
        o = null != r && null != c && c > 0;
    return (0, l.jsxs)("div", {
        className: A.Qs,
        children: [
            null != s.simple_icon_url &&
                (0, l.jsx)("img", { src: s.simple_icon_url, alt: "", width: 140, height: 140, className: A.rF }),
            (0, l.jsxs)("div", {
                className: A.Mr,
                children: [
                    (0, l.jsx)(n.D, {
                        variant: "heading-xxl/bold",
                        children: N.intl.format(T.default.k8MmO8, { tierName: s.name ?? "" }),
                    }),
                    (0, l.jsx)(M, { progress: t, currentTier: i, newTier: s, className: A.$c }),
                    o &&
                        (0, l.jsx)(a.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: A.kA,
                            children: N.intl.format(T.default["6QVlxw"], { count: c, nextTierName: r.name ?? "" }),
                        }),
                ],
            }),
        ],
    });
}
function B(e) {
    let { currentProgress: t, quantity: i } = e,
        s = (0, o.bG)([x.Ay], () => x.Ay.getBadgeById(r.$.GIFTING)?.tiers);
    if (null == s) return null;
    let n = (0, y.XX)(s, t),
        a = t + i,
        c = (0, y.XX)(s, a),
        d = c?.key !== n?.key,
        u = (0, y.aZ)(s, a),
        m = (0, y.cz)(s, a),
        h = 1 === m;
    return d && null != c
        ? (0, l.jsx)(I, { simulatedProgress: a, currentTier: n, newTier: c, nextTier: u, giftsToNextTier: m })
        : h
          ? (0, l.jsx)(E, {
                title: N.intl.formatToPlainString(T.default.KjdBPz, { nextTier: u?.name ?? "" }),
                description: N.intl.string(T.default.oqDrEM),
                progressBarTitle: N.intl.string(T.default["Ka5s+Q"]),
                progress: a,
                currentTier: c ?? void 0,
                nextTier: u ?? void 0,
            })
          : (0, l.jsx)(E, {
                title: N.intl.string(T.default["/rBQud"]),
                description: N.intl.string(T.default.DDQMlx),
                progressBarTitle:
                    n?.name != null ? N.intl.formatToPlainString(T.default.bwyQt8, { tierName: n?.name }) : "",
                progress: a,
                currentTier: c ?? void 0,
                nextTier: u ?? void 0,
            });
}
function D(e) {
    let { transitionState: t, onClose: i, currentProgress: r, quantity: n } = e,
        { analyticsLocations: a } = (0, m.Ay)(u.A.GIFTING_BADGE_POST_PURCHASE),
        { openGiftModal: o } = (0, j.$)({
            giftRecipient: void 0,
            analyticsLocations: a,
            analyticsObject: { object: k.ZSU.BUTTON_CTA, objectType: k.AnalyticsObjectTypes.GIFT },
            location: "gifting-badge-post-purchase",
        }),
        x = s.useCallback(() => {
            i();
            let e = g.default.getCurrentUser();
            null != e && (0, h.openUserProfileModal)({ userId: e.id });
        }, [i]),
        f = s.useCallback(() => {
            i(), o();
        }, [i, o]);
    return (0, l.jsx)(c.Modal, {
        transitionState: t,
        size: "sm",
        onClose: i,
        title: void 0,
        actions: [
            { variant: "secondary", text: N.intl.string(T.default["sa/cfM"]), onClick: x },
            { variant: "primary", text: N.intl.string(T.default.g86YiI), icon: d.GiftIcon, onClick: f },
        ],
        children: (0, l.jsx)(B, { currentProgress: r, quantity: n }),
    });
}
