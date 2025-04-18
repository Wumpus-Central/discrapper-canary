n.d(t, {
    F7: () => O,
    WA: () => g,
    s2: () => E,
    wo: () => v,
    yp: () => I
});
var r = n(200651);
n(192379);
var i = n(853872),
    a = n(409813),
    o = n(276442),
    s = n(793541),
    l = n(380898),
    c = n(713316),
    u = n(710094),
    d = n(865921),
    f = n(388032);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = {
        key: null,
        renderStep: (e) => (0, r.jsx)(d.v, p({}, e))
    },
    E = {
        key: a.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, r.jsx)(
                o.J,
                m(p({}, e), {
                    breadcrumbSteps: [a.h8.ADD_PAYMENT_STEPS, a.h8.REVIEW, a.h8.CONFIRM],
                    onReturn: () => {
                        0 === Object.keys(i.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(a.h8.REVIEW, { trackedFromStep: a.h8.ADD_PAYMENT_STEPS });
                    }
                })
            ),
        options: { renderHeader: !0 }
    },
    b = {
        key: a.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, r.jsx)(l.Z, {})
    },
    y = {
        key: a.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, r.jsx)(s.Z, {}),
        options: { renderHeader: !0 }
    },
    v = {
        key: a.h8.REVIEW,
        renderStep: (e) => (0, r.jsx)(u.l, p({}, e)),
        options: { useBreadcrumbLabel: () => f.NW.string(f.t.QBnNHh) }
    },
    O = {
        key: a.h8.CONFIRM,
        renderStep: (e) => (0, r.jsx)(c.w, p({}, e))
    },
    I = [b, y];
