n.d(t, { Z: () => O });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(922347),
    c = n(171019),
    d = n(104505),
    u = n(74538),
    m = n(864106),
    p = n(439959),
    f = n(125988),
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
function h(e, t) {
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
            o = b(e, ["children", "className", "onSelect", "isSelected"]);
        return (0, r.jsx)(
            s.P3F,
            h(g({ className: a()(x.decorationGridItem, l ? x.selected : void 0, n) }, o), {
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
            { isHoveringOrFocusing: v } = (0, d.Z)(null != l ? l : m),
            { avatarDecorationSrc: j } = (0, f.Z)({
                user: t,
                avatarDecorationOverride: n,
                size: 80,
                onlyAnimateOnHoverOrFocus: !v,
            });
        return (0, r.jsxs)(
            P,
            h(
                g(
                    {
                        innerRef: null != l ? l : m,
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
            f = u.ZP.canUseCollectibles(t);
        return (0, r.jsx)(s.GMG, {
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
            renderItem: (e, u, h, b) => {
                let { section: j, items: O } = d[e],
                    S = O[u];
                if (S === p.Tm)
                    return (0, r.jsxs)(
                        P,
                        {
                            style: g({}, h),
                            isSelected: null === i,
                            onSelect: () => a(null),
                            children: [
                                (0, r.jsx)(s.t6m, {
                                    size: "md",
                                    color: "currentColor",
                                    className: x.icon,
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: (0, m.ad)(t, n) ? v.intl.string(v.t.CHf9iJ) : v.intl.string(v.t.PoWNfe),
                                }),
                            ],
                        },
                        b,
                    );
                if (S === p.oT)
                    return (0, r.jsxs)(
                        P,
                        {
                            style: h,
                            onSelect: c,
                            children: [
                                (0, r.jsx)(s.EOn, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: x.shopIcon,
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: v.intl.string(v.t.pWG4ze),
                                }),
                            ],
                        },
                        b,
                    );
                if ((0, o.M)(S)) {
                    let e = (null == i ? void 0 : i.skuId) === S.skuId;
                    return (0, r.jsx)(
                        y,
                        {
                            style: g({}, h),
                            user: t,
                            avatarDecoration: S,
                            section: j,
                            innerRef: e ? l : void 0,
                            canUsePremiumCollectibles: f,
                            isSelected: e,
                            onSelect: () => a(S),
                        },
                        b,
                    );
                }
                return null;
            },
            renderSection: (e, t) => {
                let { header: n } = d[e];
                return (0, r.jsx)("div", {
                    className: x.headings,
                    style: h(g({}, t), { position: "absolute" }),
                    children: (0, r.jsx)(s.Text, {
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
