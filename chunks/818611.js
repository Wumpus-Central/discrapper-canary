n.d(t, { Z: () => O }), n(314940);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(278074),
    o = n(481060),
    c = n(171019),
    d = n(104505),
    u = n(74538),
    m = n(864106),
    p = n(439959),
    h = n(125988),
    x = n(388032),
    g = n(354841);
function f(e) {
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
function v(e, t) {
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
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let j = () => 80,
    P = (e) => {
        var { children: t, className: n, onSelect: i, isSelected: l = !1 } = e,
            s = b(e, ["children", "className", "onSelect", "isSelected"]);
        return (0, r.jsx)(
            o.P3F,
            v(f({ className: a()(g.decorationGridItem, l ? g.selected : void 0, n) }, s), {
                onClick: i,
                children: t,
            }),
        );
    },
    y = (e) => {
        var {
                user: t,
                avatarDecoration: n,
                innerRef: l,
                section: a,
                canUsePremiumCollectibles: s,
                isSelected: o = !1,
            } = e,
            u = b(e, ["user", "avatarDecoration", "innerRef", "section", "canUsePremiumCollectibles", "isSelected"]);
        let m = i.useRef(null),
            { isHoveringOrFocusing: x } = (0, d.Z)(null != l ? l : m),
            { avatarDecorationSrc: j } = (0, h.Z)({
                user: t,
                avatarDecorationOverride: n,
                size: 80,
                onlyAnimateOnHoverOrFocus: !x,
            });
        return (0, r.jsxs)(
            P,
            v(
                f(
                    {
                        innerRef: null != l ? l : m,
                        isSelected: o,
                    },
                    u,
                ),
                {
                    children: [
                        (0, r.jsx)("img", {
                            className: g.presetDecorationImg,
                            src: j,
                            alt: n.label,
                        }),
                        (0, r.jsx)(c.Z, {
                            skuId: n.skuId,
                            canUsePremiumCollectibles: s,
                            isPurchaseSection: a === p.$0.PURCHASE,
                            isPremiumSection: a === p.$0.PREMIUM_PURCHASE,
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
                selectedAvatarDecorationRef: l,
                onSelect: a,
                onOpenShop: c,
            } = e,
            d = (0, p.ZP)(),
            h = u.ZP.canUseCollectibles(t);
        return (0, r.jsx)(o.GMG, {
            fade: !0,
            className: g.list,
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
            renderItem: (e, u, v, b) => {
                let { section: j, items: O } = d[e];
                return (0, s.EQ)(O[u])
                    .with(p.Tm, () =>
                        (0, r.jsxs)(
                            P,
                            {
                                style: f({}, v),
                                isSelected: null === i,
                                onSelect: () => a(null),
                                children: [
                                    (0, r.jsx)(o.t6m, {
                                        size: "md",
                                        color: "currentColor",
                                        className: g.icon,
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: (0, m.ad)(t, n)
                                            ? x.intl.string(x.t.CHf9iJ)
                                            : x.intl.string(x.t.PoWNfe),
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
                                style: v,
                                onSelect: c,
                                children: [
                                    (0, r.jsx)(o.EOn, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: g.shopIcon,
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: x.intl.string(x.t.pWG4ze),
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
                                style: f({}, v),
                                user: t,
                                avatarDecoration: e,
                                section: j,
                                innerRef: n ? l : void 0,
                                canUsePremiumCollectibles: h,
                                isSelected: n,
                                onSelect: () => a(e),
                            },
                            b,
                        );
                    });
            },
            renderSection: (e, t) => {
                let { header: n } = d[e];
                return (0, r.jsx)("div", {
                    className: g.headings,
                    style: v(f({}, t), { position: "absolute" }),
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
