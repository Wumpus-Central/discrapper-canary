(n.d(t, { Z: () => g }), n(953529));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(158638),
    o = n(709586),
    c = n(267642),
    d = n(981631),
    u = n(388032),
    m = n(721641);
let g = (e) => {
    let t,
        n,
        i,
        { guildFeature: g, guild: p, className: f, hideTooltip: h = !1, tooltipPosition: x = 'left', onClick: b } = e,
        j = p.features.has(g),
        _ = (0, a.AR)(p.id, 'GuildSettingsBoostPerks'),
        v = (0, c._p)(g);
    return !j && g === d.oNc.VANITY_URL && _
        ? null
        : (j
                ? (null != v && (i = u.intl.string(u.t.hUgjyM)),
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.Z, { className: m.unlockedIcon }),
                          (0, r.jsx)(s.X6q, {
                              variant: 'eyebrow',
                              className: m.description,
                              children: u.intl.string(u.t['0O+87u'])
                          })
                      ]
                  })))
                : (null != v && (i = u.intl.string(u.t.L2wYYm)),
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.Z, { className: m.icon }),
                          (0, r.jsx)(s.X6q, {
                              variant: 'eyebrow',
                              className: m.description,
                              children: null != v && (0, c.e9)(v)
                          })
                      ]
                  }))),
            (n =
                h || null == i
                    ? (0, r.jsx)('div', {
                          className: l()(m.availabilityIndicator, f),
                          children: t
                      })
                    : (0, r.jsx)(s.ua7, {
                          position: x,
                          text: i,
                          children: (e) => {
                              var n, i;
                              return (0, r.jsx)(
                                  'div',
                                  ((n = (function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var n = null != arguments[t] ? arguments[t] : {},
                                              r = Object.keys(n);
                                          ('function' == typeof Object.getOwnPropertySymbols &&
                                              (r = r.concat(
                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                  })
                                              )),
                                              r.forEach(function (t) {
                                                  var r;
                                                  ((r = n[t]),
                                                      t in e
                                                          ? Object.defineProperty(e, t, {
                                                                value: r,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0
                                                            })
                                                          : (e[t] = r));
                                              }));
                                      }
                                      return e;
                                  })({}, e)),
                                  (i = i =
                                      {
                                          className: l()(m.availabilityIndicator, f),
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
            null == b || j)
          ? n
          : (0, r.jsx)(s.P3F, {
                onClick: b,
                className: m.clickable,
                children: n
            });
};
