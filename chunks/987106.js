r.d(t, { Z: () => g });
var n = r(200651);
r(192379);
var l = r(120356),
    i = r.n(l),
    o = r(392711),
    a = r(481060),
    c = r(239091),
    s = r(596454),
    u = r(911969),
    p = r(744969),
    d = r(572004),
    f = r(49012),
    b = r(970184),
    O = r(280501),
    y = r(388032),
    m = r(127879);
function j(e) {
    let { url: t, onSelect: r } = e;
    return d.wS && null != t
        ? (0, n.jsx)(a.v2r, {
              navId: 'component-button',
              onClose: c.Zy,
              'aria-label': y.NW.string(y.t.tvTXy8),
              onSelect: r,
              children: (0, n.jsx)(a.kSQ, {
                  children: (0, n.jsx)(a.sNh, {
                      id: 'copy',
                      label: y.NW.string(y.t.uHhnfX),
                      action: () => (0, d.JG)(t)
                  })
              })
          })
        : null;
}
function g(e) {
    let t,
        { label: r, style: l, disabled: d, emoji: y, url: g, skuId: h } = e,
        { executeStateUpdate: v, visualState: P, isDisabled: x } = (0, b.Ee)(e),
        w = (0, p.s)(h),
        S = null != h && l === u.ZJ.PREMIUM,
        C = S && (null == w ? void 0 : w.disabled),
        E = S ? (null == w ? void 0 : w.label) : r,
        N = null != y,
        I = null != E && E.length > 0,
        k = l === u.ZJ.LINK && null != g && g.length > 0,
        Z = P === O.gH.LOADING || (S && null == w);
    return (
        (t = k
            ? () => {
                  (0, f.q)({
                      href: null != g ? g : '',
                      shouldConfirm: !0
                  });
              }
            : S
              ? null != w && !1 === w.disabled
                  ? w.onClick
                  : o.noop
              : () => v()),
        (0, n.jsxs)(a.zxk, {
            color: (function (e) {
                switch (e) {
                    case u.ZJ.PRIMARY:
                    case u.ZJ.PREMIUM:
                        return a.zxk.Colors.BRAND;
                    case u.ZJ.SUCCESS:
                        return a.zxk.Colors.GREEN;
                    case u.ZJ.DESTRUCTIVE:
                        return a.zxk.Colors.RED;
                    default:
                        return a.zxk.Colors.PRIMARY;
                }
            })(l),
            size: a.zxk.Sizes.SMALL,
            disabled: d || P === O.gH.DISABLED || x || C,
            onClick: t,
            onContextMenu: (e) => {
                k &&
                    (0, c.vq)(e, (e) => {
                        var t, r;
                        return (0, n.jsx)(
                            j,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (r = r = { url: g }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            t)
                        );
                    });
            },
            role: k ? 'link' : 'button',
            children: [
                (0, n.jsxs)('div', {
                    className: i()(m.content, {
                        [m.hidden]: Z,
                        [m.premium]: S
                    }),
                    'aria-hidden': Z,
                    children: [
                        S
                            ? (0, n.jsx)('div', {
                                  className: m.shopIcon,
                                  children: (0, n.jsx)(a.EOn, {
                                      size: 'xs',
                                      color: 'white'
                                  })
                              })
                            : null,
                        N
                            ? (0, n.jsx)(s.Z, {
                                  className: i()({ [m.textEmoji]: I }),
                                  src: y.src,
                                  emojiId: y.id,
                                  emojiName: y.name,
                                  animated: y.animated
                              })
                            : null,
                        I
                            ? (0, n.jsx)('div', {
                                  className: m.label,
                                  children: E
                              })
                            : null,
                        k
                            ? (0, n.jsx)(a.rgF, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: m.launchIcon
                              })
                            : null
                    ]
                }),
                Z
                    ? (0, n.jsx)('div', {
                          className: m.loading,
                          children: (0, n.jsx)(a.bbz, {
                              dotRadius: 3.5,
                              themed: !0
                          })
                      })
                    : null
            ]
        })
    );
}
