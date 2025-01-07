n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(215569),
    m = n(477690),
    h = n(481060),
    g = n(852860),
    x = n(393238),
    p = n(211266),
    f = n(313201),
    C = n(345861),
    v = n(208567),
    _ = n(73346),
    I = n(624138),
    N = n(584825),
    T = n(723047),
    j = n(927954),
    b = n(164000),
    S = n(587431),
    E = n(293810),
    R = n(333866),
    y = n(388032),
    A = n(848720);
let Z = (0, I.Mg)(m.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);
function L() {
    return [
        {
            name: y.intl.string(y.t.rXqxhI),
            desc: y.intl.string(y.t.yQiJnZ),
            value: E.e3.SOME_CHANNELS,
            icon: h.TextIcon
        },
        {
            name: y.intl.string(y.t.WzC9s7),
            desc: y.intl.string(y.t.WmagiI),
            value: E.e3.ALL_CHANNELS,
            icon: h.KeyIcon
        }
    ];
}
function D(e) {
    let { value: t, 'aria-labelledby': n, onChange: l, disabled: s = !1 } = e,
        { ref: o, width: c } = (0, x.Z)(),
        d = (0, p.Z)(L),
        u = r.useMemo(
            () =>
                d.map((e) => ({
                    ...e,
                    icon: function () {
                        let { icon: t } = e;
                        return (0, i.jsx)('div', {
                            className: A.formatRadioIconWrapper,
                            children: (0, i.jsx)(t, { className: A.formatRadioIcon })
                        });
                    },
                    radioBarClassName: A.formatOptionRadioBar,
                    radioItemIconClassName: A.formatOptionRadioItemIcon
                })),
            [d]
        ),
        m = null != c && c >= 400;
    return (0, i.jsx)('div', {
        ref: o,
        children: (0, i.jsx)(h.RadioGroup, {
            options: u,
            value: t,
            orientation: m ? 'horizontal' : 'vertical',
            size: h.RadioGroup.Sizes.NONE,
            className: a()({ [A.radioGroupHorizontal]: m }),
            radioItemClassName: A.formatOptionRadioItem,
            onChange: (e) => {
                let { value: t } = e;
                return l(t);
            },
            'aria-labelledby': n,
            disabled: s
        })
    });
}
function O(e) {
    var t;
    let { guild: n, isGuildProducts: l = !1 } = e,
        { format: a } = (0, b.Z)(n.id),
        s = (0, N.YB)(n.id),
        c = r.useCallback(() => {
            var e;
            return (null == s ? void 0 : null === (e = s.cover_image_asset) || void 0 === e ? void 0 : e.application_id) == null ? null : (0, _._W)(s.cover_image_asset.application_id, s.cover_image_asset, Z);
        }, [s]),
        [m, x] = r.useState(a),
        [p, I] = r.useState(null !== (t = null == s ? void 0 : s.description) && void 0 !== t ? t : ''),
        [L, O] = r.useState(c),
        [k, P] = r.useState(null == s ? void 0 : s.store_page_guild_products_default_sort),
        [M, w] = r.useState(null == s ? void 0 : s.server_shop_tab_order),
        { loading: B, error: U, updateSubscriptionsSettings: G } = (0, N.QV)(),
        { imageCTA: F, imageAriaLabel: H, setFilename: z } = (0, j.Z)(null == s ? void 0 : s.cover_image_asset),
        W = (0, f.Dt)(),
        V = (0, f.Dt)(),
        Y = (0, f.Dt)();
    function K(e, t) {
        o()(null != e, 'Null value not allowed'), null != t && z(t.name), O(e);
    }
    let q = r.useMemo(() => {
            var e;
            return (null != p && p !== (null !== (e = null == s ? void 0 : s.description) && void 0 !== e ? e : '')) || (null == L ? void 0 : L.startsWith('data:')) === !0 || m !== a || (null == s ? void 0 : s.store_page_guild_products_default_sort) !== k || (null == s ? void 0 : s.server_shop_tab_order) !== M;
        }, [L, a, p, s, m, k, M]),
        X = null != p && '' !== p && null != L;
    r.useEffect(() => {
        var e;
        (null == s ? void 0 : null === (e = s.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null && O((0, _._W)(s.cover_image_asset.application_id, s.cover_image_asset, Z));
    }, [null == s ? void 0 : s.cover_image_asset]);
    let Q = (0, T.mY)(),
        J = r.useMemo(
            () =>
                R.kL.map((e) => ({
                    label: (0, R.eJ)(e),
                    value: e
                })),
            []
        ),
        $ = r.useMemo(
            () => [
                {
                    label: y.intl.string(y.t.X6h2g4),
                    value: R.a3.PRODUCTS_FIRST
                },
                {
                    label: y.intl.string(y.t['KzCF//']),
                    value: R.a3.SUBS_FIRST
                }
            ],
            []
        );
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            null != U &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(S.Z, { children: U.getAnyErrorMessage() }), (0, i.jsx)(h.Spacer, { size: 16 })]
                }),
            l
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)(h.FormSection, {
                              title: y.intl.string(y.t['PAVi+/']),
                              titleId: W,
                              disabled: Q,
                              children: [
                                  (0, i.jsx)(h.FormText, {
                                      type: h.FormText.Types.DESCRIPTION,
                                      className: A.formDescription,
                                      disabled: Q,
                                      children: y.intl.string(y.t.x87YqK)
                                  }),
                                  (0, i.jsx)(D, {
                                      value: m,
                                      onChange: (e) => {
                                          a !== e &&
                                              e === E.e3.ALL_CHANNELS &&
                                              (0, h.openModal)((e) =>
                                                  (0, i.jsx)(h.ConfirmModal, {
                                                      ...e,
                                                      header: y.intl.string(y.t.dmVoOz),
                                                      confirmText: y.intl.string(y.t['NX+WJC']),
                                                      confirmButtonColor: h.Button.Colors.BRAND,
                                                      children: (0, i.jsx)(h.Text, {
                                                          variant: 'text-md/normal',
                                                          children: y.intl.string(y.t.mtwzdH)
                                                      })
                                                  })
                                              ),
                                              x(e);
                                      },
                                      'aria-labelledby': W,
                                      disabled: Q
                                  })
                              ]
                          }),
                          (0, i.jsx)(h.FormDivider, { className: A.divider })
                      ]
                  }),
            (0, i.jsx)(h.FormSection, {
                title: y.intl.string(y.t['1+Ho1d']),
                titleId: V,
                disabled: Q,
                children: (0, i.jsx)(h.TextArea, {
                    placeholder: l ? y.intl.string(y.t.SD6LRU) : y.intl.string(y.t['aVhW/f']),
                    maxLength: 1500,
                    value: p,
                    rows: 2,
                    autosize: !0,
                    onChange: I,
                    'aria-labelledby': V,
                    disabled: Q
                })
            }),
            (0, i.jsx)(h.FormDivider, { className: A.divider }),
            (0, i.jsxs)(h.FormSection, {
                title: y.intl.string(y.t['0kpTpK']),
                disabled: Q,
                children: [
                    (0, i.jsx)(h.FormText, {
                        type: h.FormText.Types.DESCRIPTION,
                        className: A.formDescription,
                        disabled: Q,
                        children: y.intl.string(y.t.i2rCwc)
                    }),
                    (0, i.jsx)(v.Z, {
                        image: L,
                        hint: F,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: A.coverImageUploader,
                        iconWrapperClassName: A.coverImageUploaderIconWrapper,
                        imageClassName: A.coverImageUploaderInner,
                        iconClassName: A.coverImageUploaderIcon,
                        onChange: K,
                        'aria-label': H,
                        disabled: Q
                    }),
                    (0, i.jsx)(h.Spacer, { size: 16 }),
                    (0, i.jsx)(C.Z, {
                        onChange: K,
                        buttonCTA: F,
                        'aria-label': H,
                        disabled: Q,
                        look: h.Button.Looks.OUTLINED,
                        color: h.Button.Colors.PRIMARY
                    })
                ]
            }),
            l
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(h.FormDivider, { className: A.divider }),
                          (0, i.jsxs)(h.FormSection, {
                              title: y.intl.string(y.t.aaZ9pK),
                              titleId: Y,
                              disabled: Q,
                              children: [
                                  (0, i.jsx)(h.FormText, {
                                      type: h.FormText.Types.DESCRIPTION,
                                      className: A.formDescription,
                                      disabled: Q,
                                      children: y.intl.string(y.t.TILN8v)
                                  }),
                                  (0, i.jsx)(h.SingleSelect, {
                                      value: k,
                                      placeholder: y.intl.string(y.t.XqMe3N),
                                      options: J,
                                      onChange: (e) => P(e)
                                  })
                              ]
                          })
                      ]
                  })
                : null,
            $.length > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(h.FormDivider, { className: A.divider }),
                        (0, i.jsxs)(h.FormSection, {
                            title: y.intl.string(y.t['+dtmw8']),
                            titleId: Y,
                            disabled: Q,
                            children: [
                                (0, i.jsx)(h.FormText, {
                                    type: h.FormText.Types.DESCRIPTION,
                                    className: A.formDescription,
                                    disabled: Q,
                                    children: y.intl.string(y.t.n8WSWF)
                                }),
                                (0, i.jsx)(h.SingleSelect, {
                                    value: M,
                                    placeholder: y.intl.string(y.t.XqMe3N),
                                    options: $,
                                    onChange: (e) => w(e)
                                })
                            ]
                        })
                    ]
                }),
            (0, i.jsx)(u.W, {
                component: 'div',
                className: A.contentRegion,
                children:
                    q &&
                    (0, i.jsx)(h.SlideIn, {
                        children: (0, i.jsx)(g.Z, {
                            submitting: B,
                            disabled: !X,
                            onReset: () => {
                                var e;
                                x(a), I(null !== (e = null == s ? void 0 : s.description) && void 0 !== e ? e : ''), O(c), P(null == s ? void 0 : s.store_page_guild_products_default_sort), w(null == s ? void 0 : s.server_shop_tab_order);
                            },
                            onSave: () => {
                                o()(null != s, 'Settings must be defined');
                                let e = {};
                                p !== s.description && (e.description = p), null != L && L.startsWith('data:') && (e.cover_image = L), m !== a && (e.full_server_gate = m === E.e3.ALL_CHANNELS), k !== s.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = k), M !== s.server_shop_tab_order && (e.server_shop_tab_order = M), !d().isEmpty(e) && G(n.id, e);
                            },
                            saveButtonTooltip: X ? void 0 : y.intl.string(y.t['6HRvio'])
                        })
                    })
            })
        ]
    });
}
