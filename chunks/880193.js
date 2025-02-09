n.d(t, { Z: () => N }), n(47120);
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
    _ = n(981631),
    C = n(388032),
    f = n(270614),
    v = n(758592);
function N(e) {
    let { priceTiers: t } = e,
        { editStateId: n } = (0, h.N)(),
        N = (0, l.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getSubscriptionListing(n)) || void 0 === e ? void 0 : e.image_asset;
        }),
        [j, I] = g._T(n),
        [E, b] = g.mR(n),
        [T, S] = g.PK(n),
        [R, Z] = g.d9(n, 1024),
        { imageCTA: y, imageAriaLabel: A, setFilename: L } = (0, x.Z)(N),
        D = r.useMemo(() => {
            var e;
            return null !==
                (e =
                    null == t
                        ? void 0
                        : t.map((e) => ({
                              value: e,
                              label: (0, d.T4)(e, _.pKx.USD)
                          }))) && void 0 !== e
                ? e
                : [];
        }, [t]);
    function O(e, t) {
        null != t && L(t.name), Z(e);
    }
    let k = (0, m.mY)(),
        P = (0, a.Dt)(),
        w = (0, a.Dt)(),
        M = (0, a.Dt)();
    return (0, i.jsxs)(p.Z, {
        title: C.intl.string(C.t.iHU439),
        intiallyExpanded: !0,
        children: [
            (0, i.jsxs)('div', {
                className: v.formSplit,
                children: [
                    (0, i.jsx)('div', {
                        className: v.formSplitHalf,
                        children: (0, i.jsx)(s.hjN, {
                            title: C.intl.string(C.t.grbGJy),
                            titleId: P,
                            disabled: k,
                            children: (0, i.jsx)(s.oil, {
                                placeholder: C.intl.string(C.t['So2/xM']),
                                value: j,
                                inputClassName: f.formInput,
                                onChange: I,
                                'aria-labelledby': P,
                                disabled: k
                            })
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: v.formSplitHalf,
                        children: (0, i.jsx)(s.hjN, {
                            title: C.intl.string(C.t.Ibl4BQ),
                            titleId: w,
                            disabled: k,
                            children: (0, i.jsx)(s.q4e, {
                                options: D,
                                className: f.formInput,
                                isDisabled: k || null == t,
                                placeholder: C.intl.string(C.t['88XZDg']),
                                value: E,
                                onChange: b,
                                maxVisibleItems: 5,
                                look: s.qQH.CUSTOM,
                                'aria-labelledby': w
                            })
                        })
                    })
                ]
            }),
            (0, i.jsx)(s.LZC, { size: 24 }),
            (0, i.jsx)(s.hjN, {
                title: C.intl.string(C.t['1w2WcX']),
                titleId: M,
                disabled: k,
                children: (0, i.jsx)(s.Kx8, {
                    placeholder: C.intl.string(C.t.p7Jr4O),
                    value: T,
                    rows: 2,
                    autosize: !0,
                    className: f.formInput,
                    onChange: S,
                    'aria-labelledby': M,
                    disabled: k
                })
            }),
            (0, i.jsx)(s.LZC, { size: 24 }),
            (0, i.jsxs)('div', {
                className: v.iconSection,
                children: [
                    (0, i.jsxs)(s.hjN, {
                        title: C.intl.string(C.t.RUBM2t),
                        className: v.iconSectionDescription,
                        disabled: k,
                        children: [
                            (0, i.jsx)(s.R94, {
                                type: s.R94.Types.DESCRIPTION,
                                className: f.formDescription,
                                disabled: k,
                                children: C.intl.string(C.t['0iUofH'])
                            }),
                            (0, i.jsx)(o.Z, {
                                onChange: O,
                                buttonCTA: y,
                                'aria-label': A,
                                disabled: k,
                                look: s.zxk.Looks.OUTLINED,
                                color: s.zxk.Colors.PRIMARY
                            })
                        ]
                    }),
                    (0, i.jsx)(c.Z, {
                        image: R,
                        hint: y,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: v.iconUploader,
                        imageClassName: v.tierSymbolUploaderInner,
                        onChange: O,
                        'aria-label': A,
                        disabled: k
                    })
                ]
            })
        ]
    });
}
