n.d(t, { Z: () => v }), n(388685);
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
    f = n(727843),
    m = n(290348),
    b = n(927954),
    p = n(783454),
    h = n(981631),
    x = n(388032),
    j = n(527859);
function v(e) {
    let { priceTiers: t } = e,
        { editStateId: n } = (0, f.N)(),
        v = (0, l.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getSubscriptionListing(n)) ? void 0 : e.image_asset;
        }),
        [O, y] = m._T(n),
        [C, N] = m.mR(n),
        [E, I] = m.PK(n),
        [S, _] = m.d9(n, 1024),
        { imageCTA: T, imageAriaLabel: P, setFilename: w } = (0, b.Z)(v),
        Z = i.useMemo(() => {
            var e;
            return null !=
                (e =
                    null == t
                        ? void 0
                        : t.map((e) => ({
                              id: e.toString(),
                              value: e,
                              label: (0, d.T4)(e, h.pKx.USD),
                          })))
                ? e
                : [];
        }, [t]);
    function R(e, t) {
        null != t && w(t.name), _(e);
    }
    let D = (0, g.mY)(),
        A = (0, s.Dt)(),
        L = (0, s.Dt)(),
        k = (0, s.Dt)();
    return (0, r.jsx)(p.Z, {
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
                                value: O,
                                onChange: y,
                                "aria-labelledby": A,
                                disabled: D,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: j.formSplitHalf,
                            children: (0, r.jsx)(a.PhF, {
                                selectionMode: "single",
                                label: x.intl.string(x.t.Ibl4BR),
                                options: Z,
                                disabled: D || null == t,
                                placeholder: x.intl.string(x.t["88XZDs"]),
                                value: C,
                                onSelectionChange: N,
                                maxOptionsVisible: 5,
                                "aria-labelledby": L,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(a.Kx8, {
                    label: x.intl.string(x.t["1w2WcX"]),
                    placeholder: x.intl.string(x.t.p7Jr4K),
                    value: E,
                    autosize: !0,
                    onChange: I,
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
                            image: S,
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
