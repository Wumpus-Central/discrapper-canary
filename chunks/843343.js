n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(91192),
    l = n(442837),
    o = n(481060),
    s = n(299379),
    a = n(486472),
    c = n(430824),
    u = n(682662),
    d = n(662146),
    h = n(981631),
    p = n(388032),
    f = n(552179);
function g() {
    var e, t;
    let n = (0, l.e7)([a.Z, c.Z], () => a.Z.unavailableGuilds.filter((e) => null == c.Z.getGuild(e)).length),
        g = (0, i.Ie)('unavailable-guilds-button');
    return n <= 0
        ? null
        : (0, r.jsx)(u.H, {
              children: (0, r.jsx)(d.Z, {
                  text: p.NW.format(p.t['TnH05+'], { count: n }),
                  color: o.ua7.Colors.RED,
                  children: (0, r.jsx)(
                      o.eee,
                      ((e = (function (e) {
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
                      })(
                          {
                              href: (0, s.Z)(h.RK.TWITTER),
                              target: '_blank',
                              className: f.guildsError,
                              'aria-label': p.NW.formatToPlainString(p.t['MEpX+/'], { count: n })
                          },
                          g
                      )),
                      (t = t =
                          {
                              children: (0, r.jsx)('span', {
                                  'aria-hidden': !0,
                                  className: f.errorInner,
                                  children: '!'
                              })
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(t)).forEach(function (n) {
                                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                            }),
                      e)
                  )
              })
          });
}
