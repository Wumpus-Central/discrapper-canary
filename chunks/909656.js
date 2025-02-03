n.d(t, { Z: () => O }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    d = n.n(c),
    u = n(215569),
    m = n(477690),
    h = n(481060),
    g = n(852860),
    x = n(393238),
    p = n(211266),
    _ = n(313201),
    C = n(345861),
    f = n(208567),
    v = n(73346),
    N = n(624138),
    j = n(584825),
    I = n(723047),
    E = n(927954),
    b = n(164000),
    T = n(587431),
    S = n(293810),
    R = n(333866),
    Z = n(388032),
    y = n(848720);
let A = (0, N.Mg)(m.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);
function L() {
    return [
        {
            name: Z.intl.string(Z.t.rXqxhI),
            desc: Z.intl.string(Z.t.yQiJnZ),
            value: S.e3.SOME_CHANNELS,
            icon: h.VL1
        },
        {
            name: Z.intl.string(Z.t.WzC9s7),
            desc: Z.intl.string(Z.t.WmagiI),
            value: S.e3.ALL_CHANNELS,
            icon: h._m8
        }
    ];
}
function D(e) {
    let { value: t, 'aria-labelledby': n, onChange: l, disabled: a = !1 } = e,
        { ref: o, width: c } = (0, x.Z)(),
        d = (0, p.Z)(L),
        u = r.useMemo(
            () =>
                d.map((e) => ({
                    ...e,
                    icon: function () {
                        let { icon: t } = e;
                        return (0, i.jsx)('div', {
                            className: y.formatRadioIconWrapper,
                            children: (0, i.jsx)(t, { className: y.formatRadioIcon })
                        });
                    },
                    radioBarClassName: y.formatOptionRadioBar,
                    radioItemIconClassName: y.formatOptionRadioItemIcon
                })),
            [d]
        ),
        m = null != c && c >= 400;
    return (0, i.jsx)('div', {
        ref: o,
        children: (0, i.jsx)(h.FXm, {
            options: u,
            value: t,
            orientation: m ? 'horizontal' : 'vertical',
            size: h.FXm.Sizes.NONE,
            className: s()({ [y.radioGroupHorizontal]: m }),
            radioItemClassName: y.formatOptionRadioItem,
            onChange: (e) => {
                let { value: t } = e;
                return l(t);
            },
            'aria-labelledby': n,
            disabled: a
        })
    });
}
function O(e) {
    var t;
    let { guild: n, isGuildProducts: l = !1 } = e,
        { format: s } = (0, b.Z)(n.id),
        a = (0, j.YB)(n.id),
        c = r.useCallback(() => {
            var e;
            return (null == a ? void 0 : null === (e = a.cover_image_asset) || void 0 === e ? void 0 : e.application_id) == null ? null : (0, v._W)(a.cover_image_asset.application_id, a.cover_image_asset, A);
        }, [a]),
        [m, x] = r.useState(s),
        [p, N] = r.useState(null !== (t = null == a ? void 0 : a.description) && void 0 !== t ? t : ''),
        [L, O] = r.useState(c),
        [k, P] = r.useState(null == a ? void 0 : a.store_page_guild_products_default_sort),
        [w, M] = r.useState(null == a ? void 0 : a.server_shop_tab_order),
        { loading: U, error: G, updateSubscriptionsSettings: B } = (0, j.QV)(),
        { imageCTA: F, imageAriaLabel: z, setFilename: H } = (0, E.Z)(null == a ? void 0 : a.cover_image_asset),
        V = (0, _.Dt)(),
        W = (0, _.Dt)(),
        K = (0, _.Dt)();
    function Y(e, t) {
        o()(null != e, 'Null value not allowed'), null != t && H(t.name), O(e);
    }
    let q = r.useMemo(() => {
            var e;
            return (null != p && p !== (null !== (e = null == a ? void 0 : a.description) && void 0 !== e ? e : '')) || (null == L ? void 0 : L.startsWith('data:')) === !0 || m !== s || (null == a ? void 0 : a.store_page_guild_products_default_sort) !== k || (null == a ? void 0 : a.server_shop_tab_order) !== w;
        }, [L, s, p, a, m, k, w]),
        X = null != p && '' !== p && null != L;
    r.useEffect(() => {
        var e;
        (null == a ? void 0 : null === (e = a.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null && O((0, v._W)(a.cover_image_asset.application_id, a.cover_image_asset, A));
    }, [null == a ? void 0 : a.cover_image_asset]);
    let Q = (0, I.mY)(),
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
                    label: Z.intl.string(Z.t.X6h2g4),
                    value: R.a3.PRODUCTS_FIRST
                },
                {
                    label: Z.intl.string(Z.t['KzCF//']),
                    value: R.a3.SUBS_FIRST
                }
            ],
            []
        );
    return (0, i.jsxs)('div', {
        className: y.container,
        children: [
            null != G &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(T.Z, { children: G.getAnyErrorMessage() }), (0, i.jsx)(h.LZC, { size: 16 })]
                }),
            l
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)(h.hjN, {
                              title: Z.intl.string(Z.t['PAVi+/']),
                              titleId: V,
                              disabled: Q,
                              children: [
                                  (0, i.jsx)(h.R94, {
                                      type: h.R94.Types.DESCRIPTION,
                                      className: y.formDescription,
                                      disabled: Q,
                                      children: Z.intl.string(Z.t.x87YqK)
                                  }),
                                  (0, i.jsx)(D, {
                                      value: m,
                                      onChange: (e) => {
                                          s !== e &&
                                              e === S.e3.ALL_CHANNELS &&
                                              (0, h.h7j)((e) =>
                                                  (0, i.jsx)(h.ConfirmModal, {
                                                      ...e,
                                                      header: Z.intl.string(Z.t.dmVoOz),
                                                      confirmText: Z.intl.string(Z.t['NX+WJC']),
                                                      confirmButtonColor: h.zxk.Colors.BRAND,
                                                      children: (0, i.jsx)(h.Text, {
                                                          variant: 'text-md/normal',
                                                          children: Z.intl.string(Z.t.mtwzdH)
                                                      })
                                                  })
                                              ),
                                              x(e);
                                      },
                                      'aria-labelledby': V,
                                      disabled: Q
                                  })
                              ]
                          }),
                          (0, i.jsx)(h.$i$, { className: y.divider })
                      ]
                  }),
            (0, i.jsx)(h.hjN, {
                title: Z.intl.string(Z.t['1+Ho1d']),
                titleId: W,
                disabled: Q,
                children: (0, i.jsx)(h.Kx8, {
                    placeholder: l ? Z.intl.string(Z.t.SD6LRU) : Z.intl.string(Z.t['aVhW/f']),
                    maxLength: 1500,
                    value: p,
                    rows: 2,
                    autosize: !0,
                    onChange: N,
                    'aria-labelledby': W,
                    disabled: Q
                })
            }),
            (0, i.jsx)(h.$i$, { className: y.divider }),
            (0, i.jsxs)(h.hjN, {
                title: Z.intl.string(Z.t['0kpTpK']),
                disabled: Q,
                children: [
                    (0, i.jsx)(h.R94, {
                        type: h.R94.Types.DESCRIPTION,
                        className: y.formDescription,
                        disabled: Q,
                        children: Z.intl.string(Z.t.i2rCwc)
                    }),
                    (0, i.jsx)(f.Z, {
                        image: L,
                        hint: F,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: y.coverImageUploader,
                        iconWrapperClassName: y.coverImageUploaderIconWrapper,
                        imageClassName: y.coverImageUploaderInner,
                        iconClassName: y.coverImageUploaderIcon,
                        onChange: Y,
                        'aria-label': z,
                        disabled: Q
                    }),
                    (0, i.jsx)(h.LZC, { size: 16 }),
                    (0, i.jsx)(C.Z, {
                        onChange: Y,
                        buttonCTA: F,
                        'aria-label': z,
                        disabled: Q,
                        look: h.zxk.Looks.OUTLINED,
                        color: h.zxk.Colors.PRIMARY
                    })
                ]
            }),
            l
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(h.$i$, { className: y.divider }),
                          (0, i.jsxs)(h.hjN, {
                              title: Z.intl.string(Z.t.aaZ9pK),
                              titleId: K,
                              disabled: Q,
                              children: [
                                  (0, i.jsx)(h.R94, {
                                      type: h.R94.Types.DESCRIPTION,
                                      className: y.formDescription,
                                      disabled: Q,
                                      children: Z.intl.string(Z.t.TILN8v)
                                  }),
                                  (0, i.jsx)(h.q4e, {
                                      value: k,
                                      placeholder: Z.intl.string(Z.t.XqMe3N),
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
                        (0, i.jsx)(h.$i$, { className: y.divider }),
                        (0, i.jsxs)(h.hjN, {
                            title: Z.intl.string(Z.t['+dtmw8']),
                            titleId: K,
                            disabled: Q,
                            children: [
                                (0, i.jsx)(h.R94, {
                                    type: h.R94.Types.DESCRIPTION,
                                    className: y.formDescription,
                                    disabled: Q,
                                    children: Z.intl.string(Z.t.n8WSWF)
                                }),
                                (0, i.jsx)(h.q4e, {
                                    value: w,
                                    placeholder: Z.intl.string(Z.t.XqMe3N),
                                    options: $,
                                    onChange: (e) => M(e)
                                })
                            ]
                        })
                    ]
                }),
            (0, i.jsx)(u.W, {
                component: 'div',
                className: y.contentRegion,
                children:
                    q &&
                    (0, i.jsx)(h.oXn, {
                        children: (0, i.jsx)(g.Z, {
                            submitting: U,
                            disabled: !X,
                            onReset: () => {
                                var e;
                                x(s), N(null !== (e = null == a ? void 0 : a.description) && void 0 !== e ? e : ''), O(c), P(null == a ? void 0 : a.store_page_guild_products_default_sort), M(null == a ? void 0 : a.server_shop_tab_order);
                            },
                            onSave: () => {
                                o()(null != a, 'Settings must be defined');
                                let e = {};
                                p !== a.description && (e.description = p), null != L && L.startsWith('data:') && (e.cover_image = L), m !== s && (e.full_server_gate = m === S.e3.ALL_CHANNELS), k !== a.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = k), w !== a.server_shop_tab_order && (e.server_shop_tab_order = w), d().isEmpty(e) || B(n.id, e);
                            },
                            saveButtonTooltip: X ? void 0 : Z.intl.string(Z.t['6HRvio'])
                        })
                    })
            })
        ]
    });
}
