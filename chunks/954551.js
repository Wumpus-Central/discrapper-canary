n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    a = n(481060),
    l = n(665149),
    o = n(388035),
    s = n(453473),
    c = n(388032);
function u(e) {
    let { onOpen: t, onClose: n, className: u } = e,
        d = i.useRef(null);
    return (0, r.jsx)(s.P, {
        onOpen: t,
        onClose: n,
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, i) => {
            var s, p;
            return (0, r.jsx)(o.U, {
                location: 'bookmarks-button',
                targetElementRef: d,
                children: (0, r.jsx)(
                    l.JO,
                    ((s = (function (e) {
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
                            ref: d,
                            className: u,
                            onClick: e,
                            icon: a.plf,
                            'aria-label': c.NW.string(c.t['2pAkDA']),
                            tooltip: t ? null : c.NW.string(c.t['2pAkDA']),
                            selected: t,
                            showBadge: i
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(p))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(p)).forEach(function (e) {
                              Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(p, e));
                          }),
                    s)
                )
            });
        }
    });
}
