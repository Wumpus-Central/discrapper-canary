"use strict";
n.d(t, { A: () => N }), n(801541);
var r = n(627968);
n(64700);
var i = n(889137),
    s = n(575593),
    a = n(397927),
    o = n(562819),
    l = n(215689),
    u = n(674658),
    c = n(512213),
    d = n(139136),
    _ = n(245068),
    f = n(242874),
    p = n(75825),
    h = n(837921),
    m = n(937008),
    E = n(652215),
    g = n(985018),
    A = n(2668);
let I = h.Ay.getEnableHardwareAcceleration() ? a.JsQ : a.euF;
function T(e) {
    let { avatarDecoration: t } = e,
        {
            avatarDecorationSrc: n,
            eventHandlers: i,
            avatarPlaceholderSrc: s,
        } = (0, l.A)({ avatarDecorationOverride: t, size: (0, o.Te)(a._3J.SIZE_152) });
    return (0, r.jsx)("div", {
        className: A.rk,
        children: (0, r.jsx)(I, {
            ...i,
            avatarDecoration: n,
            src: s,
            className: A.my,
            size: a._3J.SIZE_152,
            "aria-label": g.intl.string(g.t.lqaIxI),
        }),
    });
}
function S(e) {
    let { skuId: t } = e;
    return (0, r.jsx)("div", {
        className: A.YS,
        children: (0, r.jsx)(d.A, { skuId: t, removeSetHeight: !0, isHighlighted: !0 }),
    });
}
function y(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: A.rz,
        children: (0, r.jsx)(c.A, {
            nameplate: t,
            className: A.qF,
            nameplatePreviewSize: "xlarge",
            isHighlighted: !0,
            showPlaceholderUser: !0,
        }),
    });
}
let v = (e) => {
    let { sku: t } = e,
        { selectedGiftStyle: n } = (0, m.Pv)(),
        { product: a } = (0, u.q)(t?.id);
    if (a?.type === s.R.BUNDLE)
        return (0, r.jsx)("div", { className: A.ww, children: (0, r.jsx)(_.X, { product: a, isHighlighted: !1 }) });
    let o = a?.items[0],
        l = (0, i.YW)(o)
            .with({ type: s.R.AVATAR_DECORATION }, (e) => (0, r.jsx)(T, { avatarDecoration: e }))
            .with({ type: s.R.PROFILE_EFFECT }, (e) => (0, r.jsx)(S, { skuId: e.skuId }))
            .with({ type: s.R.NAMEPLATE }, (e) => (0, r.jsx)(y, { nameplate: e }))
            .otherwise(() => null);
    return null != n && null == l
        ? (0, r.jsx)("div", {
              className: A.rk,
              children: (0, r.jsx)(p.A, {
                  defaultAnimationState: f.oA.LOOP,
                  giftStyle: n,
                  shouldAnimate: !0,
                  className: A.__invalid_giftMainAnimation,
              }),
          })
        : l;
};
function N(e) {
    let { sku: t } = e;
    return t.productLine === E.EZt.COLLECTIBLES ? (0, r.jsx)(v, { sku: t }) : null;
}
