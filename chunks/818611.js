n.d(t, { Z: () => L }), n(627341);
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
    _ = n(884697),
    p = n(74538),
    h = n(864106),
    m = n(439959),
    g = n(125988),
    E = n(388032),
    b = n(725591);
function y(e, t, n) {
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
function v(e) {
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
                y(e, t, n[t]);
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
function I(e, t) {
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
function S(e, t) {
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
            s = S(e, ['children', 'className', 'onSelect', 'isSelected']);
        return (0, r.jsx)(
            u.P3F,
            I(v({ className: a()(b.decorationGridItem, o ? b.selected : void 0, n) }, s), {
                onClick: i,
                children: t
            })
        );
    },
    D = (e) => {
        var { user: t, avatarDecoration: n, innerRef: o, section: a, isSelected: s = !1 } = e,
            h = S(e, ['user', 'avatarDecoration', 'innerRef', 'section', 'isSelected']);
        let y = (0, c.e7)([f.Z], () => {
                let e = f.Z.getProduct(n.skuId);
                return (0, _.G1)(e);
            }),
            O = (0, _.Yq)(n.skuId),
            T = p.ZP.canUseCollectibles(t),
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
                            className: b.newBadge,
                            text: (0, r.jsxs)('div', {
                                className: b.newBadgeText,
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
                            icon: y
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
                            className: b.iconBadge
                        });
        return (0, r.jsxs)(
            w,
            I(
                v(
                    {
                        className: N ? b.decorationGridItemChurned : void 0,
                        innerRef: null != o ? o : C,
                        isSelected: s
                    },
                    h
                ),
                {
                    children: [
                        (0, r.jsx)('img', {
                            className: b.presetDecorationImg,
                            src: P,
                            alt: n.label
                        }),
                        D()
                    ]
                }
            )
        );
    },
    L = (e) => {
        let { user: t, guild: n, pendingAvatarDecoration: i, selectedAvatarDecorationRef: o, onSelect: a, onOpenShop: l } = e,
            c = (0, m.ZP)(),
            d = (e, d, f, _) => {
                let { section: p, items: g } = c[e];
                return (0, s.EQ)(g[d])
                    .with(m.Tm, () =>
                        (0, r.jsxs)(
                            w,
                            {
                                style: v({}, f),
                                isSelected: null === i,
                                onSelect: () => a(null),
                                children: [
                                    (0, r.jsx)(u.t6m, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: b.icon
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: (0, h.ad)(t, n) ? E.NW.string(E.t['GsW4/v']) : E.NW.string(E.t.PoWNfX)
                                    })
                                ]
                            },
                            _
                        )
                    )
                    .with(m.oT, () =>
                        (0, r.jsxs)(
                            w,
                            {
                                style: f,
                                onSelect: l,
                                children: [
                                    (0, r.jsx)(u.EOn, {
                                        size: 'custom',
                                        width: 23,
                                        height: 23,
                                        color: 'currentColor',
                                        className: b.shopIcon
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: E.NW.string(E.t.pWG4zc)
                                    })
                                ]
                            },
                            _
                        )
                    )
                    .otherwise((e) => {
                        let n = (null == i ? void 0 : i.id) === e.id;
                        return (0, r.jsx)(
                            D,
                            {
                                style: v({}, f),
                                user: t,
                                avatarDecoration: e,
                                section: p,
                                innerRef: n ? o : void 0,
                                isSelected: n,
                                onSelect: () => a(e)
                            },
                            _
                        );
                    });
            },
            f = (e, t) => {
                let { header: n } = c[e];
                return (0, r.jsx)('div', {
                    className: b.headings,
                    style: I(v({}, t), { position: 'absolute' }),
                    children: (0, r.jsx)(u.vwX, { children: n })
                });
            };
        return (0, r.jsx)(u.GMG, {
            fade: !0,
            className: b.list,
            columns: N,
            sections: c.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            sectionGutter: R,
            itemGutter: C,
            paddingHorizontal: C,
            paddingVertical: 0,
            removeEdgeItemGutters: !0,
            renderItem: d,
            renderSection: f,
            getSectionHeight: (e) => c[e].height,
            getItemKey: (e, t) => c[e].items[t].id,
            getItemHeight: P
        });
    };
