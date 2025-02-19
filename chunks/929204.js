n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(626135),
    a = n(981631);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e) {
    o.default.track(a.rMx.OPEN_MODAL, {
        type: a.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
        location: e
    }),
        (0, i.ZDy)(async () => {
            let { default: e } = await n.e('75613').then(n.bind(n, 72691));
            return (t) => (0, r.jsx)(e, l({}, t));
        });
}
