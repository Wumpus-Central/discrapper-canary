n.d(t, { Z: () => T });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(392711),
    s = n(755721),
    l = n(481060),
    c = n(239091),
    u = n(596454),
    d = n(911969),
    f = n(744969),
    p = n(572004),
    _ = n(49012),
    m = n(970184),
    h = n(280501),
    g = n(388032),
    E = n(392061);
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
function S(e) {
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
function I(e) {
    let { url: t, onSelect: n } = e;
    return p.wS && null != t
        ? (0, r.jsx)(l.v2r, {
              navId: "component-button",
              onClose: c.Zy,
              "aria-label": g.intl.string(g.t.tvTXy8),
              onSelect: n,
              children: (0, r.jsx)(l.kSQ, {
                  children: (0, r.jsx)(l.sNh, {
                      id: "copy",
                      label: g.intl.string(g.t.uHhnfa),
                      action: () => (0, p.JG)(t),
                  }),
              }),
          })
        : null;
}
function T(e) {
    let t,
        { label: n, style: i, disabled: p, emoji: g, url: b, skuId: O } = e,
        { executeStateUpdate: T, visualState: A, isDisabled: C } = (0, m.Ee)(e),
        N = (0, f.s)(O),
        P = null != O && i === d.ZJ.PREMIUM,
        R = P && (null == N ? void 0 : N.disabled),
        D = P ? (null == N ? void 0 : N.label) : n,
        w = null != g,
        x = null != D && D.length > 0,
        L = i === d.ZJ.LINK && null != b && b.length > 0,
        j = A === h.gH.LOADING || (P && null == N);
    return (
        (t = L
            ? () => {
                  (0, _.q)({
                      href: null != b ? b : "",
                      shouldConfirm: !0,
                  });
              }
            : P
              ? null != N && !1 === N.disabled
                  ? N.onClick
                  : o.noop
              : () => T()),
        (0, r.jsxs)(s.zx, {
            "data-migration-pending": !0,
            color: S(i),
            size: s.zx.Sizes.SMALL,
            disabled: p || A === h.gH.DISABLED || C || R,
            onClick: t,
            onContextMenu: (e) => {
                L && (0, c.vq)(e, (e) => (0, r.jsx)(I, v(y({}, e), { url: b })));
            },
            role: L ? "link" : "button",
            children: [
                (0, r.jsxs)("div", {
                    className: a()(E.content, {
                        [E.hidden]: j,
                        [E.premium]: P,
                    }),
                    "aria-hidden": j,
                    children: [
                        P
                            ? (0, r.jsx)("div", {
                                  className: E.shopIcon,
                                  children: (0, r.jsx)(l.EOn, {
                                      size: "xs",
                                      color: "white",
                                  }),
                              })
                            : null,
                        w
                            ? (0, r.jsx)(u.Z, {
                                  className: a()({ [E.textEmoji]: x }),
                                  src: g.src,
                                  emojiId: g.id,
                                  emojiName: g.name,
                                  animated: g.animated,
                              })
                            : null,
                        x
                            ? (0, r.jsx)("div", {
                                  className: E.label,
                                  children: D,
                              })
                            : null,
                        L
                            ? (0, r.jsx)(l.rgF, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: E.launchIcon,
                              })
                            : null,
                    ],
                }),
                j
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
