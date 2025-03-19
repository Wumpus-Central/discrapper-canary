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
    b = r(49012),
    f = r(970184),
    O = r(280501),
    y = r(388032),
    m = r(457995);
function j(e) {
    let { url: t, onSelect: r } = e;
    return p.wS && null != t
        ? (0, n.jsx)(a.v2r, {
              navId: 'component-button',
              onClose: c.Zy,
              'aria-label': y.NW.string(y.t.tvTXy8),
              onSelect: r,
              children: (0, n.jsx)(a.kSQ, {
                  children: (0, n.jsx)(a.sNh, {
                      id: 'copy',
                      label: y.NW.string(y.t.uHhnfX),
                      action: () => (0, p.JG)(t)
                  })
              })
          })
        : null;
}
function g(e) {
    var t, r;
    let l;
    let { label: p, style: y, disabled: g, emoji: v, url: h, skuId: P } = e,
        { executeStateUpdate: x, visualState: w, isDisabled: S } = (0, f.Ee)(e),
        C = (0, f.CJ)(),
        E = (0, d.s)(P, null !== (r = null == C ? void 0 : null === (t = C.message) || void 0 === t ? void 0 : t.applicationId) && void 0 !== r ? r : void 0),
        N = null != P && y === u.ZJ.PREMIUM,
        I = N && (null == E ? void 0 : E.disabled),
        k = N ? (null == E ? void 0 : E.label) : p,
        Z = null != v,
        T = null != k && k.length > 0,
        D = y === u.ZJ.LINK && null != h && h.length > 0,
        L = w === O.gH.LOADING || (N && null == E);
    return (
        (l = D
            ? () => {
                  (0, b.q)({
                      href: null != h ? h : '',
                      shouldConfirm: !0
                  });
              }
            : N
              ? null != E && !1 === E.disabled
                  ? E.onClick
                  : o.noop
              : () => x()),
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
            })(y),
            size: a.zxk.Sizes.SMALL,
            disabled: g || w === O.gH.DISABLED || S || I,
            onClick: l,
            onContextMenu: (e) => {
                D &&
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
            role: D ? 'link' : 'button',
            children: [
                (0, n.jsxs)('div', {
                    className: i()(m.content, {
                        [m.hidden]: L,
                        [m.premium]: N
                    }),
                    'aria-hidden': L,
                    children: [
                        N
                            ? (0, n.jsx)('div', {
                                  className: m.shopIcon,
                                  children: (0, n.jsx)(a.EOn, {
                                      size: 'xs',
                                      color: 'white'
                                  })
                              })
                            : null,
                        Z
                            ? (0, n.jsx)(s.Z, {
                                  className: i()({ [m.textEmoji]: T }),
                                  src: v.src,
                                  emojiId: v.id,
                                  emojiName: v.name,
                                  animated: v.animated
                              })
                            : null,
                        T
                            ? (0, n.jsx)('div', {
                                  className: m.label,
                                  children: k
                              })
                            : null,
                        D
                            ? (0, n.jsx)(a.rgF, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: m.launchIcon
                              })
                            : null
                    ]
                }),
                L
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
