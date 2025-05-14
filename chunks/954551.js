n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(665149),
    a = n(388035),
    o = n(453473),
    s = n(388032);
function c(e) {
    let { onOpen: t, onClose: n, className: c } = e;
    return (0, r.jsx)(o.P, {
        onOpen: t,
        onClose: n,
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, o, u) => {
            var d, p;
            return (0, r.jsx)(a.U, {
                location: 'bookmarks-button',
                targetElementRef: u,
                children: (0, r.jsx)(
                    l.JO,
                    ((d = (function (e) {
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
                    })({}, n)),
                    (p = p =
                        {
                            ref: u,
                            className: c,
                            onClick: e,
                            icon: i.plf,
                            'aria-label': s.intl.string(s.t['2pAkDA']),
                            tooltip: t ? null : s.intl.string(s.t['2pAkDA']),
                            selected: t,
                            showBadge: o
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(p))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(p)).forEach(function (e) {
                              Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(p, e));
                          }),
                    d)
                )
            });
        }
    });
}
