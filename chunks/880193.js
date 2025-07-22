(n.d(t, { Z: () => O }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(755721),
    a = n(481060),
    o = n(313201),
    c = n(345861),
    d = n(208567),
    u = n(937615),
    m = n(289393),
    g = n(723047),
    p = n(727843),
    f = n(290348),
    h = n(927954),
    x = n(783454),
    b = n(981631),
    j = n(388032),
    _ = n(301849),
    v = n(320744);
function O(e) {
    let { priceTiers: t } = e,
        { editStateId: n } = (0, p.N)(),
        O = (0, l.e7)([m.Z], () => {
            var e;
            return null == (e = m.Z.getSubscriptionListing(n)) ? void 0 : e.image_asset;
        }),
        [C, y] = f._T(n),
        [N, I] = f.mR(n),
        [E, S] = f.PK(n),
        [T, P] = f.d9(n, 1024),
        { imageCTA: w, imageAriaLabel: R, setFilename: Z } = (0, h.Z)(O),
        D = i.useMemo(() => {
            var e;
            return null !=
                (e =
                    null == t
                        ? void 0
                        : t.map((e) => ({
                              value: e,
                              label: (0, u.T4)(e, b.pKx.USD)
                          })))
                ? e
                : [];
        }, [t]);
    function A(e, t) {
        (null != t && Z(t.name), P(e));
    }
    let L = (0, g.mY)(),
        k = (0, o.Dt)(),
        M = (0, o.Dt)(),
        G = (0, o.Dt)();
    return (0, r.jsxs)(x.Z, {
        title: j.intl.string(j.t.iHU439),
        intiallyExpanded: !0,
        children: [
            (0, r.jsxs)('div', {
                className: v.formSplit,
                children: [
                    (0, r.jsx)('div', {
                        className: v.formSplitHalf,
                        children: (0, r.jsx)(a.hjN, {
                            title: j.intl.string(j.t.grbGJy),
                            titleId: k,
                            disabled: L,
                            children: (0, r.jsx)(s.Is, {
                                placeholder: j.intl.string(j.t['So2/xM']),
                                value: C,
                                inputClassName: _.formInput,
                                onChange: y,
                                'aria-labelledby': k,
                                disabled: L
                            })
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: v.formSplitHalf,
                        children: (0, r.jsx)(a.hjN, {
                            title: j.intl.string(j.t.Ibl4BQ),
                            titleId: M,
                            disabled: L,
                            children: (0, r.jsx)(a.q4e, {
                                options: D,
                                className: _.formInput,
                                isDisabled: L || null == t,
                                placeholder: j.intl.string(j.t['88XZDg']),
                                value: N,
                                onChange: I,
                                maxVisibleItems: 5,
                                look: a.qQH.CUSTOM,
                                'aria-labelledby': M
                            })
                        })
                    })
                ]
            }),
            (0, r.jsx)(a.LZC, { size: 24 }),
            (0, r.jsx)(a.hjN, {
                title: j.intl.string(j.t['1w2WcX']),
                titleId: G,
                disabled: L,
                children: (0, r.jsx)(a.Kx8, {
                    placeholder: j.intl.string(j.t.p7Jr4O),
                    value: E,
                    rows: 2,
                    autosize: !0,
                    className: _.formInput,
                    onChange: S,
                    'aria-labelledby': G,
                    disabled: L
                })
            }),
            (0, r.jsx)(a.LZC, { size: 24 }),
            (0, r.jsxs)('div', {
                className: v.iconSection,
                children: [
                    (0, r.jsxs)(a.hjN, {
                        title: j.intl.string(j.t.RUBM2t),
                        className: v.iconSectionDescription,
                        disabled: L,
                        children: [
                            (0, r.jsx)(a.R94, {
                                type: a.R94.Types.DESCRIPTION,
                                className: _.formDescription,
                                disabled: L,
                                children: j.intl.string(j.t['0iUofH'])
                            }),
                            (0, r.jsx)(c.Z, {
                                onChange: A,
                                buttonCTA: w,
                                'aria-label': R,
                                disabled: L,
                                look: s.zx.Looks.OUTLINED,
                                color: s.zx.Colors.PRIMARY
                            })
                        ]
                    }),
                    (0, r.jsx)(d.Z, {
                        image: T,
                        hint: w,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: v.iconUploader,
                        imageClassName: v.tierSymbolUploaderInner,
                        onChange: A,
                        'aria-label': R,
                        disabled: L
                    })
                ]
            })
        ]
    });
}
