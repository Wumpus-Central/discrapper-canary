"use strict";
n.d(t, { A: () => g, Y: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(594832),
    u = n(954571),
    c = n(183555),
    d = n(941165),
    _ = n(518477),
    f = n(652215),
    p = n(788868),
    h = n(985018),
    m = n(975462),
    E = (function (e) {
        return (
            (e.SMALL = "small"),
            (e.SMALL_SQUARE = "small-square"),
            (e.MEDIUM_SQUARE = "medium-square"),
            (e.MEDIUM = "medium"),
            (e.LARGE = "large"),
            (e.FLEX = "flex"),
            e
        );
    })({});
function g(e) {
    let {
            item: t,
            wishlistId: n,
            isOwner: s,
            cardSize: E = "medium",
            showOverlayButton: g = !0,
            cardRef: A,
            renderItemPreview: I,
            accessibleLabel: T,
            onCardClick: S,
            buttonCTALabel: y,
            buttonIcon: v,
            isOwned: N = !1,
            renderSourceIcon: C,
            dragHandle: b,
            giftingOrigin: R,
            source: O,
        } = e,
        D = i.useRef(null),
        L = i.useRef(null),
        w = null != A ? A : L,
        { trackUserProfileWishlistAction: x } = (0, c.NJ)(),
        M = (0, r.jsx)("div", {
            className: m.Af,
            children: (0, r.jsx)(o.rOg, {
                size: "custom",
                color: o.LU0.colors.ICON_DEFAULT,
                width: 38,
                height: 38,
                className: a()(m.x6, m.AI),
                "aria-label": h.intl.string(h.t.L5Pt9L),
            }),
        }),
        P = (0, r.jsx)("div", {
            className: m.Lw,
            children: (0, r.jsx)(o.Button, {
                focusProps: { ringTarget: w },
                variant: "primary",
                size: "sm",
                text: y,
                icon: v,
                onClick: (e) => {
                    e.stopPropagation(), k();
                },
                fullWidth: !0,
            }),
        }),
        k = () => {
            if (R === p.vQ.DM_CHANNEL_WISHLIST) {
                let e = O === l.uS.WISHLIST ? "wishlist" : "shop";
                u.default.track(f.HAw.GIFTING_ITEM_CLICKED, {
                    sku_id: t.skuId,
                    item_source: e,
                    wishlist_id: O === l.uS.WISHLIST ? n : null,
                    product_line: t.skuProductLine,
                });
            } else
                null != n &&
                    x({
                        wishlistId: n,
                        action: _.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: t.skuId,
                        productLines: new Set([t.skuProductLine]),
                    });
            S();
        };
    return (0, r.jsxs)("div", {
        ref: D,
        className: m.kL,
        children: [
            (0, r.jsxs)("div", {
                ref: w,
                className: a()(m.Nr, {
                    [m.go]: N,
                    [m.tM]: "small-square" === E,
                    [m.D]: "medium-square" === E,
                    [m.IU]: "small" === E,
                    [m.Sd]: "large" === E,
                    [m.uE]: "flex" === E,
                }),
                onClick: k,
                children: [
                    (0, r.jsx)(o.AC4, { children: (0, r.jsx)(o.H, { children: T }) }),
                    (0, r.jsx)("div", { className: m.ho, children: I() }),
                    N && M,
                    g
                        ? P
                        : (0, r.jsx)(o.DUT, {
                              "aria-label": y,
                              focusProps: { ringTarget: w },
                              onClick: (e) => {
                                  e.stopPropagation(), k();
                              },
                          }),
                ],
            }),
            null != C && C(),
            b,
            s && null != n && (0, r.jsx)(d.A, { iconSize: "sm", item: t, wishlistId: n, className: m.eP }),
        ],
    });
}
