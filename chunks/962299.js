t.d(e, { M: () => v });
var n = t(477900),
    s = t(582128),
    i = t(403581),
    c = t(834730),
    l = t(821609),
    o = t(812095),
    a = t(75678),
    d = t(871123),
    u = t(831024),
    x = t(906383),
    p = t(421108),
    k = t(647474),
    h = t(202541),
    m = t(375708),
    j = t(279673);
function v(r) {
    let { applicationId: e, analyticsLocations: t } = r,
        v = (0, u.u)({ surface: "storefront_banner", applicationId: e }),
        C = (0, x.Pc)(v),
        f = v?.endsAt ?? null,
        b = (0, p.tm)(f),
        A = s.useCallback(() => {
            (0, a.A)({
                subscriptionTier: h.pe.TIER_2,
                analyticsLocations: t,
                applicationId: e,
                ...(0, d.zl)(v?.rewardRequirements ?? []),
            });
        }, [t, e, v]);
    if (null == v || b) return null;
    if ((0, x.ad)(C))
        return (0, n.jsx)(k.A, {
            color: "nitro-pink",
            sticky: !0,
            children: (0, n.jsxs)("div", {
                className: j.kL,
                children: [
                    (0, n.jsxs)("div", {
                        className: j.FS,
                        children: [
                            (0, n.jsx)(i.t, { size: "xs", color: "currentColor", className: j.Kk }),
                            (0, n.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "currentColor",
                                children: (0, o.U)(v.text),
                            }),
                        ],
                    }),
                    (0, n.jsx)(l.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: i.t,
                        text: m.intl.string(m.t.pj0XBN),
                        onClick: A,
                    }),
                ],
            }),
        });
    let N = "nitro" === v.flavor;
    return (0, n.jsx)(k.e, {
        sticky: !0,
        Icon: N ? i.t : v.Icon,
        endDatetime: v.endsAt,
        color: N ? "nitro-pink" : void 0,
        children: (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "currentColor", children: (0, o.U)(v.text) }),
    });
}
