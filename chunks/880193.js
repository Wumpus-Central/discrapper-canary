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
    v = n(301849),
    _ = n(320744);
function O(e) {
    let { priceTiers: t } = e,
        { editStateId: n } = (0, p.N)(),
        O = (0, l.e7)([m.Z], () => {
            var e;
            return null == (e = m.Z.getSubscriptionListing(n)) ? void 0 : e.image_asset;
        }),
        [y, C] = f._T(n),
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
    let k = (0, g.mY)(),
        L = (0, o.Dt)(),
        M = (0, o.Dt)(),
        G = (0, o.Dt)();
    return (0, r.jsxs)(x.Z, {
        title: j.intl.string(j.t.iHU439),
        intiallyExpanded: !0,
        children: [
            (0, r.jsxs)('div', {
                className: _.formSplit,
                children: [
                    (0, r.jsx)('div', {
                        className: _.formSplitHalf,
                        children: (0, r.jsx)(a.hjN, {
                            title: j.intl.string(j.t.grbGJy),
                            titleId: L,
                            disabled: k,
                            children: (0, r.jsx)(s.Is, {
                                placeholder: j.intl.string(j.t['So2/xM']),
                                value: y,
                                inputClassName: v.formInput,
                                onChange: C,
                                'aria-labelledby': L,
                                disabled: k
                            })
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: _.formSplitHalf,
                        children: (0, r.jsx)(a.hjN, {
                            title: j.intl.string(j.t.Ibl4BQ),
                            titleId: M,
                            disabled: k,
                            children: (0, r.jsx)(a.q4e, {
                                options: D,
                                className: v.formInput,
                                isDisabled: k || null == t,
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
                disabled: k,
                children: (0, r.jsx)(a.Kx8, {
                    placeholder: j.intl.string(j.t.p7Jr4O),
                    value: E,
                    rows: 2,
                    autosize: !0,
                    className: v.formInput,
                    onChange: S,
                    'aria-labelledby': G,
                    disabled: k
                })
            }),
            (0, r.jsx)(a.LZC, { size: 24 }),
            (0, r.jsxs)('div', {
                className: _.iconSection,
                children: [
                    (0, r.jsxs)(a.hjN, {
                        title: j.intl.string(j.t.RUBM2t),
                        className: _.iconSectionDescription,
                        disabled: k,
                        children: [
                            (0, r.jsx)(a.R94, {
                                type: a.R94.Types.DESCRIPTION,
                                className: v.formDescription,
                                disabled: k,
                                children: j.intl.string(j.t['0iUofH'])
                            }),
                            (0, r.jsx)(c.Z, {
                                onChange: A,
                                buttonCTA: w,
                                'aria-label': R,
                                disabled: k,
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
                        className: _.iconUploader,
                        imageClassName: _.tierSymbolUploaderInner,
                        onChange: A,
                        'aria-label': R,
                        disabled: k
                    })
                ]
            })
        ]
    });
}
