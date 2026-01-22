n.d(t, { p: () => f });
var r = n(627968);
n(64700);
var i = n(295405),
    a = n(937008),
    s = n(166532),
    o = n(735305);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = {
        key: s.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, r.jsx)(_, c({}, e)),
        options: { renderHeader: !0 },
    },
    p = (e, t) => {
        if (0 === Object.keys(i.A.paymentSources).length) {
            if (t) return void e.handleStepChange(s.pn.GIFT_CUSTOMIZATION);
            e.handleClose();
        } else e.handleStepChange(s.pn.REVIEW, { trackedFromStep: s.pn.ADD_PAYMENT_STEPS });
    };
function _(e) {
    let { isGift: t } = (0, a.Pv)();
    return (0, r.jsx)(
        o.x,
        d(c({}, e), {
            breadcrumbSteps: [s.pn.ADD_PAYMENT_STEPS, s.pn.REVIEW, s.pn.CONFIRM],
            onReturn: () => p(e, t),
        }),
    );
}
