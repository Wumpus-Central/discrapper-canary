n.d(t, { l: () => h });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(388905),
    a = n(362762),
    o = n(358085),
    s = n(981631),
    c = n(388032),
    u = n(762159);
let d = n(575703);
function p(e) {
    let { children: t } = e,
        n = (0, i.e7)([a.Z], () => a.Z.getHighestState());
    return (0, o.isDesktop)() || n !== s.kEZ.OPENING
        ? (0, o.isDesktop)() || n !== s.kEZ.OPEN
            ? t
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('img', {
                          className: u.backgroundArtwork,
                          src: d,
                          alt: ''
                      }),
                      (0, r.jsx)('div', {
                          className: u.container,
                          children: (0, r.jsxs)(l.ZP, {
                              children: [
                                  (0, r.jsx)(l.Dx, {
                                      className: u.appOpenedTitle,
                                      children: c.NW.string(c.t.csrAMD)
                                  }),
                                  (0, r.jsx)(l.DK, { children: c.NW.string(c.t.ghBJz8) })
                              ]
                          })
                      })
                  ]
              })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)('img', {
                      className: u.backgroundArtwork,
                      src: d,
                      alt: ''
                  }),
                  (0, r.jsx)('div', {
                      className: u.container,
                      children: (0, r.jsxs)(l.ZP, {
                          children: [(0, r.jsx)(l.Dx, { children: c.NW.string(c.t['Z+hCVV']) }), (0, r.jsx)(l.Hh, {})]
                      })
                  })
              ]
          });
}
function h(e) {
    var t, n;
    function i(t) {
        return (0, r.jsxs)(p, {
            children: [
                (0, r.jsx)(
                    e,
                    (function (e) {
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
                    })({}, t),
                    'deeplink-wrapper'
                ),
                ';'
            ]
        });
    }
    return (i.displayName = 'Deeplink('.concat(null != (n = null != (t = e.displayName) ? t : e.name) ? n : '<Unknown>', ')')), i;
}
