n.d(t, { Z: () => S });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(392711),
    s = n(755721),
    l = n(481060),
    c = n(239091),
    u = n(596454),
    d = n(911969),
    f = n(744969),
    _ = n(572004),
    p = n(49012),
    h = n(970184),
    m = n(280501),
    g = n(388032),
    E = n(127879);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    switch (e) {
        case d.ZJ.PRIMARY:
        case d.ZJ.PREMIUM:
            return s.zx.Colors.BRAND;
        case d.ZJ.SUCCESS:
            return s.zx.Colors.GREEN;
        case d.ZJ.DESTRUCTIVE:
            return s.zx.Colors.RED;
        default:
            return s.zx.Colors.PRIMARY;
    }
}
function T(e) {
    let { url: t, onSelect: n } = e;
    return _.wS && null != t
        ? (0, r.jsx)(l.v2r, {
              navId: "component-button",
              onClose: c.Zy,
              "aria-label": g.intl.string(g.t.tvTXy8),
              onSelect: n,
              children: (0, r.jsx)(l.kSQ, {
                  children: (0, r.jsx)(l.sNh, {
                      id: "copy",
                      label: g.intl.string(g.t.uHhnfX),
                      action: () => (0, _.JG)(t),
                  }),
              }),
          })
        : null;
}
function S(e) {
    let t,
        { label: n, style: i, disabled: _, emoji: g, url: b, skuId: O } = e,
        { executeStateUpdate: S, visualState: A, isDisabled: N } = (0, h.Ee)(e),
        C = (0, f.s)(O),
        R = null != O && i === d.ZJ.PREMIUM,
        P = R && (null == C ? void 0 : C.disabled),
        w = R ? (null == C ? void 0 : C.label) : n,
        D = null != g,
        L = null != w && w.length > 0,
        x = i === d.ZJ.LINK && null != b && b.length > 0,
        M = A === m.gH.LOADING || (R && null == C);
    return (
        (t = x
            ? () => {
                  (0, p.q)({
                      href: null != b ? b : "",
                      shouldConfirm: !0,
                  });
              }
            : R
              ? null != C && !1 === C.disabled
                  ? C.onClick
                  : a.noop
              : () => S()),
        (0, r.jsxs)(s.zx, {
            "data-migration-pending": !0,
            color: I(i),
            size: s.zx.Sizes.SMALL,
            disabled: _ || A === m.gH.DISABLED || N || P,
            onClick: t,
            onContextMenu: (e) => {
                x && (0, c.vq)(e, (e) => (0, r.jsx)(T, v(y({}, e), { url: b })));
            },
            role: x ? "link" : "button",
            children: [
                (0, r.jsxs)("div", {
                    className: o()(E.content, {
                        [E.hidden]: M,
                        [E.premium]: R,
                    }),
                    "aria-hidden": M,
                    children: [
                        R
                            ? (0, r.jsx)("div", {
                                  className: E.shopIcon,
                                  children: (0, r.jsx)(l.EOn, {
                                      size: "xs",
                                      color: "white",
                                  }),
                              })
                            : null,
                        D
                            ? (0, r.jsx)(u.Z, {
                                  className: o()({ [E.textEmoji]: L }),
                                  src: g.src,
                                  emojiId: g.id,
                                  emojiName: g.name,
                                  animated: g.animated,
                              })
                            : null,
                        L
                            ? (0, r.jsx)("div", {
                                  className: E.label,
                                  children: w,
                              })
                            : null,
                        x
                            ? (0, r.jsx)(l.rgF, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: E.launchIcon,
                              })
                            : null,
                    ],
                }),
                M
                    ? (0, r.jsx)("div", {
                          className: E.loading,
                          children: (0, r.jsx)(l.bbz, {
                              dotRadius: 3.5,
                              themed: !0,
                          }),
                      })
                    : null,
            ],
        })
    );
}
