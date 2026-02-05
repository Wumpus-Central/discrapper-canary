"use strict";
n.d(t, { A: () => N }), n(801541);
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
    p = n(262737),
    h = n(182592),
    m = n(837921),
    g = n(937008),
    E = n(652215),
    A = n(985018),
    I = n(421514),
    T = n(306499);
let y = m.Ay.getEnableHardwareAcceleration() ? s.JsQ : s.euF;
function S(e) {
    let { avatarDecoration: t } = e,
        {
            avatarDecorationSrc: n,
            eventHandlers: i,
            avatarPlaceholderSrc: a,
        } = (0, l.A)({ avatarDecorationOverride: t, size: (0, o.Te)(s._3J.SIZE_152) });
    return (0, r.jsx)("div", {
        className: I.rk,
        children: (0, r.jsx)(y, {
            ...i,
            avatarDecoration: n,
            src: a,
            className: I.my,
            size: s._3J.SIZE_152,
            "aria-label": A.intl.string(A.t.lqaIxI),
        }),
    });
}
function v(e) {
    let { skuId: t } = e,
        n = (0, p.V)(t)?.config;
    return (0, r.jsxs)("div", {
        className: I.YS,
        children: [
            (0, r.jsx)("img", { src: T, alt: n?.accessibilityLabel, className: I.Zp }),
            (0, r.jsx)(h.A, { skuId: t }),
        ],
    });
}
function C(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: I.rz,
        children: (0, r.jsx)(d.A, {
            nameplate: t,
            className: I.qF,
            nameplatePreviewSize: "xlarge",
            isHighlighted: !0,
            showPlaceholderUser: !0,
        }),
    });
}
let b = (e) => {
    let { sku: t } = e,
        { selectedGiftStyle: n } = (0, g.Pv)(),
        { product: s } = (0, u.q)(t?.id),
        o = s?.items[0];
    if (s?.type === a.R.BUNDLE)
        return (0, r.jsx)("div", { className: I.ww, children: (0, r.jsx)(c.X, { product: s, isHighlighted: !1 }) });
    let l = (0, i.YW)(o)
        .with({ type: a.R.AVATAR_DECORATION }, (e) => (0, r.jsx)(S, { avatarDecoration: e }))
        .with({ type: a.R.PROFILE_EFFECT }, (e) => (0, r.jsx)(v, { skuId: e.skuId }))
        .with({ type: a.R.NAMEPLATE }, (e) => (0, r.jsx)(C, { nameplate: e }))
        .otherwise(() => null);
    return null != n && null == l
        ? (0, r.jsx)("div", {
              className: I.rk,
              children: (0, r.jsx)(f.A, {
                  defaultAnimationState: _.oA.LOOP,
                  giftStyle: n,
                  shouldAnimate: !0,
                  className: I.__invalid_giftMainAnimation,
              }),
          })
        : l;
};
function N(e) {
    let { sku: t } = e;
    return t.productLine === E.EZt.COLLECTIBLES ? (0, r.jsx)(b, { sku: t }) : null;
}
