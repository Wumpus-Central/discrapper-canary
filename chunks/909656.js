n.d(t, { Z: () => T }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(512722),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(215569),
    d = n(796027),
    u = n(199849),
    g = n(885387),
    m = n(477690),
    p = n(481060),
    f = n(313201),
    h = n(345861),
    b = n(208567),
    x = n(73346),
    j = n(624138),
    _ = n(584825),
    v = n(723047),
    O = n(927954),
    C = n(164000),
    y = n(293810),
    N = n(333866),
    E = n(388032),
    I = n(858760);
let S = (0, j.Mg)(m.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);
function T(e) {
    var t;
    let { guild: n, isGuildProducts: l = !1 } = e,
        { format: s } = (0, C.Z)(n.id),
        m = (0, _.YB)(n.id),
        j = i.useCallback(() => {
            var e;
            return (null == m || null == (e = m.cover_image_asset) ? void 0 : e.application_id) == null
                ? null
                : (0, x._W)(m.cover_image_asset.application_id, m.cover_image_asset, S);
        }, [m]),
        [T, P] = i.useState(s),
        [w, Z] = i.useState(null != (t = null == m ? void 0 : m.description) ? t : ""),
        [R, D] = i.useState(j),
        [A, L] = i.useState(null == m ? void 0 : m.store_page_guild_products_default_sort),
        [k, G] = i.useState(null == m ? void 0 : m.server_shop_tab_order),
        { loading: M, error: U, updateSubscriptionsSettings: B } = (0, _.QV)(),
        { imageCTA: F, imageAriaLabel: H, setFilename: z } = (0, O.Z)(null == m ? void 0 : m.cover_image_asset),
        W = (0, f.Dt)();
    function V(e, t) {
        a()(null != e, "Null value not allowed"), null != t && z(t.name), D(e);
    }
    let K = i.useMemo(() => {
            var e;
            return (
                (null != w && w !== (null != (e = null == m ? void 0 : m.description) ? e : "")) ||
                (null == R ? void 0 : R.startsWith("data:")) === !0 ||
                T !== s ||
                (null == m ? void 0 : m.store_page_guild_products_default_sort) !== A ||
                (null == m ? void 0 : m.server_shop_tab_order) !== k
            );
        }, [R, s, w, m, T, A, k]),
        Y = null != w && "" !== w && null != R;
    i.useEffect(() => {
        var e;
        (null == m || null == (e = m.cover_image_asset) ? void 0 : e.application_id) != null &&
            D((0, x._W)(m.cover_image_asset.application_id, m.cover_image_asset, S));
    }, [null == m ? void 0 : m.cover_image_asset]);
    let q = (0, v.mY)(),
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
                    label: E.intl.string(E.t.X6h2gz),
                    value: N.a3.PRODUCTS_FIRST,
                },
                {
                    label: E.intl.string(E.t["KzCF/6"]),
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
                    children: [
                        (0, r.jsx)(p.M14, {
                            type: "critical",
                            children: U.getAnyErrorMessage(),
                        }),
                        (0, r.jsx)(p.LZC, { size: 16 }),
                    ],
                }),
            l
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(p.FXm, {
                              label: E.intl.string(E.t["PAVi++"]),
                              description: E.intl.string(E.t.x87YqH),
                              value: T,
                              onChange: (e) => {
                                  s !== e &&
                                      e === y.e3.ALL_CHANNELS &&
                                      (0, g.Z)({
                                          title: E.intl.string(E.t.dmVoOz),
                                          subtitle: E.intl.string(E.t.mtwzdD),
                                          confirmText: E.intl.string(E.t["NX+WJN"]),
                                      }),
                                      P(e);
                              },
                              disabled: q,
                              options: [
                                  {
                                      name: E.intl.string(E.t.rXqxhF),
                                      desc: E.intl.string(E.t.yQiJne),
                                      value: y.e3.SOME_CHANNELS,
                                      icon: p.VL1,
                                  },
                                  {
                                      name: E.intl.string(E.t.WzC9s6),
                                      desc: E.intl.string(E.t.WmagiB),
                                      value: y.e3.ALL_CHANNELS,
                                      icon: p._m8,
                                  },
                              ],
                          }),
                          (0, r.jsx)(p.izJ, { className: I.divider }),
                      ],
                  }),
            (0, r.jsx)(p.Kx8, {
                label: E.intl.string(E.t["1+Ho1X"]),
                placeholder: l ? E.intl.string(E.t.SD6LRZ) : E.intl.string(E.t["aVhW/W"]),
                maxLength: 1500,
                value: w,
                autosize: !0,
                onChange: Z,
                "aria-labelledby": W,
                disabled: q,
            }),
            (0, r.jsx)(p.izJ, { className: I.divider }),
            (0, r.jsxs)(p.gNt, {
                label: E.intl.string(E.t["0kpTpM"]),
                description: E.intl.string(E.t.i2rCwT),
                children: [
                    (0, r.jsx)(b.Z, {
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
                    (0, r.jsx)(h.Z, {
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
                          (0, r.jsx)(p.izJ, { className: I.divider }),
                          (0, r.jsx)(u.y6, {
                              label: E.intl.string(E.t.aaZ9pE),
                              description: E.intl.string(E.t.TILN8u),
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
                        (0, r.jsx)(p.izJ, { className: I.divider }),
                        (0, r.jsx)(u.y6, {
                            label: E.intl.string(E.t["+dtmw+"]),
                            description: E.intl.string(E.t.n8WSWJ),
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
                    (0, r.jsx)(p.oXn, {
                        children: (0, r.jsx)(d.Z, {
                            submitting: M,
                            disabled: !Y,
                            onReset: () => {
                                var e;
                                P(s),
                                    Z(null != (e = null == m ? void 0 : m.description) ? e : ""),
                                    D(j),
                                    L(null == m ? void 0 : m.store_page_guild_products_default_sort),
                                    G(null == m ? void 0 : m.server_shop_tab_order);
                            },
                            onSave: () => {
                                a()(null != m, "Settings must be defined");
                                let e = {};
                                w !== m.description && (e.description = w),
                                    null != R && R.startsWith("data:") && (e.cover_image = R),
                                    T !== s && (e.full_server_gate = T === y.e3.ALL_CHANNELS),
                                    A !== m.store_page_guild_products_default_sort &&
                                        (e.store_page_guild_products_default_sort = A),
                                    k !== m.server_shop_tab_order && (e.server_shop_tab_order = k),
                                    o().isEmpty(e) || B(n.id, e);
                            },
                            saveButtonTooltip: Y ? void 0 : E.intl.string(E.t["6HRvit"]),
                        }),
                    }),
            }),
        ],
    });
}
