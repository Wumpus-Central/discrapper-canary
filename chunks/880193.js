n.d(t, { Z: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(313201),
    o = n(345861),
    c = n(208567),
    d = n(937615),
    u = n(289393),
    g = n(723047),
    m = n(727843),
    p = n(290348),
    f = n(927954),
    h = n(783454),
    b = n(981631),
    x = n(388032),
    j = n(657158);
function _(e) {
    let { priceTiers: t } = e,
        { editStateId: n } = (0, m.N)(),
        _ = (0, l.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getSubscriptionListing(n)) ? void 0 : e.image_asset;
        }),
        [v, O] = p._T(n),
        [C, y] = p.mR(n),
        [N, E] = p.PK(n),
        [I, S] = p.d9(n, 1024),
        { imageCTA: T, imageAriaLabel: P, setFilename: w } = (0, f.Z)(_),
        Z = i.useMemo(() => {
            var e;
            return null !=
                (e =
                    null == t
                        ? void 0
                        : t.map((e) => ({
                              value: e,
                              label: (0, d.T4)(e, b.pKx.USD),
                          })))
                ? e
                : [];
        }, [t]);
    function R(e, t) {
        null != t && w(t.name), S(e);
    }
    let D = (0, g.mY)(),
        A = (0, s.Dt)(),
        L = (0, s.Dt)(),
        k = (0, s.Dt)();
    return (0, r.jsx)(h.Z, {
        title: x.intl.string(x.t["iHU43+"]),
        intiallyExpanded: !0,
        children: (0, r.jsxs)(a.Kqy, {
            gap: 24,
            children: [
                (0, r.jsxs)("div", {
                    className: j.formSplit,
                    children: [
                        (0, r.jsx)("div", {
                            className: j.formSplitHalf,
                            children: (0, r.jsx)(a.oil, {
                                label: x.intl.string(x.t["grbGJ+"]),
                                placeholder: x.intl.string(x.t["So2/xP"]),
                                value: v,
                                onChange: O,
                                "aria-labelledby": A,
                                disabled: D,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: j.formSplitHalf,
                            children: (0, r.jsx)(a.q4e, {
                                label: x.intl.string(x.t.Ibl4BR),
                                options: Z,
                                isDisabled: D || null == t,
                                placeholder: x.intl.string(x.t["88XZDs"]),
                                value: C,
                                onChange: y,
                                maxVisibleItems: 5,
                                "aria-labelledby": L,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(a.Kx8, {
                    label: x.intl.string(x.t["1w2WcX"]),
                    placeholder: x.intl.string(x.t.p7Jr4K),
                    value: N,
                    autosize: !0,
                    onChange: E,
                    "aria-labelledby": k,
                    disabled: D,
                }),
                (0, r.jsxs)("div", {
                    className: j.iconSection,
                    children: [
                        (0, r.jsx)(a.gNt, {
                            label: x.intl.string(x.t.RUBM2q),
                            description: x.intl.string(x.t["0iUofN"]),
                            children: (0, r.jsx)(o.Z, {
                                onChange: R,
                                "aria-label": P,
                                disabled: D,
                                text: T,
                                size: "md",
                                variant: "secondary",
                            }),
                        }),
                        (0, r.jsx)(c.Z, {
                            image: I,
                            hint: T,
                            showIcon: !0,
                            showRemoveButton: !1,
                            hideSize: !0,
                            className: j.iconUploader,
                            imageClassName: j.tierSymbolUploaderInner,
                            onChange: R,
                            "aria-label": P,
                            disabled: D,
                        }),
                    ],
                }),
            ],
        }),
    });
}
