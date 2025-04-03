n.d(t, {
    Np: () => d,
    l8: () => c,
    mc: () => u,
    so: () => s
});
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(822869);
function a(e) {
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
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
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
        e
    );
}
let s = 'forward-modal';
function c(e) {
    let { message: t, source: c, initialSelectedDestinations: u = [], forwardOptions: d, onRequestSent: f } = e;
    (0, o.Lb)(t.channel_id, t.id, c),
        (0, i.ZDy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([n.e('25292'), n.e('6380'), n.e('16967')]).then(n.bind(n, 930864));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        l(a({}, n), {
                            message: t,
                            initialSelectedDestinations: u,
                            forwardOptions: d,
                            onRequestSent: f
                        })
                    );
            },
            { modalKey: s }
        );
}
function u() {
    (0, i.Mr3)(s);
}
function d(e) {
    let { message: t, failedDestinations: o, forwardOptions: s } = e;
    (0, i.ZDy)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e('86590').then(n.bind(n, 384331));
        return (n) =>
            (0, r.jsx)(
                e,
                l(a({}, n), {
                    message: t,
                    failedDestinations: o,
                    forwardOptions: s
                })
            );
    });
}
