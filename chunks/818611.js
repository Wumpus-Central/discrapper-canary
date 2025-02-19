n.d(t, { Z: () => x }), n(627341);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(278074),
    l = n(831209),
    c = n(399606),
    u = n(481060),
    d = n(727637),
    f = n(597688),
    p = n(884697),
    _ = n(74538),
    h = n(864106),
    m = n(439959),
    g = n(125988),
    E = n(388032),
    v = n(412839);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let N = 3,
    A = 80,
    C = 12,
    R = 16,
    P = () => A,
    w = (e) => {
        var { children: t, className: n, onSelect: i, isSelected: o = !1 } = e,
            s = I(e, ['children', 'className', 'onSelect', 'isSelected']);
        return (0, r.jsx)(
            u.P3F,
            S(y({ className: a()(v.decorationGridItem, o ? v.selected : void 0, n) }, s), {
                onClick: i,
                children: t
            })
        );
    },
    D = (e) => {
        var { user: t, avatarDecoration: n, innerRef: o, section: a, isSelected: s = !1 } = e,
            h = I(e, ['user', 'avatarDecoration', 'innerRef', 'section', 'isSelected']);
        let b = (0, c.e7)([f.Z], () => {
                let e = f.Z.getProduct(n.skuId);
                return (0, p.G1)(e);
            }),
            O = (0, p.Yq)(n.skuId),
            T = _.ZP.canUseCollectibles(t),
            N = a === m.$0.PREMIUM_PURCHASE && !T,
            C = i.useRef(null),
            R = (0, d.Z)(null != o ? o : C),
            { avatarDecorationSrc: P } = (0, g.Z)({
                user: t,
                avatarDecorationOverride: n,
                size: A,
                onlyAnimateOnHover: !R
            }),
            D = () =>
                a === m.$0.PURCHASE || (a === m.$0.PREMIUM_PURCHASE && T)
                    ? null
                    : O
                      ? (0, r.jsx)(u.lBU, {
                            className: v.newBadge,
                            text: (0, r.jsxs)('div', {
                                className: v.newBadgeText,
                                children: [
                                    (0, r.jsx)(u.mBM, {
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    E.NW.string(E.t.y2b7CA)
                                ]
                            })
                        })
                      : (0, r.jsx)(u.G2e, {
                            icon: b
                                ? () =>
                                      (0, r.jsx)(u.SrA, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 14,
                                          height: 14
                                      })
                                : () =>
                                      (0, r.jsx)(u.mBM, {
                                          size: 'xxs',
                                          color: 'currentColor'
                                      }),
                            color: l.Z.BACKGROUND_ACCENT,
                            className: v.iconBadge
                        });
        return (0, r.jsxs)(
            w,
            S(
                y(
                    {
                        className: N ? v.decorationGridItemChurned : void 0,
                        innerRef: null != o ? o : C,
                        isSelected: s
                    },
                    h
                ),
                {
                    children: [
                        (0, r.jsx)('img', {
                            className: v.presetDecorationImg,
                            src: P,
                            alt: n.label
                        }),
                        D()
                    ]
                }
            )
        );
    },
    x = (e) => {
        let { user: t, guild: n, pendingAvatarDecoration: o, selectedAvatarDecorationRef: a, onSelect: l, onOpenShop: c } = e,
            d = (0, m.ZP)(),
            f = i.useCallback(() => {
                c(void 0);
            }, [c]),
            p = (e, i, c, p) => {
                let { section: _, items: g } = d[e];
                return (0, s.EQ)(g[i])
                    .with(m.Tm, () =>
                        (0, r.jsxs)(
                            w,
                            {
                                style: y({}, c),
                                isSelected: null === o,
                                onSelect: () => l(null),
                                children: [
                                    (0, r.jsx)(u.t6m, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: v.notAllowedIcon
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: (0, h.ad)(t, n) ? E.NW.string(E.t['GsW4/v']) : E.NW.string(E.t.PoWNfX)
                                    })
                                ]
                            },
                            p
                        )
                    )
                    .with(m.oT, () =>
                        (0, r.jsxs)(
                            w,
                            {
                                style: c,
                                onSelect: f,
                                children: [
                                    (0, r.jsx)(u.EOn, {
                                        size: 'custom',
                                        width: 23,
                                        height: 23,
                                        color: 'currentColor',
                                        className: v.shopIcon
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: E.NW.string(E.t.pWG4zc)
                                    })
                                ]
                            },
                            p
                        )
                    )
                    .otherwise((e) => {
                        let n = (null == o ? void 0 : o.id) === e.id;
                        return (0, r.jsx)(
                            D,
                            {
                                style: y({}, c),
                                user: t,
                                avatarDecoration: e,
                                section: _,
                                innerRef: n ? a : void 0,
                                isSelected: n,
                                onSelect: () => l(e)
                            },
                            p
                        );
                    });
            },
            _ = (e, t) => {
                let { header: n } = d[e];
                return (0, r.jsx)('div', {
                    className: v.headings,
                    style: S(y({}, t), { position: 'absolute' }),
                    children: (0, r.jsx)(u.vwX, { children: n })
                });
            };
        return (0, r.jsx)(u.GMG, {
            fade: !0,
            className: v.list,
            columns: N,
            sections: d.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            sectionGutter: R,
            itemGutter: C,
            paddingHorizontal: C,
            paddingVertical: 0,
            removeEdgeItemGutters: !0,
            renderItem: p,
            renderSection: _,
            getSectionHeight: (e) => d[e].height,
            getItemKey: (e, t) => d[e].items[t].id,
            getItemHeight: P
        });
    };
