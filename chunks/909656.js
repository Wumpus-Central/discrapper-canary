n.d(t, { Z: () => k }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(392711),
    d = n.n(c),
    u = n(215569),
    m = n(477690),
    g = n(481060),
    p = n(852860),
    h = n(393238),
    f = n(211266),
    b = n(313201),
    x = n(345861),
    j = n(208567),
    N = n(73346),
    _ = n(624138),
    v = n(584825),
    C = n(723047),
    O = n(927954),
    y = n(164000),
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
let Z = (0, _.Mg)(m.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);
function D() {
    return [
        {
            name: T.NW.string(T.t.rXqxhI),
            desc: T.NW.string(T.t.yQiJnZ),
            value: E.e3.SOME_CHANNELS,
            icon: g.VL1
        },
        {
            name: T.NW.string(T.t.WzC9s7),
            desc: T.NW.string(T.t.WmagiI),
            value: E.e3.ALL_CHANNELS,
            icon: g._m8
        }
    ];
}
function A(e) {
    let { value: t, 'aria-labelledby': n, onChange: s, disabled: l = !1 } = e,
        { ref: o, width: c } = (0, h.Z)(),
        d = (0, f.Z)(D),
        u = i.useMemo(
            () =>
                d.map((e) =>
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
            [d]
        ),
        m = null != c && c >= 400;
    return (0, r.jsx)('div', {
        ref: o,
        children: (0, r.jsx)(g.FXm, {
            options: u,
            value: t,
            orientation: m ? 'horizontal' : 'vertical',
            size: g.FXm.Sizes.NONE,
            className: a()({ [P.radioGroupHorizontal]: m }),
            radioItemClassName: P.formatOptionRadioItem,
            onChange: (e) => {
                let { value: t } = e;
                return s(t);
            },
            'aria-labelledby': n,
            disabled: l
        })
    });
}
function k(e) {
    var t;
    let { guild: n, isGuildProducts: s = !1 } = e,
        { format: a } = (0, y.Z)(n.id),
        l = (0, v.YB)(n.id),
        c = i.useCallback(() => {
            var e;
            return (null == l || null == (e = l.cover_image_asset) ? void 0 : e.application_id) == null ? null : (0, N._W)(l.cover_image_asset.application_id, l.cover_image_asset, Z);
        }, [l]),
        [m, h] = i.useState(a),
        [f, _] = i.useState(null != (t = null == l ? void 0 : l.description) ? t : ''),
        [D, k] = i.useState(c),
        [W, L] = i.useState(null == l ? void 0 : l.store_page_guild_products_default_sort),
        [M, G] = i.useState(null == l ? void 0 : l.server_shop_tab_order),
        { loading: U, error: B, updateSubscriptionsSettings: F } = (0, v.QV)(),
        { imageCTA: z, imageAriaLabel: H, setFilename: V } = (0, O.Z)(null == l ? void 0 : l.cover_image_asset),
        Y = (0, b.Dt)(),
        K = (0, b.Dt)(),
        q = (0, b.Dt)();
    function X(e, t) {
        o()(null != e, 'Null value not allowed'), null != t && V(t.name), k(e);
    }
    let Q = i.useMemo(() => {
            var e;
            return (null != f && f !== (null != (e = null == l ? void 0 : l.description) ? e : '')) || (null == D ? void 0 : D.startsWith('data:')) === !0 || m !== a || (null == l ? void 0 : l.store_page_guild_products_default_sort) !== W || (null == l ? void 0 : l.server_shop_tab_order) !== M;
        }, [D, a, f, l, m, W, M]),
        J = null != f && '' !== f && null != D;
    i.useEffect(() => {
        var e;
        (null == l || null == (e = l.cover_image_asset) ? void 0 : e.application_id) != null && k((0, N._W)(l.cover_image_asset.application_id, l.cover_image_asset, Z));
    }, [null == l ? void 0 : l.cover_image_asset]);
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
                    label: T.NW.string(T.t.X6h2g4),
                    value: S.a3.PRODUCTS_FIRST
                },
                {
                    label: T.NW.string(T.t['KzCF//']),
                    value: S.a3.SUBS_FIRST
                }
            ],
            []
        );
    return (0, r.jsxs)('div', {
        className: P.container,
        children: [
            null != B &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(I.Z, { children: B.getAnyErrorMessage() }), (0, r.jsx)(g.LZC, { size: 16 })]
                }),
            s
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(g.hjN, {
                              title: T.NW.string(T.t['PAVi+/']),
                              titleId: Y,
                              disabled: $,
                              children: [
                                  (0, r.jsx)(g.R94, {
                                      type: g.R94.Types.DESCRIPTION,
                                      className: P.formDescription,
                                      disabled: $,
                                      children: T.NW.string(T.t.x87YqK)
                                  }),
                                  (0, r.jsx)(A, {
                                      value: m,
                                      onChange: (e) => {
                                          a !== e &&
                                              e === E.e3.ALL_CHANNELS &&
                                              (0, g.h7j)((e) =>
                                                  (0, r.jsx)(
                                                      g.ConfirmModal,
                                                      R(w({}, e), {
                                                          header: T.NW.string(T.t.dmVoOz),
                                                          confirmText: T.NW.string(T.t['NX+WJC']),
                                                          confirmButtonColor: g.zxk.Colors.BRAND,
                                                          children: (0, r.jsx)(g.Text, {
                                                              variant: 'text-md/normal',
                                                              children: T.NW.string(T.t.mtwzdH)
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
                title: T.NW.string(T.t['1+Ho1d']),
                titleId: K,
                disabled: $,
                children: (0, r.jsx)(g.Kx8, {
                    placeholder: s ? T.NW.string(T.t.SD6LRU) : T.NW.string(T.t['aVhW/f']),
                    maxLength: 1500,
                    value: f,
                    rows: 2,
                    autosize: !0,
                    onChange: _,
                    'aria-labelledby': K,
                    disabled: $
                })
            }),
            (0, r.jsx)(g.$i$, { className: P.divider }),
            (0, r.jsxs)(g.hjN, {
                title: T.NW.string(T.t['0kpTpK']),
                disabled: $,
                children: [
                    (0, r.jsx)(g.R94, {
                        type: g.R94.Types.DESCRIPTION,
                        className: P.formDescription,
                        disabled: $,
                        children: T.NW.string(T.t.i2rCwc)
                    }),
                    (0, r.jsx)(j.Z, {
                        image: D,
                        hint: z,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: P.coverImageUploader,
                        iconWrapperClassName: P.coverImageUploaderIconWrapper,
                        imageClassName: P.coverImageUploaderInner,
                        iconClassName: P.coverImageUploaderIcon,
                        onChange: X,
                        'aria-label': H,
                        disabled: $
                    }),
                    (0, r.jsx)(g.LZC, { size: 16 }),
                    (0, r.jsx)(x.Z, {
                        onChange: X,
                        buttonCTA: z,
                        'aria-label': H,
                        disabled: $,
                        look: g.zxk.Looks.OUTLINED,
                        color: g.zxk.Colors.PRIMARY
                    })
                ]
            }),
            s
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(g.$i$, { className: P.divider }),
                          (0, r.jsxs)(g.hjN, {
                              title: T.NW.string(T.t.aaZ9pK),
                              titleId: q,
                              disabled: $,
                              children: [
                                  (0, r.jsx)(g.R94, {
                                      type: g.R94.Types.DESCRIPTION,
                                      className: P.formDescription,
                                      disabled: $,
                                      children: T.NW.string(T.t.TILN8v)
                                  }),
                                  (0, r.jsx)(g.q4e, {
                                      value: W,
                                      placeholder: T.NW.string(T.t.XqMe3N),
                                      options: ee,
                                      onChange: (e) => L(e)
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
                            title: T.NW.string(T.t['+dtmw8']),
                            titleId: q,
                            disabled: $,
                            children: [
                                (0, r.jsx)(g.R94, {
                                    type: g.R94.Types.DESCRIPTION,
                                    className: P.formDescription,
                                    disabled: $,
                                    children: T.NW.string(T.t.n8WSWF)
                                }),
                                (0, r.jsx)(g.q4e, {
                                    value: M,
                                    placeholder: T.NW.string(T.t.XqMe3N),
                                    options: et,
                                    onChange: (e) => G(e)
                                })
                            ]
                        })
                    ]
                }),
            (0, r.jsx)(u.W, {
                component: 'div',
                className: P.contentRegion,
                children:
                    Q &&
                    (0, r.jsx)(g.oXn, {
                        children: (0, r.jsx)(p.Z, {
                            submitting: U,
                            disabled: !J,
                            onReset: () => {
                                var e;
                                h(a), _(null != (e = null == l ? void 0 : l.description) ? e : ''), k(c), L(null == l ? void 0 : l.store_page_guild_products_default_sort), G(null == l ? void 0 : l.server_shop_tab_order);
                            },
                            onSave: () => {
                                o()(null != l, 'Settings must be defined');
                                let e = {};
                                f !== l.description && (e.description = f), null != D && D.startsWith('data:') && (e.cover_image = D), m !== a && (e.full_server_gate = m === E.e3.ALL_CHANNELS), W !== l.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = W), M !== l.server_shop_tab_order && (e.server_shop_tab_order = M), d().isEmpty(e) || F(n.id, e);
                            },
                            saveButtonTooltip: J ? void 0 : T.NW.string(T.t['6HRvio'])
                        })
                    })
            })
        ]
    });
}
