n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(313201),
    o = n(345861),
    c = n(208567),
    d = n(937615),
    u = n(289393),
    m = n(723047),
    g = n(727843),
    p = n(290348),
    f = n(927954),
    h = n(783454),
    b = n(981631),
    x = n(388032),
    j = n(851016),
    v = n(657158);
function _(e) {
    let { priceTiers: t } = e,
        { editStateId: n } = (0, g.N)(),
        _ = (0, l.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getSubscriptionListing(n)) ? void 0 : e.image_asset;
        }),
        [O, y] = p._T(n),
        [C, N] = p.mR(n),
        [E, I] = p.PK(n),
        [S, T] = p.d9(n, 1024),
        { imageCTA: P, imageAriaLabel: w, setFilename: R } = (0, f.Z)(_),
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
    function D(e, t) {
        null != t && R(t.name), T(e);
    }
    let A = (0, m.mY)(),
        L = (0, s.Dt)(),
        k = (0, s.Dt)(),
        M = (0, s.Dt)();
    return (0, r.jsxs)(h.Z, {
        title: x.intl.string(x.t.iHU439),
        intiallyExpanded: !0,
        children: [
            (0, r.jsxs)("div", {
                className: v.formSplit,
                children: [
                    (0, r.jsx)("div", {
                        className: v.formSplitHalf,
                        children: (0, r.jsx)(a.hjN, {
                            title: x.intl.string(x.t.grbGJy),
                            titleId: L,
                            disabled: A,
                            children: (0, r.jsx)(a.oil, {
                                placeholder: x.intl.string(x.t["So2/xM"]),
                                value: O,
                                onChange: y,
                                "aria-labelledby": L,
                                disabled: A,
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: v.formSplitHalf,
                        children: (0, r.jsx)(a.hjN, {
                            title: x.intl.string(x.t.Ibl4BQ),
                            titleId: k,
                            disabled: A,
                            children: (0, r.jsx)(a.q4e, {
                                options: Z,
                                isDisabled: A || null == t,
                                placeholder: x.intl.string(x.t["88XZDg"]),
                                value: C,
                                onChange: N,
                                maxVisibleItems: 5,
                                "aria-labelledby": k,
                            }),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(a.LZC, { size: 24 }),
            (0, r.jsx)(a.hjN, {
                title: x.intl.string(x.t["1w2WcX"]),
                titleId: M,
                disabled: A,
                children: (0, r.jsx)(a.Kx8, {
                    placeholder: x.intl.string(x.t.p7Jr4O),
                    value: E,
                    autosize: !0,
                    onChange: I,
                    "aria-labelledby": M,
                    disabled: A,
                }),
            }),
            (0, r.jsx)(a.LZC, { size: 24 }),
            (0, r.jsxs)("div", {
                className: v.iconSection,
                children: [
                    (0, r.jsxs)(a.hjN, {
                        title: x.intl.string(x.t.RUBM2t),
                        className: v.iconSectionDescription,
                        disabled: A,
                        children: [
                            (0, r.jsx)(a.R94, {
                                type: a.R94.Types.DESCRIPTION,
                                className: j.formDescription,
                                disabled: A,
                                children: x.intl.string(x.t["0iUofH"]),
                            }),
                            (0, r.jsx)(o.Z, {
                                onChange: D,
                                "aria-label": w,
                                disabled: A,
                                text: P,
                                size: "md",
                                variant: "secondary",
                            }),
                        ],
                    }),
                    (0, r.jsx)(c.Z, {
                        image: S,
                        hint: P,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: v.iconUploader,
                        imageClassName: v.tierSymbolUploaderInner,
                        onChange: D,
                        "aria-label": w,
                        disabled: A,
                    }),
                ],
            }),
        ],
    });
}
