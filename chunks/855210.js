i.d(t, { default: () => Q });
var s = i(477900),
    r = i(582128),
    l = i(70283),
    n = i(17928),
    a = i(189213),
    c = i(297264),
    d = i(834730),
    o = i(597770),
    u = i(793574),
    x = i(688810),
    m = i(982240),
    h = i(402860),
    g = i(287809),
    j = i(139486),
    f = i(948518),
    v = i(503698),
    T = i.n(v),
    N = i(914410),
    p = i(81445),
    M = i(105292),
    b = i(304958);
function w(e) {
    let { progress: t, currentTier: i, newTier: r, className: l } = e,
        n = (0, m.rL)(i ?? void 0),
        a = (0, m.rL)(r),
        c = a > 0 ? Math.min(Math.max((t / a) * 100, 0), 100) : 100,
        o = (0, j.Se)(i ?? void 0),
        u = (0, j.Se)(r);
    return (0, s.jsxs)("div", {
        className: T()(b.kL, l),
        children: [
            (0, s.jsxs)("div", {
                className: b.O3,
                children: [
                    null != o && (0, s.jsx)("img", { src: o, alt: "", width: 24, height: 24, className: b.w5 }),
                    (0, s.jsx)("div", {
                        className: b.hr,
                        children: (0, s.jsx)(N.Ay, { variant: N.qP.BLUE, weight: N.fh.MEDIUM, progress: c }),
                    }),
                    null != u && (0, s.jsx)("img", { src: u, alt: "", width: 24, height: 24, className: b.w5 }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: b.WD,
                children: [
                    (0, s.jsx)(d.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: M.intl.format(p.default.QsbVMM, { count: n }),
                    }),
                    (0, s.jsx)(d.E, {
                        variant: "text-xs/normal",
                        color: "text-strong",
                        children: M.intl.format(p.default.QsbVMM, { count: a }),
                    }),
                ],
            }),
        ],
    });
}
var y = i(803691);
function k(e) {
    let { progress: t, currentTier: i, nextTier: r, iconSize: l = 24, title: n } = e,
        a = (0, m.rL)(r),
        o = (0, j.Se)(i),
        u = (0, j.Se)(r),
        x = 100;
    return (
        null != r && a > 0 && (x = Math.min(Math.max((t / a) * 100, 0), 100)),
        (0, s.jsxs)("div", {
            className: y.nM,
            children: [
                null != o && (0, s.jsx)("img", { src: o, alt: "", width: l, height: l, className: y.w5 }),
                (0, s.jsxs)("div", {
                    className: y.Qs,
                    children: [
                        null != n && (0, s.jsx)(c.D, { variant: "heading-md/semibold", children: n }),
                        (0, s.jsx)(N.Ay, { variant: N.qP.BLUE, weight: N.fh.MEDIUM, progress: x }),
                        (0, s.jsx)("div", {
                            className: y.WD,
                            children:
                                null != r &&
                                (0, s.jsx)(d.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: M.intl.format(p.default.iIpfQe, { count: t, threshold: a }),
                                }),
                        }),
                    ],
                }),
                null != u && (0, s.jsx)("img", { src: u, alt: "", width: l, height: l, className: y.w5 }),
            ],
        })
    );
}
var A = i(315693),
    E = i(652215),
    I = i(254013);
function S(e) {
    let { progress: t, title: i, progressBarTitle: r, description: l, currentTier: n, nextTier: a } = e;
    return (0, s.jsxs)("div", {
        className: I.Qs,
        children: [
            (0, s.jsx)("div", {
                className: I.qB,
                children: (0, s.jsx)(k, { progress: t, currentTier: n, nextTier: a, iconSize: 48, title: r }),
            }),
            (0, s.jsxs)("div", {
                className: I.TA,
                children: [
                    (0, s.jsx)(c.D, { variant: "heading-xxl/bold", children: i }),
                    (0, s.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", className: I.h_, children: l }),
                ],
            }),
        ],
    });
}
function B(e) {
    let { simulatedProgress: t, currentTier: i, newTier: r, nextTier: l, giftsToNextTier: n } = e,
        a = null != l && null != n && n > 0,
        o = (0, j.Se)(r);
    return (0, s.jsxs)("div", {
        className: I.Qs,
        children: [
            null != o && (0, s.jsx)("img", { src: o, alt: "", width: 140, height: 140, className: I.rF }),
            (0, s.jsxs)("div", {
                className: I.Mr,
                children: [
                    (0, s.jsx)(c.D, {
                        variant: "heading-xxl/bold",
                        children: M.intl.format(p.default.k8MmO8, { tierName: r.name ?? "" }),
                    }),
                    (0, s.jsx)(w, { progress: t, currentTier: i, newTier: r, className: I.$c }),
                    a &&
                        (0, s.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: I.kA,
                            children: M.intl.format(p.default["6QVlxw"], { count: n, nextTierName: l.name ?? "" }),
                        }),
                ],
            }),
        ],
    });
}
function D(e) {
    let { currentProgress: t, quantity: i } = e,
        r = (0, n.bG)([m.Ay], () => m.Ay.getBadgeById(l.$.GIFTING)?.tiers);
    if (null == r) return null;
    let a = (0, A.XX)(r, t),
        c = t + i,
        d = (0, A.XX)(r, c),
        o = d?.key !== a?.key,
        u = (0, A.aZ)(r, c),
        x = (0, A.cz)(r, c),
        h = 1 === x;
    return o && null != d
        ? (0, s.jsx)(B, { simulatedProgress: c, currentTier: a, newTier: d, nextTier: u, giftsToNextTier: x })
        : h
          ? (0, s.jsx)(S, {
                title: M.intl.formatToPlainString(p.default.KjdBPz, { nextTier: u?.name ?? "" }),
                description: M.intl.string(p.default.oqDrEM),
                progressBarTitle: M.intl.string(p.default["Ka5s+Q"]),
                progress: c,
                currentTier: d ?? void 0,
                nextTier: u ?? void 0,
            })
          : (0, s.jsx)(S, {
                title: M.intl.string(p.default["/rBQud"]),
                description: M.intl.string(p.default.DDQMlx),
                progressBarTitle:
                    a?.name != null ? M.intl.formatToPlainString(p.default.bwyQt8, { tierName: a?.name }) : "",
                progress: c,
                currentTier: d ?? void 0,
                nextTier: u ?? void 0,
            });
}
function Q(e) {
    let { transitionState: t, onClose: i, currentProgress: l, quantity: n } = e,
        { analyticsLocations: c } = (0, x.Ay)(u.A.GIFTING_BADGE_POST_PURCHASE),
        { openGiftModal: d } = (0, f.$)({
            giftRecipient: void 0,
            analyticsLocations: c,
            analyticsObject: { object: E.ZSU.BUTTON_CTA, objectType: E.AnalyticsObjectTypes.GIFT },
            location: "gifting-badge-post-purchase",
        }),
        m = r.useCallback(() => {
            i();
            let e = g.default.getCurrentUser();
            null != e && (0, h.openUserProfileModal)({ userId: e.id });
        }, [i]),
        j = r.useCallback(() => {
            (i(), d());
        }, [i, d]);
    return (0, s.jsx)(a.a, {
        transitionState: t,
        size: "sm",
        onClose: i,
        title: void 0,
        actions: [
            { variant: "secondary", text: M.intl.string(p.default["sa/cfM"]), onClick: m },
            { variant: "primary", text: M.intl.string(p.default.g86YiI), icon: o.GiftIcon, onClick: j },
        ],
        children: (0, s.jsx)(D, { currentProgress: l, quantity: n }),
    });
}
