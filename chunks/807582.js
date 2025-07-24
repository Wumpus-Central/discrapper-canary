(n.d(t, { Z: () => m }), n(953529));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(158638),
    o = n(267642),
    c = n(981631),
    d = n(388032),
    u = n(721641);
let m = (e) => {
    let t,
        n,
        i,
        { guildFeature: m, guild: g, className: p, hideTooltip: f = !1, tooltipPosition: h = 'left', onClick: x } = e,
        b = g.features.has(m),
        j = (0, a.AR)(g.id, 'GuildSettingsBoostPerks'),
        v = (0, o._p)(m);
    return !b && m === c.oNc.VANITY_URL && j
        ? null
        : (b
                ? (null != v && (i = d.intl.string(d.t.hUgjyM)),
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.$Eu, {
                              color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: u.unlockedIcon
                          }),
                          (0, r.jsx)(s.X6q, {
                              variant: 'eyebrow',
                              className: u.description,
                              children: d.intl.string(d.t['0O+87u'])
                          })
                      ]
                  })))
                : (null != v && (i = d.intl.string(d.t.L2wYYm)),
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.$Eu, {
                              color: 'currentColor',
                              className: u.icon
                          }),
                          (0, r.jsx)(s.X6q, {
                              variant: 'eyebrow',
                              className: u.description,
                              children: null != v && (0, o.e9)(v)
                          })
                      ]
                  }))),
            (n =
                f || null == i
                    ? (0, r.jsx)('div', {
                          className: l()(u.availabilityIndicator, p),
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
                                          className: l()(u.availabilityIndicator, p),
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
            null == x || b)
          ? n
          : (0, r.jsx)(s.P3F, {
                onClick: x,
                className: u.clickable,
                children: n
            });
};
