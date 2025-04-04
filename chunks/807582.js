n.d(t, { Z: () => _ }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    c = n(709586),
    l = n(267642),
    d = n(388032),
    s = n(721641);
let _ = (e) => {
    let t,
        n,
        i,
        { guildFeature: _, guild: p, className: f, hideTooltip: u = !1, tooltipPosition: m = 'left', onClick: b } = e,
        v = p.hasFeature(_),
        g = (0, l._p)(_);
    return (v
        ? (null != g && (i = d.NW.string(d.t.hUgjyM)),
          (t = (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.Z, { className: s.unlockedIcon }),
                  (0, r.jsx)(a.X6q, {
                      variant: 'eyebrow',
                      className: s.description,
                      children: d.NW.string(d.t['0O+87u'])
                  })
              ]
          })))
        : (null != g && (i = d.NW.string(d.t.L2wYYm)),
          (t = (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.Z, { className: s.icon }),
                  (0, r.jsx)(a.X6q, {
                      variant: 'eyebrow',
                      className: s.description,
                      children: null != g && (0, l.e9)(g)
                  })
              ]
          }))),
    (n =
        u || null == i
            ? (0, r.jsx)('div', {
                  className: o()(s.availabilityIndicator, f),
                  children: t
              })
            : (0, r.jsx)(a.ua7, {
                  position: m,
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
                                  className: o()(s.availabilityIndicator, f),
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
    null == b || v)
        ? n
        : (0, r.jsx)(a.P3F, {
              onClick: b,
              className: s.clickable,
              children: n
          });
};
