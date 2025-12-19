n.d(t, { Z: () => O }), n(314940);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    s = n(278074),
    o = n(481060),
    c = n(171019),
    d = n(104505),
    u = n(74538),
    m = n(864106),
    p = n(439959),
    h = n(125988),
    v = n(388032),
    x = n(354841);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
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
}
function f(e, t) {
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
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let j = () => 80,
    P = (e) => {
        var { children: t, className: n, onSelect: i, isSelected: a = !1 } = e,
            s = b(e, ["children", "className", "onSelect", "isSelected"]);
        return (0, r.jsx)(
            o.P3F,
            f(g({ className: l()(x.decorationGridItem, a ? x.selected : void 0, n) }, s), {
                onClick: i,
                children: t,
            }),
        );
    },
    y = (e) => {
        var {
                user: t,
                avatarDecoration: n,
                innerRef: a,
                section: l,
                canUsePremiumCollectibles: s,
                isSelected: o = !1,
            } = e,
            u = b(e, ["user", "avatarDecoration", "innerRef", "section", "canUsePremiumCollectibles", "isSelected"]);
        let m = i.useRef(null),
            { isHoveringOrFocusing: v } = (0, d.Z)(null != a ? a : m),
            { avatarDecorationSrc: j } = (0, h.Z)({
                user: t,
                avatarDecorationOverride: n,
                size: 80,
                onlyAnimateOnHoverOrFocus: !v,
            });
        return (0, r.jsxs)(
            P,
            f(
                g(
                    {
                        innerRef: null != a ? a : m,
                        isSelected: o,
                    },
                    u,
                ),
                {
                    children: [
                        (0, r.jsx)("img", {
                            className: x.presetDecorationImg,
                            src: j,
                            alt: n.label,
                        }),
                        (0, r.jsx)(c.Z, {
                            skuId: n.skuId,
                            canUsePremiumCollectibles: s,
                            isPurchaseSection: l === p.$0.PURCHASE,
                            isPremiumSection: l === p.$0.PREMIUM_PURCHASE,
                        }),
                    ],
                },
            ),
        );
    },
    O = (e) => {
        let {
                user: t,
                guild: n,
                pendingAvatarDecoration: i,
                selectedAvatarDecorationRef: a,
                onSelect: l,
                onOpenShop: c,
            } = e,
            d = (0, p.ZP)(),
            h = u.ZP.canUseCollectibles(t);
        return (0, r.jsx)(o.GMG, {
            fade: !0,
            className: x.list,
            columns: 3,
            sections: d.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            sectionGutter: 16,
            itemGutter: 12,
            paddingHorizontal: 12,
            paddingVertical: 0,
            removeEdgeItemGutters: !0,
            renderItem: (e, u, f, b) => {
                let { section: j, items: O } = d[e];
                return (0, s.EQ)(O[u])
                    .with(p.Tm, () =>
                        (0, r.jsxs)(
                            P,
                            {
                                style: g({}, f),
                                isSelected: null === i,
                                onSelect: () => l(null),
                                children: [
                                    (0, r.jsx)(o.t6m, {
                                        size: "md",
                                        color: "currentColor",
                                        className: x.icon,
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: (0, m.ad)(t, n)
                                            ? v.intl.string(v.t.CHf9iJ)
                                            : v.intl.string(v.t.PoWNfe),
                                    }),
                                ],
                            },
                            b,
                        ),
                    )
                    .with(p.oT, () =>
                        (0, r.jsxs)(
                            P,
                            {
                                style: f,
                                onSelect: c,
                                children: [
                                    (0, r.jsx)(o.EOn, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: x.shopIcon,
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: v.intl.string(v.t.pWG4ze),
                                    }),
                                ],
                            },
                            b,
                        ),
                    )
                    .otherwise((e) => {
                        let n = (null == i ? void 0 : i.skuId) === e.skuId;
                        return (0, r.jsx)(
                            y,
                            {
                                style: g({}, f),
                                user: t,
                                avatarDecoration: e,
                                section: j,
                                innerRef: n ? a : void 0,
                                canUsePremiumCollectibles: h,
                                isSelected: n,
                                onSelect: () => l(e),
                            },
                            b,
                        );
                    });
            },
            renderSection: (e, t) => {
                let { header: n } = d[e];
                return (0, r.jsx)("div", {
                    className: x.headings,
                    style: f(g({}, t), { position: "absolute" }),
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        children: n,
                    }),
                });
            },
            getSectionHeight: (e) => d[e].height,
            getItemKey: (e, t) => d[e].items[t].skuId,
            getItemHeight: j,
        });
    };
