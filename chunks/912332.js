n.d(t, {
    Np: () => p,
    l8: () => d,
    mc: () => f,
    so: () => u,
});
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(822869);
function o(e, t, n) {
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
                o(e, t, n[t]);
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
    let {
        message: t,
        source: o,
        initialSelectedDestinations: l = [],
        forwardOptions: d,
        onRequestSent: f,
        customSendHandler: p,
    } = e;
    (0, a.Lb)(t.channel_id, t.id, o),
        (0, i.ZDy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([n.e("36653"), n.e("33648"), n.e("48533")]).then(
                    n.bind(n, 930864),
                );
                return (n) =>
                    (0, r.jsx)(
                        e,
                        c(s({}, n), {
                            message: t,
                            initialSelectedDestinations: l,
                            forwardOptions: d,
                            onRequestSent: f,
                            customSendHandler: p,
                        }),
                    );
            },
            { modalKey: u },
        );
}
function f() {
    (0, i.Mr3)(u);
}
function p(e) {
    let { message: t, failedDestinations: a, forwardOptions: o } = e;
    (0, i.ZDy)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e("86590").then(n.bind(n, 384331));
        return (n) =>
            (0, r.jsx)(
                e,
                c(s({}, n), {
                    message: t,
                    failedDestinations: a,
                    forwardOptions: o,
                }),
            );
    });
}
