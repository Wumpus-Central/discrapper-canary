n.d(t, { Z: () => _ }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(512722),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(215569),
    d = n(796027),
    u = n(885387),
    g = n(477690),
    f = n(481060),
    m = n(313201),
    b = n(345861),
    p = n(208567),
    h = n(73346),
    x = n(624138),
    j = n(584825),
    v = n(723047),
    O = n(927954),
    y = n(164000),
    C = n(293810),
    N = n(333866),
    E = n(388032),
    I = n(719096);
let S = (0, x.Mg)(g.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);
function _(e) {
    var t;
    let { guild: n, isGuildProducts: l = !1 } = e,
        { format: s } = (0, y.Z)(n.id),
        g = (0, j.YB)(n.id),
        x = i.useCallback(() => {
            var e;
            return (null == g || null == (e = g.cover_image_asset) ? void 0 : e.application_id) == null
                ? null
                : (0, h._W)(g.cover_image_asset.application_id, g.cover_image_asset, S);
        }, [g]),
        [_, T] = i.useState(s),
        [P, w] = i.useState(null != (t = null == g ? void 0 : g.description) ? t : ""),
        [Z, R] = i.useState(x),
        [D, A] = i.useState(null == g ? void 0 : g.store_page_guild_products_default_sort),
        [L, k] = i.useState(null == g ? void 0 : g.server_shop_tab_order),
        { loading: G, error: M, updateSubscriptionsSettings: U } = (0, j.QV)(),
        { imageCTA: B, imageAriaLabel: F, setFilename: H } = (0, O.Z)(null == g ? void 0 : g.cover_image_asset),
        W = (0, m.Dt)();
    function z(e, t) {
        a()(null != e, "Null value not allowed"), null != t && H(t.name), R(e);
    }
    let V = i.useMemo(() => {
            var e;
            return (
                (null != P && P !== (null != (e = null == g ? void 0 : g.description) ? e : "")) ||
                (null == Z ? void 0 : Z.startsWith("data:")) === !0 ||
                _ !== s ||
                (null == g ? void 0 : g.store_page_guild_products_default_sort) !== D ||
                (null == g ? void 0 : g.server_shop_tab_order) !== L
            );
        }, [Z, s, P, g, _, D, L]),
        K = null != P && "" !== P && null != Z;
    i.useEffect(() => {
        var e;
        (null == g || null == (e = g.cover_image_asset) ? void 0 : e.application_id) != null &&
            R((0, h._W)(g.cover_image_asset.application_id, g.cover_image_asset, S));
    }, [null == g ? void 0 : g.cover_image_asset]);
    let Y = (0, v.mY)(),
        q = i.useMemo(
            () =>
                N.kL.map((e) => ({
                    id: e.toString(),
                    label: (0, N.eJ)(e),
                    value: e,
                })),
            [],
        ),
        X = i.useMemo(
            () => [
                {
                    id: "products-first",
                    label: E.intl.string(E.t.X6h2gz),
                    value: N.a3.PRODUCTS_FIRST,
                },
                {
                    id: "subs-first",
                    label: E.intl.string(E.t["KzCF/6"]),
                    value: N.a3.SUBS_FIRST,
                },
            ],
            [],
        );
    return (0, r.jsxs)("div", {
        className: I.container,
        children: [
            null != M &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.M14, {
                            type: "critical",
                            children: M.getAnyErrorMessage(),
                        }),
                        (0, r.jsx)(f.LZC, { size: 16 }),
                    ],
                }),
            l
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(f.FXm, {
                              label: E.intl.string(E.t["PAVi++"]),
                              description: E.intl.string(E.t.x87YqH),
                              value: _,
                              onChange: (e) => {
                                  s !== e &&
                                      e === C.e3.ALL_CHANNELS &&
                                      (0, u.Z)({
                                          title: E.intl.string(E.t.dmVoOz),
                                          subtitle: E.intl.string(E.t.mtwzdD),
                                          confirmText: E.intl.string(E.t["NX+WJN"]),
                                      }),
                                      T(e);
                              },
                              disabled: Y,
                              options: [
                                  {
                                      name: E.intl.string(E.t.rXqxhF),
                                      desc: E.intl.string(E.t.yQiJne),
                                      value: C.e3.SOME_CHANNELS,
                                      icon: f.VL1,
                                  },
                                  {
                                      name: E.intl.string(E.t.WzC9s6),
                                      desc: E.intl.string(E.t.WmagiB),
                                      value: C.e3.ALL_CHANNELS,
                                      icon: f._m8,
                                  },
                              ],
                          }),
                          (0, r.jsx)(f.izJ, { className: I.divider }),
                      ],
                  }),
            (0, r.jsx)(f.Kx8, {
                label: E.intl.string(E.t["1+Ho1X"]),
                placeholder: l ? E.intl.string(E.t.SD6LRZ) : E.intl.string(E.t["aVhW/W"]),
                maxLength: 1500,
                value: P,
                autosize: !0,
                onChange: w,
                "aria-labelledby": W,
                disabled: Y,
            }),
            (0, r.jsx)(f.izJ, { className: I.divider }),
            (0, r.jsxs)(f.gNt, {
                label: E.intl.string(E.t["0kpTpM"]),
                description: E.intl.string(E.t.i2rCwT),
                children: [
                    (0, r.jsx)(p.Z, {
                        image: Z,
                        hint: B,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: I.coverImageUploader,
                        iconWrapperClassName: I.coverImageUploaderIconWrapper,
                        imageClassName: I.coverImageUploaderInner,
                        iconClassName: I.coverImageUploaderIcon,
                        onChange: z,
                        "aria-label": F,
                        disabled: Y,
                    }),
                    (0, r.jsx)(b.Z, {
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
                          (0, r.jsx)(f.izJ, { className: I.divider }),
                          (0, r.jsx)(f.PhF, {
                              label: E.intl.string(E.t.aaZ9pE),
                              description: E.intl.string(E.t.TILN8u),
                              value: D,
                              placeholder: E.intl.string(E.t.XqMe3N),
                              options: q,
                              onSelectionChange: A,
                              selectionMode: "single",
                              fullWidth: !0,
                          }),
                      ],
                  })
                : null,
            X.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.izJ, { className: I.divider }),
                        (0, r.jsx)(f.PhF, {
                            label: E.intl.string(E.t["+dtmw+"]),
                            description: E.intl.string(E.t.n8WSWJ),
                            value: L,
                            placeholder: E.intl.string(E.t.XqMe3N),
                            options: X,
                            onSelectionChange: k,
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    ],
                }),
            (0, r.jsx)(c.W, {
                component: "div",
                className: I.contentRegion,
                children:
                    V &&
                    (0, r.jsx)(f.oXn, {
                        children: (0, r.jsx)(d.Z, {
                            submitting: G,
                            disabled: !K,
                            onReset: () => {
                                var e;
                                T(s),
                                    w(null != (e = null == g ? void 0 : g.description) ? e : ""),
                                    R(x),
                                    A(null == g ? void 0 : g.store_page_guild_products_default_sort),
                                    k(null == g ? void 0 : g.server_shop_tab_order);
                            },
                            onSave: () => {
                                a()(null != g, "Settings must be defined");
                                let e = {};
                                P !== g.description && (e.description = P),
                                    null != Z && Z.startsWith("data:") && (e.cover_image = Z),
                                    _ !== s && (e.full_server_gate = _ === C.e3.ALL_CHANNELS),
                                    D !== g.store_page_guild_products_default_sort &&
                                        (e.store_page_guild_products_default_sort = D),
                                    L !== g.server_shop_tab_order && (e.server_shop_tab_order = L),
                                    o().isEmpty(e) || U(n.id, e);
                            },
                            saveButtonTooltip: K ? void 0 : E.intl.string(E.t["6HRvit"]),
                        }),
                    }),
            }),
        ],
    });
}
