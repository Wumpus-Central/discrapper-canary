(n.d(t, { Z: () => k }), n(388685), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    d = n.n(c),
    u = n(215569),
    m = n(477690),
    g = n(755721),
    p = n(481060),
    f = n(852860),
    h = n(393238),
    x = n(211266),
    b = n(313201),
    j = n(345861),
    v = n(208567),
    _ = n(73346),
    O = n(624138),
    y = n(584825),
    C = n(723047),
    N = n(927954),
    I = n(164000),
    E = n(587431),
    S = n(293810),
    T = n(333866),
    P = n(388032),
    w = n(779382);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = (0, O.Mg)(m.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);
function A() {
    return [
        {
            name: P.intl.string(P.t.rXqxhI),
            desc: P.intl.string(P.t.yQiJnZ),
            value: S.e3.SOME_CHANNELS,
            icon: p.VL1
        },
        {
            name: P.intl.string(P.t.WzC9s7),
            desc: P.intl.string(P.t.WmagiI),
            value: S.e3.ALL_CHANNELS,
            icon: p._m8
        }
    ];
}
function L(e) {
    let { value: t, 'aria-labelledby': n, onChange: l, disabled: a = !1 } = e,
        { ref: o, width: c } = (0, h.ZP)(),
        d = (0, x.Z)(A),
        u = i.useMemo(
            () =>
                d.map((e) =>
                    Z(R({}, e), {
                        icon: function () {
                            let { icon: t } = e;
                            return (0, r.jsx)('div', {
                                className: w.formatRadioIconWrapper,
                                children: (0, r.jsx)(t, { className: w.formatRadioIcon })
                            });
                        },
                        radioBarClassName: w.formatOptionRadioBar,
                        radioItemIconClassName: w.formatOptionRadioItemIcon
                    })
                ),
            [d]
        ),
        m = null != c && c >= 400;
    return (0, r.jsx)('div', {
        ref: o,
        children: (0, r.jsx)(p.FXm, {
            options: u,
            value: t,
            orientation: m ? 'horizontal' : 'vertical',
            size: p.FXm.Sizes.NONE,
            className: s()({ [w.radioGroupHorizontal]: m }),
            radioItemClassName: w.formatOptionRadioItem,
            onChange: (e) => {
                let { value: t } = e;
                return l(t);
            },
            'aria-labelledby': n,
            disabled: a
        })
    });
}
function k(e) {
    var t;
    let { guild: n, isGuildProducts: l = !1 } = e,
        { format: s } = (0, I.Z)(n.id),
        a = (0, y.YB)(n.id),
        c = i.useCallback(() => {
            var e;
            return (null == a || null == (e = a.cover_image_asset) ? void 0 : e.application_id) == null ? null : (0, _._W)(a.cover_image_asset.application_id, a.cover_image_asset, D);
        }, [a]),
        [m, h] = i.useState(s),
        [x, O] = i.useState(null != (t = null == a ? void 0 : a.description) ? t : ''),
        [A, k] = i.useState(c),
        [M, G] = i.useState(null == a ? void 0 : a.store_page_guild_products_default_sort),
        [U, B] = i.useState(null == a ? void 0 : a.server_shop_tab_order),
        { loading: F, error: H, updateSubscriptionsSettings: z } = (0, y.QV)(),
        { imageCTA: W, imageAriaLabel: V, setFilename: Y } = (0, N.Z)(null == a ? void 0 : a.cover_image_asset),
        K = (0, b.Dt)(),
        X = (0, b.Dt)(),
        q = (0, b.Dt)();
    function J(e, t) {
        (o()(null != e, 'Null value not allowed'), null != t && Y(t.name), k(e));
    }
    let Q = i.useMemo(() => {
            var e;
            return (null != x && x !== (null != (e = null == a ? void 0 : a.description) ? e : '')) || (null == A ? void 0 : A.startsWith('data:')) === !0 || m !== s || (null == a ? void 0 : a.store_page_guild_products_default_sort) !== M || (null == a ? void 0 : a.server_shop_tab_order) !== U;
        }, [A, s, x, a, m, M, U]),
        $ = null != x && '' !== x && null != A;
    i.useEffect(() => {
        var e;
        (null == a || null == (e = a.cover_image_asset) ? void 0 : e.application_id) != null && k((0, _._W)(a.cover_image_asset.application_id, a.cover_image_asset, D));
    }, [null == a ? void 0 : a.cover_image_asset]);
    let ee = (0, C.mY)(),
        et = i.useMemo(
            () =>
                T.kL.map((e) => ({
                    label: (0, T.eJ)(e),
                    value: e
                })),
            []
        ),
        en = i.useMemo(
            () => [
                {
                    label: P.intl.string(P.t.X6h2g4),
                    value: T.a3.PRODUCTS_FIRST
                },
                {
                    label: P.intl.string(P.t['KzCF//']),
                    value: T.a3.SUBS_FIRST
                }
            ],
            []
        );
    return (0, r.jsxs)('div', {
        className: w.container,
        children: [
            null != H &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(E.Z, { children: H.getAnyErrorMessage() }), (0, r.jsx)(p.LZC, { size: 16 })]
                }),
            l
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(p.hjN, {
                              title: P.intl.string(P.t['PAVi+/']),
                              titleId: K,
                              disabled: ee,
                              children: [
                                  (0, r.jsx)(p.R94, {
                                      type: p.R94.Types.DESCRIPTION,
                                      className: w.formDescription,
                                      disabled: ee,
                                      children: P.intl.string(P.t.x87YqK)
                                  }),
                                  (0, r.jsx)(L, {
                                      value: m,
                                      onChange: (e) => {
                                          (s !== e &&
                                              e === S.e3.ALL_CHANNELS &&
                                              (0, p.h7j)((e) =>
                                                  (0, r.jsx)(
                                                      p.ConfirmModal,
                                                      Z(R({}, e), {
                                                          header: P.intl.string(P.t.dmVoOz),
                                                          confirmText: P.intl.string(P.t['NX+WJC']),
                                                          confirmButtonColor: g.zx.Colors.BRAND,
                                                          children: (0, r.jsx)(p.Text, {
                                                              variant: 'text-md/normal',
                                                              children: P.intl.string(P.t.mtwzdH)
                                                          })
                                                      })
                                                  )
                                              ),
                                              h(e));
                                      },
                                      'aria-labelledby': K,
                                      disabled: ee
                                  })
                              ]
                          }),
                          (0, r.jsx)(p.$i$, { className: w.divider })
                      ]
                  }),
            (0, r.jsx)(p.hjN, {
                title: P.intl.string(P.t['1+Ho1d']),
                titleId: X,
                disabled: ee,
                children: (0, r.jsx)(p.Kx8, {
                    placeholder: l ? P.intl.string(P.t.SD6LRU) : P.intl.string(P.t['aVhW/f']),
                    maxLength: 1500,
                    value: x,
                    rows: 2,
                    autosize: !0,
                    onChange: O,
                    'aria-labelledby': X,
                    disabled: ee
                })
            }),
            (0, r.jsx)(p.$i$, { className: w.divider }),
            (0, r.jsxs)(p.hjN, {
                title: P.intl.string(P.t['0kpTpK']),
                disabled: ee,
                children: [
                    (0, r.jsx)(p.R94, {
                        type: p.R94.Types.DESCRIPTION,
                        className: w.formDescription,
                        disabled: ee,
                        children: P.intl.string(P.t.i2rCwc)
                    }),
                    (0, r.jsx)(v.Z, {
                        image: A,
                        hint: W,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: w.coverImageUploader,
                        iconWrapperClassName: w.coverImageUploaderIconWrapper,
                        imageClassName: w.coverImageUploaderInner,
                        iconClassName: w.coverImageUploaderIcon,
                        onChange: J,
                        'aria-label': V,
                        disabled: ee
                    }),
                    (0, r.jsx)(p.LZC, { size: 16 }),
                    (0, r.jsx)(j.Z, {
                        onChange: J,
                        buttonCTA: W,
                        'aria-label': V,
                        disabled: ee,
                        look: g.zx.Looks.OUTLINED,
                        color: g.zx.Colors.PRIMARY
                    })
                ]
            }),
            l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(p.$i$, { className: w.divider }),
                          (0, r.jsxs)(p.hjN, {
                              title: P.intl.string(P.t.aaZ9pK),
                              titleId: q,
                              disabled: ee,
                              children: [
                                  (0, r.jsx)(p.R94, {
                                      type: p.R94.Types.DESCRIPTION,
                                      className: w.formDescription,
                                      disabled: ee,
                                      children: P.intl.string(P.t.TILN8v)
                                  }),
                                  (0, r.jsx)(p.q4e, {
                                      value: M,
                                      placeholder: P.intl.string(P.t.XqMe3N),
                                      options: et,
                                      onChange: (e) => G(e)
                                  })
                              ]
                          })
                      ]
                  })
                : null,
            en.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(p.$i$, { className: w.divider }),
                        (0, r.jsxs)(p.hjN, {
                            title: P.intl.string(P.t['+dtmw8']),
                            titleId: q,
                            disabled: ee,
                            children: [
                                (0, r.jsx)(p.R94, {
                                    type: p.R94.Types.DESCRIPTION,
                                    className: w.formDescription,
                                    disabled: ee,
                                    children: P.intl.string(P.t.n8WSWF)
                                }),
                                (0, r.jsx)(p.q4e, {
                                    value: U,
                                    placeholder: P.intl.string(P.t.XqMe3N),
                                    options: en,
                                    onChange: (e) => B(e)
                                })
                            ]
                        })
                    ]
                }),
            (0, r.jsx)(u.W, {
                component: 'div',
                className: w.contentRegion,
                children:
                    Q &&
                    (0, r.jsx)(p.oXn, {
                        children: (0, r.jsx)(f.Z, {
                            submitting: F,
                            disabled: !$,
                            onReset: () => {
                                var e;
                                (h(s), O(null != (e = null == a ? void 0 : a.description) ? e : ''), k(c), G(null == a ? void 0 : a.store_page_guild_products_default_sort), B(null == a ? void 0 : a.server_shop_tab_order));
                            },
                            onSave: () => {
                                o()(null != a, 'Settings must be defined');
                                let e = {};
                                (x !== a.description && (e.description = x), null != A && A.startsWith('data:') && (e.cover_image = A), m !== s && (e.full_server_gate = m === S.e3.ALL_CHANNELS), M !== a.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = M), U !== a.server_shop_tab_order && (e.server_shop_tab_order = U), d().isEmpty(e) || z(n.id, e));
                            },
                            saveButtonTooltip: $ ? void 0 : P.intl.string(P.t['6HRvio'])
                        })
                    })
            })
        ]
    });
}
