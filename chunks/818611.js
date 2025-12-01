r.d(t, { Z: () => O }), r(314940);
var n = r(54381),
    i = r(473749),
    l = r(120356),
    a = r.n(l),
    s = r(278074),
    o = r(481060),
    c = r(171019),
    d = r(104505),
    u = r(74538),
    m = r(864106),
    p = r(439959),
    h = r(125988),
    v = r(388032),
    x = r(706053);
function g(e) {
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
function f(e, t) {
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
function j(e, t) {
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
let _ = () => 80,
    y = (e) => {
        var { children: t, className: r, onSelect: i, isSelected: l = !1 } = e,
            s = j(e, ["children", "className", "onSelect", "isSelected"]);
        return (0, n.jsx)(
            o.P3F,
            f(g({ className: a()(x.decorationGridItem, l ? x.selected : void 0, r) }, s), {
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
                section: a,
                canUsePremiumCollectibles: s,
                isTryItOut: o = !1,
                isSelected: u = !1,
            } = e,
            m = j(e, [
                "user",
                "avatarDecoration",
                "innerRef",
                "section",
                "canUsePremiumCollectibles",
                "isTryItOut",
                "isSelected",
            ]);
        let v = i.useRef(null),
            { isHoveringOrFocusing: _ } = (0, d.Z)(null != l ? l : v),
            { avatarDecorationSrc: P } = (0, h.Z)({
                user: t,
                avatarDecorationOverride: r,
                size: 80,
                onlyAnimateOnHoverOrFocus: !_,
            });
        return (0, n.jsxs)(
            y,
            f(
                g(
                    {
                        innerRef: null != l ? l : v,
                        isSelected: u,
                    },
                    m,
                ),
                {
                    children: [
                        (0, n.jsx)("img", {
                            className: x.presetDecorationImg,
                            src: P,
                            alt: r.label,
                        }),
                        (0, n.jsx)(c.Z, {
                            skuId: r.skuId,
                            canUsePremiumCollectibles: s,
                            isTryItOut: o,
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
                guild: r,
                pendingAvatarDecoration: i,
                selectedAvatarDecorationRef: l,
                isTryItOut: a,
                onSelect: c,
                onOpenShop: d,
            } = e,
            h = (0, p.ZP)(),
            j = u.ZP.canUseCollectibles(t);
        return (0, n.jsx)(o.GMG, {
            fade: !0,
            className: x.list,
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
            renderItem: (e, u, f, _) => {
                let { section: O, items: w } = h[e];
                return (0, s.EQ)(w[u])
                    .with(p.Tm, () =>
                        (0, n.jsxs)(
                            y,
                            {
                                style: g({}, f),
                                isSelected: null === i,
                                onSelect: () => c(null),
                                children: [
                                    (0, n.jsx)(o.t6m, {
                                        size: "md",
                                        color: "currentColor",
                                        className: x.icon,
                                    }),
                                    (0, n.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-primary",
                                        children: (0, m.ad)(t, r)
                                            ? v.intl.string(v.t.CHf9iJ)
                                            : v.intl.string(v.t.PoWNfe),
                                    }),
                                ],
                            },
                            _,
                        ),
                    )
                    .with(p.oT, () =>
                        (0, n.jsxs)(
                            y,
                            {
                                style: f,
                                onSelect: d,
                                children: [
                                    (0, n.jsx)(o.EOn, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: x.shopIcon,
                                    }),
                                    (0, n.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-primary",
                                        children: v.intl.string(v.t.pWG4ze),
                                    }),
                                ],
                            },
                            _,
                        ),
                    )
                    .otherwise((e) => {
                        let r = (null == i ? void 0 : i.skuId) === e.skuId;
                        return (0, n.jsx)(
                            P,
                            {
                                style: g({}, f),
                                user: t,
                                avatarDecoration: e,
                                section: O,
                                innerRef: r ? l : void 0,
                                canUsePremiumCollectibles: j,
                                isTryItOut: a,
                                isSelected: r,
                                onSelect: () => c(e),
                            },
                            _,
                        );
                    });
            },
            renderSection: (e, t) => {
                let { header: r } = h[e];
                return (0, n.jsx)("div", {
                    className: x.headings,
                    style: f(g({}, t), { position: "absolute" }),
                    children: (0, n.jsx)(o.Text, {
                        variant: "text-md/medium",
                        children: r,
                    }),
                });
            },
            getSectionHeight: (e) => h[e].height,
            getItemKey: (e, t) => h[e].items[t].skuId,
            getItemHeight: _,
        });
    };
