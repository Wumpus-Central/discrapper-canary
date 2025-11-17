r.d(t, { Z: () => S }), r(314940);
var n = r(54381),
    i = r(473749),
    l = r(120356),
    s = r.n(l),
    a = r(278074),
    o = r(481060),
    c = r(171019),
    u = r(104505),
    d = r(74538),
    m = r(864106),
    p = r(439959),
    h = r(125988),
    x = r(388032),
    g = r(706053);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var r,
        n,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++)
            (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    }
    return i;
}
let O = () => 80,
    f = (e) => {
        var { children: t, className: r, onSelect: i, isSelected: l = !1 } = e,
            a = y(e, ["children", "className", "onSelect", "isSelected"]);
        return (0, n.jsx)(
            o.P3F,
            j(v({ className: s()(g.decorationGridItem, l ? g.selected : void 0, r) }, a), {
                onClick: i,
                children: t,
            }),
        );
    },
    P = (e) => {
        var {
                user: t,
                avatarDecoration: r,
                innerRef: l,
                section: s,
                canUsePremiumCollectibles: a,
                isTryItOut: o = !1,
                isSelected: d = !1,
            } = e,
            m = y(e, [
                "user",
                "avatarDecoration",
                "innerRef",
                "section",
                "canUsePremiumCollectibles",
                "isTryItOut",
                "isSelected",
            ]);
        let x = i.useRef(null),
            { isHoveringOrFocusing: O } = (0, u.Z)(null != l ? l : x),
            { avatarDecorationSrc: P } = (0, h.Z)({
                user: t,
                avatarDecorationOverride: r,
                size: 80,
                onlyAnimateOnHoverOrFocus: !O,
            });
        return (0, n.jsxs)(
            f,
            j(
                v(
                    {
                        innerRef: null != l ? l : x,
                        isSelected: d,
                    },
                    m,
                ),
                {
                    children: [
                        (0, n.jsx)("img", {
                            className: g.presetDecorationImg,
                            src: P,
                            alt: r.label,
                        }),
                        (0, n.jsx)(c.Z, {
                            skuId: r.skuId,
                            canUsePremiumCollectibles: a,
                            isTryItOut: o,
                            isPurchaseSection: s === p.$0.PURCHASE,
                            isPremiumSection: s === p.$0.PREMIUM_PURCHASE,
                        }),
                    ],
                },
            ),
        );
    },
    S = (e) => {
        let {
                user: t,
                guild: r,
                pendingAvatarDecoration: i,
                selectedAvatarDecorationRef: l,
                isTryItOut: s,
                onSelect: c,
                onOpenShop: u,
            } = e,
            h = (0, p.ZP)(),
            y = d.ZP.canUseCollectibles(t);
        return (0, n.jsx)(o.GMG, {
            fade: !0,
            className: g.list,
            columns: 3,
            sections: h.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            sectionGutter: 16,
            itemGutter: 12,
            paddingHorizontal: 12,
            paddingVertical: 0,
            removeEdgeItemGutters: !0,
            renderItem: (e, d, j, O) => {
                let { section: S, items: b } = h[e];
                return (0, a.EQ)(b[d])
                    .with(p.Tm, () =>
                        (0, n.jsxs)(
                            f,
                            {
                                style: v({}, j),
                                isSelected: null === i,
                                onSelect: () => c(null),
                                children: [
                                    (0, n.jsx)(o.t6m, {
                                        size: "md",
                                        color: "currentColor",
                                        className: g.icon,
                                    }),
                                    (0, n.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-primary",
                                        children: (0, m.ad)(t, r)
                                            ? x.intl.string(x.t.CHf9iJ)
                                            : x.intl.string(x.t.PoWNfe),
                                    }),
                                ],
                            },
                            O,
                        ),
                    )
                    .with(p.oT, () =>
                        (0, n.jsxs)(
                            f,
                            {
                                style: j,
                                onSelect: u,
                                children: [
                                    (0, n.jsx)(o.EOn, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: g.shopIcon,
                                    }),
                                    (0, n.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-primary",
                                        children: x.intl.string(x.t.pWG4ze),
                                    }),
                                ],
                            },
                            O,
                        ),
                    )
                    .otherwise((e) => {
                        let r = (null == i ? void 0 : i.skuId) === e.skuId;
                        return (0, n.jsx)(
                            P,
                            {
                                style: v({}, j),
                                user: t,
                                avatarDecoration: e,
                                section: S,
                                innerRef: r ? l : void 0,
                                canUsePremiumCollectibles: y,
                                isTryItOut: s,
                                isSelected: r,
                                onSelect: () => c(e),
                            },
                            O,
                        );
                    });
            },
            renderSection: (e, t) => {
                let { header: r } = h[e];
                return (0, n.jsx)("div", {
                    className: g.headings,
                    style: j(v({}, t), { position: "absolute" }),
                    children: (0, n.jsx)(o.Text, {
                        variant: "text-md/medium",
                        children: r,
                    }),
                });
            },
            getSectionHeight: (e) => h[e].height,
            getItemKey: (e, t) => h[e].items[t].skuId,
            getItemHeight: O,
        });
    };
