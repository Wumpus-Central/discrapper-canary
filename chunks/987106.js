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
    d = r(744969),
    p = r(572004),
    f = r(49012),
    b = r(970184),
    O = r(280501),
    m = r(388032),
    y = r(127879);
function j(e) {
    let { url: t, onSelect: r } = e;
    return p.wS && null != t
        ? (0, n.jsx)(a.v2r, {
              navId: 'component-button',
              onClose: c.Zy,
              'aria-label': m.intl.string(m.t.tvTXy8),
              onSelect: r,
              children: (0, n.jsx)(a.kSQ, {
                  children: (0, n.jsx)(a.sNh, {
                      id: 'copy',
                      label: m.intl.string(m.t.uHhnfX),
                      action: () => (0, p.JG)(t)
                  })
              })
          })
        : null;
}
function g(e) {
    let t,
        { label: r, style: l, disabled: p, emoji: m, url: g, skuId: h } = e,
        { executeStateUpdate: v, visualState: P, isDisabled: x } = (0, b.Ee)(e),
        S = (0, d.s)(h),
        w = null != h && l === u.ZJ.PREMIUM,
        C = w && (null == S ? void 0 : S.disabled),
        E = w ? (null == S ? void 0 : S.label) : r,
        N = null != m,
        I = null != E && E.length > 0,
        T = l === u.ZJ.LINK && null != g && g.length > 0,
        k = P === O.gH.LOADING || (w && null == S);
    return (
        (t = T
            ? () => {
                  (0, f.q)({
                      href: null != g ? g : '',
                      shouldConfirm: !0
                  });
              }
            : w
              ? null != S && !1 === S.disabled
                  ? S.onClick
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
            disabled: p || P === O.gH.DISABLED || x || C,
            onClick: t,
            onContextMenu: (e) => {
                T &&
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
            role: T ? 'link' : 'button',
            children: [
                (0, n.jsxs)('div', {
                    className: i()(y.content, {
                        [y.hidden]: k,
                        [y.premium]: w
                    }),
                    'aria-hidden': k,
                    children: [
                        w
                            ? (0, n.jsx)('div', {
                                  className: y.shopIcon,
                                  children: (0, n.jsx)(a.EOn, {
                                      size: 'xs',
                                      color: 'white'
                                  })
                              })
                            : null,
                        N
                            ? (0, n.jsx)(s.Z, {
                                  className: i()({ [y.textEmoji]: I }),
                                  src: m.src,
                                  emojiId: m.id,
                                  emojiName: m.name,
                                  animated: m.animated
                              })
                            : null,
                        I
                            ? (0, n.jsx)('div', {
                                  className: y.label,
                                  children: E
                              })
                            : null,
                        T
                            ? (0, n.jsx)(a.rgF, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: y.launchIcon
                              })
                            : null
                    ]
                }),
                k
                    ? (0, n.jsx)('div', {
                          className: y.loading,
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
