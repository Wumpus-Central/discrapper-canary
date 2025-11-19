n.d(t, { Z: () => S }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(512722),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(215569),
    d = n(796027),
    u = n(477690),
    g = n(755721),
    m = n(481060),
    p = n(313201),
    f = n(345861),
    h = n(208567),
    b = n(73346),
    x = n(624138),
    j = n(584825),
    _ = n(723047),
    v = n(927954),
    O = n(164000),
    C = n(293810),
    y = n(333866),
    N = n(388032),
    E = n(947091);
let I = (0, x.Mg)(u.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);
function S(e) {
    var t;
    let { guild: n, isGuildProducts: l = !1 } = e,
        { format: s } = (0, O.Z)(n.id),
        u = (0, j.YB)(n.id),
        x = i.useCallback(() => {
            var e;
            return (null == u || null == (e = u.cover_image_asset) ? void 0 : e.application_id) == null
                ? null
                : (0, b._W)(u.cover_image_asset.application_id, u.cover_image_asset, I);
        }, [u]),
        [S, T] = i.useState(s),
        [P, w] = i.useState(null != (t = null == u ? void 0 : u.description) ? t : ""),
        [Z, R] = i.useState(x),
        [D, A] = i.useState(null == u ? void 0 : u.store_page_guild_products_default_sort),
        [L, k] = i.useState(null == u ? void 0 : u.server_shop_tab_order),
        { loading: G, error: M, updateSubscriptionsSettings: U } = (0, j.QV)(),
        { imageCTA: B, imageAriaLabel: F, setFilename: H } = (0, v.Z)(null == u ? void 0 : u.cover_image_asset),
        W = (0, p.Dt)();
    function z(e, t) {
        a()(null != e, "Null value not allowed"), null != t && H(t.name), R(e);
    }
    let V = i.useMemo(() => {
            var e;
            return (
                (null != P && P !== (null != (e = null == u ? void 0 : u.description) ? e : "")) ||
                (null == Z ? void 0 : Z.startsWith("data:")) === !0 ||
                S !== s ||
                (null == u ? void 0 : u.store_page_guild_products_default_sort) !== D ||
                (null == u ? void 0 : u.server_shop_tab_order) !== L
            );
        }, [Z, s, P, u, S, D, L]),
        K = null != P && "" !== P && null != Z;
    i.useEffect(() => {
        var e;
        (null == u || null == (e = u.cover_image_asset) ? void 0 : e.application_id) != null &&
            R((0, b._W)(u.cover_image_asset.application_id, u.cover_image_asset, I));
    }, [null == u ? void 0 : u.cover_image_asset]);
    let Y = (0, _.mY)(),
        q = i.useMemo(
            () =>
                y.kL.map((e) => ({
                    label: (0, y.eJ)(e),
                    value: e,
                })),
            [],
        ),
        X = i.useMemo(
            () => [
                {
                    label: N.intl.string(N.t.X6h2gz),
                    value: y.a3.PRODUCTS_FIRST,
                },
                {
                    label: N.intl.string(N.t["KzCF/6"]),
                    value: y.a3.SUBS_FIRST,
                },
            ],
            [],
        );
    return (0, r.jsxs)("div", {
        className: E.container,
        children: [
            null != M &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(m.M14, {
                            type: "critical",
                            children: M.getAnyErrorMessage(),
                        }),
                        (0, r.jsx)(m.LZC, { size: 16 }),
                    ],
                }),
            l
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(m.FXm, {
                              label: N.intl.string(N.t["PAVi++"]),
                              description: N.intl.string(N.t.x87YqH),
                              value: S,
                              onChange: (e) => {
                                  s !== e &&
                                      e === C.e3.ALL_CHANNELS &&
                                      (0, m.h7j)((e) => {
                                          var t, n;
                                          return (0, r.jsx)(
                                              m.ConfirmModal,
                                              ((t = (function (e) {
                                                  for (var t = 1; t < arguments.length; t++) {
                                                      var n = null != arguments[t] ? arguments[t] : {},
                                                          r = Object.keys(n);
                                                      "function" == typeof Object.getOwnPropertySymbols &&
                                                          (r = r.concat(
                                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                  return Object.getOwnPropertyDescriptor(n, e)
                                                                      .enumerable;
                                                              }),
                                                          )),
                                                          r.forEach(function (t) {
                                                              var r;
                                                              (r = n[t]),
                                                                  t in e
                                                                      ? Object.defineProperty(e, t, {
                                                                            value: r,
                                                                            enumerable: !0,
                                                                            configurable: !0,
                                                                            writable: !0,
                                                                        })
                                                                      : (e[t] = r);
                                                          });
                                                  }
                                                  return e;
                                              })({}, e)),
                                              (n = n =
                                                  {
                                                      header: N.intl.string(N.t.dmVoOz),
                                                      confirmText: N.intl.string(N.t["NX+WJN"]),
                                                      confirmButtonColor: g.zx.Colors.BRAND,
                                                      children: (0, r.jsx)(m.Text, {
                                                          variant: "text-md/normal",
                                                          children: N.intl.string(N.t.mtwzdD),
                                                      }),
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(n)).forEach(function (e) {
                                                        Object.defineProperty(
                                                            t,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(n, e),
                                                        );
                                                    }),
                                              t),
                                          );
                                      }),
                                      T(e);
                              },
                              disabled: Y,
                              options: [
                                  {
                                      name: N.intl.string(N.t.rXqxhF),
                                      desc: N.intl.string(N.t.yQiJne),
                                      value: C.e3.SOME_CHANNELS,
                                      icon: m.VL1,
                                  },
                                  {
                                      name: N.intl.string(N.t.WzC9s6),
                                      desc: N.intl.string(N.t.WmagiB),
                                      value: C.e3.ALL_CHANNELS,
                                      icon: m._m8,
                                  },
                              ],
                          }),
                          (0, r.jsx)(m.izJ, { className: E.divider }),
                      ],
                  }),
            (0, r.jsx)(m.Kx8, {
                label: N.intl.string(N.t["1+Ho1X"]),
                placeholder: l ? N.intl.string(N.t.SD6LRZ) : N.intl.string(N.t["aVhW/W"]),
                maxLength: 1500,
                value: P,
                autosize: !0,
                onChange: w,
                "aria-labelledby": W,
                disabled: Y,
            }),
            (0, r.jsx)(m.izJ, { className: E.divider }),
            (0, r.jsxs)(m.gNt, {
                label: N.intl.string(N.t["0kpTpM"]),
                description: N.intl.string(N.t.i2rCwT),
                children: [
                    (0, r.jsx)(h.Z, {
                        image: Z,
                        hint: B,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: E.coverImageUploader,
                        iconWrapperClassName: E.coverImageUploaderIconWrapper,
                        imageClassName: E.coverImageUploaderInner,
                        iconClassName: E.coverImageUploaderIcon,
                        onChange: z,
                        "aria-label": F,
                        disabled: Y,
                    }),
                    (0, r.jsx)(f.Z, {
                        onChange: z,
                        "aria-label": F,
                        disabled: Y,
                        text: B,
                        variant: "secondary",
                        size: "md",
                    }),
                ],
            }),
            l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(m.izJ, { className: E.divider }),
                          (0, r.jsx)(m.q4e, {
                              label: N.intl.string(N.t.aaZ9pE),
                              description: N.intl.string(N.t.TILN8u),
                              value: D,
                              placeholder: N.intl.string(N.t.XqMe3N),
                              options: q,
                              onChange: (e) => A(e),
                          }),
                      ],
                  })
                : null,
            X.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(m.izJ, { className: E.divider }),
                        (0, r.jsx)(m.q4e, {
                            label: N.intl.string(N.t["+dtmw+"]),
                            description: N.intl.string(N.t.n8WSWJ),
                            value: L,
                            placeholder: N.intl.string(N.t.XqMe3N),
                            options: X,
                            onChange: (e) => k(e),
                        }),
                    ],
                }),
            (0, r.jsx)(c.W, {
                component: "div",
                className: E.contentRegion,
                children:
                    V &&
                    (0, r.jsx)(m.oXn, {
                        children: (0, r.jsx)(d.Z, {
                            submitting: G,
                            disabled: !K,
                            onReset: () => {
                                var e;
                                T(s),
                                    w(null != (e = null == u ? void 0 : u.description) ? e : ""),
                                    R(x),
                                    A(null == u ? void 0 : u.store_page_guild_products_default_sort),
                                    k(null == u ? void 0 : u.server_shop_tab_order);
                            },
                            onSave: () => {
                                a()(null != u, "Settings must be defined");
                                let e = {};
                                P !== u.description && (e.description = P),
                                    null != Z && Z.startsWith("data:") && (e.cover_image = Z),
                                    S !== s && (e.full_server_gate = S === C.e3.ALL_CHANNELS),
                                    D !== u.store_page_guild_products_default_sort &&
                                        (e.store_page_guild_products_default_sort = D),
                                    L !== u.server_shop_tab_order && (e.server_shop_tab_order = L),
                                    o().isEmpty(e) || U(n.id, e);
                            },
                            saveButtonTooltip: K ? void 0 : N.intl.string(N.t["6HRvit"]),
                        }),
                    }),
            }),
        ],
    });
}
