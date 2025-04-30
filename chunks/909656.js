n.d(t, { Z: () => A }), n(388685), n(953529);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    u = n.n(c),
    d = n(215569),
    m = n(477690),
    g = n(481060),
    p = n(852860),
    h = n(393238),
    f = n(211266),
    x = n(313201),
    b = n(345861),
    j = n(208567),
    _ = n(73346),
    v = n(624138),
    O = n(584825),
    C = n(723047),
    y = n(927954),
    N = n(164000),
    I = n(587431),
    E = n(293810),
    S = n(333866),
    T = n(388032),
    P = n(779382);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function R(e, t) {
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
let Z = (0, v.Mg)(m.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);
function D() {
    return [
        {
            name: T.intl.string(T.t.rXqxhI),
            desc: T.intl.string(T.t.yQiJnZ),
            value: E.e3.SOME_CHANNELS,
            icon: g.VL1
        },
        {
            name: T.intl.string(T.t.WzC9s7),
            desc: T.intl.string(T.t.WmagiI),
            value: E.e3.ALL_CHANNELS,
            icon: g._m8
        }
    ];
}
function k(e) {
    let { value: t, 'aria-labelledby': n, onChange: l, disabled: a = !1 } = e,
        { ref: o, width: c } = (0, h.ZP)(),
        u = (0, f.Z)(D),
        d = i.useMemo(
            () =>
                u.map((e) =>
                    R(w({}, e), {
                        icon: function () {
                            let { icon: t } = e;
                            return (0, r.jsx)('div', {
                                className: P.formatRadioIconWrapper,
                                children: (0, r.jsx)(t, { className: P.formatRadioIcon })
                            });
                        },
                        radioBarClassName: P.formatOptionRadioBar,
                        radioItemIconClassName: P.formatOptionRadioItemIcon
                    })
                ),
            [u]
        ),
        m = null != c && c >= 400;
    return (0, r.jsx)('div', {
        ref: o,
        children: (0, r.jsx)(g.FXm, {
            options: d,
            value: t,
            orientation: m ? 'horizontal' : 'vertical',
            size: g.FXm.Sizes.NONE,
            className: s()({ [P.radioGroupHorizontal]: m }),
            radioItemClassName: P.formatOptionRadioItem,
            onChange: (e) => {
                let { value: t } = e;
                return l(t);
            },
            'aria-labelledby': n,
            disabled: a
        })
    });
}
function A(e) {
    var t;
    let { guild: n, isGuildProducts: l = !1 } = e,
        { format: s } = (0, N.Z)(n.id),
        a = (0, O.YB)(n.id),
        c = i.useCallback(() => {
            var e;
            return (null == a || null == (e = a.cover_image_asset) ? void 0 : e.application_id) == null ? null : (0, _._W)(a.cover_image_asset.application_id, a.cover_image_asset, Z);
        }, [a]),
        [m, h] = i.useState(s),
        [f, v] = i.useState(null != (t = null == a ? void 0 : a.description) ? t : ''),
        [D, A] = i.useState(c),
        [L, M] = i.useState(null == a ? void 0 : a.store_page_guild_products_default_sort),
        [G, U] = i.useState(null == a ? void 0 : a.server_shop_tab_order),
        { loading: B, error: F, updateSubscriptionsSettings: z } = (0, O.QV)(),
        { imageCTA: H, imageAriaLabel: W, setFilename: V } = (0, y.Z)(null == a ? void 0 : a.cover_image_asset),
        Y = (0, x.Dt)(),
        K = (0, x.Dt)(),
        X = (0, x.Dt)();
    function q(e, t) {
        o()(null != e, 'Null value not allowed'), null != t && V(t.name), A(e);
    }
    let Q = i.useMemo(() => {
            var e;
            return (null != f && f !== (null != (e = null == a ? void 0 : a.description) ? e : '')) || (null == D ? void 0 : D.startsWith('data:')) === !0 || m !== s || (null == a ? void 0 : a.store_page_guild_products_default_sort) !== L || (null == a ? void 0 : a.server_shop_tab_order) !== G;
        }, [D, s, f, a, m, L, G]),
        J = null != f && '' !== f && null != D;
    i.useEffect(() => {
        var e;
        (null == a || null == (e = a.cover_image_asset) ? void 0 : e.application_id) != null && A((0, _._W)(a.cover_image_asset.application_id, a.cover_image_asset, Z));
    }, [null == a ? void 0 : a.cover_image_asset]);
    let $ = (0, C.mY)(),
        ee = i.useMemo(
            () =>
                S.kL.map((e) => ({
                    label: (0, S.eJ)(e),
                    value: e
                })),
            []
        ),
        et = i.useMemo(
            () => [
                {
                    label: T.intl.string(T.t.X6h2g4),
                    value: S.a3.PRODUCTS_FIRST
                },
                {
                    label: T.intl.string(T.t['KzCF//']),
                    value: S.a3.SUBS_FIRST
                }
            ],
            []
        );
    return (0, r.jsxs)('div', {
        className: P.container,
        children: [
            null != F &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(I.Z, { children: F.getAnyErrorMessage() }), (0, r.jsx)(g.LZC, { size: 16 })]
                }),
            l
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(g.hjN, {
                              title: T.intl.string(T.t['PAVi+/']),
                              titleId: Y,
                              disabled: $,
                              children: [
                                  (0, r.jsx)(g.R94, {
                                      type: g.R94.Types.DESCRIPTION,
                                      className: P.formDescription,
                                      disabled: $,
                                      children: T.intl.string(T.t.x87YqK)
                                  }),
                                  (0, r.jsx)(k, {
                                      value: m,
                                      onChange: (e) => {
                                          s !== e &&
                                              e === E.e3.ALL_CHANNELS &&
                                              (0, g.h7j)((e) =>
                                                  (0, r.jsx)(
                                                      g.ConfirmModal,
                                                      R(w({}, e), {
                                                          header: T.intl.string(T.t.dmVoOz),
                                                          confirmText: T.intl.string(T.t['NX+WJC']),
                                                          confirmButtonColor: g.zxk.Colors.BRAND,
                                                          children: (0, r.jsx)(g.Text, {
                                                              variant: 'text-md/normal',
                                                              children: T.intl.string(T.t.mtwzdH)
                                                          })
                                                      })
                                                  )
                                              ),
                                              h(e);
                                      },
                                      'aria-labelledby': Y,
                                      disabled: $
                                  })
                              ]
                          }),
                          (0, r.jsx)(g.$i$, { className: P.divider })
                      ]
                  }),
            (0, r.jsx)(g.hjN, {
                title: T.intl.string(T.t['1+Ho1d']),
                titleId: K,
                disabled: $,
                children: (0, r.jsx)(g.Kx8, {
                    placeholder: l ? T.intl.string(T.t.SD6LRU) : T.intl.string(T.t['aVhW/f']),
                    maxLength: 1500,
                    value: f,
                    rows: 2,
                    autosize: !0,
                    onChange: v,
                    'aria-labelledby': K,
                    disabled: $
                })
            }),
            (0, r.jsx)(g.$i$, { className: P.divider }),
            (0, r.jsxs)(g.hjN, {
                title: T.intl.string(T.t['0kpTpK']),
                disabled: $,
                children: [
                    (0, r.jsx)(g.R94, {
                        type: g.R94.Types.DESCRIPTION,
                        className: P.formDescription,
                        disabled: $,
                        children: T.intl.string(T.t.i2rCwc)
                    }),
                    (0, r.jsx)(j.Z, {
                        image: D,
                        hint: H,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: P.coverImageUploader,
                        iconWrapperClassName: P.coverImageUploaderIconWrapper,
                        imageClassName: P.coverImageUploaderInner,
                        iconClassName: P.coverImageUploaderIcon,
                        onChange: q,
                        'aria-label': W,
                        disabled: $
                    }),
                    (0, r.jsx)(g.LZC, { size: 16 }),
                    (0, r.jsx)(b.Z, {
                        onChange: q,
                        buttonCTA: H,
                        'aria-label': W,
                        disabled: $,
                        look: g.zxk.Looks.OUTLINED,
                        color: g.zxk.Colors.PRIMARY
                    })
                ]
            }),
            l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(g.$i$, { className: P.divider }),
                          (0, r.jsxs)(g.hjN, {
                              title: T.intl.string(T.t.aaZ9pK),
                              titleId: X,
                              disabled: $,
                              children: [
                                  (0, r.jsx)(g.R94, {
                                      type: g.R94.Types.DESCRIPTION,
                                      className: P.formDescription,
                                      disabled: $,
                                      children: T.intl.string(T.t.TILN8v)
                                  }),
                                  (0, r.jsx)(g.q4e, {
                                      value: L,
                                      placeholder: T.intl.string(T.t.XqMe3N),
                                      options: ee,
                                      onChange: (e) => M(e)
                                  })
                              ]
                          })
                      ]
                  })
                : null,
            et.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(g.$i$, { className: P.divider }),
                        (0, r.jsxs)(g.hjN, {
                            title: T.intl.string(T.t['+dtmw8']),
                            titleId: X,
                            disabled: $,
                            children: [
                                (0, r.jsx)(g.R94, {
                                    type: g.R94.Types.DESCRIPTION,
                                    className: P.formDescription,
                                    disabled: $,
                                    children: T.intl.string(T.t.n8WSWF)
                                }),
                                (0, r.jsx)(g.q4e, {
                                    value: G,
                                    placeholder: T.intl.string(T.t.XqMe3N),
                                    options: et,
                                    onChange: (e) => U(e)
                                })
                            ]
                        })
                    ]
                }),
            (0, r.jsx)(d.W, {
                component: 'div',
                className: P.contentRegion,
                children:
                    Q &&
                    (0, r.jsx)(g.oXn, {
                        children: (0, r.jsx)(p.Z, {
                            submitting: B,
                            disabled: !J,
                            onReset: () => {
                                var e;
                                h(s), v(null != (e = null == a ? void 0 : a.description) ? e : ''), A(c), M(null == a ? void 0 : a.store_page_guild_products_default_sort), U(null == a ? void 0 : a.server_shop_tab_order);
                            },
                            onSave: () => {
                                o()(null != a, 'Settings must be defined');
                                let e = {};
                                f !== a.description && (e.description = f), null != D && D.startsWith('data:') && (e.cover_image = D), m !== s && (e.full_server_gate = m === E.e3.ALL_CHANNELS), L !== a.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = L), G !== a.server_shop_tab_order && (e.server_shop_tab_order = G), u().isEmpty(e) || z(n.id, e);
                            },
                            saveButtonTooltip: J ? void 0 : T.intl.string(T.t['6HRvio'])
                        })
                    })
            })
        ]
    });
}
