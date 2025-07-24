r.d(t, { Z: () => c });
var n = r(255367);
r(73800);
var s = r(481060),
    l = r(665149),
    a = r(388035),
    i = r(453473),
    o = r(388032);
function c(e) {
    let { onOpen: t, onClose: r, className: c } = e;
    return (0, n.jsx)(i.P, {
        onOpen: t,
        onClose: r,
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, r, i, u) => {
            var h, d;
            return (0, n.jsx)(a.U, {
                location: 'bookmarks-button',
                targetElementRef: u,
                children: (0, n.jsx)(
                    l.JO,
                    ((h = (function (e) {
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
                    })({}, r)),
                    (d = d =
                        {
                            ref: u,
                            className: c,
                            onClick: e,
                            icon: s.plf,
                            'aria-label': o.intl.string(o.t['2pAkDA']),
                            tooltip: t ? null : o.intl.string(o.t['2pAkDA']),
                            selected: t,
                            showBadge: i
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(d))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(d)).forEach(function (e) {
                              Object.defineProperty(h, e, Object.getOwnPropertyDescriptor(d, e));
                          }),
                    h)
                )
            });
        }
    });
}
