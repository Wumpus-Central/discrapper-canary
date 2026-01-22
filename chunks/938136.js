n.d(t, { A: () => P }), n(801541);
var r = n(627968);
n(64700);
var i = n(889137),
    a = n(575593),
    s = n(397927),
    o = n(954921),
    l = n(278539),
    c = n(674658),
    u = n(245068),
    d = n(550111),
    f = n(242874),
    p = n(75825),
    _ = n(262737),
    h = n(182592),
    m = n(837921),
    g = n(937008),
    E = n(652215),
    b = n(985018),
    y = n(421514),
    O = n(306499);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = m.Ay.getEnableHardwareAcceleration() ? s.JsQ : s.euF;
function C(e) {
    let { avatarDecoration: t } = e,
        {
            avatarDecorationSrc: n,
            eventHandlers: i,
            avatarPlaceholderSrc: a,
        } = (0, l.A)({
            avatarDecorationOverride: t,
            size: (0, o.Te)(s._3J.SIZE_152),
        });
    return (0, r.jsx)("div", {
        className: y.rk,
        children: (0, r.jsx)(
            T,
            I(v({}, i), {
                avatarDecoration: n,
                src: a,
                className: y.my,
                size: s._3J.SIZE_152,
                "aria-label": b.intl.string(b.t.lqaIxI),
            }),
        ),
    });
}
function N(e) {
    var t;
    let { skuId: n } = e,
        i = null == (t = (0, _.V)(n)) ? void 0 : t.config;
    return (0, r.jsxs)("div", {
        className: y.YS,
        children: [
            (0, r.jsx)("img", {
                src: O,
                alt: null == i ? void 0 : i.accessibilityLabel,
                className: y.Zp,
            }),
            (0, r.jsx)(h.A, { skuId: n }),
        ],
    });
}
function R(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: y.rz,
        children: (0, r.jsx)(d.A, {
            nameplate: t,
            className: y.qF,
            nameplatePreviewSize: "xlarge",
            isHighlighted: !0,
            showPlaceholderUser: !0,
        }),
    });
}
let w = (e) => {
    let { sku: t } = e,
        { selectedGiftStyle: n } = (0, g.Pv)(),
        { product: s } = (0, c.q)(null == t ? void 0 : t.id),
        o = null == s ? void 0 : s.items[0];
    if ((null == s ? void 0 : s.type) === a.R.BUNDLE)
        return (0, r.jsx)("div", {
            className: y.ww,
            children: (0, r.jsx)(u.X, {
                product: s,
                isHighlighted: !1,
            }),
        });
    let l = (0, i.YW)(o)
        .with({ type: a.R.AVATAR_DECORATION }, (e) => (0, r.jsx)(C, { avatarDecoration: e }))
        .with({ type: a.R.PROFILE_EFFECT }, (e) => (0, r.jsx)(N, { skuId: e.skuId }))
        .with({ type: a.R.NAMEPLATE }, (e) => (0, r.jsx)(R, { nameplate: e }))
        .otherwise(() => null);
    return null != n && null == l
        ? (0, r.jsx)("div", {
              className: y.rk,
              children: (0, r.jsx)(p.A, {
                  defaultAnimationState: f.oA.LOOP,
                  giftStyle: n,
                  shouldAnimate: !0,
                  className: y.__invalid_giftMainAnimation,
              }),
          })
        : l;
};
function P(e) {
    let { sku: t } = e;
    return t.productLine === E.EZt.COLLECTIBLES ? (0, r.jsx)(w, { sku: t }) : null;
}
