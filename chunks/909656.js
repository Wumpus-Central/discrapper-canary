n.d(t, { Z: () => T }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    s = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(215569),
    d = n(477690),
    u = n(755721),
    g = n(481060),
    m = n(852860),
    p = n(313201),
    f = n(345861),
    h = n(208567),
    x = n(73346),
    b = n(624138),
    j = n(584825),
    _ = n(723047),
    v = n(927954),
    C = n(164000),
    O = n(587431),
    y = n(293810),
    N = n(333866),
    E = n(388032),
    I = n(858760);
let S = (0, b.Mg)(d.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);
function T(e) {
    var t;
    let { guild: n, isGuildProducts: l = !1 } = e,
        { format: a } = (0, C.Z)(n.id),
        d = (0, j.YB)(n.id),
        b = i.useCallback(() => {
            var e;
            return (null == d || null == (e = d.cover_image_asset) ? void 0 : e.application_id) == null
                ? null
                : (0, x._W)(d.cover_image_asset.application_id, d.cover_image_asset, S);
        }, [d]),
        [T, P] = i.useState(a),
        [w, Z] = i.useState(null != (t = null == d ? void 0 : d.description) ? t : ""),
        [R, D] = i.useState(b),
        [A, L] = i.useState(null == d ? void 0 : d.store_page_guild_products_default_sort),
        [k, G] = i.useState(null == d ? void 0 : d.server_shop_tab_order),
        { loading: M, error: U, updateSubscriptionsSettings: B } = (0, j.QV)(),
        { imageCTA: F, imageAriaLabel: H, setFilename: z } = (0, v.Z)(null == d ? void 0 : d.cover_image_asset),
        W = (0, p.Dt)();
    function V(e, t) {
        s()(null != e, "Null value not allowed"), null != t && z(t.name), D(e);
    }
    let K = i.useMemo(() => {
            var e;
            return (
                (null != w && w !== (null != (e = null == d ? void 0 : d.description) ? e : "")) ||
                (null == R ? void 0 : R.startsWith("data:")) === !0 ||
                T !== a ||
                (null == d ? void 0 : d.store_page_guild_products_default_sort) !== A ||
                (null == d ? void 0 : d.server_shop_tab_order) !== k
            );
        }, [R, a, w, d, T, A, k]),
        Y = null != w && "" !== w && null != R;
    i.useEffect(() => {
        var e;
        (null == d || null == (e = d.cover_image_asset) ? void 0 : e.application_id) != null &&
            D((0, x._W)(d.cover_image_asset.application_id, d.cover_image_asset, S));
    }, [null == d ? void 0 : d.cover_image_asset]);
    let q = (0, _.mY)(),
        X = i.useMemo(
            () =>
                N.kL.map((e) => ({
                    label: (0, N.eJ)(e),
                    value: e,
                })),
            [],
        ),
        J = i.useMemo(
            () => [
                {
                    label: E.intl.string(E.t.X6h2g4),
                    value: N.a3.PRODUCTS_FIRST,
                },
                {
                    label: E.intl.string(E.t["KzCF//"]),
                    value: N.a3.SUBS_FIRST,
                },
            ],
            [],
        );
    return (0, r.jsxs)("div", {
        className: I.container,
        children: [
            null != U &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(O.Z, { children: U.getAnyErrorMessage() }), (0, r.jsx)(g.LZC, { size: 16 })],
                }),
            l
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(g.FXm, {
                              label: E.intl.string(E.t["PAVi+/"]),
                              description: E.intl.string(E.t.x87YqK),
                              value: T,
                              onChange: (e) => {
                                  a !== e &&
                                      e === y.e3.ALL_CHANNELS &&
                                      (0, g.h7j)((e) => {
                                          var t, n;
                                          return (0, r.jsx)(
                                              g.ConfirmModal,
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
                                                      header: E.intl.string(E.t.dmVoOz),
                                                      confirmText: E.intl.string(E.t["NX+WJC"]),
                                                      confirmButtonColor: u.zx.Colors.BRAND,
                                                      children: (0, r.jsx)(g.Text, {
                                                          variant: "text-md/normal",
                                                          children: E.intl.string(E.t.mtwzdH),
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
                                      P(e);
                              },
                              disabled: q,
                              options: [
                                  {
                                      name: E.intl.string(E.t.rXqxhI),
                                      desc: E.intl.string(E.t.yQiJnZ),
                                      value: y.e3.SOME_CHANNELS,
                                      icon: g.VL1,
                                  },
                                  {
                                      name: E.intl.string(E.t.WzC9s7),
                                      desc: E.intl.string(E.t.WmagiI),
                                      value: y.e3.ALL_CHANNELS,
                                      icon: g._m8,
                                  },
                              ],
                          }),
                          (0, r.jsx)(g.izJ, { className: I.divider }),
                      ],
                  }),
            (0, r.jsx)(g.Kx8, {
                label: E.intl.string(E.t["1+Ho1d"]),
                placeholder: l ? E.intl.string(E.t.SD6LRU) : E.intl.string(E.t["aVhW/f"]),
                maxLength: 1500,
                value: w,
                autosize: !0,
                onChange: Z,
                "aria-labelledby": W,
                disabled: q,
            }),
            (0, r.jsx)(g.izJ, { className: I.divider }),
            (0, r.jsxs)(g.gNt, {
                label: E.intl.string(E.t["0kpTpK"]),
                description: E.intl.string(E.t.i2rCwc),
                children: [
                    (0, r.jsx)(h.Z, {
                        image: R,
                        hint: F,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: I.coverImageUploader,
                        iconWrapperClassName: I.coverImageUploaderIconWrapper,
                        imageClassName: I.coverImageUploaderInner,
                        iconClassName: I.coverImageUploaderIcon,
                        onChange: V,
                        "aria-label": H,
                        disabled: q,
                    }),
                    (0, r.jsx)(f.Z, {
                        onChange: V,
                        "aria-label": H,
                        disabled: q,
                        text: F,
                        variant: "secondary",
                        size: "md",
                    }),
                ],
            }),
            l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(g.izJ, { className: I.divider }),
                          (0, r.jsx)(g.q4e, {
                              label: E.intl.string(E.t.aaZ9pK),
                              description: E.intl.string(E.t.TILN8v),
                              value: A,
                              placeholder: E.intl.string(E.t.XqMe3N),
                              options: X,
                              onChange: (e) => L(e),
                          }),
                      ],
                  })
                : null,
            J.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(g.izJ, { className: I.divider }),
                        (0, r.jsx)(g.q4e, {
                            label: E.intl.string(E.t["+dtmw8"]),
                            description: E.intl.string(E.t.n8WSWF),
                            value: k,
                            placeholder: E.intl.string(E.t.XqMe3N),
                            options: J,
                            onChange: (e) => G(e),
                        }),
                    ],
                }),
            (0, r.jsx)(c.W, {
                component: "div",
                className: I.contentRegion,
                children:
                    K &&
                    (0, r.jsx)(g.oXn, {
                        children: (0, r.jsx)(m.Z, {
                            submitting: M,
                            disabled: !Y,
                            onReset: () => {
                                var e;
                                P(a),
                                    Z(null != (e = null == d ? void 0 : d.description) ? e : ""),
                                    D(b),
                                    L(null == d ? void 0 : d.store_page_guild_products_default_sort),
                                    G(null == d ? void 0 : d.server_shop_tab_order);
                            },
                            onSave: () => {
                                s()(null != d, "Settings must be defined");
                                let e = {};
                                w !== d.description && (e.description = w),
                                    null != R && R.startsWith("data:") && (e.cover_image = R),
                                    T !== a && (e.full_server_gate = T === y.e3.ALL_CHANNELS),
                                    A !== d.store_page_guild_products_default_sort &&
                                        (e.store_page_guild_products_default_sort = A),
                                    k !== d.server_shop_tab_order && (e.server_shop_tab_order = k),
                                    o().isEmpty(e) || B(n.id, e);
                            },
                            saveButtonTooltip: Y ? void 0 : E.intl.string(E.t["6HRvio"]),
                        }),
                    }),
            }),
        ],
    });
}
