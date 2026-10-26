n.d(e, { M: () => g });
var r = n(477900),
    s = n(582128),
    c = n(503698),
    l = n.n(c),
    o = n(834730),
    i = n(403581),
    a = n(821609),
    u = n(812095),
    d = n(75678),
    m = n(871123),
    x = n(831024),
    h = n(906383),
    j = n(421108),
    v = n(647474),
    f = n(202541),
    k = n(105292),
    N = n(279673);
function p(t) {
    let { Icon: e, text: n, className: s } = t;
    return (0, r.jsxs)("div", {
        className: l()(N.FS, s),
        children: [
            null != e && (0, r.jsx)(e, { size: "xs", color: "currentColor", className: N.Kk }),
            (0, r.jsx)(o.E, { variant: "text-sm/normal", color: "currentColor", children: (0, u.U)(n) }),
        ],
    });
}
function g(t) {
    let { applicationId: e, analyticsLocations: n } = t,
        c = (0, x.u)({ surface: "storefront_banner", applicationId: e }),
        o = (0, h.Pc)(c),
        u = c?.endsAt ?? null,
        g = (0, j.tm)(u),
        b = s.useCallback(() => {
            (0, d.A)({
                subscriptionTier: f.pe.TIER_2,
                analyticsLocations: n,
                applicationId: e,
                ...(0, m.zl)(c?.rewardRequirements ?? []),
            });
        }, [n, e, c]);
    if (null == c || g) return null;
    if ((0, h.ad)(o))
        return (0, r.jsx)(v.A, {
            color: "nitro-pink",
            sticky: !0,
            children: (0, r.jsxs)("div", {
                className: l()(N.kL, N.OQ),
                children: [
                    (0, r.jsx)(p, { Icon: i.t, text: c.text }),
                    (0, r.jsxs)("div", {
                        className: N.jZ,
                        children: [
                            (0, r.jsx)(v.S, { endDatetime: c.endsAt }),
                            (0, r.jsx)(a.$, {
                                variant: "expressive",
                                size: "sm",
                                icon: i.t,
                                text: k.intl.string(k.t.pj0XBN),
                                onClick: b,
                            }),
                        ],
                    }),
                ],
            }),
        });
    let A = "nitro" === c.flavor,
        C = A ? i.t : c.Icon;
    return (0, r.jsxs)(v.A, {
        sticky: !0,
        color: A ? "nitro-pink" : void 0,
        children: [
            (0, r.jsx)(p, { Icon: C, text: c.text, className: N.kL }),
            (0, r.jsx)(v.S, { endDatetime: c.endsAt }),
        ],
    });
}
