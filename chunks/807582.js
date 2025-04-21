n.d(t, { Z: () => u }), n(953529);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(709586),
    o = n(267642),
    c = n(388032),
    d = n(721641);
let u = (e) => {
    let t,
        n,
        i,
        { guildFeature: u, guild: m, className: g, hideTooltip: p = !1, tooltipPosition: h = 'left', onClick: f } = e,
        x = m.hasFeature(u),
        b = (0, o._p)(u);
    return (x
        ? (null != b && (i = c.intl.string(c.t.hUgjyM)),
          (t = (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(a.Z, { className: d.unlockedIcon }),
                  (0, r.jsx)(s.X6q, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: c.intl.string(c.t['0O+87u'])
                  })
              ]
          })))
        : (null != b && (i = c.intl.string(c.t.L2wYYm)),
          (t = (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(a.Z, { className: d.icon }),
                  (0, r.jsx)(s.X6q, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: null != b && (0, o.e9)(b)
                  })
              ]
          }))),
    (n =
        p || null == i
            ? (0, r.jsx)('div', {
                  className: l()(d.availabilityIndicator, g),
                  children: t
              })
            : (0, r.jsx)(s.ua7, {
                  position: h,
                  text: i,
                  children: (e) => {
                      var n, i;
                      return (0, r.jsx)(
                          'div',
                          ((n = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })({}, e)),
                          (i = i =
                              {
                                  className: l()(d.availabilityIndicator, g),
                                  children: t
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(i)).forEach(function (e) {
                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                }),
                          n)
                      );
                  }
              })),
    null == f || x)
        ? n
        : (0, r.jsx)(s.P3F, {
              onClick: f,
              className: d.clickable,
              children: n
          });
};
