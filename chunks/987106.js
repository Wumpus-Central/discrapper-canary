r.d(t, { Z: () => h });
var n = r(255367);
r(73800);
var l = r(120356),
    i = r.n(l),
    o = r(392711),
    a = r(755721),
    c = r(481060),
    s = r(239091),
    u = r(596454),
    d = r(911969),
    p = r(744969),
    f = r(572004),
    b = r(49012),
    m = r(970184),
    O = r(280501),
    y = r(388032),
    j = r(127879);
function g(e) {
    let { url: t, onSelect: r } = e;
    return f.wS && null != t
        ? (0, n.jsx)(c.v2r, {
              navId: 'component-button',
              onClose: s.Zy,
              'aria-label': y.intl.string(y.t.tvTXy8),
              onSelect: r,
              children: (0, n.jsx)(c.kSQ, {
                  children: (0, n.jsx)(c.sNh, {
                      id: 'copy',
                      label: y.intl.string(y.t.uHhnfX),
                      action: () => (0, f.JG)(t)
                  })
              })
          })
        : null;
}
function h(e) {
    let t,
        { label: r, style: l, disabled: f, emoji: y, url: h, skuId: v } = e,
        { executeStateUpdate: P, visualState: x, isDisabled: S } = (0, m.Ee)(e),
        w = (0, p.s)(v),
        C = null != v && l === d.ZJ.PREMIUM,
        E = C && (null == w ? void 0 : w.disabled),
        N = C ? (null == w ? void 0 : w.label) : r,
        I = null != y,
        T = null != N && N.length > 0,
        Z = l === d.ZJ.LINK && null != h && h.length > 0,
        k = x === O.gH.LOADING || (C && null == w);
    return (
        (t = Z
            ? () => {
                  (0, b.q)({
                      href: null != h ? h : '',
                      shouldConfirm: !0
                  });
              }
            : C
              ? null != w && !1 === w.disabled
                  ? w.onClick
                  : o.noop
              : () => P()),
        (0, n.jsxs)(a.zx, {
            color: (function (e) {
                switch (e) {
                    case d.ZJ.PRIMARY:
                    case d.ZJ.PREMIUM:
                        return a.zx.Colors.BRAND;
                    case d.ZJ.SUCCESS:
                        return a.zx.Colors.GREEN;
                    case d.ZJ.DESTRUCTIVE:
                        return a.zx.Colors.RED;
                    default:
                        return a.zx.Colors.PRIMARY;
                }
            })(l),
            size: a.zx.Sizes.SMALL,
            disabled: f || x === O.gH.DISABLED || S || E,
            onClick: t,
            onContextMenu: (e) => {
                Z &&
                    (0, s.vq)(e, (e) => {
                        var t, r;
                        return (0, n.jsx)(
                            g,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            ((n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n));
                                        }));
                                }
                                return e;
                            })({}, e)),
                            (r = r = { url: h }),
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
            role: Z ? 'link' : 'button',
            children: [
                (0, n.jsxs)('div', {
                    className: i()(j.content, {
                        [j.hidden]: k,
                        [j.premium]: C
                    }),
                    'aria-hidden': k,
                    children: [
                        C
                            ? (0, n.jsx)('div', {
                                  className: j.shopIcon,
                                  children: (0, n.jsx)(c.EOn, {
                                      size: 'xs',
                                      color: 'white'
                                  })
                              })
                            : null,
                        I
                            ? (0, n.jsx)(u.Z, {
                                  className: i()({ [j.textEmoji]: T }),
                                  src: y.src,
                                  emojiId: y.id,
                                  emojiName: y.name,
                                  animated: y.animated
                              })
                            : null,
                        T
                            ? (0, n.jsx)('div', {
                                  className: j.label,
                                  children: N
                              })
                            : null,
                        Z
                            ? (0, n.jsx)(c.rgF, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: j.launchIcon
                              })
                            : null
                    ]
                }),
                k
                    ? (0, n.jsx)('div', {
                          className: j.loading,
                          children: (0, n.jsx)(c.bbz, {
                              dotRadius: 3.5,
                              themed: !0
                          })
                      })
                    : null
            ]
        })
    );
}
