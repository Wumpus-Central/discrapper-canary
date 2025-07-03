n.d(t, { Z: () => s });
var r = n(255367),
    i = n(481060),
    l = n(821020),
    o = n(388032),
    a = n(375613);
function s(e) {
    let { children: t } = e,
        { notificationCenterVariant: n } = l.Lk.useExperiment({ location: 'NotificationsInboxTooltip' }),
        s = n === l.jP.LEGACY ? o.intl.string(o.t.GSmTKC) : o.intl.string(o.t.HcoRu7);
    return (0, r.jsx)(i.ua7, {
        hideOnClick: !0,
        spacing: 12,
        position: 'right',
        text: s,
        tooltipClassName: a.listItemTooltip,
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
                (i = i = { children: t }),
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
    });
}
