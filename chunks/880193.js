n.d(t, { Z: () => _ }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(313201),
    o = n(345861),
    c = n(208567),
    d = n(937615),
    u = n(289393),
    m = n(723047),
    g = n(727843),
    p = n(290348),
    h = n(927954),
    f = n(783454),
    x = n(981631),
    b = n(388032),
    j = n(301849),
    N = n(320744);
function _(e) {
    let { priceTiers: t } = e,
        { editStateId: n } = (0, g.N)(),
        _ = (0, s.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getSubscriptionListing(n)) ? void 0 : e.image_asset;
        }),
        [v, O] = p._T(n),
        [C, y] = p.mR(n),
        [I, E] = p.PK(n),
        [S, T] = p.d9(n, 1024),
        { imageCTA: P, imageAriaLabel: w, setFilename: R } = (0, h.Z)(_),
        Z = i.useMemo(() => {
            var e;
            return null !=
                (e =
                    null == t
                        ? void 0
                        : t.map((e) => ({
                              value: e,
                              label: (0, d.T4)(e, x.pKx.USD)
                          })))
                ? e
                : [];
        }, [t]);
    function D(e, t) {
        null != t && R(t.name), T(e);
    }
    let A = (0, m.mY)(),
        k = (0, a.Dt)(),
        W = (0, a.Dt)(),
        L = (0, a.Dt)();
    return (0, r.jsxs)(f.Z, {
        title: b.NW.string(b.t.iHU439),
        intiallyExpanded: !0,
        children: [
            (0, r.jsxs)('div', {
                className: N.formSplit,
                children: [
                    (0, r.jsx)('div', {
                        className: N.formSplitHalf,
                        children: (0, r.jsx)(l.hjN, {
                            title: b.NW.string(b.t.grbGJy),
                            titleId: k,
                            disabled: A,
                            children: (0, r.jsx)(l.oil, {
                                placeholder: b.NW.string(b.t['So2/xM']),
                                value: v,
                                inputClassName: j.formInput,
                                onChange: O,
                                'aria-labelledby': k,
                                disabled: A
                            })
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: N.formSplitHalf,
                        children: (0, r.jsx)(l.hjN, {
                            title: b.NW.string(b.t.Ibl4BQ),
                            titleId: W,
                            disabled: A,
                            children: (0, r.jsx)(l.q4e, {
                                options: Z,
                                className: j.formInput,
                                isDisabled: A || null == t,
                                placeholder: b.NW.string(b.t['88XZDg']),
                                value: C,
                                onChange: y,
                                maxVisibleItems: 5,
                                look: l.qQH.CUSTOM,
                                'aria-labelledby': W
                            })
                        })
                    })
                ]
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)(l.hjN, {
                title: b.NW.string(b.t['1w2WcX']),
                titleId: L,
                disabled: A,
                children: (0, r.jsx)(l.Kx8, {
                    placeholder: b.NW.string(b.t.p7Jr4O),
                    value: I,
                    rows: 2,
                    autosize: !0,
                    className: j.formInput,
                    onChange: E,
                    'aria-labelledby': L,
                    disabled: A
                })
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsxs)('div', {
                className: N.iconSection,
                children: [
                    (0, r.jsxs)(l.hjN, {
                        title: b.NW.string(b.t.RUBM2t),
                        className: N.iconSectionDescription,
                        disabled: A,
                        children: [
                            (0, r.jsx)(l.R94, {
                                type: l.R94.Types.DESCRIPTION,
                                className: j.formDescription,
                                disabled: A,
                                children: b.NW.string(b.t['0iUofH'])
                            }),
                            (0, r.jsx)(o.Z, {
                                onChange: D,
                                buttonCTA: P,
                                'aria-label': w,
                                disabled: A,
                                look: l.zxk.Looks.OUTLINED,
                                color: l.zxk.Colors.PRIMARY
                            })
                        ]
                    }),
                    (0, r.jsx)(c.Z, {
                        image: S,
                        hint: P,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: N.iconUploader,
                        imageClassName: N.tierSymbolUploaderInner,
                        onChange: D,
                        'aria-label': w,
                        disabled: A
                    })
                ]
            })
        ]
    });
}
