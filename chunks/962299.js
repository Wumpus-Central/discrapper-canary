t.d(e, { M: () => f });
var n = t(477900),
    s = t(582128),
    i = t(503698),
    c = t.n(i),
    l = t(403581),
    o = t(834730),
    a = t(821609),
    d = t(812095),
    u = t(75678),
    x = t(871123),
    k = t(831024),
    p = t(906383),
    m = t(421108),
    h = t(647474),
    j = t(202541),
    v = t(375708),
    C = t(279673);
function f(r) {
    let { applicationId: e, analyticsLocations: t } = r,
        i = (0, k.u)({ surface: "storefront_banner", applicationId: e }),
        f = (0, p.Pc)(i),
        b = i?.endsAt ?? null,
        N = (0, m.tm)(b),
        A = s.useCallback(() => {
            (0, u.A)({
                subscriptionTier: j.pe.TIER_2,
                analyticsLocations: t,
                applicationId: e,
                ...(0, x.zl)(i?.rewardRequirements ?? []),
            });
        }, [t, e, i]);
    if (null == i || N) return null;
    if ((0, p.ad)(f))
        return (0, n.jsx)(h.A, {
            color: "nitro-pink",
            sticky: !0,
            children: (0, n.jsxs)("div", {
                className: c()(C.kL, C.OQ),
                children: [
                    (0, n.jsxs)("div", {
                        className: C.FS,
                        children: [
                            (0, n.jsx)(l.t, { size: "xs", color: "currentColor", className: C.Kk }),
                            (0, n.jsx)(o.E, {
                                variant: "text-sm/normal",
                                color: "currentColor",
                                children: (0, d.U)(i.text),
                            }),
                        ],
                    }),
                    (0, n.jsx)(a.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: l.t,
                        text: v.intl.string(v.t.pj0XBN),
                        onClick: A,
                    }),
                ],
            }),
        });
    let _ = "nitro" === i.flavor;
    return (0, n.jsx)(h.e, {
        contentClassName: C.kL,
        sticky: !0,
        Icon: _ ? l.t : i.Icon,
        endDatetime: i.endsAt,
        color: _ ? "nitro-pink" : void 0,
        children: (0, n.jsx)(o.E, { variant: "text-sm/normal", color: "currentColor", children: (0, d.U)(i.text) }),
    });
}
