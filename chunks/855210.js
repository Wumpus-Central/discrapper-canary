t.d(i, { default: () => A });
var l = t(627968),
    s = t(64700),
    r = t(70283),
    n = t(534514),
    a = t(834730),
    c = t(189213),
    d = t(17928),
    o = t(597770),
    u = t(793574),
    m = t(688810),
    x = t(982240),
    h = t(975732),
    g = t(287809),
    j = t(751188),
    f = t(360615),
    p = t(375708),
    v = t(525897);
function T(e) {
    let { progress: i, currentTier: t, newTier: s } = e,
        r = (0, x.rL)(s),
        n = r > 0 ? Math.min(Math.max((i / r) * 100, 0), 100) : 100;
    return (0, l.jsxs)("div", {
        className: v.kL,
        children: [
            (0, l.jsxs)("div", {
                className: v.O3,
                children: [
                    t?.simple_icon_url != null &&
                        (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", width: 24, height: 24, className: v.w5 }),
                    (0, l.jsx)("div", {
                        className: v.mv,
                        children: (0, l.jsx)("div", { className: v.SX, style: { width: `${n}%` } }),
                    }),
                    null != s.simple_icon_url &&
                        (0, l.jsx)("img", { src: s.simple_icon_url, alt: "", width: 24, height: 24, className: v.w5 }),
                ],
            }),
            (0, l.jsx)("div", {
                className: v.WD,
                children: (0, l.jsx)(a.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: p.intl.format(f.default.iIpfQe, { count: i, threshold: r }),
                }),
            }),
        ],
    });
}
var N = t(852406);
function _(e) {
    let { progress: i, currentTier: t, nextTier: s, iconSize: r = 24, title: c } = e,
        d = (0, x.rL)(s),
        o = 100;
    return (
        null != s && d > 0 && (o = Math.min(Math.max((i / d) * 100, 0), 100)),
        (0, l.jsxs)("div", {
            className: N.nM,
            children: [
                t?.simple_icon_url != null &&
                    (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", width: r, height: r, className: N.w5 }),
                (0, l.jsxs)("div", {
                    className: N.Qs,
                    children: [
                        null != c && (0, l.jsx)(n.D, { variant: "heading-md/semibold", children: c }),
                        (0, l.jsx)("div", {
                            className: N.mv,
                            children: (0, l.jsx)("div", { className: N.SX, style: { width: `${o}%` } }),
                        }),
                        (0, l.jsx)("div", {
                            className: N.WD,
                            children:
                                null != s &&
                                (0, l.jsx)(a.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: p.intl.format(f.default.iIpfQe, { count: i, threshold: d }),
                                }),
                        }),
                    ],
                }),
                s?.simple_icon_url != null &&
                    (0, l.jsx)("img", { src: s.simple_icon_url, alt: "", width: r, height: r, className: N.w5 }),
            ],
        })
    );
}
var w = t(315693),
    y = t(652215),
    b = t(615876);
function k(e) {
    let { progress: i, title: t, progressBarTitle: s, description: r, currentTier: c, nextTier: d } = e;
    return (0, l.jsxs)("div", {
        className: b.Qs,
        children: [
            (0, l.jsx)("div", {
                className: b.Cd,
                children: (0, l.jsx)(_, { progress: i, currentTier: c, nextTier: d, iconSize: 48, title: s }),
            }),
            (0, l.jsxs)("div", {
                className: b.TA,
                children: [
                    (0, l.jsx)(n.D, { variant: "heading-xl/bold", children: t }),
                    (0, l.jsx)(a.E, { variant: "text-md/normal", color: "text-muted", children: r }),
                ],
            }),
        ],
    });
}
function C(e) {
    let { simulatedProgress: i, currentTier: t, newTier: s, nextTier: r, giftsToNextTier: c } = e,
        d = null != r && null != c && c > 0;
    return (0, l.jsxs)("div", {
        className: b.Qs,
        children: [
            null != s.simple_icon_url &&
                (0, l.jsx)("img", { src: s.simple_icon_url, alt: "", width: 120, height: 120, className: b.rF }),
            (0, l.jsxs)("div", {
                className: b.r1,
                children: [
                    (0, l.jsx)(T, { progress: i, currentTier: t, newTier: s }),
                    (0, l.jsx)(n.D, {
                        variant: "heading-xl/bold",
                        children: p.intl.format(f.default.k8MmO8, { tierName: s.name ?? "" }),
                    }),
                    d &&
                        (0, l.jsx)(a.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: p.intl.format(f.default["6QVlxw"], { count: c, nextTierName: r.name ?? "" }),
                        }),
                ],
            }),
        ],
    });
}
function M(e) {
    let { currentProgress: i } = e,
        t = (0, d.bG)([x.Ay], () => x.Ay.getBadgeById(r.$.GIFTING)?.tiers);
    if (null == t) return null;
    let s = (0, w.XX)(t, i),
        n = i + 1,
        a = (0, w.XX)(t, n),
        c = a?.key !== s?.key,
        o = (0, w.aZ)(t, n),
        u = (0, w.cz)(t, n),
        m = 1 === u;
    return c && null != a
        ? (0, l.jsx)(C, { simulatedProgress: n, currentTier: s, newTier: a, nextTier: o, giftsToNextTier: u })
        : m
          ? (0, l.jsx)(k, {
                title: p.intl.formatToPlainString(f.default.KjdBPz, { nextTier: o?.name ?? "" }),
                description: p.intl.string(f.default.oqDrEM),
                progressBarTitle: p.intl.string(f.default["Ka5s+Q"]),
                progress: n,
                currentTier: a ?? void 0,
                nextTier: o ?? void 0,
            })
          : (0, l.jsx)(k, {
                title: p.intl.string(f.default["/rBQud"]),
                description: p.intl.string(f.default.DDQMlx),
                progressBarTitle:
                    s?.name != null ? p.intl.formatToPlainString(f.default.bwyQt8, { tierName: s?.name }) : "",
                progress: n,
                currentTier: a ?? void 0,
                nextTier: o ?? void 0,
            });
}
function A(e) {
    let { transitionState: i, onClose: t, currentProgress: r } = e,
        { analyticsLocations: n } = (0, m.Ay)(u.A.GIFTING_BADGE_POST_PURCHASE),
        { openGiftModal: a } = (0, j.$)({
            giftRecipient: void 0,
            analyticsLocations: n,
            analyticsObject: { object: y.ZSU.BUTTON_CTA, objectType: y.AnalyticsObjectTypes.GIFT },
            location: "gifting-badge-post-purchase",
        }),
        d = s.useCallback(() => {
            t();
            let e = g.default.getCurrentUser();
            null != e && (0, h.openUserProfileModal)({ userId: e.id });
        }, [t]),
        x = s.useCallback(() => {
            t(), a();
        }, [t, a]);
    return (0, l.jsx)(c.Modal, {
        transitionState: i,
        size: "sm",
        onClose: t,
        title: p.intl.string(f.default.roVAey),
        actions: [
            { variant: "secondary", text: p.intl.string(f.default["sa/cfM"]), onClick: d },
            { variant: "primary", text: p.intl.string(f.default.g86YiI), icon: o.o, onClick: x },
        ],
        children: (0, l.jsx)(M, { currentProgress: r }),
    });
}
