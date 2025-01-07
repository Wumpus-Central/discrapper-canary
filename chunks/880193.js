n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(313201),
    o = n(345861),
    c = n(208567),
    d = n(937615),
    u = n(289393),
    m = n(723047),
    h = n(727843),
    g = n(290348),
    x = n(927954),
    p = n(783454),
    f = n(981631),
    C = n(388032),
    v = n(83701),
    _ = n(747716);
function I(e) {
    let { priceTiers: t } = e,
        { editStateId: n } = (0, h.N)(),
        I = (0, l.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getSubscriptionListing(n)) || void 0 === e ? void 0 : e.image_asset;
        }),
        [N, T] = g._T(n),
        [j, b] = g.mR(n),
        [S, E] = g.PK(n),
        [R, y] = g.d9(n, 1024),
        { imageCTA: A, imageAriaLabel: Z, setFilename: L } = (0, x.Z)(I),
        D = r.useMemo(() => {
            var e;
            return null !==
                (e =
                    null == t
                        ? void 0
                        : t.map((e) => ({
                              value: e,
                              label: (0, d.T4)(e, f.pKx.USD)
                          }))) && void 0 !== e
                ? e
                : [];
        }, [t]);
    function O(e, t) {
        null != t && L(t.name), y(e);
    }
    let k = (0, m.mY)(),
        P = (0, s.Dt)(),
        M = (0, s.Dt)(),
        w = (0, s.Dt)();
    return (0, i.jsxs)(p.Z, {
        title: C.intl.string(C.t.iHU439),
        intiallyExpanded: !0,
        children: [
            (0, i.jsxs)('div', {
                className: _.formSplit,
                children: [
                    (0, i.jsx)('div', {
                        className: _.formSplitHalf,
                        children: (0, i.jsx)(a.FormSection, {
                            title: C.intl.string(C.t.grbGJy),
                            titleId: P,
                            disabled: k,
                            children: (0, i.jsx)(a.TextInput, {
                                placeholder: C.intl.string(C.t['So2/xM']),
                                value: N,
                                inputClassName: v.formInput,
                                onChange: T,
                                'aria-labelledby': P,
                                disabled: k
                            })
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: _.formSplitHalf,
                        children: (0, i.jsx)(a.FormSection, {
                            title: C.intl.string(C.t.Ibl4BQ),
                            titleId: M,
                            disabled: k,
                            children: (0, i.jsx)(a.SingleSelect, {
                                options: D,
                                className: v.formInput,
                                isDisabled: k || null == t,
                                placeholder: C.intl.string(C.t['88XZDg']),
                                value: j,
                                onChange: b,
                                maxVisibleItems: 5,
                                look: a.SelectLooks.CUSTOM,
                                'aria-labelledby': M
                            })
                        })
                    })
                ]
            }),
            (0, i.jsx)(a.Spacer, { size: 24 }),
            (0, i.jsx)(a.FormSection, {
                title: C.intl.string(C.t['1w2WcX']),
                titleId: w,
                disabled: k,
                children: (0, i.jsx)(a.TextArea, {
                    placeholder: C.intl.string(C.t.p7Jr4O),
                    value: S,
                    rows: 2,
                    autosize: !0,
                    className: v.formInput,
                    onChange: E,
                    'aria-labelledby': w,
                    disabled: k
                })
            }),
            (0, i.jsx)(a.Spacer, { size: 24 }),
            (0, i.jsxs)('div', {
                className: _.iconSection,
                children: [
                    (0, i.jsxs)(a.FormSection, {
                        title: C.intl.string(C.t.RUBM2t),
                        className: _.iconSectionDescription,
                        disabled: k,
                        children: [
                            (0, i.jsx)(a.FormText, {
                                type: a.FormText.Types.DESCRIPTION,
                                className: v.formDescription,
                                disabled: k,
                                children: C.intl.string(C.t['0iUofH'])
                            }),
                            (0, i.jsx)(o.Z, {
                                onChange: O,
                                buttonCTA: A,
                                'aria-label': Z,
                                disabled: k,
                                look: a.Button.Looks.OUTLINED,
                                color: a.Button.Colors.PRIMARY
                            })
                        ]
                    }),
                    (0, i.jsx)(c.Z, {
                        image: R,
                        hint: A,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: _.iconUploader,
                        imageClassName: _.tierSymbolUploaderInner,
                        onChange: O,
                        'aria-label': Z,
                        disabled: k
                    })
                ]
            })
        ]
    });
}
