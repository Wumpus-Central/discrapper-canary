i.d(t, {
    A: () => T,
});
var n = i(627968),
    r = i(64700),
    l = i(575593),
    s = i(311907),
    a = i(435371),
    o = i(587895),
    u = i(576030),
    c = i(954571),
    d = i(427262),
    m = i(594832),
    p = i(146423),
    f = i(460442),
    _ = i(754804),
    h = i(479026),
    g = i(652215),
    I = i(788868),
    S = i(985018),
    x = i(804810);

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}

function b(e, t) {
    if (null == e) return {};
    var i,
        n,
        r,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, i = Reflect.ownKeys(e); r < i.length; r++)
            (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l;
    }
    if (
        ((l = (function (e, t) {
            if (null == e) return {};
            var i,
                n,
                r = {},
                l = Object.getOwnPropertyNames(e);
            for (n = 0; n < l.length; n++)
                (i = l[n]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
            return r;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
            (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l;
}
let w = I.vQ.DM_CHANNEL_WISHLIST;

function y(e) {
    let {
            sku: t,
            onClick: i,
            onOpenWishlist: l,
            wishlistOwner: s,
            tooltipInfo: o,
            wishlistId: u,
            source: d,
            hasMultipleSources: h,
            totalUnownedWishlistItems: I,
            index: S,
            skuPreviewStyle: C,
        } = e,
        b = r.useMemo(
            () => ({
                collectibles: {
                    nameplate: {
                        width: 136,
                    },
                },
            }),
            [],
        ),
        w = S === m.pl - 1 && I > m.pl,
        y = I - m.pl + 1,
        O = r.useCallback(() => {
            if (w) return void l();
            let e = d === m.uS.WISHLIST ? "wishlist" : "shop";
            c.default.track(g.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: t.id,
                item_source: e,
                wishlist_id: d === m.uS.WISHLIST ? u : null,
                product_line: t.productLine,
            }),
                null == i || i();
        }, [i, u, d, t.id, t.productLine, l, w]),
        j = r.useMemo(() => {
            var e;
            let i = (0, n.jsxs)(p.A, {
                sku: t,
                user: s,
                cardStyle: x.Nr,
                skuPreviewStyle: C,
                options: b,
                onClick: O,
                children: [
                    h && d === m.uS.POPULAR && (0, n.jsx)(_.o, {}),
                    h && d === m.uS.WISHLIST && (0, n.jsx)(_.k, {}),
                    w &&
                        (0, n.jsx)(f.Yb, {
                            count: y,
                        }),
                ],
            });
            return o.shouldShow
                ? null != o.title && null == o.body && null == o.icon
                    ? (0, n.jsx)(a.m_, {
                          text: o.title,
                          position: "top",
                          asContainer: !0,
                          delay: m.Zh,
                          children: i,
                      })
                    : (0, n.jsx)(a.un, {
                          title: o.title,
                          body: null != (e = o.body) ? e : "",
                          asset: o.icon,
                          assetSize: m.Q8,
                          position: "top",
                          asContainer: !0,
                          delay: m.Zh,
                          children: i,
                      })
                : i;
        }, [t, s, O, d, h, b, o.shouldShow, o.title, o.body, o.icon, y, C, w]);
    return (0, n.jsx)("div", {
        children: j,
    });
}

function O(e) {
    let {
            sku: t,
            wishlistOwner: i,
            analyticsLocations: l,
            onClick: a,
            hasMultipleTypes: c,
            hasMultipleSources: p,
            source: f,
        } = e,
        _ = b(e, [
            "sku",
            "wishlistOwner",
            "analyticsLocations",
            "onClick",
            "hasMultipleTypes",
            "hasMultipleSources",
            "source",
        ]),
        g = (0, s.bG)([o.A], () => o.A.getApplication(t.applicationId)),
        I = r.useMemo(() => {
            let e = d.Ay.getName(i),
                t =
                    f === m.uS.WISHLIST
                        ? S.intl.formatToPlainString(S.t.p3RmJF, {
                              username: e,
                          })
                        : S.intl.string(S.t.Ig6VDH);
            return c || p
                ? !c && p
                    ? {
                          title: t,
                          icon: (0, n.jsx)(u.mW, {
                              application: g,
                          }),
                          shouldShow: !0,
                      }
                    : c && !p
                      ? {
                            title: S.intl.string(S.t["4yiU7x"]),
                            icon: (0, n.jsx)(u.mW, {
                                application: g,
                            }),
                            shouldShow: !0,
                        }
                      : {
                            title: S.intl.string(S.t["4yiU7x"]),
                            body: t,
                            icon: (0, n.jsx)(u.mW, {
                                application: g,
                            }),
                            shouldShow: !0,
                        }
                : {
                      title: S.intl.string(S.t["4yiU7x"]),
                      shouldShow: !1,
                  };
        }, [f, c, p, g, i]),
        x = r.useCallback(() => {
            null == a || a(),
                (0, h.T)({
                    isOwner: !1,
                    giftingOrigin: w,
                    profileOwner: i,
                    isItemOwned: !1,
                    application: null != g ? g : void 0,
                    sku: t,
                    analyticsLocations: null != l ? l : [],
                });
        }, [t, i, g, l, a]);
    return (0, n.jsx)(
        y,
        C(
            {
                sku: t,
                wishlistOwner: i,
                analyticsLocations: l,
                onClick: x,
                hasMultipleTypes: c,
                hasMultipleSources: p,
                tooltipInfo: I,
                source: f,
            },
            _,
        ),
    );
}

function j(e) {
    var t, i;
    let {
            sku: s,
            wishlistOwner: a,
            analyticsLocations: o,
            onClick: c,
            hasMultipleTypes: p,
            hasMultipleSources: f,
            source: _,
        } = e,
        g = b(e, [
            "sku",
            "wishlistOwner",
            "analyticsLocations",
            "onClick",
            "hasMultipleTypes",
            "hasMultipleSources",
            "source",
        ]),
        I = r.useMemo(() => {
            let e = d.Ay.getName(a),
                t =
                    _ === m.uS.WISHLIST
                        ? S.intl.formatToPlainString(S.t.p3RmJF, {
                              username: e,
                          })
                        : S.intl.string(S.t.Ig6VDH);
            return p || f
                ? !p && f
                    ? {
                          title: t,
                          shouldShow: !0,
                      }
                    : p && !f
                      ? {
                            title: S.intl.string(S.t.HFhcqh),
                            icon: (0, n.jsx)(u.mW, {}),
                            shouldShow: !0,
                        }
                      : {
                            title: S.intl.string(S.t.HFhcqh),
                            body: t,
                            icon: (0, n.jsx)(u.mW, {}),
                            shouldShow: !0,
                        }
                : {
                      title: S.intl.string(S.t.HFhcqh),
                      shouldShow: !1,
                  };
        }, [_, p, f, a]),
        O = r.useMemo(() => {
            var e, t;
            return null != s.bundledSkus && s.bundledSkus.length > 0
                ? x.Eo
                : (null == (t = s.tenantMetadata) || null == (e = t.collectibles) ? void 0 : e.type) === l.R.NAMEPLATE
                  ? x.qF
                  : void 0;
        }, [s.bundledSkus, null == (i = s.tenantMetadata) || null == (t = i.collectibles) ? void 0 : t.type]),
        j = r.useMemo(
            () => () => {
                (0, h._)({
                    isOwner: !1,
                    isItemOwned: !1,
                    onWishlistItemClick: c,
                    profileOwner: a,
                    sku: s,
                    analyticsLocations: null != o ? o : [],
                    giftingOrigin: w,
                });
            },
            [s, a, c, o],
        );
    return (0, n.jsx)(
        y,
        C(
            {
                sku: s,
                wishlistOwner: a,
                analyticsLocations: o,
                onClick: j,
                hasMultipleTypes: p,
                hasMultipleSources: f,
                tooltipInfo: I,
                source: _,
                skuPreviewStyle: O,
            },
            g,
        ),
    );
}

function T(e) {
    let { sku: t } = e,
        i = b(e, ["sku"]);
    switch (t.productLine) {
        case g.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(
                O,
                C(
                    {
                        sku: t,
                    },
                    i,
                ),
            );
        case g.EZt.COLLECTIBLES:
            return (0, n.jsx)(
                j,
                C(
                    {
                        sku: t,
                    },
                    i,
                ),
            );
        default:
            return null;
    }
}
