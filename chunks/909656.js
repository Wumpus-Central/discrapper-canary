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
    f = n(477690),
    m = n(481060),
    b = n(313201),
    p = n(345861),
    h = n(208567),
    x = n(73346),
    j = n(624138),
    v = n(584825),
    O = n(723047),
    C = n(927954),
    y = n(164000),
    N = n(293810),
    E = n(333866),
    I = n(388032),
    S = n(719096);
let _ = (0, j.Mg)(f.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);
function T(e) {
    var t;
    let { guild: n, isGuildProducts: l = !1 } = e,
        { format: s } = (0, y.Z)(n.id),
        f = (0, v.YB)(n.id),
        j = i.useCallback(() => {
            var e;
            return (null == f || null == (e = f.cover_image_asset) ? void 0 : e.application_id) == null
                ? null
                : (0, x._W)(f.cover_image_asset.application_id, f.cover_image_asset, _);
        }, [f]),
        [T, P] = i.useState(s),
        [w, Z] = i.useState(null != (t = null == f ? void 0 : f.description) ? t : ""),
        [R, D] = i.useState(j),
        [A, L] = i.useState(null == f ? void 0 : f.store_page_guild_products_default_sort),
        [k, G] = i.useState(null == f ? void 0 : f.server_shop_tab_order),
        { loading: M, error: U, updateSubscriptionsSettings: B } = (0, v.QV)(),
        { imageCTA: F, imageAriaLabel: H, setFilename: W } = (0, C.Z)(null == f ? void 0 : f.cover_image_asset),
        z = (0, b.Dt)();
    function V(e, t) {
        a()(null != e, "Null value not allowed"), null != t && W(t.name), D(e);
    }
    let K = i.useMemo(() => {
            var e;
            return (
                (null != w && w !== (null != (e = null == f ? void 0 : f.description) ? e : "")) ||
                (null == R ? void 0 : R.startsWith("data:")) === !0 ||
                T !== s ||
                (null == f ? void 0 : f.store_page_guild_products_default_sort) !== A ||
                (null == f ? void 0 : f.server_shop_tab_order) !== k
            );
        }, [R, s, w, f, T, A, k]),
        Y = null != w && "" !== w && null != R;
    i.useEffect(() => {
        var e;
        (null == f || null == (e = f.cover_image_asset) ? void 0 : e.application_id) != null &&
            D((0, x._W)(f.cover_image_asset.application_id, f.cover_image_asset, _));
    }, [null == f ? void 0 : f.cover_image_asset]);
    let q = (0, O.mY)(),
        X = i.useMemo(
            () =>
                E.kL.map((e) => ({
                    label: (0, E.eJ)(e),
                    value: e,
                })),
            [],
        ),
        J = i.useMemo(
            () => [
                {
                    label: I.intl.string(I.t.X6h2gz),
                    value: E.a3.PRODUCTS_FIRST,
                },
                {
                    label: I.intl.string(I.t["KzCF/6"]),
                    value: E.a3.SUBS_FIRST,
                },
            ],
            [],
        );
    return (0, r.jsxs)("div", {
        className: S.container,
        children: [
            null != U &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(m.M14, {
                            type: "critical",
                            children: U.getAnyErrorMessage(),
                        }),
                        (0, r.jsx)(m.LZC, { size: 16 }),
                    ],
                }),
            l
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(m.FXm, {
                              label: I.intl.string(I.t["PAVi++"]),
                              description: I.intl.string(I.t.x87YqH),
                              value: T,
                              onChange: (e) => {
                                  s !== e &&
                                      e === N.e3.ALL_CHANNELS &&
                                      (0, g.Z)({
                                          title: I.intl.string(I.t.dmVoOz),
                                          subtitle: I.intl.string(I.t.mtwzdD),
                                          confirmText: I.intl.string(I.t["NX+WJN"]),
                                      }),
                                      P(e);
                              },
                              disabled: q,
                              options: [
                                  {
                                      name: I.intl.string(I.t.rXqxhF),
                                      desc: I.intl.string(I.t.yQiJne),
                                      value: N.e3.SOME_CHANNELS,
                                      icon: m.VL1,
                                  },
                                  {
                                      name: I.intl.string(I.t.WzC9s6),
                                      desc: I.intl.string(I.t.WmagiB),
                                      value: N.e3.ALL_CHANNELS,
                                      icon: m._m8,
                                  },
                              ],
                          }),
                          (0, r.jsx)(m.izJ, { className: S.divider }),
                      ],
                  }),
            (0, r.jsx)(m.Kx8, {
                label: I.intl.string(I.t["1+Ho1X"]),
                placeholder: l ? I.intl.string(I.t.SD6LRZ) : I.intl.string(I.t["aVhW/W"]),
                maxLength: 1500,
                value: w,
                autosize: !0,
                onChange: Z,
                "aria-labelledby": z,
                disabled: q,
            }),
            (0, r.jsx)(m.izJ, { className: S.divider }),
            (0, r.jsxs)(m.gNt, {
                label: I.intl.string(I.t["0kpTpM"]),
                description: I.intl.string(I.t.i2rCwT),
                children: [
                    (0, r.jsx)(h.Z, {
                        image: R,
                        hint: F,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: S.coverImageUploader,
                        iconWrapperClassName: S.coverImageUploaderIconWrapper,
                        imageClassName: S.coverImageUploaderInner,
                        iconClassName: S.coverImageUploaderIcon,
                        onChange: V,
                        "aria-label": H,
                        disabled: q,
                    }),
                    (0, r.jsx)(p.Z, {
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
                          (0, r.jsx)(m.izJ, { className: S.divider }),
                          (0, r.jsx)(u.y6, {
                              label: I.intl.string(I.t.aaZ9pE),
                              description: I.intl.string(I.t.TILN8u),
                              value: A,
                              placeholder: I.intl.string(I.t.XqMe3N),
                              options: X,
                              onChange: (e) => L(e),
                          }),
                      ],
                  })
                : null,
            J.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(m.izJ, { className: S.divider }),
                        (0, r.jsx)(u.y6, {
                            label: I.intl.string(I.t["+dtmw+"]),
                            description: I.intl.string(I.t.n8WSWJ),
                            value: k,
                            placeholder: I.intl.string(I.t.XqMe3N),
                            options: J,
                            onChange: (e) => G(e),
                        }),
                    ],
                }),
            (0, r.jsx)(c.W, {
                component: "div",
                className: S.contentRegion,
                children:
                    K &&
                    (0, r.jsx)(m.oXn, {
                        children: (0, r.jsx)(d.Z, {
                            submitting: M,
                            disabled: !Y,
                            onReset: () => {
                                var e;
                                P(s),
                                    Z(null != (e = null == f ? void 0 : f.description) ? e : ""),
                                    D(j),
                                    L(null == f ? void 0 : f.store_page_guild_products_default_sort),
                                    G(null == f ? void 0 : f.server_shop_tab_order);
                            },
                            onSave: () => {
                                a()(null != f, "Settings must be defined");
                                let e = {};
                                w !== f.description && (e.description = w),
                                    null != R && R.startsWith("data:") && (e.cover_image = R),
                                    T !== s && (e.full_server_gate = T === N.e3.ALL_CHANNELS),
                                    A !== f.store_page_guild_products_default_sort &&
                                        (e.store_page_guild_products_default_sort = A),
                                    k !== f.server_shop_tab_order && (e.server_shop_tab_order = k),
                                    o().isEmpty(e) || B(n.id, e);
                            },
                            saveButtonTooltip: Y ? void 0 : I.intl.string(I.t["6HRvit"]),
                        }),
                    }),
            }),
        ],
    });
}
