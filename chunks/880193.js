n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(199849),
    s = n(481060),
    o = n(313201),
    c = n(345861),
    d = n(208567),
    u = n(937615),
    g = n(289393),
    m = n(723047),
    p = n(727843),
    f = n(290348),
    h = n(927954),
    b = n(783454),
    x = n(981631),
    j = n(388032),
    _ = n(810792);
function v(e) {
    let { priceTiers: t } = e,
        { editStateId: n } = (0, p.N)(),
        v = (0, l.e7)([g.Z], () => {
            var e;
            return null == (e = g.Z.getSubscriptionListing(n)) ? void 0 : e.image_asset;
        }),
        [O, C] = f._T(n),
        [y, N] = f.mR(n),
        [E, I] = f.PK(n),
        [S, T] = f.d9(n, 1024),
        { imageCTA: P, imageAriaLabel: w, setFilename: Z } = (0, h.Z)(v),
        R = i.useMemo(() => {
            var e;
            return null !=
                (e =
                    null == t
                        ? void 0
                        : t.map((e) => ({
                              value: e,
                              label: (0, u.T4)(e, x.pKx.USD),
                          })))
                ? e
                : [];
        }, [t]);
    function D(e, t) {
        null != t && Z(t.name), T(e);
    }
    let A = (0, m.mY)(),
        L = (0, o.Dt)(),
        k = (0, o.Dt)(),
        G = (0, o.Dt)();
    return (0, r.jsx)(b.Z, {
        title: j.intl.string(j.t["iHU43+"]),
        intiallyExpanded: !0,
        children: (0, r.jsxs)(s.Kqy, {
            gap: 24,
            children: [
                (0, r.jsxs)("div", {
                    className: _.formSplit,
                    children: [
                        (0, r.jsx)("div", {
                            className: _.formSplitHalf,
                            children: (0, r.jsx)(s.oil, {
                                label: j.intl.string(j.t["grbGJ+"]),
                                placeholder: j.intl.string(j.t["So2/xP"]),
                                value: O,
                                onChange: C,
                                "aria-labelledby": L,
                                disabled: A,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: _.formSplitHalf,
                            children: (0, r.jsx)(a.y6, {
                                label: j.intl.string(j.t.Ibl4BR),
                                options: R,
                                isDisabled: A || null == t,
                                placeholder: j.intl.string(j.t["88XZDs"]),
                                value: y,
                                onChange: N,
                                maxVisibleItems: 5,
                                "aria-labelledby": k,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(s.Kx8, {
                    label: j.intl.string(j.t["1w2WcX"]),
                    placeholder: j.intl.string(j.t.p7Jr4K),
                    value: E,
                    autosize: !0,
                    onChange: I,
                    "aria-labelledby": G,
                    disabled: A,
                }),
                (0, r.jsxs)("div", {
                    className: _.iconSection,
                    children: [
                        (0, r.jsx)(s.gNt, {
                            label: j.intl.string(j.t.RUBM2q),
                            description: j.intl.string(j.t["0iUofN"]),
                            children: (0, r.jsx)(c.Z, {
                                onChange: D,
                                "aria-label": w,
                                disabled: A,
                                text: P,
                                size: "md",
                                variant: "secondary",
                            }),
                        }),
                        (0, r.jsx)(d.Z, {
                            image: S,
                            hint: P,
                            showIcon: !0,
                            showRemoveButton: !1,
                            hideSize: !0,
                            className: _.iconUploader,
                            imageClassName: _.tierSymbolUploaderInner,
                            onChange: D,
                            "aria-label": w,
                            disabled: A,
                        }),
                    ],
                }),
            ],
        }),
    });
}
