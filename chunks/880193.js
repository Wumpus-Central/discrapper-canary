n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(313201),
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
    I = n(747716);
function N(e) {
    let { priceTiers: t } = e,
        { editStateId: n } = (0, h.N)(),
        N = (0, l.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getSubscriptionListing(n)) || void 0 === e ? void 0 : e.image_asset;
        }),
        [_, T] = g._T(n),
        [j, b] = g.mR(n),
        [E, S] = g.PK(n),
        [R, y] = g.d9(n, 1024),
        { imageCTA: A, imageAriaLabel: Z, setFilename: L } = (0, x.Z)(N),
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
    let M = (0, m.mY)(),
        P = (0, a.Dt)(),
        k = (0, a.Dt)(),
        w = (0, a.Dt)();
    return (0, i.jsxs)(p.Z, {
        title: C.intl.string(C.t.iHU439),
        intiallyExpanded: !0,
        children: [
            (0, i.jsxs)('div', {
                className: I.formSplit,
                children: [
                    (0, i.jsx)('div', {
                        className: I.formSplitHalf,
                        children: (0, i.jsx)(s.FormSection, {
                            title: C.intl.string(C.t.grbGJy),
                            titleId: P,
                            disabled: M,
                            children: (0, i.jsx)(s.TextInput, {
                                placeholder: C.intl.string(C.t['So2/xM']),
                                value: _,
                                inputClassName: v.formInput,
                                onChange: T,
                                'aria-labelledby': P,
                                disabled: M
                            })
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: I.formSplitHalf,
                        children: (0, i.jsx)(s.FormSection, {
                            title: C.intl.string(C.t.Ibl4BQ),
                            titleId: k,
                            disabled: M,
                            children: (0, i.jsx)(s.SingleSelect, {
                                options: D,
                                className: v.formInput,
                                isDisabled: M || null == t,
                                placeholder: C.intl.string(C.t['88XZDg']),
                                value: j,
                                onChange: b,
                                maxVisibleItems: 5,
                                look: s.SelectLooks.CUSTOM,
                                'aria-labelledby': k
                            })
                        })
                    })
                ]
            }),
            (0, i.jsx)(s.Spacer, { size: 24 }),
            (0, i.jsx)(s.FormSection, {
                title: C.intl.string(C.t['1w2WcX']),
                titleId: w,
                disabled: M,
                children: (0, i.jsx)(s.TextArea, {
                    placeholder: C.intl.string(C.t.p7Jr4O),
                    value: E,
                    rows: 2,
                    autosize: !0,
                    className: v.formInput,
                    onChange: S,
                    'aria-labelledby': w,
                    disabled: M
                })
            }),
            (0, i.jsx)(s.Spacer, { size: 24 }),
            (0, i.jsxs)('div', {
                className: I.iconSection,
                children: [
                    (0, i.jsxs)(s.FormSection, {
                        title: C.intl.string(C.t.RUBM2t),
                        className: I.iconSectionDescription,
                        disabled: M,
                        children: [
                            (0, i.jsx)(s.FormText, {
                                type: s.FormText.Types.DESCRIPTION,
                                className: v.formDescription,
                                disabled: M,
                                children: C.intl.string(C.t['0iUofH'])
                            }),
                            (0, i.jsx)(o.Z, {
                                onChange: O,
                                buttonCTA: A,
                                'aria-label': Z,
                                disabled: M,
                                look: s.Button.Looks.OUTLINED,
                                color: s.Button.Colors.PRIMARY
                            })
                        ]
                    }),
                    (0, i.jsx)(c.Z, {
                        image: R,
                        hint: A,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: I.iconUploader,
                        imageClassName: I.tierSymbolUploaderInner,
                        onChange: O,
                        'aria-label': Z,
                        disabled: M
                    })
                ]
            })
        ]
    });
}
