n.d(t, {
    Np: () => d,
    l8: () => c,
    mc: () => u,
    so: () => s
});
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(822869);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
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
    (0, l.Lb)(t.channel_id, t.id, c),
        (0, r.ZDy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([n.e('25292'), n.e('6380'), n.e('16967')]).then(n.bind(n, 930864));
                return (n) =>
                    (0, i.jsx)(
                        e,
                        o(a({}, n), {
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
    (0, r.Mr3)(s);
}
function d(e) {
    let { message: t, failedDestinations: l, forwardOptions: s } = e;
    (0, r.ZDy)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e('86590').then(n.bind(n, 384331));
        return (n) =>
            (0, i.jsx)(
                e,
                o(a({}, n), {
                    message: t,
                    failedDestinations: l,
                    forwardOptions: s
                })
            );
    });
}
