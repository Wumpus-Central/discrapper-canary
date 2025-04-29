n.d(t, { Z: () => v }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(481060),
    a = n(313201),
    o = n(345861),
    c = n(208567),
    u = n(937615),
    d = n(289393),
    m = n(723047),
    g = n(727843),
    p = n(290348),
    h = n(927954),
    f = n(783454),
    x = n(981631),
    b = n(388032),
    j = n(301849),
    _ = n(320744);
function v(e) {
    let { priceTiers: t } = e,
        { editStateId: n } = (0, g.N)(),
        v = (0, l.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getSubscriptionListing(n)) ? void 0 : e.image_asset;
        }),
        [O, C] = p._T(n),
        [y, N] = p.mR(n),
        [I, E] = p.PK(n),
        [S, T] = p.d9(n, 1024),
        { imageCTA: P, imageAriaLabel: w, setFilename: R } = (0, h.Z)(v),
        Z = i.useMemo(() => {
            var e;
            return null !=
                (e =
                    null == t
                        ? void 0
                        : t.map((e) => ({
                              value: e,
                              label: (0, u.T4)(e, x.pKx.USD)
                          })))
                ? e
                : [];
        }, [t]);
    function D(e, t) {
        null != t && R(t.name), T(e);
    }
    let k = (0, m.mY)(),
        A = (0, a.Dt)(),
        L = (0, a.Dt)(),
        M = (0, a.Dt)();
    return (0, r.jsxs)(f.Z, {
        title: b.intl.string(b.t.iHU439),
        intiallyExpanded: !0,
        children: [
            (0, r.jsxs)('div', {
                className: _.formSplit,
                children: [
                    (0, r.jsx)('div', {
                        className: _.formSplitHalf,
                        children: (0, r.jsx)(s.hjN, {
                            title: b.intl.string(b.t.grbGJy),
                            titleId: A,
                            disabled: k,
                            children: (0, r.jsx)(s.oil, {
                                placeholder: b.intl.string(b.t['So2/xM']),
                                value: O,
                                inputClassName: j.formInput,
                                onChange: C,
                                'aria-labelledby': A,
                                disabled: k
                            })
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: _.formSplitHalf,
                        children: (0, r.jsx)(s.hjN, {
                            title: b.intl.string(b.t.Ibl4BQ),
                            titleId: L,
                            disabled: k,
                            children: (0, r.jsx)(s.q4e, {
                                options: Z,
                                className: j.formInput,
                                isDisabled: k || null == t,
                                placeholder: b.intl.string(b.t['88XZDg']),
                                value: y,
                                onChange: N,
                                maxVisibleItems: 5,
                                look: s.qQH.CUSTOM,
                                'aria-labelledby': L
                            })
                        })
                    })
                ]
            }),
            (0, r.jsx)(s.LZC, { size: 24 }),
            (0, r.jsx)(s.hjN, {
                title: b.intl.string(b.t['1w2WcX']),
                titleId: M,
                disabled: k,
                children: (0, r.jsx)(s.Kx8, {
                    placeholder: b.intl.string(b.t.p7Jr4O),
                    value: I,
                    rows: 2,
                    autosize: !0,
                    className: j.formInput,
                    onChange: E,
                    'aria-labelledby': M,
                    disabled: k
                })
            }),
            (0, r.jsx)(s.LZC, { size: 24 }),
            (0, r.jsxs)('div', {
                className: _.iconSection,
                children: [
                    (0, r.jsxs)(s.hjN, {
                        title: b.intl.string(b.t.RUBM2t),
                        className: _.iconSectionDescription,
                        disabled: k,
                        children: [
                            (0, r.jsx)(s.R94, {
                                type: s.R94.Types.DESCRIPTION,
                                className: j.formDescription,
                                disabled: k,
                                children: b.intl.string(b.t['0iUofH'])
                            }),
                            (0, r.jsx)(o.Z, {
                                onChange: D,
                                buttonCTA: P,
                                'aria-label': w,
                                disabled: k,
                                look: s.zxk.Looks.OUTLINED,
                                color: s.zxk.Colors.PRIMARY
                            })
                        ]
                    }),
                    (0, r.jsx)(c.Z, {
                        image: S,
                        hint: P,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: _.iconUploader,
                        imageClassName: _.tierSymbolUploaderInner,
                        onChange: D,
                        'aria-label': w,
                        disabled: k
                    })
                ]
            })
        ]
    });
}
