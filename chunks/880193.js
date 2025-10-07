n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(481060),
    a = n(313201),
    o = n(345861),
    c = n(208567),
    d = n(937615),
    u = n(289393),
    g = n(723047),
    m = n(727843),
    p = n(290348),
    f = n(927954),
    h = n(783454),
    x = n(981631),
    b = n(388032),
    j = n(810792);
function _(e) {
    let { priceTiers: t } = e,
        { editStateId: n } = (0, m.N)(),
        _ = (0, l.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getSubscriptionListing(n)) ? void 0 : e.image_asset;
        }),
        [v, C] = p._T(n),
        [O, y] = p.mR(n),
        [N, E] = p.PK(n),
        [I, S] = p.d9(n, 1024),
        { imageCTA: T, imageAriaLabel: P, setFilename: w } = (0, f.Z)(_),
        R = i.useMemo(() => {
            var e;
            return null !=
                (e =
                    null == t
                        ? void 0
                        : t.map((e) => ({
                              value: e,
                              label: (0, d.T4)(e, x.pKx.USD),
                          })))
                ? e
                : [];
        }, [t]);
    function Z(e, t) {
        null != t && w(t.name), S(e);
    }
    let D = (0, g.mY)(),
        A = (0, a.Dt)(),
        L = (0, a.Dt)(),
        k = (0, a.Dt)();
    return (0, r.jsx)(h.Z, {
        title: b.intl.string(b.t.iHU439),
        intiallyExpanded: !0,
        children: (0, r.jsxs)(s.Kqy, {
            gap: 24,
            children: [
                (0, r.jsxs)("div", {
                    className: j.formSplit,
                    children: [
                        (0, r.jsx)("div", {
                            className: j.formSplitHalf,
                            children: (0, r.jsx)(s.oil, {
                                label: b.intl.string(b.t.grbGJy),
                                placeholder: b.intl.string(b.t["So2/xM"]),
                                value: v,
                                onChange: C,
                                "aria-labelledby": A,
                                disabled: D,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: j.formSplitHalf,
                            children: (0, r.jsx)(s.q4e, {
                                label: b.intl.string(b.t.Ibl4BQ),
                                options: R,
                                isDisabled: D || null == t,
                                placeholder: b.intl.string(b.t["88XZDg"]),
                                value: O,
                                onChange: y,
                                maxVisibleItems: 5,
                                "aria-labelledby": L,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(s.Kx8, {
                    label: b.intl.string(b.t["1w2WcX"]),
                    placeholder: b.intl.string(b.t.p7Jr4O),
                    value: N,
                    autosize: !0,
                    onChange: E,
                    "aria-labelledby": k,
                    disabled: D,
                }),
                (0, r.jsxs)("div", {
                    className: j.iconSection,
                    children: [
                        (0, r.jsx)(s.NIc, {
                            label: b.intl.string(b.t.RUBM2t),
                            description: b.intl.string(b.t["0iUofH"]),
                            children: (0, r.jsx)(o.Z, {
                                onChange: Z,
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
                            onChange: Z,
                            "aria-label": P,
                            disabled: D,
                        }),
                    ],
                }),
            ],
        }),
    });
}
