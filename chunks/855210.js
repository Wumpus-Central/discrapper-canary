i.d(t, { default: () => I });
var l = i(627968),
    s = i(64700),
    r = i(70283),
    n = i(297264),
    a = i(834730),
    c = i(189213),
    o = i(17928),
    d = i(597770),
    u = i(793574),
    m = i(688810),
    x = i(982240),
    h = i(975732),
    g = i(287809),
    j = i(751188),
    f = i(503698),
    p = i.n(f),
    v = i(914410),
    T = i(360615),
    N = i(375708),
    _ = i(525897);
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
var b = i(852406);
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
    A = i(615876);
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
function B(e) {
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
function D(e) {
    let { currentProgress: t } = e,
        i = (0, o.bG)([x.Ay], () => x.Ay.getBadgeById(r.$.GIFTING)?.tiers);
    if (null == i) return null;
    let s = (0, y.XX)(i, t),
        n = t + 1,
        a = (0, y.XX)(i, n),
        c = a?.key !== s?.key,
        d = (0, y.aZ)(i, n),
        u = (0, y.cz)(i, n),
        m = 1 === u;
    return c && null != a
        ? (0, l.jsx)(B, { simulatedProgress: n, currentTier: s, newTier: a, nextTier: d, giftsToNextTier: u })
        : m
          ? (0, l.jsx)(E, {
                title: N.intl.formatToPlainString(T.default.KjdBPz, { nextTier: d?.name ?? "" }),
                description: N.intl.string(T.default.oqDrEM),
                progressBarTitle: N.intl.string(T.default["Ka5s+Q"]),
                progress: n,
                currentTier: a ?? void 0,
                nextTier: d ?? void 0,
            })
          : (0, l.jsx)(E, {
                title: N.intl.string(T.default["/rBQud"]),
                description: N.intl.string(T.default.DDQMlx),
                progressBarTitle:
                    s?.name != null ? N.intl.formatToPlainString(T.default.bwyQt8, { tierName: s?.name }) : "",
                progress: n,
                currentTier: a ?? void 0,
                nextTier: d ?? void 0,
            });
}
function I(e) {
    let { transitionState: t, onClose: i, currentProgress: r } = e,
        { analyticsLocations: n } = (0, m.Ay)(u.A.GIFTING_BADGE_POST_PURCHASE),
        { openGiftModal: a } = (0, j.$)({
            giftRecipient: void 0,
            analyticsLocations: n,
            analyticsObject: { object: k.ZSU.BUTTON_CTA, objectType: k.AnalyticsObjectTypes.GIFT },
            location: "gifting-badge-post-purchase",
        }),
        o = s.useCallback(() => {
            i();
            let e = g.default.getCurrentUser();
            null != e && (0, h.openUserProfileModal)({ userId: e.id });
        }, [i]),
        x = s.useCallback(() => {
            i(), a();
        }, [i, a]);
    return (0, l.jsx)(c.Modal, {
        transitionState: t,
        size: "sm",
        onClose: i,
        title: void 0,
        actions: [
            { variant: "secondary", text: N.intl.string(T.default["sa/cfM"]), onClick: o },
            { variant: "primary", text: N.intl.string(T.default.g86YiI), icon: d.o, onClick: x },
        ],
        children: (0, l.jsx)(D, { currentProgress: r }),
    });
}
