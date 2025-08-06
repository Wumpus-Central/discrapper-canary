n.d(t, {
    Np: () => _,
    l8: () => d,
    mc: () => f,
    so: () => u,
});
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(822869);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = "forward-modal";
function d(e) {
    let { message: t, source: a, initialSelectedDestinations: l = [], forwardOptions: d, onRequestSent: f } = e;
    (0, o.Lb)(t.channel_id, t.id, a),
        (0, i.ZDy)(
            async () => {
                let { ForwardModal: e } = await n.e("33648").then(n.bind(n, 930864));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        c(s({}, n), {
                            message: t,
                            initialSelectedDestinations: l,
                            forwardOptions: d,
                            onRequestSent: f,
                        }),
                    );
            },
            { modalKey: u },
        );
}
function f() {
    (0, i.Mr3)(u);
}
function _(e) {
    let { message: t, failedDestinations: o, forwardOptions: a } = e;
    (0, i.ZDy)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e("86590").then(n.bind(n, 384331));
        return (n) =>
            (0, r.jsx)(
                e,
                c(s({}, n), {
                    message: t,
                    failedDestinations: o,
                    forwardOptions: a,
                }),
            );
    });
}
