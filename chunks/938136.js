"use strict";
n.d(t, { A: () => R }), n(801541);
var r = n(627968);
n(64700);
var i = n(889137),
    a = n(575593),
    s = n(397927),
    o = n(954921),
    l = n(278539),
    u = n(674658),
    c = n(245068),
    d = n(550111),
    _ = n(242874),
    f = n(75825),
    h = n(262737),
    p = n(182592),
    g = n(837921),
    E = n(937008),
    A = n(652215),
    I = n(985018),
    T = n(421514),
    y = n(306499);
let S = g.Ay.getEnableHardwareAcceleration() ? s.JsQ : s.euF;
function v(e) {
    let { avatarDecoration: t } = e,
        {
            avatarDecorationSrc: n,
            eventHandlers: i,
            avatarPlaceholderSrc: a,
        } = (0, l.A)({ avatarDecorationOverride: t, size: (0, o.Te)(s._3J.SIZE_152) });
    return (0, r.jsx)("div", {
        className: T.rk,
        children: (0, r.jsx)(S, {
            ...i,
            avatarDecoration: n,
            src: a,
            className: T.my,
            size: s._3J.SIZE_152,
            "aria-label": I.intl.string(I.t.lqaIxI),
        }),
    });
}
function C(e) {
    let { skuId: t } = e,
        n = (0, h.V)(t)?.config;
    return (0, r.jsxs)("div", {
        className: T.YS,
        children: [
            (0, r.jsx)("img", { src: y, alt: n?.accessibilityLabel, className: T.Zp }),
            (0, r.jsx)(p.A, { skuId: t }),
        ],
    });
}
function b(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: T.rz,
        children: (0, r.jsx)(d.A, {
            nameplate: t,
            className: T.qF,
            nameplatePreviewSize: "xlarge",
            isHighlighted: !0,
            showPlaceholderUser: !0,
        }),
    });
}
let N = (e) => {
    let { sku: t } = e,
        { selectedGiftStyle: n } = (0, E.Pv)(),
        { product: s } = (0, u.q)(t?.id);
    if (s?.type === a.R.BUNDLE)
        return (0, r.jsx)("div", { className: T.ww, children: (0, r.jsx)(c.X, { product: s, isHighlighted: !1 }) });
    let o = s?.items[0],
        l = (0, i.YW)(o)
            .with({ type: a.R.AVATAR_DECORATION }, (e) => (0, r.jsx)(v, { avatarDecoration: e }))
            .with({ type: a.R.PROFILE_EFFECT }, (e) => (0, r.jsx)(C, { skuId: e.skuId }))
            .with({ type: a.R.NAMEPLATE }, (e) => (0, r.jsx)(b, { nameplate: e }))
            .otherwise(() => null);
    return null != n && null == l
        ? (0, r.jsx)("div", {
              className: T.rk,
              children: (0, r.jsx)(f.A, {
                  defaultAnimationState: _.oA.LOOP,
                  giftStyle: n,
                  shouldAnimate: !0,
                  className: T.__invalid_giftMainAnimation,
              }),
          })
        : l;
};
function R(e) {
    let { sku: t } = e;
    return t.productLine === A.EZt.COLLECTIBLES ? (0, r.jsx)(N, { sku: t }) : null;
}
