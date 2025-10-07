r.d(t, { Z: () => P }), r(314940);
var n = r(951288),
    i = r(647438),
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
    S = (e) => {
        var {
                user: t,
                avatarDecoration: r,
                innerRef: l,
                section: s,
                isSelected: a = !1,
                canUsePremiumCollectibles: o,
            } = e,
            d = y(e, ["user", "avatarDecoration", "innerRef", "section", "isSelected", "canUsePremiumCollectibles"]);
        let m = i.useRef(null),
            { isHoveringOrFocusing: x } = (0, u.Z)(null != l ? l : m),
            { avatarDecorationSrc: O } = (0, h.Z)({
                user: t,
                avatarDecorationOverride: r,
                size: 80,
                onlyAnimateOnHoverOrFocus: !x,
            });
        return (0, n.jsxs)(
            f,
            j(
                v(
                    {
                        innerRef: null != l ? l : m,
                        isSelected: a,
                    },
                    d,
                ),
                {
                    children: [
                        (0, n.jsx)("img", {
                            className: g.presetDecorationImg,
                            src: O,
                            alt: r.label,
                        }),
                        (0, n.jsx)(c.Z, {
                            isPurchaseSection: s === p.$0.PURCHASE,
                            isPremiumSection: s === p.$0.PREMIUM_PURCHASE,
                            canUsePremiumCollectibles: o,
                            skuId: r.skuId,
                        }),
                    ],
                },
            ),
        );
    },
    P = (e) => {
        let {
                user: t,
                guild: r,
                pendingAvatarDecoration: i,
                selectedAvatarDecorationRef: l,
                onSelect: s,
                onOpenShop: c,
            } = e,
            u = (0, p.ZP)(),
            h = d.ZP.canUseCollectibles(t);
        return (0, n.jsx)(o.GMG, {
            fade: !0,
            className: g.list,
            columns: 3,
            sections: u.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            sectionGutter: 16,
            itemGutter: 12,
            paddingHorizontal: 12,
            paddingVertical: 0,
            removeEdgeItemGutters: !0,
            renderItem: (e, d, j, y) => {
                let { section: O, items: P } = u[e];
                return (0, a.EQ)(P[d])
                    .with(p.Tm, () =>
                        (0, n.jsxs)(
                            f,
                            {
                                style: v({}, j),
                                isSelected: null === i,
                                onSelect: () => s(null),
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
                                            ? x.intl.string(x.t.CHf9iI)
                                            : x.intl.string(x.t.PoWNfX),
                                    }),
                                ],
                            },
                            y,
                        ),
                    )
                    .with(p.oT, () =>
                        (0, n.jsxs)(
                            f,
                            {
                                style: j,
                                onSelect: c,
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
                                        children: x.intl.string(x.t.pWG4zc),
                                    }),
                                ],
                            },
                            y,
                        ),
                    )
                    .otherwise((e) => {
                        let r = (null == i ? void 0 : i.id) === e.id;
                        return (0, n.jsx)(
                            S,
                            {
                                style: v({}, j),
                                user: t,
                                avatarDecoration: e,
                                section: O,
                                innerRef: r ? l : void 0,
                                isSelected: r,
                                onSelect: () => s(e),
                                canUsePremiumCollectibles: h,
                            },
                            y,
                        );
                    });
            },
            renderSection: (e, t) => {
                let { header: r } = u[e];
                return (0, n.jsx)("div", {
                    className: g.headings,
                    style: j(v({}, t), { position: "absolute" }),
                    children: (0, n.jsx)(o.vwX, { children: r }),
                });
            },
            getSectionHeight: (e) => u[e].height,
            getItemKey: (e, t) => u[e].items[t].id,
            getItemHeight: O,
        });
    };
